const fs = require('fs');
const path = require('path');
const htmlPath = path.resolve(__dirname, 'index.html');

let html = fs.readFileSync(htmlPath, 'utf8');

const oldButton = `<button class="btn" onclick="window.ponerDosisEnCeroModal()" style="margin-right:0.5rem; background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3);">Poner Dosis en 0</button>`;

// Quitar el botón viejo
if (html.includes(oldButton)) {
  html = html.replace(oldButton, '');
} else {
  console.log("No se encontró el botón viejo");
}

const headerTarget = `<h2 class="form-title text-accent m-0" id="modal-title" style="margin-bottom:0.5rem;" data-i18n="modal_title"><i
              data-lucide="package"></i> Configuración precios y dosis</h2>`;
              
const headerTarget2 = `<h2 class="form-title text-accent m-0" id="modal-title" style="margin-bottom:0.5rem;" data-i18n="modal_title"><i data-lucide="package"></i> Configuración precios y dosis</h2>`;

const newHeader = `<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom:0.5rem;">
            <h2 class="form-title text-accent m-0" id="modal-title" style="margin-bottom:0;" data-i18n="modal_title"><i data-lucide="package"></i> Configuración precios y dosis</h2>
            <button class="btn" onclick="window.ponerDosisEnCeroModal()" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); padding: 5px 12px; font-size: 0.85rem;"><i data-lucide="trash-2" style="width: 14px; height: 14px;"></i> Limpiar Valores</button>
          </div>`;

if (html.includes(headerTarget)) {
  html = html.replace(headerTarget, newHeader);
} else if (html.includes(headerTarget2)) {
  html = html.replace(headerTarget2, newHeader);
} else {
  // Intentar regex si hay saltos de linea
  html = html.replace(/<h2 class="form-title text-accent m-0" id="modal-title"([^>]+)><i\s*data-lucide="package"><\/i>\s*Configuración precios y dosis<\/h2>/g, newHeader);
}

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Button moved and renamed in index.html');
