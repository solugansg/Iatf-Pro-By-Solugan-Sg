const fs = require('fs');
let code = fs.readFileSync('iatf-app.js', 'utf8');

const lines = code.split('\\n');
// We want to delete lines 2672 to 2686 (inclusive).
// Arrays are 0-indexed, so line 2672 is index 2671.
lines.splice(2671, 15);

fs.writeFileSync('iatf-app.js', lines.join('\\n'), 'utf8');
console.log('Lines deleted');
