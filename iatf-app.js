// ==========================================
// MATRIZ DE PROTOCOLOS POR DEFECTO (Solugan SG)
// Se carga para usuarios nuevos o cuando no hay datos guardados
// ==========================================
window.DEFAULT_MATRIZ = [{"name":"Tradicional (IATF)","days":["0","-","0","-","10","-","8","-","-","8","8","10","8","0","8","10","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"10","obs":"IATF 48-60 hs - GnRh Opcional"},{"name":"Jsynch (IATF)","days":["0","-","0","-","9","-","6","-","-","6","-","9","6","0","6","9","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"9","obs":"IATF 72 hs + GnRh"},{"name":"Novillas (IATF)","days":["0","-","0","9","-","-","8","-","-","8","-","10","8","0","8","10","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"10","obs":"IATF 24-32 horas"},{"name":"Ovsynch (IATF)","days":["-","-","-","-","0","9","7","-","-","-","-","10","-","0","-","10","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"10","obs":"IATF 17-24 horas post GnRh"},{"name":"Cosynch (IATF)","days":["-","-","-","-","0","9","7","-","-","-","-","9","-","0","-","9","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"9","obs":"IATF 48 horas + GnRh"},{"name":"Heatsynch (IATF)","days":["-","-","8","-","0","-","7","-","-","-","-","9","-","0","-","9","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"9","obs":"IATF 48-52 horas post Pgf2@"},{"name":"Presynch (IA)","days":["-","-","-","-","0","9","-26","-12","7","-","-","10","-","0","-","10","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"10","obs":"Observar celo - IA 12 horas post celo estable"},{"name":"Selectsynch (IA)","days":["-","-","-","-","0","-","7","-","-","-","-","8","-","0","-","8","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"8","obs":"Observar celo - IA 12 horas post celo estable"},{"name":"Dib Vacas (IA)","days":["0","-","-","-","0","8","7","-","-","-","-","8","-","0","7","8","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"8","obs":"IA celo detectado + GnRh"},{"name":"Dib Novillas (IA)","days":["0","-","0","-","8","-","7","-","-","-","-","8","-","0","7","8","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"8","obs":"IA celo detectado + GnRh"},{"name":"DoblePGF2@ (IA)","days":["-","-","-","-","-","-","0","11","-","-","-","2","-","0","-","2","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"2","obs":"Observar celo 1-5 dias IA 12 horas post celo estable"},{"name":"Monta Natural 1 (IA)","days":["-","-","-","-","0","-","7","-","-","-","-","9","-","0","-","9","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"9","obs":"IA celo detectado ó Toro x 5 dias"},{"name":"Monta Natural 2 (IA)","days":["-","-","8","-","0","-","7","-","-","-","-","9","-","0","-","9","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"9","obs":"IA celo detectado ó Toro x 5 dias"},{"name":"Monta Natural 3 DIB (IA)","days":["0","-","-","-","0","-","7","-","-","-","-","9","8","0","7","9","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"9","obs":"IA celo detectado ó Toro x 5 dias"},{"name":"Receptoras 1 (IATF)","role":"resx1","days":["0","-","0","9","-","-","5","-","-","5","-","10","8","0","5","18","10","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"18","obs":"Transferencia de Embriones"},{"name":"Receptoras 2 (IATF)","role":"resx2","days":["0","-","0","-","-","-","8","-","-","8","8","9","8","0","8","17","9","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"17","obs":"Transferencia de Embriones"},{"name":"Resincronizacion 1 (IATF)","role":"resx1b","days":["32","-","32","-","42","-","40","-","-","40","40","42","40","32","40","42","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"42","obs":"Utilizar DIB de segundo uso - Iatf 48-60 hs GnRh opcional"},{"name":"Resincronizacion 2 (IATF)","role":"resx2b","days":["64","-","64","-","74","-","72","-","-","72","72","74","72","64","72","74","-","30","-"],"hours":["08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00","08:00"],"ia":"74","obs":"Utilizar DIB de segundo uso - Iatf 48-60 hs GnRh opcional"}];

window.DEFAULT_ENCABEZADOS = ["DISPOSITIVO INTRAVAGINAL BOVINO (P4)","PROGESTERONA INYECTABLE","BENZOATO DE ESTRADIOL (BE) 1A DOSIS","BENZOATO DE ESTRADIOL (BE) 2A DOSIS","HORMONA LIBERADORA DE GONADOTROPINA (GNRH) 1A DOSIS","HORMONA LIBERADORA DE GONADOTROPINA (GNRH) 2A DOSIS","PROSTAGLANDINA (PGF2@) 1A DOSIS","PROSTAGLANDINA (PGF2@) 2A DOSIS","PROSTAGLANDINA (PGF2@) 3A DOSIS","GONADOTROPINA CORIÓNICA EQUINA (ECG)","CIPIONATO DE ESTRADIOL (C.E)","GENÉTICA (SEMEN / EMBRIÓN)","RETIRO DIB","ASISTENCIA TÉCNICA 1","ASISTENCIA TÉCNICA 2","IA/TE","ASPIRACIÓN FOLICULAR (OPU)","CONFIRMACIÓN PREÑEZ DX1","CONFIRMACIÓN PREÑEZ DX2"];

// ==========================================
// CONFIGURACIÓN E INTEGRACIÓN DE FIREBASE
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyAxY70iSsexqNcAIm6h1ygCTzt2QHZ8umw",
  authDomain: "iatf-pro-by-solugan-sg.firebaseapp.com",
  projectId: "iatf-pro-by-solugan-sg",
  storageBucket: "iatf-pro-by-solugan-sg.firebasestorage.app",
  messagingSenderId: "171982395464",
  appId: "1:171982395464:web:9302b7ae708b69097de07d"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Habilitar persistencia offline en Firestore para uso sin conexión
db.enablePersistence()
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      console.warn("Persistencia Firestore: Múltiples pestañas abiertas.");
    } else if (err.code == 'unimplemented') {
      console.warn("Persistencia Firestore: Navegador no compatible.");
    }
  });

const ADMIN_EMAIL = "solugansg@gmail.com";

function adaptarDiasProtocolo(days, iaVal) {
  const currentLen = 19; // Longitud actual de colDefs
  if (!Array.isArray(days)) {
    return Array(currentLen).fill('-');
  }
  if (days.length === currentLen) {
    return days;
  }
  let newDays = Array(currentLen).fill('-');
  if (days.length === 18) {
    // Migración: insertar en el índice 1 (nueva hormona: prog_iny)
    newDays[0] = days[0] !== undefined ? days[0] : '-';
    newDays[1] = '-';
    for (let i = 1; i < 18; i++) {
      newDays[i+1] = days[i] !== undefined ? days[i] : '-';
    }
  } else if (days.length === 17) {
    for (let i = 0; i <= 14; i++) {
      newDays[i] = days[i] !== undefined ? days[i] : '-';
    }
    newDays[15] = '-';
    newDays[16] = days[15] !== undefined ? days[15] : '-';
    newDays[17] = days[16] !== undefined ? days[16] : '-';
    return adaptarDiasProtocolo(newDays, iaVal);
  } else if (days.length === 16) {
    for (let i = 0; i <= 13; i++) {
      newDays[i] = days[i] !== undefined ? days[i] : '-';
    }
    newDays[14] = iaVal !== undefined ? String(iaVal) : '-';
    newDays[15] = '-';
    newDays[16] = days[14] !== undefined ? days[14] : '-';
    newDays[17] = days[15] !== undefined ? days[15] : '-';
    return adaptarDiasProtocolo(newDays, iaVal);
  } else {
    for (let i = 0; i < currentLen; i++) {
      newDays[i] = days[i] !== undefined ? days[i] : '-';
    }
  }
  return newDays;
}

function adaptarHorasProtocolo(hours) {
  const currentLen = 19; // Longitud actual de colDefs
  if (!Array.isArray(hours)) {
    return Array(currentLen).fill('08:00');
  }
  if (hours.length === currentLen) {
    return hours;
  }
  let newHours = Array(currentLen).fill('08:00');
  if (hours.length === 18) {
    newHours[0] = hours[0] !== undefined ? hours[0] : '08:00';
    newHours[1] = '08:00';
    for (let i = 1; i < 18; i++) {
      newHours[i+1] = hours[i] !== undefined ? hours[i] : '08:00';
    }
  } else if (hours.length === 17) {
    for (let i = 0; i <= 14; i++) {
      newHours[i] = hours[i] !== undefined ? hours[i] : '08:00';
    }
    newHours[15] = '08:00';
    newHours[16] = hours[15] !== undefined ? hours[15] : '08:00';
    newHours[17] = hours[16] !== undefined ? hours[16] : '08:00';
    return adaptarHorasProtocolo(newHours);
  } else if (hours.length === 16) {
    for (let i = 0; i <= 13; i++) {
      newHours[i] = hours[i] !== undefined ? hours[i] : '08:00';
    }
    newHours[14] = '08:00';
    newHours[15] = '08:00';
    newHours[16] = hours[14] !== undefined ? hours[14] : '08:00';
    newHours[17] = hours[15] !== undefined ? hours[15] : '08:00';
    return adaptarHorasProtocolo(newHours);
  } else {
    for (let i = 0; i < currentLen; i++) {
      newHours[i] = hours[i] !== undefined ? hours[i] : '08:00';
    }
  }
  return newHours;
}


window.migrarYSanitizarEncabezados = function(rawEncabezados) {
  if (!Array.isArray(rawEncabezados)) return window.DEFAULT_ENCABEZADOS.slice();
  if (rawEncabezados.length === 19) return rawEncabezados.slice();
  
  if (rawEncabezados.length === 18) {
    let newEnc = [];
    newEnc[0] = rawEncabezados[0];
    newEnc[1] = 'P4 Iny<br><small>Día</small>';
    for (let i = 1; i < 18; i++) {
      newEnc[i+1] = rawEncabezados[i];
    }
    return newEnc;
  }
  
  if (rawEncabezados.length === 17) {
    let newEnc = [];
    newEnc[0] = rawEncabezados[0];
    newEnc[1] = 'P4 Iny<br><small>Día</small>';
    for (let i = 1; i < 15; i++) {
      newEnc[i+1] = rawEncabezados[i];
    }
    newEnc[16] = '<div style="padding:4px; font-size:0.75rem;">IA/TE<br><small>Día</small></div>';
    newEnc[17] = rawEncabezados[15];
    newEnc[18] = rawEncabezados[16];
    return newEnc;
  }
  
  return rawEncabezados.slice();
};

window.migrarYSanitizarMatriz = function(rawMatrix) {

  if (!Array.isArray(rawMatrix) || rawMatrix.length === 0) {
    rawMatrix = window.DEFAULT_MATRIZ;
  }

  // 1. Solo adaptar longitud de arrays si cambiaron las columnas — NO tocar datos existentes
  let migrated = rawMatrix.map(p => {
    const newDays  = adaptarDiasProtocolo(p.days, p.ia);
    const newHours = adaptarHorasProtocolo(p.hours);
    return Object.assign({}, p, { days: newDays, hours: newHours });
  });

  // Hemos eliminado la "auto-inyección" de protocolos.
  // La matriz que cargue el administrador será exactamente la que se muestre, sin alteraciones ni agregados.

  return migrated;
};

// Escuchar cambios en el estado de autenticación
auth.onAuthStateChanged(user => {
  const authContainer = document.getElementById('auth-container');
  const appMainLayout = document.getElementById('app-main-layout');
  const navBtnAdmin = document.getElementById('nav-btn-admin');
  const sidebarConsultor = document.getElementById('sidebar-consultor');

  if (user) {
    // Usuario autenticado
    if (authContainer) authContainer.style.display = 'none';
    if (appMainLayout) appMainLayout.style.display = 'flex';

    // Mostrar nombre o email inmediatamente como fallback mientras carga Firestore
    if (sidebarConsultor) {
      const localPerfil = JSON.parse(localStorage.getItem('reprocost_perfil')) || JSON.parse(localStorage.getItem('reprocost_perfil_consultor')) || {};
      let localName = localPerfil.name || localPerfil.nombre || user.displayName || '';
      if (localName.includes('@')) localName = ''; // Ignorar si es un correo electrónico
      
      const displayName = localName || user.email || '';
      const nameEl = document.getElementById('sidebar-consultor-name');
      if (nameEl) nameEl.innerText = displayName.toUpperCase();
      sidebarConsultor.style.display = 'block';
    }

    // Abrir barra lateral por defecto en móviles al iniciar
    if (window.innerWidth <= 900) {
      const sidebar = document.querySelector('.sidebar');
      const overlay = document.getElementById('sidebar-overlay');
      if (sidebar && overlay) {
        sidebar.classList.add('active');
        overlay.style.display = 'block';
      }
    }

    // Cargar matriz global primero, luego configuraciones del usuario
    db.collection("global").doc("protocols").get()
      .then(globalDoc => {
        let globalEncabezados = null;
        if (globalDoc.exists && globalDoc.data() && globalDoc.data().matriz && Array.isArray(globalDoc.data().matriz) && globalDoc.data().matriz.length > 0) {
          globalMatriz = globalDoc.data().matriz;
          globalEncabezados = globalDoc.data().encabezados;
        }

        db.collection("users").doc(user.uid).get()
          .then(docSnap => {
            if (docSnap.exists) {
              const userData = docSnap.data();
              
              // Incrementar contador de accesos en Firestore
              db.collection("users").doc(user.uid).update({
                accessCount: firebase.firestore.FieldValue.increment(1)
              }).catch(err => console.warn("Error incrementando accessCount:", err));
              
              const localPerfil = JSON.parse(localStorage.getItem('reprocost_perfil')) || JSON.parse(localStorage.getItem('reprocost_perfil_consultor')) || {};
              let localName = localPerfil.name || localPerfil.nombre || '';
              if (localName.includes('@')) localName = '';
              
              let authDisplayName = user.displayName || '';
              if (authDisplayName.includes('@')) authDisplayName = '';
              
              const fallbackName = localName || authDisplayName || '';
              
              let dbName = userData.name || userData.nombre || '';
              if (dbName.includes('@')) dbName = '';
              
              if (sidebarConsultor) {
                const displayName = dbName || fallbackName || user.email || '';
                const nameEl = document.getElementById('sidebar-consultor-name');
                if (nameEl) nameEl.innerText = displayName.toUpperCase();
                sidebarConsultor.style.display = 'block';
              }

              // Auto-sincronizar nombre a Firestore si falta en la base de datos pero existe localmente o en Auth
              if (!dbName && fallbackName) {
                db.collection("users").doc(user.uid).set({
                  name: fallbackName
                }, { merge: true }).catch(err => console.warn("Error auto-syncing local/Auth name to Firestore:", err));
              }

              const perfilObj = {
                nit: userData.nit || localPerfil.nit || 'N/A',
                name: dbName || fallbackName || '',
                email: userData.email || user.email || '',
                finca: userData.finca || localPerfil.finca || '',
                phone: userData.phone || localPerfil.phone || localPerfil.movil || ''
              };

              // Guardar perfil en localStorage para que guardarEnHistorial() pueda leer el NIT
              localStorage.setItem('reprocost_perfil', JSON.stringify(perfilObj));
              
              // Sincronizar también con la vieja clave de perfil para compatibilidad con plugins/WhatsApp
              localStorage.setItem('reprocost_perfil_consultor', JSON.stringify({
                nit: perfilObj.nit,
                nombre: perfilObj.name || perfilObj.email,
                email: perfilObj.email,
                movil: perfilObj.phone,
                pais: 'Colombia'
              }));

              if (userData.tableroLeche) Object.assign(state.tableroLeche, userData.tableroLeche);
              if (userData.tableroCarne) Object.assign(state.tableroCarne, userData.tableroCarne);
              if (userData.insumos) {
                for (let k in userData.insumos) {
                  if (state.insumos[k]) Object.assign(state.insumos[k], userData.insumos[k]);
                }
              }
              
              // Determinar de dónde cargar la matriz
              if (globalMatriz) {
                state.matriz = window.migrarYSanitizarMatriz(globalMatriz);
                if (globalEncabezados) { state.encabezados = window.DEFAULT_ENCABEZADOS.slice(); }
                localStorage.setItem('reprocost_custom_matriz', JSON.stringify(state.matriz));
              } else if (userData.matriz && Array.isArray(userData.matriz) && userData.matriz.length > 0) {
                state.matriz = window.migrarYSanitizarMatriz(userData.matriz);
                if (userData.encabezados) { state.encabezados = window.DEFAULT_ENCABEZADOS.slice(); }
                localStorage.setItem('reprocost_custom_matriz', JSON.stringify(state.matriz));
                // Auto-migración si es el admin y la tabla global estaba vacía
                if (user.email === ADMIN_EMAIL) {
                  db.collection("global").doc("protocols").set({ matriz: state.matriz, encabezados: state.encabezados }, { merge: true })
                    .then(() => console.log("Migración automática de protocolos del admin a global."))
                    .catch(err => console.error("Error migrando a global:", err));
                }
              } else {
                state.matriz = window.migrarYSanitizarMatriz(window.DEFAULT_MATRIZ);
                state.encabezados = window.DEFAULT_ENCABEZADOS.slice();
                localStorage.setItem('reprocost_custom_matriz', JSON.stringify(state.matriz));
              }
          if (userData.logoEmpresa) {
            state.logoEmpresa = userData.logoEmpresa;
            if (typeof actualizarVistaLogo === 'function') actualizarVistaLogo();
          }

          // Restaurar inputs
          if (userData.inputs) {
            const p = userData.inputs.pi;
            if (p) {
              if (p.finca && document.getElementById('pi-finca')) document.getElementById('pi-finca').value = p.finca;
              if (p.ubicacion && document.getElementById('pi-ubicacion')) document.getElementById('pi-ubicacion').value = p.ubicacion;
              if (p.animales && document.getElementById('pi-animales')) document.getElementById('pi-animales').value = p.animales;
              if (p.fecha && document.getElementById('pi-fecha')) document.getElementById('pi-fecha').value = p.fecha;
              if (p.protocolo && document.getElementById('pi-protocolo')) document.getElementById('pi-protocolo').value = p.protocolo;
              if (p.ganaderia && document.getElementById('pi-ganaderia')) document.getElementById('pi-ganaderia').value = p.ganaderia;
              if (p.prenadas && document.getElementById('pi-prenadas')) document.getElementById('pi-prenadas').value = p.prenadas;
              if (p.porcentaje && document.getElementById('pi-porcentaje')) document.getElementById('pi-porcentaje').value = p.porcentaje;
              if (p.costoSostenimiento && document.getElementById('pi-costo-sostenimiento')) document.getElementById('pi-costo-sostenimiento').value = p.costoSostenimiento;
              if (p.checkResx1 !== undefined && document.getElementById('pi-check-resx1')) document.getElementById('pi-check-resx1').checked = p.checkResx1;
              if (p.checkResx2 !== undefined && document.getElementById('pi-check-resx2')) document.getElementById('pi-check-resx2').checked = p.checkResx2;
            }
            const r1 = userData.inputs.resx1;
            if (r1) {
              if (r1.fecha && document.getElementById('resx1-fecha')) document.getElementById('resx1-fecha').value = r1.fecha;
              if (r1.protocolo && document.getElementById('resx1-protocolo')) document.getElementById('resx1-protocolo').value = r1.protocolo;
              if (r1.prenadas && document.getElementById('resx1-prenadas')) document.getElementById('resx1-prenadas').value = r1.prenadas;
            }
            const r2 = userData.inputs.resx2;
            if (r2) {
              if (r2.prenadas && document.getElementById('resx2-prenadas')) document.getElementById('resx2-prenadas').value = r2.prenadas;
            }
          }
        } else {
          // Si el usuario es nuevo, guardar defaults iniciales
          saveStateToFirestore();
        }

        // Aplicar al DOM
        if (document.getElementById('tc-precio-leche') && state.tableroLeche.precio) document.getElementById('tc-precio-leche').value = new Intl.NumberFormat('es-CO').format(state.tableroLeche.precio);
        if (document.getElementById('tc-duracion-lactancia') && state.tableroLeche.duracion) document.getElementById('tc-duracion-lactancia').value = state.tableroLeche.duracion;
        if (document.getElementById('tc-litros-lactancia') && state.tableroLeche.litros) document.getElementById('tc-litros-lactancia').value = state.tableroLeche.litros;
        if (document.getElementById('tc-precio-carne') && state.tableroCarne.precio) document.getElementById('tc-precio-carne').value = new Intl.NumberFormat('es-CO').format(state.tableroCarne.precio);
        if (document.getElementById('tc-duracion-carne') && state.tableroCarne.duracion) document.getElementById('tc-duracion-carne').value = state.tableroCarne.duracion;
        if (document.getElementById('tc-peso-destete') && state.tableroCarne.peso) document.getElementById('tc-peso-destete').value = state.tableroCarne.peso;


        // Recalcular
        syncFases();
        renderMatriz();
        actualizarSelectProtocolos();
        
        const piProtocol = document.getElementById('pi-protocolo')?.value;
        const pifecha = document.getElementById('pi-fecha')?.value;
        if (piProtocol && pifecha) {
          window.ejecutarProtocoloInicial();
        } else {
          window.calcTableroControl();
          window.updateResultados();
        }
        lucide.createIcons();
      })
      .catch(err => {
        console.error("Error al cargar configuración de Firestore:", err);
        // Cargar matriz por defecto si hay error de permisos
        if (!state.matriz || state.matriz.length === 0) {
          state.matriz = window.migrarYSanitizarMatriz(window.DEFAULT_MATRIZ);
        }
        if (typeof renderMatriz === 'function') renderMatriz();
        if (typeof actualizarSelectProtocolos === 'function') actualizarSelectProtocolos();
        lucide.createIcons();
      })
      .catch(err => console.error("Error cargando doc del usuario:", err));
  })
  .catch(err => {
    console.error("Error obteniendo protocolos globales:", err);
    // Incluso si Firestore falla, cargar la matriz por defecto
    if (!state.matriz || state.matriz.length === 0) {
      state.matriz = window.migrarYSanitizarMatriz(window.DEFAULT_MATRIZ);
      if (typeof renderMatriz === 'function') renderMatriz();
      if (typeof actualizarSelectProtocolos === 'function') actualizarSelectProtocolos();
    }
    lucide.createIcons();
  });

    if (user.email === ADMIN_EMAIL) {
      if (navBtnAdmin) navBtnAdmin.style.display = 'inline-flex';
      cargarUsuariosAdmin();
      // Admin: mostrar el botón "Edición Bloqueada" solamente (los de edición aparecen tras la contraseña)
      const btnUnlock = document.getElementById('btn-unlock');
      if (btnUnlock) btnUnlock.style.display = 'inline-flex';
    } else {
      if (navBtnAdmin) navBtnAdmin.style.display = 'none';
      // Usuarios normales: solo ven el botón bloqueado, sin poder editar
      const btnUnlock = document.getElementById('btn-unlock');
      if (btnUnlock) btnUnlock.style.display = 'inline-flex';
      // Asegurar que los botones de edición estén ocultos
      const btnAdd = document.getElementById('btn-add-protocolo');
      const btnExcel = document.getElementById('btn-trigger-excel');
      const btnReset = document.getElementById('btn-reset-matriz');
      const btnDeleteAll = document.getElementById('btn-delete-all-protocols');
      const btnSave = document.getElementById('btn-save-matriz');
      if (btnAdd) btnAdd.style.display = 'none';
      if (btnExcel) btnExcel.style.display = 'none';
      if (btnReset) btnReset.style.display = 'none';
      if (btnDeleteAll) btnDeleteAll.style.display = 'none';
      if (btnSave) btnSave.style.display = 'none';
    }

  } else {
    // No autenticado
    if (authContainer) authContainer.style.display = 'flex';
    if (appMainLayout) appMainLayout.style.display = 'none';
    if (navBtnAdmin) navBtnAdmin.style.display = 'none';
    
    // Limpiar campos para evitar que el navegador aplique autocompletado erróneo
    setTimeout(() => {
      if (!auth.currentUser) {
        ['reg-nit', 'reg-name', 'reg-phone', 'reg-finca', 'reg-email', 'reg-pass', 'login-email', 'login-pass'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = '';
        });
      }
    }, 200);

    lucide.createIcons();
  }
});


// Alternar pantallas de login/registro
window.showLoginForm = function() {
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('auth-subtitle').innerText = "Inicia sesión para continuar";
  
  // Limpiar campos para evitar autocompletado indeseado al cambiar
  ['login-email', 'login-pass', 'reg-nit', 'reg-name', 'reg-phone', 'reg-finca', 'reg-email', 'reg-pass'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
};

window.showRegisterForm = function() {
  document.getElementById('register-form').style.display = 'block';
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('auth-subtitle').innerText = "Crea tu cuenta para comenzar a usar la app";
  
  // Limpiar campos al cambiar de pantalla
  ['login-email', 'login-pass', 'reg-nit', 'reg-name', 'reg-phone', 'reg-finca', 'reg-email', 'reg-pass'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
};

// Registro de usuarios
window.handleRegister = function(event) {
  event.preventDefault();
  const nit = document.getElementById('reg-nit').value.trim();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();
  const finca = document.getElementById('reg-finca').value.trim();
  const pass = document.getElementById('reg-pass').value;

  if (pass.length < 6) {
    alert(t("alert_pass_length"));
    return;
  }

  const btn = event.target.querySelector('button[type="submit"]');
  const origText = btn.innerText;
  btn.disabled = true;
  btn.innerText = "Registrando...";

  // Guardar perfil localmente de inmediato para evitar condiciones de carrera en onAuthStateChanged
  const perfilObj = {
    nit: nit,
    name: name,
    email: email,
    finca: finca,
    phone: phone
  };
  localStorage.setItem('reprocost_perfil', JSON.stringify(perfilObj));
  localStorage.setItem('reprocost_perfil_consultor', JSON.stringify({
    nit: nit,
    nombre: name,
    email: email,
    movil: phone,
    pais: 'Colombia'
  }));

  auth.createUserWithEmailAndPassword(email, pass)
    .then(cred => {
      // Actualizar displayName en Firebase Auth para mayor robustez
      return cred.user.updateProfile({ displayName: name })
        .catch(err => console.warn("Error actualizando displayName en Auth:", err))
        .then(() => {
          return db.collection("users").doc(cred.user.uid).set({
            uid: cred.user.uid,
            nit: nit,
            name: name,
            email: email,
            phone: phone,
            finca: finca,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          });
        });
    })
    .then(() => {
      console.log("Registro completado con éxito en Auth y Firestore");
    })
    .catch(err => {
      if (err.code === 'auth/email-already-in-use') {
        // Auto-recuperación y actualización de perfil si la contraseña coincide
        console.log("El correo ya existe. Intentando inicio de sesión de recuperación para actualizar perfil...");
        return auth.signInWithEmailAndPassword(email, pass)
          .then(cred => {
            return cred.user.updateProfile({ displayName: name })
              .catch(e => console.warn("Error actualizando displayName en Auth (login recuperación):", e))
              .then(() => {
                return db.collection("users").doc(cred.user.uid).set({
                  uid: cred.user.uid,
                  nit: nit,
                  name: name,
                  email: email,
                  phone: phone,
                  finca: finca,
                  lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
                }, { merge: true });
              });
          })
          .then(() => {
            console.log("Perfil de usuario existente actualizado con éxito en Firestore");
          })
          .catch(loginErr => {
            btn.disabled = false;
            btn.innerText = origText;
            console.error("Error en login de recuperación:", loginErr);
            alert(t("alert_email_exists"));
          });
      } else {
        btn.disabled = false;
        btn.innerText = origText;
        console.error("Error en registro:", err);
        alert(t("alert_reg_error") + " " + traducirErrorFirebase(err.code));
      }
    });
};

// Inicio de sesión
window.handleLogin = function(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value;

  const btn = event.target.querySelector('button[type="submit"]');
  const origText = btn.innerText;
  btn.disabled = true;
  btn.innerText = "Iniciando sesión...";

  auth.signInWithEmailAndPassword(email, pass)
    .then(() => {
      console.log("Sesión iniciada con éxito");
    })
    .catch(err => {
      btn.disabled = false;
      btn.innerText = origText;
      console.error("Error en login:", err);
      alert(t("alert_login_error") + " " + traducirErrorFirebase(err.code));
    });
};

// Cierre de sesión
window.handleLogout = function() {
  if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
    auth.signOut()
      .then(() => {
        // Limpiar LocalStorage sensible para evitar que otro usuario herede datos
        localStorage.removeItem('reprocost_state');
        localStorage.removeItem('reprocost_perfil_consultor');
        localStorage.removeItem('reprocost_custom_matriz');
        localStorage.removeItem('reprocost_perfil');

        document.getElementById('login-email').value = '';
        document.getElementById('login-pass').value = '';
        document.getElementById('reg-nit').value = '';
        document.getElementById('reg-name').value = '';
        document.getElementById('reg-email').value = '';
        document.getElementById('reg-phone').value = '';
        document.getElementById('reg-finca').value = '';
        document.getElementById('reg-pass').value = '';
        
        // Recargar la página para limpiar todo el estado en memoria
        location.reload();
      })
      .catch(err => {
        console.error("Error al cerrar sesión:", err);
      });
  }
};

// 5.5 IMPORTACIÓN DE PROTOCOLOS DESDE EXCEL
window.cargarProtocolosDesdeExcelData = function(arrayBuffer) {
  try {
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, {type: 'array'});
    
    let sheetName = workbook.SheetNames.find(n => n.toLowerCase().replace(/\s+/g, '') === 'tablerodecontrol');
    if (!sheetName) {
      sheetName = workbook.SheetNames.find(n => n.toLowerCase().includes('tablero') || n.toLowerCase().includes('control'));
    }
    if (!sheetName) {
      sheetName = workbook.SheetNames[0];
    }
    
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) {
      throw new Error("No se pudo encontrar la hoja del Tablero de control en el archivo Excel.");
    }
    
    const rawData = XLSX.utils.sheet_to_json(sheet, {header: 1, defval: '-'});
    const nuevosProtocolos = [];
    
    // BÚSQUEDA DINÁMICA DE ENCABEZADOS Y COLUMNAS
    let headerRowIndex = 0; // Por defecto la primera fila
    for (let i = 0; i < rawData.length && i < 30; i++) {
      const row = rawData[i] || [];
      let hasNameCandidate = false;
      let hasDataCandidate = false;
      
      for (let cell of row) {
        const cleanStr = String(cell || '').toLowerCase().replace(/\s+/g, ' ').trim();
        if (cleanStr.includes('nombre') || cleanStr.includes('protocolo') || cleanStr.includes('hormona')) hasNameCandidate = true;
        if (cleanStr.includes('dib') || cleanStr.includes('dispositivo') || cleanStr.includes('gnrh') || cleanStr.includes('b.e')) hasDataCandidate = true;
      }
      
      if (hasNameCandidate && hasDataCandidate) {
        headerRowIndex = i;
        break;
      }
    }
    
    let headerRow = rawData[headerRowIndex] || [];
    let nameColIndex = 0; 
    let dataStartIndex = 1; 
    
    for (let c = 0; c < headerRow.length; c++) {
      const cleanVal = String(headerRow[c] || '').toLowerCase().replace(/\s+/g, ' ').trim();
      
      // Si la columna dice "Nº" la ignoramos como nombre
      if (cleanVal === 'nº' || cleanVal.includes('nº prot') || cleanVal === 'n' || cleanVal === 'id') {
         continue;
      }
      
      if (cleanVal.includes('nombre') || cleanVal.includes('protocolos') || cleanVal === 'protocolo' || cleanVal.includes('hormona')) {
        nameColIndex = c;
      }
      
      if (cleanVal.includes('dib') || cleanVal.includes('dispositivo') || cleanVal.includes('b.e.') || cleanVal.includes('be 1') || cleanVal.includes('gnrh')) {
        dataStartIndex = c;
        break; // La primera columna de datos encontrada marca el inicio
      }
    }
    
    // Salvaguarda: los datos siempre deben ir después del nombre
    if (dataStartIndex <= nameColIndex) {
        dataStartIndex = nameColIndex + 1;
    }
    
    // EXTRACCIÓN DINÁMICA DE ENCABEZADOS
    const nuevosEncabezados = [];
    for (let i = 0; i < state.colDefs.length; i++) {
      let headVal = String(headerRow[dataStartIndex + i] || '').trim();
      if (!headVal || headVal === '-') headVal = 'Col ' + (i + 1);
      
      // Permitir saltos de línea (Excel alt+enter) convirtiéndolos a <br> y agregar <small> si es posible
      headVal = headVal.replace(/\n/g, '<br>');
      nuevosEncabezados.push(headVal);
    }
    state.encabezados = nuevosEncabezados;
    
    for (let r = headerRowIndex + 1; r < rawData.length; r++) {
      const row = rawData[r];
      if (!row || row.length <= 1) continue;
      
      const pName = String(row[nameColIndex] || '').trim();
      if (!pName || pName === '-' || pName.toLowerCase() === 'vacio' || pName.toLowerCase().startsWith('vacio') || pName.toLowerCase() === 'seleccione protocolo') {
        continue;
      }
      
      const valStr = (val) => {
        if (val === null || val === undefined) return '-';
        let s = String(val).trim();
        if (s === '' || s === '0' || s === '0.00' || s === '0.0') {
          return s === '' ? '-' : s;
        }
        return s;
      };
      
      const days = [];
      for (let i = 0; i < state.colDefs.length; i++) {
        days.push(valStr(row[dataStartIndex + i]));
      }
      
      const obs = valStr(row[dataStartIndex + state.colDefs.length]);
      
      // Encontrar el índice de iate. Actualmente está en la posición 15 ('iate') en colDefs
      const iateIndex = state.colDefs.indexOf('iate');
      const iate = iateIndex !== -1 ? days[iateIndex] : '-';
      const iaVal = iate !== '-' ? iate : '10';
      
      nuevosProtocolos.push({
        name: pName,
        days: days,
        hours: Array(state.colDefs.length).fill('08:00'),
        ia: iaVal,
        obs: obs !== '-' ? obs : ''
      });
    }
    
    if (nuevosProtocolos.length === 0) {
      throw new Error("No se encontraron protocolos válidos en el rango esperado (B10 en adelante) de la hoja.");
    }
    
    state.matriz = window.migrarYSanitizarMatriz(nuevosProtocolos);
    if (typeof renderMatriz === 'function') renderMatriz();
    actualizarSelectProtocolos();
    // Guardar a nivel global y local
    guardarMatrizProtocolos(); 
    return true;
  } catch (error) {
    console.error("Error al procesar Excel:", error);
    alert(t("alert_excel_error") + " " + error.message);
    return false;
  }
};

window.handleImportarExcelFile = function(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const data = e.target.result;
    const success = window.cargarProtocolosDesdeExcelData(data);
    if (success) {
      alert(t("alert_protocols_imported"));
    }
    event.target.value = '';
  };
  reader.onerror = function() {
    alert(t("alert_excel_read_error"));
    event.target.value = '';
  };
  reader.readAsArrayBuffer(file);
};

window.handleImportarAliados = function(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, {type: 'array'});
      const firstSheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[firstSheetName];
      const rawData = XLSX.utils.sheet_to_json(sheet, {header: 1, defval: ''});
      
      if (rawData.length === 0) throw new Error("El archivo está vacío.");
      
      const headers = rawData[0];
      window.aliadosData = {
        headers: headers,
        rows: []
      };
      let hasData = false;
      for (let i = 1; i < rawData.length; i++) {
        const row = rawData[i];
        if (row.every(cell => cell === '')) continue;
        hasData = true;
        const rowDataToStore = [];
        for (let j = 0; j < headers.length; j++) {
          rowDataToStore.push(row[j] !== undefined ? row[j] : '');
        }
        window.aliadosData.rows.push(rowDataToStore);
      }
      
      if (!hasData) {
        window.aliadosData.rows = [];
      }
      
      if (typeof window.renderAliadosCards === 'function') {
        window.renderAliadosCards();
      }
      
      alert(t("alert_aliados_imported"));
    } catch (error) {
      console.error("Error al procesar Excel:", error);
      alert(t("alert_excel_error") + " " + error.message);
    }
    event.target.value = '';
  };
  reader.onerror = function() {
    alert(t("alert_excel_read_error"));
    event.target.value = '';
  };
  reader.readAsArrayBuffer(file);
};

// Traducir códigos de error de Firebase
function traducirErrorFirebase(code) {
  switch (code) {
    case 'auth/email-already-in-use':
      return "Este correo electrónico ya está registrado por otro usuario.";
    case 'auth/invalid-email':
      return "El formato del correo electrónico no es válido.";
    case 'auth/weak-password':
      return "La contraseña es muy débil. Debe tener al menos 6 caracteres.";
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return "Correo o contraseña incorrectos. Por favor verifica tus credenciales.";
    case 'auth/network-request-failed':
      return "Error de conexión de red. Inténtalo de nuevo más tarde.";
    default:
      return "Ocurrió un error inesperado. Código: " + code;
  }
}

// Cargar lista de usuarios para el administrador
window.cargarUsuariosAdmin = function() {
  const tbody = document.getElementById('admin-users-body');
  const totalUsersEl = document.getElementById('admin-total-users');
  const totalAccessesEl = document.getElementById('admin-total-accesses');
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="7" style="text-align: center;" class="text-muted">${t("admin_loading")}</td></tr>';

  db.collection("users").orderBy("createdAt", "desc").get()
    .then(querySnapshot => {
      tbody.innerHTML = '';
      if (totalUsersEl) totalUsersEl.innerText = querySnapshot.size;

      let totalAccessesSum = 0;

      if (querySnapshot.empty) {
        if (totalAccessesEl) totalAccessesEl.innerText = '0';
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center;" class="text-muted">${t("admin_empty")}</td></tr>';
        return;
      }

      querySnapshot.forEach(doc => {
        const userData = doc.data();
        totalAccessesSum += (userData.accessCount || 0);
        let fechaStr = "N/A";
        if (userData.createdAt) {
          const d = userData.createdAt.toDate();
          fechaStr = d.toLocaleString('es-ES', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        }
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong>${userData.name || 'Sin nombre'}</strong></td>
          <td>${userData.email || 'N/A'}</td>
          <td>
            <a href="https://wa.me/${(userData.phone || '').replace(/[^0-9]/g, '')}" target="_blank" style="color: #10b981; display: inline-flex; align-items: center; gap: 4px; text-decoration: none; font-weight: 500;">
              ${userData.phone || 'N/A'}
            </a>
          </td>
          <td>${userData.finca || 'N/A'}</td>
          <td><code>${userData.nit || 'N/A'}</code></td>
          <td style="text-align: center;"><span class="badge" style="background: rgba(14, 165, 233, 0.15); color: var(--accent); padding: 4px 8px; border-radius: 6px; font-weight: bold;">${userData.accessCount || 0}</span></td>
          <td>${fechaStr}</td>
        `;
        tbody.appendChild(tr);
      });

      if (totalAccessesEl) totalAccessesEl.innerText = totalAccessesSum;
    })
    .catch(err => {
      console.error("Error al cargar usuarios de Firestore:", err);
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--danger);">Error al cargar datos. Asegúrate de tener permisos de administrador.</td></tr>`;
      if (totalAccessesEl) totalAccessesEl.innerText = 'Error';
    });
};

// Sincronizar estado completo a Firestore
window.saveStateToFirestore = function() {
  if (auth.currentUser) {
    const inputs = {
      pi: {
        finca: document.getElementById('pi-finca')?.value || '',
        ubicacion: document.getElementById('pi-ubicacion')?.value || '',
        animales: document.getElementById('pi-animales')?.value || '0',
        fecha: document.getElementById('pi-fecha')?.value || '',
        protocolo: document.getElementById('pi-protocolo')?.value || '',
        ganaderia: document.getElementById('pi-ganaderia')?.value || '',
        prenadas: document.getElementById('pi-prenadas')?.value || '0',
        porcentaje: document.getElementById('pi-porcentaje')?.value || '0',
        costoSostenimiento: document.getElementById('pi-costo-sostenimiento')?.value || '0',
        checkResx1: document.getElementById('pi-check-resx1')?.checked || false,
        checkResx2: document.getElementById('pi-check-resx2')?.checked || false
      },
      resx1: {
        fecha: document.getElementById('resx1-fecha')?.value || '',
        protocolo: document.getElementById('resx1-protocolo')?.value || '',
        prenadas: document.getElementById('resx1-prenadas')?.value || '0'
      },
      resx2: {
        prenadas: document.getElementById('resx2-prenadas')?.value || '0'
      }
    };

    const perfil = JSON.parse(localStorage.getItem('reprocost_perfil')) || JSON.parse(localStorage.getItem('reprocost_perfil_consultor')) || {};

    db.collection("users").doc(auth.currentUser.uid).set({
      name: perfil.name || perfil.nombre || auth.currentUser.displayName || '',
      email: auth.currentUser.email || perfil.email || '',
      nit: perfil.nit || '',
      phone: perfil.phone || perfil.movil || '',
      finca: perfil.finca || '',
      tableroLeche: state.tableroLeche,
      tableroCarne: state.tableroCarne,
      insumos: state.insumos,
      matriz: state.matriz,
      encabezados: state.encabezados,
      logoEmpresa: state.logoEmpresa || '',
      inputs: inputs,
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true })
    .then(() => {
      console.log("Estado sincronizado en Firestore");
      // Si es el admin o ingresó la contraseña maestra, guardamos también en la colección global
      if (auth.currentUser && (auth.currentUser.email === ADMIN_EMAIL || window.hasAdminPasswordForMatrix)) {
        db.collection("global").doc("protocols").set({ matriz: state.matriz, encabezados: state.encabezados }, { merge: true })
          .then(() => {
            console.log("Protocolos globales actualizados exitosamente.");
          })
          .catch(err => {
            console.error("Error guardando en global:", err);
          });
      }
    })
    .catch(err => console.error("Error al sincronizar con Firestore:", err));
  }
};

const formatter = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });
window.dashCatCosts = { pi: { hormonas:0, genetica:0, asistencia:0, diagnostico:0, iate:0 }, resx1: { hormonas:0, genetica:0, asistencia:0, diagnostico:0, iate:0 }, resx2: { hormonas:0, genetica:0, asistencia:0, diagnostico:0, iate:0 } };

// --- FUNCIONES AYUDANTES PARA ENCONTRAR RESINC. POR NOMBRE ---
window.isResx1 = function(p) {
  if(!p || !p.name) return false;
  let n = p.name.toLowerCase();
  return n.includes('resincronizacion 1') || n.includes('resincronización 1') || n.includes('resx 1') || n.includes('resx1') || n.includes('rec 1') || p.role === 'resx1' || p.role === 'resx1b';
};
window.isResx2 = function(p) {
  if(!p || !p.name) return false;
  let n = p.name.toLowerCase();
  return n.includes('resincronizacion 2') || n.includes('resincronización 2') || n.includes('resx 2') || n.includes('resx2') || n.includes('rec 2') || p.role === 'resx2' || p.role === 'resx2b';
};
window.getResx1 = function(matriz) {
  if(!matriz) return null;
  const piName = (document.getElementById('pi-protocolo')?.value || '').toLowerCase();
  const piProtocol = matriz.find(x => (x.name || '').toLowerCase() === piName);
  const isTE = piName.includes('te') || piName.includes('embrion') || piName.includes('embrión') || piName.includes('transferencia') || 
               (piProtocol && (piProtocol.obs || '').toLowerCase().includes('transferencia'));
  const targetRole = isTE ? 'resx1' : 'resx1b';
  let p = matriz.find(x => x.role === targetRole);
  if (p) return p;
  p = matriz.find(x => { let n = (x.name||'').toLowerCase(); return n.includes('resincronizacion 1') || n.includes('resincronización 1') || n.includes('resx 1') || n.includes('resx1') || n.includes('rec 1'); });
  return p || matriz.find(x => x.role === 'resx1' || x.role === 'resx1b');
};
window.getResx2 = function(matriz) {
  if(!matriz) return null;
  const piName = (document.getElementById('pi-protocolo')?.value || '').toLowerCase();
  const piProtocol = matriz.find(x => (x.name || '').toLowerCase() === piName);
  const isTE = piName.includes('te') || piName.includes('embrion') || piName.includes('embrión') || piName.includes('transferencia') || 
               (piProtocol && (piProtocol.obs || '').toLowerCase().includes('transferencia'));
  const targetRole = isTE ? 'resx2' : 'resx2b';
  let p = matriz.find(x => x.role === targetRole);
  if (p) return p;
  p = matriz.find(x => { let n = (x.name||'').toLowerCase(); return n.includes('resincronizacion 2') || n.includes('resincronización 2') || n.includes('resx 2') || n.includes('resx2') || n.includes('rec 2'); });
  return p || matriz.find(x => x.role === 'resx2' || x.role === 'resx2b');
};

// --- i18n: DICCIONARIO DE TRADUCCIONES ---

window.tProtocol = function(val) {
  if (!val) return val;
  const currentLang = window.currentLang || 'es';
  if (currentLang === 'es') return val;
  
  const mapEn = {
    'Resincronizacion 1 (IATF)': 'Resynchronization 1 (FTAI)',
    'Resincronizacion 2 (IATF)': 'Resynchronization 2 (FTAI)',
    'Tradicional (IATF)': 'Traditional (FTAI)',
    'Jsynch (IATF)': 'Jsynch (FTAI)',
    'Novillas (IATF)': 'Heifers (FTAI)',
    'Ovsynch (IATF)': 'Ovsynch (FTAI)',
    'Cosynch (IATF)': 'Cosynch (FTAI)',
    'Heatsynch (IATF)': 'Heatsynch (FTAI)',
    'Presynch (IA)': 'Presynch (AI)',
    'Selectsynch (IA)': 'Selectsynch (AI)',
    'Dib Vacas (IA)': 'Dib Cows (AI)',
    'Dib Novillas (IA)': 'Dib Heifers (AI)',
    'DoblePGF2@ (IA)': 'DoublePGF2@ (AI)',
    'Monta Natural 1 (IA)': 'Natural Mating 1 (AI)',
    'Monta Natural 2 (IA)': 'Natural Mating 2 (AI)',
    'Monta Natural 3 DIB (IA)': 'Natural Mating 3 DIB (AI)',
    'Receptoras 1 (IATF)': 'Recipients 1 (FTAI)',
    'Receptoras 1 (Te)': 'Recipients 1 (ET)',
    'Receptoras 2 (Te)': 'Recipients 2 (ET)',
    'Receptoras 2 (IATF)': 'Recipients 2 (FTAI)',
    'Receptoras': 'Recipients',
    'receptoras': 'recipients',
    'Utilizar DIB de segundo uso - Iatf 48-60 hs GnRh opcional': 'Use 2nd use DIB - FTAI 48-60 hs optional GnRh',
    'Transferencia de Embriones': 'Embryo Transfer',
    'IA celo detectado ó Toro x 5 dias': 'AI detected heat or Bull x 5 days',
    'Observar celo 1-5 dias IA 12 horas post celo estable': 'Observe heat 1-5 days AI 12 hours post stable heat',
    'IA celo detectado + GnRh': 'AI detected heat + GnRh',
    'Observar celo - IA 12 horas post celo estable': 'Observe heat - AI 12 hours post stable heat',
    'IATF 48-52 horas post Pgf2@': 'FTAI 48-52 hours post Pgf2@',
    'IATF 48 horas + GnRh': 'FTAI 48 hours + GnRh',
    'IATF 17-24 horas post GnRh': 'FTAI 17-24 hours post GnRh',
    'IATF 24-32 horas': 'FTAI 24-32 hours',
    'IATF 72 hs + GnRh': 'FTAI 72 hs + GnRh',
    'IATF 48-60 hs - GnRh Opcional': 'FTAI 48-60 hs - Optional GnRh',
    'IATF 48-56 hs - GnRh Opcional': 'FTAI 48-56 hs - Optional GnRh',
    'Utilizar DIB de segundo uso - iatf 48-60 hs GnRh opcional': 'Use 2nd use DIB - FTAI 48-60 hs optional GnRh'
  };
  
  const mapPt = {
    'Resincronizacion 1 (IATF)': 'Ressincronização 1 (IATF)',
    'Resincronizacion 2 (IATF)': 'Ressincronização 2 (IATF)',
    'Tradicional (IATF)': 'Tradicional (IATF)',
    'Jsynch (IATF)': 'Jsynch (IATF)',
    'Novillas (IATF)': 'Novilhas (IATF)',
    'Ovsynch (IATF)': 'Ovsynch (IATF)',
    'Cosynch (IATF)': 'Cosynch (IATF)',
    'Heatsynch (IATF)': 'Heatsynch (IATF)',
    'Presynch (IA)': 'Presynch (IA)',
    'Selectsynch (IA)': 'Selectsynch (IA)',
    'Dib Vacas (IA)': 'Dib Vacas (IA)',
    'Dib Novillas (IA)': 'Dib Novilhas (IA)',
    'DoblePGF2@ (IA)': 'DuploPGF2@ (IA)',
    'Monta Natural 1 (IA)': 'Monta Natural 1 (IA)',
    'Monta Natural 2 (IA)': 'Monta Natural 2 (IA)',
    'Monta Natural 3 DIB (IA)': 'Monta Natural 3 DIB (IA)',
    'Receptoras 1 (IATF)': 'Receptoras 1 (IATF)',
    'Receptoras 1 (Te)': 'Receptoras 1 (TE)',
    'Receptoras 2 (Te)': 'Receptoras 2 (TE)',
    'Receptoras 2 (IATF)': 'Receptoras 2 (IATF)',
    'Receptoras': 'Receptoras',
    'receptoras': 'receptoras',
    'Utilizar DIB de segundo uso - Iatf 48-60 hs GnRh opcional': 'Usar DIB de segundo uso - IATF 48-60 hs GnRh opcional',
    'Transferencia de Embriones': 'Transferência de Embriões',
    'IA celo detectado ó Toro x 5 dias': 'IA cio detectado ou Touro x 5 dias',
    'Observar celo 1-5 dias IA 12 horas post celo estable': 'Observar cio 1-5 dias IA 12 horas pós cio estável',
    'IA celo detectado + GnRh': 'IA cio detectado + GnRh',
    'Observar celo - IA 12 horas post celo estable': 'Observar cio - IA 12 horas pós cio estável',
    'IATF 48-52 horas post Pgf2@': 'IATF 48-52 horas pós Pgf2@',
    'IATF 48 horas + GnRh': 'IATF 48 horas + GnRh',
    'IATF 17-24 horas post GnRh': 'IATF 17-24 horas pós GnRh',
    'IATF 24-32 horas': 'IATF 24-32 horas',
    'IATF 72 hs + GnRh': 'IATF 72 hs + GnRh',
    'IATF 48-60 hs - GnRh Opcional': 'IATF 48-60 hs - GnRh Opcional',
    'IATF 48-56 hs - GnRh Opcional': 'IATF 48-56 hs - GnRh Opcional',
    'Utilizar DIB de segundo uso - iatf 48-60 hs GnRh opcional': 'Usar DIB de segundo uso - IATF 48-60 hs GnRh opcional'
  };

  if (currentLang === 'en') {
    return mapEn[val] || val;
  }
  if (currentLang === 'pt') {
    return mapPt[val] || val;
  }
  return val;
};
window.translations = {
  es: {
    app_title: "Iatf Pro",
    by_solugan: "por Solugan SG",
    auth_register_title: "Registro de Usuario",
    auth_nit: "Identificación (NIT o C.C.)",
    auth_name: "Nombre Completo",
    auth_country: "País",
    auth_phone: "Teléfono",
    auth_farm: "Nombre de Finca o Proyecto",
    auth_email: "Correo Electrónico",
    auth_pass: "Contraseña",
    auth_login_link: "¿Ya tienes cuenta? Inicia sesión",
    auth_register_link: "¿No tienes cuenta? Regístrate aquí",
    sidebar_active_user: "Usuario Activo",
    config_delete_all: "ELIMINAR TODOS",
    config_th_protocol: "Protocolo",
    config_th_obs: "Observaciones",
    config_th_actions: "Acciones",
    und_ml: "ml / Und",
    resx1_prot: "Protocolo Resincronización 1",
    resx1_date_auto: "Fecha Inicio (Auto)",
    resx1_time: "Hora de Inicio",
    resx1_preg: "Preñeces Resincronización 1 (Proyectado o Real)",
    btn_ajustar_precios: "AJUSTAR PRECIOS",
    btn_reiniciar_fase: "REINICIAR FASE",
    table_th_day: "Día",
    table_th_date: "Fecha",
    table_th_time: "Hora",
    table_th_hormone: "Hormona / Insumo",
    table_th_dose: "Dosis",
    table_th_value: "Valor",
    resx2_prot: "Protocolo Resincronización 2",
    resx2_preg: "Preñeces Resincronización 2 (Proyectado o Real)",
    dash_pi: "Protocolo Inicial (PI)",
    admin_loading_data: "Cargando datos...",
    aliados_contact_wa: "Contactar por WhatsApp",

    sidebar_dashboard: "Tablero de Control",
    sidebar_pi: "Protocolo Inicial",
    sidebar_resx1: "Resincronización 1",
    sidebar_resx2: "Resincronización 2",
    sidebar_dash_roi: "Dashboard y ROI",
    sidebar_history: "Buscador Histórico",
    sidebar_info: "Tablas de Información",
    tc_title: "TABLERO DE CONTROL CARNE Y LECHE",
    tc_subtitle: "Métricas productivas base y matriz de programación de protocolos",
    tc_finca: "Finca",
    tc_nit: "NIT / C.C.",
    tc_pais: "País",
    tc_movil: "Móvil / WhatsApp",
    tc_ganaderia: "Tipo de Ganadería",
    tc_leche_title: "Producción de Leche",
    tc_carne_title: "Producción de Carne",
    tc_precio_leche: "Precio Venta Litro Leche",
    tc_precio_carne: "Precio Venta Kilo Carne",
    tc_duracion: "Duración Lactancia",
    tc_duracion_carne: "Días a Destete",
    tc_litros: "Litros Por Lactancia",
    tc_peso: "Peso Destete",
    tc_promedio_lts: "Promedio Lts/Animal",
    tc_promedio_kg: "Promedio Kg/Animal",
    tc_ingreso_leche: "Ingreso Venta Leche/Animal",
    tc_ingreso_carne: "Ingreso Venta Carne/Animal",
    btn_limpiar: "Limpiar",
    btn_guardar: "GUARDAR REPORTE",
    btn_wa: "ENVIAR POR WA",
    btn_edit: "EDITAR",
    btn_new: "NUEVO",
    btn_show: "MOSTRAR",
    btn_hide: "OCULTAR",
    btn_delete: "BORRAR DATOS",
    btn_config: "Configuración precios y dosis",
    btn_excel: "EXCEL",
    btn_pdf: "PDF",
    evento_te: "EVENTO: TRANSFERENCIA DE EMBRIONES",
    pi_title: "Protocolo Inicial",
    pi_subtitle: "Generación de cronograma detallado comercial y aplicado.",
    pi_date: "Fecha de Inicio",
    pi_time: "Hora de Inicio",
    pi_select_p: "Protocolo a Sincronizar",
    pi_animals: "Animales a Sincronizar",
    pi_preg: "Preñeces (Proyectado o Dx1 Real)",
    pi_include_resync: "¿Deseas incluir fases de resincronización?",
    pi_include_resx1: "INCLUIR Resincronización 1",
    pi_include_resx2: "INCLUIR Resincronización 2",
    resx1_title: "Resincronización 1",
    resx1_subtitle: "Gestión de animales vacíos tras el primer diagnóstico (Dx1).",
    resx1_animals: "Animales en Resincronización (Vacías PI)",
    resx2_title: "Resincronización 2",
    resx2_subtitle: "Gestión de animales vacíos tras el segundo diagnóstico (Dx2).",
    resx2_animals: "Animales en Resincronización (Vacías Resincronización 1)",
    dash_title: "Reporte de Sincronización y ROI",
    dash_protocolo: "Protocolo",
    dash_animales: "Animales Sincronizados",
    stat_inversion: "Inversión Total Aplicada",
    stat_ingreso: "Ingreso Bruto Proyectado",
    stat_costo_p: "Costo por Preñez",
    stat_exito: "Éxito Reproductivo",
    stat_roi: "Retorno Inversión (ROI)",
    stat_utilidad: "Utilidad Neta Proyectada",
    dash_roi_table: "Resumen Financiero (ROI)",
    dash_investment_breakdown: "Desglose de Inversión",
    hist_title: "Buscador Histórico de Protocolos",
    hist_subtitle: "Consulta el histórico de trabajos realizados filtrando por NIT.",
    hist_btn: "BUSCAR AHORA",
    modal_title: "Configuración de Precios e Insumos",
    modal_subtitle: "Mostrando exclusivamente los insumos requeridos por el protocolo actual.",
    col_insumo: "Insumo / Servicio",
    col_dosis: "Dosis Estándar",
    col_presentacion: "Presentación Producto",
    col_valor_c: "VALOR DE COMPRA",
    col_cant: "Cant. a comprar",
    col_costo_total: "Costo Consolidado ($)",
    col_valor_d: "VALOR DOSIS ($)",
    modal_total_hormonas: "TOTAL COMPRA HORMONAS:",
    info_title: "Tablas de Información y Referencia",
    info_subtitle: "Consulta de parámetros técnicos y bases de datos del sistema.",
    tc_matriz_title: "MATRIZ DE PROTOCOLOS",
    btn_show_p: "MOSTRAR PROTOCOLO",
    btn_hide_p: "OCULTAR PROTOCOLO",
    btn_reset: "Restaurar Base",
    btn_save: "Guardar y Bloquear",
    // Categorías
    cat_hormonas: "MEDICAMENTOS HORMONALES",
    cat_asistencia: "ASISTENCIA TÉCNICA",
    cat_iate: "HONORARIOS IA / TE",
    cat_genetica: "MATERIAL GENÉTICO",
    cat_diagnostico: "DIAGNÓSTICO Y OTROS",
    // Insumos y Actividades
    ins_dib: "Dispositivo Intravaginal Bovino",
    ins_prog_iny: "Progesterona Injetável",
    ins_prog_iny: "Progesterona Inyectable",
    ins_be1: "Benzoato de Estradiol (1a Dosis)",
    ins_be2: "Benzoato de Estradiol (2a Dosis)",
    ins_gnrh1: "GnRh (1a Dosis)",
    ins_gnrh2: "GnRh (2a Dosis)",
    ins_pgf1: "Prostaglandina (1a Dosis)",
    ins_pgf2: "Prostaglandina (2a Dosis)",
    ins_pgf3: "Prostaglandina (3a Dosis)",
    ins_ecg: "eCG (Gonadotropina)",
    ins_ce: "Cipionato de Estradiol",
    ins_gen: "Genética (Semen/Embrión)",
    ins_mo1: "Asistencia Técnica 1",
    ins_mo2: "Asistencia Técnica 2",
    ins_iate: "IA / TE",
    ins_dx1: "Diagnóstico Preñez Dx1",
    ins_dx2: "Diagnóstico Preñez Dx2",
    ins_retdib: "Retiro DIB",
    ins_opu: "Aspiración Folicular (OPU)",
    act_ia: "EVENTO: INSEMINACIÓN ARTIFICIAL",
    obs_label: "Obs:",
    pi_hormones_ref: "Hormonas/Vaca",
    pi_iate_ref: "IA/TE/Vaca",
    r1_hormones_ref: "Hormonas/Vaca",
    r1_iate_ref: "IA/TE/Vaca",
    r2_hormones_ref: "Hormonas/Vaca",
    r2_iate_ref: "IA/TE/Vaca",
    btn_contact_wa: "Contáctenos",
    contact_placeholder: "Escribe tu mensaje aquí...",
    msg_select_pf: "Por favor selecciona un Protocolo y una Fecha de Inicio antes de continuar.",
    sidebar_aliados: "Aliados Comerciales",
    sidebar_admin: "Panel Admin",
    btn_logout: "Cerrar Sesión",
    aliados_title: "Aliados Comerciales",
    aliados_subtitle: "Directorio de aliados y socios estratégicos.",
    tc_finca_name: "Nombre de la Finca / Proyecto",
    tc_finca_placeholder: "Nombre del predio",
    tc_location: "Ubicación",
    tc_location_placeholder: "Municipio / Dpto",
    opt_select: "-- SELECCIONAR --",
    opt_select_protocol: "-- SELECCIONAR PROTOCOLO --",
    opt_lecheria: "Lechería Especializada",
    opt_cria: "Cría Comercial",
    opt_puro: "Ganado Puro",
    opt_doble: "Doble Propósito",
    tc_costo_diario: "Costo Sostenimiento Diario",
    tc_costo_diario_sub: "Costo de manutención diario por animal",
    msg_edit_active: "Modo Edición Activo. Puedes añadir, modificar o eliminar protocolos.",
    msg_view_mode: "Modo Consulta. Haz clic en \"Edición Bloqueada\" para modificar.",
    btn_hide_p: "Ocultar Protocolos",
    modal_val_hormona: "VALOR HORMONA APLICADA",
    modal_val_genetica: "VALOR COMPRA GENÉTICA",
    modal_val_asistencia: "VALOR ASISTENCIA TÉCNICA",
    modal_val_iate: "VALOR IA / TE",
    modal_val_prenez: "VALOR CONF. PREÑEZ",
    th_dia: "Día",
    th_fecha: "Fecha",
    th_hora: "Hora",
    th_actividad: "ACTIVIDAD / INSUMO",
    th_insumo: "Hormona / Insumo",
    th_dosis: "DOSIS",
    th_und: "UND",
    th_val_unitario: "VALOR UNITARIO",
    th_inv_total: "INVERSIÓN TOTAL",
    lbl_inv_animal: "INVERSIÓN TOTAL APLICADA POR ANIMAL:",
    lbl_inv_total: "INVERSIÓN TOTAL/VACA",
    lbl_desglose: "DESGLOSE DE INVERSIÓN POR RUBROS",
    cat_hormonas: "Hormonas",
    cat_genetica: "Genética (Semen/Embrión)",
    cat_asistencia: "ASISTENCIA TÉCNICA",
    cat_iate: "HONORARIOS IA / TE",
    cat_confirmacion: "Confirmación de Preñez",
    card_inicio: "Inicio",
    card_inseminar: "Inseminar: Día",
    btn_cancel: "Cancelar",
    btn_update_system: "Actualizar Sistema",
    dash_inv_tot: "Inversión Total Proyecto",
    dash_cost_preg: "Costo / Preñez Promedio",
    dash_roi: "ROI (Retorno Inversión)",
    dash_prot_horm: "Protocolo Hormonal",
    dash_gen_vaca: "Genética / Vaca",
    dash_asis_vaca: "Asistencia Técnica / Vaca",
    dash_iate_vaca: "Honorarios IA-TE / Vaca",
    dash_diag_vaca: "Confirmación Preñez / Vaca",
    dash_exito_rep: "Éxito Reproductivo",
    dash_preg_stage: "Preñez por Etapa",
    dash_net_profit: "Utilidad Neta",
    dash_concept: "Concepto",
    dash_consolidated: "Consolidado",
    dash_milk: "Leche",
    dash_meat: "Carne",
    hist_title: "Buscador Histórico de Protocolos",
    hist_subtitle: "Consulta el histórico de trabajos realizados filtrando por NIT.",
    hist_search_label: "Ingresa el NIT o C.C. para buscar",
    hist_btn_search: "BUSCAR AHORA",
    hist_results_title: "Resultados encontrados",
    hist_th_fecha: "Fecha",
    hist_th_finca: "Finca",
    hist_th_protocol: "Protocolo",
    hist_th_animales: "Animales",
    hist_th_preg: "Preñeces",
    hist_th_inv: "Inversión",
    hist_th_actions: "Acciones",
    hist_empty_msg: "Ingresa un NIT para ver el histórico de protocolos realizados.",
    admin_title: "Panel de Administración",
    admin_subtitle: "Visualiza y gestiona las personas registradas en tu aplicación",
    admin_tot_users: "Total Usuarios Registrados",
    admin_tot_acc: "Total Accesos Globales",
    admin_th_name: "Nombre",
    admin_th_email: "Correo",
    admin_th_phone: "Teléfono",
    admin_th_farm: "Finca",
    admin_th_nit: "NIT / C.C.",
    admin_th_acc: "Accesos",
    admin_th_date: "Fecha de Registro",
    aliados_dir: "Directorio",
    btn_load_excel: "Cargar Excel",
    btn_save_cloud: "Guardar en Nube",
    aliados_empty: "No hay aliados cargados. Usa el botón de candado para Cargar Excel o espera a que sincronicen desde la nube.",
    aliados_prod_serv: "Productos y Servicios",
    aliados_nota: "Nota Adicional",
    col_presentacion: "Presentación Producto",
    col_valor_c: "VALOR DE COMPRA",
    alert_pass_length: "La contraseña debe tener al menos 6 caracteres.",
    alert_email_exists: "El correo electrónico ya está registrado. Si es tu cuenta, verifica la contraseña ingresada.",
    alert_reg_error: "Error al registrarse:",
    alert_login_error: "Error al iniciar sesión:",
    alert_excel_error: "Error al procesar el Excel:",
    alert_protocols_imported: "¡Protocolos importados exitosamente desde el archivo Excel y guardados para todos los usuarios!",
    alert_excel_read_error: "Error al leer el archivo Excel.",
    alert_aliados_imported: "¡Directorio de aliados importado exitosamente!",
    alert_vital_protocol: "Este protocolo de resincronización es vital para el sistema y no se puede eliminar.",
    alert_wrong_pass: "Contraseña incorrecta.",
    alert_protocols_restored: "Protocolos base restaurados correctamente.",
    alert_protocols_deleted: "Protocolos y encabezados eliminados correctamente. Puedes cargar los nuevos desde Excel o manualmente.",
    alert_changes_saved: "Cambios guardados con éxito.",
    alert_select_protocol: "⚠️ Por favor, selecciona primero un 'Protocolo' para configurar sus precios.",
    alert_invalid_protocol: "Selecciona un protocolo válido.",
    alert_cal_update_error: "Hubo un error actualizando el calendario:",
    alert_project_cleared: "Todos los datos del proyecto han sido borrados correctamente.",
    alert_missing_fields: "Por favor, completa al menos Nombre, Identificación y Teléfono.",
    alert_export_nodata: "⚠️ No hay datos suficientes para exportar. Selecciona un protocolo y genera el cronograma primero.",
    alert_nit_required: "Operación cancelada. El NIT es necesario para guardar el reporte.",
    alert_farm_required: "⚠️ Se requiere completar los campos 'Finca' y 'Ubicación' para guardar el reporte en el historial.",
    alert_report_saved: "✅ ¡Éxito! El reporte ha sido guardado en el historial. Ahora podrás buscarlo por NIT cuando lo necesites.",
    alert_enter_nit: "Por favor ingresa un NIT para buscar.",
    alert_no_excel_data: "No hay datos cargados. Por favor carga un archivo Excel primero.",
    alert_aliados_saved_cloud: "¡Directorio de aliados guardado en la nube exitosamente!",
    alert_cloud_save_error: "Error al guardar en la nube:",
    confirm_delete_history: "¿Estás seguro de que deseas eliminar este registro del historial permanentemente?",
    confirm_load_history: '¿Deseas cargar el reporte de la finca "{finca}" realizado el {fecha}?\n\nNota: Esto reemplazará los datos actuales en pantalla.',
    confirm_restore_defaults: "¿Estás seguro de restaurar los protocolos por defecto? Perderás los personalizados actuales.",
    confirm_delete_all_protocols: "¿Seguro que deseas eliminar TODOS los protocolos personalizados? Quedará vacío hasta que cargues un Excel.",
    confirm_delete_matrix: "¿Seguro que deseas eliminar TODA la información de la matriz base?",
    admin_loading: "Cargando usuarios...",
    admin_empty: "No hay usuarios registrados.",
    admin_no_name: "Sin nombre",
    admin_na: "N/A",
    hist_btn_load: "CARGAR",
    hist_btn_excel: "EXCEL",
    hist_btn_delete: "ELIMINAR",
    hist_no_results: "No se encontraron registros para el NIT:",
    app_title: "Iatf Pro - Análisis de Costos",
    by_solugan: "By Solugan Sg",
    auth_register_title: "REGISTRO DE USUARIO",
    auth_nit: "NIT / C.C. (Llave de acceso)",
    auth_name: "Nombre Completo / Razón Social",
    auth_country: "País",
    auth_phone: "Teléfono / WhatsApp",
    auth_farm: "Finca o Empresa",
    auth_email: "Correo Electrónico",
    auth_pass: "Contraseña",
    auth_have_account: "¿Ya tienes cuenta?",
    auth_login_link: "Inicia Sesión",
    auth_no_account: "¿No tienes cuenta?",
    auth_register_link: "Regístrate",
    sidebar_active_user: "Usuario activo",
    config_delete_all: "Eliminar Todo",
    config_th_protocol: "Protocolos / Hormonas",
    config_th_obs: "Observaciones",
    config_th_actions: "Acciones",
    und_ml: "(Und/ml)",
    resx1_prot: "Protocolo Resincronización 1",
    resx1_animals: "Animales en Resincronización (Vacías Dx1)",
    resx1_date_auto: "Fecha Inicio (Auto)",
    resx1_time: "Hora de Inicio",
    resx1_preg: "Preñeces Resincronización 1 (Proyectado o Real)",
    table_th_day: "Día",
    table_th_date: "Fecha",
    table_th_time: "Hora",
    table_th_hormone: "Hormona / Insumo",
    table_th_dose: "Dosis",
    table_th_value: "VALOR UNITARIO",
    resx2_prot: "Protocolo Resincronización 2",
    resx2_animals: "Animales en Resincronización (Vacías ReSx1)",
    resx2_date_auto: "Fecha Inicio (Auto)",
    resx2_time: "Hora de Inicio",
    resx2_preg: "Preñeces Resincronización 2 (Proyectado o Real)",
    dash_pi: "PI",
    ph_nit: "Ingresa tu identificación",
    ph_name: "Nombre completo",
    ph_phone: "Ej: 3147084328",
    ph_farm: "Nombre de tu finca",
    ph_email: "usuario@ejemplo.com",
    ph_pass: "Mínimo 6 caracteres",
    ph_login_pass: "Ingresa tu contraseña",
    ph_farm_name: "Nombre del predio",
    ph_search_nit: "Ej: 123456789",
    cal_planned_start: "Inicio Programado",
    cal_day: "Día",
    admin_loading_data: "Cargando datos...",
    aliados_contact_wa: "Contactar por WhatsApp"
,
    resx1_protocol_lbl: "Protocolo Resincronización 1",
    resx1_animals_lbl: "Animales en Resincronización (Vacías Dx1)",
    resx1_date_lbl: "Fecha Inicio (Auto)",
    resx1_time_lbl: "Hora de Inicio",
    resx1_preg_lbl: "Preñeces Resincronización 1 (Proyectado o Real)",
    resx2_protocol_lbl: "Protocolo Resincronización 2",
    resx2_animals_lbl: "Animales en Resincronización (Vacías Resincronización 1)",
    resx2_date_lbl: "Fecha Inicio (Auto)",
    resx2_time_lbl: "Hora de Inicio",
    resx2_preg_lbl: "Preñeces Resincronización 2 (Proyectado o Real)",
    btn_ajustar_precios: "VER/AJUSTAR PRECIOS FASE",
    btn_reiniciar_fase: "REINICIAR FASE",
    roi_inv_fase: "Inversión por Fase",
    roi_anim_fase: "Animales en Fase",
    roi_preg_logradas: "Preñeces Logradas",
    roi_inv_perdida: "Inversión Perdida (Vacías)",
    roi_costo_preg: "Costo/Preñez en Fase",
    roi_retorno_total: "RETORNO TOTAL PROYECTADO",
    chart_ingreso_neto: "Ingreso Neto",
    chart_inversion_total: "Inversión Total",
    chart_bruto: "Bruto",
    chart_bruto_upper: "BRUTO",
    chart_inv: "Inv.",
    chart_neto: "Neto",
    chart_pi: "Prot. Inicial",
    chart_r1: "Resinc. 1",
    chart_r2: "Resinc. 2",
    chart_preg: "preñeces",
    chart_hormones: "Hormonas",
    chart_genetics: "Genética",
    chart_ta: "Asistencia Técnica",
    chart_iate: "Honorarios IA/TE",
    chart_dx: "Dx Preñez"
  },
  en: {
    app_title: "Iatf Pro",
    by_solugan: "by Solugan SG",
    auth_register_title: "User Registration",
    auth_nit: "ID (NIT or SSN)",
    auth_name: "Full Name",
    auth_country: "Country",
    auth_phone: "Phone",
    auth_farm: "Farm or Project Name",
    auth_email: "Email",
    auth_pass: "Password",
    auth_login_link: "Already have an account? Log in",
    auth_register_link: "Don't have an account? Register here",
    sidebar_active_user: "Active User",
    config_delete_all: "DELETE ALL",
    config_th_protocol: "Protocol",
    config_th_obs: "Observations",
    config_th_actions: "Actions",
    und_ml: "ml / Unit",
    resx1_prot: "Resynchronization 1 Protocol",
    resx1_date_auto: "Start Date (Auto)",
    resx1_time: "Start Time",
    resx1_preg: "Resync 1 Pregnancies (Projected or Real)",
    btn_ajustar_precios: "ADJUST PRICES",
    btn_reiniciar_fase: "RESET PHASE",
    table_th_day: "Day",
    table_th_date: "Date",
    table_th_time: "Time",
    table_th_hormone: "Hormone / Input",
    table_th_dose: "Dose",
    table_th_value: "Value",
    resx2_prot: "Resynchronization 2 Protocol",
    resx2_preg: "Resync 2 Pregnancies (Projected or Real)",
    dash_pi: "Initial Protocol (IP)",
    admin_loading_data: "Loading data...",
    aliados_contact_wa: "Contact via WhatsApp",

    sidebar_dashboard: "Control Dashboard",
    sidebar_pi: "Initial Protocol",
    sidebar_resx1: "Resynchronization 1",
    sidebar_resx2: "Resynchronization 2",
    sidebar_dash_roi: "Dashboard & ROI",
    sidebar_history: "Historical Search",
    sidebar_info: "Information Tables",
    tc_title: "MEAT AND DAIRY CONTROL DASHBOARD",
    tc_subtitle: "Base productive metrics and protocol programming matrix",
    tc_finca: "Farm",
    tc_nit: "Tax ID / NIT",
    tc_pais: "Country",
    tc_movil: "Mobile / WhatsApp",
    tc_ganaderia: "Livestock Type",
    tc_leche_title: "Milk Production",
    tc_carne_title: "Beef Production",
    tc_precio_leche: "Milk Liter Selling Price",
    tc_precio_carne: "Beef Kilo Selling Price",
    tc_duracion: "Lactation Duration",
    tc_duracion_carne: "Days to Weaning",
    tc_litros: "Liters Per Lactation",
    tc_peso: "Weaning Weight",
    tc_promedio_lts: "Avg Lts/Animal",
    tc_promedio_kg: "Avg Kg/Animal",
    tc_ingreso_leche: "Milk Income/Animal",
    tc_ingreso_carne: "Beef Income/Animal",
    btn_limpiar: "Clear",
    btn_guardar: "SAVE REPORT",
    btn_wa: "SEND BY WA",
    btn_edit: "EDIT",
    btn_new: "NEW",
    btn_show: "SHOW",
    btn_hide: "HIDE",
    btn_delete: "DELETE DATA",
    btn_config: "Price & Dose Configuration",
    btn_excel: "EXCEL",
    btn_pdf: "PDF",
    evento_te: "EVENT: EMBRYO TRANSFER",
    pi_title: "Initial Protocol",
    pi_subtitle: "Detailed commercial and applied schedule generation.",
    pi_date: "Start Date",
    pi_time: "Start Time",
    pi_select_p: "Protocol to Synchronize",
    pi_animals: "Animals to Synchronize",
    pi_preg: "Pregnancies (Projected or Real Dx1)",
    pi_include_resync: "Do you want to include resync phases?",
    pi_include_resx1: "INCLUDE Resynchronization 1",
    pi_include_resx2: "INCLUDE Resynchronization 2",
    resx1_title: "Resynchronization 1",
    resx1_subtitle: "Management of empty animals after the first diagnosis (Dx1).",
    resx1_animals: "Animals in Resync (Empty PI)",
    resx2_title: "Resynchronization 2",
    resx2_subtitle: "Management of empty animals after the second diagnosis (Dx2).",
    resx2_animals: "Animals in Resync (Empty Resynchronization 1)",
    dash_title: "Synchronization Report & ROI",
    dash_protocolo: "Protocol",
    dash_animales: "Synced Animals",
    stat_inversion: "Total Applied Investment",
    stat_ingreso: "Projected Gross Income",
    stat_costo_p: "Cost per Pregnancy",
    stat_exito: "Reproductive Success",
    stat_roi: "Return on Investment (ROI)",
    stat_utilidad: "Projected Net Profit",
    dash_roi_table: "Financial Summary (ROI)",
    dash_investment_breakdown: "Investment Breakdown",
    hist_title: "Historical Protocol Search",
    hist_subtitle: "Consult the history of performed tasks by filtering by Tax ID.",
    hist_btn: "SEARCH NOW",
    modal_title: "Price and Input Configuration",
    modal_subtitle: "Showing exclusively the inputs required by the current protocol.",
    col_insumo: "Input / Service",
    col_dosis: "Standard Dose",
    col_presentacion: "Product Presentation",
    col_valor_c: "PURCHASE VALUE",
    col_cant: "Qty to buy",
    col_costo_total: "Consolidated Cost ($)",
    col_valor_d: "DOSE VALUE ($)",
    modal_total_hormonas: "TOTAL HORMONES PURCHASE:",
    info_title: "Information and Reference Tables",
    info_subtitle: "Technical parameters and system databases query.",
    tc_matriz_title: "PROTOCOL MATRIX",
    btn_show_p: "SHOW PROTOCOL",
    btn_hide_p: "HIDE PROTOCOL",
    btn_reset: "Restore Base",
    btn_save: "Save and Lock",
    // Categorías
    cat_hormonas: "HORMONAL MEDICATIONS",
    cat_asistencia: "TECHNICAL ASSISTANCE",
    cat_iate: "AI / ET FEES",
    cat_genetica: "GENETIC MATERIAL",
    cat_diagnostico: "DIAGNOSTICS & OTHERS",
    // Insumos y Actividades
    ins_dib: "Bovine Intravaginal Device",
    ins_prog_iny: "Injectable Progesterone",
    ins_be1: "Estradiol Benzoate (1st Dose)",
    ins_be2: "Estradiol Benzoate (2nd Dose)",
    ins_gnrh1: "GnRh (1st Dose)",
    ins_gnrh2: "GnRh (2nd Dose)",
    ins_pgf1: "Prostaglandin (1st Dose)",
    ins_pgf2: "Prostaglandin (2nd Dose)",
    ins_pgf3: "Prostaglandin (3rd Dose)",
    ins_ecg: "eCG (Gonadotropin)",
    ins_ce: "Estradiol Cypionate",
    ins_gen: "Genetics (Semen/Embryo)",
    ins_mo1: "Technical Assistance 1",
    ins_mo2: "Technical Assistance 2",
    ins_iate: "AI / ET",
    ins_dx1: "Pregnancy Diagnosis Dx1",
    ins_dx2: "Pregnancy Diagnosis Dx2",
    ins_retdib: "Remove Device",
    ins_opu: "Follicular Aspiration (OPU)",
    act_ia: "EVENT: ARTIFICIAL INSEMINATION",
    obs_label: "Obs:",
    pi_hormones_ref: "Hormones/Cow",
    pi_iate_ref: "AI/ET/Cow",
    r1_hormones_ref: "Hormones/Cow",
    r1_iate_ref: "AI/ET/Cow",
    r2_hormones_ref: "Hormones/Cow",
    r2_iate_ref: "AI/ET/Cow",
    btn_contact_wa: "Contact Us",
    contact_placeholder: "Type your message here...",
    msg_select_pf: "Please select a Protocol and a Start Date before continuing.",
    sidebar_aliados: "Commercial Partners",
    sidebar_admin: "Admin Panel",
    btn_logout: "Log Out",
    aliados_title: "Commercial Partners",
    aliados_subtitle: "Directory of partners and strategic allies.",
    tc_finca_name: "Farm / Project Name",
    tc_finca_placeholder: "Property Name",
    tc_location: "Location",
    tc_location_placeholder: "City / State",
    opt_select: "-- SELECT --",
    opt_select_protocol: "-- SELECT PROTOCOL --",
    opt_lecheria: "Specialized Dairy",
    opt_cria: "Commercial Breeding",
    opt_puro: "Purebred Cattle",
    opt_doble: "Dual Purpose",
    tc_costo_diario: "Daily Maintenance Cost",
    tc_costo_diario_sub: "Daily upkeep cost per animal",
    msg_edit_active: "Edit Mode Active. You can add, modify, or delete protocols.",
    msg_view_mode: "View Mode. Click on \"Locked Edit\" to modify.",
    btn_hide_p: "Hide Protocols",
    modal_val_hormona: "APPLIED HORMONE VALUE",
    modal_val_genetica: "GENETICS PURCHASE VALUE",
    modal_val_asistencia: "TECH ASSISTANCE VALUE",
    modal_val_iate: "AI / ET VALUE",
    modal_val_prenez: "PREG. CONF. VALUE",
    th_dia: "Day",
    th_fecha: "Date",
    th_hora: "Time",
    th_actividad: "ACTIVITY / ITEM",
    th_insumo: "Hormone / Item",
    th_dosis: "DOSE",
    th_und: "UNIT",
    th_val_unitario: "UNIT VALUE",
    th_inv_total: "TOTAL INVESTMENT",
    lbl_inv_animal: "TOTAL INVESTMENT APPLIED PER ANIMAL:",
    lbl_inv_total: "TOTAL INVESTMENT/COW",
    lbl_desglose: "INVESTMENT BREAKDOWN BY CATEGORY",
    cat_hormonas: "Hormones",
    cat_genetica: "Genetics (Semen/Embryo)",
    cat_asistencia: "TECHNICAL ASSISTANCE",
    cat_iate: "AI / ET FEES",
    cat_confirmacion: "Pregnancy Confirmation",
    card_inicio: "Start",
    card_inseminar: "Inseminate: Day",
    btn_cancel: "Cancel",
    btn_update_system: "Update System",
    dash_inv_tot: "Total Project Investment",
    dash_cost_preg: "Avg. Cost / Pregnancy",
    dash_roi: "ROI (Return on Investment)",
    dash_prot_horm: "Hormonal Protocol",
    dash_gen_vaca: "Genetics / Cow",
    dash_asis_vaca: "Tech Assistance / Cow",
    dash_iate_vaca: "AI-ET Fees / Cow",
    dash_diag_vaca: "Preg. Confirmation / Cow",
    dash_exito_rep: "Reproductive Success",
    dash_preg_stage: "Pregnancy by Stage",
    dash_net_profit: "Net Profit",
    dash_concept: "Concept",
    dash_consolidated: "Consolidated",
    dash_milk: "Milk",
    dash_meat: "Meat",
    hist_title: "Protocol History Search",
    hist_subtitle: "Search the history of completed jobs by filtering by Tax ID (NIT).",
    hist_search_label: "Enter Tax ID or ID to search",
    hist_btn_search: "SEARCH NOW",
    hist_results_title: "Results found",
    hist_th_fecha: "Date",
    hist_th_finca: "Farm",
    hist_th_protocol: "Protocol",
    hist_th_animales: "Animals",
    hist_th_preg: "Pregnancies",
    hist_th_inv: "Investment",
    hist_th_actions: "Actions",
    hist_empty_msg: "Enter a Tax ID (NIT) to view the history of completed protocols.",
    admin_title: "Administration Panel",
    admin_subtitle: "View and manage the people registered in your application",
    admin_tot_users: "Total Registered Users",
    admin_tot_acc: "Total Global Accesses",
    admin_th_name: "Name",
    admin_th_email: "Email",
    admin_th_phone: "Phone",
    admin_th_farm: "Farm",
    admin_th_nit: "Tax ID / ID",
    admin_th_acc: "Accesses",
    admin_th_date: "Registration Date",
    aliados_dir: "Directory",
    btn_load_excel: "Load Excel",
    btn_save_cloud: "Save to Cloud",
    aliados_empty: "No partners loaded. Use the padlock button to Load Excel or wait for them to sync from the cloud.",
    aliados_prod_serv: "Products and Services",
    aliados_nota: "Additional Note",
    col_presentacion: "Product Presentation",
    col_valor_c: "PURCHASE VALUE",
    alert_pass_length: "The password must be at least 6 characters long.",
    alert_email_exists: "Email is already registered. If it's your account, verify your password.",
    alert_reg_error: "Registration error:",
    alert_login_error: "Login error:",
    alert_excel_error: "Error processing Excel:",
    alert_protocols_imported: "Protocols imported successfully from Excel and saved for all users!",
    alert_excel_read_error: "Error reading the Excel file.",
    alert_aliados_imported: "Partners directory imported successfully!",
    alert_vital_protocol: "This resynchronization protocol is vital for the system and cannot be deleted.",
    alert_wrong_pass: "Incorrect password.",
    alert_protocols_restored: "Base protocols restored successfully.",
    alert_protocols_deleted: "Protocols and headers deleted successfully. You can load new ones from Excel or manually.",
    alert_changes_saved: "Changes saved successfully.",
    alert_select_protocol: "⚠️ Please select a 'Protocol' first to configure its prices.",
    alert_invalid_protocol: "Select a valid protocol.",
    alert_cal_update_error: "There was an error updating the calendar:",
    alert_project_cleared: "All project data has been cleared successfully.",
    alert_missing_fields: "Please complete at least Name, ID, and Phone.",
    alert_export_nodata: "⚠️ Not enough data to export. Select a protocol and generate the schedule first.",
    alert_nit_required: "Operation canceled. Tax ID is required to save the report.",
    alert_farm_required: "⚠️ The 'Farm' and 'Location' fields are required to save the report to history.",
    alert_report_saved: "✅ Success! The report has been saved to history. You can now search for it by Tax ID when needed.",
    alert_enter_nit: "Please enter a Tax ID to search.",
    alert_no_excel_data: "No data loaded. Please load an Excel file first.",
    alert_aliados_saved_cloud: "Partners directory saved to cloud successfully!",
    alert_cloud_save_error: "Error saving to cloud:",
    confirm_delete_history: "Are you sure you want to permanently delete this record from history?",
    confirm_load_history: 'Do you want to load the report for the farm "{finca}" made on {fecha}?\n\nNote: This will replace the current data on screen.',
    confirm_restore_defaults: "Are you sure you want to restore default protocols? You will lose current custom ones.",
    confirm_delete_all_protocols: "Are you sure you want to delete ALL custom protocols? It will remain empty until you load an Excel.",
    confirm_delete_matrix: "Are you sure you want to delete ALL information from the base matrix?",
    admin_loading: "Loading users...",
    admin_empty: "No registered users.",
    admin_no_name: "No name",
    admin_na: "N/A",
    hist_btn_load: "LOAD",
    hist_btn_excel: "EXCEL",
    hist_btn_delete: "DELETE",
    hist_no_results: "No records found for Tax ID:",
    app_title: "Iatf Pro - Cost Analysis",
    by_solugan: "By Solugan Sg",
    auth_register_title: "USER REGISTRATION",
    auth_nit: "Tax ID / ID (Access Key)",
    auth_name: "Full Name / Company Name",
    auth_country: "Country",
    auth_phone: "Phone / WhatsApp",
    auth_farm: "Farm or Company",
    auth_email: "Email",
    auth_pass: "Password",
    auth_have_account: "Already have an account?",
    auth_login_link: "Login",
    auth_no_account: "Don't have an account?",
    auth_register_link: "Register",
    sidebar_active_user: "Active user",
    config_delete_all: "Delete All",
    config_th_protocol: "Protocols / Hormones",
    config_th_obs: "Observations",
    config_th_actions: "Actions",
    und_ml: "(Units/ml)",
    resx1_prot: "Resynchronization Protocol 1",
    resx1_animals: "Animals in Resynchronization (Open Dx1)",
    resx1_date_auto: "Start Date (Auto)",
    resx1_time: "Start Time",
    resx1_preg: "Pregnancies Resync 1 (Projected or Real)",
    table_th_day: "Day",
    table_th_date: "Date",
    table_th_time: "Time",
    table_th_hormone: "Hormone / Input",
    table_th_dose: "Dose",
    table_th_value: "UNIT VALUE",
    resx2_prot: "Resynchronization Protocol 2",
    resx2_animals: "Animals in Resynchronization (Open ReSx1)",
    resx2_date_auto: "Start Date (Auto)",
    resx2_time: "Start Time",
    resx2_preg: "Pregnancies Resync 2 (Projected or Real)",
    dash_pi: "PI",
    ph_nit: "Enter your ID",
    ph_name: "Full name",
    ph_phone: "Ex: 3147084328",
    ph_farm: "Name of your farm",
    ph_email: "user@example.com",
    ph_pass: "Minimum 6 characters",
    ph_login_pass: "Enter your password",
    ph_farm_name: "Property name",
    ph_search_nit: "Ex: 123456789",
    cal_planned_start: "Planned Start",
    cal_day: "Day",
    admin_loading_data: "Loading data...",
    aliados_contact_wa: "Contact via WhatsApp"
,
    resx1_protocol_lbl: "Resynchronization 1 Protocol",
    resx1_animals_lbl: "Animals in Resync. (Open Dx1)",
    resx1_date_lbl: "Start Date (Auto)",
    resx1_time_lbl: "Start Time",
    resx1_preg_lbl: "Resynchronization 1 Pregnancies (Projected or Real)",
    resx2_protocol_lbl: "Resynchronization 2 Protocol",
    resx2_animals_lbl: "Animals in Resync. (Open Resynchronization 1)",
    resx2_date_lbl: "Start Date (Auto)",
    resx2_time_lbl: "Start Time",
    resx2_preg_lbl: "Resynchronization 2 Pregnancies (Projected or Real)",
    btn_ajustar_precios: "VIEW/ADJUST PHASE PRICES",
    btn_reiniciar_fase: "RESET PHASE",
    roi_inv_fase: "Investment per Phase",
    roi_anim_fase: "Animals in Phase",
    roi_preg_logradas: "Pregnancies Achieved",
    roi_inv_perdida: "Lost Investment (Open)",
    roi_costo_preg: "Cost/Pregnancy in Phase",
    roi_retorno_total: "TOTAL PROJECTED RETURN",
    chart_ingreso_neto: "Net Income",
    chart_inversion_total: "Total Investment",
    chart_bruto: "Gross",
    chart_bruto_upper: "GROSS",
    chart_inv: "Inv.",
    chart_neto: "Net",
    chart_pi: "Initial Prot.",
    chart_r1: "Resync. 1",
    chart_r2: "Resync. 2",
    chart_preg: "pregnancies",
    chart_hormones: "Hormones",
    chart_genetics: "Genetics",
    chart_ta: "Technical Assistance",
    chart_iate: "AI/ET Fees",
    chart_dx: "Pregnancy Dx"
  },
  pt: {
    app_title: "Iatf Pro",
    by_solugan: "por Solugan SG",
    auth_register_title: "Registro de Usuário",
    auth_nit: "Identificação (CPF ou CNPJ)",
    auth_name: "Nome Completo",
    auth_country: "País",
    auth_phone: "Telefone",
    auth_farm: "Nome da Fazenda ou Projeto",
    auth_email: "E-mail",
    auth_pass: "Senha",
    auth_login_link: "Já tem uma conta? Faça login",
    auth_register_link: "Não tem uma conta? Registre-se aqui",
    sidebar_active_user: "Usuário Ativo",
    config_delete_all: "APAGAR TODOS",
    config_th_protocol: "Protocolo",
    config_th_obs: "Observações",
    config_th_actions: "Ações",
    und_ml: "ml / Unid",
    resx1_prot: "Protocolo de Ressincronização 1",
    resx1_date_auto: "Data de Início (Auto)",
    resx1_time: "Hora de Início",
    resx1_preg: "Prenhezes Ressincronização 1 (Projetado ou Real)",
    btn_ajustar_precios: "AJUSTAR PREÇOS",
    btn_reiniciar_fase: "REINICIAR FASE",
    table_th_day: "Dia",
    table_th_date: "Data",
    table_th_time: "Hora",
    table_th_hormone: "Hormônio / Insumo",
    table_th_dose: "Dose",
    table_th_value: "Valor",
    resx2_prot: "Protocolo de Ressincronização 2",
    resx2_preg: "Prenhezes Ressincronização 2 (Projetado ou Real)",
    dash_pi: "Protocolo Inicial (PI)",
    admin_loading_data: "Carregando dados...",
    aliados_contact_wa: "Contatar pelo WhatsApp",

    sidebar_dashboard: "Painel de Controle",
    sidebar_pi: "Protocolo Inicial",
    sidebar_resx1: "Ressincronização 1",
    sidebar_resx2: "Ressincronização 2",
    sidebar_dash_roi: "Dashboard & ROI",
    sidebar_history: "Histórico de Buscas",
    sidebar_info: "Tabelas de Informação",
    tc_title: "PAINEL DE CONTROLE CARNE E LEITE",
    tc_subtitle: "Métricas produtivas base e matriz de programação de protocolos",
    tc_finca: "Fazenda",
    tc_nit: "CPF / CNPJ",
    tc_pais: "País",
    tc_movil: "Celular / WhatsApp",
    tc_ganaderia: "Tipo de Pecuária",
    tc_leche_title: "Produção de Leite",
    tc_carne_title: "Produção de Carne",
    tc_precio_leche: "Preço de Venda do Litro de Leite",
    tc_precio_carne: "Preço de Venda do Quilo de Carne",
    tc_duracion: "Duração da Lactação",
    tc_duracion_carne: "Dias até o Desmame",
    tc_litros: "Litros Por Lactação",
    tc_peso: "Peso ao Desmame",
    tc_promedio_lts: "Média Lts/Animal",
    tc_promedio_kg: "Média Kg/Animal",
    tc_ingreso_leche: "Receita de Venda de Leite/Animal",
    tc_ingreso_carne: "Receita de Venda de Carne/Animal",
    btn_limpiar: "Limpar",
    btn_guardar: "SALVAR RELATÓRIO",
    btn_wa: "ENVIAR PELO WHATSAPP",
    btn_edit: "EDITAR",
    btn_new: "NOVO",
    btn_show: "MOSTRAR",
    btn_hide: "OCULTAR",
    btn_delete: "APAGAR DADOS",
    btn_config: "Configuração de preços e doses",
    btn_excel: "EXCEL",
    btn_pdf: "PDF",
    evento_te: "EVENTO: TRANSFERÊNCIA DE EMBRIÕES",
    pi_title: "Protocolo Inicial",
    pi_subtitle: "Geração de cronograma detalhado comercial e aplicado.",
    pi_date: "Data de Início",
    pi_time: "Hora de Início",
    pi_select_p: "Protocolo a Sincronizar",
    pi_animals: "Animais a Sincronizar",
    pi_preg: "Prenhezes (Projetado ou Dx1 Real)",
    pi_include_resync: "Deseja incluir fases de ressincronização?",
    pi_include_resx1: "INCLUIR Ressincronização 1",
    pi_include_resx2: "INCLUIR Ressincronização 2",
    resx1_title: "Ressincronização 1",
    resx1_subtitle: "Gestão de animais vazios após o primeiro diagnóstico (Dx1).",
    resx1_animals: "Animais em Ressincronização (Vazias PI)",
    resx2_title: "Ressincronização 2",
    resx2_subtitle: "Gestão de animais vazios após o segundo diagnóstico (Dx2).",
    resx2_animals: "Animais em Ressincronização (Vazias Ressincronização 1)",
    dash_title: "Relatório de Sincronização e ROI",
    dash_protocolo: "Protocolo",
    dash_animales: "Animais Sincronizados",
    stat_inversion: "Investimento Total Aplicado",
    stat_ingreso: "Receita Bruta Projetada",
    stat_costo_p: "Custo por Prenhez",
    stat_exito: "Sucesso Reprodutivo",
    stat_roi: "Retorno sobre Investimento (ROI)",
    stat_utilidad: "Lucro Líquido Projetado",
    dash_roi_table: "Resumo Financeiro (ROI)",
    dash_investment_breakdown: "Detalhamento do Investimento",
    hist_title: "Histórico de Protocolos",
    hist_subtitle: "Consulte o histórico de trabalhos realizados filtrando por CPF/CNPJ.",
    hist_btn: "BUSCAR AGORA",
    modal_title: "Configuração de Preços e Insumos",
    modal_subtitle: "Mostrando exclusivamente os insumos exigidos pelo protocolo atual.",
    col_insumo: "Insumo / Serviço",
    col_dosis: "Dose Padrão",
    col_presentacion: "Apresentação do Produto",
    col_valor_c: "VALOR DE COMPRA",
    col_cant: "Qtd. a comprar",
    col_costo_total: "Custo Consolidado ($)",
    col_valor_d: "VALOR DA DOSE ($)",
    modal_total_hormonas: "TOTAL COMPRA HORMÔNIOS:",
    info_title: "Tabelas de Informação e Referência",
    info_subtitle: "Consulta de parâmetros técnicos e bancos de dados do sistema.",
    tc_matriz_title: "QUADRO DE PROTOCOLOS",
    btn_show_p: "EXIBIR PROTOCOLO",
    btn_hide_p: "ESCONDER PROTOCOLO",
    btn_reset: "Restaurar Base",
    btn_save: "Salvar e Bloquear",
    cat_hormonas: "MEDICAMENTOS HORMONAIS",
    cat_asistencia: "ASSISTÊNCIA TÉCNICA",
    cat_iate: "HONORÁRIOS IA / TE",
    cat_genetica: "MATERIAL GENÉTICO",
    cat_diagnostico: "DIAGNÓSTICO E OUTROS",
    ins_dib: "Dispositivo Intravaginal Bovino",
    ins_be1: "Benzoato de Estradiol (1ª Dose)",
    ins_be2: "Benzoato de Estradiol (2ª Dose)",
    ins_gnrh1: "GnRh (1ª Dose)",
    ins_gnrh2: "GnRh (2ª Dose)",
    ins_pgf1: "Prostaglandina (1ª Dose)",
    ins_pgf2: "Prostaglandina (2ª Dose)",
    ins_pgf3: "Prostaglandina (3ª Dose)",
    ins_ecg: "eCG (Gonadotrofina)",
    ins_ce: "Cipionato de Estradiol",
    ins_gen: "Genética (Sêmen/Embrião)",
    ins_mo1: "Assistência Técnica 1",
    ins_mo2: "Assistência Técnica 2",
    ins_iate: "IA / TE",
    ins_dx1: "Diagnóstico de Prenhez Dx1",
    ins_dx2: "Diagnóstico de Prenhez Dx2",
    ins_retdib: "Retirada DIB",
    ins_opu: "Aspiração Folicular (OPU)",
    act_ia: "EVENTO: INSEMINAÇÃO ARTIFICIAL",
    obs_label: "Obs:",
    pi_hormones_ref: "Hormônios/Vaca",
    pi_iate_ref: "IA/TE/Vaca",
    r1_hormones_ref: "Hormônios/Vaca",
    r1_iate_ref: "IA/TE/Vaca",
    r2_hormones_ref: "Hormônios/Vaca",
    r2_iate_ref: "IA/TE/Vaca",
    btn_contact_wa: "Fale Conosco",
    contact_placeholder: "Escreva sua mensagem aqui...",
    msg_select_pf: "Por favor, selecione um Protocolo e uma Data de Início antes de continuar.",
    sidebar_aliados: "Parceiros Comerciais",
    sidebar_admin: "Painel Admin",
    btn_logout: "Sair",
    aliados_title: "Parceiros Comerciais",
    aliados_subtitle: "Diretório de parceiros e aliados estratégicos.",
    tc_finca_name: "Nome da Fazenda / Projeto",
    tc_finca_placeholder: "Nome da propriedade",
    tc_location: "Localização",
    tc_location_placeholder: "Município / Estado",
    opt_select: "-- SELECIONAR --",
    opt_select_protocol: "-- SELECIONAR PROTOCOLO --",
    opt_lecheria: "Leiteria Especializada",
    opt_cria: "Criação Comercial",
    opt_puro: "Gado Puro",
    opt_doble: "Duplo Propósito",
    tc_costo_diario: "Custo de Manutenção Diário",
    tc_costo_diario_sub: "Custo de manutenção diária por animal",
    msg_edit_active: "Modo de Edição Ativo. Você pode adicionar, modificar ou excluir protocolos.",
    msg_view_mode: "Modo de Consulta. Clique em \"Edição Bloqueada\" para modificar.",
        modal_val_hormona: "VALOR HORMÔNIO APLICADO",
    modal_val_genetica: "VALOR COMPRA GENÉTICA",
    modal_val_asistencia: "VALOR ASSIST. TÉCNICA",
    modal_val_iate: "VALOR IA / TE",
    modal_val_prenez: "VALOR CONF. PRENHEZ",
    th_dia: "Dia",
    th_fecha: "Data",
    th_hora: "Hora",
    th_actividad: "ATIVIDADE / INSUMO",
    th_insumo: "Hormônio / Insumo",
    th_dosis: "DOSE",
    th_und: "UNID",
    th_val_unitario: "VALOR UNITÁRIO",
    th_inv_total: "INVESTIMENTO TOTAL",
    lbl_inv_animal: "INVESTIMENTO TOTAL APLICADO POR ANIMAL:",
    lbl_inv_total: "INVESTIMENTO TOTAL/VACA",
    lbl_desglose: "DESDOBRAMENTO DE INVESTIMENTO POR CATEGORIA",
    cat_hormonas: "Hormônios",
    cat_genetica: "Genética (Sêmen/Embrião)",
    cat_asistencia: "ASSISTÊNCIA TÉCNICA",
    cat_iate: "HONORÁRIOS IA / TE",
    cat_confirmacion: "Confirmação de Prenhez",
    card_inicio: "Início",
    card_inseminar: "Inseminar: Dia",
    btn_cancel: "Cancelar",
    btn_update_system: "Atualizar Sistema",
    dash_inv_tot: "Investimento Total do Projeto",
    dash_cost_preg: "Custo Médio / Prenhez",
    dash_roi: "ROI (Retorno sobre Investimento)",
    dash_prot_horm: "Protocolo Hormonal",
    dash_gen_vaca: "Genética / Vaca",
    dash_asis_vaca: "Assistência Técnica / Vaca",
    dash_iate_vaca: "Honorários IA-TE / Vaca",
    dash_diag_vaca: "Confirmação de Prenhez / Vaca",
    dash_exito_rep: "Sucesso Reprodutivo",
    dash_preg_stage: "Prenhez por Etapa",
    dash_net_profit: "Lucro Líquido",
    dash_concept: "Conceito",
    dash_consolidated: "Consolidado",
    dash_milk: "Leite",
    dash_meat: "Carne",
    hist_title: "Pesquisa de Histórico de Protocolos",
    hist_subtitle: "Consulte o histórico de trabalhos realizados filtrando por CPF/CNPJ.",
    hist_search_label: "Digite o CPF/CNPJ para pesquisar",
    hist_btn_search: "PESQUISAR AGORA",
    hist_results_title: "Resultados encontrados",
    hist_th_fecha: "Data",
    hist_th_finca: "Fazenda",
    hist_th_protocol: "Protocolo",
    hist_th_animales: "Animais",
    hist_th_preg: "Prenhezes",
    hist_th_inv: "Investimento",
    hist_th_actions: "Ações",
    hist_empty_msg: "Insira um CPF/CNPJ para ver o histórico de protocolos realizados.",
    admin_title: "Painel de Administração",
    admin_subtitle: "Visualize e gerencie as pessoas registradas no seu aplicativo",
    admin_tot_users: "Total de Usuários Registrados",
    admin_tot_acc: "Total de Acessos Globais",
    admin_th_name: "Nome",
    admin_th_email: "E-mail",
    admin_th_phone: "Telefone",
    admin_th_farm: "Fazenda",
    admin_th_nit: "CPF / CNPJ",
    admin_th_acc: "Acessos",
    admin_th_date: "Data de Registro",
    aliados_dir: "Diretório",
    btn_load_excel: "Carregar Excel",
    btn_save_cloud: "Salvar na Nuvem",
    aliados_empty: "Nenhum parceiro carregado. Use o botão de cadeado para Carregar Excel ou aguarde a sincronização da nuvem.",
    aliados_prod_serv: "Produtos e Serviços",
    aliados_nota: "Nota Adicional",
    col_presentacion: "Apresentação do Produto",
    col_valor_c: "VALOR DE COMPRA",
    alert_pass_length: "A senha deve ter pelo menos 6 caracteres.",
    alert_email_exists: "O e-mail já está registrado. Se for sua conta, verifique a senha informada.",
    alert_reg_error: "Erro ao registrar:",
    alert_login_error: "Erro ao fazer login:",
    alert_excel_error: "Erro ao processar o Excel:",
    alert_protocols_imported: "Protocolos importados com sucesso do arquivo Excel e salvos para todos os usuários!",
    alert_excel_read_error: "Erro ao ler o arquivo Excel.",
    alert_aliados_imported: "Diretório de parceiros importado com sucesso!",
    alert_vital_protocol: "Este protocolo de ressincronização é vital para o sistema e não pode ser excluído.",
    alert_wrong_pass: "Senha incorreta.",
    alert_protocols_restored: "Protocolos base restaurados com sucesso.",
    alert_protocols_deleted: "Protocolos e cabeçalhos excluídos com sucesso. Você pode carregar novos do Excel ou manualmente.",
    alert_changes_saved: "Alterações salvas com sucesso.",
    alert_select_protocol: "⚠️ Por favor, selecione primeiro um 'Protocolo' para configurar seus preços.",
    alert_invalid_protocol: "Selecione um protocolo válido.",
    alert_cal_update_error: "Houve um erro ao atualizar o calendário:",
    alert_project_cleared: "Todos os dados do projeto foram limpos com sucesso.",
    alert_missing_fields: "Por favor, preencha pelo menos Nome, Identidade e Telefone.",
    alert_export_nodata: "⚠️ Não há dados suficientes para exportar. Selecione um protocolo e gere o cronograma primeiro.",
    alert_nit_required: "Operação cancelada. O CPF/CNPJ é necessário para salvar o relatório.",
    alert_farm_required: "⚠️ Os campos 'Fazenda' e 'Localização' são necessários para salvar o relatório no histórico.",
    alert_report_saved: "✅ Sucesso! O relatório foi salvo no histórico. Agora você pode pesquisá-lo por CPF/CNPJ quando precisar.",
    alert_enter_nit: "Por favor, insira um CPF/CNPJ para pesquisar.",
    alert_no_excel_data: "Nenhum dado carregado. Por favor, carregue um arquivo Excel primeiro.",
    alert_aliados_saved_cloud: "Diretório de parceiros salvo na nuvem com sucesso!",
    alert_cloud_save_error: "Erro ao salvar na nuvem:",
    confirm_delete_history: "Tem certeza de que deseja excluir este registro do histórico permanentemente?",
    confirm_load_history: 'Deseja carregar o relatório da fazenda "{finca}" feito em {fecha}?\n\nNota: Isso substituirá os dados atuais na tela.',
    confirm_restore_defaults: "Tem certeza de que deseja restaurar os protocolos padrão? Você perderá os personalizados atuais.",
    confirm_delete_all_protocols: "Tem certeza de que deseja excluir TODOS os protocolos personalizados? Ficará vazio até você carregar um Excel.",
    confirm_delete_matrix: "Tem certeza de que deseja excluir TODAS as informações da matriz base?",
    admin_loading: "Carregando usuários...",
    admin_empty: "Nenhum usuário registrado.",
    admin_no_name: "Sem nome",
    admin_na: "N/A",
    hist_btn_load: "CARREGAR",
    hist_btn_excel: "EXCEL",
    hist_btn_delete: "EXCLUIR",
    hist_no_results: "Nenhum registro encontrado para o CPF/CNPJ:",
    app_title: "Iatf Pro - Análise de Custos",
    by_solugan: "By Solugan Sg",
    auth_register_title: "REGISTRO DE USUÁRIO",
    auth_nit: "CPF / CNPJ (Chave de Acesso)",
    auth_name: "Nome Completo / Razão Social",
    auth_country: "País",
    auth_phone: "Telefone / WhatsApp",
    auth_farm: "Fazenda ou Empresa",
    auth_email: "E-mail",
    auth_pass: "Senha",
    auth_have_account: "Já tem uma conta?",
    auth_login_link: "Entrar",
    auth_no_account: "Não tem uma conta?",
    auth_register_link: "Cadastre-se",
    sidebar_active_user: "Usuário ativo",
    config_delete_all: "Excluir Tudo",
    config_th_protocol: "Protocolos / Hormônios",
    config_th_obs: "Observações",
    config_th_actions: "Ações",
    und_ml: "(Und/ml)",
    resx1_prot: "Protocolo de Ressincronização 1",
    resx1_animals: "Animais em Ressincronização (Vazias Dx1)",
    resx1_date_auto: "Data de Início (Auto)",
    resx1_time: "Hora de Início",
    resx1_preg: "Prenhezes Ressincronização 1 (Projetado ou Real)",
    table_th_day: "Dia",
    table_th_date: "Data",
    table_th_time: "Hora",
    table_th_hormone: "Hormônio / Insumo",
    table_th_dose: "Dose",
    table_th_value: "VALOR UNITÁRIO",
    resx2_prot: "Protocolo de Ressincronização 2",
    resx2_animals: "Animais em Ressincronização (Vazias ReSx1)",
    resx2_date_auto: "Data de Início (Auto)",
    resx2_time: "Hora de Início",
    resx2_preg: "Prenhezes Ressincronização 2 (Projetado ou Real)",
    dash_pi: "PI",
    ph_nit: "Digite seu documento",
    ph_name: "Nome completo",
    ph_phone: "Ex: 3147084328",
    ph_farm: "Nome da sua fazenda",
    ph_email: "usuario@exemplo.com",
    ph_pass: "Mínimo 6 caracteres",
    ph_login_pass: "Digite sua senha",
    ph_farm_name: "Nome da propriedade",
    ph_search_nit: "Ex: 123456789",
    cal_planned_start: "Início Programado",
    cal_day: "Dia",
    admin_loading_data: "Carregando dados...",
    aliados_contact_wa: "Contato por WhatsApp"
,
    resx1_protocol_lbl: "Protocolo Ressincronização 1",
    resx1_animals_lbl: "Animais em Ressincronização (Vazias Dx1)",
    resx1_date_lbl: "Data de Início (Auto)",
    resx1_time_lbl: "Hora de Início",
    resx1_preg_lbl: "Prenhezes Ressincronização 1 (Projetado ou Real)",
    resx2_protocol_lbl: "Protocolo Ressincronização 2",
    resx2_animals_lbl: "Animais em Ressincronização (Vazias Ressincronização 1)",
    resx2_date_lbl: "Data de Início (Auto)",
    resx2_time_lbl: "Hora de Início",
    resx2_preg_lbl: "Prenhezes Ressincronização 2 (Projetado ou Real)",
    btn_ajustar_precios: "VER/AJUSTAR PREÇOS DA FASE",
    btn_reiniciar_fase: "REINICIAR FASE",
    roi_inv_fase: "Investimento por Fase",
    roi_anim_fase: "Animais na Fase",
    roi_preg_logradas: "Prenhezes Alcançadas",
    roi_inv_perdida: "Investimento Perdido (Vazias)",
    roi_costo_preg: "Custo/Prenhez na Fase",
    roi_retorno_total: "RETORNO TOTAL PROJETADO",
    chart_ingreso_neto: "Receita Líquida",
    chart_inversion_total: "Investimento Total",
    chart_bruto: "Bruto",
    chart_bruto_upper: "BRUTO",
    chart_inv: "Inv.",
    chart_neto: "Líquido",
    chart_pi: "Prot. Inicial",
    chart_r1: "Ressinc. 1",
    chart_r2: "Ressinc. 2",
    chart_preg: "prenhezes",
    chart_hormones: "Hormônios",
    chart_genetics: "Genética",
    chart_ta: "Assistência Técnica",
    chart_iate: "Honorários IA/TE",
    chart_dx: "Dx Prenhez"
  }
};

// Helper de traducción - FUNCIÓN CRÍTICA
window.t = function(key) {
  const lang = window.currentLang || 'es';
  return (window.translations[lang] && window.translations[lang][key]) 
    ? window.translations[lang][key] 
    : (window.translations['es'][key] || key);
};

window.currentLang = localStorage.getItem('reprocost_lang') || 'es';

window.changeLanguage = function(lang) {
  window.currentLang = lang;
  localStorage.setItem('reprocost_lang', lang);
  
  // Actualizar textos marcados con data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  // Actualizar placeholders marcados con data-i18n-placeholder
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Sincronizar el selector UI
  const selector = document.getElementById('language-selector');
  if (selector) selector.value = lang;

  // Re-renderizar componentes dinámicos
  if (typeof updateResultados === 'function') updateResultados();
  if (typeof calcTableroControl === 'function') calcTableroControl();
  if (typeof actualizarSelectProtocolos === 'function') actualizarSelectProtocolos();
  if (typeof ejecutarProtocoloInicial === 'function') ejecutarProtocoloInicial();
  if (typeof actualizarProtocoloSeleccionado === 'function') {
    actualizarProtocoloSeleccionado('resx1');
    actualizarProtocoloSeleccionado('resx2');
  }
  if (typeof renderMatriz === 'function') renderMatriz();
  lucide.createIcons();
};

// Ejecutar al cargar si no es español
document.addEventListener('DOMContentLoaded', () => {
  if (window.currentLang !== 'es') {
    setTimeout(() => changeLanguage(window.currentLang), 100);
  }
});


// Generic debounce utility to improve typing performance and prevent lag
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

let saveTimer;
function debouncedSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => { if (typeof saveState === 'function') saveState(); }, 500);
}

// Debounced wrappers for high-frequency input events (typing)
window.debouncedAutoCalcPrenez = debounce((...args) => { if (typeof window.autoCalcPrenez === 'function') window.autoCalcPrenez(...args); }, 150);
window.debouncedAutoCalcDesdePorcentaje = debounce((...args) => { if (typeof window.autoCalcDesdePorcentaje === 'function') window.autoCalcDesdePorcentaje(...args); }, 150);
window.debouncedAutoCalcPorcentaje = debounce((...args) => { if (typeof window.autoCalcPorcentaje === 'function') window.autoCalcPorcentaje(...args); }, 150);
window.debouncedAutoCalcPrenResx1 = debounce((...args) => { if (typeof window.autoCalcPrenResx1 === 'function') window.autoCalcPrenResx1(...args); }, 150);
window.debouncedAutoCalcPrenResx2 = debounce((...args) => { if (typeof window.autoCalcPrenResx2 === 'function') window.autoCalcPrenResx2(...args); }, 150);
window.debouncedAutoCalcDesdePorcentajeResx1 = debounce((...args) => { if (typeof window.autoCalcDesdePorcentajeResx1 === 'function') window.autoCalcDesdePorcentajeResx1(...args); }, 150);
window.debouncedAutoCalcDesdePorcentajeResx2 = debounce((...args) => { if (typeof window.autoCalcDesdePorcentajeResx2 === 'function') window.autoCalcDesdePorcentajeResx2(...args); }, 150);
window.debouncedUpdateResultados = debounce((...args) => { if (typeof window.updateResultados === 'function') window.updateResultados(...args); }, 150);
window.debouncedCalcTableroControl = debounce((...args) => { if (typeof window.calcTableroControl === 'function') window.calcTableroControl(...args); }, 150);
window.debouncedBuscarPerfilPorNit = debounce((...args) => { if (typeof window.buscarPerfilPorNit === 'function') window.buscarPerfilPorNit(...args); }, 150);

lucide.createIcons();

// (unformatNumber removed from here to avoid duplicate definitions)
window.unformatNumber = function(str) {
  if (!str) return 0;
  if (typeof str === 'number') return str;
  const clean = str.toString().replace(/\./g, '').replace(',', '.').replace(/[^0-9.-]+/g,"");
  return parseFloat(clean) || 0;
};

window.formatInputCurrency = function(input) {
  let val = input.value.replace(/\D/g, ''); 
  if (val === '') {
    input.value = '';
    return;
  }
  input.value = new Intl.NumberFormat('es-CO').format(parseInt(val));
};

// Spinner: incrementar/decrementar valor de un input
window.spinVal = function(id, step, isCurrency) {
  const el = document.getElementById(id);
  if (!el) return;
  let current = isCurrency
    ? (parseInt(el.value.replace(/\./g, '').replace(',', '.')) || 0)
    : (parseFloat(el.value) || 0);
  current = Math.max(0, current + step);
  if (!isCurrency) {
    const maxAttr = el.getAttribute('max');
    if (maxAttr !== null) {
      const maxVal = parseFloat(maxAttr);
      if (!isNaN(maxVal) && current > maxVal) {
        current = maxVal;
      }
    }
    current = Math.round(current * 10) / 10;
  }
  if (isCurrency) {
    el.value = new Intl.NumberFormat('es-CO').format(current);
  } else {
    el.value = current;
  }
  // Disparar recálculo
  el.dispatchEvent(new Event('input', { bubbles: true }));
  el.dispatchEvent(new Event('change', { bubbles: true }));
  if (typeof calcTableroControl === 'function') calcTableroControl();
  if (typeof debouncedSave === 'function') debouncedSave();
};

// Soporte para incremento rápido al mantener presionado
(function() {
  let spinTimer = null;
  let spinInterval = null;

  const stopSpin = () => {
    clearTimeout(spinTimer);
    clearInterval(spinInterval);
    spinTimer = null;
    spinInterval = null;
  };

  const startSpin = (e) => {
    const btn = e.target.closest('.spin-btn');
    if (!btn) return;
    
    const action = btn.getAttribute('onclick');
    if (!action) return;

    // Evitar múltiples disparos
    stopSpin();

    spinTimer = setTimeout(() => {
      spinInterval = setInterval(() => {
        try {
          // Ejecutamos la misma acción definida en el onclick
          const fn = new Function(action);
          fn();
        } catch(err) { stopSpin(); }
      }, 70); // Velocidad de ráfaga (70ms)
    }, 450); // Retraso para detectar pulsación larga
  };

  document.addEventListener('mousedown', startSpin);
  document.addEventListener('touchstart', startSpin, { passive: true });
  document.addEventListener('mouseup', stopSpin);
  document.addEventListener('touchend', stopSpin);
  document.addEventListener('mouseleave', stopSpin);
})();

// Tabs Navigation
const navBtns = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');
navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(tc => tc.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.getAttribute('data-target');
    const targetEl = document.getElementById(target);
    if (targetEl) targetEl.classList.add('active');

    // Ocultar barra lateral en móvil al navegar
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      if (overlay) overlay.style.display = 'none';
    }

    // Auto-ejecutar cronograma de la fase activa al cambiar de pestaña
    setTimeout(() => {
      try {
        const piProtocol = document.getElementById('pi-protocolo')?.value;
        const pifecha = document.getElementById('pi-fecha')?.value;
        const hasPI = piProtocol && pifecha;

        if (target === 'protocolo-inicial' && hasPI) {
          ejecutarProtocoloInicial();
        } else if (target === 'resincronizacion1' && hasPI) {
          ejecutarResx1();
        } else if (target === 'resincronizacion2' && hasPI) {
          ejecutarResx2();
        } else if (target === 'dashboard') {
          updateResultados();
        } else if (target === 'buscador-historico') {
          // No requiere ejecución automática por ahora
        }
        lucide.createIcons();
      } catch(e) { console.warn('Error al cambiar de pestaña:', e); }
    }, 50);
  });
});


