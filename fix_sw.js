const fs = require('fs');
const path = require('path');
const swPath = path.resolve(__dirname, 'service-worker.js');

let content = fs.readFileSync(swPath, 'utf8');

// Update CACHE_NAME to force cache purge
content = content.replace(/CACHE_NAME = 'iatfpro-V260528\.\d+';/g, "CACHE_NAME = 'iatfpro-V260528.30';");

// Make app_core.js network-first
content = content.replace(/url\.pathname\.endsWith\('\.css'\);/g, "url.pathname.endsWith('.css') || url.pathname.endsWith('app_core.js');");

// Remove ignoreSearch: true for safety, or leave it but now app_core.js is handled above.
// Actually, I'll just change the name of the file to app_master.js to be 10,000% safe.
fs.writeFileSync(swPath, content, 'utf8');
console.log("service-worker.js updated");
