const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');

code = code.replace('};\\\\n\\\\n// Ejecutar al cargar', '};\\n\\n// Ejecutar al cargar');
code = code.replace('};\\n\\n// Ejecutar al cargar', '};\\n\\n// Ejecutar al cargar'); 

// to be safe, just split and join on the exact string
code = code.split('};\\\\n\\\\n// Ejecutar').join('};\\n\\n// Ejecutar');

fs.writeFileSync(file, code, 'utf8');
console.log('Fixed literal \\\\n\\\\n');