window.irAPestana = function(target) {
  const navBtns = document.querySelectorAll('.nav-btn, .nav-btn-bottom');
  const tabContents = document.querySelectorAll('.tab-content');
  
  navBtns.forEach(b => b.classList.remove('active'));
  tabContents.forEach(tc => tc.classList.remove('active'));
  
  const targetBtns = document.querySelectorAll(`[data-target="${target}"]`);
  targetBtns.forEach(b => b.classList.add('active'));
  
  const targetEl = document.getElementById(target);
  if (targetEl) targetEl.classList.add('active');
  
  window.scrollTo(0,0);
};

// INITIAL STATE// INITIAL STATE
const state = {
  tableroLeche: { precio: 1100, duracion: 300, litros: 1500 },
  tableroCarne: { precio: 10000, duracion: 240, peso: 240 },
  colDefs: ['dib','prog_iny','be1','be2','gnrh1','gnrh2','pgf1','pgf2','pgf3','ecg','ce','gen','retdib','mo1','mo2','iate','opu','dx1','dx2'],
  encabezados: window.DEFAULT_ENCABEZADOS ? window.DEFAULT_ENCABEZADOS.slice() : [],
  
  // Inventory
  insumos: {
    dib: { name: 'Dispositivo Intravaginal Bovino', tipo: 'Und', tamano: 10, valorFrasco: 160000, def: 0, resx1: 1, resx2: 1, cat: 'hormonas', obs: 'P4', usos: 1 },
    prog_iny: { name: 'Progesterona Inyectable', tipo: 'ml', tamano: 50, valorFrasco: 0, def: 1, resx1: 1, resx2: 1, cat: 'hormonas', obs: 'P4 Iny', usos: 1 },
    be1: { name: 'Benzoato de Estradiol (1a Dosis)', tipo: 'ml', tamano: 100, valorFrasco: 69000, def: 0, resx1: 0.5, resx2: 0.5, cat: 'hormonas', obs: 'B.E 1a Dosis' },
    be2: { name: 'Benzoato de Estradiol (2a Dosis)', tipo: 'ml', tamano: 100, valorFrasco: 69000, def: 0, resx1: 0.5, resx2: 0.5, cat: 'hormonas', obs: 'B.E 2a Dosis' },
    gnrh1: { name: 'GnRh (1a Dosis)', tipo: 'ml', tamano: 50, valorFrasco: 94000, def: 0, resx1: 2.5, resx2: 2.5, cat: 'hormonas', obs: 'GnRh 1a Dosis' },
    gnrh2: { name: 'GnRh (2a Dosis)', tipo: 'ml', tamano: 50, valorFrasco: 94000, def: 0, resx1: 2.5, resx2: 2.5, cat: 'hormonas', obs: 'GnRh 2a Dosis' },
    pgf1: { name: 'Prostaglandina (1a Dosis)', tipo: 'ml', tamano: 100, valorFrasco: 100000, def: 0, resx1: 2, resx2: 2, cat: 'hormonas', obs: 'Pgf2@ 1a Dosis' },
    pgf2: { name: 'Prostaglandina (2a Dosis)', tipo: 'ml', tamano: 100, valorFrasco: 100000, def: 0, resx1: 2, resx2: 2, cat: 'hormonas', obs: 'Pgf2@ 2a Dosis' },
    pgf3: { name: 'Prostaglandina (3a Dosis)', tipo: 'ml', tamano: 100, valorFrasco: 100000, def: 0, resx1: 2, resx2: 2, cat: 'hormonas', obs: 'Pgf2@ 3a Dosis' },
    ecg: { name: 'Gonadotropina Coriónica Equina (eCG)', tipo: 'ml', tamano: 30, valorFrasco: 190000, def: 0, resx1: 1, resx2: 1, cat: 'hormonas', obs: 'eCG' },
    ce: { name: 'Cipionato de Estradiol (C.E)', tipo: 'ml', tamano: 100, valorFrasco: 87000, def: 0, resx1: 1, resx2: 1, cat: 'hormonas', obs: 'C.E' },
    gen: { name: 'Genética (Semen / Embrión)', tipo: 'Semen', tamano: 1, valorFrasco: 40000, def: 0, resx1: 0, resx2: 0, cat: 'genetica', obs: 'Solugan SG' },
    retdib: { name: 'Retiro DIB', tipo: 'M.O', tamano: 1, valorFrasco: 0, def: 0, resx1: 0, resx2: 0, cat: 'asistencia', obs: 'R.Dib' },
    mo1: { name: 'Asistencia Técnica 1', tipo: 'Asis.Tec', tamano: 1, valorFrasco: 40000, def: 0, resx1: 1, resx2: 1, cat: 'asistencia', obs: 'Solugan SG' },
    mo2: { name: 'Asistencia Técnica 2', tipo: 'Asis.Tec', tamano: 1, valorFrasco: 0, def: 0, resx1: 1, resx2: 1, cat: 'asistencia', obs: 'Solugan SG' },
    opu: { name: 'Aspiración Folicular (OPU)', tipo: 'Proc', tamano: 1, valorFrasco: 0, def: 0, resx1: 0, resx2: 0, cat: 'asistencia', obs: 'OPU' },
    dx1: { name: 'Confirmación preñez Dx1', tipo: 'Dx1', tamano: 1, valorFrasco: 10000, def: 0, resx1: 0, resx2: 0, cat: 'diagnostico', obs: 'Solugan SG' },
    dx2: { name: 'Confirmación preñez Dx2', tipo: 'Dx2', tamano: 1, valorFrasco: 10000, def: 0, resx1: 0, resx2: 0, cat: 'diagnostico', obs: 'Solugan SG' },
    iate: { name: 'Ia/Te', tipo: 'Asis.Tec', tamano: 1, valorFrasco: 15000, def: 0, resx1: 1, resx2: 1, cat: 'iate', obs: 'Solugan SG' }
  },
  
  matriz: window.DEFAULT_MATRIZ,
  logoEmpresa: 'Logo Iatf Pro.png',
  activeList: []
};

