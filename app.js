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

// Escuchar cambios en el estado de autenticación
auth.onAuthStateChanged(user => {
  const authContainer = document.getElementById('auth-container');
  const appMainLayout = document.getElementById('app-main-layout');
  const navBtnAdmin = document.getElementById('nav-btn-admin');

  if (user) {
    // Usuario autenticado
    authContainer.style.display = 'none';
    appMainLayout.style.display = 'flex';
    
    // Si el usuario es el administrador, mostrar pestaña de administración
    if (user.email === ADMIN_EMAIL) {
      navBtnAdmin.style.display = 'inline-flex';
      cargarUsuariosAdmin();
    } else {
      navBtnAdmin.style.display = 'none';
    }
    
    // Recalcular tablero de control inicial
    if (typeof calcTableroControl === 'function') {
      calcTableroControl();
    }
  } else {
    // Usuario no autenticado
    authContainer.style.display = 'flex';
    appMainLayout.style.display = 'none';
    navBtnAdmin.style.display = 'none';
  }
  lucide.createIcons();
});

// Funciones para alternar formularios de autenticación
window.showLoginForm = function() {
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('auth-subtitle').innerText = "Inicia sesión para continuar";
};

window.showRegisterForm = function() {
  document.getElementById('register-form').style.display = 'block';
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('auth-subtitle').innerText = "Crea tu cuenta para comenzar a usar la app";
};

// Registro de usuarios
window.handleRegister = function(event) {
  event.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();
  const finca = document.getElementById('reg-finca').value.trim();
  const pass = document.getElementById('reg-pass').value;

  if (pass.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  const btn = event.target.querySelector('button[type="submit"]');
  const origText = btn.innerText;
  btn.disabled = true;
  btn.innerText = "Registrando...";

  auth.createUserWithEmailAndPassword(email, pass)
    .then(cred => {
      // Guardar información extendida del usuario en Firestore Database
      return db.collection("users").doc(cred.user.uid).set({
        uid: cred.user.uid,
        name: name,
        email: email,
        phone: phone,
        finca: finca,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    })
    .then(() => {
      console.log("Registro completado con éxito en Auth y Firestore");
    })
    .catch(err => {
      btn.disabled = false;
      btn.innerText = origText;
      console.error("Error en registro:", err);
      alert("Error al registrarse: " + traducirErrorFirebase(err.code));
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
      alert("Error al iniciar sesión: " + traducirErrorFirebase(err.code));
    });
};

// Cierre de sesión
window.handleLogout = function() {
  if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
    auth.signOut()
      .then(() => {
        // Limpiar campos
        document.getElementById('login-email').value = '';
        document.getElementById('login-pass').value = '';
        document.getElementById('reg-name').value = '';
        document.getElementById('reg-email').value = '';
        document.getElementById('reg-phone').value = '';
        document.getElementById('reg-finca').value = '';
        document.getElementById('reg-pass').value = '';
        showRegisterForm();
      })
      .catch(err => {
        console.error("Error al cerrar sesión:", err);
      });
  }
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
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;" class="text-muted">Cargando usuarios...</td></tr>';

  db.collection("users").orderBy("createdAt", "desc").get()
    .then(querySnapshot => {
      tbody.innerHTML = '';
      totalUsersEl.innerText = querySnapshot.size;

      if (querySnapshot.empty) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;" class="text-muted">No hay usuarios registrados.</td></tr>';
        return;
      }

      querySnapshot.forEach(doc => {
        const userData = doc.data();
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
          <td>${fechaStr}</td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch(err => {
      console.error("Error al cargar usuarios de Firestore:", err);
      tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--danger);">Error al cargar datos. Asegúrate de tener permisos de administrador.</td></tr>`;
    });
};

// Formatter and Icons
const formatter = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });
lucide.createIcons();

// Tabs Navigation
const navBtns = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');
navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(tc => tc.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.getAttribute('data-target')).classList.add('active');
  });
});

