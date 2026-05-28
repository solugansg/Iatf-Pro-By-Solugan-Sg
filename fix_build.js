const fs = require('fs');
const path = require('path');
const appPath = path.resolve(__dirname, 'build.js');

let content = fs.readFileSync(appPath, 'utf8');

content = content.replace(/app\.js/g, 'app_core.js');

fs.writeFileSync(appPath, content, 'utf8');
console.log("build.js updated to use app_core.js");