// AUTO-HEALING
(function autoHeal() {
  try {
    const saved = localStorage.getItem('reprocost_state_v4'); // Reset final
    if (!saved) {
       localStorage.removeItem('reprocost_state');
       localStorage.setItem('reprocost_state_v4', 'fixed');
       location.reload();
       return;
    }
  } catch(e) { console.error("Error autoHeal:", e); }
})();

// 1. TABLERO DE CONTROL (LECHE Y CARNE)
window.autoCalcPrenez = function(source = 'prenadas') {
  const tot = Math.max(0, parseInt(document.getElementById('pi-animales').value) || 0);
  const pren = Math.max(0, parseInt(document.getElementById('pi-prenadas').value) || 0);
  
  if (source !== 'porcentaje') {
    const porc = tot > 0 ? (pren / tot) * 100 : 0;
    const elPorc = document.getElementById('pi-porcentaje');
    if (elPorc) elPorc.value = Math.round(porc);
  }
  
  // Actualizar automáticamente animales para ReSx1
  const vacias = tot - pren;
  const elResx1Anim = document.getElementById('resx1-animales');
  if(elResx1Anim) elResx1Anim.value = vacias > 0 ? vacias : 0;
  const lblAnim = document.getElementById('resx1-lbl-animales');
  if(lblAnim) lblAnim.innerText = vacias > 0 ? vacias : 0;

  if(document.getElementById('pi-check-resx1').checked) ejecutarResx1();
  updateResultados();
}

