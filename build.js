const fs   = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

const srcDir  = __dirname;
const distDir = path.join(__dirname, 'dist');

// ─── FUENTE ÚNICA DE VERSIÓN ──────────────────────────────────────────────────
// Solo edita "version" en package.json. El build lo inyecta en todos los
// archivos automáticamente. Nunca edites la versión en index.html ni en
// service-worker.js directamente.
const pkg     = JSON.parse(fs.readFileSync(path.join(srcDir, 'package.json'), 'utf8'));
const VERSION = pkg.version.trim();          // Ej: "V 260530.1"
const V_SLUG  = VERSION.replace(/\s+/g, ''); // Ej: "V260530.1"  (para cache names)
console.log(`\n🔖  Versión del build: ${VERSION}\n`);

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function copyFolderRecursiveSync(source, target) {
  ensureDir(target);
  if (fs.lstatSync(source).isDirectory()) {
    fs.readdirSync(source).forEach(file => {
      const src = path.join(source, file);
      const tgt = path.join(target, file);
      fs.lstatSync(src).isDirectory()
        ? copyFolderRecursiveSync(src, tgt)
        : fs.copyFileSync(src, tgt);
    });
  }
}

// ─── INYECCIÓN DE VERSIÓN ─────────────────────────────────────────────────────
// Reemplaza cualquier versión hardcodeada por la que está en package.json.
// Patrones cubiertos:
//   v2.8.64        → VERSION         (display sidebar / header móvil)
//   V 260530.1     → VERSION         (versiones fecha ya escritas)
//   ?v=cualquier   → ?v=V_SLUG       (cache-busting del <script>)
//   iatfpro-v…     → iatfpro-V_SLUG  (CACHE_NAME del service worker)
//   Service Worker v… → Service Worker VERSION
function injectVersion(content) {
  content = content.replace(/iatfpro-v[\w.]+/gi,         `iatfpro-${V_SLUG.toLowerCase()}`);
  content = content.replace(/(Service Worker\s+)v[\w.]+/gi, `$1${VERSION}`);
  content = content.replace(/app\.js\?v=[\w.]+/g,        `app.js?v=${V_SLUG}`);
  content = content.replace(/\bv\d+\.\d+\.\d+\b/g,       VERSION);
  content = content.replace(/\bV\s+\d{6}\.\d+\b/g,       VERSION);
  return content;
}

ensureDir(distDir);

// ─── ARCHIVOS CON INYECCIÓN DE VERSIÓN ───────────────────────────────────────
['index.html', 'service-worker.js'].forEach(file => {
  const srcPath  = path.join(srcDir, file);
  const destPath = path.join(distDir, file);
  if (!fs.existsSync(srcPath)) { console.warn(`No encontrado: ${file}`); return; }
  let content = fs.readFileSync(srcPath, 'utf8');
  content = injectVersion(content);
  fs.writeFileSync(destPath, content, 'utf8');
  console.log(`Copiado (versión inyectada): ${file}`);
});

// ─── ARCHIVOS QUE SE COPIAN TAL CUAL ─────────────────────────────────────────
[
  'style.css', 'lucide.min.js', 'manifest.json',
  'icon-192.png', 'icon-512.png', 'apple-touch-icon.png',
  'Logo Iatf Pro.png', 'robots.txt'
].forEach(file => {
  const srcPath  = path.join(srcDir, file);
  const destPath = path.join(distDir, file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copiado: ${file}`);
  } else {
    console.warn(`No encontrado: ${file}`);
  }
});

// ─── DIRECTORIOS COMPLETOS ────────────────────────────────────────────────────
['libs', 'fonts'].forEach(dir => {
  const srcPath  = path.join(srcDir, dir);
  const destPath = path.join(distDir, dir);
  if (fs.existsSync(srcPath)) {
    copyFolderRecursiveSync(srcPath, destPath);
    console.log(`Directorio copiado: ${dir}`);
  } else {
    console.warn(`Directorio no encontrado: ${dir}`);
  }
});

// ─── OFUSCAR app.js ───────────────────────────────────────────────────────────
const appJsPath = path.join(srcDir, 'app.js');
if (!fs.existsSync(appJsPath)) {
  console.error('Error: No se encontró app.js');
  process.exit(1);
}

const appJsCode = fs.readFileSync(appJsPath, 'utf8');
console.log('\nOfuscando app.js para proteger fórmulas...');

const obfuscated = JavaScriptObfuscator.obfuscate(appJsCode, {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.8,
  deadCodeInjection: false,
  debugProtection: false,
  disableConsoleOutput: false,
  numbersToExpressions: true,
  simplify: true,
  stringArray: true,
  stringArrayEncoding: ['base64'],
  stringArrayThreshold: 0.8,
  splitStrings: true,
  splitStringsChunkLength: 5,
  unicodeEscapeSequence: true
});

fs.writeFileSync(path.join(distDir, 'app.js'), obfuscated.getObfuscatedCode(), 'utf8');
console.log('app.js ofuscado exitosamente en dist/app.js');

console.log(`\n✅  Build ${VERSION} finalizado con éxito!\n`);