// INITIAL STATE
const state = {
  tableroLeche: { precio: 1100, duracion: 300, litros: 1500 },
  tableroCarne: { precio: 10000, duracion: 240, peso: 240 },
  
  colDefs: ['dib','be1','be2','gnrh1','gnrh2','pgf1','pgf2','pgf3','ecg','ce','gen','retdib','mo1','mo2','dx1','dx2'],
  
  // Inventory
  insumos: {
    dib: { name: 'Dispositivo Intravaginal Bovino', tipo: 'Und', tamano: 10, valorFrasco: 160000, def: 1.0 },
    be1: { name: 'Benzoato de Estradiol (1a Dosis)', tipo: 'ml', tamano: 100, valorFrasco: 69000, def: 2.0 },
    be2: { name: 'Benzoato de Estradiol (2a Dosis)', tipo: 'ml', tamano: 100, valorFrasco: 69000, def: 1.0 },
    gnrh1: { name: 'GnRh (1a Dosis)', tipo: 'ml', tamano: 50, valorFrasco: 94000, def: 2.5 },
    gnrh2: { name: 'GnRh (2a Dosis)', tipo: 'ml', tamano: 50, valorFrasco: 94000, def: 2.5 },
    pgf1: { name: 'Prostaglandina (1a Dosis)', tipo: 'ml', tamano: 100, valorFrasco: 100000, def: 2.0 },
    pgf2: { name: 'Prostaglandina (2a Dosis)', tipo: 'ml', tamano: 100, valorFrasco: 100000, def: 2.0 },
    pgf3: { name: 'Prostaglandina (3a Dosis)', tipo: 'ml', tamano: 100, valorFrasco: 100000, def: 2.0 },
    ecg: { name: 'Gonadotropina Corionica Equina (eCG)', tipo: 'ml', tamano: 30, valorFrasco: 190000, def: 1.0 },
    ce: { name: 'Cipionato de Estradiol (C.E)', tipo: 'ml', tamano: 100, valorFrasco: 87000, def: 1.0 },
    gen: { name: 'Genetica Semen/Embrion', tipo: 'Semen', tamano: 1, valorFrasco: 40000, def: 1.0 },
    retdib: { name: 'Retiro DIB', tipo: 'Serv', tamano: 1, valorFrasco: 0, def: 1.0 },
    mo1: { name: 'Asistencia tecnica 1', tipo: 'Serv', tamano: 1, valorFrasco: 40000, def: 1.0 },
    mo2: { name: 'Asistencia tecnica 2', tipo: 'Serv', tamano: 1, valorFrasco: 0, def: 1.0 },
    dx1: { name: 'Confirmacion preñez Dx1', tipo: 'Serv', tamano: 1, valorFrasco: 10000, def: 1.0 },
    dx2: { name: 'Confirmacion preñez Dx2', tipo: 'Serv', tamano: 1, valorFrasco: 10000, def: 1.0 }
  },
  
  matriz: [
    { name: 'TRADICIONAL(IATF)', days: ['0','0','-','10','-','8','-','-','8','8','10','8','0','8','-','-'] },
    { name: 'JSYNCH(IATF)', days: ['0','0','-','9','-','6','-','-','6','-','9','6','0','6','-','-'] },
    { name: 'NOVILLAS(IATF)', days: ['0','0','9','-','-','8','-','-','8','-','10','8','0','8','-','-'] },
    { name: 'OVSYNCH(IATF)', days: ['-','-','-','0','9','7','-','-','-','-','10','-','0','-','-','-'] },
    { name: 'COSYNCH(IATF)', days: ['-','-','-','0','9','7','-','-','-','-','9','-','0','-','-','-'] },
    { name: 'HEATSYNCH(IATF)', days: ['-','8','-','0','-','7','-','-','-','-','10','-','0','-','-','-'] },
    { name: 'PRESYNCH(IA)', days: ['-','-','-','0','9','-26','-12','7','-','-','10','-','0','-','-','-'] },
    { name: 'SELECTSYNCH(IA)', days: ['-','-','-','0','-','7','-','-','-','-','8','-','0','-','-','-'] },
    { name: 'DIBVACAS(IA)', days: ['0','-','-','0','8','7','-','-','-','-','8','-','0','7','-','-'] },
    { name: 'DIBNOVILLAS(IA)', days: ['0','0','-','8','-','7','-','-','-','-','8','-','0','7','-','-'] },
    { name: 'DOBLEPGF2@(IA)', days: ['-','-','-','-','-','0','11','-','-','-','2','-','0','-','-','-'] },
    { name: 'MN1(IA)', days: ['-','-','-','0','-','7','-','-','-','-','9','-','0','-','-','-'] },
    { name: 'MN2(IA)', days: ['-','8','-','0','-','7','-','-','-','-','9','-','0','-','-','-'] },
    { name: 'MN3DIB(IA)', days: ['0','-','-','0','-','7','-','-','-','-','9','8','0','7','-','-'] },
    { name: 'REC 1 (IATF)', days: ['0','0','9','-','-','5','-','-','5','-','10','8','0','5','-','-'] },
    { name: 'REC 2 (IATF)', days: ['0','0','-','-','-','8','-','-','8','8','9','8','0','8','-','-'] }
  ],
  
  // Store the active rows for Protocol Initial
  activeList: []
};

