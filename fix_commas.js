const fs = require('fs');
let c = fs.readFileSync('iatf-app.js', 'utf8');
c = c.replace(/chart_neto:\s*"([^"]+)"\s*\r?\n\s*chart_pi:/g, 'chart_neto: "$1",\n    chart_pi:');
fs.writeFileSync('iatf-app.js', c);
console.log('Fixed commas');
