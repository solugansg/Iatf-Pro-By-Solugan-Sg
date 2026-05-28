const fs = require('fs');
const path = require('path');
const swPath = path.resolve(__dirname, 'service-worker.js');

let sw = fs.readFileSync(swPath, 'utf8');

// Fix network-first
const targetCondition = `url.pathname.endsWith('.css') || url.pathname.endsWith('app_core.js');`;
const newCondition = `url.pathname.endsWith('.css') || url.pathname.endsWith('app_master.js') || url.pathname.endsWith('app_core.js');`;

sw = sw.replace(targetCondition, newCondition);

// Force cache bump
const versionMatch = sw.match(/const CACHE_NAME = 'iatfpro-V260528\.(\d+)';/);
if (versionMatch) {
  const oldV = parseInt(versionMatch[1]);
  const newV = oldV + 1;
  sw = sw.replace(`const CACHE_NAME = 'iatfpro-V260528.${oldV}';`, `const CACHE_NAME = 'iatfpro-V260528.${newV}';`);
}

fs.writeFileSync(swPath, sw, 'utf8');
console.log('Fixed service worker caching strategy for app_master.js');
