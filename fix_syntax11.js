const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');

// Replace the literal \r\n\r\n characters with actual newlines
code = code.split('};\\\\r\\\\n\\\\r\\\\n// Ejecutar').join('};\\r\\n\\r\\n// Ejecutar');
// Also check for literal \n\n just in case
code = code.split('};\\\\n\\\\n// Ejecutar').join('};\\r\\n\\r\\n// Ejecutar');
// Wait, my previous script put in \\r\\n\\r\\n, which in a string is \\r\\n\\r\\n
// So I will just replace the EXACT string I see:

code = code.replace("};\\\\r\\\\n\\\\r\\\\n// Ejecutar", "};\\n\\n// Ejecutar");

fs.writeFileSync(file, code, 'utf8');
console.log('Fixed literal backslash-r and backslash-n');
