const fs = require('fs');
let code = fs.readFileSync('iatf-app.js', 'utf8');

const lines = code.split(/\\r?\\n/);
lines.splice(2672, 0, '}');

fs.writeFileSync('iatf-app.js', lines.join('\\n'), 'utf8');
console.log('Fixed syntax error');