// 1. TABLERO DE CONTROL (LECHE Y CARNE)
window.calcTableroControl = function() {
  state.tableroLeche.precio = parseFloat(document.getElementById('tc-precio-leche').value) || 0;
  state.tableroLeche.duracion = parseFloat(document.getElementById('tc-duracion-lactancia').value) || 1;
  state.tableroLeche.litros = parseFloat(document.getElementById('tc-litros-lactancia').value) || 0;
  
  const promLeche = state.tableroLeche.litros / state.tableroLeche.duracion;
  const ingresoLeche = state.tableroLeche.litros * state.tableroLeche.precio;
  
  document.getElementById('tc-promedio-leche').innerText = promLeche.toFixed(2);
  document.getElementById('tc-ingreso-leche').innerText = formatter.format(ingresoLeche);
  
  state.tableroCarne.precio = parseFloat(document.getElementById('tc-precio-carne').value) || 0;
  state.tableroCarne.duracion = parseFloat(document.getElementById('tc-duracion-carne').value) || 1;
  state.tableroCarne.peso = parseFloat(document.getElementById('tc-peso-destete').value) || 0;
  
  const promCarne = state.tableroCarne.peso / state.tableroCarne.duracion;
  const ingresoCarne = state.tableroCarne.peso * state.tableroCarne.precio;
  
  document.getElementById('tc-promedio-carne').innerText = promCarne.toFixed(2);
  document.getElementById('tc-ingreso-carne').innerText = formatter.format(ingresoCarne);
}

// 2. MATRIZ Y BLOQUEO
let isMatrixUnlocked = false;

function actualizarSelectProtocolos() {
  const selectPI = document.getElementById('pi-protocolo');
  if(!selectPI) return;
  const currentVal = selectPI.value;
  selectPI.innerHTML = '';
  state.matriz.forEach(p => {
    const opt = document.createElement('option'); opt.value = p.name; opt.innerText = p.name;
    selectPI.appendChild(opt);
  });
  if([...selectPI.options].find(o => o.value === currentVal)) selectPI.value = currentVal;
}

function renderMatriz() {
  const tbody = document.getElementById('tc-matriz-body');
  if(!tbody) return;
  tbody.innerHTML = '';
  
  state.matriz.forEach((protocol, rowIdx) => {
    let tr = document.createElement('tr');
    let nameHtml = isMatrixUnlocked 
      ? `<input type="text" class="cell-input" style="width:140px; text-align:left; background: var(--bg-input);" value="${protocol.name}" onchange="updateRowName(${rowIdx}, this.value)">`
      : `<span style="font-weight: 500; font-size: 0.85rem;">${protocol.name}</span>`;
      
    tr.innerHTML = `<td style="text-align: left;">${nameHtml}</td>`;
    protocol.days.forEach((dayVal, colIdx) => {
      tr.innerHTML += `
        <td>
          <input type="text" class="cell-input" 
                 id="matriz-${rowIdx}-${colIdx}" 
                 value="${dayVal}" 
                 ${isMatrixUnlocked ? '' : 'disabled style="border-color:transparent; background:transparent; opacity:1;"'}
                 onchange="updateCell(${rowIdx}, ${colIdx}, this.value)">
        </td>
      `;
    });
    tbody.appendChild(tr);
  });
  actualizarSelectProtocolos();
}

window.unlockMatriz = function() {
  if (isMatrixUnlocked) return;
  const pass = prompt("Acceso Restringido. Ingresa la contraseña de administrador para modificar:");
  if (pass === "admin" || pass === "1234") {
    isMatrixUnlocked = true;
    document.getElementById('btn-unlock').style.display = 'none';
    document.getElementById('btn-add-protocolo').style.display = 'inline-flex';
    document.getElementById('btn-save-matriz').style.display = 'inline-flex';
    document.getElementById('lbl-matriz-instruccion').innerText = "Modo Edición Activo. Puedes cambiar días o renombrar protocolos. ('-' si no aplica).";
    renderMatriz();
  } else if(pass !== null) {
    alert("Contraseña incorrecta.");
  }
}

