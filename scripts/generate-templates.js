const fs = require('fs');
const path = require('path');

const templatesDir = path.join(process.cwd(), 'public', 'templates');
const outputFile = path.join(process.cwd(), 'public', 'templates.json');

function generateTanStackIndexHtml(dirPath) {
    // TanStack Start genera dist/client/assets/ pero sin index.html
    // Buscamos si hay assets JS/CSS y generamos un index.html que los cargue
    const clientAssetsDir = path.join(dirPath, 'dist', 'client', 'assets');
    const clientIndexPath = path.join(dirPath, 'dist', 'client', 'index.html');

    if (!fs.existsSync(clientAssetsDir)) return null;

    // Si ya tiene un index.html generado previamente, lo usamos tal cual
    if (fs.existsSync(clientIndexPath)) return 'dist/client/index.html';

    const assets = fs.readdirSync(clientAssetsDir);
    const cssFiles = assets.filter(f => f.endsWith('.css'));
    const jsFiles  = assets.filter(f => f.endsWith('.js'));

    if (jsFiles.length === 0) return null;

    // El entry JS de TanStack Start es el index-*.js MÁS GRANDE
    // (contiene React + vendor + el código de boot con hydrateRoot al final).
    // El más pequeño es solo el módulo de ruta (exporta `component`).
    const indexJsFiles = jsFiles.filter(f => f.startsWith('index-'));
    const candidatePool = indexJsFiles.length > 0 ? indexJsFiles : jsFiles;
    const entryJs = candidatePool.sort((a, b) => {
        const sizeA = fs.statSync(path.join(clientAssetsDir, a)).size;
        const sizeB = fs.statSync(path.join(clientAssetsDir, b)).size;
        return sizeB - sizeA; // DESC → el más grande primero
    })[0];

    const cssLinks  = cssFiles.map(f => `  <link rel="stylesheet" href="./assets/${f}">`).join('\n');
    const scriptTag = `  <script type="module" src="./assets/${entryJs}"></script>`;

    // TanStack Start usa hydrateRoot y espera window.$_TSR con datos SSR del servidor.
    // Sin servidor, inyectamos una estructura vacía para que hydrate() no tire invariant.
    const tsrMock = `  <script>window.$_TSR={router:{matches:[],manifest:undefined,dehydratedData:undefined},buffer:[],initialized:false,h:function(){}}</script>`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>App Preview</title>
${cssLinks}
${tsrMock}
</head>
<body>
${scriptTag}
</body>
</html>`;

    fs.writeFileSync(clientIndexPath, html, 'utf-8');
    console.log(`  → Generated TanStack index.html using entry: ${entryJs}`);
    return 'dist/client/index.html';
}

function fixReactPaths(dirPath) {
    // 1. Detectar TanStack Start (dist/client/assets/ sin index.html)
    const tanStackPath = generateTanStackIndexHtml(dirPath);
    if (tanStackPath) return tanStackPath;

    // 2. Buscar index.html estándar en dist/ o build/ o raíz
    let indexPath = path.join(dirPath, 'dist', 'index.html');
    let relativeBase = 'dist/index.html';

    if (!fs.existsSync(indexPath)) {
        indexPath = path.join(dirPath, 'build', 'index.html');
        relativeBase = 'build/index.html';
    }
    
    if (!fs.existsSync(indexPath)) {
        indexPath = path.join(dirPath, 'index.html');
        relativeBase = 'index.html';
    }

    if (!fs.existsSync(indexPath)) {
        // No valid index.html found anywhere — project likely not built yet
        const name = path.basename(dirPath);
        console.warn(`  ⚠ Skipping "${name}": no built index.html found. Run the project's build first.`);
        return null;
    }

    let content = fs.readFileSync(indexPath, 'utf-8');
    // Convierte las rutas absolutas (src="/assets/...") a relativas
    content = content.replace(/(href|src)=["']\/([^"']+)["']/g, '$1="./$2"');
    fs.writeFileSync(indexPath, content, 'utf-8');
    return relativeBase;
}

function generateTemplatesJson() {
    if (!fs.existsSync(templatesDir)) {
        fs.mkdirSync(templatesDir, { recursive: true });
    }

    const entries = fs.readdirSync(templatesDir, { withFileTypes: true });
    const templates = entries
        .filter(entry => entry.isDirectory())
        .map(entry => {
            const templatePath = path.join(templatesDir, entry.name);
            
            // Reparar automáticamente el index.html en dist/ u otro sitio y obtener la ruta en la que reside.
            const relativeHtmlPath = fixReactPaths(templatePath);

            let imagePath = null;
            if (fs.existsSync(path.join(templatePath, 'portada.png'))) {
                imagePath = `templates/${entry.name}/portada.png`;
            } else if (fs.existsSync(path.join(templatePath, 'portada.jpg'))) {
                imagePath = `templates/${entry.name}/portada.jpg`;
            }

            let gifPath = null;
            if (fs.existsSync(path.join(templatePath, 'portada_gif.gif'))) {
                gifPath = `templates/${entry.name}/portada_gif.gif`;
            }

            let zipPath = null;
            if (fs.existsSync(path.join(templatePath, 'descarga.zip'))) {
                zipPath = `templates/${entry.name}/descarga.zip`;
            }

            let langData = null;
            const langJsonPath = path.join(templatePath, 'languages.json');
            if (fs.existsSync(langJsonPath)) {
                try {
                    langData = JSON.parse(fs.readFileSync(langJsonPath, 'utf-8'));
                } catch (e) {
                    console.warn(`  ⚠ Could not parse languages.json for ${entry.name}`);
                }
            }

            // Si no hay build pero sí hay zip, se incluye igual con path null
            const hasAssets = zipPath || imagePath || gifPath || langData;
            if (relativeHtmlPath === null && !hasAssets) return null;

            return {
                id: entry.name,
                name: langData?.name ?? entry.name.replace(/-/g, ' ').toUpperCase(),
                description: langData?.description ?? null,
                language: langData?.language ?? null,
                technologies: langData?.technologies ?? [],
                path: relativeHtmlPath ? `templates/${entry.name}/${relativeHtmlPath}` : null,
                downloadPath: `templates/${entry.name}`,
                imagePath: imagePath,
                gifPath: gifPath,
                zipPath: zipPath
            };
        })
        .filter(Boolean);

    fs.writeFileSync(outputFile, JSON.stringify(templates, null, 2));
    console.log(`Generated templates.json with ${templates.length} templates.`);
}

generateTemplatesJson();