function getDIBDivisor() {
  const el = document.getElementById('mod-usos-dib');
  if (el) {
    return parseInt(el.value) || 1;
  }
  return state.insumos.dib.usos || 1;
}

window.autoCalcPorcentaje = function() { window.autoCalcPrenez('prenadas'); }

window.autoCalcDesdePorcentaje = function() {
  const tot = Math.max(0, parseInt(document.getElementById('pi-animales').value) || 0);
  const porc = Math.max(0, parseFloat(document.getElementById('pi-porcentaje').value) || 0);
  const pren = Math.round(tot * (porc / 100));
  document.getElementById('pi-prenadas').value = pren;
  window.autoCalcPrenez('porcentaje');
}

function actualizarSelectProtocolos() {
  const selectPI = document.getElementById('pi-protocolo');
  const selectR1 = document.getElementById('resx1-protocolo');
  const selectR2 = document.getElementById('resx2-protocolo');
  
  if(!selectPI) {
    console.warn("Selector de protocolo PI no encontrado en el DOM");
    return;
  }

  const currentVal = selectPI.value;
  selectPI.innerHTML = '<option value="">-- SELECCIONAR PROTOCOLO --</option>';
  state.matriz.forEach(p => {
    // Excluir protocolos de resincronización (identificados por su campo role)
    if (!p.role) {
      const opt = document.createElement('option'); 
      opt.value = p.name; 
      opt.innerText = window.tProtocol(p.name);
      selectPI.appendChild(opt);
    }
  });
  
  if([...selectPI.options].find(o => o.value === currentVal)) {
    selectPI.value = currentVal;
  }

  if (selectR1) {
    const r1 = window.getResx1(state.matriz);
    if (r1) {
      selectR1.innerHTML = `<option value="${r1.name}">${r1.name}</option>`;
      selectR1.value = r1.name;
    }
  }

  if (selectR2) {
    const r2 = window.getResx2(state.matriz);
    if (r2) {
      selectR2.innerHTML = `<option value="${r2.name}">${r2.name}</option>`;
      selectR2.value = r2.name;
    }
  }
}

// 1. TABLERO DE CONTROL (LECHE Y CARNE)
window.calcTableroControl = function() {
  const elPrecioL = document.getElementById('tc-precio-leche');
  const elDuracionL = document.getElementById('tc-duracion-lactancia');
  const elLitrosL = document.getElementById('tc-litros-lactancia');
  
  if (elPrecioL) state.tableroLeche.precio = unformatNumber(elPrecioL.value);
  if (elDuracionL) state.tableroLeche.duracion = parseFloat(elDuracionL.value) || 0;
  if (elLitrosL) state.tableroLeche.litros = unformatNumber(elLitrosL.value);
  const promLeche = state.tableroLeche.duracion > 0 ? state.tableroLeche.litros / state.tableroLeche.duracion : 0;
  const ingresoLeche = state.tableroLeche.litros * state.tableroLeche.precio;
  document.getElementById('tc-promedio-leche').innerText = promLeche.toFixed(2);
  document.getElementById('tc-ingreso-leche').innerText = formatter.format(ingresoLeche);
  
  const elPrecioC = document.getElementById('tc-precio-carne');
  const elDuracionC = document.getElementById('tc-duracion-carne');
  const elPesoC = document.getElementById('tc-peso-destete');
  
  if (elPrecioC) state.tableroCarne.precio = unformatNumber(elPrecioC.value);
  if (elDuracionC) state.tableroCarne.duracion = parseFloat(elDuracionC.value) || 0;
  if (elPesoC) state.tableroCarne.peso = unformatNumber(elPesoC.value);
  
  const promCarne = state.tableroCarne.duracion > 0 ? state.tableroCarne.peso / state.tableroCarne.duracion : 0;
  const ingresoCarne = state.tableroCarne.peso * state.tableroCarne.precio;
  
  const elPromC = document.getElementById('tc-promedio-carne');
  const elIngC = document.getElementById('tc-ingreso-carne');
  if (elPromC) elPromC.innerText = promCarne.toFixed(2);
  if (elIngC) elIngC.innerText = formatter.format(ingresoCarne);
}

window.limpiarModuloLeche = function() {
  document.getElementById('tc-precio-leche').value = 0;
  document.getElementById('tc-duracion-lactancia').value = 0;
  document.getElementById('tc-litros-lactancia').value = 0;
  calcTableroControl();
  saveState();
  if (typeof updateResultados === 'function') updateResultados();
}

window.limpiarModuloCarne = function() {
  document.getElementById('tc-precio-carne').value = 0;
  document.getElementById('tc-duracion-carne').value = 0;
  document.getElementById('tc-peso-destete').value = 0;
  calcTableroControl();
  saveState();
  if (typeof updateResultados === 'function') updateResultados();
}

window.tHeader = function(val) {
  if (!val) return val;
  const currentLang = window.currentLang || 'es';
  if (currentLang === 'es') return val;

  const mapEn = {
    'PROTOCOLOS / HORMONAS': 'PROTOCOLS / HORMONES',
    'DISPOSITIVO INTRAVAGINAL BOVINO (P4)': 'BOVINE INTRAVAGINAL DEVICE (P4)',
    'PROGESTERONA INYECTABLE': 'INJECTABLE PROGESTERONE',
    'BENZOATO DE ESTRADIOL (BE) 1A DOSIS': 'ESTRADIOL BENZOATE (EB) 1ST DOSE',
    'BENZOATO DE ESTRADIOL (BE) 2A DOSIS': 'ESTRADIOL BENZOATE (EB) 2ND DOSE',
    'HORMONA LIBERADORA DE GONADOTROPINA (GNRH) 1A DOSIS': 'GONADOTROPIN RELEASING HORMONE (GNRH) 1ST DOSE',
    'HORMONA LIBERADORA DE GONADOTROPINA (GNRH) 2A DOSIS': 'GONADOTROPIN RELEASING HORMONE (GNRH) 2ND DOSE',
    'PROSTAGLANDINA (PGF2@) 1A DOSIS': 'PROSTAGLANDIN (PGF2@) 1ST DOSE',
    'PROSTAGLANDINA (PGF2@) 2A DOSIS': 'PROSTAGLANDIN (PGF2@) 2ND DOSE',
    'PROSTAGLANDINA (PGF2@) 3A DOSIS': 'PROSTAGLANDIN (PGF2@) 3RD DOSE',
    'GONADOTROPINA CORIÓNICA EQUINA (ECG)': 'EQUINE CHORIONIC GONADOTROPIN (ECG)',
    'CIPIONATO DE ESTRADIOL (C.E)': 'ESTRADIOL CYPIONATE (E.C)',
    'GENÉTICA (SEMEN / EMBRIÓN)': 'GENETICS (SEMEN / EMBRYO)',
    'RETIRO DIB': 'DIB WITHDRAWAL',
    'ASISTENCIA TÉCNICA 1': 'TECHNICAL ASSISTANCE 1',
    'ASISTENCIA TÉCNICA 2': 'TECHNICAL ASSISTANCE 2',
    'IA/TE': 'AI/ET',
    'ASPIRACIÓN FOLICULAR (OPU)': 'FOLLICULAR ASPIRATION (OPU)',
    'CONFIRMACIÓN PREÑEZ DX1': 'PREGNANCY CONFIRMATION DX1',
    'CONFIRMACIÓN PREÑEZ DX2': 'PREGNANCY CONFIRMATION DX2'
  };

  const mapPt = {
    'PROTOCOLOS / HORMONAS': 'PROTOCOLOS / HORMÔNIOS',
    'DISPOSITIVO INTRAVAGINAL BOVINO (P4)': 'DISPOSITIVO INTRAVAGINAL BOVINO (P4)',
    'PROGESTERONA INYECTABLE': 'PROGESTERONA INJETÁVEL',
    'BENZOATO DE ESTRADIOL (BE) 1A DOSIS': 'BENZOATO DE ESTRADIOL (BE) 1a DOSE',
    'BENZOATO DE ESTRADIOL (BE) 2A DOSIS': 'BENZOATO DE ESTRADIOL (BE) 2a DOSE',
    'HORMONA LIBERADORA DE GONADOTROPINA (GNRH) 1A DOSIS': 'HORMÔNIO LIBERADOR DE GONADOTROFINA (GNRH) 1a DOSE',
    'HORMONA LIBERADORA DE GONADOTROPINA (GNRH) 2A DOSIS': 'HORMÔNIO LIBERADOR DE GONADOTROFINA (GNRH) 2a DOSE',
    'PROSTAGLANDINA (PGF2@) 1A DOSIS': 'PROSTAGLANDINA (PGF2@) 1a DOSE',
    'PROSTAGLANDINA (PGF2@) 2A DOSIS': 'PROSTAGLANDINA (PGF2@) 2a DOSE',
    'PROSTAGLANDINA (PGF2@) 3A DOSIS': 'PROSTAGLANDINA (PGF2@) 3a DOSE',
    'GONADOTROPINA CORIÓNICA EQUINA (ECG)': 'GONADOTROFINA CORIÔNICA EQUINA (ECG)',
    'CIPIONATO DE ESTRADIOL (C.E)': 'CIPIONATO DE ESTRADIOL (C.E)',
    'GENÉTICA (SEMEN / EMBRIÓN)': 'GENÉTICA (SÊMEN / EMBRIÃO)',
    'RETIRO DIB': 'RETIRADA DIB',
    'ASISTENCIA TÉCNICA 1': 'ASSISTÊNCIA TÉCNICA 1',
    'ASISTENCIA TÉCNICA 2': 'ASSISTÊNCIA TÉCNICA 2',
    'IA/TE': 'IA/TE',
    'ASPIRACIÓN FOLICULAR (OPU)': 'ASPIRAÇÃO FOLICULAR (OPU)',
    'CONFIRMACIÓN PREÑEZ DX1': 'CONFIRMAÇÃO DE PRENHEZ DX1',
    'CONFIRMACIÓN PREÑEZ DX2': 'CONFIRMAÇÃO DE PRENHEZ DX2'
  };

  if (currentLang === 'en') return mapEn[val] || val;
  if (currentLang === 'pt') return mapPt[val] || val;
  return val;
};
// 2. MATRIZ
let isMatrixUnlocked = false;

function renderEncabezados() {
  const trHead = document.getElementById('tc-matriz-header-row');
  if (!trHead) return;
  // Limpiar encabezados existentes dinámicos manteniendo los estáticos (el primero y los dos últimos)
  trHead.innerHTML = `
    <th style="text-align: left; background: #0f172a; font-size: 90%; font-weight: 500;">${window.tHeader ? window.tHeader("PROTOCOLOS / HORMONAS") : "PROTOCOLOS / HORMONAS"}</th>
  `;
  
  // Agregar encabezados dinámicos
  if (state.encabezados && state.encabezados.length > 0) {
    state.encabezados.forEach(enc => {
      trHead.innerHTML += `<th style="font-size: 90%; font-weight: 500;">${window.tHeader ? window.tHeader(enc) : enc}</th>`;
    });
  } else {
    // Fallback if empty (should never happen if default is loaded)
    for (let i = 0; i < state.colDefs.length; i++) {
      trHead.innerHTML += `<th style="font-size: 90%; font-weight: 500;">Col ${i+1}</th>`;
    }
  }

  // Agregar columnas finales fijas
  trHead.innerHTML += `
    <th style="padding: 4px; font-size: 0.75rem; min-width: 280px;">Observaciones</th>
    <th id="th-acciones" style="display: none; background: #ef4444; color:#fff;">Acciones</th>
  `;
}

function renderMatriz() {
  renderEncabezados();
  const tbody = document.getElementById('tc-matriz-body');
  if(!tbody) return;
  tbody.innerHTML = '';
  const thAcciones = document.getElementById('th-acciones');
  if(thAcciones) thAcciones.style.display = isMatrixUnlocked ? 'table-cell' : 'none';

  state.matriz.forEach((protocol, rowIdx) => {
    let tr = document.createElement('tr');
    
    // 1. Nombre (Col 1)
    let nameHtml = isMatrixUnlocked 
      ? `<input type="text" class="cell-input matrix-nav" data-row="${rowIdx}" data-col="0" style="width:140px; text-align:left; background: var(--bg-input);" value="${window.tProtocol(protocol.name)}" onchange="updateRowName(${rowIdx}, this.value)">`
      : `<span style="font-weight: 500; font-size: 0.85rem;">${window.tProtocol(protocol.name)}</span>`;
    tr.innerHTML = `<td style="text-align: left;">${nameHtml}</td>`;
    
    // 2. Días (Cols 2 a 19 - Son exactamente 18 columnas de datos)
    // El orden en colDefs es: 0..13 (Hormonas), 14 (IA), 15 (Asp), 16 (Dx1), 17 (Dx2)
    for (let i = 0; i < state.colDefs.length; i++) {
      const val = protocol.days[i] || '-';
      tr.innerHTML += `<td>
        <input type="text" class="cell-input matrix-nav" data-row="${rowIdx}" data-col="${i + 1}" value="${val}" 
          ${isMatrixUnlocked ? '' : 'disabled style="border-color:transparent; background:transparent; opacity:1;"'} 
          onchange="updateCell(${rowIdx}, ${i}, this.value, 'days')">
      </td>`;
    }

    // 3. Observaciones (Col 20)
    tr.innerHTML += `<td>
      <textarea class="cell-input matrix-nav" data-row="${rowIdx}" data-col="19" 
        style="width:190px; height:44px; min-height:44px; text-align:left; resize:none; line-height:1.25; padding:6px; font-size:0.8rem; font-family:inherit; display:block; box-sizing:border-box; word-break:break-word; white-space:pre-wrap;" 
        ${isMatrixUnlocked ? '' : 'disabled style="border-color:transparent; background:transparent; opacity:1; resize:none;"'} 
        onchange="updateRowObs(${rowIdx}, this.value)">${protocol.obs || ''}</textarea>
    </td>`;
    
    if(isMatrixUnlocked) {
      tr.innerHTML += `<td><button class="btn" style="background:rgba(239, 68, 68, 0.2); color:#ef4444; padding:5px 10px;" onclick="eliminarProtocolo(${rowIdx})"><i data-lucide="trash-2" style="width:14px; height:14px;"></i></button></td>`;
    }
    tbody.appendChild(tr);
  });
  
  actualizarSelectProtocolos();
  if(isMatrixUnlocked) lucide.createIcons();
}

window.agregarNuevoProtocolo = function() {
  if (!isMatrixUnlocked) {
    unlockMatriz();
    if (!isMatrixUnlocked) return; // Si canceló el prompt
  }
  const nuevo = {
    name: 'NUEVO PROTOCOLO',
    days: Array(17).fill('-'),
    hours: Array(17).fill('08:00'),
    ia: '10',
    ia_hour: '16:00',
    obs: 'Nuevo protocolo registrado.'
  };
  state.matriz.push(nuevo);
  renderMatriz();
  saveState();
  
  // Desplazar al final para ver el nuevo protocolo
  const container = document.querySelector('.table-responsive');
  if(container) container.scrollTop = container.scrollHeight;
  
  // Opcional: enfocar el último input de nombre
  setTimeout(() => {
    const inputs = document.querySelectorAll('#tc-matriz-body input');
    if(inputs.length > 0) inputs[inputs.length - (16 + 2 + 1)].focus(); // Enfoca el nombre del último
  }, 100);
}

window.eliminarProtocolo = function(idx) {
  if (!isMatrixUnlocked) return;
  const pName = state.matriz[idx].name;
  const isResx = state.matriz.find(p => p.name === pName && (window.isResx1(p) || window.isResx2(p)));
  if (isResx) {
    alert(t("alert_vital_protocol"));
    return;
  }
  if(confirm(`¿Estás seguro de eliminar el protocolo "${pName}"?`)) {
    state.matriz.splice(idx, 1);
    renderMatriz();
    saveState();
  }
}

window.unlockMatriz = function() {
  if (isMatrixUnlocked) return;
  const pass = prompt("Acceso Restringido. Ingresa la contraseña de administrador:");
  if (pass === "jan5362") {
    isMatrixUnlocked = true;
    window.hasAdminPasswordForMatrix = true;
    const btnUnlock = document.getElementById('btn-unlock');
    if (btnUnlock) {
      btnUnlock.style.display = 'none';
    }
    const btnAdd = document.getElementById('btn-add-protocolo');
    if (btnAdd) btnAdd.style.display = 'inline-flex';
    const btnExcel = document.getElementById('btn-trigger-excel');
    if (btnExcel) btnExcel.style.display = 'inline-flex';
    const btnReset = document.getElementById('btn-reset-matriz');
    if (btnReset) btnReset.style.display = 'inline-flex';
    const btnDeleteAll = document.getElementById('btn-delete-all-protocols');
    if (btnDeleteAll) btnDeleteAll.style.display = 'inline-flex';
    const btnSave = document.getElementById('btn-save-matriz');
    if (btnSave) btnSave.style.display = 'inline-flex';
    const lbl = document.getElementById('lbl-matriz-instruccion');
    if (lbl) lbl.innerText = t('msg_edit_active');
    renderMatriz();
  } else {
    if(pass !== null) alert(t("alert_wrong_pass"));
  }
}

window.irAEditarMatriz = function() {
  const container = document.getElementById('matriz-container');
  const btnToggle = document.getElementById('btn-toggle-protocolos');
  
  // Mostrar la sección si está oculta
  if(container.style.display === 'none') {
    container.style.display = 'block';
    btnToggle.innerHTML = `<i data-lucide="eye-off"></i> ${t('btn_hide_p')}`;
  }
  
  // Desplazar a la sección
  document.getElementById('matriz-container').scrollIntoView({ behavior: 'smooth' });
  
  // Desbloquear si no lo está
  if(!isMatrixUnlocked) {
    unlockMatriz();
  }
}

window.restaurarProtocolosBase = function() {
  if (!isMatrixUnlocked) {
    unlockMatriz();
    if (!isMatrixUnlocked) return;
  }
  if(confirm("¿Restaurar protocolos originales de Solugan SG? Se perderán los cambios actuales.")) {
    state.matriz = window.migrarYSanitizarMatriz(window.DEFAULT_MATRIZ);
    state.encabezados = window.DEFAULT_ENCABEZADOS.slice();
    renderMatriz(); saveState(); alert(t("alert_protocols_restored"));
  }
}

window.vaciarProtocolosYEncabezados = function() {
  if (!isMatrixUnlocked) {
    unlockMatriz();
    if (!isMatrixUnlocked) return;
  }
  if(confirm("¿Estás seguro de que deseas eliminar todos los protocolos actuales para cargar nuevos?")) {
    state.matriz = [];
    state.encabezados = state.colDefs.map((_, i) => 'Columna ' + (i+1));
    renderMatriz(); 
    saveState(); 
    if (typeof actualizarSelectProtocolos === 'function') actualizarSelectProtocolos();
    alert(t("alert_protocols_deleted"));
  }
}

window.guardarMatrizProtocolos = function() {
  isMatrixUnlocked = false;
  const btnUnlock = document.getElementById('btn-unlock');
  if (btnUnlock) btnUnlock.style.display = 'inline-flex';
  const btnAdd = document.getElementById('btn-add-protocolo');
  if (btnAdd) btnAdd.style.display = 'none';
  const btnExcel = document.getElementById('btn-trigger-excel');
  if (btnExcel) btnExcel.style.display = 'none';
  const btnReset = document.getElementById('btn-reset-matriz');
  if (btnReset) btnReset.style.display = 'none';
  const btnDeleteAll = document.getElementById('btn-delete-all-protocols');
  if (btnDeleteAll) btnDeleteAll.style.display = 'none';
  const btnSave = document.getElementById('btn-save-matriz');
  if (btnSave) btnSave.style.display = 'none';
  const lbl = document.getElementById('lbl-matriz-instruccion');
  if (lbl) lbl.innerText = t('msg_view_mode');
  renderMatriz(); 
  saveState();
  alert(t("alert_changes_saved"));
}

window.updateRowName = function(r, val) { 
  if (!isMatrixUnlocked) return;
  // Proteger nombres canónicos de los protocolos de resincronización obligatorios
  const canonicalNames = { resx1: 'REC 1', resx2: 'REC 2', resx1b: 'REC 1', resx2b: 'REC 2' };
  const role = state.matriz[r] && state.matriz[r].role;
  if (role && canonicalNames[role]) {
    // No permitir cambiar el nombre de los 4 protocolos obligatorios
    return;
  }
  state.matriz[r].name = val; 
  debouncedSave();
}
window.updateCell = function(r, c, val, field = 'days') { 
  if (!isMatrixUnlocked) return;
  if (!state.matriz[r][field]) state.matriz[r][field] = Array(18).fill(field === 'days' ? '-' : '08:00');
  state.matriz[r][field][c] = val; 
  // Sincronizar propiedad .ia si se edita la columna 15 (índice 14)
  if (c === 14 && field === 'days') {
    state.matriz[r].ia = val;
  }
  debouncedSave();
  ejecutarProtocoloInicial(); // Refrescar cálculos si es el activo
}
window.updateRowIa = function(r, val, field = 'ia') { 
  if (!isMatrixUnlocked) return;
  state.matriz[r][field] = val; 
  // Sincronizar también en el array de días (índice 14)
  if (state.matriz[r].days) state.matriz[r].days[14] = val;
  debouncedSave();
  ejecutarProtocoloInicial();
}
window.updateRowObs = function(r, val) { 
  if (!isMatrixUnlocked) return;
  state.matriz[r].obs = val; 
  debouncedSave();
}
window.toggleVerProtocolos = function() {
  const container = document.getElementById('matriz-container');
  const btn = document.getElementById('btn-toggle-protocolos');
  if (container.style.display === 'none') {
    container.style.display = 'block';
    btn.innerHTML = `<i data-lucide="eye-off"></i> ${t('btn_hide_p')}`;
    btn.style.background = 'var(--danger)';
    btn.style.borderColor = 'rgba(239, 68, 68, 0.4)';
    btn.style.color = '#ffffff';
    renderMatriz();
  } else {
    container.style.display = 'none';
    btn.innerHTML = `<i data-lucide="eye"></i> ${t('btn_show_p')}`;
    btn.style.background = 'var(--accent)';
    btn.style.borderColor = 'rgba(14, 165, 233, 0.4)';
    btn.style.color = '#ffffff';
    saveState();
    // Re-ejecutar lógica para aplicar cambios de la matriz si hay un protocolo seleccionado
    if(document.getElementById('pi-protocolo').value) {
      ejecutarProtocoloInicial();
      syncFases();
    }
  }
  lucide.createIcons();
}

