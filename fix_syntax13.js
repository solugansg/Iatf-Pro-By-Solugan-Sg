const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');

const regex = /};\\\\r\\\\n\\\\r\\\\n\/\/ Ejecutar/g;
if (regex.test(code)) {
    code = code.replace(regex, '};\\r\\n\\r\\n// Ejecutar');
    fs.writeFileSync(file, code, 'utf8');
    console.log('Fixed with regex');
} else {
    const regex2 = /};\\\\n\\\\n\/\/ Ejecutar/g;
    if (regex2.test(code)) {
        code = code.replace(regex2, '};\\n\\n// Ejecutar');
        fs.writeFileSync(file, code, 'utf8');
        console.log('Fixed with regex2');
    } else {
        const regex3 = /};\\\\r\\\\n\/\/ Ejecutar/g;
        if (regex3.test(code)) {
            code = code.replace(regex3, '};\\n// Ejecutar');
            fs.writeFileSync(file, code, 'utf8');
            console.log('Fixed with regex3');
        } else {
            console.log('STILL NOT FOUND');
        }
    }
}
