import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

// ─────────────────────────────────────────────
//  LENIS — Smooth Scroll
// ─────────────────────────────────────────────
let lenisScrollY = 0;
const splashScreen = document.getElementById('splash-screen');
const splashMinimumVisibleMs = 900;
const splashStartedAt = performance.now();

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

function resetScrollPosition(lenisInstance) {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  lenisScrollY = 0;
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true, force: true });
  }
}

function initLenis() {
  if (typeof Lenis === 'undefined') {
    window.addEventListener('scroll', () => { lenisScrollY = window.scrollY; });
    return null;
  }
  const lenis = new Lenis({
    lerp: 0.02,
    smoothWheel: true,
    wheelMultiplier: 0.45,
  });
  lenis.on('scroll', ({ scroll }) => { lenisScrollY = scroll; });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  return lenis;
}

function hideSplashScreen() {
  if (!splashScreen || splashScreen.classList.contains('is-hidden')) return;
  const elapsed = performance.now() - splashStartedAt;
  const remaining = Math.max(splashMinimumVisibleMs - elapsed, 0);

  window.setTimeout(() => {
    splashScreen.classList.add('is-hidden');
    document.body.classList.remove('is-loading');
  }, remaining);
}

function onBikeModelReady() {
  hideSplashScreen();
}

function initSmoothAnchorLinks(lenisInstance) {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (event) => {
      const targetSelector = link.getAttribute('href');
      if (!targetSelector || targetSelector === '#') return;

      const targetElement = document.querySelector(targetSelector);
      if (!targetElement) return;

      event.preventDefault();
      if (lenisInstance) {
        lenisInstance.scrollTo(targetElement, { duration: 1.1 });
      } else {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      history.replaceState(null, '', targetSelector);
    });
  });
}

// ─────────────────────────────────────────────
//  THREE.JS — Renderer + Scene
// ─────────────────────────────────────────────
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.4;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x080800);
scene.fog = new THREE.FogExp2(0x080800, 0.038);

const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0.9, 3.35);

// ─────────────────────────────────────────────
//  LUCES
// ─────────────────────────────────────────────
scene.add(new THREE.AmbientLight(0xfff5cc, 0.5));

const keyLight = new THREE.DirectionalLight(0xfff8e0, 3.5);
keyLight.position.set(3, 8, 4);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0xf5c518, 2.2);
rimLight.position.set(-5, 2, -5);
scene.add(rimLight);

const fillLight = new THREE.DirectionalLight(0x223344, 0.6);
fillLight.position.set(0, -2, 5);
scene.add(fillLight);

const sideLight = new THREE.DirectionalLight(0xf5c518, 0.8);
sideLight.position.set(0, 1, -6);
scene.add(sideLight);

// ─────────────────────────────────────────────
//  PARTICULAS
// ─────────────────────────────────────────────
function createParticles() {
  const count = 1500;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors    = new Float32Array(count * 3);
  const color = new THREE.Color();
  for (let i = 0; i < count; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 28;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 28;
    color.setHSL(0.145, Math.random() * 0.5 + 0.5, 0.55 + Math.random() * 0.3);
    colors[i * 3 + 0] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));
  return new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.038, vertexColors: true, transparent: true, opacity: 0.55, sizeAttenuation: true }));
}
const particles = createParticles();
scene.add(particles);

// ─────────────────────────────────────────────
//  GRUPO MOTO
// ─────────────────────────────────────────────
const bikeGroup = new THREE.Group();
scene.add(bikeGroup);