window.agregarNuevoProtocolo = function() {
  state.matriz.push({ name: "NUEVO PROTOCOLO", days: Array(16).fill('-') });
  renderMatriz();
}
window.updateRowName = function(r, val) { state.matriz[r].name = val; }
window.updateCell = function(r, c, val) { state.matriz[r].days[c] = val; }

window.guardarMatrizProtocolos = function() {
  const btn = event.currentTarget;
  btn.style.background = 'var(--success)'; btn.innerHTML = '<i data-lucide="check"></i> Guardado'; lucide.createIcons();
  
  isMatrixUnlocked = false;
  document.getElementById('btn-unlock').style.display = 'inline-flex';
  document.getElementById('btn-add-protocolo').style.display = 'none';
  document.getElementById('btn-save-matriz').style.display = 'none';
  document.getElementById('lbl-matriz-instruccion').innerText = "Modo Consulta Activo. Los protocolos están bloqueados para evitar alteraciones accidentales.";
  renderMatriz();
  
  setTimeout(() => { 
    btn.style.background = 'var(--accent)'; btn.innerHTML = '<i data-lucide="save"></i> Guardar y Bloquear'; lucide.createIcons(); 
  }, 1500);
}

window.toggleVerProtocolos = function() {
  const container = document.getElementById('matriz-container');
  const btn = document.getElementById('btn-toggle-protocolos');
  if (container.style.display === 'none') {
    container.style.display = 'block';
    btn.innerHTML = '<i data-lucide="eye-off"></i> Ocultar Protocolos';
  } else {
    container.style.display = 'none';
    btn.innerHTML = '<i data-lucide="eye"></i> Mostrar Protocolos Base';
  }
  lucide.createIcons();
}


// 3. PRECIOS E INSUMOS MODAL
window.abrirModalPrecios = function() {
  const tbody = document.getElementById('tabla-modal-precios');
  tbody.innerHTML = '';
  
  const pName = document.getElementById('pi-protocolo').value;
  const protocol = state.matriz.find(p => p.name === pName);
  
  if(!protocol) {
     alert("Selecciona un protocolo válido.");
     return;
  }
  
  let numItems = 0;
  const animalesNum = parseInt(document.getElementById('pi-animales').value) || 0;

  state.colDefs.forEach((id, idx) => {
    const dayStr = protocol.days[idx];
    if (dayStr !== '-' && dayStr !== '') {
      numItems++;
      const ins = state.insumos[id];
      const isService = ['gen','retdib','mo1','mo2','dx1','dx2'].includes(id);

      let unidadesUtilizar = ins.def * animalesNum;
      let frascosComprar = 0;
      let costoTotalComercial = 0;
      
      if (isService) {
         frascosComprar = unidadesUtilizar;
         costoTotalComercial = frascosComprar * ins.valorFrasco;
      } else {
         frascosComprar = Math.ceil(unidadesUtilizar / (ins.tamano || 1));
         costoTotalComercial = frascosComprar * ins.valorFrasco;
      }

      tbody.innerHTML += `
        <tr id="mod-row-${id}">
          <td><strong>${ins.name}</strong></td>
          <td>
            ${isService ? `<input type="hidden" id="mod-tamano-${id}" value="1"><span class="text-muted" style="display:inline-block; margin-left:8px;">Individual</span>` : `<input type="number" id="mod-tamano-${id}" value="${ins.tamano}" class="cell-input" style="width:70px; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border);" onkeyup="recalcFilaModal('${id}', ${isService})" onchange="recalcFilaModal('${id}', ${isService})"> <span class="text-muted">${ins.tipo}</span>`}
          </td>
          <td><input type="number" id="mod-valor-${id}" value="${ins.valorFrasco}" class="cell-input" style="width:100px; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border);" onkeyup="recalcFilaModal('${id}', ${isService})" onchange="recalcFilaModal('${id}', ${isService})"></td>
          <td>
            ${isService ? `<input type="hidden" step="0.1" id="mod-def-${id}" value="1"><span class="text-muted" style="display:inline-block; margin-left:8px;">-</span>` : `<input type="number" step="0.1" id="mod-def-${id}" value="${ins.def}" class="cell-input" style="width:70px; font-weight:bold; color:var(--accent); background:rgba(255,255,255,0.05); border:1px solid var(--glass-border);" onkeyup="recalcFilaModal('${id}', ${isService})" onchange="recalcFilaModal('${id}', ${isService})">`}
          </td>
          <td id="mod-lbl-frascos-${id}"><strong>${frascosComprar}</strong></td>
          <td id="mod-lbl-costo-${id}"><strong class="text-success">${formatter.format(costoTotalComercial)}</strong></td>
        </tr>
      `;
    }
  });

  if(numItems === 0) {
     tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;" class="text-muted">No hay insumos configurados para este protocolo.</td></tr>`;
  }
  
  document.getElementById('modal-precios').style.display = 'flex';
}