// 3. PRECIOS E INSUMOS MODAL
let modalContext = 'pi'; // Global context for modal

window.abrirModalPrecios = function(context = 'pi') {
  modalContext = context;
  // Usar el protocolo correcto segun la fase activa
  const pId = context === 'pi' ? 'pi-protocolo' : (context === 'resx1' ? 'resx1-protocolo' : 'resx2-protocolo');
  const aId = context === 'pi' ? 'pi-animales' : (context === 'resx1' ? 'resx1-animales' : 'resx2-animales');
  
  const pName = document.getElementById(pId)?.value || document.getElementById('pi-protocolo').value;
  if(!pName) { 
    alert(`⚠️ Por favor, selecciona primero un 'Protocolo' para configurar sus precios.`); 
    return; 
  }
  
  const titleMap = { 'pi': 'Protocolo Inicial', 'resx1': 'Resincronización 1', 'resx2': 'Resincronización 2' };
  const elTitle = document.getElementById('modal-title');
  const elSub = document.getElementById('modal-subtitle');
  if(elTitle) elTitle.innerText = `COSTOS Y DOSIS: ${titleMap[context]}`;
  if(elSub) elSub.innerText = `Protocolo: ${pName} | Fase Activa: ${titleMap[context]}`;
  
  const tbody = document.getElementById('tabla-modal-precios');
  if(!tbody) return;
  tbody.innerHTML = '';
  
  const protocol = state.matriz.find(p => p.name === pName);
  if(!protocol) { alert(t("alert_invalid_protocol")); return; }
  
  const animalesNum = parseInt(document.getElementById(aId).value) || 0;
  const categories = [
    { id: 'hormonas', color: 'var(--accent)' },
    { id: 'asistencia', color: '#f59e0b' },
    { id: 'iate', color: '#ec4899' },
    { id: 'genetica', color: '#a855f7' },
    { id: 'diagnostico', color: 'var(--success)' }
  ];

  let htmlBuffer = '';

  categories.forEach(cat => {
    const catItems = Object.keys(state.insumos).filter(colId => {
      if (state.insumos[colId].cat !== cat.id) return false;
      const dayStr = colId === 'iate' ? protocol.ia : (state.colDefs.indexOf(colId) !== -1 ? protocol.days[state.colDefs.indexOf(colId)] : '-');
      const isInProtocol = dayStr !== '-' && dayStr !== '';
      return ['diagnostico', 'asistencia', 'iate'].includes(cat.id) || isInProtocol;
    });

    if (catItems.length > 0) {
      htmlBuffer += `
        <tr style="background: rgba(255,255,255,0.03);">
          <td colspan="7" style="padding: 0.75rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <div style="display: flex; align-items: center; gap: 0.5rem; color: ${cat.color}; font-weight: 700; font-size: 0.75rem;">
              <i data-lucide="tag"></i> ${t('cat_' + cat.id)}
            </div>
          </td>
        </tr>`;

      catItems.forEach(id => {
        const idx = state.colDefs.indexOf(id);
        const ins = state.insumos[id];
        if (!ins) return;
        const isService = ['gen','retdib','mo1','mo2','dx1','dx2','opu','iate'].includes(id);
        const dayStr = id === 'iate' ? protocol.ia : (idx !== -1 ? protocol.days[idx] : '-');

        const useSuffix = (id === 'dib') ? (
            (context === 'resx1') ? (window.currentLang === 'en' ? ' (Second Use)' : ' (Segundo Uso)') :
            (context === 'resx2') ? (window.currentLang === 'en' ? ' (Third Use)' : ' (Tercer Uso)') : ''
        ) : '';

        const insName = t('ins_' + id) + useSuffix;

        // REGLA: OPU solo se muestra si está incluido en el protocolo
        if (id === 'opu' && (dayStr === '-' || dayStr === '')) return;
        
        // Cargar dosis según el contexto con fallback a los nuevos defaults
        let currentDef = 0;
        if (dayStr !== '-' && dayStr !== '') {
           if (context === 'pi') {
              currentDef = ins.def || 0;
           } else {
              // Si la dosis guardada es 0, intentar usar el default configurado en el estado
              currentDef = ins[context] || 0;
              if (currentDef === 0) {
                const defaults = { dib: 1, be1: 0.5, be2: 0.5, gnrh1: 2.5, gnrh2: 2.5, pgf1: 2, pgf2: 2, pgf3: 2, ecg: 1, ce: 1, mo1: 1, mo2: 1 };
                if (defaults[id]) currentDef = defaults[id];
              }
           }
        }
        
        // REGLA UNIVERSAL: si el protocolo incluye el insumo (dayStr válido), servicios binarios = 1 activo
        if (['dib','opu','mo1','mo2','retdib','dx1','dx2'].includes(id) && dayStr !== '-' && dayStr !== '') {
          if (currentDef === 0) currentDef = 1;
        }

        let postIaValue = (id === 'dx1' ? 30 : 60);
        if (dayStr !== '-' && dayStr !== '') {
           postIaValue = parseInt(dayStr);
        }

        let unidadesUtilizar = currentDef * animalesNum;
        let frascosComprar = isService ? unidadesUtilizar : Math.ceil(unidadesUtilizar / (ins.tamano || 1));
        
        const valorUnitario = id === 'opu' ? 0 : ins.valorFrasco;
        let costoTotalComercial = frascosComprar * valorUnitario;

        const extraAttr = (id === 'dib' || id === 'opu') ? 'readonly style="opacity:0.7; background:rgba(255,255,255,0.05);"' : (id === 'gen' ? 'min="0" max="3"' : 'min="0"');
        const disableSelect = (id === 'opu') ? 'disabled' : '';
        
        htmlBuffer += `
          <tr id="mod-row-${id}" data-cat="${ins.cat}">
            <td style="padding-left: 2rem; text-align: left;">
                <div style="display:flex; flex-direction:column;">
                    <strong>${insName}</strong>
                </div>
            </td>
            <td style="text-align: center;">
              ${isService ? `
                  <select id="mod-def-${id}" ${disableSelect} class="cell-input" style="width:100px; text-align: center; padding: 5px; ${id==='opu'?'opacity:0.7;':''}" onchange="recalcFilaModal('${id}', ${isService})">
                    <option value="0" ${currentDef == 0 ? 'selected' : ''}>-</option>
                    <option value="1" ${currentDef == 1 ? 'selected' : ''}>1</option>
                    ${id === 'gen' ? `<option value="2" ${currentDef == 2 ? 'selected' : ''}>2</option><option value="3" ${currentDef == 3 ? 'selected' : ''}>3</option>` : ''}
                  </select>
                ` : id === 'dib' ? `
                  <input type="hidden" id="mod-def-${id}" value="1">
                  <div style="display:flex; flex-direction:column; align-items:center; gap:2px;">
                    <select id="mod-usos-dib" disabled class="cell-input" style="width:100px; text-align: center; padding: 5px; cursor: not-allowed; opacity: 0.8; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:var(--text-muted); font-weight:700; border-radius:5px;">
                      <option value="1" ${(state.insumos.dib.usos || 1) === 1 ? 'selected' : ''}>1 Uso</option>
                      <option value="2" ${(state.insumos.dib.usos || 1) === 2 ? 'selected' : ''}>2 Usos</option>
                      <option value="3" ${(state.insumos.dib.usos || 1) === 3 ? 'selected' : ''}>3 Usos</option>
                    </select>
                    <span style="font-size:0.65rem; color:var(--text-muted); font-weight:550;">(Auto por ReSx)</span>
                  </div>
                ` : id === 'opu' ? `
                  <input type="number" step="0.1" id="mod-def-${id}" value="${currentDef}" ${extraAttr} class="cell-input" style="width:100px; text-align: center; padding: 5px;">
                ` : `
                  <div class="spinner-wrap" style="width:120px; margin:0 auto;">
                    <button class="spin-btn minus" onclick="spinVal('mod-def-${id}', -0.1, false); recalcFilaModal('${id}', false);">&#8722;</button>
                    <input type="number" step="0.1" id="mod-def-${id}" value="${currentDef}" min="0" max="5.0" class="cell-input" style="text-align:center; padding:5px;" onchange="recalcFilaModal('${id}', false)">
                    <button class="spin-btn plus" onclick="spinVal('mod-def-${id}', 0.1, false); recalcFilaModal('${id}', false);">&#43;</button>
                  </div>`
              }
            </td>
            <td style="text-align: center;">
              ${isService ? (['dx1','dx2'].includes(id) ? `
                  <div style="display:flex; flex-direction:column; align-items:center; gap:2px;">
                    <div class="spinner-wrap" style="width:130px; margin:0 auto;">
                      <button class="spin-btn minus" onclick="spinVal('mod-postia-${id}', -1, false); recalcFilaModal('${id}', true);">&#8722;</button>
                      <input type="number" id="mod-postia-${id}" value="${postIaValue}" class="cell-input" style="text-align:center; padding:5px;" onchange="recalcFilaModal('${id}', true)">
                      <button class="spin-btn plus" onclick="spinVal('mod-postia-${id}', 1, false); recalcFilaModal('${id}', true);">&#43;</button>
                    </div>
                    <span class="text-muted" style="font-size:0.6rem; white-space:nowrap;">${id.toUpperCase()} post Ia/Te</span>
                  </div>
                ` : `<div style="display:grid; grid-template-columns: 110px 40px; align-items:center; justify-content:center; gap:8px;">
                     <input type="hidden" id="mod-tamano-${id}" value="1">
                     <span class="text-muted" style="grid-column: 1; text-align:center;">-</span>
                     <span class="text-muted" style="font-size:0.75rem; grid-column: 2; text-align:left;">Und</span>
                   </div>`)
                : `<div style="display:grid; grid-template-columns: 110px 40px; align-items:center; justify-content:center; gap:8px;">
                     <div class="spinner-wrap" style="width:110px; grid-column:1;">
                       <button class="spin-btn minus" onclick="spinVal('mod-tamano-${id}', -1, false); recalcFilaModal('${id}', false);">&#8722;</button>
                       <input type="number" id="mod-tamano-${id}" value="${ins.tamano}" class="cell-input" style="text-align:center; padding:5px;" onchange="recalcFilaModal('${id}', false)">
                       <button class="spin-btn plus" onclick="spinVal('mod-tamano-${id}', 1, false); recalcFilaModal('${id}', false);">&#43;</button>
                     </div>
                     <span class="text-muted" style="font-size:0.75rem; grid-column:2; text-align:left;">${ins.tipo}</span>
                   </div>`
              }
            </td>
            <td style="text-align: center;">
              ${(id==='opu') ? `
                <input type="text" id="mod-valor-${id}" value="${valorUnitario.toLocaleString('es-CO')}" readonly class="cell-input" style="width:110px; text-align:center; opacity:0.7; background:rgba(255,255,255,0.05); padding:5px;">
              ` : `
                <div class="spinner-wrap" style="width:140px; margin:0 auto;">
                  <button class="spin-btn minus" onclick="spinVal('mod-valor-${id}', -1000, true); recalcFilaModal('${id}', ${isService});">&#8722;</button>
                  <input type="text" id="mod-valor-${id}" value="${valorUnitario.toLocaleString('es-CO')}" class="cell-input" style="text-align:center; padding:5px;" oninput="formatInputCurrency(this); recalcFilaModal('${id}', ${isService})">
                  <button class="spin-btn plus" onclick="spinVal('mod-valor-${id}', 1000, true); recalcFilaModal('${id}', ${isService});">&#43;</button>
                </div>
              `}
            </td>
            <td id="mod-lbl-frascos-${id}" style="text-align: center;"><strong>${frascosComprar}</strong></td>
            <td id="mod-lbl-costo-${id}" style="text-align: center;"><strong class="text-success">${formatter.format(costoTotalComercial)}</strong></td>
            <td id="mod-lbl-costodosis-${id}" style="text-align: center; color: #f59e0b; font-weight: bold;">${formatter.format(isService ? (ins.valorFrasco / (id === 'dib' ? (state.insumos.dib.usos || 1) : 1)) : ((ins.valorFrasco / (ins.tamano || 1) * currentDef) / (id === 'dib' ? (state.insumos.dib.usos || 1) : 1)))}</td>
          </tr>
        `;
      });
      if (cat.id === 'hormonas') {
        htmlBuffer += `
          <tr id="row-total-hormonas-compra" style="background: rgba(14, 165, 233, 0.08); font-weight: bold; border-top: 1px solid rgba(14, 165, 233, 0.2); border-bottom: 1.5px solid rgba(14, 165, 233, 0.3);">
            <td colspan="5" style="text-align: right; padding: 0.75rem 1rem; color: var(--accent); font-size: 0.85rem;" data-i18n="modal_total_hormonas">${t('modal_total_hormonas')}</td>
            <td id="mod-total-hormonas-compra" style="text-align: center; padding: 0.75rem 1rem; font-size: 0.95rem; color: var(--success); font-weight: 800;">$ 0</td>
            <td></td>
          </tr>
        `;
      }
    }
  });

  tbody.innerHTML = htmlBuffer;
  
  try {
    recalcModalTotals();
    lucide.createIcons();
  } catch(e) {
    console.error("Error en cálculos del modal:", e);
  }

  
  // Mostrar la opcion de incluir resincronizacion correspondiente
  const wrp1 = document.getElementById('wrapper-check-resx1');
  const wrp2 = document.getElementById('wrapper-check-resx2');
  const trk = document.getElementById('modal-resync-toggles');
  if (wrp1 && wrp2 && trk) {
    if (context === 'pi') {
      trk.style.display = 'flex';
      wrp1.style.display = 'flex';
      wrp2.style.display = 'none';
    } else if (context === 'resx1') {
      trk.style.display = 'flex';
      wrp1.style.display = 'none';
      wrp2.style.display = 'flex';
    } else {
      trk.style.display = 'none';
      wrp1.style.display = 'none';
      wrp2.style.display = 'none';
    }
  }

  document.getElementById('modal-precios').style.display = 'flex';

}

window.formatCurrencyInput = function(val) {
  let v = val.replace(/\D/g, "");
  if (v === "" || v === "0") return "0";
  return Number(v).toLocaleString('es-CO');
}
function unformatNumber(str) {
  if (typeof str !== 'string') str = String(str);
  if(!str) return 0;
  return parseFloat(str.replace(/[^\d]/g, "")) || 0;
}

window.recalcModalTotals = function() {
  const aId = modalContext === 'pi' ? 'pi-animales' : (modalContext === 'resx1' ? 'resx1-animales' : 'resx2-animales');
  const animalesNum = parseInt(document.getElementById(aId).value) || 0;
  let totals = { hormonas: 0, genetica: 0, asistencia: 0, diagnostico: 0, iate: 0 };
  let totalHormonasCompra = 0;
  Object.keys(state.insumos).forEach((id) => {
    const vEl = document.getElementById(`mod-valor-${id}`);
    const dEl = document.getElementById(`mod-def-${id}`);
    if(!vEl || !dEl) return;
    const def = parseFloat(dEl.value) || 0;
    if (def > 0) {
      const valor = unformatNumber(vEl.value);
      const isService = ['gen','retdib','mo1','mo2','dx1','dx2','opu','iate'].includes(id);
      
      // Divisor dinámico para DIB basado en etapas activas
      const divisorDIB = getDIBDivisor();
      const factorUsos = (id === 'dib') ? divisorDIB : 1;
      const unitsToBuy = def * animalesNum;
      
      // La inversión de COMPRA (Cash out) solo aplica si no es DIB reutilizado
      let isReusedDIB = (id === 'dib' && (modalContext === 'resx1' || modalContext === 'resx2'));
      let tamano = (state.insumos[id].tamano || 1);
      let costoCompraEfectiva = isReusedDIB ? 0 : (isService ? (unitsToBuy * valor) : (Math.ceil(unitsToBuy / tamano) * valor));
      
      if (state.insumos[id].cat === 'hormonas') {
        totalHormonasCompra += costoCompraEfectiva;
      }
      
      // La inversión APLICADA (para ROI) siempre se divide por el factor dinámico
      let costoAplicado = isService ? (unitsToBuy * valor / factorUsos) : (unitsToBuy * (valor / tamano) / factorUsos);
      
      totals[state.insumos[id].cat] += costoAplicado;
    }
  });
  document.getElementById('mod-total-hormonas').innerText = formatter.format(totals.hormonas);
  document.getElementById('mod-total-genetica').innerText = formatter.format(totals.genetica);
  document.getElementById('mod-total-asistencia').innerText = formatter.format(totals.asistencia);
  if(document.getElementById('mod-total-iate')) document.getElementById('mod-total-iate').innerText = formatter.format(totals.iate);
  document.getElementById('mod-total-diagnostico').innerText = formatter.format(totals.diagnostico);
  if(document.getElementById('mod-total-hormonas-compra')) document.getElementById('mod-total-hormonas-compra').innerText = formatter.format(totalHormonasCompra);
}

window.recalcFilaModal = function(id, isService) {
   const aId = modalContext === 'pi' ? 'pi-animales' : (modalContext === 'resx1' ? 'resx1-animales' : 'resx2-animales');
   const an = parseInt(document.getElementById(aId).value) || 0;
   const dEl = document.getElementById(`mod-def-${id}`);
   let def = parseFloat(dEl.value) || 0;
   if (!isService && id !== 'dib' && id !== 'opu') {
     const maxVal = parseFloat(dEl.getAttribute('max')) || 5.0;
     if (def > maxVal) {
       def = maxVal;
       dEl.value = maxVal;
     }
   }
   const val = unformatNumber(document.getElementById(`mod-valor-${id}`).value);
   const tamano = !isService ? (parseFloat(document.getElementById(`mod-tamano-${id}`).value) || 1) : 1;
   
   let effectiveDose = def;
   const divisorDIB = getDIBDivisor();
   const factorUsos = (id === 'dib') ? divisorDIB : 1;
   
   if (id === 'dib') {
       effectiveDose = def / factorUsos;
       // Actualizar el estado para que coincida con el divisor dinámico
       state.insumos[id].usos = divisorDIB;
   }

   // El costo por dosis SIEMPRE se divide por usos
   let costDosis = isService ? (val / factorUsos) : (val / tamano * effectiveDose);
   
   // Lógica de Compra: Si es ReSx y es un dispositivo, la compra es 0 (reutilización)
   let isReusedDIB = (id === 'dib' && (modalContext === 'resx1' || modalContext === 'resx2'));
   let totalFrascos = isReusedDIB ? 0 : (isService ? (def * an) : Math.ceil((def * an) / tamano));
   let costTotalRow = totalFrascos * val;
   
   document.getElementById(`mod-lbl-costodosis-${id}`).innerText = formatter.format(costDosis);
   document.getElementById(`mod-lbl-frascos-${id}`).innerHTML = isReusedDIB ? '<span class="badge" style="background:var(--success); color:#fff; font-size:0.6rem;">REUTILIZADO</span>' : `<strong>${totalFrascos}</strong>`;
   document.getElementById(`mod-lbl-costo-${id}`).innerHTML = isReusedDIB ? '<strong class="text-success">$ 0</strong>' : `<strong class="text-success">${formatter.format(costTotalRow)}</strong>`;
   
   recalcModalTotals();
}

window.cerrarModalPrecios = function() { document.getElementById('modal-precios').style.display = 'none'; }

window.guardarPreciosModal = function() {
  // Usar el protocolo correcto según el contexto activo
  const pId = modalContext === 'pi' ? 'pi-protocolo' : (modalContext === 'resx1' ? 'resx1-protocolo' : 'resx2-protocolo');
  const pName = document.getElementById(pId)?.value || document.getElementById('pi-protocolo').value;
  const protocol = state.matriz.find(p => p.name === pName);
  if(!protocol) return;
  const iaDayIdx = state.colDefs.indexOf('gen');
  const iaDay = parseInt(protocol.days[iaDayIdx]) || 0;

  Object.keys(state.insumos).forEach((id) => {
    const vEl = document.getElementById(`mod-valor-${id}`);
    const dEl = document.getElementById(`mod-def-${id}`);
    if(vEl) {
      state.insumos[id].valorFrasco = unformatNumber(vEl.value);
      const tEl = document.getElementById(`mod-tamano-${id}`);
      if (tEl) state.insumos[id].tamano = parseFloat(tEl.value) || 1;
      
      if (id === 'dib') {
        state.insumos[id].usos = parseInt(document.getElementById('mod-usos-dib')?.value) || 1;
      }
    }
    if(dEl) {
      const val = parseFloat(dEl.value) || 0;

      // Lógica de servicios: sincronización bidireccional con el protocolo
      if(['dx1','dx2','mo1','mo2','retdib'].includes(id)) {
        const idx = state.colDefs.indexOf(id);
        if(val > 0) {
           if (['dx1','dx2'].includes(id)) {
              const pIaEl = document.getElementById(`mod-postia-${id}`);
              if (pIaEl) {
                const postIa = parseInt(pIaEl.value) || 0;
                if (idx !== -1) protocol.days[idx] = postIa.toString();
              }
           } else if (idx !== -1 && protocol.days[idx] === '-') {
              // Asignar día base del DIB del protocolo activo para ReSx
              const dibIdx = state.colDefs.indexOf('dib');
              const dibDay = (protocol.days[dibIdx] !== '-' && protocol.days[dibIdx] !== '') ? parseInt(protocol.days[dibIdx]) : 0;
              if (id === 'mo1') protocol.days[idx] = dibDay.toString();
              else if (id === 'mo2') protocol.days[idx] = (dibDay + 10).toString();
              else protocol.days[idx] = '8'; // retdib
           }
        } else {
           if (idx !== -1) protocol.days[idx] = '-';
        }
      }

      // Guardar dosis (aplica a todos los insumos incluidos los servicios)
      if (modalContext === 'pi') state.insumos[id].def = val;
      else state.insumos[id][modalContext] = val;
    }
  });

  cerrarModalPrecios(); 
  saveState(); 
  
  if (modalContext === 'pi') { 
    ejecutarProtocoloInicial(); 
    renderMatriz(); 
    if (document.getElementById('pi-check-resx1')?.checked) {
      setTimeout(() => { irAPestana('resincronizacion1'); ejecutarResx1(); lucide.createIcons(); }, 100);
    }
  }
  else if (modalContext === 'resx1') { 
    ejecutarResx1(); 
    if (document.getElementById('pi-check-resx2')?.checked) {
      setTimeout(() => { irAPestana('resincronizacion2'); ejecutarResx2(); lucide.createIcons(); }, 100);
    }
  }
  else if (modalContext === 'resx2') { 
    ejecutarResx2(); 
  }
  
  updateResultados();
}

// 4. PROTOCOLO INICIAL CALC
window.toggleProtocolo = function(fase) {
  const resDiv = document.getElementById(fase + '-resultados');
  const btn = document.getElementById('btn-toggle-' + fase);
  if(!resDiv || !btn) return;

  const isHidden = (resDiv.style.display === 'none' || resDiv.style.display === '');

  if (isHidden) {
     // ACCIÓN: VAMOS A MOSTRAR
     if (fase === 'pi') {
        const pName = document.getElementById('pi-protocolo').value;
        const fechaStr = document.getElementById('pi-fecha').value;
        if(!pName || !fechaStr) { alert(t('msg_select_pf')); return; }
        ejecutarProtocoloInicial();
     } else if (fase === 'resx1') {
        ejecutarResx1();
     } else if (fase === 'resx2') {
        ejecutarResx2();
     }
     
     resDiv.style.display = 'block'; // Asegurar visibilidad
     btn.classList.add('active-toggle'); // Rojo
     btn.innerHTML = '<i data-lucide="eye-off"></i> <span id="txt-toggle-' + fase + '">' + t('btn_hide_p') + '</span>';
  } else {
     // ACCIÓN: VAMOS A OCULTAR
     resDiv.style.display = 'none';
     btn.classList.remove('active-toggle'); // Azul
     btn.innerHTML = '<i data-lucide="eye"></i> <span id="txt-toggle-' + fase + '">' + t('btn_show_p') + '</span>';
  }
  if (window.lucide) lucide.createIcons();
}

window.ejecutarProtocoloInicial = function() {
  const pName = document.getElementById('pi-protocolo').value;
  const fechaStr = document.getElementById('pi-fecha').value;
  if(!pName || !fechaStr) return;
  
  const protocol = state.matriz.find(p => p.name === pName);
  const fBase = new Date(fechaStr + 'T12:00:00');
  state.activeList = [];
  protocol.days.forEach((day, idx) => {
    if (day !== '-' && day !== '') {
      let offset = parseInt(day);
      if (state.colDefs[idx] === 'dx1' || state.colDefs[idx] === 'dx2') {
        const iaDay = parseInt(protocol.ia) || 0;
        offset = iaDay + offset;
      }
      state.activeList.push({ 
        colId: state.colDefs[idx], 
        dayOffset: offset,
        hour: (protocol.hours && protocol.hours[idx]) ? protocol.hours[idx] : "" 
      });
    }
  });

  // SEGURIDAD: Si hay DIB pero no hay Retiro, forzarlo
  const hasDIB = protocol.days[0] !== '-' && protocol.days[0] !== '';
  const hasRetiro = protocol.days[11] !== '-' && protocol.days[11] !== '';
  if (hasDIB && !hasRetiro) {
    let diaRetiro = 8;
    let horaRetiro = '08:00';
    if (protocol.days[5] !== '-' && protocol.days[5] !== '') {
      diaRetiro = parseInt(protocol.days[5]);
      horaRetiro = protocol.hours[5] || '08:00';
    }
    else if (protocol.days[8] !== '-' && protocol.days[8] !== '') {
      diaRetiro = parseInt(protocol.days[8]);
      horaRetiro = protocol.hours[8] || '08:00';
    }
    state.activeList.push({ colId: 'retdib', dayOffset: diaRetiro, hour: horaRetiro });
  }
  // HITO DE INSEMINACIÓN ARTIFICIAL: ia_event se mantiene para la lógica de visualización de hitos
  if (protocol.ia !== '' && protocol.ia !== '-') {
    state.activeList.push({ colId: 'ia_event', dayOffset: parseInt(protocol.ia), hour: protocol.ia_hour || '16:00', pName: protocol.name });
  }

  state.activeList.sort((a,b) => {
    if (a.dayOffset !== b.dayOffset) return a.dayOffset - b.dayOffset;
    return a.hour.localeCompare(b.hour);
  });
  
  document.getElementById('pi-resultados').style.display = 'block';
  
  document.getElementById('pi-resultados').style.display = 'block';
  
  // Sincronizar el botón si se ejecuta desde carga automática o manual
  const btn = document.getElementById('btn-toggle-pi');
  if(btn) {
    btn.innerHTML = `<i data-lucide="eye-off"></i> <span id="txt-toggle-pi">${t('btn_hide_p')}</span>`;
    btn.classList.add('active-toggle');
  }

  if (protocol.ia) {
    const sumDate = new Date(fBase); sumDate.setDate(fBase.getDate() + (parseInt(protocol.ia) || 0));
    const infoDiv = document.getElementById('pi-ia-info');
    if (infoDiv) {
      infoDiv.innerHTML = `
        <div style="flex: 1;">
          <div style="font-weight: 800; font-size: 1.2rem; color: var(--accent); margin-bottom: 6px; display:flex; align-items:center; gap:8px;">
            <i data-lucide="award"></i> ${window.tProtocol(protocol.name)}
          </div>
          <div style="display: flex; gap: 2rem; font-size: 0.95rem; color: var(--text-main); font-weight: 600;">
            <span><i data-lucide="calendar"></i> ${t('card_inicio')} ${fBase.toLocaleDateString(currentLang === 'en' ? 'en-US' : (currentLang === 'pt' ? 'pt-BR' : 'es-ES'), { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span><i data-lucide="activity" style="color:var(--accent);"></i> ${t('card_inseminar')} ${protocol.ia} (${sumDate.toLocaleDateString(currentLang === 'en' ? 'en-US' : (currentLang === 'pt' ? 'pt-BR' : 'es-ES'), { day: 'numeric', month: 'long', year: 'numeric' })})</span>
          </div>
          <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed rgba(255,255,255,0.1); color: var(--text-muted); font-size: 0.9rem;">
            <i data-lucide="message-circle" style="width:16px;"></i> <strong>${t('obs_label')}</strong> ${protocol.obs || '...'}
          </div>
        </div>
        ${state.logoEmpresa ? `<div style="width: 80px; height: 80px; background: white; padding: 5px; border-radius: 8px;"><img src="${state.logoEmpresa}" style="width: 100%; height: 100%; object-fit: contain;"></div>` : ''}
      `;
      infoDiv.style.display = 'flex';
    }
  } else {
    const infoDiv = document.getElementById('pi-ia-info');
    if(infoDiv) infoDiv.style.display = 'none';
  }

  reCalcTablaPI();

  // Sincronizar ReSx1 y ReSx2 según configuración
  syncFases();
}

function reCalcTablaPI() {
  const tbody = document.getElementById('tc-pi-body');
  if(!tbody) return;
  tbody.innerHTML = '';
  
  const an = Math.max(0, parseInt(document.getElementById('pi-animales').value) || 0);
  const fBaseVal = document.getElementById('pi-fecha').value;
  if(!fBaseVal) return;
  const fBase = new Date(fBaseVal + 'T12:00:00');
  
  const hBase = document.getElementById('pi-hora').value || "--:--";
  
  let gComp = 0, gAplic = 0, gTotalPorVaca = 0;
  let tCat = { hormonas: 0, genetica: 0, asistencia: 0, diagnostico: 0, iate: 0 };
  let tCatPerCow = { hormonas: 0, genetica: 0, asistencia: 0, diagnostico: 0, iate: 0 };
  let htmlRows = '';

  const langCode = window.currentLang === 'en' ? 'en-US' : (window.currentLang === 'pt' ? 'pt-BR' : 'es-ES');

  state.activeList.forEach(row => {
    const dDate = new Date(fBase); dDate.setDate(fBase.getDate() + row.dayOffset);
    const rowHour = row.hour || hBase;
    
    if (row.colId === 'ia_event') {
        const isReceptora = row.pName && row.pName.toLowerCase().includes('receptora');
        const eventoText = isReceptora ? t('evento_te') : t('act_ia');
        htmlRows += `
          <tr style="background: rgba(14, 165, 233, 0.15); border-left: 4px solid var(--accent);">
            <td style="text-align:center;"><strong>${row.dayOffset}</strong> <span class="badge" style="background:var(--accent); color:#fff; font-size:0.6rem; margin-left:4px;">IA/TE</span></td>
            <td>${dDate.toLocaleDateString(langCode, { weekday: 'short', day: 'numeric', month: 'short' })}</td>
            <td style="text-align:center;"><strong>${rowHour}</strong></td>
            <td colspan="5"><strong style="color: var(--accent); font-size: 1.05rem;"><i data-lucide="activity"></i> ${eventoText}</strong></td>
          </tr>`;
        return;
    }
    
    const ins = state.insumos[row.colId];
    if (!ins) return; // Seguridad contra colIds no definidos en insumos
    
    if (row.colId !== 'opu' && (ins.def === 0 && ins.valorFrasco === 0)) return;
    const isServ = ['gen','retdib','mo1','mo2','dx1','dx2','opu','iate'].includes(row.colId);
    
    const insName = t('ins_' + row.colId);
    
    const divisorDIB = getDIBDivisor();
    const factorUsos = (row.colId === 'dib') ? divisorDIB : 1;
    let units = ins.def * an;
    let comp = isServ ? units * ins.valorFrasco : Math.ceil(units / (ins.tamano || 1)) * ins.valorFrasco;
    let aplic = (isServ ? comp : units * (ins.valorFrasco / (ins.tamano || 1))) / factorUsos;
    let costoDosis = (isServ ? ins.valorFrasco : (ins.valorFrasco / (ins.tamano || 1) * ins.def)) / factorUsos;
    
 gTotalPorVaca += costoDosis;
    tCat[ins.cat] += aplic;
    tCatPerCow[ins.cat] += costoDosis;

    htmlRows += `
      <tr>
        <td style="text-align:center;"><strong>${row.dayOffset}</strong></td>
        <td>${dDate.toLocaleDateString(langCode, { weekday: 'short', day: 'numeric', month: 'short' })}</td>
        <td style="text-align:center;"><strong>${rowHour}</strong></td>
        <td><strong>${insName}</strong></td>
        <td style="text-align:center; font-weight:bold; color:var(--accent);">${ins.def}</td>
        <td style="text-align:center; font-size:0.75rem;">${ins.tipo}</td>
        <td style="text-align:center; color:#f59e0b; font-weight:bold;">${formatter.format(costoDosis)}</td>
        <td style="text-align:right; font-weight:bold;">${formatter.format(costoDosis * an)}</td>
      </tr>`;

    if(row.colId === 'gen' && ins.valorFrasco > 0) {
        htmlRows += `
        <tr style="background: rgba(245, 158, 11, 0.05); border-left: 4px solid #f59e0b; font-size: 0.75rem; color: #f59e0b;">
            <td style="text-align:center;"><strong>${row.dayOffset}</strong></td>
            <td>${dDate.toLocaleDateString(currentLang === 'en' ? 'en-US' : (currentLang === 'pt' ? 'pt-BR' : 'es-ES'), { weekday: 'short', day: 'numeric', month: 'short' })}</td>
            <td style="text-align:center;"><strong>${rowHour}</strong></td>
            <td colspan="5" style="text-align:left; padding-left: 1rem;"><i>⚡ ${t('obs_label')} IATF 48-60 hs post PGF/eCG – GnRh opcional al momento de IA/TE</i></td>
        </tr>`;
    }
  });
  tbody.innerHTML = htmlRows;

  const numP = parseFloat(document.getElementById('pi-prenadas').value) || 1;
  
  // Update Footer Total
  const elFooter = document.getElementById('pi-total-footer');
  if(elFooter) elFooter.innerText = formatter.format(gTotalPorVaca);
  
  // Update Footer breakdown per cow
  if(document.getElementById('pi-hormonas-footer')) document.getElementById('pi-hormonas-footer').innerText = formatter.format(tCatPerCow.hormonas);
  if(document.getElementById('pi-iate-footer')) document.getElementById('pi-iate-footer').innerText = formatter.format(tCatPerCow.iate);

  // Category Breakdown
  if(document.getElementById('pi-cat-hormonas')) document.getElementById('pi-cat-hormonas').innerText = formatter.format(tCat.hormonas);
  if(document.getElementById('pi-cat-genetica')) document.getElementById('pi-cat-genetica').innerText = formatter.format(tCat.genetica);
  if(document.getElementById('pi-cat-asistencia')) document.getElementById('pi-cat-asistencia').innerText = formatter.format(tCat.asistencia);
  if(document.getElementById('pi-cat-iate')) document.getElementById('pi-cat-iate').innerText = formatter.format(tCat.iate);
  if(document.getElementById('pi-cat-diagnostico')) document.getElementById('pi-cat-diagnostico').innerText = formatter.format(tCat.diagnostico);

  window.dashCatCosts.pi = { ...tCat };

  updateResultados();
  lucide.createIcons();
}

// 5. GESTIÓN DE LOGO
window.manejarSubidaLogo = function(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const base64 = e.target.result;
    state.logoEmpresa = base64;
    actualizarVistaLogo();
    saveState();
  };
  reader.readAsDataURL(file);
}

function actualizarVistaLogo() {
  const container = document.getElementById('logo-preview-container');
  const img = document.getElementById('logo-preview-img');
  const sidebarIcons = document.querySelectorAll('.sidebar-header .logo-icon');
  
  if (state.logoEmpresa) {
    if(container) container.style.display = 'block';
    if(img) img.src = state.logoEmpresa;
    
    // Cambiar todos los iconos de la cabecera por el logo también
    sidebarIcons.forEach(sidebarIcon => {
      if (state.logoEmpresa === 'Logo Iatf Pro.png') {
        sidebarIcon.innerHTML = `<img src="${state.logoEmpresa}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 16px;">`;
        sidebarIcon.style.background = 'transparent';
        sidebarIcon.style.padding = '8px';
        sidebarIcon.style.boxShadow = 'none';
      } else {
        sidebarIcon.innerHTML = `<img src="${state.logoEmpresa}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 24px;">`;
        sidebarIcon.style.background = 'white';
        sidebarIcon.style.padding = '4px';
        sidebarIcon.style.boxShadow = '';
      }
    });
  }
}

