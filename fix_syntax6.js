const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');

code = code.split('\\\\n\\\\n').join('\\n\\n');

fs.writeFileSync(file, code, 'utf8');
console.log('Fixed ALL literal \\\\n\\\\n');
