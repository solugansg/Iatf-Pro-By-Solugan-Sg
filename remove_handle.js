const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Eliminar el sidebar-toggle-handle
const handleRegex = /<!-- Handle for mobile to close sidebar -->\s*<div class="sidebar-toggle-handle" onclick="toggleSidebar\(\)">\s*<i data-lucide="chevron-left" style="width: 18px; height: 18px;"><\/i>\s*<\/div>/;
html = html.replace(handleRegex, '');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Handle removed from index.html');
