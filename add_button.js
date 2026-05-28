const fs = require('fs');
const path = require('path');
const htmlPath = path.resolve(__dirname, 'index.html');

let content = fs.readFileSync(htmlPath, 'utf8');

const targetHtml = `<button class="btn btn-secondary" onclick="cerrarModalPrecios()"
              style="margin-right:0.5rem">Cancelar</button>`;

const newHtml = `<button class="btn" onclick="window.ponerDosisEnCeroModal()" style="margin-right:0.5rem; background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3);">Poner Dosis en 0</button>
            <button class="btn btn-secondary" onclick="cerrarModalPrecios()"
              style="margin-right:0.5rem">Cancelar</button>`;

const targetHtmlCRLF = targetHtml.replace(/\n/g, '\r\n');

if (content.includes(targetHtml)) {
    content = content.replace(targetHtml, newHtml);
    fs.writeFileSync(htmlPath, content, 'utf8');
    console.log("Button added to index.html");
} else if (content.includes(targetHtmlCRLF)) {
    content = content.replace(targetHtmlCRLF, newHtml);
    fs.writeFileSync(htmlPath, content, 'utf8');
    console.log("Button added to index.html (CRLF)");
} else {
    console.log("Target not found in index.html");
}
