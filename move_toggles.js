const fs = require('fs');

// 1. Modificar index.html
let html = fs.readFileSync('index.html', 'utf8');

// The block to extract
const resyncCardRegex = /<!-- Fila 3: Opciones de Resincronización \(Destacadas\) -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

const match = html.match(resyncCardRegex);
if (!match) {
  console.log('No se encontro el bloque resync-toggle-card en index.html');
} else {
  let cardHtml = match[0];
  
  // Remove from original position
  html = html.replace(resyncCardRegex, '');
  
  // Modify the card HTML to fit inside the modal
  // We want to hide the wrapper-check-resx1 and resx2 by default, or just let iatf-app.js handle it
  // But wait! We need to place it before the modal action buttons.
  const modalButtonsRegex = /<div style="text-align: right; margin-top: 2rem;">/;
  
  // Let's modify the card to have an ID so we can hide/show the title if both are hidden.
  // Actually, we can just put both wrappers and handle their display in JS.
  let newCardHtml = `
          <!-- Opciones de Resincronizacion movidas al Modal -->
          <div id="modal-resync-toggles" class="resync-toggle-card" style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; background: rgba(255,255,255,0.03); border-radius: 16px; border: 1px solid var(--glass-border); margin-top: 2rem;">
            <div style="display: flex; flex-direction: column;">
              <span style="font-weight: 600; color: var(--text-main);" data-i18n="pi_include_resync">¿Deseas incluir la siguiente fase?</span>
            </div>
            <div class="resync-toggle-options" style="display: flex; gap: 1.5rem;">
              <div id="wrapper-check-resx1" style="display: none; align-items: center; gap: 1rem; background: rgba(14, 165, 233, 0.1); padding: 12px 24px; border-radius: 12px; border: 1px solid var(--accent); transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(14, 165, 233, 0.1);">
                <span id="label-check-resx1" class="text-accent" style="font-size: 1rem; font-weight: 800; white-space: nowrap;" data-i18n="pi_include_resx1">INCLUIR Resincronización 1</span>
                <label class="switch" style="transform: scale(1.25);">
                  <input type="checkbox" id="pi-check-resx1" onchange="toggleFase('resincronizacion1', this.checked)">
                  <span class="slider round"></span>
                </label>
              </div>
              <div id="wrapper-check-resx2" style="display: none; align-items: center; gap: 1rem; background: rgba(168, 85, 247, 0.1); padding: 12px 24px; border-radius: 12px; border: 1px solid #a855f7; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(168, 85, 247, 0.1);">
                <span id="label-check-resx2" style="font-size: 1rem; font-weight: 800; white-space: nowrap; color: #a855f7;" data-i18n="pi_include_resx2">INCLUIR Resincronización 2</span>
                <label class="switch" style="transform: scale(1.25);">
                  <input type="checkbox" id="pi-check-resx2" onchange="toggleFase('resincronizacion2', this.checked)">
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
  `;
  
  html = html.replace(modalButtonsRegex, newCardHtml + '\n          <div style="text-align: right; margin-top: 1rem;">');
  
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('index.html actualizado');
}

// 2. Modificar iatf-app.js
let js = fs.readFileSync('iatf-app.js', 'utf8');

// Inside abrirModalPrecios, at the end before `document.getElementById('modal-precios').style.display = 'flex';`
const modalPreciosDisplay = "document.getElementById('modal-precios').style.display = 'flex';";
if (js.includes(modalPreciosDisplay)) {
  const toggleLogic = `
  // Mostrar la opcion de incluir resincronizacion correspondiente
  const wrp1 = document.getElementById('wrapper-check-resx1');
  const wrp2 = document.getElementById('wrapper-check-resx2');
  const trk = document.getElementById('modal-resync-toggles');
  if (wrp1 && wrp2 && trk) {
    if (context === 'pi') {
      trk.style.display = 'flex';
      wrp1.style.display = 'flex';
      wrp2.style.display = 'none';
      // Mover el valor actual del input
      document.getElementById('pi-check-resx1').checked = state.activePhases.includes('resincronizacion1');
    } else if (context === 'resx1') {
      trk.style.display = 'flex';
      wrp1.style.display = 'none';
      wrp2.style.display = 'flex';
      document.getElementById('pi-check-resx2').checked = state.activePhases.includes('resincronizacion2');
    } else {
      trk.style.display = 'none';
      wrp1.style.display = 'none';
      wrp2.style.display = 'none';
    }
  }

  document.getElementById('modal-precios').style.display = 'flex';
`;
  
  js = js.replace(modalPreciosDisplay, toggleLogic);
  fs.writeFileSync('iatf-app.js', js, 'utf8');
  console.log('iatf-app.js actualizado');
} else {
  console.log('No se encontro el display del modal en iatf-app.js');
}
