const fs = require('fs');
const path = require('path');
const basePath = path.resolve(__dirname);

// index.html
let html = fs.readFileSync(path.join(basePath, 'index.html'), 'utf8');
html = html.replace(/app_core\.js/g, 'app_master.js');
fs.writeFileSync(path.join(basePath, 'index.html'), html, 'utf8');

// service-worker.js
let sw = fs.readFileSync(path.join(basePath, 'service-worker.js'), 'utf8');
sw = sw.replace(/app_core\.js/g, 'app_master.js');
fs.writeFileSync(path.join(basePath, 'service-worker.js'), sw, 'utf8');

// build.js
let buildJs = fs.readFileSync(path.join(basePath, 'build.js'), 'utf8');
buildJs = buildJs.replace(/app_core\.js/g, 'app_master.js');
fs.writeFileSync(path.join(basePath, 'build.js'), buildJs, 'utf8');

// version-bump.js
let bump = fs.readFileSync(path.join(basePath, 'scripts', 'version-bump.js'), 'utf8');
bump = bump.replace(/app_core\.js/g, 'app_master.js');
fs.writeFileSync(path.join(basePath, 'scripts', 'version-bump.js'), bump, 'utf8');

console.log("All references to app_master.js updated.");