// 6. CONTACTO WHATSAPP
window.contactarWhatsApp = function() {
  const msgEl = document.getElementById('contact-message');
  const userText = msgEl ? msgEl.value.trim() : '';
  
  // Obtener perfil del usuario autenticado (intentar ambas claves)
  const perfil = JSON.parse(localStorage.getItem('reprocost_perfil')) || JSON.parse(localStorage.getItem('reprocost_perfil_consultor')) || {};
  const userName = perfil.name || perfil.nombre || (auth.currentUser ? (auth.currentUser.displayName || auth.currentUser.email) : 'Usuario de Iatf Pro');
  const userEmail = perfil.email || (auth.currentUser ? auth.currentUser.email : '');
  const userNit = perfil.nit || '';
  const userFinca = perfil.finca || '';
  const userPhone = perfil.phone || perfil.movil || '';
  
  let message = `Hola, soy el usuario *${userName}*.\n`;
  if (userEmail) message += `📧 *Email:* ${userEmail}\n`;
  if (userNit && userNit !== 'N/A') message += `🆔 *NIT/CC:* ${userNit}\n`;
  if (userFinca) message += `🏡 *Finca:* ${userFinca}\n`;
  if (userPhone) message += `📞 *Tel:* ${userPhone}\n`;
  
  if (userText) {
    message += `\n💬 *Mensaje:* ${userText}`;
  } else {
    message += `\n💬 Necesito soporte técnico con la aplicación Iatf Pro.`;
  }
  
  const encodedMsg = encodeURIComponent(message);
  const phone = "573147084328";
  
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  let waUrl = '';
  
  if (isMobile) {
    waUrl = `whatsapp://send?phone=${phone}&text=${encodedMsg}`;
  } else {
    waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;
  }
  
  window.open(waUrl, '_blank');
};

// El botón de edición manual del nombre de usuario ha sido removido

function saveState() { 
  const inputs = {
    pi: {
      finca: document.getElementById('pi-finca')?.value,
      ubicacion: document.getElementById('pi-ubicacion')?.value,
      animales: document.getElementById('pi-animales')?.value,
      fecha: document.getElementById('pi-fecha')?.value,
      protocolo: document.getElementById('pi-protocolo')?.value,
      ganaderia: document.getElementById('pi-ganaderia')?.value,
      prenadas: document.getElementById('pi-prenadas')?.value,
      porcentaje: document.getElementById('pi-porcentaje')?.value,
      costoSostenimiento: document.getElementById('pi-costo-sostenimiento')?.value,
      checkResx1: document.getElementById('pi-check-resx1')?.checked,
      checkResx2: document.getElementById('pi-check-resx2')?.checked
    },
    resx1: {
      fecha: document.getElementById('resx1-fecha')?.value,
      protocolo: document.getElementById('resx1-protocolo')?.value,
      prenadas: document.getElementById('resx1-prenadas')?.value
    },
    resx2: {
      prenadas: document.getElementById('resx2-prenadas')?.value
    }
  };

  localStorage.setItem('reprocost_state', JSON.stringify({ 
    tableroLeche: state.tableroLeche, 
    tableroCarne: state.tableroCarne, 
    insumos: state.insumos, 
    matriz: state.matriz,
    encabezados: state.encabezados,
    logoEmpresa: state.logoEmpresa,
    inputs: inputs
  })); 
  
  // Guardar copia maestra separada de la matriz para evitar regresiones de versión al cargar historial
  localStorage.setItem('reprocost_custom_matriz', JSON.stringify(state.matriz)); 
  
  if (typeof window.saveStateToFirestore === 'function') {
    window.saveStateToFirestore();
  }
}

window.loadState = function() {
  const saved = localStorage.getItem('reprocost_state');
  if (!saved) return;
  
  try {
    const parsed = JSON.parse(saved);
    if(parsed.tableroLeche) {
      Object.assign(state.tableroLeche, parsed.tableroLeche);
      if(document.getElementById('tc-precio-leche') && state.tableroLeche.precio) document.getElementById('tc-precio-leche').value = new Intl.NumberFormat('es-CO').format(state.tableroLeche.precio);
      if(document.getElementById('tc-duracion-lactancia') && state.tableroLeche.duracion) document.getElementById('tc-duracion-lactancia').value = state.tableroLeche.duracion;
      if(document.getElementById('tc-litros-lactancia') && state.tableroLeche.litros) document.getElementById('tc-litros-lactancia').value = state.tableroLeche.litros;
    }
    if(parsed.tableroCarne) {
      Object.assign(state.tableroCarne, parsed.tableroCarne);
      if(document.getElementById('tc-precio-carne') && state.tableroCarne.precio) document.getElementById('tc-precio-carne').value = new Intl.NumberFormat('es-CO').format(state.tableroCarne.precio);
      if(document.getElementById('tc-duracion-carne') && state.tableroCarne.duracion) document.getElementById('tc-duracion-carne').value = state.tableroCarne.duracion;
      if(document.getElementById('tc-peso-destete') && state.tableroCarne.peso) document.getElementById('tc-peso-destete').value = state.tableroCarne.peso;
    }
    
    // Defaults protocolarios para ReSx - se aplican si el valor guardado es 0
    const resx_defaults = { dib: 1, be1: 0.5, be2: 0.5, gnrh1: 2.5, gnrh2: 2.5, pgf1: 2, pgf2: 2, pgf3: 2, ecg: 1, ce: 1, mo1: 1, mo2: 1 };
    
    if(parsed.insumos) {
      for(let k in parsed.insumos) {
        if(state.insumos[k]) {
          Object.assign(state.insumos[k], parsed.insumos[k]);
          // Aplicar defaults si los valores de resx están en 0 (datos de versión antigua)
          if (state.insumos[k].resx1 === 0 && resx_defaults[k]) state.insumos[k].resx1 = resx_defaults[k];
          if (state.insumos[k].resx2 === 0 && resx_defaults[k]) state.insumos[k].resx2 = resx_defaults[k];
        }
      }
    }
    
    if ((parsed.matriz && Array.isArray(parsed.matriz)) || localStorage.getItem('reprocost_custom_matriz')) {
      const customMatrizSaved = localStorage.getItem('reprocost_custom_matriz');
      let rawMatrix = null;
      if (customMatrizSaved) {
        try {
          rawMatrix = JSON.parse(customMatrizSaved);
        } catch(e) {}
      }
      if (!rawMatrix && parsed.matriz && Array.isArray(parsed.matriz)) {
        rawMatrix = parsed.matriz;
      }
      
      state.matriz = window.migrarYSanitizarMatriz(rawMatrix || state.matriz);
      if (parsed.encabezados && Array.isArray(parsed.encabezados) && parsed.encabezados.length > 0) {
        state.encabezados = window.DEFAULT_ENCABEZADOS.slice();
      }
      renderMatriz();
      actualizarSelectProtocolos();
    }

    if (parsed.logoEmpresa) {
      state.logoEmpresa = parsed.logoEmpresa === 'reprocost_logo.png' ? 'Logo Iatf Pro.png' : parsed.logoEmpresa;
      actualizarVistaLogo();
    }

    // Restaurar Inputs
    if(parsed.inputs) {
      if(parsed.inputs.pi) {
        const p = parsed.inputs.pi;
        if(p.finca && document.getElementById('pi-finca')) document.getElementById('pi-finca').value = p.finca;
        if(p.ubicacion && document.getElementById('pi-ubicacion')) document.getElementById('pi-ubicacion').value = p.ubicacion;
        if(p.animales && document.getElementById('pi-animales')) document.getElementById('pi-animales').value = p.animales;
        if(p.fecha && document.getElementById('pi-fecha')) document.getElementById('pi-fecha').value = p.fecha;
        if(p.protocolo && document.getElementById('pi-protocolo')) document.getElementById('pi-protocolo').value = p.protocolo;
        if(p.ganaderia && document.getElementById('pi-ganaderia')) document.getElementById('pi-ganaderia').value = p.ganaderia;
        if(p.prenadas && document.getElementById('pi-prenadas')) document.getElementById('pi-prenadas').value = p.prenadas;
        if(p.porcentaje && document.getElementById('pi-porcentaje')) document.getElementById('pi-porcentaje').value = p.porcentaje;
        if(p.costoSostenimiento && document.getElementById('pi-costo-sostenimiento')) document.getElementById('pi-costo-sostenimiento').value = p.costoSostenimiento;
        if(p.checkResx1 !== undefined && document.getElementById('pi-check-resx1')) document.getElementById('pi-check-resx1').checked = p.checkResx1;
        if(p.checkResx2 !== undefined && document.getElementById('pi-check-resx2')) document.getElementById('pi-check-resx2').checked = p.checkResx2;
      }
      if(parsed.inputs.resx1) {
        const r1 = parsed.inputs.resx1;
        if(r1.fecha && document.getElementById('resx1-fecha')) document.getElementById('resx1-fecha').value = r1.fecha;
        if(r1.protocolo && document.getElementById('resx1-protocolo')) document.getElementById('resx1-protocolo').value = r1.protocolo;
        if(r1.prenadas && document.getElementById('resx1-prenadas')) document.getElementById('resx1-prenadas').value = r1.prenadas;
      }
      if(parsed.inputs.resx2) {
        const r2 = parsed.inputs.resx2;
        if(r2.prenadas && document.getElementById('resx2-prenadas')) document.getElementById('resx2-prenadas').value = r2.prenadas;
      }
    }
    
    syncFases();
    
    // Re-ejecutar cálculos globales después de cargar para sincronizar etiquetas y vacías
    renderMatriz();
    actualizarSelectProtocolos();
    window.autoCalcPrenez();
    if(document.getElementById('resx1-prenadas')) window.autoCalcPrenResx1();
    if(document.getElementById('resx2-prenadas')) window.autoCalcPrenResx2();
    window.calcTableroControl();
    window.updateResultados();
  } catch(e) {
    console.error("Error al cargar el estado:", e);
  }
}



// Funciones deprecadas eliminadas a favor de toggleProtocolo


window.ejecutarResx1 = function() {
  let protocol = window.getResx1(state.matriz);
  const pName = protocol ? protocol.name : 'ReSx1';
  const fIni = document.getElementById('resx1-fecha').value;
  const an = parseInt(document.getElementById('resx1-animales').value) || 0;
  
  if(!fIni || an <= 0) {
    document.getElementById('resx1-resultados').style.display = 'none';
    return;
  }
  
  if (!protocol) {
    console.error("No se encontró el protocolo REC 1");
    return;
  }
  
  // SEGURIDAD: Validar si falta el retiro en ReSx1
  const daysWithSafety = [...protocol.days];
  const hasDIB = daysWithSafety[0] !== '-' && daysWithSafety[0] !== '';
  const hasRetiro = daysWithSafety[11] !== '-' && daysWithSafety[11] !== '';
  if (hasDIB && !hasRetiro) {
    let diaRetiro = 8;
    if (daysWithSafety[5] !== '-' && daysWithSafety[5] !== '') diaRetiro = parseInt(daysWithSafety[5]);
    else if (daysWithSafety[8] !== '-' && daysWithSafety[8] !== '') diaRetiro = parseInt(daysWithSafety[8]);
    daysWithSafety[11] = diaRetiro.toString();
  }

  const fBase = new Date(fIni + 'T12:00:00');
  const tbody = document.getElementById('tc-resx1-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  let htmlRows = '';
  
  const hBase = document.getElementById('resx1-hora').value || "--:--";
  
  let gTotalPorVaca = 0;
  let tCat = { hormonas:0, genetica:0, asistencia:0, diagnostico:0, iate:0 };
  let tCatPerCow = { hormonas:0, genetica:0, asistencia:0, diagnostico:0, iate:0 };

  let resx1Rows = [];
  state.colDefs.forEach((colId, idx) => {
    const dayStr = daysWithSafety[idx];
    if (dayStr === '-' || dayStr === '') return;
    let offset = parseInt(dayStr);
    if (colId === 'dx1' || colId === 'dx2') {
      const iaDay = parseInt(protocol.ia) || 0;
      offset = iaDay + offset;
    }
    resx1Rows.push({ 
      colId: colId, 
      dayOffset: offset,
      hour: (protocol.hours && protocol.hours[idx]) ? protocol.hours[idx] : "08:00"
    });
  });
  
  if (protocol.ia !== '' && protocol.ia !== '-') {
    resx1Rows.push({ colId: 'ia_event', dayOffset: parseInt(protocol.ia), hour: protocol.ia_hour || '16:00', pName: protocol.name });
  }
  
  resx1Rows.sort((a,b) => {
    if (a.dayOffset !== b.dayOffset) return a.dayOffset - b.dayOffset;
    return a.hour.localeCompare(b.hour);
  });

  const langCode = window.currentLang === 'en' ? 'en-US' : (window.currentLang === 'pt' ? 'pt-BR' : 'es-ES');

  resx1Rows.forEach(row => {
    const dDate = new Date(fBase); dDate.setDate(fBase.getDate() + row.dayOffset);
    const rowHour = row.hour || hBase;
    
    if (row.colId === 'ia_event') {
        const isReceptora = row.pName && row.pName.toLowerCase().includes('receptora');
        const eventoText = isReceptora ? t('evento_te') : t('act_ia');
        htmlRows += `
          <tr style="background: rgba(14, 165, 233, 0.15); border-left: 4px solid var(--accent);">
            <td><strong>${row.dayOffset}</strong> <span class="badge" style="background:var(--accent); color:#fff; font-size:0.6rem; margin-left:4px;">IA/TE</span></td>
            <td>${dDate.toLocaleDateString(langCode, { weekday: 'short', day: 'numeric', month: 'short' })}</td>
            <td style="text-align:center;"><strong>${rowHour}</strong></td>
            <td colspan="3"><strong style="color: var(--accent); font-size: 1.05rem;"><i data-lucide="activity"></i> ${eventoText}</strong></td>
          </tr>`;
        return;
    }
    
    const ins = state.insumos[row.colId];
    const isServ = ['gen','retdib','mo1','mo2','dx1','dx2','opu','iate'].includes(row.colId);
    const dose = ins.resx1 || ins.def;
    const units = dose * an;
    const divisorDIB = getDIBDivisor();
    const factorUsos = (row.colId === 'dib') ? divisorDIB : 1;

    let aplic = (isServ ? (units * ins.valorFrasco) : units * (ins.valorFrasco / (ins.tamano || 1))) / factorUsos;

    let costoDosis = (isServ ? ins.valorFrasco : (ins.valorFrasco / (ins.tamano || 1) * dose)) / factorUsos;
 gTotalPorVaca += costoDosis;
    if(ins.cat) {
      tCat[ins.cat] += aplic;
      tCatPerCow[ins.cat] += costoDosis;
    }

    const insName = t('ins_' + row.colId) + ( (row.colId === 'dib') ? (window.currentLang === 'en' ? ' (Second Use)' : ' (Segundo Uso)') : '' );

    htmlRows += `
      <tr>
        <td><strong>${row.dayOffset}</strong></td>
        <td>${dDate.toLocaleDateString(langCode, { weekday: 'short', day: 'numeric', month: 'short' })}</td>
        <td style="text-align:center;"><strong>${rowHour}</strong></td>
        <td><strong>${insName}</strong></td>
        <td style="text-align:center; font-weight:bold; color:var(--accent);">${dose}</td>
        <td style="text-align:center; color:#f59e0b; font-weight:bold;">${formatter.format(costoDosis)}</td>
      </tr>`;
  });
  tbody.innerHTML = htmlRows;

  window.dashCatCosts.resx1 = { ...tCat };
  document.getElementById('resx1-total-footer').innerText = formatter.format(gTotalPorVaca);

  // Update Footer breakdown per cow
  if(document.getElementById('resx1-hormonas-footer')) document.getElementById('resx1-hormonas-footer').innerText = formatter.format(tCatPerCow.hormonas);
  if(document.getElementById('resx1-iate-footer')) document.getElementById('resx1-iate-footer').innerText = formatter.format(tCatPerCow.iate);
  
  // Actualizar Desglose por Rubros ReSx1
  if(document.getElementById('resx1-cat-hormonas')) document.getElementById('resx1-cat-hormonas').innerText = formatter.format(tCat.hormonas);
  if(document.getElementById('resx1-cat-genetica')) document.getElementById('resx1-cat-genetica').innerText = formatter.format(tCat.genetica);
  if(document.getElementById('resx1-cat-asistencia')) document.getElementById('resx1-cat-asistencia').innerText = formatter.format(tCat.asistencia);
  if(document.getElementById('resx1-cat-iate')) document.getElementById('resx1-cat-iate').innerText = formatter.format(tCat.iate);
  if(document.getElementById('resx1-cat-diagnostico')) document.getElementById('resx1-cat-diagnostico').innerText = formatter.format(tCat.diagnostico);
  
  if (protocol.ia) {
    const langCode = window.currentLang === 'en' ? 'en-US' : (window.currentLang === 'pt' ? 'pt-BR' : 'es-ES');
    const sumDate = new Date(fBase); sumDate.setDate(fBase.getDate() + (parseInt(protocol.ia) || 0));
    document.getElementById('resx1-ia-info').innerHTML = `
      <div style="flex: 1;">
        <div style="font-weight: 800; font-size: 1.1rem; color: var(--accent); margin-bottom: 4px;">${window.tProtocol(protocol.name)}</div>
        <div style="display: flex; gap: 1.5rem; font-size: 0.85rem; color: var(--text-muted);">
          <span><i data-lucide="activity"></i> IA/TE: ${t('table_th_day')} ${protocol.ia} (${sumDate.toLocaleDateString(langCode, { day: 'numeric', month: 'long' })})</span>
        </div>
        <div style="margin-top: 8px; font-style: italic; color: var(--text-main);"><i data-lucide="message-square" style="width:14px;"></i> ${t('obs_label')} ${protocol.obs ? window.tProtocol(protocol.obs) : 'S/O'}</div>
      </div>
      ${state.logoEmpresa ? `<div style="width: 70px; height: 70px; background: white; padding: 4px; border-radius: 6px;"><img src="${state.logoEmpresa}" style="width: 100%; height: 100%; object-fit: contain;"></div>` : ''}
    `;
    document.getElementById('resx1-ia-info').style.display = 'flex';
  } else {
    document.getElementById('resx1-ia-info').style.display = 'none';
  }

  const numP = parseFloat(document.getElementById('resx1-prenadas').value) || 0;
  const elPren = document.getElementById('resx1-costo-prenez');
  if(elPren) elPren.innerText = formatter.format(numP > 0 ? (gTotalPorVaca * an)/numP : 0);

  document.getElementById('resx1-resultados').style.display = 'block';
  
  const btn = document.getElementById('btn-toggle-resx1');
  if(btn) {
    btn.innerHTML = `<i data-lucide="eye-off"></i> <span id="txt-toggle-resx1">${t('btn_hide_p')}</span>`;
    btn.classList.add('active-toggle');
  }

  lucide.createIcons();
  updateResultados();
}

window.autoCalcPrenResx1 = function() {
  const tot = Math.max(0, parseInt(document.getElementById('resx1-animales').value) || 0);
  const pren = Math.max(0, parseInt(document.getElementById('resx1-prenadas').value) || 0);
  const porc = tot > 0 ? (pren / tot) * 100 : 0;
  if(document.getElementById('resx1-porcentaje')) document.getElementById('resx1-porcentaje').value = Math.round(porc);
  
  // Actualizar animales para ReSx2
  const vacias = tot - pren;
  const elResx2Anim = document.getElementById('resx2-animales');
  if(elResx2Anim) elResx2Anim.value = vacias > 0 ? vacias : 0;
  const lblAnim = document.getElementById('resx2-lbl-animales');
  if(lblAnim) lblAnim.innerText = vacias > 0 ? vacias : 0;

  if(document.getElementById('pi-check-resx2').checked) ejecutarResx2();
  updateResultados();
}

// Funciones deprecadas eliminadas a favor de toggleProtocolo


window.ejecutarResx2 = function() {
  let protocol = window.getResx2(state.matriz);
  const pName = protocol ? protocol.name : 'ReSx2';
  const fIni = document.getElementById('resx2-fecha').value;
  const an = parseInt(document.getElementById('resx2-animales').value) || 0;
  
  if(!fIni || an <= 0) {
    document.getElementById('resx2-resultados').style.display = 'none';
    return;
  }
  
  if (!protocol) return;

  // SEGURIDAD: Validar si falta el retiro en ReSx2
  const daysWithSafety = [...protocol.days];
  const hasDIB = daysWithSafety[0] !== '-' && daysWithSafety[0] !== '';
  const hasRetiro = daysWithSafety[11] !== '-' && daysWithSafety[11] !== '';
  if (hasDIB && !hasRetiro) {
    let diaRetiro = 8;
    if (daysWithSafety[5] !== '-' && daysWithSafety[5] !== '') diaRetiro = parseInt(daysWithSafety[5]);
    else if (daysWithSafety[8] !== '-' && daysWithSafety[8] !== '') diaRetiro = parseInt(daysWithSafety[8]);
    daysWithSafety[11] = diaRetiro.toString();
  }

  const fBase = new Date(fIni + 'T12:00:00');
  const tbody = document.getElementById('tc-resx2-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  let htmlRows = '';
  const hBase = document.getElementById('resx2-hora').value || "--:--";
  
  let gTotalPorVaca = 0;
  let tCat = { hormonas:0, genetica:0, asistencia:0, diagnostico:0, iate:0 };
  let tCatPerCow = { hormonas:0, genetica:0, asistencia:0, diagnostico:0, iate:0 };

  let resx2Rows = [];
  state.colDefs.forEach((colId, idx) => {
    const dayStr = daysWithSafety[idx];
    if (dayStr === '-' || dayStr === '') return;
    let offset = parseInt(dayStr);
    if (colId === 'dx1' || colId === 'dx2') {
      const iaDay = parseInt(protocol.ia) || 0;
      offset = iaDay + offset;
    }
    resx2Rows.push({ 
      colId: colId, 
      dayOffset: offset,
      hour: (protocol.hours && protocol.hours[idx]) ? protocol.hours[idx] : "08:00"
    });
  });
  
  if (protocol.ia !== '' && protocol.ia !== '-') {
    resx2Rows.push({ colId: 'ia_event', dayOffset: parseInt(protocol.ia), hour: protocol.ia_hour || '16:00', pName: protocol.name });
  }
  
  resx2Rows.sort((a,b) => {
    if (a.dayOffset !== b.dayOffset) return a.dayOffset - b.dayOffset;
    return a.hour.localeCompare(b.hour);
  });

  const langCode = window.currentLang === 'en' ? 'en-US' : (window.currentLang === 'pt' ? 'pt-BR' : 'es-ES');

  resx2Rows.forEach(row => {
    const dDate = new Date(fBase); dDate.setDate(fBase.getDate() + row.dayOffset);
    const rowHour = row.hour || hBase;
    
    if (row.colId === 'ia_event') {
        const isReceptora = row.pName && row.pName.toLowerCase().includes('receptora');
        const eventoText = isReceptora ? t('evento_te') : t('act_ia');
        htmlRows += `
          <tr style="background: rgba(168, 85, 247, 0.15); border-left: 4px solid #a855f7;">
            <td><strong>${row.dayOffset}</strong> <span class="badge" style="background:#a855f7; color:#fff; font-size:0.6rem; margin-left:4px;">IA/TE</span></td>
            <td>${dDate.toLocaleDateString(langCode, { weekday: 'short', day: 'numeric', month: 'short' })}</td>
            <td style="text-align:center;"><strong>${rowHour}</strong></td>
            <td colspan="3"><strong style="color: #a855f7; font-size: 1.05rem;"><i data-lucide="activity"></i> ${eventoText}</strong></td>
          </tr>`;
        return;
    }
    
    const ins = state.insumos[row.colId];
    const isServ = ['gen','retdib','mo1','mo2','dx1','dx2','opu','iate'].includes(row.colId);
    const dose = ins.resx2 || ins.def;
    const units = dose * an;
    const divisorDIB = getDIBDivisor();
    const factorUsos = (row.colId === 'dib') ? divisorDIB : 1;

    let aplic = (isServ ? (units * ins.valorFrasco) : units * (ins.valorFrasco / (ins.tamano || 1))) / factorUsos;

    let costoDosis = (isServ ? ins.valorFrasco : (ins.valorFrasco / (ins.tamano || 1) * dose)) / factorUsos;
 gTotalPorVaca += costoDosis;
    if(ins.cat) {
      tCat[ins.cat] += aplic;
      tCatPerCow[ins.cat] += costoDosis;
    }

    const insName = t('ins_' + row.colId) + ( (row.colId === 'dib') ? (window.currentLang === 'en' ? ' (Third Use)' : ' (Tercer Uso)') : '' );

    htmlRows += `
      <tr>
        <td><strong>${row.dayOffset}</strong></td>
        <td>${dDate.toLocaleDateString(langCode, { weekday: 'short', day: 'numeric', month: 'short' })}</td>
        <td style="text-align:center;"><strong>${rowHour}</strong></td>
        <td><strong>${insName}</strong></td>
        <td style="text-align:center; font-weight:bold; color:var(--accent);">${dose}</td>
        <td style="text-align:center; color:#f59e0b; font-weight:bold;">${formatter.format(costoDosis)}</td>
      </tr>`;
  });
  tbody.innerHTML = htmlRows;

  window.dashCatCosts.resx2 = { ...tCat };
  document.getElementById('resx2-total-footer').innerText = formatter.format(gTotalPorVaca);

  // Update Footer breakdown per cow
  if(document.getElementById('resx2-hormonas-footer')) document.getElementById('resx2-hormonas-footer').innerText = formatter.format(tCatPerCow.hormonas);
  if(document.getElementById('resx2-iate-footer')) document.getElementById('resx2-iate-footer').innerText = formatter.format(tCatPerCow.iate);

  // Actualizar Desglose por Rubros ReSx2
  if(document.getElementById('resx2-cat-hormonas')) document.getElementById('resx2-cat-hormonas').innerText = formatter.format(tCat.hormonas);
  if(document.getElementById('resx2-cat-genetica')) document.getElementById('resx2-cat-genetica').innerText = formatter.format(tCat.genetica);
  if(document.getElementById('resx2-cat-asistencia')) document.getElementById('resx2-cat-asistencia').innerText = formatter.format(tCat.asistencia);
  if(document.getElementById('resx2-cat-iate')) document.getElementById('resx2-cat-iate').innerText = formatter.format(tCat.iate);
  if(document.getElementById('resx2-cat-diagnostico')) document.getElementById('resx2-cat-diagnostico').innerText = formatter.format(tCat.diagnostico);

  if (protocol.ia) {
    const langCode = window.currentLang === 'en' ? 'en-US' : (window.currentLang === 'pt' ? 'pt-BR' : 'es-ES');
    const sumDate = new Date(fBase); sumDate.setDate(fBase.getDate() + (parseInt(protocol.ia) || 0));
    document.getElementById('resx2-ia-info').innerHTML = `
      <div style="flex: 1;">
        <div style="font-weight: 800; font-size: 1.1rem; color: #a855f7; margin-bottom: 4px;">${window.tProtocol(protocol.name)}</div>
        <div style="display: flex; gap: 1.5rem; font-size: 0.85rem; color: var(--text-muted);">
          <span><i data-lucide="calendar"></i> ${window.currentLang === 'en' ? 'Planned Start' : 'Inicio Programado'}: ${fBase.toLocaleDateString(langCode, { day: 'numeric', month: 'long' })}</span>
          <span><i data-lucide="activity"></i> IA/TE: ${t('table_th_day')} ${protocol.ia} (${sumDate.toLocaleDateString(langCode, { day: 'numeric', month: 'long' })})</span>
        </div>
        <div style="margin-top: 8px; font-style: italic; color: var(--text-main);"><i data-lucide="message-square" style="width:14px;"></i> ${t('obs_label')} ${protocol.obs ? window.tProtocol(protocol.obs) : 'S/O'}</div>
      </div>
      ${state.logoEmpresa ? `<div style="width: 70px; height: 70px; background: white; padding: 4px; border-radius: 6px;"><img src="${state.logoEmpresa}" style="width: 100%; height: 100%; object-fit: contain;"></div>` : ''}
    `;
    document.getElementById('resx2-ia-info').style.display = 'flex';
  } else {
    document.getElementById('resx2-ia-info').style.display = 'none';
  }

  const numP = parseFloat(document.getElementById('resx2-prenadas').value) || 0;
  const elPren = document.getElementById('resx2-costo-prenez');
  if(elPren) elPren.innerText = formatter.format(numP > 0 ? (gTotalPorVaca * an)/numP : 0);

  document.getElementById('resx2-resultados').style.display = 'block';

  const btn = document.getElementById('btn-toggle-resx2');
  if(btn) {
    btn.innerHTML = `<i data-lucide="eye-off"></i> <span id="txt-toggle-resx2">${t('btn_hide_p')}</span>`;
    btn.classList.add('active-toggle');
  }

  lucide.createIcons();
  updateResultados();
}

window.autoCalcPrenResx2 = function() {
  const tot = Math.max(0, parseInt(document.getElementById('resx2-animales').value) || 0);
  const pren = Math.max(0, parseInt(document.getElementById('resx2-prenadas').value) || 0);
  const porc = tot > 0 ? (pren / tot) * 100 : 0;
  if(document.getElementById('resx2-porcentaje')) document.getElementById('resx2-porcentaje').value = Math.round(porc);
  updateResultados();
}

window.syncFases = function() {
  const includeR1 = document.getElementById('pi-check-resx1')?.checked;
  const includeR2 = document.getElementById('pi-check-resx2')?.checked;

  // Asignar automáticamente los usos del DIB según las fases de resincronización activas
  const autoUsos = (includeR1 && includeR2) ? 3 : (includeR1 ? 2 : 1);
  if (state.insumos.dib) {
    state.insumos.dib.usos = autoUsos;
  }

  // Refrescar el protocolo inicial para recalcular el costo amortizado del DIB
  if (typeof reCalcTablaPI === 'function') {
    reCalcTablaPI();
  }

  // Actualizar estilos de los contenedores de los switches en el Dashboard principal
  const wR1 = document.getElementById('wrapper-check-resx1');
  const lblR1 = document.getElementById('label-check-resx1');
  if (wR1) {
    if (includeR1) {
      wR1.style.background = "rgba(14, 165, 233, 0.15)";
      wR1.style.borderColor = "var(--accent)";
      wR1.style.opacity = "1";
      wR1.style.boxShadow = "0 4px 15px rgba(14, 165, 233, 0.2)";
      if (lblR1) {
        lblR1.style.color = "var(--accent)";
        lblR1.style.opacity = "1";
      }
    } else {
      wR1.style.background = "rgba(255, 255, 255, 0.02)";
      wR1.style.borderColor = "rgba(255, 255, 255, 0.1)";
      wR1.style.opacity = "0.5";
      wR1.style.boxShadow = "none";
      if (lblR1) {
        lblR1.style.color = "var(--text-muted)";
        lblR1.style.opacity = "0.7";
      }
    }
  }

  const wR2 = document.getElementById('wrapper-check-resx2');
  const lblR2 = document.getElementById('label-check-resx2');
  if (wR2) {
    if (includeR2) {
      wR2.style.background = "rgba(168, 85, 247, 0.15)";
      wR2.style.borderColor = "#a855f7";
      wR2.style.opacity = "1";
      wR2.style.boxShadow = "0 4px 15px rgba(168, 85, 247, 0.2)";
      if (lblR2) {
        lblR2.style.color = "#a855f7";
        lblR2.style.opacity = "1";
      }
    } else {
      wR2.style.background = "rgba(255, 255, 255, 0.02)";
      wR2.style.borderColor = "rgba(255, 255, 255, 0.1)";
      wR2.style.opacity = "0.5";
      wR2.style.boxShadow = "none";
      if (lblR2) {
        lblR2.style.color = "var(--text-muted)";
        lblR2.style.opacity = "0.7";
      }
    }
  }

  // Update sidebar button for ReSx1 unconditionally
  const btnR1 = document.querySelector('.nav-btn[data-target="resincronizacion1"]');
  if (btnR1) {
    btnR1.style.opacity = includeR1 ? "1" : "0.4";
    btnR1.style.pointerEvents = includeR1 ? "auto" : "none";
    btnR1.style.filter = includeR1 ? "none" : "grayscale(100%)";
  }

  // Update sidebar button for ReSx2 unconditionally
  const btnR2 = document.querySelector('.nav-btn[data-target="resincronizacion2"]');
  if (btnR2) {
    btnR2.style.opacity = includeR2 ? "1" : "0.4";
    btnR2.style.pointerEvents = includeR2 ? "auto" : "none";
    btnR2.style.filter = includeR2 ? "none" : "grayscale(100%)";
  }

  const elP = document.getElementById('pi-protocolo');
  const elF = document.getElementById('pi-fecha');
  
  if(!elP || !elF) return;
  const pNamePI = elP.value;
  const fIni = elF.value;
  
  if(!pNamePI || !fIni) return;

  let fBase;
  try {
    fBase = new Date(fIni + 'T12:00:00');
    if (isNaN(fBase.getTime())) return;
  } catch(e) { return; }
  
  const langCode = window.currentLang === 'en' ? 'en-US' : (window.currentLang === 'pt' ? 'pt-BR' : 'es-ES');

  // 1. SINCRONIZAR RESX1
  document.getElementById('resx1-fecha').value = fIni;
  const s1 = document.getElementById('resx1-protocolo');
  if (s1) {
    let res1 = window.getResx1(state.matriz);
    
    const lblF = document.getElementById('resx1-lbl-fecha');
    if (res1) {
      s1.value = res1.name;
      s1.disabled = true; // Bloquear siempre
      s1.style.cursor = "not-allowed";
      s1.style.background = "rgba(255,255,255,0.1)";
      s1.style.color = "white";
      s1.style.opacity = "1";
      s1.style.webkitTextFillColor = "white";
      if(lblF) lblF.innerText = fBase.toLocaleDateString(langCode, { day: 'numeric', month: 'long', year: 'numeric' });
    } else if(lblF) {
      lblF.innerText = fBase.toLocaleDateString(langCode, { day: 'numeric', month: 'long', year: 'numeric' });
    }
  }

  // Sidebar button is already updated at the top of the function

  if(includeR1) {
    ejecutarResx1();
  } else {
    // Si no está incluido, resetear costos para que no sumen al total
    window.dashCatCosts.resx1 = { hormonas:0, genetica:0, asistencia:0, diagnostico:0, iate:0 };
  }

  // 2. SINCRONIZAR RESX2
  document.getElementById('resx2-fecha').value = fIni;
  const s2 = document.getElementById('resx2-protocolo');
  if (s2) {
    let res2 = window.getResx2(state.matriz);
    
    const lblF2 = document.getElementById('resx2-lbl-fecha');
    if (res2) {
      s2.value = res2.name;
      s2.disabled = true; // Bloquear siempre
      s2.style.cursor = "not-allowed";
      s2.style.background = "rgba(255,255,255,0.1)";
      s2.style.color = "white";
      s2.style.opacity = "1";
      s2.style.webkitTextFillColor = "white";
      if(lblF2) lblF2.innerText = fBase.toLocaleDateString(langCode, { day: 'numeric', month: 'long', year: 'numeric' });
    } else if(lblF2) {
      lblF2.innerText = fBase.toLocaleDateString(langCode, { day: 'numeric', month: 'long', year: 'numeric' });
    }
  }



  if(includeR2) ejecutarResx2();
}

window.toggleFase = function(faseId, isActive) {
  const btn = document.querySelector(`.nav-btn[data-target="${faseId}"]`);
  if (btn) {
    if (isActive) {
      btn.style.opacity = "1";
      btn.style.pointerEvents = "auto";
      btn.style.filter = "none";
    } else {
      btn.style.opacity = "0.4";
      btn.style.pointerEvents = "none";
      btn.style.filter = "grayscale(100%)";
      if (btn.classList.contains('active')) {
        const dashboardBtn = document.querySelector('.nav-btn[data-target="tablero-control"]');
        if (dashboardBtn) dashboardBtn.click();
      }
    }
  }
  // Asegurar que el checkbox refleje el estado (por si se llama programáticamente)
  if (faseId === 'resincronizacion1') document.getElementById('pi-check-resx1').checked = isActive;
  if (faseId === 'resincronizacion2') document.getElementById('pi-check-resx2').checked = isActive;

  debouncedSave();
  syncFases(); 
  updateResultados();
}

window.onProtocoloChange = function() {
  setTimeout(() => {
    try {
      const pVal = document.getElementById('pi-protocolo')?.value;
      if (!pVal) return;

      // Asignar dosis por defecto a insumos que estén en 0 para que no desaparezcan del calendario
      const defaults = { dib: 1, be1: 0.5, be2: 0.5, gnrh1: 2.5, gnrh2: 2.5, pgf1: 2, pgf2: 2, pgf3: 2, ecg: 1, ce: 1, mo1: 1, mo2: 1 };
      for (let k in state.insumos) {
        if (state.insumos[k] && state.insumos[k].def === 0 && defaults[k]) {
          state.insumos[k].def = defaults[k];
        }
      }

      // Sincronizar selectores de ReSx
      syncFases();

      // Actualizar el calendario principal automáticamente
      ejecutarProtocoloInicial();
      
      saveState();
    } catch (error) {
      console.error("Error cambiando protocolo:", error);
      alert(t("alert_cal_update_error") + " " + error.message);
    }
  }, 100);
}

window.resetPantallaPI = function() {
  if(!confirm(t("confirm_delete_all"))) return;
  
  // Limpiar todos los campos de entrada
  ['pi-fecha','pi-finca'].forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; });
  ['pi-animales','pi-prenadas','pi-porcentaje'].forEach(id => { const el = document.getElementById(id); if(el) el.value = 0; });
  const selGan = document.getElementById('pi-ganaderia'); if(selGan) selGan.selectedIndex = 0;
  const selProt = document.getElementById('pi-protocolo'); if(selProt) selProt.value = '';
  const chkResx1 = document.getElementById('pi-check-resx1'); if(chkResx1) chkResx1.checked = false;

  // Borrar precios y dosis de todos los insumos
  for (let k in state.insumos) {
    state.insumos[k].def = 0;
    state.insumos[k].valorFrasco = 0;
  }

  // Ocultar cronogramas y resetear botones toggle
  state.activeList = [];
  ['pi-resultados','resx1-resultados','resx2-resultados'].forEach(id => {
    const el = document.getElementById(id); if(el) el.style.display = 'none';
  });
  
  const btnPI = document.getElementById('btn-toggle-pi');
  if(btnPI) { btnPI.innerHTML = `<i data-lucide="eye"></i> <span id="txt-toggle-pi">${t('btn_show_p')}</span>`; btnPI.classList.remove('active-toggle'); }
  const btnReSx1 = document.getElementById('btn-toggle-resx1');
  if(btnReSx1) { btnReSx1.innerHTML = `<i data-lucide="eye"></i> <span id="txt-toggle-resx1">${t('btn_show_p')}</span>`; btnReSx1.classList.remove('active-toggle'); }
  const btnReSx2 = document.getElementById('btn-toggle-resx2');
  if(btnReSx2) { btnReSx2.innerHTML = `<i data-lucide="eye"></i> <span id="txt-toggle-resx2">${t('btn_show_p')}</span>`; btnReSx2.classList.remove('active-toggle'); }

  lucide.createIcons();
  saveState();
  updateResultados();
  alert(t("alert_project_cleared"));
}

