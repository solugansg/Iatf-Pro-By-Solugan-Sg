const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');

// Replace all occurrences of literal backslash followed by 'n' with actual newlines
// Wait, is there any OTHER literal backslash-n in the file?
// Let's just find "};\\n\\n// Ejecutar"

code = code.replace('};\\n\\n// Ejecutar', '};\\n\\n// Ejecutar'); 
// The above replaces '};\n\n//' with itself!
// We need to use String.raw or escape properly.

const target = String.raw`};\n\n// Ejecutar`;
const replacement = '};\\n\\n// Ejecutar'; 
// Wait, '\\n' in string evaluates to actual newline. Let's use \r\n to be safe.

const replacementReal = '};\\r\\n\\r\\n// Ejecutar';

code = code.split(target).join(replacementReal);

fs.writeFileSync(file, code, 'utf8');
console.log('Fixed literal backslash-n exactly');