window.recalcFilaModal = function(id, isService) {
   const animalesNum = parseInt(document.getElementById('pi-animales').value) || 0;
   const tamano = parseFloat(document.getElementById(`mod-tamano-${id}`).value) || 1;
   const valor = parseFloat(document.getElementById(`mod-valor-${id}`).value) || 0;
   const def = parseFloat(document.getElementById(`mod-def-${id}`).value) || 0;
   
   let frascosComprar = 0;
   let costoTotalComercial = 0;
   let unidadesUtilizar = def * animalesNum;
   
   if (isService) {
      frascosComprar = unidadesUtilizar;
      costoTotalComercial = frascosComprar * valor;
   } else {
      frascosComprar = Math.ceil(unidadesUtilizar / tamano);
      costoTotalComercial = frascosComprar * valor;
   }
   
   const lblF = document.getElementById(`mod-lbl-frascos-${id}`);
   const lblC = document.getElementById(`mod-lbl-costo-${id}`);
   
   if(lblF) lblF.innerHTML = `<strong>${frascosComprar}</strong>`;
   if(lblC) lblC.innerHTML = `<strong class="text-success">${formatter.format(costoTotalComercial)}</strong>`;
}

window.cerrarModalPrecios = function() {
  document.getElementById('modal-precios').style.display = 'none';
}

window.guardarPreciosModal = function() {
  const pName = document.getElementById('pi-protocolo').value;
  const protocol = state.matriz.find(p => p.name === pName);
  if(!protocol) return;

  state.colDefs.forEach((id, idx) => {
    const dayStr = protocol.days[idx];
    if (dayStr !== '-' && dayStr !== '') {
      const vEl = document.getElementById(`mod-valor-${id}`);
      if(vEl) state.insumos[id].valorFrasco = parseFloat(vEl.value) || 0;
      
      const tEl = document.getElementById(`mod-tamano-${id}`);
      if(tEl) state.insumos[id].tamano = parseFloat(tEl.value) || 1;
      
      const dEl = document.getElementById(`mod-def-${id}`);
      if(dEl) state.insumos[id].def = parseFloat(dEl.value) || 0.1;
    }
  });

  cerrarModalPrecios();
  // Recalc current protocol if gen is open
  if (state.activeList.length > 0) reCalcTablaPI();
}

// 4. PROTOCOLO INICIAL CALC

window.autoCalcPorcentaje = function() {
  const an = parseFloat(document.getElementById('pi-animales').value) || 1;
  const pren = parseFloat(document.getElementById('pi-prenadas').value) || 0;
  const perc = (pren / an) * 100;
  const pctInp = document.getElementById('pi-porcentaje');
  if(pctInp) pctInp.value = perc.toFixed(0);
}

window.autoCalcPrenez = function() {
  const an = parseFloat(document.getElementById('pi-animales').value) || 1;
  const pctInp = document.getElementById('pi-porcentaje');
  const pct = pctInp ? parseFloat(pctInp.value) : 50;
  document.getElementById('pi-prenadas').value = Math.round(an * (pct / 100));
  autoCalcPorcentaje();
}

window.autoCalcDesdePorcentaje = function() {
  const an = parseFloat(document.getElementById('pi-animales').value) || 1;
  let pct = parseFloat(document.getElementById('pi-porcentaje').value) || 0;
  document.getElementById('pi-prenadas').value = Math.round(an * (pct / 100));
}

