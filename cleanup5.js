const fs = require('fs');
let code = fs.readFileSync('iatf-app.js', 'utf8');

let lines = code.split(/\\r?\\n/);
lines.splice(2671, 15);

fs.writeFileSync('iatf-app.js', lines.join('\\r\\n'), 'utf8');
console.log('Lines truly deleted');
