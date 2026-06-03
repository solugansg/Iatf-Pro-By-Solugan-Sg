const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');

// The string we want to replace has literal '\' followed by 'n'.
// So we use a regex to match it and replace it with real newlines.

const index = code.indexOf(';\\r\\n};\\\\n\\\\n// Ejecutar');
if (index !== -1) {
  code = code.replace(';\\r\\n};\\\\n\\\\n// Ejecutar', ';\\r\\n};\\n\\n// Ejecutar');
} else {
  // Let's use a regex to find any literal backslash-n that follows };
  code = code.replace(/\\};\\[r]?\\n\\[r]?\\n\/\/ Ejecutar/g, '};\\n\\n// Ejecutar');
  code = code.replace(/\\};\\\\n\\\\n\/\/ Ejecutar/g, '};\\n\\n// Ejecutar');
}

// Just to be absolutely safe, let's look for "};\n\n//" specifically
code = code.split('};\\\\n\\\\n//').join('};\\n\\n//');
code = code.split('};\\\\r\\\\n\\\\r\\\\n//').join('};\\n\\n//');

fs.writeFileSync(file, code, 'utf8');
console.log('Fixed specific syntax error');
