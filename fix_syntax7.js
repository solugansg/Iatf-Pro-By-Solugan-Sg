const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');

// Replace ANY literal \n character sequences that might exist.
code = code.replace(/\\\\n/g, '\\n');

fs.writeFileSync(file, code, 'utf8');
console.log('Fixed literally ALL literal backslash-n');
