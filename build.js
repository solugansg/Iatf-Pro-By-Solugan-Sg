const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

const srcDir = __dirname;
const distDir = path.join(__dirname, 'dist');

// Asegurar que exista la carpeta dist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Función para copiar directorios de manera recursiva
function copyFolderRecursiveSync(source, target) {
  let files = [];
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(file => {
      const curSource = path.join(source, file);
      const curTarget = path.join(target, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, curTarget);
      } else {
        fs.copyFileSync(curSource, curTarget);
      }
    });
  }
}

// Archivos individuales que se copian tal cual
const filesToCopy = [
  'index.html', 
  'style.css', 
  'lucide.min.js', 
  'service-worker.js', 
  'manifest.json', 
  'icon-192.png', 
  'icon-512.png', 
  'apple-touch-icon.png', 
  'Logo Iatf Pro.png',
  'robots.txt'
];

filesToCopy.forEach(file => {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(distDir, file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copiado: ${file}`);
  } else {
    console.warn(`Archivo no encontrado para copiar: ${file}`);
  }
});

// Copiar directorios completos
const dirsToCopy = ['libs', 'fonts'];
dirsToCopy.forEach(dir => {
  const srcPath = path.join(srcDir, dir);
  const destPath = path.join(distDir, dir);
  if (fs.existsSync(srcPath)) {
    copyFolderRecursiveSync(srcPath, destPath);
    console.log(`Directorio copiado recursivamente: ${dir}`);
  } else {
    console.warn(`Directorio no encontrado para copiar: ${dir}`);
  }
});

// Leer y ofuscar app_v42.js
const appJsPath = path.join(srcDir, 'app_v42.js');
if (fs.existsSync(appJsPath)) {
  const appJsCode = fs.readFileSync(appJsPath, 'utf8');
  console.log('Ofuscando app_v42.js para proteger fórmulas...');
  
  const obfuscationResult = JavaScriptObfuscator.obfuscate(appJsCode, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.8,
    deadCodeInjection: false,
    debugProtection: false,
    disableConsoleOutput: false,
    numbersToExpressions: true, // Convierte números de las fórmulas a expresiones matemáticas complejas
    simplify: true,
    stringArray: true,
    stringArrayEncoding: ['base64'], // Codifica cadenas de texto en Base64
    stringArrayThreshold: 0.8,
    splitStrings: true,
    splitStringsChunkLength: 5,
    unicodeEscapeSequence: true // Convierte caracteres a hexadecimal unicode (\x61)
  });
  
  fs.writeFileSync(path.join(distDir, 'app_v42.js'), obfuscationResult.getObfuscatedCode(), 'utf8');
  console.log('app_v42.js ofuscado exitosamente en dist/app_v42.js');
} else {
  console.error('Error: No se encontró app_v42.js');
  process.exit(1);
}

console.log('¡Construcción finalizada con éxito!');