// Genera la tabla basada en la matriz
window.ejecutarProtocoloInicial = function() {
  const pName = document.getElementById('pi-protocolo').value;
  const fechaStr = document.getElementById('pi-fecha').value;
  
  if(!fechaStr) { alert("Selecciona una fecha de inicio."); return; }
  
  const protocol = state.matriz.find(p => p.name === pName);
  if(!protocol) return;
  
  state.activeList = [];
  
  protocol.days.forEach((dayStr, idx) => {
    if (dayStr !== '-' && dayStr !== '') {
      const colId = state.colDefs[idx];
      const ins = state.insumos[colId];
      const dayOffset = parseInt(dayStr);
      state.activeList.push({
        idRow: state.activeList.length,
        colId: colId,
        dayOffset: dayOffset,
        dosisSel: ins.def // Tomado del Default editable por el usuario
      });
    }
  });
  
  // Sort chronologically
  state.activeList.sort((a,b) => a.dayOffset - b.dayOffset);
  
  document.getElementById('pi-resultados').style.display = 'block';
  reCalcTablaPI();
}

// Obsoleted cambioDosisFila as requested by user - Dosis now strictly follows inventory def

// Draw the PI dynamic table and multiply math 
function reCalcTablaPI() {
  const tbody = document.getElementById('tc-pi-body');
  tbody.innerHTML = '';
  
  const animales = parseInt(document.getElementById('pi-animales').value) || 0;
  const fechaBaseStr = document.getElementById('pi-fecha').value;
  const fBaseStamp = new Date(fechaBaseStr + 'T12:00:00');
  
  let gTotalCompraFarmacia = 0;
  let gTotalCostoAplicado = 0;
  
  state.activeList.forEach(rowItem => {
    const ins = state.insumos[rowItem.colId];
    
    // date logic
    const dDate = new Date(fBaseStamp);
    dDate.setDate(dDate.getDate() + rowItem.dayOffset);
    const dateEspanol = dDate.toLocaleDateString('es-ES', { weekday: 'short', month: 'short', day: 'numeric' });
    
    // Math exactly like User requested 
    const isService = ['gen','retdib','mo1','mo2','dx1','dx2'].includes(rowItem.colId);
    
    // As per user request, dose is strictly tied to inventory definition
    const dosisAAplicar = ins.def;
    const unidadesUtilizar = dosisAAplicar * animales;
    
    let frascosComprar = 0;
    let animalesAlcanzables = 0;
    let costoComercial = 0;
    let costoAplicadoUnidadBase = 0; 
    let costoTotalAplicado = 0;
    let costoPorDosis = 0;
    
    if (isService) {
       frascosComprar = unidadesUtilizar; // En caso de genética/IA son animales totales
       animalesAlcanzables = animales; 
       costoComercial = unidadesUtilizar * ins.valorFrasco;
       costoTotalAplicado = costoComercial;
       costoPorDosis = ins.valorFrasco;
    } else {
       animalesAlcanzables = ins.tamano / (dosisAAplicar || 1);
       frascosComprar = Math.ceil(unidadesUtilizar / (ins.tamano || 1));
       costoComercial = frascosComprar * ins.valorFrasco;
       costoAplicadoUnidadBase = ins.valorFrasco / (ins.tamano || 1);
       costoTotalAplicado = unidadesUtilizar * costoAplicadoUnidadBase;
       costoPorDosis = costoAplicadoUnidadBase * dosisAAplicar;
    }
    
    gTotalCompraFarmacia += costoComercial;
    gTotalCostoAplicado += costoTotalAplicado;
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${rowItem.dayOffset}</strong></td>
      <td style="text-transform: capitalize;">${dateEspanol}</td>
      <td><strong>${ins.name}</strong></td>
      <td>
        <strong style="color:var(--accent); font-size:1.1rem;">${isService ? '-' : dosisAAplicar}</strong>
      </td>
      <td>${unidadesUtilizar.toFixed(1)} <small class="text-muted">${ins.tipo}</small></td>
      <td>${isService ? '-' : animalesAlcanzables.toFixed(1)}</td>
      <td><strong class="text-accent">${isService ? '-' : frascosComprar}</strong></td>
      <td>${formatter.format(ins.valorFrasco)}</td>
      <td style="color:#f59e0b; font-weight:bold;">${formatter.format(costoPorDosis)}</td>
      <td><strong class="text-accent">${formatter.format(costoComercial)}</strong></td>
      <td><strong class="text-success">${formatter.format(costoTotalAplicado)}</strong></td>
    `;
    tbody.appendChild(tr);
  });
  
  // Footer Updates
  document.getElementById('pi-compra-total').innerText = formatter.format(gTotalCompraFarmacia);
  document.getElementById('pi-costo-aplicado').innerText = formatter.format(gTotalCostoAplicado);
  const costPerCow = animales > 0 ? (gTotalCostoAplicado / animales) : 0;
  document.getElementById('pi-costo-animal').innerText = formatter.format(costPerCow);

  // Graphic Cards Updates
  const preneces = parseFloat(document.getElementById('pi-prenadas').value) || 0;
  const costPerPregnancy = preneces > 0 ? (gTotalCostoAplicado / preneces) : 0;
  
  if(document.getElementById('pi-card-animal')) document.getElementById('pi-card-animal').innerText = formatter.format(costPerCow);
  if(document.getElementById('pi-card-prenez')) document.getElementById('pi-card-prenez').innerText = formatter.format(costPerPregnancy);
  
  lucide.createIcons();
}

// EXPORT FUNCIONES
window.exportarExcel = function() {
  const table = document.getElementById('tabla-cronograma-inicial');
  let csv = [];
  const rows = table.querySelectorAll('tr');
  rows.forEach(row => {
    let rowData = [];
    const cols = row.querySelectorAll('th, td');
    cols.forEach(col => {
      let t = col.innerText.replace(/(\r\n|\n|\r)/gm, " ").trim();
      const input = col.querySelector('input');
      if (input) { t = input.value; }
      rowData.push('"' + t + '"');
    });
    csv.push(rowData.join(','));
  });
  
  csv.push("");
  csv.push(`"Inversion Final Dosis (Por Animal):","${document.getElementById('pi-costo-animal').innerText}"`);
  csv.push(`"Presupuesto Compra (Farmacia):","${document.getElementById('pi-compra-total').innerText}"`);
  csv.push(`"Total Inversion Aplicada Real:","${document.getElementById('pi-costo-aplicado').innerText}"`);
  
  const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + csv.join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'cronograma_iatfpro.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

window.exportarPDF = function() {
  window.print();
}

window.enviarWhatsApp = function() {
  const ganaderia = document.getElementById('pi-ganaderia').value;
  const finca = document.getElementById('pi-finca').value;
  const lote = document.getElementById('pi-lote').value || 'N/A';
  const vet = document.getElementById('pi-vet').value || 'N/A';
  const protocolo = document.getElementById('pi-protocolo').value;
  const fecha = document.getElementById('pi-fecha').value;
  const ani = document.getElementById('pi-animales').value;
  const pre = document.getElementById('pi-prenadas').value;
  const costoTotal = document.getElementById('pi-costo-aplicado').innerText;
  
  let mensaje = `*Iatf Pro - Resumen de Protocolo*\n`;
  mensaje += `📍 *Ubicación:* ${finca} (${ganaderia})\n🐄 *Lote:* ${lote} | 👨‍⚕️ *Vet:* ${vet}\n\n`;
  mensaje += `📋 *Protocolo:* ${protocolo}\n📅 *Inicio:* ${fecha}\n🐮 *Animales:* ${ani}\n🎯 *Preñeces proy:* ${pre}\n`;
  mensaje += `--------------------------\n💰 *Costo Total (Aplicado):* ${costoTotal}\n💸 *Inversión por Animal:* ${document.getElementById('pi-costo-animal').innerText}\n\n`;
  mensaje += `*Actividades:*\n`;
  
  const rows = document.querySelectorAll('#tc-pi-body tr');
  rows.forEach(r => {
    const td = r.querySelectorAll('td');
    if(td.length > 5) {
      const dia = td[0].innerText;
      const act = td[2].innerText;
      let dosis = td[3].innerText.trim();
      const inp = td[3].querySelector('input');
      if(inp) dosis = inp.value;
      mensaje += `Día ${dia}: ${act} (Dosis: ${dosis})\n`;
    }
  });
  
  window.open(`https://wa.me/?text=${encodeURIComponent(mensaje)}`, '_blank');
}

// Initial Boot
calcTableroControl();
renderMatriz();
const todayDate = new Date().toISOString().split('T')[0];
if(document.getElementById('pi-fecha')) {
  document.getElementById('pi-fecha').value = todayDate;
}

