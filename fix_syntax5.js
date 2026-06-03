const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');

// Replace all occurrences of literal backslash followed by 'n' with actual newlines
// ONLY in the specific problematic spots to avoid breaking legitimate regexes.

code = code.replace("};\\\\n\\\\n// Ejecutar al cargar si no es español\\r", "};\\r\\n\\r\\n// Ejecutar al cargar si no es español\\r");
code = code.replace("};\\\\n\\\\n// Ejecutar al cargar si no es español", "};\\r\\n\\r\\n// Ejecutar al cargar si no es español");

fs.writeFileSync(file, code, 'utf8');
console.log('Fixed backslashes');