// ─────────────────────────────────────────────
//  MOTO PROCEDURAL AMARILLA
// ─────────────────────────────────────────────
function buildProceduralBike() {
  const group = new THREE.Group();

  const bodyPaint  = new THREE.MeshStandardMaterial({ color: 0xf5c518, metalness: 0.48, roughness: 0.16 });
  const bodyDark   = new THREE.MeshStandardMaterial({ color: 0xc8930a, metalness: 0.5,  roughness: 0.2  });
  const aluminum   = new THREE.MeshStandardMaterial({ color: 0x9aabb8, metalness: 0.92, roughness: 0.12 });
  const chrome     = new THREE.MeshStandardMaterial({ color: 0xe0e0e0, metalness: 1.0,  roughness: 0.02 });
  const rubber     = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.0,  roughness: 0.92 });
  const carbonFiber= new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.1,  roughness: 0.65 });
  const engineMat  = new THREE.MeshStandardMaterial({ color: 0x2e2e30, metalness: 0.72, roughness: 0.42 });
  const gold       = new THREE.MeshStandardMaterial({ color: 0xc8941a, metalness: 0.95, roughness: 0.12 });
  const titanium   = new THREE.MeshStandardMaterial({ color: 0x857560, metalness: 0.82, roughness: 0.22 });
  const glassML    = new THREE.MeshStandardMaterial({ color: 0xffffee, emissive: 0xffffaa, emissiveIntensity: 2.2, transparent: true, opacity: 0.92 });
  const redLight   = new THREE.MeshStandardMaterial({ color: 0xff1a00, emissive: 0xff1100, emissiveIntensity: 1.8, transparent: true, opacity: 0.88 });
  const darkGlass  = new THREE.MeshStandardMaterial({ color: 0x0d1a20, metalness: 0.15, roughness: 0.04, transparent: true, opacity: 0.7 });
  const drlMat     = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 3 });
  const yellowGlow = new THREE.MeshStandardMaterial({ color: 0xf5c518, emissive: 0xf5c518, emissiveIntensity: 1.2 });

  function addTube(p1, p2, radius, mat) {
    const dir = new THREE.Vector3().subVectors(p2, p1);
    const len = dir.length();
    const geo = new THREE.CylinderGeometry(radius, radius, len, 8);
    const m   = new THREE.Mesh(geo, mat);
    m.position.copy(p1).addScaledVector(dir.clone().normalize(), len / 2);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
    group.add(m);
  }

  function buildWheel(posX) {
    const wg = new THREE.Group();
    wg.position.x = posX;
    wg.add(new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.088, 20, 52), rubber));
    wg.add(new THREE.Mesh(new THREE.TorusGeometry(0.245, 0.016, 8, 40), aluminum));
    wg.add(new THREE.Mesh(new THREE.TorusGeometry(0.21, 0.007, 6, 36), aluminum));
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.14, 18), aluminum);
    hub.rotation.z = Math.PI / 2; wg.add(hub);
    const axle = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.22, 10), chrome);
    axle.rotation.z = Math.PI / 2; wg.add(axle);
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const sin = Math.sin(angle), cos = Math.cos(angle);
      for (const side of [-1, 1]) {
        const start = new THREE.Vector3(side * 0.025, sin * 0.055, cos * 0.055);
        const end   = new THREE.Vector3(side * 0.03,  sin * 0.235, cos * 0.235);
        const dir = new THREE.Vector3().subVectors(end, start);
        const len = dir.length();
        const sg = new THREE.CylinderGeometry(0.007, 0.007, len, 5);
        const sm = new THREE.Mesh(sg, aluminum);
        sm.position.copy(start).addScaledVector(dir.clone().normalize(), len / 2);
        sm.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
        wg.add(sm);
      }
    }
    const disc = new THREE.Mesh(new THREE.TorusGeometry(0.175, 0.01, 6, 36), chrome);
    disc.position.x = 0.072; wg.add(disc);
    const caliper = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.1, 0.055), gold);
    caliper.position.set(0.072, -0.18, 0.065); wg.add(caliper);
    group.add(wg);
  }

  buildWheel(-0.74); buildWheel(0.74);

  addTube(new THREE.Vector3(-0.52, 0.44,  0.09), new THREE.Vector3( 0.32, 0.74,  0.09), 0.032, aluminum);
  addTube(new THREE.Vector3(-0.52, 0.44, -0.09), new THREE.Vector3( 0.32, 0.74, -0.09), 0.032, aluminum);
  addTube(new THREE.Vector3( 0.32, 0.74,  0.09), new THREE.Vector3( 0.52, 0.54,  0.09), 0.028, aluminum);
  addTube(new THREE.Vector3( 0.32, 0.74, -0.09), new THREE.Vector3( 0.52, 0.54, -0.09), 0.028, aluminum);
  addTube(new THREE.Vector3( 0.52, 0.54,  0.09), new THREE.Vector3( 0.56, 0.08,  0.07), 0.025, aluminum);
  addTube(new THREE.Vector3( 0.52, 0.54, -0.09), new THREE.Vector3( 0.56, 0.08, -0.07), 0.025, aluminum);
  addTube(new THREE.Vector3(-0.52, 0.44,  0.08), new THREE.Vector3(-0.74, 0.06,  0.05), 0.022, aluminum);
  addTube(new THREE.Vector3(-0.52, 0.44, -0.08), new THREE.Vector3(-0.74, 0.06, -0.05), 0.022, aluminum);
  addTube(new THREE.Vector3(-0.52, 0.44,  0.08), new THREE.Vector3(-0.88, 0.52, 0.045), 0.016, aluminum);
  addTube(new THREE.Vector3(-0.52, 0.44, -0.08), new THREE.Vector3(-0.88, 0.52,-0.045), 0.016, aluminum);
  addTube(new THREE.Vector3(-0.46, 0.07, 0.06),  new THREE.Vector3(-0.74, 0.04, 0.06),  0.024, aluminum);
  addTube(new THREE.Vector3(-0.46, 0.07,-0.06),  new THREE.Vector3(-0.74, 0.04,-0.06),  0.024, aluminum);
  addTube(new THREE.Vector3(-0.4, 0.44, 0),      new THREE.Vector3(-0.56, 0.07, 0),     0.02,  aluminum);

  const springGeo = new THREE.TorusGeometry(0.032, 0.009, 6, 14);
  for (let i = 0; i < 6; i++) {
    const sp = new THREE.Mesh(springGeo, yellowGlow);
    sp.position.set(-0.44 - i * 0.024, 0.32 - i * 0.04, 0);
    sp.rotation.x = Math.PI / 2; group.add(sp);
  }

  addTube(new THREE.Vector3(0.52, 0.54,  0.085), new THREE.Vector3(0.72, 0.02,  0.085), 0.028, carbonFiber);
  addTube(new THREE.Vector3(0.52, 0.54, -0.085), new THREE.Vector3(0.72, 0.02, -0.085), 0.028, carbonFiber);
  addTube(new THREE.Vector3(0.62, 0.33,  0.085), new THREE.Vector3(0.72, 0.02,  0.085), 0.021, gold);
  addTube(new THREE.Vector3(0.62, 0.33, -0.085), new THREE.Vector3(0.72, 0.02, -0.085), 0.021, gold);
  const tija = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.042, 0.2), aluminum);
  tija.position.set(0.52, 0.58, 0); group.add(tija);

  const block = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.3, 0.25), engineMat);
  block.position.set(0.1, 0.11, 0); group.add(block);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.07, 0.24), aluminum);
  head.position.set(0.1, 0.305, 0); group.add(head);
  for (let i = 0; i < 4; i++) {
    const cz = -0.09 + i * 0.062;
    const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.027, 0.03, 0.22, 10), engineMat);
    cyl.position.set(0.1, 0.37, cz); group.add(cyl);
    const cylHead = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.034, 10), aluminum);
    cylHead.position.set(0.1, 0.485, cz); group.add(cylHead);
  }
  const sump = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.08, 0.14, 10), engineMat);
  sump.rotation.z = Math.PI / 2; sump.position.set(0.08, -0.065, 0); group.add(sump);

  const colectorOffsets = [-0.09, -0.03, 0.03, 0.09];
  colectorOffsets.forEach(cz => {
    const pts = [
      new THREE.Vector3(0.1, 0.12, cz),
      new THREE.Vector3(0.05, 0.02, cz * 0.8 + 0.05),
      new THREE.Vector3(-0.1, -0.04, 0.19),
      new THREE.Vector3(-0.3, -0.04, 0.19),
    ];
    group.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 18, 0.014, 8, false), chrome));
  });
  const silencer = new THREE.Mesh(new THREE.CylinderGeometry(0.046, 0.038, 0.38, 14), titanium);
  silencer.rotation.z = Math.PI / 2; silencer.position.set(-0.57, -0.025, 0.195); group.add(silencer);
  const silencerTip = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.046, 0.055, 12), chrome);
  silencerTip.rotation.z = Math.PI / 2; silencerTip.position.set(-0.78, -0.025, 0.195); group.add(silencerTip);

  const upperFairing = new THREE.Mesh(new THREE.SphereGeometry(0.26, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.52), bodyPaint);
  upperFairing.scale.set(1.4, 0.9, 0.72); upperFairing.position.set(0.66, 0.43, 0); upperFairing.rotation.z = Math.PI * 0.5; group.add(upperFairing);

  const sideR = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 10, Math.PI * 0.5, Math.PI, 0.18, Math.PI * 0.6), bodyPaint);
  sideR.scale.set(1.45, 0.78, 0.52); sideR.position.set(0.2, 0.24, 0.13); group.add(sideR);
  const sideL = sideR.clone(); sideL.position.z = -0.13; sideL.scale.z *= -1; group.add(sideL);

  const bellypan = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.68, 6, 10), bodyDark);
  bellypan.rotation.z = Math.PI / 2; bellypan.scale.set(1, 0.48, 0.52); bellypan.position.set(0.13, -0.022, 0); group.add(bellypan);

  const tankGeo = new THREE.SphereGeometry(0.22, 16, 12);
  tankGeo.scale(1.55, 0.88, 0.74);
  const tank = new THREE.Mesh(tankGeo, bodyPaint);
  tank.position.set(0.04, 0.66, 0); group.add(tank);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.033, 0.033, 0.018, 14), chrome);
  cap.position.set(0.08, 0.875, 0); group.add(cap);

  const seatBody = new THREE.CapsuleGeometry(0.088, 0.36, 6, 12);
  seatBody.rotateZ(Math.PI / 2);
  const seat = new THREE.Mesh(seatBody, carbonFiber);
  seat.scale.set(1, 0.44, 0.78); seat.position.set(-0.22, 0.78, 0); group.add(seat);

  const tailGeo = new THREE.CapsuleGeometry(0.09, 0.42, 6, 10);
  tailGeo.rotateZ(-Math.PI / 2);
  const tailPanel = new THREE.Mesh(tailGeo, bodyPaint);
  tailPanel.scale.set(1, 0.52, 0.48); tailPanel.position.set(-0.74, 0.6, 0); group.add(tailPanel);
  const rearLight = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.042, 0.13), redLight);
  rearLight.position.set(-0.98, 0.52, 0); group.add(rearLight);

  const faringNose = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), bodyPaint);
  faringNose.rotation.z = Math.PI; faringNose.position.set(0.945, 0.43, 0); group.add(faringNose);
  const hlGlass = new THREE.Mesh(new THREE.CircleGeometry(0.088, 14), glassML);
  hlGlass.position.set(1.0, 0.43, 0); hlGlass.rotation.y = Math.PI / 2; group.add(hlGlass);
  const drl = new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.007, 5, 22), drlMat);
  drl.position.set(1.01, 0.43, 0); drl.rotation.y = Math.PI / 2; group.add(drl);

  const windscreen = new THREE.Mesh(new THREE.SphereGeometry(0.21, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.38), darkGlass);
  windscreen.scale.set(0.55, 1.05, 0.48); windscreen.position.set(0.62, 0.74, 0); windscreen.rotation.z = Math.PI * 0.5; group.add(windscreen);

  for (const side of [-1, 1]) {
    const clipon = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.21, 8), aluminum);
    clipon.rotation.z = Math.PI / 2; clipon.position.set(0.5, 0.67, side * 0.1); group.add(clipon);
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.017, 0.07, 8), rubber);
    grip.rotation.z = Math.PI / 2; grip.position.set(0.5, 0.67, side * 0.205); group.add(grip);
  }

  const shadowMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(2.5, 0.72),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false })
  );
  shadowMesh.rotation.x = -Math.PI / 2; shadowMesh.position.set(0, -0.31, 0); group.add(shadowMesh);

  return group;
}

