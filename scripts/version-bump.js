const fs = require('fs');
const path = require('path');

function pad2(num) {
  return num.toString().padStart(2, '0');
}

function getTodayTag() {
  const now = new Date();
  const year = now.getFullYear().toString().slice(-2);
  const month = pad2(now.getMonth() + 1); // months are zero‑based
  const day = pad2(now.getDate());
  return `${year}${month}${day}`; // e.g., 260527
}

function bumpVersion() {
  const pkgPath = path.resolve(__dirname, '..', 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const current = pkg.version.trim();
  const todayTag = getTodayTag();

  let newVersion;
  const match = current.match(/^V\s?(\d{6})(\.(\d+))?$/);
  if (match) {
    const existingDate = match[1];
    const existingInc = match[3] ? parseInt(match[3], 10) : 0;
    if (existingDate === todayTag) {
      newVersion = `V ${todayTag}.${existingInc + 1}`;
    } else {
      newVersion = `V ${todayTag}.1`;
    }
  } else {
    // If version does not follow the pattern, start fresh
    newVersion = `V ${todayTag}.1`;
  }

  pkg.version = newVersion;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');

  // Update index.html hardcoded versions
  const htmlPath = path.resolve(__dirname, '..', 'index.html');
  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    // Replace cache-buster in style.css
    html = html.replace(/href="style\.css\?v=[^"]+"/g, `href="style.css?v=${newVersion}"`);
    html = html.replace(/src="app\.js\?v=[^"]+"/g, `src="app_core.js?v=${newVersion}"`);
    // Replace in sidebar
    html = html.replace(/By Solugan Sg <span([^>]*)>[^<]+<\/span>/g, `By Solugan Sg <span$1>${newVersion}</span>`);
    html = html.replace(/<span class="mobile-logo-text">IATF PRO <span([^>]*)>[^<]+<\/span><\/span>/gi, `<span class="mobile-logo-text">IATF PRO <span$1>${newVersion}</span></span>`);
    fs.writeFileSync(htmlPath, html, 'utf8');
  }

  // Update service-worker.js cache name
  const swPath = path.resolve(__dirname, '..', 'service-worker.js');
  if (fs.existsSync(swPath)) {
    let sw = fs.readFileSync(swPath, 'utf8');
    // Replace cache name e.g. const CACHE_NAME = 'iatfpro-v2.8.74';
    sw = sw.replace(/const CACHE_NAME = '[^']+';/, `const CACHE_NAME = 'iatfpro-${newVersion.replace(/ /g, '')}';`);
    sw = sw.replace(/\/\/ Iatf Pro by Solugan SG - Service Worker v.*/, `// Iatf Pro by Solugan SG - Service Worker ${newVersion}`);
    fs.writeFileSync(swPath, sw, 'utf8');
  }

  console.log(`Version updated to ${newVersion}`);
}

bumpVersion();
