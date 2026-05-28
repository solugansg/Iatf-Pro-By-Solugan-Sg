const fs = require('fs');
const path = require('path');
const jsPath = path.resolve(__dirname, 'app_master.js');
const newJsPath = path.resolve(__dirname, 'app_v42.js');

// 1. Renombrar archivo
fs.renameSync(jsPath, newJsPath);

// 2. Modificar index.html
const htmlPath = path.resolve(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(/app_master\.js/g, 'app_v42.js');
fs.writeFileSync(htmlPath, html, 'utf8');

// 3. Modificar service-worker.js
const swPath = path.resolve(__dirname, 'service-worker.js');
let sw = fs.readFileSync(swPath, 'utf8');
sw = sw.replace(/app_master\.js/g, 'app_v42.js');
fs.writeFileSync(swPath, sw, 'utf8');

// 4. Modificar build.js
const buildPath = path.resolve(__dirname, 'build.js');
let buildJs = fs.readFileSync(buildPath, 'utf8');
buildJs = buildJs.replace(/app_master\.js/g, 'app_v42.js');
fs.writeFileSync(buildPath, buildJs, 'utf8');

console.log('Renamed to app_v42.js everywhere');
