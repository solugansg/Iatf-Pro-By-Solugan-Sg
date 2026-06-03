const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldStr = '<div id="sidebar-consultor-name" style="font-size: 0.7rem; color: var(--accent); font-weight: 800; letter-spacing: 0.5px; word-break: break-all;"></div>';
const newStr = '<div id="sidebar-consultor-name" style="font-size: 0.65rem; color: var(--accent); font-weight: 800; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%;" title=""></div>';

if (html.includes(oldStr)) {
  html = html.replace(oldStr, newStr);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Update done');
} else {
  console.log('String not found');
}
