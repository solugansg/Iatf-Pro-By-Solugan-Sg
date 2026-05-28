const fs = require('fs');
const path = 'C:\\Users\\JAN\\Documents\\App Solugan Sg\\Iatf Pro\\app.js';
let content = fs.readFileSync(path, 'utf8');

const target1 = `    renderMatriz(); saveState(); alert("Protocolos base restaurados correctamente.");00","08:00","08:00","08:00","08:00","08:00"],"ia":"74","obs":"Utilizar DIB de segundo uso - Iatf 48-60 hs GnRh opcional"}];\n    renderMatriz(); saveState(); alert("Protocolos base restaurados correctamente.");`;
const target1CRLF = target1.replace(/\n/g, '\r\n');

const replacement = `    renderMatriz(); saveState(); alert("Protocolos base restaurados correctamente.");`;

if (content.includes(target1)) {
  content = content.replace(target1, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Fixed LF");
} else if (content.includes(target1CRLF)) {
  content = content.replace(target1CRLF, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Fixed CRLF");
} else {
  console.log("Not found");
}
