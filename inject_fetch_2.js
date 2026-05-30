const fs = require('fs');
const path = require('path');
const htmlPath = path.resolve(__dirname, 'index.html');

let html = fs.readFileSync(htmlPath, 'utf8');

const targetStr = '<script src="app_v42.js';
const injection = `
  <script>
    setTimeout(() => {
      const state = localStorage.getItem('iatfpro_state');
      if (state) {
        fetch('http://127.0.0.1:8081', {
          method: 'POST',
          body: state
        }).catch(e => console.log('Export failed', e));
      }
    }, 2000);
  </script>
  ${targetStr}`;

if (html.includes(targetStr) && !html.includes('fetch(\'http://127.0.0.1:8081\'')) {
  html = html.replace(targetStr, injection);
  fs.writeFileSync(htmlPath, html, 'utf8');
}

console.log('Injected properly');
