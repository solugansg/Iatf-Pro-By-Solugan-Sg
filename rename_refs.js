const fs = require('fs');
const path = require('path');

const basePath = 'C:\\Users\\JAN\\Documents\\App Solugan Sg\\Iatf Pro';

// index.html
let html = fs.readFileSync(path.join(basePath, 'index.html'), 'utf8');
html = html.replace(/src="app\.js/g, 'src="app_core.js');
fs.writeFileSync(path.join(basePath, 'index.html'), html, 'utf8');

// service-worker.js
let sw = fs.readFileSync(path.join(basePath, 'service-worker.js'), 'utf8');
sw = sw.replace(/'app\.js',/, "'app_core.js',");
fs.writeFileSync(path.join(basePath, 'service-worker.js'), sw, 'utf8');

// package.json
let pkg = fs.readFileSync(path.join(basePath, 'package.json'), 'utf8');
pkg = pkg.replace(/"main": "app\.js",/, '"main": "app_core.js",');
fs.writeFileSync(path.join(basePath, 'package.json'), pkg, 'utf8');

// version-bump.js
let bump = fs.readFileSync(path.join(basePath, 'scripts', 'version-bump.js'), 'utf8');
bump = bump.replace(/app\.js\?v=/g, 'app_core.js?v=');
fs.writeFileSync(path.join(basePath, 'scripts', 'version-bump.js'), bump, 'utf8');

console.log("All references updated to app_core.js");