// ─────────────────────────────────────────────
//  CARGA GLB
// ─────────────────────────────────────────────
function loadGLTF(url) {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  loader.load(
    url,
    (gltf) => {
      const model = gltf.scene;
      model.traverse(child => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) child.material.envMapIntensity = 1.4;
        }
      });
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2.2 / maxDim;
      model.scale.setScalar(scale);
      model.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale);
      model.position.y -= 0.3;
      bikeGroup.add(model);
      onBikeModelReady();
    },
    undefined,
    () => {
      console.warn('triumph_motorbike.glb no encontrado — usando moto procedural.');
      bikeGroup.add(buildProceduralBike());
      onBikeModelReady();
    }
  );
}

loadGLTF('./triumph_motorbike.glb');

// ─────────────────────────────────────────────
//  KEYFRAMES por secciones
//  Hero fijo, motor con zoom/perfil, chasis frontal,
//  tech con alejamiento y about vuelve al estado principal.
// ─────────────────────────────────────────────
const keyframes = [
  { p: 0.00, ry: 0.30,               rz: 0.00,  x: 0.00,  y: 0.00,  s: 1.15, camZ: 3.35 },
  { p: 0.14, ry: 0.30,               rz: 0.00,  x: 0.00,  y: 0.00,  s: 1.15, camZ: 3.35 },
  { p: 0.32, ry: Math.PI * 0.5 + 0.2,rz: 0.02,  x: 0.52,  y: 0.3,   s: 1.34, camZ: 2.35 },
  { p: 0.54, ry: -Math.PI * 0.5 + 0.18, rz: -0.02, x: -0.48, y: 0.03, s: 1.20, camZ: 3.00 },
  { p: 0.68, ry: 0.10,               rz: -0.03, x: -0.18, y: -0.05, s: 0.92, camZ: 4.45 },
  { p: 0.88, ry: 0.30,               rz: 0.00,  x: 0.00,  y: 0.00,  s: 1.15, camZ: 3.35 },
  { p: 1.00, ry: 0.30,               rz: 0.00,  x: 0.00,  y: 0.00,  s: 1.15, camZ: 3.35 },
];

