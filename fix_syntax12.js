const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file); // read as buffer

const search = Buffer.from('};\\r\\n\\r\\n// Ejecutar');
const replace = Buffer.from('};\\r\\n\\r\\n// Ejecutar');

// Wait, the bytes in the file are literal backslash, r, backslash, n.
// So search is buffer of chars: '}', ';', '\', 'r', '\', 'n' ...
const searchBytes = Buffer.from('};\\\\r\\\\n\\\\r\\\\n// Ejecutar');
const replaceBytes = Buffer.from('};\\r\\n\\r\\n// Ejecutar');

const index = code.indexOf(searchBytes);
if (index !== -1) {
  const newCode = Buffer.concat([
    code.slice(0, index),
    replaceBytes,
    code.slice(index + searchBytes.length)
  ]);
  fs.writeFileSync(file, newCode);
  console.log('Fixed buffer');
} else {
  console.log('Not found');
}
