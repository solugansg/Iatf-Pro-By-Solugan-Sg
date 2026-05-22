const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

const srcDir = __dirname;
const distDir = path.join(__dirname, 'dist');

// Asegurar que exista la carpeta dist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Archivos que se copian tal cual
const filesToCopy = ['index.html', 'style.css', 'lucide.min.js', 'sw.js', 'manifest.json', 'icon-192.jpg', 'icon-512.jpg'];

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

// Leer y ofuscar app.js
const appJsPath = path.join(srcDir, 'app.js');
if (fs.existsSync(appJsPath)) {
  const appJsCode = fs.readFileSync(appJsPath, 'utf8');
  console.log('Ofuscando app.js para proteger fórmulas...');
  
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
  
  fs.writeFileSync(path.join(distDir, 'app.js'), obfuscationResult.getObfuscatedCode(), 'utf8');
  console.log('app.js ofuscado exitosamente en dist/app.js');
} else {
  console.error('Error: No se encontró app.js');
  process.exit(1);
}

console.log('¡Construcción finalizada con éxito!');