// --- LÓGICA DE REGISTRO INICIAL ---
window.guardarRegistroInicial = function() {
  try {
    const nombre = document.getElementById('reg-nombre').value.trim();
    const nit = document.getElementById('reg-nit').value.trim();
    const pais = document.getElementById('reg-pais').value;
    const movil = document.getElementById('reg-movil').value.trim();
    const email = document.getElementById('reg-email').value.trim();

    if (!nombre || !nit || !movil) {
      alert(t("alert_missing_fields"));
      return;
    }

    const perfil = { nombre, nit, pais, movil, email, fechaRegistro: new Date().toISOString() };
    localStorage.setItem('reprocost_perfil_consultor', JSON.stringify(perfil));
    
    let directorio = JSON.parse(localStorage.getItem('reprocost_directorio_consultores')) || [];
    const idx = directorio.findIndex(p => p.nit === nit);
    if (idx !== -1) { directorio[idx] = perfil; } else { directorio.push(perfil); }
    localStorage.setItem('reprocost_directorio_consultores', JSON.stringify(directorio));

    // Ocultar pantalla
    const welcome = document.getElementById('welcome-screen');
    if(welcome) {
      welcome.style.opacity = '0';
      setTimeout(() => { welcome.style.display = 'none'; }, 500);
    }

    // Actualizar resto de la app
    if(typeof updateResultados === 'function') updateResultados();
  } catch(e) {
    console.error("Error en registro:", e);
    const welcome = document.getElementById('welcome-screen');
    if(welcome) welcome.style.display = 'none';
  }
};

window.buscarPerfilPorNit = function() {
  const nitBusqueda = document.getElementById('reg-nit').value.trim();
  console.log("Buscando NIT:", nitBusqueda);
  if (nitBusqueda.length < 3) return;

  const directorio = JSON.parse(localStorage.getItem('reprocost_directorio_consultores')) || [];
  const perfilEncontrado = directorio.find(p => p.nit === nitBusqueda);

  if (perfilEncontrado) {
    console.log("Perfil encontrado en directorio:", perfilEncontrado.nombre);
    if (document.getElementById('reg-nombre')) document.getElementById('reg-nombre').value = perfilEncontrado.nombre || "";
    if (document.getElementById('reg-name')) document.getElementById('reg-name').value = perfilEncontrado.nombre || "";
    if (document.getElementById('reg-pais')) document.getElementById('reg-pais').value = perfilEncontrado.pais || "Colombia";
    if (document.getElementById('reg-movil')) document.getElementById('reg-movil').value = perfilEncontrado.movil || "";
    if (document.getElementById('reg-phone')) document.getElementById('reg-phone').value = perfilEncontrado.movil || "";
    if (document.getElementById('reg-email')) document.getElementById('reg-email').value = perfilEncontrado.email || "";
    if (document.getElementById('reg-finca')) document.getElementById('reg-finca').value = perfilEncontrado.finca || "";
    
    // Feedback visual sutil
    document.getElementById('reg-nit').style.borderColor = "var(--success)";
  } else {
    document.getElementById('reg-nit').style.borderColor = "rgba(255, 255, 255, 0.1)";
  }
};

function verificarRegistro() {
  const perfilStr = localStorage.getItem('reprocost_perfil_consultor');
  const welcome = document.getElementById('welcome-screen');
  const sidebarConsultor = document.getElementById('sidebar-consultor');

  // SIEMPRE mostrar la pantalla de registro al iniciar, como pidió el usuario
  if (welcome) {
    welcome.style.display = 'flex';
    welcome.style.opacity = '1';
  }

  if (perfilStr) {
    try {
      const perfil = JSON.parse(perfilStr);
      console.log("Perfil detectado para pre-llenado:", perfil.nombre);
      
      // Pre-llenar campos para que el usuario solo tenga que dar clic en continuar
      if (document.getElementById('reg-nit')) document.getElementById('reg-nit').value = perfil.nit || "";
      if (document.getElementById('reg-nombre')) document.getElementById('reg-nombre').value = perfil.nombre || "";
      if (document.getElementById('reg-name')) document.getElementById('reg-name').value = perfil.nombre || "";
      if (document.getElementById('reg-pais')) document.getElementById('reg-pais').value = perfil.pais || "Colombia";
      if (document.getElementById('reg-movil')) document.getElementById('reg-movil').value = perfil.movil || "";
      if (document.getElementById('reg-phone')) document.getElementById('reg-phone').value = perfil.movil || "";
      if (document.getElementById('reg-email')) document.getElementById('reg-email').value = perfil.email || "";
      if (document.getElementById('reg-finca')) document.getElementById('reg-finca').value = perfil.finca || "";

      if (sidebarConsultor) {
        const nameEl = document.getElementById('sidebar-consultor-name');
        if (nameEl) {
          nameEl.innerText = perfil.nombre.toUpperCase();
        } else {
          sidebarConsultor.innerText = perfil.nombre.toUpperCase();
        }
        sidebarConsultor.style.display = 'block';
      }
    } catch(e) {
      console.warn("Error parseando perfil consultor:", e);
      localStorage.removeItem('reprocost_perfil_consultor');
    }
  }

  // Agregar listener para tecla Enter en los campos de registro
  const welcomeInputs = document.querySelectorAll('.welcome-input');
  welcomeInputs.forEach(input => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        guardarRegistroInicial();
      }
    });
  });
}

