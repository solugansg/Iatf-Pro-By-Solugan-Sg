const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');

// find all literal backslash followed by n
let pos = code.indexOf('\\\\n');
while (pos !== -1) {
  console.log('Found literal \\n at', pos);
  console.log('Context:', code.substring(pos - 10, pos + 10));
  pos = code.indexOf('\\\\n', pos + 1);
}
