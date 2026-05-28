const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      fs.writeFileSync('user_config.json', body, 'utf8');
      console.log('Received user configuration successfully!');
      res.writeHead(200);
      res.end('OK');
      process.exit(0);
    });
  } else {
    res.writeHead(200);
    res.end('Export server running');
  }
});

server.listen(8081, () => {
  console.log('Export server listening on port 8081');
});
