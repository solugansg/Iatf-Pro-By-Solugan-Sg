const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('iatf-app.js', 'utf8');

const matches = [...html.matchAll(/data-i18n=\"([^\"]+)\"/g)].map(m => m[1]);
const unique = [...new Set(matches)];

const missing = unique.filter(k => 
  !js.includes(`${k}:`) && 
  !js.includes(`${k} :`) && 
  !js.includes(`"${k}":`) && 
  !js.includes(`'${k}':`)
);

console.log("Missing translations:");
console.log(missing);
