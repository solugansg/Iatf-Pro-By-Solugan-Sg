const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '..', 'iatf-app.js');
let code = fs.readFileSync(appPath, 'utf8');

// The whole window.guardarEnHistorial function got messed up. Let's find its start.
const startStr = "window.guardarEnHistorial = function() {";
const startIdx = code.indexOf(startStr);

if (startIdx === -1) {
  console.log("No se encontro window.guardarEnHistorial");
  process.exit(1);
}

// Find the start of window.buscarPorNit which is right after
const endStr = "window.buscarPorNit = function() {";
const endIdx = code.indexOf(endStr, startIdx);

if (endIdx === -1) {
  console.log("No se encontro window.buscarPorNit");
  process.exit(1);
}

const newLogic = `window.guardarEnHistorial = function() {
  const ubicacion = document.getElementById('pi-ubicacion').value.trim();
  const finca = document.getElementById('pi-finca').value.trim();
  const perfil = JSON.parse(localStorage.getItem('reprocost_perfil')) || JSON.parse(localStorage.getItem('reprocost_perfil_consultor')) || {};
  let nitValue = perfil.nit || 'N/A';
  
  if (nitValue === 'N/A') {
    nitValue = prompt("Para poder buscar este reporte después, por favor ingresa tu NIT:");
    if (!nitValue || nitValue.trim() === '') {
      alert(t("alert_nit_required"));
      return;
    }
    nitValue = nitValue.trim();
  }
  
  if (!ubicacion || !finca) {
    alert("⚠️ Se requiere completar los campos 'Finca' y 'Ubicación' para guardar el reporte en el historial.");
    return;
  }
  
  let fullStateObj = {};
  try {
    const localSaved = localStorage.getItem('reprocost_state');
    if (localSaved) {
      fullStateObj = JSON.parse(localSaved);
    } else {
      fullStateObj = JSON.parse(JSON.stringify(state));
    }
  } catch (e) {
    fullStateObj = JSON.parse(JSON.stringify(state));
  }

  const report = {
    id: Date.now(),
    nit: nitValue,
    finca: finca,
    protocolo: document.getElementById('dash-protocolo').innerText,
    fechaProtocolo: document.getElementById('pi-fecha')?.value
      ? new Date(document.getElementById('pi-fecha').value + 'T12:00:00').toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
      : new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    animales: document.getElementById('dash-animales').innerText,
    preneces: document.getElementById('res-total-preneces').innerText,
    inversion: document.getElementById('res-total-inversion').innerText,
    state: fullStateObj 
  };

  let historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
  historial.push(report);
  localStorage.setItem('reprocost_historial', JSON.stringify(historial));
  
  alert(t("alert_report_saved"));
};

`;

code = code.substring(0, startIdx) + newLogic + code.substring(endIdx);
fs.writeFileSync(appPath, code, 'utf8');
console.log("Patch aplicado correctamente!");
