const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');

// Using String.raw means we don't have to worry about escaping backslashes in the literal
code = code.replace(String.raw`};\n\n// Ejecutar`, '};\\n\\n// Ejecutar');

fs.writeFileSync(file, code, 'utf8');
console.log('Fixed literal backslash-n with String.raw');
