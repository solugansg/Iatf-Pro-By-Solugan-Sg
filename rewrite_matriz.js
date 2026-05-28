const fs = require('fs');

const path = 'C:\\Users\\JAN\\Documents\\App Solugan Sg\\Iatf Pro\\app.js';
let content = fs.readFileSync(path, 'utf8');

// The original matrix is at the top of the file. We can extract it using regex or just replace the line.
// We will look for window.DEFAULT_MATRIZ = [...];
const regex = /window\.DEFAULT_MATRIZ\s*=\s*(\[.*\]);/;
const match = content.match(regex);

if (match) {
  let matriz = JSON.parse(match[1]);
  matriz.forEach(protocol => {
    if (protocol.days) {
      protocol.days = protocol.days.map(() => '-');
    }
    if (protocol.hours) {
      protocol.hours = protocol.hours.map(() => '--:--');
    }
    if (protocol.ia) {
      protocol.ia = '-';
    }
  });

  const newMatrizStr = JSON.stringify(matriz);
  const newContent = content.replace(regex, `window.DEFAULT_MATRIZ = ${newMatrizStr};`);
  fs.writeFileSync(path, newContent, 'utf8');
  console.log("DEFAULT_MATRIZ updated successfully!");
} else {
  console.log("Could not find DEFAULT_MATRIZ in app.js");
}
