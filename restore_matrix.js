const fs = require('fs');
const path = require('path');
const appPath = path.resolve(__dirname, 'app_core.js');

let content = fs.readFileSync(appPath, 'utf8');

// Target 1: User Migration destruction
const target1 = `                if (state.matriz) {
                  state.matriz.forEach(protocol => {
                    if (protocol.days) protocol.days = protocol.days.map(() => '-');
                    if (protocol.hours) protocol.hours = protocol.hours.map(() => '--:--');
                    if (protocol.ia) protocol.ia = '-';
                  });
                }`;
const target1CRLF = target1.replace(/\n/g, '\r\n');

// Target 2: Global Firebase destruction
const target2 = `                // FORCE '-' FOR GLOBAL FIREBASE MATRIX TO PREVENT INFECTION
                globalMatriz.forEach(protocol => {
                  if (protocol.days) protocol.days = protocol.days.map(() => '-');
                  if (protocol.hours) protocol.hours = protocol.hours.map(() => '--:--');
                  if (protocol.ia) protocol.ia = '-';
                });`;
const target2CRLF = target2.replace(/\n/g, '\r\n');

let replaced = false;

if (content.includes(target1)) {
    content = content.replace(target1, '');
    replaced = true;
} else if (content.includes(target1CRLF)) {
    content = content.replace(target1CRLF, '');
    replaced = true;
} else {
    console.log("Target 1 not found");
}

if (content.includes(target2)) {
    content = content.replace(target2, '');
    replaced = true;
} else if (content.includes(target2CRLF)) {
    content = content.replace(target2CRLF, '');
    replaced = true;
} else {
    console.log("Target 2 not found");
}

if (replaced) {
    fs.writeFileSync(appPath, content, 'utf8');
    console.log("Matrix destruction removed");
}
