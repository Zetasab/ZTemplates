// Generate real SSR index.html for TanStack Start templates.
// For each template: patch vite.config.ts (base ./ + nitro node-server),
// build, boot the node server, fetch the SSR HTML, post-process asset
// paths, inject a <base> + replaceState guard, write .output/public/index.html,
// then restore the original vite.config.ts.
//
// Usage: node scripts/ssr-previews.js [templateId ...]
const { spawn, spawnSync } = require('child_process');
const fs = require('fs');
const http = require('http');
const net = require('net');
const path = require('path');

const root = process.cwd();
const templatesDir = path.join(root, 'public', 'templates');
const portBase = 3200;

function isTanStack(dir) {
  const pkg = path.join(dir, 'package.json');
  if (!fs.existsSync(pkg)) return false;
  let pj;
  try { pj = JSON.parse(fs.readFileSync(pkg, 'utf8')); } catch { return false; }
  const deps = Object.assign({}, pj.dependencies, pj.devDependencies);
  return !!(deps && deps['@tanstack/react-start']);
}

function collectIds() {
  const args = process.argv.slice(2);
  if (args.length) return args;
  return fs.readdirSync(templatesDir)
    .filter((n) => fs.statSync(path.join(templatesDir, n)).isDirectory());
}

function patchViteConfig(dir) {
  const vc = path.join(dir, 'vite.config.ts');
  if (!fs.existsSync(vc)) return null;
  const orig = fs.readFileSync(vc, 'utf8');
  let patched = orig;
  const adds = [];
  if (!/nitro\s*:\s*\{[\s\S]*?preset\s*:\s*["']node-server/.test(patched)) {
    adds.push('nitro: { preset: "node-server" },');
  }
  if (!/vite\s*:\s*\{[\s\S]*?base\s*:\s*["']\.\/["']/.test(patched)) {
    adds.push('vite: { base: "./" },');
  }
  if (adds.length) {
    const first = patched.indexOf('export default defineConfig({');
    const anchor = 'export default defineConfig({';
    if (first === -1) return orig;
    const inject = '\n  ' + adds.join('\n  ');
    patched = patched.slice(0, first + anchor.length) + inject + patched.slice(first + anchor.length);
    fs.writeFileSync(vc, patched, 'utf8');
  }
  return orig;
}

function runBuild(dir) {
  const r = spawnSync('npm', ['run', 'build'], {
    cwd: dir, shell: true, encoding: 'utf8', timeout: 900000, maxBuffer: 64 * 1024 * 1024,
  });
  return { ok: r.status === 0, out: (r.stdout || '') + (r.stderr || '') };
}

function locateOutputs(dir) {
  const candidates = [
    { server: path.join('.output', 'server', 'index.mjs'), public: '.output/public' },
    { server: path.join('dist', 'server', 'index.mjs'), public: 'dist/client' },
    { server: path.join('.output', 'server', 'index.js'), public: '.output/public' },
    { server: path.join('dist', 'server', 'index.js'), public: 'dist/client' },
  ];
  for (const c of candidates) {
    if (fs.existsSync(path.join(dir, c.server))) return c;
  }
  return null;
}

function removeStaleAlternateOutputs(dir, keepPublic) {
  const alternates = ['.output/public', 'dist/client'].filter((p) => p !== keepPublic);
  for (const p of alternates) {
    const full = path.join(dir, p);
    if (fs.existsSync(full)) fs.rmSync(full, { recursive: true, force: true });
  }
}

function startServer(dir, serverFile, port) {
  return new Promise((resolve, reject) => {
    const env = Object.assign({}, process.env, {
      NITRO_PORT: String(port), NITRO_HOST: '127.0.0.1', NODE_ENV: 'production',
    });
    const child = spawn(process.execPath, [serverFile], { cwd: dir, env });
    let log = '';
    child.stdout.on('data', (d) => (log += d));
    child.stderr.on('data', (d) => (log += d));
    const deadline = Date.now() + 30000;
    const poll = () => {
      if (child.exitCode !== null) return reject(new Error('server exited early:\n' + log));
      if (Date.now() > deadline) {
        try { child.kill(); } catch {}
        return reject(new Error('server did not listen:\n' + log));
      }
      const c = net.createConnection({ host: '127.0.0.1', port });
      c.on('connect', () => { c.destroy(); resolve({ child, log: () => log }); });
      c.on('error', () => { c.destroy(); setTimeout(poll, 200); });
    };
    poll();
  });
}

function stopServer(proc) {
  try { proc.kill(); } catch {}
  try { process.kill(-proc.pid); } catch {}
}

function fetchHtml(port) {
  return new Promise((resolve, reject) => {
    const req = http.get(
      { host: '127.0.0.1', port, path: '/', agent: false, headers: { Accept: 'text/html' } },
      (res) => {
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (c) => (body += c));
        res.on('end', () => { req.destroy(); resolve({ status: res.statusCode, body }); });
      }
    );
    req.on('error', reject);
    req.setTimeout(20000, () => req.destroy(new Error('fetch timeout')));
  });
}

function transformSsrHtml(html) {
  let out = html;
  out = out.replace(/\/\.\/assets\//g, './assets/');
  out = out.replace(/(["'])assets\//g, '$1./assets/').replace(/href="\.\/\.\//g, 'href="./');
  out = out.replace(/(href|src)="\/(?!\/)/g, '$1="./');
  const inject =
    '<script>(function(){try{var h=location.href,p=h.lastIndexOf("/")+1,' +
    'b=document.createElement("base");b.href=h.slice(0,p);' +
    'document.head.insertBefore(b,document.head.firstChild);' +
    'history.replaceState(history.state,"","/")}catch(e){}})();</script>';
  const headIdx = out.indexOf('<head>');
  if (headIdx === -1) return out;
  return out.slice(0, headIdx + 6) + inject + out.slice(headIdx + 6);
}

function isSsrHtml(html) {
  return html.includes('$_TSR.router=') || html.includes('_sseHead') || /window\s*\.\s*\$_[A-Za-z]*TSR\s*\./.test(html);
}

function patchRouterForSsr(dir) {
  const candidates = ['src/router.tsx', 'src/router.ts', 'src/router.jsx', 'src/router.js'];
  for (const rel of candidates) {
    const f = path.join(dir, rel);
    if (!fs.existsSync(f)) continue;
    const orig = fs.readFileSync(f, 'utf8');
    const hasHash = /createHashHistory/.test(orig);
    const hasBrowser = /createBrowserHistory/.test(orig);
    if (!hasHash && !hasBrowser) continue;
    let patched = orig;
    patched = patched.replace(
      /import\s*\{([^}]*)\}\s*from\s*["']@tanstack\/react-router["']/,
      (m, inner) => {
        if (/createMemoryHistory/.test(inner)) return m;
        return 'import { ' + inner.trim().replace(/,\s*$/, '') + ', createMemoryHistory } from "@tanstack/react-router"';
      }
    );
    if (hasHash) {
      patched = patched.replace(
        /(history\s*:\s*)createHashHistory\(\)/g,
        '$1typeof document === "undefined" ? createMemoryHistory() : createHashHistory()'
      );
    }
    if (hasBrowser) {
      patched = patched.replace(
        /(history\s*:\s*)createBrowserHistory\(\)/g,
        '$1typeof document === "undefined" ? createMemoryHistory() : createBrowserHistory()'
      );
    }
    if (patched !== orig) {
      fs.writeFileSync(f, patched, 'utf8');
      return { file: f, orig };
    }
  }
  return null;
}

async function processTemplate(id, port) {
  const dir = path.join(templatesDir, id);
  const report = { id, status: 'skipped', reason: '' };
  if (!fs.existsSync(dir)) { report.reason = 'no dir'; return report; }
  if (!isTanStack(dir)) { report.reason = 'not TanStack Start'; return report; }

  const origConfig = patchViteConfig(dir);
  if (origConfig === null) { report.reason = 'no vite.config.ts'; return report; }
  const origRouter = patchRouterForSsr(dir);
  let server = null;
  try {
    const build = runBuild(dir);
    if (!build.ok) {
      report.status = 'failed'; report.reason = 'build failed'; report.log = build.out.slice(0, 4000);
      return report;
    }
    const loc = locateOutputs(dir);
    if (!loc) { report.status = 'failed'; report.reason = 'no server output dir found'; return report; }
    server = await startServer(dir, path.join(dir, loc.server), port);
    const res = await fetchHtml(port);
    const serverLog = server ? server.log() : '';
    stopServer(server); server = null;
    if (res.status !== 200) { report.status = 'failed'; report.reason = 'http ' + res.status; report.log = serverLog.slice(0, 3000); return report; }
    if (!isSsrHtml(res.body)) { report.status = 'failed'; report.reason = 'no SSR payload in response'; report.log = serverLog.slice(0, 3000); return report; }

    const finalHtml = transformSsrHtml(res.body);
    const out = path.join(dir, loc.public, 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, finalHtml, 'utf8');
    removeStaleAlternateOutputs(dir, loc.public);
    report.status = 'ok';
    report.bytes = finalHtml.length;
  } catch (e) {
    report.status = 'error'; report.reason = e.message;
  } finally {
    if (server) stopServer(server);
    if (origConfig !== null) fs.writeFileSync(path.join(dir, 'vite.config.ts'), origConfig, 'utf8');
    if (origRouter) fs.writeFileSync(origRouter.file, origRouter.orig, 'utf8');
  }
  return report;
}

(async () => {
  const ids = collectIds();
  const results = [];
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const r = await processTemplate(id, portBase + 1 + i);
    console.log(`[${r.status}] ${r.id} ${r.reason || (r.bytes + ' bytes')}`);
    if (r.log) console.log('    ' + r.log.split('\n').filter(Boolean).slice(0, 20).join('\n    '));
    results.push(r);
  }
  const ok = results.filter((r) => r.status === 'ok');
  const failed = results.filter((r) => r.status !== 'ok' && r.status !== 'skipped');
  console.log('\n=== SUMMARY ===');
  console.log('ok: ' + ok.map((r) => r.id).join(', '));
  console.log('failed: ' + failed.map((r) => r.id + '(' + r.reason + ')').join(', '));
  process.exit(0);
})();