window.updateResultados = function() {
  const includeR1 = document.getElementById('pi-check-resx1')?.checked;
  const includeR2 = document.getElementById('pi-check-resx2')?.checked;

  const elPiAnim = document.getElementById('pi-animales');
  const elPiPren = document.getElementById('pi-prenadas');
  
  const piAnim = elPiAnim ? Math.max(0, parseInt(elPiAnim.value) || 0) : 0;
  const piPren = elPiPren ? Math.max(0, parseInt(elPiPren.value) || 0) : 0;
  
  const r1Anim = includeR1 ? Math.max(0, piAnim - piPren) : 0;
  const r1Pren = includeR1 ? Math.max(0, parseInt(document.getElementById('resx1-prenadas').value) || 0) : 0;
  
  const r2Anim = (includeR1 && includeR2) ? Math.max(0, r1Anim - r1Pren) : 0;
  const r2Pren = (includeR1 && includeR2) ? Math.max(0, parseInt(document.getElementById('resx2-prenadas').value) || 0) : 0;

  // 2. COSTOS POR FASE (Inversión aplicada por fase)
  const piCostPerAnim = unformatNumber(document.getElementById('pi-total-footer')?.innerText || "0");
  const r1CostPerAnim = unformatNumber(document.getElementById('resx1-total-footer')?.innerText || "0");
  const r2CostPerAnim = unformatNumber(document.getElementById('resx2-total-footer')?.innerText || "0");

  const piCost = piCostPerAnim * piAnim;
  const r1Cost = includeR1 ? (r1CostPerAnim * r1Anim) : 0;
  const r2Cost = includeR2 ? (r2CostPerAnim * r2Anim) : 0;

  const totalInv = piCost + r1Cost + r2Cost;

  const totalPren = piPren + r1Pren + r2Pren;
  const totalCostPren = totalPren > 0 ? totalInv / totalPren : 0;

  // 3. DESGLOSE POR CATEGORÍAS
  // Para el desglose de hormonas, sí usamos el costo aplicado (dividido) para que cuadre con el ROI
  const totalHormonas = (window.dashCatCosts.pi?.hormonas || 0) + (includeR1 ? (window.dashCatCosts.resx1?.hormonas || 0) : 0) + (includeR2 ? (window.dashCatCosts.resx2?.hormonas || 0) : 0);
  const totalGenetica = (window.dashCatCosts.pi?.genetica || 0) + (includeR1 ? (window.dashCatCosts.resx1?.genetica || 0) : 0) + (includeR2 ? (window.dashCatCosts.resx2?.genetica || 0) : 0);
  const totalAsistencia = (window.dashCatCosts.pi?.asistencia || 0) + (includeR1 ? (window.dashCatCosts.resx1?.asistencia || 0) : 0) + (includeR2 ? (window.dashCatCosts.resx2?.asistencia || 0) : 0);
  const totalDiagnostico = (window.dashCatCosts.pi?.diagnostico || 0) + (includeR1 ? (window.dashCatCosts.resx1?.diagnostico || 0) : 0) + (includeR2 ? (window.dashCatCosts.resx2?.diagnostico || 0) : 0);
  const totalIate = (window.dashCatCosts.pi?.iate || 0) + (includeR1 ? (window.dashCatCosts.resx1?.iate || 0) : 0) + (includeR2 ? (window.dashCatCosts.resx2?.iate || 0) : 0);

  // 4. KPIS FINANCIEROS
  const valTernero = 0;
  const ingVentaLeche = state.tableroLeche.litros * state.tableroLeche.precio;
  const ingVentaCarne = state.tableroCarne.peso * state.tableroCarne.precio;
  // El ingreso total es la suma de Leche + Carne (Ternero), ya que ambos son productos de la preñez.
  const ingVenta = ingVentaLeche + ingVentaCarne + valTernero;
  
  const retornoBruto = totalPren * ingVenta;
  
  // Cálculo de Tiempo de Retorno y Costo de Sostenimiento
  const fIniStr = document.getElementById('pi-fecha').value;
  const pName = document.getElementById('pi-protocolo').value;
  const protocol = state.matriz.find(p => p.name === pName);
  const tipoGanaderia = document.getElementById('pi-ganaderia')?.value || "";
  const costoDiaSost = unformatNumber(document.getElementById('pi-costo-sostenimiento')?.value || "0");
  
  const duracionProductiva = tipoGanaderia.includes("Cria") 
    ? (state.tableroCarne.duracion || 0) 
    : (state.tableroLeche.duracion || 0);

  let fechaRetornoHtml = "";
  let totalGastoSostenimiento = 0;
  
  if (fIniStr && protocol) {
    const fBase = new Date(fIniStr + 'T12:00:00');
    const diaIA = parseInt(protocol.ia) || 0;
    const fRetorno = new Date(fBase);
    
    const totalDiasCiclo = diaIA + 285 + duracionProductiva;
    fRetorno.setDate(fBase.getDate() + totalDiasCiclo);
    
    // Costo de sostenimiento total = Costo/día * Días * Animales preñados
    totalGastoSostenimiento = costoDiaSost * totalDiasCiclo * totalPren;
    
    fechaRetornoHtml = `<div style="font-size: 0.65rem; margin-top: 4px; color: rgba(255,255,255,0.6); font-weight: 500;">
      Ciclo completo: ${totalDiasCiclo} días<br>
      <span style="color: var(--accent); opacity: 0.9;">Retorno: ${fRetorno.toLocaleDateString((window.currentLang === 'en' ? 'en-US' : (window.currentLang === 'pt' ? 'pt-BR' : 'es-ES')), {month:'short', year:'numeric'}).toUpperCase()}</span>
    </div>`;
  }

  const utilidadNeta = retornoBruto - totalInv - totalGastoSostenimiento;
  const roiPorc = (totalInv + totalGastoSostenimiento) > 0 ? (utilidadNeta / (totalInv + totalGastoSostenimiento)) * 100 : 0;

  // 5. ACTUALIZAR UI
  if(document.getElementById('dash-ingreso-bruto')) {
    document.getElementById('dash-ingreso-bruto').innerText = formatter.format(retornoBruto);
  }
  if(document.getElementById('dash-ingreso-neto')) {
    document.getElementById('dash-ingreso-neto').innerText = formatter.format(utilidadNeta);
    document.getElementById('dash-ingreso-neto').style.color = utilidadNeta >= 0 ? '#10b981' : '#ef4444';
  }
  if(document.getElementById('dash-roi-porc')) {
    document.getElementById('dash-roi-porc').innerHTML = `
      ${roiPorc.toFixed(1)}%
      ${fechaRetornoHtml}
    `;
  }
  if(document.getElementById('dash-exito-num')) document.getElementById('dash-exito-num').innerText = totalPren;
  if(document.getElementById('dash-exito-tot')) document.getElementById('dash-exito-tot').innerText = piAnim;
  if(document.getElementById('dash-exito-porc')) document.getElementById('dash-exito-porc').innerText = (piAnim > 0 ? Math.round((totalPren/piAnim)*100) : 0) + '%';
  
  if(document.getElementById('dash-inversion')) document.getElementById('dash-inversion').innerText = formatter.format(totalInv);
  if(document.getElementById('dash-costo-prenez')) document.getElementById('dash-costo-prenez').innerText = formatter.format(totalCostPren);
  const getCategoryAvg = (cat) => {
    let phases = [];
    
    // PI (siempre activa)
    const valPI = piAnim > 0 ? (window.dashCatCosts.pi?.[cat] || 0) / piAnim : 0;
    phases.push(valPI);
    
    if (includeR1) {
      const valR1 = r1Anim > 0 ? (window.dashCatCosts.resx1?.[cat] || 0) / r1Anim : 0;
      phases.push(valR1);
      
      if (includeR2) {
        const valR2 = r2Anim > 0 ? (window.dashCatCosts.resx2?.[cat] || 0) / r2Anim : 0;
        phases.push(valR2);
      }
    }
    
    const sum = phases.reduce((a, b) => a + b, 0);
    return phases.length > 0 ? sum / phases.length : 0;
  };

  if(document.getElementById('dash-prot-animal')) document.getElementById('dash-prot-animal').innerText = formatter.format(getCategoryAvg('hormonas'));
  if(document.getElementById('dash-gen-animal')) document.getElementById('dash-gen-animal').innerText = formatter.format(getCategoryAvg('genetica'));
  if(document.getElementById('dash-asis-animal')) document.getElementById('dash-asis-animal').innerText = formatter.format(getCategoryAvg('asistencia'));
  if(document.getElementById('dash-iatf-animal')) document.getElementById('dash-iatf-animal').innerText = formatter.format(getCategoryAvg('iate'));
  if(document.getElementById('dash-diag-animal')) document.getElementById('dash-diag-animal').innerText = formatter.format(getCategoryAvg('diagnostico'));


  // Update Header
  const elProtocolo = document.getElementById('dash-protocolo');
  const elFecha = document.getElementById('dash-fecha');
  const elAnimales = document.getElementById('dash-animales');
  const elFinca = document.getElementById('dash-finca');
  const elUbicacion = document.getElementById('dash-ubicacion');

  if(elFinca) elFinca.innerText = document.getElementById('pi-finca')?.value || '-';
  if(elUbicacion) elUbicacion.innerText = document.getElementById('pi-ubicacion')?.value || '-';

  if(elProtocolo) {
    const sel = document.getElementById('pi-protocolo');
    elProtocolo.innerText = sel.options[sel.selectedIndex]?.text || '-';
  }
  if(elFecha) {
    const fStr = document.getElementById('pi-fecha').value;
    const langCode = window.currentLang === 'en' ? 'en-US' : (window.currentLang === 'pt' ? 'pt-BR' : 'es-ES');
    elFecha.innerText = fStr ? new Date(fStr + 'T12:00:00').toLocaleDateString(langCode, { weekday:'long', day:'numeric', month:'long', year:'numeric' }) : '-';
  }
  if(elAnimales) elAnimales.innerText = piAnim;

  if (state.logoEmpresa) {
     const logoDiv = document.getElementById('dash-logo');
     if(logoDiv) {
       logoDiv.style.display = 'block';
       logoDiv.querySelector('img').src = state.logoEmpresa;
     }
  }

  // Exportar a variables ocultas para Excel
  const elResTotalInv = document.getElementById('res-total-inversion');
  const elResCostoPrenez = document.getElementById('res-costo-prenez');
  const elResTotalPreneces = document.getElementById('res-total-preneces');
  if (elResTotalInv) elResTotalInv.innerText = formatter.format(totalInv);
  if (elResCostoPrenez) elResCostoPrenez.innerText = formatter.format(totalCostPren);
  if (elResTotalPreneces) elResTotalPreneces.innerText = totalPren;

  // 6. TABLA ROI (Estructura Fija para evitar desalineación)
  const thead = document.getElementById('res-head-roi');
  const hasR1 = includeR1 && r1Anim > 0;
  const hasR2 = includeR1 && includeR2 && r2Anim > 0;
  
  if (thead) {
    thead.innerHTML = `
      <tr>
        <th style="text-align: left;">${t("dash_concept")}</th>
        <th>${t("dash_pi")}</th>
        <th>${t("resx1_title")}</th>
        <th>${t("resx2_title")}</th>
        <th style="color: var(--accent);">${t("dash_consolidated")}</th>
      </tr>
    `;
  }

  const tbody = document.getElementById('res-body-roi');
  if (tbody) {
    tbody.innerHTML = `
      <tr>
        <td style="text-align:left;">${t("roi_inv_fase")}</td>
        <td>${piAnim > 0 ? formatter.format(piCost) : '-'}</td>
        <td>${hasR1 ? formatter.format(r1Cost) : '-'}</td>
        <td>${hasR2 ? formatter.format(r2Cost) : '-'}</td>
        <td><strong>${formatter.format(totalInv)}</strong></td>
      </tr>
      <tr>
        <td style="text-align:left;">${t("roi_anim_fase")}</td>
        <td>${piAnim > 0 ? piAnim : '-'}</td>
        <td>${hasR1 ? r1Anim : '-'}</td>
        <td>${hasR2 ? r2Anim : '-'}</td>
        <td>-</td>
      </tr>
      <tr>
        <td style="text-align:left;">${t("roi_preg_logradas")}</td>
        <td>${piAnim > 0 ? piPren : '-'}</td>
        <td>${hasR1 ? r1Pren : '-'}</td>
        <td>${hasR2 ? r2Pren : '-'}</td>
        <td><strong>${totalPren}</strong></td>
      </tr>
      <tr>
        <td style="text-align:left;">${t("roi_inv_perdida")}</td>
        <td>${piAnim > 0 ? formatter.format((piAnim - piPren) * (piCost / piAnim)) : '-'}</td>
        <td>${hasR1 ? formatter.format((r1Anim - r1Pren) * (r1Cost / r1Anim)) : '-'}</td>
        <td>${hasR2 ? formatter.format((r2Anim - r2Pren) * (r2Cost / r2Anim)) : '-'}</td>
        <td><strong style="color:var(--danger);">${formatter.format( (piAnim > 0 ? (piAnim - piPren) * (piCost / piAnim) : 0) + (hasR1 ? (r1Anim - r1Pren) * (r1Cost / r1Anim) : 0) + (hasR2 ? (r2Anim - r2Pren) * (r2Cost / r2Anim) : 0) )}</strong></td>
      </tr>
      <tr>
        <td style="text-align:left;">${t("roi_costo_preg")}</td>
        <td>${piPren > 0 ? formatter.format(piCost / piPren) : '-'}</td>
        <td>${(hasR1 && r1Pren > 0) ? formatter.format(r1Cost / r1Pren) : '-'}</td>
        <td>${(hasR2 && r2Pren > 0) ? formatter.format(r2Cost / r2Pren) : '-'}</td>
        <td><strong style="color: #f59e0b;">${formatter.format(totalCostPren)}</strong></td>
      </tr>
      <tr style="background: rgba(16, 185, 129, 0.1);">
        <td style="text-align:left;"><strong>${t("roi_retorno_total")}</strong></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td><strong class="text-success" style="font-size:1.1rem;">${formatter.format(retornoBruto)}</strong></td>
      </tr>
    `;
  }
  
  renderNewDashboardCharts(piAnim, piPren, r1Anim, r1Pren, r2Anim, r2Pren, totalHormonas, totalGenetica, totalAsistencia, totalDiagnostico, totalIate, totalInv, utilidadNeta, retornoBruto, ingVentaLeche, ingVentaCarne, totalPren);
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

let chartEtapas = null;
let chartCostosH = null;
let chartLeche = null;
let chartCarne = null;

function renderNewDashboardCharts(aPI, pPI, aR1, pR1, aR2, pR2, cHormonas, cGenetica, cAsistencia, cDiagnostico, cIate, cTotal, utilidad, retornoBruto, ingVentaLeche, ingVentaCarne, totalPreneces) {
  if (typeof Chart === 'undefined') return;

  const isExport = document.body.classList.contains('exporting-pdf');
  Chart.defaults.color = isExport ? '#1e293b' : '#94a3b8'; 
  Chart.defaults.font.family = "'Inter', sans-serif";
  
  const labelCol = isExport ? '#0f172a' : '#ffffff';

  if (typeof ChartDataLabels !== 'undefined') {
    Chart.register(ChartDataLabels);
    Chart.defaults.plugins.datalabels = { 
      display: true,
      color: labelCol,
      font: { weight: 'bold', size: 10 },
      formatter: (val) => formatter.format(val)
    };
  }

  // 1. Chart Etapas (Horizontal Bar Funnel)
  const ctxEtapas = document.getElementById('chart-etapas');
  if(ctxEtapas) {
    if(chartEtapas) chartEtapas.destroy();
    chartEtapas = new Chart(ctxEtapas, {
      type: 'bar',
      data: {
        labels: [t('chart_pi'), t('chart_r1'), t('chart_r2')].filter((_, i) => [aPI > 0, aR1 > 0, aR2 > 0][i]),
        datasets: [{
          label: t('chart_preg'),
          data: [pPI, pR1, pR2].filter((_, i) => [aPI > 0, aR1 > 0, aR2 > 0][i]),
          backgroundColor: '#fde047',
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          datalabels: {
            display: true,
            color: '#000',
            font: { weight: 'bold', size: 13 },
            formatter: (val, ctx) => {
              const anims = [aPI, aR1, aR2].filter((v) => v > 0)[ctx.dataIndex];
              const porc = anims > 0 ? Math.round((val / anims) * 100) : 0;
              return `${val} ${t('chart_preg')} (${porc}%)`;
            }
          }
        },
        scales: {
          x: { display: false },
          y: { 
            grid: { display: false }, 
            ticks: { 
              font: { weight: 'bold' },
              color: isExport ? '#0f172a' : '#94a3b8'
            } 
          }
        }
      }
    });
  }

  // 2. Chart Costos Horizontal
  const ctxCostosH = document.getElementById('chart-costos-horizontal');
  if(ctxCostosH) {
    if(chartCostosH) chartCostosH.destroy();
    
    const dataObj = [
      { lbl: t('chart_hormones'), val: cHormonas, col: '#ef4444' },
      { lbl: t('chart_genetics'), val: cGenetica, col: '#f59e0b' },
      { lbl: t('chart_ta'), val: cAsistencia, col: '#a855f7' },
      { lbl: t('chart_iate'), val: cIate, col: '#ec4899' },
      { lbl: t('chart_dx'), val: cDiagnostico, col: '#0ea5e9' }
    ].sort((a,b) => b.val - a.val);

    const maxVal = Math.max(...dataObj.map(d => d.val));

    chartCostosH = new Chart(ctxCostosH, {
      type: 'bar',
      data: {
        labels: dataObj.map(d => d.lbl),
        datasets: [{
          data: dataObj.map(d => d.val),
          backgroundColor: dataObj.map(d => d.col),
          borderRadius: 6,
          barThickness: isExport ? 30 : 45
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          datalabels: {
            display: true,
            color: labelCol,
            anchor: 'start',
            align: 'end',
            offset: 8,
            font: { weight: '800', size: isExport ? 11 : 14 },
            formatter: (value) => {
               if(value === 0) return '';
               const pct = cTotal > 0 ? ((value / cTotal) * 100).toFixed(1) : 0;
               return `${formatter.format(value)} (${pct}%)`;
            }
          }
        },
        scales: {
          x: { display: false, max: maxVal * 1.05 },
          y: { 
            grid: { display: false }, 
            ticks: { 
              font: { weight: 'bold', size: isExport ? 11 : 13 },
              color: isExport ? '#0f172a' : '#fff'
            } 
          }
        }
      }
    });
  }

  // 3. Chart Leche (Doughnut)
  const ctxLeche = document.getElementById('chart-leche');
  if(ctxLeche) {
    if(chartLeche) chartLeche.destroy();
    const ingBrutoL = ingVentaLeche * totalPreneces;
    const retL = ingBrutoL - cTotal;
    
    chartLeche = new Chart(ctxLeche, {
      type: 'doughnut',
      data: {
        labels: [t('chart_ingreso_neto'), t('chart_inversion_total')],
        datasets: [{
          data: [retL > 0 ? retL : 0, cTotal],
          backgroundColor: ['#10b981', '#ef4444'],
          borderWidth: 0,
          cutout: '75%'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { top: 20 } },
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 10, font: {size: 11}, color: isExport ? '#0f172a' : '#94a3b8' } },
          datalabels: {
            display: (ctx) => ctx.dataset.data[ctx.dataIndex] > 0,
            formatter: (val) => formatter.format(val),
            font: { size: 12, weight: 'bold' },
            color: labelCol
          }
        }
      },
      plugins: [{
        id: 'centerText',
        afterDraw: (chart) => {
          const { ctx, chartArea: { top, bottom, left, right } } = chart;
          ctx.save();
          const centerX = (left + right) / 2;
          const centerY = (top + bottom) / 2;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = 'bold 11px Inter';
          ctx.fillStyle = isExport ? '#475569' : '#94a3b8';
          ctx.fillText(t('chart_bruto_upper'), centerX, centerY - 15);
          ctx.font = 'bold 13px Inter';
          ctx.fillStyle = isExport ? '#0ea5e9' : '#fff';
          ctx.fillText(formatter.format(ingBrutoL), centerX, centerY + 5);
          ctx.restore();
        }
      }]
    });
  }

  // 4. Chart Carne (Bar Waterfall style)
  const ctxCarne = document.getElementById('chart-carne');
  if(ctxCarne) {
    if(chartCarne) chartCarne.destroy();
    const ingBrutoC = ingVentaCarne * totalPreneces;
    const retC = ingBrutoC - cTotal;
    chartCarne = new Chart(ctxCarne, {
      type: 'bar',
      data: {
        labels: [t('chart_bruto'), t('chart_inv'), t('chart_neto')],
        datasets: [{
          data: [ingBrutoC, cTotal, retC],
          backgroundColor: ['#0ea5e9', '#ef4444', '#10b981'],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          datalabels: {
            anchor: 'end',
            align: 'top',
            offset: 4,
            formatter: (val) => formatter.format(val),
            font: { size: 12, weight: 'bold' },
            color: labelCol
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: isExport ? '#0f172a' : '#94a3b8' } },
          y: { display: false, grace: '20%' }
        }
      }
    });
  }
}

window.exportarExcel = function() {
  const pName = document.getElementById('pi-protocolo').value;
  const fIni = document.getElementById('pi-fecha').value;
  if (!pName || !fIni) {
    alert(t("alert_export_nodata"));
    return;
  }

  // Array de arrays para SheetJS
  let data = [];
  
  // Configurar la fórmula del logo
  let logoUrl = "https://iatf-pro-by-solugan-sg.web.app/Logo%20Iatf%20Pro.png";
  if (window.location.origin && window.location.origin.startsWith('http')) {
    logoUrl = `${window.location.origin}/Logo%20Iatf%20Pro.png`;
  }
  const logoFormula = { f: `IMAGE("${logoUrl}")` };

  // Título Principal (Logo en A1 y título en B1:H1)
  data.push([logoFormula, "REPORTE INTEGRAL DE INVERSIÓN - IATF PRO BY SOLUGAN SG", "", "", "", "", "", ""]);
  
  let fechaInicioFormateada = fIni;
  if (fIni) {
    const parts = fIni.split('-');
    if (parts.length === 3) {
      fechaInicioFormateada = `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
  }
  data.push(["Fecha Inicio Protocolo:", fechaInicioFormateada]);
  data.push(["Finca:", document.getElementById('pi-finca')?.value || '-', "Ubicación:", document.getElementById('pi-ubicacion')?.value || '-']);
  data.push([]); // Fila vacía

  // --- 1. DASHBOARD / RESUMEN ---
  data.push(["RESUMEN DE RESULTADOS (DASHBOARD)"]);
  data.push(["Inversión Total Proyecto:", document.getElementById('res-total-inversion')?.innerText || '0']);
  data.push(["Costo Promedio por Preñez:", document.getElementById('res-costo-prenez')?.innerText || '0']);
  data.push(["Total Preñeces Proyectadas:", document.getElementById('res-total-preneces')?.innerText || '0']);
  data.push([]);

  // --- 2. TABLA ROI ---
  data.push(["TABLA DE RETORNO DE INVERSIÓN (ROI)"]);
  const roiBody = document.getElementById('res-body-roi');
  if (roiBody) {
    data.push(["Categoría", "Protocolo Inicial", "Resincronización 1", "Resincronización 2", "Total Proyecto"]);
    for (let i = 0; i < roiBody.rows.length; i++) {
      let rowData = [];
      for (let j = 0; j < roiBody.rows[i].cells.length; j++) {
        rowData.push(roiBody.rows[i].cells[j].innerText.trim());
      }
      data.push(rowData);
    }
  }
  data.push([]);

  // Helper para extraer tablas
  const extractToAOA = (tbodyId, headerArray) => {
    const tbody = document.getElementById(tbodyId);
    if (!tbody || tbody.rows.length === 0) return [];
    let rows = [headerArray];
    for (let i = 0; i < tbody.rows.length; i++) {
      const row = tbody.rows[i];
      let rowData = [];
      if (row.cells.length < 3) {
         rowData = ["", "", "", row.innerText.trim()];
      } else {
        for (let j = 0; j < row.cells.length; j++) {
          rowData.push(row.cells[j].innerText.trim());
        }
      }
      rows.push(rowData);
    }
    return rows;
  };

  // --- 3. PROTOCOLO INICIAL ---
  data.push(["DETALLE: PROTOCOLO INICIAL"]);
  data.push(["Protocolo:", pName, "Fecha Inicio:", fIni, "Animales:", document.getElementById('pi-animales').value]);
  const piRows = extractToAOA('tc-pi-body', ["Día", "Fecha", "Hora", "Actividad / Insumo", "Dosis", "Unidad", "Valor Unitario", "Inversión Total"]);
  data = data.concat(piRows);
  data.push(["", "", "", "", "", "", "TOTAL PI:", document.getElementById('pi-total-footer')?.innerText || '0']);
  data.push([]);

  // --- 4. RESINCRO 1 ---
  const resx1Res = document.getElementById('resx1-resultados');
  if (resx1Res && resx1Res.style.display !== 'none') {
    data.push(["DETALLE: RESINCRONIZACIÓN 1"]);
    data.push(["Protocolo:", document.getElementById('resx1-protocolo').value, "Fecha Inicio:", document.getElementById('resx1-fecha').value, "Animales:", document.getElementById('resx1-animales').value]);
    const r1Rows = extractToAOA('tc-resx1-body', ["Día", "Fecha", "Hora", "Hormona / Insumo", "Dosis", "Valor Unitario"]);
    data = data.concat(r1Rows);
    data.push(["", "", "", "", "TOTAL RESX1:", document.getElementById('resx1-total-footer')?.innerText || '0']);
    data.push([]);
  }

  // --- 5. RESINCRO 2 ---
  const resx2Res = document.getElementById('resx2-resultados');
  if (resx2Res && resx2Res.style.display !== 'none') {
    data.push(["DETALLE: RESINCRONIZACIÓN 2"]);
    data.push(["Protocolo:", document.getElementById('resx2-protocolo').value, "Fecha Inicio:", document.getElementById('resx2-fecha').value, "Animales:", document.getElementById('resx2-animales').value]);
    const r2Rows = extractToAOA('tc-resx2-body', ["Día", "Fecha", "Hora", "Hormona / Insumo", "Dosis", "Valor Unitario"]);
    data = data.concat(r2Rows);
    data.push(["", "", "", "", "TOTAL RESX2:", document.getElementById('resx2-total-footer')?.innerText || '0']);
    data.push([]);
  }

  // Crear libro y hoja
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(data);

  // Fusión de celdas para el título principal (B1 a H1, es decir, columnas 1 a 7)
  if (!ws['!merges']) ws['!merges'] = [];
  ws['!merges'].push({ s: {r:0, c:1}, e: {r:0, c:7} });
  
  // Ajustar anchos de columna básicos
  ws['!cols'] = [{wch: 28}, {wch: 18}, {wch: 12}, {wch: 38}, {wch: 12}, {wch: 12}, {wch: 22}, {wch: 22}];

  // Ajustar alto de la primera fila (index 0) para el título y el logo
  ws['!rows'] = [];
  ws['!rows'][0] = { hpt: 70 };

  // -------------------------------------------------------------
  // APLICAR ESTILOS PROFESIONALES USANDO xlsx-js-style
  // -------------------------------------------------------------
  const range = XLSX.utils.decode_range(ws['!ref']);
  for (let R = range.s.r; R <= range.e.r; ++R) {
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const cellAddress = {c:C, r:R};
      const cellRef = XLSX.utils.encode_cell(cellAddress);
      if (!ws[cellRef]) continue;
      
      const val = ws[cellRef].v;
      
      // Estilo por defecto
      let style = {
        font: { name: "Arial", sz: 10, color: { rgb: "333333" } },
        alignment: { vertical: "center", wrapText: true },
        border: {
          top: {style: "thin", color: {rgb: "E2E8F0"}},
          bottom: {style: "thin", color: {rgb: "E2E8F0"}},
          left: {style: "thin", color: {rgb: "E2E8F0"}},
          right: {style: "thin", color: {rgb: "E2E8F0"}}
        }
      };

      // Fila 0: Título principal y Logo
      if (R === 0) {
        style.fill = { fgColor: { rgb: "0F4C81" } };
        style.alignment = { horizontal: "center", vertical: "center" };
        if (C === 0) {
          style.font = { name: "Arial", sz: 10 };
        } else {
          style.font = { name: "Arial", sz: 14, bold: true, color: { rgb: "FFFFFF" } };
        }
      }
      else if (R === 1 || R === 2) {
        style.font = { name: "Arial", sz: 10, bold: true, color: { rgb: "0F4C81" } };
        style.fill = { fgColor: { rgb: "F1F5F9" } };
      }
      else if (typeof val === 'string') {
        const v = val.toUpperCase().trim();
        if (v.includes("RESUMEN DE RESULTADOS") || v.includes("TABLA DE RETORNO") || v.includes("DETALLE: ")) {
          style.font = { name: "Arial", sz: 12, bold: true, color: { rgb: "FFFFFF" } };
          style.fill = { fgColor: { rgb: "10B981" } }; // Verde
          if(!ws['!merges']) ws['!merges'] = [];
          ws['!merges'].push({ s: {r:R, c:0}, e: {r:R, c:7} });
        }
        else if (v === "CATEGORÍA" || v === "DÍA" || v === "FECHA" || v === "HORA" || v === "ACTIVIDAD / INSUMO" || v === "DOSIS" || v === "UNIDAD" || v === "VALOR UNITARIO" || v === "INVERSIÓN TOTAL" || v === "HORMONA / INSUMO" || v === "PROTOCOLO INICIAL" || v === "RESX1" || v === "RESX2" || (v === "TOTAL PROYECTO" && C > 0)) {
          style.font = { name: "Arial", sz: 10, bold: true, color: { rgb: "FFFFFF" } };
          style.fill = { fgColor: { rgb: "475569" } };
          style.alignment = { horizontal: "center", vertical: "center" };
        }
        else if (v.includes("TOTAL PI") || v.includes("TOTAL RESX1") || v.includes("TOTAL RESX2") || (v === "TOTAL PROYECTO" && C === 0) || v.includes("RETORNO TOTAL PROYECTADO") || v.includes("INVERSIÓN TOTAL PROYECTO:") || v.includes("COSTO PROMEDIO") || v.includes("INVERSIÓN PERDIDA")) {
          style.font = { name: "Arial", sz: 11, bold: true, color: { rgb: "0F4C81" } };
          style.fill = { fgColor: { rgb: "DBEAFE" } };
        }
        else if (v.includes('$')) {
          style.alignment = { horizontal: "right", vertical: "center" };
          style.font.bold = true;
        }
      }

      if (typeof val === 'number') {
        if (C >= 5) {
          style.numFmt = '"$"#,##0.00';
          style.alignment = { horizontal: "right", vertical: "center" };
        } else {
          style.alignment = { horizontal: "center", vertical: "center" };
        }
      }

      ws[cellRef].s = style;
    }
  }

  // Rellenar todas las celdas vacías del área visible con fondo blanco para asegurar un lienzo inmaculado
  const maxRows = Math.max(range.e.r + 40, 100);
  const maxCols = 16; // Hasta la columna Q
  for (let R = 0; R <= maxRows; ++R) {
    for (let C = 0; C <= maxCols; ++C) {
      const cellRef = XLSX.utils.encode_cell({c:C, r:R});
      if (!ws[cellRef]) {
        ws[cellRef] = { v: "", t: 's', s: { fill: { fgColor: { rgb: "FFFFFF" } } } };
      } else if (!ws[cellRef].s) {
        ws[cellRef].s = { fill: { fgColor: { rgb: "FFFFFF" } } };
      } else if (!ws[cellRef].s.fill) {
        ws[cellRef].s.fill = { fgColor: { rgb: "FFFFFF" } };
      }
    }
  }

  // Ampliar el rango si agregamos celdas nuevas
  ws['!ref'] = XLSX.utils.encode_range({ s: { c: 0, r: 0 }, e: { c: maxCols, r: maxRows } });

  // Ocultar las líneas de cuadrícula y los encabezados de filas/columnas (A,B,C / 1,2,3) para que parezca una aplicación
  if (!ws['!views']) ws['!views'] = [];
  ws['!views'].push({ showGridLines: false, showRowColHeaders: false });

  XLSX.utils.book_append_sheet(wb, ws, "Reporte Integral");
  
  // Guardar archivo
  const fileName = `IatfPro_Reporte_Integral_${pName.replace(/\s+/g, '_')}.xlsx`;
  XLSX.writeFile(wb, fileName);
}

window.exportarPDF = function() {
  const pName = document.getElementById('pi-protocolo').value || 'Reporte';
  
  const btn = event?.target?.closest('button');
  const originalHtml = btn ? btn.innerHTML : '';
  if(btn) btn.innerHTML = '<i data-lucide="refresh-cw" class="spin"></i> Generando...';

  // 1. Activar modo exportación e identificar contenedores
  document.body.classList.add('exporting-pdf');
  const appContainer = document.querySelector('.app-container');
  const welcomeScreen = document.getElementById('welcome-screen');
  
  if (appContainer) appContainer.style.display = 'none';
  if (welcomeScreen) welcomeScreen.style.display = 'none';

  // Forzar redibujado de gráficas con colores de alto contraste para PDF
  if (typeof updateResultados === 'function') {
    updateResultados();
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let printContainer = null;
      try {
        // 2. Crear contenedor para impresión de todas las fases activas
        printContainer = document.createElement('div');
        printContainer.className = 'exporting-pdf';
        printContainer.style.background = '#020617';

        function agregarSeccionAClonar(idElemento, hasPageBreak = true) {
          const original = document.getElementById(idElemento);
          if (!original) return;

          const clon = original.cloneNode(true);
          clon.classList.add('active');
          clon.style.setProperty('display', 'block', 'important');
          
          if (hasPageBreak) {
            clon.style.pageBreakAfter = 'always';
            clon.style.marginBottom = '20px';
          }

          // Copiar valores de inputs y selects
          const origInputs = original.querySelectorAll('input, select, textarea');
          const clonInputs = clon.querySelectorAll('input, select, textarea');
          origInputs.forEach((el, index) => {
            const clonEl = clonInputs[index];
            if (clonEl) {
              if (el.type === 'checkbox' || el.type === 'radio') {
                clonEl.checked = el.checked;
              } else {
                clonEl.value = el.value;
              }
            }
          });

          // Copiar canvas si los hay
          const origCanvases = original.querySelectorAll('canvas');
          const clonCanvases = clon.querySelectorAll('canvas');
          origCanvases.forEach((canvas, index) => {
            const clonCanvas = clonCanvases[index];
            if (clonCanvas) {
              clonCanvas.width = canvas.width;
              clonCanvas.height = canvas.height;
              const ctx = clonCanvas.getContext('2d');
              ctx.drawImage(canvas, 0, 0);
            }
          });

          printContainer.appendChild(clon);
        }

        // Agregar Dashboard (siempre va primero)
        const includeR1 = document.getElementById('pi-check-resx1')?.checked;
        const includeR2 = document.getElementById('pi-check-resx2')?.checked;
        
        agregarSeccionAClonar('dashboard', true);
        agregarSeccionAClonar('protocolo-inicial', includeR1 || includeR2);
        
        if (includeR1) {
          agregarSeccionAClonar('resincronizacion1', includeR2);
        }
        if (includeR2) {
          agregarSeccionAClonar('resincronizacion2', false);
        }

        document.body.appendChild(printContainer);
        
        const opt = {
          margin:       [0.3, 0.3, 0.3, 0.3],
          filename:     `IatfPro_Reporte_${pName.replace(/\s+/g, '_')}.pdf`,
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { 
            scale: 2, 
            useCORS: true, 
            letterRendering: true,
            backgroundColor: '#020617'
          },
          jsPDF:        { unit: 'cm', format: 'letter', orientation: 'portrait' },
          pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
        };

        // Guardar usando el método estándar .save()
        html2pdf().set(opt).from(printContainer).save().then(() => {
          // Restauración y limpieza
          if (printContainer && printContainer.parentNode) {
            document.body.removeChild(printContainer);
          }
          document.body.classList.remove('exporting-pdf');
          
          if (appContainer) appContainer.style.display = '';
          if (welcomeScreen) welcomeScreen.style.display = '';

          if (typeof updateResultados === 'function') updateResultados();
          if(btn) btn.innerHTML = originalHtml;
          lucide.createIcons();
          resolve();
        }).catch(err => {
          console.error("Error al exportar PDF:", err);
          if (printContainer && printContainer.parentNode) {
            document.body.removeChild(printContainer);
          }
          document.body.classList.remove('exporting-pdf');
          
          if (appContainer) appContainer.style.display = '';
          if (welcomeScreen) welcomeScreen.style.display = '';

          if (typeof updateResultados === 'function') updateResultados();
          if(btn) btn.innerHTML = originalHtml;
          reject(err);
        });
      } catch (err) {
        console.error("Error síncrono al exportar PDF:", err);
        if (printContainer && printContainer.parentNode) {
          document.body.removeChild(printContainer);
        }
        document.body.classList.remove('exporting-pdf');
        
        if (appContainer) appContainer.style.display = '';
        if (welcomeScreen) welcomeScreen.style.display = '';

        if (typeof updateResultados === 'function') updateResultados();
        if(btn) btn.innerHTML = originalHtml;
        reject(err);
      }
    }, 600);
  });
}
window.enviarWhatsApp = function() { 
  const pName = document.getElementById('pi-protocolo')?.value || 'Protocolo';
  const finca = document.getElementById('pi-finca')?.value || 'Sin Nombre';
  const fIni = document.getElementById('pi-fecha')?.value || '';
  
  // Obtener datos del consultor (intentar reprocost_perfil primero, luego reprocost_perfil_consultor)
  const perfil = JSON.parse(localStorage.getItem('reprocost_perfil')) || JSON.parse(localStorage.getItem('reprocost_perfil_consultor')) || {};
  
  const nit = perfil.nit || 'N/A';
  const name = perfil.name || perfil.nombre || (auth.currentUser ? (auth.currentUser.displayName || auth.currentUser.email) : '');
  const movil = (perfil.phone || perfil.movil || '').replace(/\s+/g, '');
  
  const totP = document.getElementById('res-total-preneces')?.innerText || '0';
  const inv = document.getElementById('res-total-inversion')?.innerText || '$ 0';
  const cPrenez = document.getElementById('res-costo-prenez')?.innerText || '$ 0';
  
  const usuarioStr = name ? `\n👤 *Usuario:* ${name}` : '';
  const nitStr = nit && nit !== 'N/A' ? `\n🆔 *NIT/CC:* ${nit}` : '';

  let fechaInicioFormateada = fIni;
  if (fIni) {
    const parts = fIni.split('-');
    if (parts.length === 3) {
      fechaInicioFormateada = `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
  }

  const isEn = window.currentLang === 'en';
  let msg = isEn ? `*EXECUTIVE SUMMARY - IATF PRO BY SOLUGAN SG*\n\n` : `*RESUMEN EJECUTIVO - IATF PRO BY SOLUGAN SG*\n\n`;
  msg += `📍 *${isEn ? 'Farm' : 'Finca'}:* ${finca}\n`;
  msg += `📋 *${isEn ? 'Protocol' : 'Protocolo'}:* ${pName}${usuarioStr}${nitStr}\n`;
  msg += `📅 *${isEn ? 'Protocol Start Date' : 'Fecha Inicio Protocolo'}:* ${fechaInicioFormateada}\n\n`;
  msg += `✅ *${isEn ? 'Total Pregnancies' : 'Preñeces Totales'}:* ${totP}\n`;
  msg += `💰 *${isEn ? 'Total Investment' : 'Inversión Total'}:* ${inv}\n`;
  msg += `📉 *${isEn ? 'Costo por Preñez' : 'Costo por Preñez'}:* ${cPrenez}\n`;

  // Obtener cronogramas de trabajo
  const getCronogramaText = (tbodyId, title) => {
    const tbody = document.getElementById(tbodyId);
    if (!tbody || tbody.children.length === 0) return '';
    let text = `\n📅 *${title.toUpperCase()}*\n`;
    Array.from(tbody.children).forEach(tr => {
      const tds = tr.children;
      if (tds.length === 0) return;
      
      // Caso 1: Fila de observación/notas
      if (tr.innerText.includes('Obs')) {
        const cell = Array.from(tds).find(c => c.innerText.includes('Obs'));
        if (cell) {
          text += `   ⚠️ _${cell.innerText.trim()}_\n`;
        }
        return;
      }
      
      // Caso 2: Fila de Inseminación (IA/TE)
      if (tr.innerText.includes('IA/TE') || tr.innerText.includes('I.A./T.E.')) {
        const dia = tds[0].innerText.replace(/IA\/TE/gi, '').replace(/\s+/g, ' ').trim();
        const fecha = tds[1].innerText.trim();
        const hora = tds[2].innerText.trim();
        text += `• *Día ${dia}* (${fecha} - ${hora}): 🌟 *Inseminación Artificial (IA/TE)*\n`;
        return;
      }
      
      // Caso 3: Fila normal de insumo
      if (tds.length >= 5) {
        const dia = tds[0].innerText.trim();
        const fecha = tds[1].innerText.trim();
        const hora = tds[2].innerText.trim();
        const insumo = tds[3].innerText.trim();
        const dosis = tds[4].innerText.trim();
        text += `• *Día ${dia}* (${fecha} - ${hora}): ${insumo} (${dosis})\n`;
      }
    });
    return text;
  };

  let cronoText = '';
  cronoText += getCronogramaText('tc-pi-body', isEn ? 'Initial Protocol Schedule' : 'Cronograma Protocolo Inicial');
  
  const includeR1 = document.getElementById('pi-check-resx1')?.checked;
  const includeR2 = document.getElementById('pi-check-resx2')?.checked;
  
  if (includeR1) {
    cronoText += getCronogramaText('tc-resx1-body', isEn ? 'Resynchronization 1 Schedule' : 'Cronograma Resincronización 1');
  }
  if (includeR2) {
    cronoText += getCronogramaText('tc-resx2-body', isEn ? 'Resynchronization 2 Schedule' : 'Cronograma Resincronización 2');
  }

  if (cronoText) {
    msg += `\n*---------------------------------------*\n${cronoText}\n*---------------------------------------*\n\n`;
  }

  msg += `_Generated automatically by Solugan SG._`;

  const encodedMsg = encodeURIComponent(msg);
  
  // Preguntar por el número del destinatario
  let destNumber = prompt(isEn 
    ? "Enter the recipient's WhatsApp number (with country code, e.g. 573147084328).\nLeave BLANK to select from your WhatsApp contact list:" 
    : "Ingresa el número de WhatsApp del destinatario (con código de país, ej: 573147084328).\nDeja en BLANCO para seleccionar de tu lista de contactos de WhatsApp:"
  );
  
  if (destNumber === null) return; // Cancelado por el usuario
  destNumber = destNumber.trim().replace(/\D/g, ''); // Solo números
  
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  let waUrl = '';
  
  if (isMobile) {
    if (destNumber) {
      waUrl = `whatsapp://send?phone=${destNumber}&text=${encodedMsg}`;
    } else {
      waUrl = `whatsapp://send?text=${encodedMsg}`;
    }
  } else {
    if (destNumber) {
      waUrl = `https://web.whatsapp.com/send?phone=${destNumber}&text=${encodedMsg}`;
    } else {
      waUrl = `https://web.whatsapp.com/send?text=${encodedMsg}`;
    }
  }
  
  window.open(waUrl, '_blank');
}

// --- SISTEMA DE HISTORIAL Y BÚSQUEDA ---
window.guardarEnHistorial = function() {
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

window.buscarPorNit = function() {
  const term = document.getElementById('search-nit').value.trim();
  if (!term) {
    alert(t("alert_enter_nit"));
    return;
  }

  // Remove spaces, dots, dashes for a clean comparison
  const termClean = term.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
  
  // MIGRACIÓN AUTOMÁTICA: Si hay reportes con N/A, asignarles el NIT del usuario actual
  const perfil = JSON.parse(localStorage.getItem('reprocost_perfil')) || JSON.parse(localStorage.getItem('reprocost_perfil_consultor')) || {};
  if (perfil.nit) {
    let changed = false;
    historial.forEach(r => {
      if (!r.nit || r.nit === 'N/A') {
        r.nit = perfil.nit;
        changed = true;
      }
    });
    if (changed) {
      localStorage.setItem('reprocost_historial', JSON.stringify(historial));
    }
  }

  const filtrados = historial.filter(r => {
    const nitGuardado = String(r.nit || '');
    const nitClean = nitGuardado.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Buscar también por finca o fecha para que sea más útil
    const fincaClean = String(r.finca || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const fechaClean = String(r.fecha || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return nitClean.includes(termClean) || 
           nitGuardado.toLowerCase().includes(term.toLowerCase()) ||
           fincaClean.includes(termClean) ||
           String(r.finca || '').toLowerCase().includes(term.toLowerCase()) ||
           String(r.fecha || '').toLowerCase().includes(term.toLowerCase());
  });

  const container = document.getElementById('historial-resultados');
  const empty = document.getElementById('historial-vacio');
  const tbody = document.getElementById('lista-historial');
  
  tbody.innerHTML = '';

  if (filtrados.length > 0) {
    filtrados.forEach((r) => {
      // Obtener fecha de inicio del protocolo desde el estado guardado
      let fechaMostrar = r.fecha; // fallback: fecha de registro
      try {
        const piDate = r.state?.inputs?.pi?.fecha;
        if (piDate) {
          const d = new Date(piDate + 'T12:00:00');
          if (!isNaN(d.getTime())) {
            fechaMostrar = d.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
          }
        } else if (r.fechaProtocolo) {
          fechaMostrar = r.fechaProtocolo;
        }
      } catch(e) { /* usar fallback */ }

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight:bold; color:var(--text-muted);">${fechaMostrar}</td>
        <td>${r.finca}</td>
        <td style="font-size:0.85rem;">${r.protocolo}</td>
        <td style="text-align:center;">${r.animales}</td>
        <td style="text-align:center; color:var(--success); font-weight:bold;">${r.preneces}</td>
        <td style="text-align:right; font-weight:bold;">${r.inversion}</td>
        <td style="text-align:center; white-space:nowrap;">
          <button class="btn btn-secondary" onclick="cargarDeHistorial(${r.id})" style="padding: 4px 10px; font-size: 0.75rem; background: rgba(14, 165, 233, 0.1); color: var(--accent); border: 1px solid var(--accent); margin-right: 5px;">
            <i data-lucide="eye" style="width:12px; height:12px;"></i> ${t("hist_btn_load")}
          </button>
          <button class="btn btn-secondary" onclick="exportarExcelDesdeHistorial(${r.id})" style="padding: 4px 10px; font-size: 0.75rem; background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid #10b981; margin-right: 5px;">
            <i data-lucide="file-spreadsheet" style="width:12px; height:12px;"></i> ${t("hist_btn_excel")}
          </button>
          <button class="btn btn-danger" onclick="eliminarDeHistorial(${r.id})" style="padding: 4px 10px; font-size: 0.75rem; background: rgba(239, 68, 68, 0.1); color: var(--danger); border: 1px solid var(--danger);">
            <i data-lucide="trash-2" style="width:12px; height:12px;"></i> ${t("hist_btn_delete")}
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
    container.style.display = 'block';
    empty.style.display = 'none';
    lucide.createIcons();
  } else {
    container.style.display = 'none';
    empty.style.display = 'block';
    empty.innerHTML = `
      <i data-lucide="search-x" style="width: 40px; height: 40px; margin-bottom: 1rem; color: var(--danger);"></i>
      <p>${t("hist_no_results")} <strong>${term}</strong></p>
    `;
    lucide.createIcons();
  }
};

window.cargarDeHistorial = function(id) {
  const historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
  const record = historial.find(r => r.id === id);
  if (!record) return;

  if (confirm(t("confirm_load_history").replace("{finca}", record.finca).replace("{fecha}", record.fecha))) {
    // Preservar la última versión de los protocolos al cargar un reporte antiguo
    const latestMatrixStr = localStorage.getItem('reprocost_custom_matriz');
    const newState = Object.assign({}, record.state);
    if (latestMatrixStr) {
      try {
        const parsedMatrix = JSON.parse(latestMatrixStr);
        if (Array.isArray(parsedMatrix)) {
          newState.matriz = window.migrarYSanitizarMatriz(parsedMatrix);
        }
      } catch(e) {}
    }
    localStorage.setItem('reprocost_state', JSON.stringify(newState));
    location.reload(); 
  }
};

window.eliminarDeHistorial = function(id) {
  if (confirm(t("confirm_delete_history"))) {
    let historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
    historial = historial.filter(r => r.id !== id);
    localStorage.setItem('reprocost_historial', JSON.stringify(historial));
    // Refrescar la búsqueda
    buscarPorNit();
  }
};

window.exportarExcelDesdeHistorial = function(id) {
  const historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
  const record = historial.find(r => r.id === id);
  if (!record) return;

  const originalStateStr = localStorage.getItem('reprocost_state');

  const restaurarEstado = () => {
    if (originalStateStr) {
      localStorage.setItem('reprocost_state', originalStateStr);
      loadState();
      if (typeof ejecutarProtocoloInicial === 'function') {
        const pv = document.getElementById('pi-protocolo')?.value;
        const fv = document.getElementById('pi-fecha')?.value;
        if (pv && fv) ejecutarProtocoloInicial();
      }
      if (typeof updateResultados === 'function') updateResultados();
      if (typeof calcTableroControl === 'function') calcTableroControl();
    } else {
      localStorage.removeItem('reprocost_state');
      location.reload();
    }
  };

  // Usar los protocolos más recientes del usuario al exportar reporte antiguo
  const latestMatrixStr = localStorage.getItem('reprocost_custom_matriz');
  const tempState = Object.assign({}, record.state);
  if (latestMatrixStr) {
    try {
      const parsedMatrix = JSON.parse(latestMatrixStr);
      if (Array.isArray(parsedMatrix)) {
        tempState.matriz = window.migrarYSanitizarMatriz(parsedMatrix);
      }
    } catch(e) {}
  }

  localStorage.setItem('reprocost_state', JSON.stringify(tempState));
  loadState();

  if (typeof ejecutarProtocoloInicial === 'function') {
    const pv = document.getElementById('pi-protocolo')?.value;
    const fv = document.getElementById('pi-fecha')?.value;
    if (pv && fv) ejecutarProtocoloInicial();
  }
  if (typeof updateResultados === 'function') updateResultados();
  if (typeof calcTableroControl === 'function') calcTableroControl();

  setTimeout(() => {
    try {
      window.exportarExcel();
    } catch (err) {
      console.error("Error al exportar Excel desde el historial:", err);
    } finally {
      restaurarEstado();
    }
  }, 150);
};

window.exportarPdfDesdeHistorial = function(id) {
  const historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
  const record = historial.find(r => r.id === id);
  if (!record) return;

  // 1. Guardar el estado actual de la pantalla para poder restaurarlo al finalizar
  const originalStateStr = localStorage.getItem('reprocost_state');

  const restaurarEstado = () => {
    if (originalStateStr) {
      localStorage.setItem('reprocost_state', originalStateStr);
      loadState();
      if (typeof ejecutarProtocoloInicial === 'function') {
        const pv = document.getElementById('pi-protocolo')?.value;
        const fv = document.getElementById('pi-fecha')?.value;
        if (pv && fv) ejecutarProtocoloInicial();
      }
      if (typeof updateResultados === 'function') updateResultados();
      if (typeof calcTableroControl === 'function') calcTableroControl();
    } else {
      localStorage.removeItem('reprocost_state');
      location.reload();
    }
  };

  // 2. Aplicar el estado del registro seleccionado temporalmente usando los protocolos más recientes
  const latestMatrixStr = localStorage.getItem('reprocost_custom_matriz');
  const tempState = Object.assign({}, record.state);
  if (latestMatrixStr) {
    try {
      const parsedMatrix = JSON.parse(latestMatrixStr);
      if (Array.isArray(parsedMatrix)) {
        tempState.matriz = window.migrarYSanitizarMatriz(parsedMatrix);
      }
    } catch(e) {}
  }

  localStorage.setItem('reprocost_state', JSON.stringify(tempState));
  loadState();

  // 3. Forzar el recálculo completo incluyendo cronograma
  if (typeof ejecutarProtocoloInicial === 'function') {
    const pv = document.getElementById('pi-protocolo')?.value;
    const fv = document.getElementById('pi-fecha')?.value;
    if (pv && fv) ejecutarProtocoloInicial();
  }
  if (typeof updateResultados === 'function') updateResultados();
  if (typeof calcTableroControl === 'function') calcTableroControl();

  // 4. Esperar que el DOM termine de renderizar completamente antes de exportar
  setTimeout(() => {
    window.exportarPDF().then(() => {
      restaurarEstado();
    }).catch(err => {
      console.error("Error al exportar desde el historial:", err);
      restaurarEstado();
    });
  }, 1200);
};

window.resetPantallaResx1 = function() {
  if(!confirm("¿Reiniciar datos de ReSx1?")) return;
  document.getElementById('resx1-prenadas').value = 0;
  document.getElementById('resx1-porcentaje').innerText = '0';
  ejecutarResx1();
  updateResultados();
}

window.resetPantallaResx2 = function() {
  if(!confirm("¿Reiniciar datos de ReSx2?")) return;
  document.getElementById('resx2-prenadas').value = 0;
  document.getElementById('resx2-porcentaje').innerText = '0';
  ejecutarResx2();
  updateResultados();
}

try {
  // 0. Verificar registro inmediatamente
  verificarRegistro();

  // (La carga de aliados se hará al final del archivo para asegurar que la función esté definida)

  // 1. Primero poblar selectores
  actualizarSelectProtocolos();
  renderMatriz();
  calcTableroControl();

  // 2. Luego cargar el estado guardado
  loadState();
  
  // Asegurar que el logo se inicialice y se muestre en la interfaz
  actualizarVistaLogo();
  
  // 2.5 Forzar protocolos fijos de ReSx
  const defaultR1 = window.getResx1(state.matriz);
  const defaultR2 = window.getResx2(state.matriz);
  if(document.getElementById('resx1-protocolo') && defaultR1) document.getElementById('resx1-protocolo').value = defaultR1.name;
  if(document.getElementById('resx2-protocolo') && defaultR2) document.getElementById('resx2-protocolo').value = defaultR2.name;
  
  // 3. Sincronizar inmediatamente
  syncFases();

  // Event listeners para autoguardado de inputs
  const autoSaveInputs = [
    'pi-finca','pi-ubicacion','pi-animales','pi-fecha','pi-hora','pi-protocolo','pi-ganaderia','pi-prenadas','pi-porcentaje','pi-check-resx1','pi-check-resx2',
    'resx1-fecha','resx1-hora','resx1-protocolo','resx1-prenadas',
    'resx2-fecha','resx2-hora','resx2-protocolo','resx2-prenadas',
    'tc-precio-leche','tc-duracion-lactancia','tc-litros-lactancia','tc-precio-carne','tc-duracion-carne','tc-peso-destete'
  ];
  
  autoSaveInputs.forEach(id => {
    const el = document.getElementById(id);
    if(el) {
      el.addEventListener('change', debouncedSave);
      if(el.tagName === 'INPUT' && el.type === 'text') el.addEventListener('input', debouncedSave);
    }
  });

  const selectProto = document.getElementById('pi-protocolo');
  if(selectProto) {
    selectProto.addEventListener('change', (e) => {
      onProtocoloChange(e);
      saveState();
    });
  }

  // 3. Ejecutar lógica si hay datos
  if(document.getElementById('pi-protocolo').value && document.getElementById('pi-fecha').value) {
    ejecutarProtocoloInicial();
  }
  
  // Forzar sincronización de ReSx para asegurar protocolos REC 1/2
  syncFases();

} catch(e) {
  console.error("Error en inicialización:", e);
}

// Navegación por teclado en la matriz
document.addEventListener('keydown', function(e) {
  if (!isMatrixUnlocked) return;
  if (!e.target.classList.contains('matrix-nav')) return;

  const row = parseInt(e.target.getAttribute('data-row'));
  const col = parseInt(e.target.getAttribute('data-col'));
  
  let targetRow = row;
  let targetCol = col;
  let move = false;
  
  if (e.key === 'ArrowUp') {
    targetRow--; move = true;
  } else if (e.key === 'ArrowDown') {
    targetRow++; move = true;
  } else if (e.key === 'ArrowLeft') {
    if (e.target.selectionStart === 0) {
      targetCol--; move = true;
    }
  } else if (e.key === 'ArrowRight') {
    if (e.target.selectionStart === e.target.value.length) {
      targetCol++; move = true;
    }
  }
  
  if (move) {
    const nextInput = document.querySelector(`.matrix-nav[data-row="${targetRow}"][data-col="${targetCol}"]`);
    if (nextInput) {
      e.preventDefault();
      nextInput.focus();
      nextInput.select();
    }
  }
});


window.toggleSidebar = function() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay) {
    sidebar.classList.toggle('active');
    overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
  }
};

window.desbloquearAdminAliados = function() {
  const pwd = prompt("Ingresa la contraseña de administrador para modificar el directorio:");
  if (pwd === "jan5362") {
    const actions = document.getElementById('admin-aliados-actions');
    if (actions) actions.style.display = 'flex';
    const icon = document.getElementById('icon-lock-aliados');
    if (icon) {
      icon.setAttribute('data-lucide', 'unlock');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  } else {
    if (pwd !== null) alert(t("alert_wrong_pass"));
  }
};

window.guardarAliadosEnNube = function() {
  if (!window.aliadosData || !window.aliadosData.rows || window.aliadosData.rows.length === 0) {
    alert(t("alert_no_excel_data"));
    return;
  }
  const pwd = prompt("Por favor ingresa la contraseña de administrador:");
  if (pwd !== "jan5362") {
    if (pwd !== null) alert(t("alert_wrong_pass"));
    return;
  }
  const btn = document.getElementById('btn-guardar-aliados-nube');
  const oldText = btn ? btn.innerHTML : '';
  if (btn) {
    btn.innerHTML = 'Guardando...';
    btn.disabled = true;
  }

  const cleanData = {
    headers: (window.aliadosData.headers || []).map(h => h === undefined || h === null ? '' : String(h)),
    rows: (window.aliadosData.rows || []).map(row => {
      const rowObj = {};
      // Convertimos el arreglo interno en un objeto para evitar el error de Firebase "Nested arrays are not supported"
      for (let i = 0; i < row.length; i++) {
        rowObj[i.toString()] = row[i] === undefined || row[i] === null ? '' : row[i];
      }
      return rowObj;
    })
  };

  db.collection('settings').doc('aliados').set(cleanData)
    .then(() => {
      alert(t("alert_aliados_saved_cloud"));
    })
    .catch(err => {
      console.error("Error al guardar aliados:", err);
      alert(t("alert_cloud_save_error") + " " + err.message);
    })
    .finally(() => {
      if (btn) {
        btn.innerHTML = oldText;
        btn.disabled = false;
      }
    });
};

window.cargarAliadosDeNube = function() {
  db.collection('settings').doc('aliados').get()
    .then(doc => {
      if (doc.exists) {
        const data = doc.data();
        if (data.headers && data.rows) {
          window.aliadosData = data;
          if (typeof window.renderAliadosCards === 'function') {
            window.renderAliadosCards();
          }
        }
      }
    })
    .catch(err => console.error("Error cargando aliados de la nube:", err));
};

window.formatAliadoText = function(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  let safeText = div.innerHTML;
  
  // Reemplazar "°" y la línea entera con un estilo resaltado
  safeText = safeText.replace(/(°[^\n]+)/g, '<span style="color: #00F2FE; font-weight: 800; font-size: 1.05rem; letter-spacing: 0.5px; display: inline-block; margin-top: 0.4rem;">$1</span>');
  return safeText;
};

window.renderAliadosCards = function() {
  const grid = document.getElementById('grid-aliados');
  if (!grid) return;
  
  if (!window.aliadosData || !window.aliadosData.rows || window.aliadosData.rows.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 3rem; background: rgba(255,255,255,0.02); border-radius: 12px; border: 1px dashed var(--glass-border);"><i data-lucide="info" style="width: 40px; height: 40px; margin-bottom: 1rem; opacity: 0.5;"></i><p>${t('aliados_empty')}</p></div>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }
  
  const headers = window.aliadosData.headers || [];
  const colNombre = headers.findIndex(h => h && h.toLowerCase().includes('comercial')) !== -1 ? headers.findIndex(h => h && h.toLowerCase().includes('comercial')) : 0;
  const colDesc = headers.findIndex(h => h && h.toLowerCase().includes('descripcion')) !== -1 ? headers.findIndex(h => h && h.toLowerCase().includes('descripcion')) : 2;
  const colCiudad = headers.findIndex(h => h && h.toLowerCase().includes('ciudad')) !== -1 ? headers.findIndex(h => h && h.toLowerCase().includes('ciudad')) : 6;
  const colRegion = headers.findIndex(h => h && h.toLowerCase().includes('region')) !== -1 ? headers.findIndex(h => h && h.toLowerCase().includes('region')) : 5;
  const colPais = headers.findIndex(h => h && h.toLowerCase().includes('pais')) !== -1 ? headers.findIndex(h => h && h.toLowerCase().includes('pais')) : 4;
  const colContacto = headers.findIndex(h => h && h.toLowerCase().includes('contacto')) !== -1 ? headers.findIndex(h => h && h.toLowerCase().includes('contacto')) : 1;
  
  grid.innerHTML = '';
  
  window.aliadosData.rows.forEach((row, index) => {
    const nombre = String(row[colNombre] || 'Aliado Sin Nombre');
    const desc = row[colDesc] || '';
    let ubicacion = [row[colCiudad], row[colRegion], row[colPais]].filter(Boolean).join(', ');
    if (!ubicacion) ubicacion = 'Ubicación no especificada';

    let contactoRaw = row[colContacto] ? String(row[colContacto]) : '';
    let linkWa = '#';
    let labelWa = 'Contactar';
    if (contactoRaw) {
      const num = contactoRaw.replace(/\D/g,'');
      linkWa = `https://wa.me/${num}`;
      labelWa = contactoRaw;
    }
    
    const card = document.createElement('div');
    card.className = 'aliado-card-premium';
    card.innerHTML = `
      <div class="aliado-header">
        <h3>${nombre}</h3>
      </div>
      <div class="aliado-desc">${window.formatAliadoText(desc)}</div>
      <div>
        <div class="aliado-loc-pill"><i data-lucide="map-pin" style="width: 14px; height: 14px;"></i> ${ubicacion}</div>
      </div>
      <div class="aliado-actions">
        ${contactoRaw ? `
          <a href="${linkWa}" target="_blank" class="btn-whatsapp-glow" title="WhatsApp">
            <strong>WHATSAPP</strong>
            <span>${labelWa}</span>
          </a>
        ` : ''}
        <button class="btn-detalles-glow" onclick="abrirModalAliado(${index})">
          <i data-lucide="eye" style="width: 18px; height: 18px;"></i> Detalles
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
  if (typeof lucide !== 'undefined') lucide.createIcons();
};

window.abrirModalAliado = function(index) {
  if (!window.aliadosData || !window.aliadosData.rows[index]) return;
  const row = window.aliadosData.rows[index];
  const headers = window.aliadosData.headers;
  
  const colNombre = headers.findIndex(h => h && h.toLowerCase().includes('comercial')) !== -1 ? headers.findIndex(h => h && h.toLowerCase().includes('comercial')) : 0;
  const colCiudad = headers.findIndex(h => h && h.toLowerCase().includes('ciudad')) !== -1 ? headers.findIndex(h => h && h.toLowerCase().includes('ciudad')) : 6;
  const colRegion = headers.findIndex(h => h && h.toLowerCase().includes('region')) !== -1 ? headers.findIndex(h => h && h.toLowerCase().includes('region')) : 5;
  const colPais = headers.findIndex(h => h && h.toLowerCase().includes('pais')) !== -1 ? headers.findIndex(h => h && h.toLowerCase().includes('pais')) : 4;
  const colProd = headers.findIndex(h => h && h.toLowerCase().includes('productos')) !== -1 ? headers.findIndex(h => h && h.toLowerCase().includes('productos')) : 3;
  const colNota = headers.findIndex(h => h && h.toLowerCase().includes('nota')) !== -1 ? headers.findIndex(h => h && h.toLowerCase().includes('nota')) : 7;
  const colContacto = headers.findIndex(h => h && h.toLowerCase().includes('contacto')) !== -1 ? headers.findIndex(h => h && h.toLowerCase().includes('contacto')) : 1;
  
  const nombre = row[colNombre] || 'Aliado';
  let ubicacion = [row[colCiudad], row[colRegion], row[colPais]].filter(Boolean).join(', ');
  if (!ubicacion) ubicacion = 'Ubicación no especificada';
  const prod = row[colProd] || 'No hay productos/servicios registrados.';
  const nota = row[colNota] || '';
  
  document.getElementById('modal-aliado-nombre').textContent = nombre;
  document.getElementById('modal-aliado-ubicacion').innerHTML = `<i data-lucide="map-pin" style="width: 16px; height: 16px; color: var(--accent);"></i> <span>${ubicacion}</span>`;
  document.getElementById('modal-aliado-productos').innerHTML = window.formatAliadoText(prod);
  
  const notaContainer = document.getElementById('modal-aliado-nota-container');
  if (nota) {
    document.getElementById('modal-aliado-nota').innerHTML = window.formatAliadoText(nota);
    notaContainer.style.display = 'block';
  } else {
    notaContainer.style.display = 'none';
  }
  
  const btnWa = document.getElementById('modal-aliado-wa');
  let contactoRaw = row[colContacto] ? String(row[colContacto]) : '';
  if (contactoRaw) {
    const num = contactoRaw.replace(/\D/g,'');
    btnWa.href = `https://wa.me/${num}`;
    btnWa.style.display = 'flex';
  } else {
    btnWa.style.display = 'none';
  }
  
  document.getElementById('modal-aliado').style.display = 'flex';
  if (typeof lucide !== 'undefined') lucide.createIcons();
};

window.cerrarModalAliado = function() {
  document.getElementById('modal-aliado').style.display = 'none';
};

// Finalmente, cargar los aliados de la nube
if (typeof window.cargarAliadosDeNube === 'function') {
  window.cargarAliadosDeNube();
}

window.autoCalcDesdePorcentajeResx1 = function() {
  const tot = Math.max(0, parseInt(document.getElementById('resx1-animales').value) || 0);
  const porc = Math.max(0, parseFloat(document.getElementById('resx1-porcentaje').value) || 0);
  const pren = Math.round(tot * (porc / 100));
  const elPren = document.getElementById('resx1-prenadas');
  if(elPren) { elPren.value = pren; }
  window.updateResultados();
};
window.autoCalcDesdePorcentajeResx2 = function() {
  const tot = Math.max(0, parseInt(document.getElementById('resx2-animales').value) || 0);
  const porc = Math.max(0, parseFloat(document.getElementById('resx2-porcentaje').value) || 0);
  const pren = Math.round(tot * (porc / 100));
  const elPren = document.getElementById('resx2-prenadas');
  if(elPren) { elPren.value = pren; }
  window.updateResultados();
};

window.desactivarFase = function(faseId) {
  if (faseId === 'resincronizacion1') {
    const cb = document.getElementById('pi-check-resx1');
    if(cb) {
      cb.checked = false;
      window.toggleFase('resincronizacion1', false);
    }
    window.irAPestana('protocolo-inicial');
  } else if (faseId === 'resincronizacion2') {
    const cb = document.getElementById('pi-check-resx2');
    if(cb) {
      cb.checked = false;
      window.toggleFase('resincronizacion2', false);
    }
    window.irAPestana('protocolo-inicial');
  }
};
