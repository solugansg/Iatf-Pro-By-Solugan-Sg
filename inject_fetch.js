const fs = require('fs');
const path = require('path');
const htmlPath = path.resolve(__dirname, 'index.html');

let html = fs.readFileSync(htmlPath, 'utf8');

const injection = `
  <script>
    setTimeout(() => {
      const state = localStorage.getItem('reprocost_state');
      if (state) {
        fetch('http://127.0.0.1:8081', {
          method: 'POST',
          body: state
        }).catch(e => console.log('Export failed', e));
      }
    }, 2000);
  </script>
</head>`;

if (!html.includes('fetch(\'http://127.0.0.1:8081\'')) {
  html = html.replace('</head>', injection);
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log('Injected fetch script into index.html');
} else {
  console.log('Fetch script already in index.html');
}