const cursorRot = {
  targetY: 0,
  targetZ: 0,
  currentY: 0,
  currentZ: 0,
};

window.addEventListener('pointermove', (event) => {
  const nx = (event.clientX / window.innerWidth) * 2 - 1;
  const ny = (event.clientY / window.innerHeight) * 2 - 1;
  cursorRot.targetY = nx * 0.06;
  cursorRot.targetZ = -ny * 0.025;
});

window.addEventListener('pointerleave', () => {
  cursorRot.targetY = 0;
  cursorRot.targetZ = 0;
});

function lerp(a, b, t) { return a + (b - a) * t; }
function easeInOut(t)  { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

function getKF(progress) {
  let prev = keyframes[0], next = keyframes[keyframes.length - 1];
  for (let i = 0; i < keyframes.length - 1; i++) {
    if (progress >= keyframes[i].p && progress <= keyframes[i + 1].p) {
      prev = keyframes[i]; next = keyframes[i + 1]; break;
    }
  }
  const range = next.p - prev.p;
  const t = range === 0 ? 0 : easeInOut((progress - prev.p) / range);
  return {
    ry:   lerp(prev.ry,   next.ry,   t),
    rz:   lerp(prev.rz,   next.rz,   t),
    x:    lerp(prev.x,    next.x,    t),
    y:    lerp(prev.y,    next.y,    t),
    s:    lerp(prev.s,    next.s,    t),
    camZ: lerp(prev.camZ, next.camZ, t),
  };
}

function getLockedProgress(progress) {
  if (progress >= 0.18 && progress < 0.42) return 0.32;
  if (progress >= 0.42 && progress < 0.56) return 0.54;
  if (progress >= 0.56 && progress < 0.82) return 0.68;
  return progress;
}

// ─────────────────────────────────────────────
//  GSAP ScrollTrigger — animar textos
// ─────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('.feature-content').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: el.closest('.feature-section'),
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });

    const motorPoints = gsap.utils.toArray('.motor-point');
    if (motorPoints.length) {
      gsap.fromTo(
        motorPoints,
        { opacity: 0, x: -28 },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#section-cockpit',
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }

    const chassisPoints = gsap.utils.toArray('.chassis-point');
    if (chassisPoints.length) {
      gsap.fromTo(
        chassisPoints,
        { opacity: 0, x: 28 },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#section-chassis',
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }

    const techPoints = gsap.utils.toArray('.tech-point');
    if (techPoints.length) {
      gsap.fromTo(
        techPoints,
        { opacity: 0, x: -28 },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#section-tech',
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }

    const pricingCards = gsap.utils.toArray('.pricing-card');
    if (pricingCards.length) {
      gsap.fromTo(
        pricingCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#section-pricing',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }

    const storyPanel = document.querySelector('.story-panel');
    if (storyPanel) {
      gsap.fromTo(
        storyPanel,
        { opacity: 0, y: 46 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#section-beyond',
            start: 'top 82%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }
  }, 200);
});

// ─────────────────────────────────────────────
//  RESIZE
// ─────────────────────────────────────────────
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// ─────────────────────────────────────────────
//  LENIS INIT
// ─────────────────────────────────────────────
const lenis = initLenis();
resetScrollPosition(lenis);
initSmoothAnchorLinks(lenis);

window.addEventListener('load', () => {
  resetScrollPosition(lenis);
});

const reloadPageButton = document.getElementById('reload-page');
if (reloadPageButton) {
  reloadPageButton.addEventListener('click', () => {
    resetScrollPosition(lenis);
    window.location.reload();
  });
}

// ─────────────────────────────────────────────
//  RENDER LOOP con inercia suave
// ─────────────────────────────────────────────
const progressBar = document.getElementById('progress-bar');
const clock = new THREE.Clock();
let currentRY = 0.3, currentRZ = 0, currentX = 0, currentY = 0, currentS = 1.15, currentCamZ = 3.35;

function animate() {
  requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress  = maxScroll > 0 ? Math.min(lenisScrollY / maxScroll, 1) : 0;

  if (progressBar) progressBar.style.width = (progress * 100) + '%';

  const lockedProgress = getLockedProgress(progress);
  const kf   = getKF(lockedProgress);
  const ease = 0.14;
  currentRY   += (kf.ry   - currentRY)   * ease;
  currentRZ   += (kf.rz   - currentRZ)   * ease;
  currentX    += (kf.x    - currentX)    * ease;
  currentY    += (kf.y    - currentY)    * ease;
  currentS    += (kf.s    - currentS)    * ease;
  currentCamZ += (kf.camZ - currentCamZ) * ease;

  cursorRot.currentY += (cursorRot.targetY - cursorRot.currentY) * 0.08;
  cursorRot.currentZ += (cursorRot.targetZ - cursorRot.currentZ) * 0.08;

  bikeGroup.rotation.y = currentRY + cursorRot.currentY;
  bikeGroup.rotation.z = currentRZ + cursorRot.currentZ;
  bikeGroup.position.x = currentX + 0.32;
  bikeGroup.position.y = currentY + 0.18;
  bikeGroup.scale.setScalar(currentS);

  camera.position.z = currentCamZ;

  particles.rotation.y = elapsed * 0.04;
  particles.rotation.x = Math.sin(elapsed * 0.15) * 0.05;

  renderer.render(scene, camera);
}

animate();
