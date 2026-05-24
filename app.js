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
  const currentLen = 18; // Longitud actual de colDefs
  if (!Array.isArray(days)) {
    return Array(currentLen).fill('-');
  }
  if (days.length === currentLen) {
    return days;
  }
  let newDays = Array(currentLen).fill('-');
  if (days.length === 17) {
    for (let i = 0; i <= 14; i++) {
      newDays[i] = days[i] !== undefined ? days[i] : '-';
    }
    newDays[15] = '-';
    newDays[16] = days[15] !== undefined ? days[15] : '-';
    newDays[17] = days[16] !== undefined ? days[16] : '-';
  } else if (days.length === 16) {
    for (let i = 0; i <= 13; i++) {
      newDays[i] = days[i] !== undefined ? days[i] : '-';
    }
    newDays[14] = iaVal !== undefined ? String(iaVal) : '-';
    newDays[15] = '-';
    newDays[16] = days[14] !== undefined ? days[14] : '-';
    newDays[17] = days[15] !== undefined ? days[15] : '-';
  } else {
    for (let i = 0; i < currentLen; i++) {
      newDays[i] = days[i] !== undefined ? days[i] : '-';
    }
  }
  return newDays;
}

function adaptarHorasProtocolo(hours) {
  const currentLen = 18; // Longitud actual de colDefs
  if (!Array.isArray(hours)) {
    return Array(currentLen).fill('08:00');
  }
  if (hours.length === currentLen) {
    return hours;
  }
  let newHours = Array(currentLen).fill('08:00');
  if (hours.length === 17) {
    for (let i = 0; i <= 14; i++) {
      newHours[i] = hours[i] !== undefined ? hours[i] : '08:00';
    }
    newHours[15] = '08:00';
    newHours[16] = hours[15] !== undefined ? hours[15] : '08:00';
    newHours[17] = hours[16] !== undefined ? hours[16] : '08:00';
  } else if (hours.length === 16) {
    for (let i = 0; i <= 13; i++) {
      newHours[i] = hours[i] !== undefined ? hours[i] : '08:00';
    }
    newHours[14] = '08:00';
    newHours[15] = '08:00';
    newHours[16] = hours[14] !== undefined ? hours[14] : '08:00';
    newHours[17] = hours[15] !== undefined ? hours[15] : '08:00';
  } else {
    for (let i = 0; i < currentLen; i++) {
      newHours[i] = hours[i] !== undefined ? hours[i] : '08:00';
    }
  }
  return newHours;
}

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

    if (sidebarConsultor) {
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

    // Cargar configuraciones del usuario desde Firestore
    db.collection("users").doc(user.uid).get()
      .then(docSnap => {
        if (docSnap.exists) {
          const userData = docSnap.data();
          
          // Incrementar contador de accesos en Firestore
          db.collection("users").doc(user.uid).update({
            accessCount: firebase.firestore.FieldValue.increment(1)
          }).catch(err => console.warn("Error incrementando accessCount:", err));
          
          if (userData.name && sidebarConsultor) {
            sidebarConsultor.innerText = userData.name.toUpperCase();
          }

          if (userData.tableroLeche) Object.assign(state.tableroLeche, userData.tableroLeche);
          if (userData.tableroCarne) Object.assign(state.tableroCarne, userData.tableroCarne);
          if (userData.insumos) {
            for (let k in userData.insumos) {
              if (state.insumos[k]) Object.assign(state.insumos[k], userData.insumos[k]);
            }
          }
          if (userData.matriz && Array.isArray(userData.matriz)) {
            // Migrar y sanitizar la matriz de Firestore automáticamente
            const migratedMatrix = userData.matriz.map(p => {
              const newDays = adaptarDiasProtocolo(p.days, p.ia);
              const newHours = adaptarHorasProtocolo(p.hours);
              return Object.assign({}, p, { days: newDays, hours: newHours });
            });
            state.matriz = migratedMatrix;
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
        syncFases();
        renderMatriz();
        actualizarSelectProtocolos();
        window.calcTableroControl();
        window.updateResultados();
        lucide.createIcons();
      });

    if (user.email === ADMIN_EMAIL) {
      if (navBtnAdmin) navBtnAdmin.style.display = 'inline-flex';
      cargarUsuariosAdmin();
    } else {
      if (navBtnAdmin) navBtnAdmin.style.display = 'none';
    }

  } else {
    // No autenticado
    if (authContainer) authContainer.style.display = 'flex';
    if (appMainLayout) appMainLayout.style.display = 'none';
    if (navBtnAdmin) navBtnAdmin.style.display = 'none';
    lucide.createIcons();
  }
});

// Alternar pantallas de login/registro
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
  const nit = document.getElementById('reg-nit').value.trim();
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
      return db.collection("users").doc(cred.user.uid).set({
        uid: cred.user.uid,
        nit: nit,
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
        // Limpiar LocalStorage sensible para evitar que otro usuario herede datos
        localStorage.removeItem('reprocost_state');
        localStorage.removeItem('reprocost_perfil_consultor');
        localStorage.removeItem('reprocost_custom_matriz');

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

  tbody.innerHTML = '<tr><td colspan="7" style="text-align: center;" class="text-muted">Cargando usuarios...</td></tr>';

  db.collection("users").orderBy("createdAt", "desc").get()
    .then(querySnapshot => {
      tbody.innerHTML = '';
      if (totalUsersEl) totalUsersEl.innerText = querySnapshot.size;

      let totalAccessesSum = 0;

      if (querySnapshot.empty) {
        if (totalAccessesEl) totalAccessesEl.innerText = '0';
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center;" class="text-muted">No hay usuarios registrados.</td></tr>';
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

    db.collection("users").doc(auth.currentUser.uid).set({
      tableroLeche: state.tableroLeche,
      tableroCarne: state.tableroCarne,
      insumos: state.insumos,
      matriz: state.matriz,
      logoEmpresa: state.logoEmpresa || '',
      inputs: inputs,
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true })
    .then(() => console.log("Estado sincronizado en Firestore"))
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
window.translations = {
  es: {
    sidebar_dashboard: "Tablero de Control",
    sidebar_pi: "Protocolo Inicial",
    sidebar_resx1: "ReSx1",
    sidebar_resx2: "ReSx2",
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
    resx1_title: "Resincronización 1 (ReSx1)",
    resx1_subtitle: "Gestión de animales vacíos tras el primer diagnóstico (Dx1).",
    resx1_animals: "Animales en Resincronización (Vacías PI)",
    resx2_title: "Resincronización 2 (ReSx2)",
    resx2_subtitle: "Gestión de animales vacíos tras el segundo diagnóstico (Dx2).",
    resx2_animals: "Animales en Resincronización (Vacías ReSx1)",
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
    contact_placeholder: "Escribe tu mensaje aquí..."
  },
  en: {
    sidebar_dashboard: "Control Dashboard",
    sidebar_pi: "Initial Protocol",
    sidebar_resx1: "ReSx1",
    sidebar_resx2: "ReSx2",
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
    resx1_title: "Resynchronization 1 (ReSx1)",
    resx1_subtitle: "Management of empty animals after first diagnosis (Dx1).",
    resx1_animals: "Animals in Resync (Empty PI)",
    resx2_title: "Resynchronization 2 (ReSx2)",
    resx2_subtitle: "Management of empty animals after second diagnosis (Dx2).",
    resx2_animals: "Animals in Resync (Empty ReSx1)",
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
    contact_placeholder: "Type your message here..."
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
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  // Actualizar placeholders marcados con data-i18n-placeholder
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Sincronizar el selector UI
  const selector = document.getElementById('language-selector');
  if (selector) selector.value = lang;

  // Re-renderizar componentes dinámicos
  if (typeof updateResultados === 'function') updateResultados();
  if (typeof calcTableroControl === 'function') calcTableroControl();
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
    document.getElementById(target).classList.add('active');

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

// INITIAL STATE// INITIAL STATE
const state = {
  tableroLeche: { precio: 1100, duracion: 300, litros: 1500 },
  tableroCarne: { precio: 10000, duracion: 240, peso: 240 },
  colDefs: ['dib','be1','be2','gnrh1','gnrh2','pgf1','pgf2','pgf3','ecg','ce','gen','retdib','mo1','mo2','iate','opu','dx1','dx2'],
  
  // Inventory
  insumos: {
    dib: { name: 'Dispositivo Intravaginal Bovino', tipo: 'Und', tamano: 10, valorFrasco: 160000, def: 0, resx1: 1, resx2: 1, cat: 'hormonas', obs: 'P4', usos: 1 },
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
  
  matriz: [
    { name: 'TRADICIONAL(IATF)', days: ['0','0','-','10','-','8','-','-','8','9','10','8','0','8','10','-','30','60'], hours: Array(18).fill('08:00'), ia: '10', obs: 'IATF 48-60 hs / GnRh Opcional' },
    { name: 'JSYNCH(IATF)', days: ['0','0','-','9','-','6','-','-','6','-','9','6','0','6','9','-','28','58'], hours: Array(18).fill('08:00'), ia: '9', obs: 'IATF 72 hs + GnRh' },
    { name: 'NOVILLAS(IATF)', days: ['0','0','9','-','-','8','-','-','8','-','10','8','0','8','10','-','30','60'], hours: Array(18).fill('08:00'), ia: '10', obs: 'IATF 24-32 horas' },
    { name: 'OVSYNCH(IATF)', days: ['-','-','-','0','9','7','-','-','-','-','10','-','0','-','10','-','30','60'], hours: Array(18).fill('08:00'), ia: '10', obs: 'IATF 12-24 horas post GnRh' },
    { name: 'COSYNCH(IATF)', days: ['-','-','-','0','9','7','-','-','-','-','9','-','0','-','9','-','30','60'], hours: Array(18).fill('08:00'), ia: '9', obs: 'IATF 48 horas + GnRh' },
    { name: 'HEATSYNCH(IATF)', days: ['-','8','-','0','-','7','-','-','-','-','10','-','0','-','10','-','30','60'], hours: Array(18).fill('08:00'), ia: '10', obs: 'IATF 48-52 horas post' },
    { name: 'PRESYNCH(IA)', days: ['-','-','-','0','9','-26','-12','0','-','-','10','-','0','-','10','-','30','60'], hours: Array(18).fill('08:00'), ia: '10', obs: 'Observar celo - IA 12 horas post celo estable' },
    { name: 'SELECTSYNCH(IA)', days: ['-','-','-','0','-','7','-','-','-','-','10','-','0','-','10','-','30','60'], hours: Array(18).fill('08:00'), ia: '10', obs: 'Observar celo - IA 12 horas post celo estable' },
    { name: 'DIBVACAS(IA)', days: ['0','-','-','0','8','7','-','-','-','-','8','-','0','7','8','-','28','58'], hours: Array(18).fill('08:00'), ia: '8', obs: 'IA celo detectado + GnRh' },
    { name: 'DIBNOVILLAS(IA)', days: ['0','0','-','8','-','7','-','-','-','-','8','-','0','7','8','-','28','58'], hours: Array(18).fill('08:00'), ia: '8', obs: 'IA celo detectado + GnRh' },
    { name: 'DOBLEPGF2@(IA)', days: ['-','-','-','-','-','0','11','-','-','-','2','-','0','-','2','-','20','50'], hours: Array(18).fill('08:00'), ia: '2', obs: 'Observar celo 1-5 días IA 12 horas post celo estable' },
    { name: 'MM1(IA)', days: ['-','-','-','0','-','7','-','-','-','-','9','-','0','-','9','-','29','59'], hours: Array(18).fill('08:00'), ia: '9', obs: 'IA celo detectado 6 am a 5 pm' },
    { name: 'MM2(IA)', days: ['-','8','-','0','-','7','-','-','-','-','9','-','0','-','9','-','29','59'], hours: Array(18).fill('08:00'), ia: '9', obs: 'IA celo detectado 6 am a 5 pm' },
    { name: 'MMDIB(IA)', days: ['0','-','-','0','-','7','-','-','-','-','9','8','0','7','9','-','29','59'], hours: Array(18).fill('08:00'), ia: '9', obs: 'IA celo detectado 6 am a 5 pm' },
    { name: 'REC 1 (TE)', role: 'resx1', days: ['0','0','0','-','-','5','-','-','5','-','10','5','0','5','18','10','18','48'], hours: Array(18).fill('08:00'), ia: '18', obs: 'Transferencia de Embriones' },
    { name: 'REC 2 (TE)', role: 'resx2', days: ['0','0','-','-','-','8','-','-','8','9','9','8','0','8','17','9','17','47'], hours: Array(18).fill('08:00'), ia: '17', obs: 'Transferencia de Embriones' },
    { name: 'REC 1 (IATF)', role: 'resx1b', days: ['32','32','-','42','-','40','-','-','40','41','42','40','32','40','42','-','62','92'], hours: Array(18).fill('08:00'), ia: '42', obs: 'DIB día 32. Inseminar día 42.' },
    { name: 'REC 2 (IATF)', role: 'resx2b', days: ['64','64','-','74','-','72','-','-','72','73','74','72','64','72','74','-','94','124'], hours: Array(18).fill('08:00'), ia: '74', obs: 'Re-sincronización tras Dx2. Inseminar día 74.' }
  ],
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
      opt.innerText = p.name;
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

// 2. MATRIZ
let isMatrixUnlocked = false;

function renderMatriz() {
  const tbody = document.getElementById('tc-matriz-body');
  if(!tbody) return;
  tbody.innerHTML = '';
  const thAcciones = document.getElementById('th-acciones');
  if(thAcciones) thAcciones.style.display = isMatrixUnlocked ? 'table-cell' : 'none';

  state.matriz.forEach((protocol, rowIdx) => {
    let tr = document.createElement('tr');
    
    // 1. Nombre (Col 1)
    let nameHtml = isMatrixUnlocked 
      ? `<input type="text" class="cell-input matrix-nav" data-row="${rowIdx}" data-col="0" style="width:140px; text-align:left; background: var(--bg-input);" value="${protocol.name}" onchange="updateRowName(${rowIdx}, this.value)">`
      : `<span style="font-weight: 500; font-size: 0.85rem;">${protocol.name}</span>`;
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
    tr.innerHTML += `<td><input type="text" class="cell-input matrix-nav" data-row="${rowIdx}" data-col="19" style="width:200px; text-align:left;" value="${protocol.obs || ''}" ${isMatrixUnlocked ? '' : 'disabled style="border-color:transparent; background:transparent; opacity:1;"'} onchange="updateRowObs(${rowIdx}, this.value)"></td>`;
    
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
    alert("Este protocolo de resincronización es vital para el sistema y no se puede eliminar.");
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
    document.getElementById('btn-unlock').style.display = 'none';
    document.getElementById('btn-reset-matriz').style.display = 'inline-flex';
    document.getElementById('btn-save-matriz').style.display = 'inline-flex';
    document.getElementById('lbl-matriz-instruccion').innerText = "Modo Edición Activo. Puedes añadir, modificar o eliminar protocolos.";
    renderMatriz();
  } else {
    if(pass !== null) alert("Contraseña incorrecta.");
  }
}

window.irAEditarMatriz = function() {
  const container = document.getElementById('matriz-container');
  const btnToggle = document.getElementById('btn-toggle-protocolos');
  
  // Mostrar la sección si está oculta
  if(container.style.display === 'none') {
    container.style.display = 'block';
    btnToggle.innerHTML = '<i data-lucide="eye-off"></i> Ocultar Protocolos';
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
    state.matriz = [
      { name: 'TRADICIONAL(IATF)', days: ['0','0','-','10','-','8','-','-','8','9','10','8','0','8','10','-','30','60'], hours: Array(18).fill('08:00'), ia: '10', obs: 'IATF 48-60 hs / GnRh Opcional' },
      { name: 'JSYNCH(IATF)', days: ['0','0','-','9','-','6','-','-','6','-','9','6','0','6','9','-','28','58'], hours: Array(18).fill('08:00'), ia: '9', obs: 'IATF 72 hs + GnRh' },
      { name: 'NOVILLAS(IATF)', days: ['0','0','9','-','-','8','-','-','8','-','10','8','0','8','10','-','30','60'], hours: Array(18).fill('08:00'), ia: '10', obs: 'IATF 24-32 horas' },
      { name: 'OVSYNCH(IATF)', days: ['-','-','-','0','9','7','-','-','-','-','10','-','0','-','10','-','30','60'], hours: Array(18).fill('08:00'), ia: '10', obs: 'IATF 12-24 horas post GnRh' },
      { name: 'COSYNCH(IATF)', days: ['-','-','-','0','9','7','-','-','-','-','9','-','0','-','9','-','30','60'], hours: Array(18).fill('08:00'), ia: '9', obs: 'IATF 48 horas + GnRh' },
      { name: 'HEATSYNCH(IATF)', days: ['-','8','-','0','-','7','-','-','-','-','10','-','0','-','10','-','30','60'], hours: Array(18).fill('08:00'), ia: '10', obs: 'IATF 48-52 horas post' },
      { name: 'PRESYNCH(IA)', days: ['-','-','-','0','9','-26','-12','0','-','-','10','-','0','-','10','-','30','60'], hours: Array(18).fill('08:00'), ia: '10', obs: 'Observar celo - IA 12 horas post celo estable' },
      { name: 'SELECTSYNCH(IA)', days: ['-','-','-','0','-','7','-','-','-','-','10','-','0','-','10','-','30','60'], hours: Array(18).fill('08:00'), ia: '10', obs: 'Observar celo - IA 12 horas post celo estable' },
      { name: 'DIBVACAS(IA)', days: ['0','-','-','0','8','7','-','-','-','-','8','-','0','7','8','-','28','58'], hours: Array(18).fill('08:00'), ia: '8', obs: 'IA celo detectado + GnRh' },
      { name: 'DIBNOVILLAS(IA)', days: ['0','0','-','8','-','7','-','-','-','-','8','-','0','7','8','-','28','58'], hours: Array(18).fill('08:00'), ia: '8', obs: 'IA celo detectado + GnRh' },
      { name: 'DOBLEPGF2@(IA)', days: ['-','-','-','-','-','0','11','-','-','-','2','-','0','-','2','-','20','50'], hours: Array(18).fill('08:00'), ia: '2', obs: 'Observar celo 1-5 días IA 12 horas post celo estable' },
      { name: 'MM1(IA)', days: ['-','-','-','0','-','7','-','-','-','-','9','-','0','-','9','-','29','59'], hours: Array(18).fill('08:00'), ia: '9', obs: 'IA celo detectado 6 am a 5 pm' },
      { name: 'MM2(IA)', days: ['-','8','-','0','-','7','-','-','-','-','9','-','0','-','9','-','29','59'], hours: Array(18).fill('08:00'), ia: '9', obs: 'IA celo detectado 6 am a 5 pm' },
      { name: 'MMDIB(IA)', days: ['0','-','-','0','-','7','-','-','-','-','9','8','0','7','9','-','29','59'], hours: Array(18).fill('08:00'), ia: '9', obs: 'IA celo detectado 6 am a 5 pm' },
      { name: 'REC 1 (TE)', role: 'resx1', days: ['0','0','0','-','-','5','-','-','5','-','10','5','0','5','18','10','18','48'], hours: Array(18).fill('08:00'), ia: '18', obs: 'Transferencia de Embriones' },
      { name: 'REC 2 (TE)', role: 'resx2', days: ['0','0','-','-','-','8','-','-','8','9','9','8','0','8','17','9','17','47'], hours: Array(18).fill('08:00'), ia: '17', obs: 'Transferencia de Embriones' },
      { name: 'REC 1 (IATF)', role: 'resx1b', days: ['32','32','-','42','-','40','-','-','40','41','42','40','32','40','42','-','62','92'], hours: Array(18).fill('08:00'), ia: '42', obs: 'DIB día 32. Inseminar día 42.' },
      { name: 'REC 2 (IATF)', role: 'resx2b', days: ['64','64','-','74','-','72','-','-','72','73','74','72','64','72','74','-','94','124'], hours: Array(18).fill('08:00'), ia: '74', obs: 'Re-sincronización tras Dx2. Inseminar día 74.' }
    ];
    renderMatriz(); saveState(); alert("Protocolos base restaurados correctamente.");
  }
}

window.guardarMatrizProtocolos = function() {
  isMatrixUnlocked = false;
  document.getElementById('btn-unlock').style.display = 'inline-flex';
  document.getElementById('btn-reset-matriz').style.display = 'none';
  document.getElementById('btn-save-matriz').style.display = 'none';
  document.getElementById('lbl-matriz-instruccion').innerText = "Modo Consulta. Haz clic en \"EDITAR\" para modificar.";
  renderMatriz(); 
  saveState();
  alert("Cambios guardados con éxito.");
}

window.updateRowName = function(r, val) { 
  if (!isMatrixUnlocked) return;
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
    btn.innerHTML = '<i data-lucide="eye-off"></i> Ocultar Protocolos';
    btn.style.background = 'var(--danger)';
    btn.style.borderColor = 'rgba(239, 68, 68, 0.4)';
    btn.style.color = '#ffffff';
    renderMatriz();
  } else {
    container.style.display = 'none';
    btn.innerHTML = '<i data-lucide="eye"></i> Mostrar Protocolos Base';
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
  if(!protocol) { alert("Selecciona un protocolo válido."); return; }
  
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
            <td colspan="5" style="text-align: right; padding: 0.75rem 1rem; color: var(--accent); font-size: 0.85rem;" data-i18n="modal_total_hormonas">TOTAL COMPRA HORMONAS:</td>
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
  if (modalContext === 'pi') { ejecutarProtocoloInicial(); renderMatriz(); }
  else if (modalContext === 'resx1') { ejecutarResx1(); }
  else if (modalContext === 'resx2') { ejecutarResx2(); }
  
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
    state.activeList.push({ colId: 'ia_event', dayOffset: parseInt(protocol.ia), hour: protocol.ia_hour || '16:00' });
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
            <i data-lucide="award"></i> ${protocol.name}
          </div>
          <div style="display: flex; gap: 2rem; font-size: 0.95rem; color: var(--text-main); font-weight: 600;">
            <span><i data-lucide="calendar"></i> Inicio: ${fBase.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span><i data-lucide="activity" style="color:var(--accent);"></i> Inseminar: Día ${protocol.ia} (${sumDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })})</span>
          </div>
          <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed rgba(255,255,255,0.1); color: var(--text-muted); font-size: 0.9rem;">
            <i data-lucide="message-circle" style="width:16px;"></i> <strong>Obs:</strong> ${protocol.obs || 'Protocolo estándar.'}
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

  const langCode = window.currentLang === 'en' ? 'en-US' : 'es-ES';

  state.activeList.forEach(row => {
    const dDate = new Date(fBase); dDate.setDate(dDate.getDate() + row.dayOffset);
    const rowHour = row.hour || hBase;
    
    if (row.colId === 'ia_event') {
        htmlRows += `
          <tr style="background: rgba(14, 165, 233, 0.15); border-left: 4px solid var(--accent);">
            <td style="text-align:center;"><strong>${row.dayOffset}</strong> <span class="badge" style="background:var(--accent); color:#fff; font-size:0.6rem; margin-left:4px;">IA/TE</span></td>
            <td>${dDate.toLocaleDateString(langCode, { weekday: 'short', day: 'numeric', month: 'short' })}</td>
            <td style="text-align:center;"><strong>${rowHour}</strong></td>
            <td colspan="5"><strong style="color: var(--accent); font-size: 1.05rem;"><i data-lucide="activity"></i> ${t('act_ia')}</strong></td>
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
    
    gComp += comp; gAplic += aplic; gTotalPorVaca += costoDosis;
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
            <td>${dDate.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' })}</td>
            <td style="text-align:center;"><strong>${rowHour}</strong></td>
            <td colspan="5" style="text-align:left; padding-left: 1rem;"><i>⚡ Obs: IATF 48-60 hs post PGF/eCG – GnRh opcional al momento de IA/TE</i></td>
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
  
  let message = "Hola, soy usuario de Iatf Pro.";
  if (userText) {
    message += " " + userText;
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
      
      if (Array.isArray(rawMatrix)) {
        // Migrar y sanitizar la matriz automáticamente
        state.matriz = rawMatrix.map(p => {
          const newDays = adaptarDiasProtocolo(p.days, p.ia);
          const newHours = adaptarHorasProtocolo(p.hours);
          return Object.assign({}, p, { days: newDays, hours: newHours });
        });

        // MIGRACIÓN: asignar campo role y renombrar protocolos que aún no lo tienen o tienen nombres obsoletos
        let resx1Count = 0, resx2Count = 0;
        state.matriz.forEach(p => {
          if (!p.role) {
            const isSmallRec1 = p.ia === '18' && p.days[0] === '0' && p.days[14] === '18';
            const isSmallRec2 = p.ia === '17' && p.days[0] === '0' && p.days[14] === '17';
            const isBigRec1   = p.ia === '42' && p.days[0] === '32';
            const isBigRec2   = p.ia === '74' && p.days[0] === '64';
            if (isSmallRec1)        { p.role = 'resx1';  p.name = 'REC 1 (TE)'; resx1Count++; }
            else if (isSmallRec2)   { p.role = 'resx2';  p.name = 'REC 2 (TE)'; resx2Count++; }
            else if (isBigRec1)     { p.role = 'resx1b'; p.name = 'REC 1 (IATF)'; }
            else if (isBigRec2)     { p.role = 'resx2b'; p.name = 'REC 2 (IATF)'; }
          } else {
            // Auto-renombrar si tienen nombres antiguos "REC 1" o "REC 2" para que sean distintos
            if (p.role === 'resx1' && p.name === 'REC 1') p.name = 'REC 1 (TE)';
            if (p.role === 'resx2' && p.name === 'REC 2') p.name = 'REC 2 (TE)';
            if (p.role === 'resx1b' && p.name === 'REC 1') p.name = 'REC 1 (IATF)';
            if (p.role === 'resx2b' && p.name === 'REC 2') p.name = 'REC 2 (IATF)';

            if (window.isResx1(p)) resx1Count++;
            if (window.isResx2(p)) resx2Count++;
          }
        });

        // DEDUPLICACIÓN: eliminar entradas duplicadas con el mismo role
        const seenRoles = {};
        state.matriz = state.matriz.filter(p => {
          if (!p.role) return true;
          if (seenRoles[p.role]) return false;
          seenRoles[p.role] = true;
          return true;
        });

      } else {
        console.warn("Detectada matriz con estructura antigua o no válida. Manteniendo matriz por defecto.");
      }
      
      // ASEGURAR que existan protocolos para ReSx (identificados por campo role, NO por nombre)
      const hasResx1 = window.getResx1(state.matriz);
      if (!hasResx1) {
         state.matriz.push({ name: 'REC 1 (TE)', role: 'resx1', days: ['0','0','0','-','-','5','-','-','5','-','10','5','0','5','18','10','18','48'], hours: Array(18).fill('08:00'), ia: '18', obs: 'Transferencia de Embriones' });
      }
      const hasResx2 = window.getResx2(state.matriz);
      if (!hasResx2) {
         state.matriz.push({ name: 'REC 2 (TE)', role: 'resx2', days: ['0','0','-','-','-','8','-','-','8','9','9','8','0','8','17','9','17','47'], hours: Array(18).fill('08:00'), ia: '17', obs: 'Transferencia de Embriones' });
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
    resx1Rows.push({ colId: 'ia_event', dayOffset: parseInt(protocol.ia), hour: protocol.ia_hour || '16:00' });
  }
  
  resx1Rows.sort((a,b) => {
    if (a.dayOffset !== b.dayOffset) return a.dayOffset - b.dayOffset;
    return a.hour.localeCompare(b.hour);
  });

  const langCode = window.currentLang === 'en' ? 'en-US' : 'es-ES';

  resx1Rows.forEach(row => {
    const dDate = new Date(fBase); dDate.setDate(fBase.getDate() + row.dayOffset);
    const rowHour = row.hour || hBase;
    
    if (row.colId === 'ia_event') {
        htmlRows += `
          <tr style="background: rgba(14, 165, 233, 0.15); border-left: 4px solid var(--accent);">
            <td><strong>${row.dayOffset}</strong> <span class="badge" style="background:var(--accent); color:#fff; font-size:0.6rem; margin-left:4px;">IA/TE</span></td>
            <td>${dDate.toLocaleDateString(langCode, { weekday: 'short', day: 'numeric', month: 'short' })}</td>
            <td style="text-align:center;"><strong>${rowHour}</strong></td>
            <td colspan="3"><strong style="color: var(--accent); font-size: 1.05rem;"><i data-lucide="activity"></i> ${t('act_ia')}</strong></td>
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
    const langCode = window.currentLang === 'en' ? 'en-US' : 'es-ES';
    const sumDate = new Date(fBase); sumDate.setDate(fBase.getDate() + (parseInt(protocol.ia) || 0));
    document.getElementById('resx1-ia-info').innerHTML = `
      <div style="flex: 1;">
        <div style="font-weight: 800; font-size: 1.1rem; color: var(--accent); margin-bottom: 4px;">${protocol.name}</div>
        <div style="display: flex; gap: 1.5rem; font-size: 0.85rem; color: var(--text-muted);">
          <span><i data-lucide="calendar"></i> ${window.currentLang === 'en' ? 'Planned Start' : 'Inicio Programado'}: ${fBase.toLocaleDateString(langCode, { day: 'numeric', month: 'long' })}</span>
          <span><i data-lucide="activity"></i> IA/TE: Day ${protocol.ia} (${sumDate.toLocaleDateString(langCode, { day: 'numeric', month: 'long' })})</span>
        </div>
        <div style="margin-top: 8px; font-style: italic; color: var(--text-main);"><i data-lucide="message-square" style="width:14px;"></i> ${t('obs_label')} ${protocol.obs || 'S/O'}</div>
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
  document.getElementById('resx1-porcentaje').innerText = Math.round(porc);
  
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
    resx2Rows.push({ colId: 'ia_event', dayOffset: parseInt(protocol.ia), hour: protocol.ia_hour || '16:00' });
  }
  
  resx2Rows.sort((a,b) => {
    if (a.dayOffset !== b.dayOffset) return a.dayOffset - b.dayOffset;
    return a.hour.localeCompare(b.hour);
  });

  const langCode = window.currentLang === 'en' ? 'en-US' : 'es-ES';

  resx2Rows.forEach(row => {
    const dDate = new Date(fBase); dDate.setDate(fBase.getDate() + row.dayOffset);
    const rowHour = row.hour || hBase;
    
    if (row.colId === 'ia_event') {
        htmlRows += `
          <tr style="background: rgba(168, 85, 247, 0.15); border-left: 4px solid #a855f7;">
            <td><strong>${row.dayOffset}</strong> <span class="badge" style="background:#a855f7; color:#fff; font-size:0.6rem; margin-left:4px;">IA/TE</span></td>
            <td>${dDate.toLocaleDateString(langCode, { weekday: 'short', day: 'numeric', month: 'short' })}</td>
            <td style="text-align:center;"><strong>${rowHour}</strong></td>
            <td colspan="3"><strong style="color: #a855f7; font-size: 1.05rem;"><i data-lucide="activity"></i> ${t('act_ia')}</strong></td>
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
    const langCode = window.currentLang === 'en' ? 'en-US' : 'es-ES';
    const sumDate = new Date(fBase); sumDate.setDate(fBase.getDate() + (parseInt(protocol.ia) || 0));
    document.getElementById('resx2-ia-info').innerHTML = `
      <div style="flex: 1;">
        <div style="font-weight: 800; font-size: 1.1rem; color: #a855f7; margin-bottom: 4px;">${protocol.name}</div>
        <div style="display: flex; gap: 1.5rem; font-size: 0.85rem; color: var(--text-muted);">
          <span><i data-lucide="calendar"></i> ${window.currentLang === 'en' ? 'Planned Start' : 'Inicio Programado'}: ${fBase.toLocaleDateString(langCode, { day: 'numeric', month: 'long' })}</span>
          <span><i data-lucide="activity"></i> IA/TE: Day ${protocol.ia} (${sumDate.toLocaleDateString(langCode, { day: 'numeric', month: 'long' })})</span>
        </div>
        <div style="margin-top: 8px; font-style: italic; color: var(--text-main);"><i data-lucide="message-square" style="width:14px;"></i> ${t('obs_label')} ${protocol.obs || 'S/O'}</div>
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
  document.getElementById('resx2-porcentaje').innerText = Math.round(porc);
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
      if(lblF) lblF.innerText = fBase.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
    } else if(lblF) {
      lblF.innerText = fBase.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
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
      if(lblF2) lblF2.innerText = fBase.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
    } else if(lblF2) {
      lblF2.innerText = fBase.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
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
      alert("Hubo un error actualizando el calendario: " + error.message);
    }
  }, 100);
}

window.resetPantallaPI = function() {
  if(!confirm("¿Deseas BORRAR TODOS los datos del proyecto actual? Esta acción no se puede deshacer.")) return;
  
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
  if(btnPI) { btnPI.innerHTML = '<i data-lucide="eye"></i> MOSTRAR PROTOCOLO'; btnPI.classList.remove('active-toggle'); }
  const btnReSx1 = document.getElementById('btn-toggle-resx1');
  if(btnReSx1) { btnReSx1.innerHTML = '<i data-lucide="eye"></i> MOSTRAR PROTOCOLO RESX1'; btnReSx1.classList.remove('active-toggle'); }
  const btnReSx2 = document.getElementById('btn-toggle-resx2');
  if(btnReSx2) { btnReSx2.innerHTML = '<i data-lucide="eye"></i> MOSTRAR PROTOCOLO RESX2'; btnReSx2.classList.remove('active-toggle'); }

  lucide.createIcons();
  saveState();
  updateResultados();
  alert("Todos los datos del proyecto han sido borrados correctamente.");
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
      alert("Por favor, completa al menos Nombre, Identificación y Teléfono.");
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
    document.getElementById('reg-nombre').value = perfilEncontrado.nombre || "";
    document.getElementById('reg-pais').value = perfilEncontrado.pais || "Colombia";
    document.getElementById('reg-movil').value = perfilEncontrado.movil || "";
    document.getElementById('reg-email').value = perfilEncontrado.email || "";
    
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
      if(document.getElementById('reg-nit')) document.getElementById('reg-nit').value = perfil.nit || "";
      if(document.getElementById('reg-nombre')) document.getElementById('reg-nombre').value = perfil.nombre || "";
      if(document.getElementById('reg-pais')) document.getElementById('reg-pais').value = perfil.pais || "Colombia";
      if(document.getElementById('reg-movil')) document.getElementById('reg-movil').value = perfil.movil || "";
      if(document.getElementById('reg-email')) document.getElementById('reg-email').value = perfil.email || "";

      if(sidebarConsultor) {
        sidebarConsultor.innerText = perfil.nombre.toUpperCase();
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
      <span style="color: var(--accent); opacity: 0.9;">Retorno: ${fRetorno.toLocaleDateString('es-ES', {month:'short', year:'numeric'}).toUpperCase()}</span>
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
    const langCode = window.currentLang === 'en' ? 'en-US' : 'es-ES';
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
        <th style="text-align: left;">Concepto</th>
        <th>PI</th>
        <th>ReSx1</th>
        <th>ReSx2</th>
        <th style="color: var(--accent);">Consolidado</th>
      </tr>
    `;
  }

  const tbody = document.getElementById('res-body-roi');
  if (tbody) {
    tbody.innerHTML = `
      <tr>
        <td style="text-align:left;">Inversión por Fase</td>
        <td>${piAnim > 0 ? formatter.format(piCost) : '-'}</td>
        <td>${hasR1 ? formatter.format(r1Cost) : '-'}</td>
        <td>${hasR2 ? formatter.format(r2Cost) : '-'}</td>
        <td><strong>${formatter.format(totalInv)}</strong></td>
      </tr>
      <tr>
        <td style="text-align:left;">Animales en Fase</td>
        <td>${piAnim > 0 ? piAnim : '-'}</td>
        <td>${hasR1 ? r1Anim : '-'}</td>
        <td>${hasR2 ? r2Anim : '-'}</td>
        <td>-</td>
      </tr>
      <tr>
        <td style="text-align:left;">Preñeces Logradas</td>
        <td>${piAnim > 0 ? piPren : '-'}</td>
        <td>${hasR1 ? r1Pren : '-'}</td>
        <td>${hasR2 ? r2Pren : '-'}</td>
        <td><strong>${totalPren}</strong></td>
      </tr>
      <tr>
        <td style="text-align:left;">Inversión Perdida (Vacías)</td>
        <td>${piAnim > 0 ? formatter.format((piAnim - piPren) * (piCost / piAnim)) : '-'}</td>
        <td>${hasR1 ? formatter.format((r1Anim - r1Pren) * (r1Cost / r1Anim)) : '-'}</td>
        <td>${hasR2 ? formatter.format((r2Anim - r2Pren) * (r2Cost / r2Anim)) : '-'}</td>
        <td><strong style="color:var(--danger);">${formatter.format( (piAnim > 0 ? (piAnim - piPren) * (piCost / piAnim) : 0) + (hasR1 ? (r1Anim - r1Pren) * (r1Cost / r1Anim) : 0) + (hasR2 ? (r2Anim - r2Pren) * (r2Cost / r2Anim) : 0) )}</strong></td>
      </tr>
      <tr>
        <td style="text-align:left;">Costo/Preñez en Fase</td>
        <td>${piPren > 0 ? formatter.format(piCost / piPren) : '-'}</td>
        <td>${(hasR1 && r1Pren > 0) ? formatter.format(r1Cost / r1Pren) : '-'}</td>
        <td>${(hasR2 && r2Pren > 0) ? formatter.format(r2Cost / r2Pren) : '-'}</td>
        <td><strong style="color: #f59e0b;">${formatter.format(totalCostPren)}</strong></td>
      </tr>
      <tr style="background: rgba(16, 185, 129, 0.1);">
        <td style="text-align:left;"><strong>RETORNO TOTAL PROYECTADO</strong></td>
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
        labels: ['Prot. Inicial', 'Resinc. 1', 'Resinc. 2'].filter((_, i) => [aPI > 0, aR1 > 0, aR2 > 0][i]),
        datasets: [{
          label: 'Preñeces',
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
              return `${val} preñeces (${porc}%)`;
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
      { lbl: 'Hormonas', val: cHormonas, col: '#ef4444' },
      { lbl: 'Genética', val: cGenetica, col: '#f59e0b' },
      { lbl: 'Asistencia Técnica', val: cAsistencia, col: '#a855f7' },
      { lbl: 'Honorarios IA/TE', val: cIate, col: '#ec4899' },
      { lbl: 'Dx Preñez', val: cDiagnostico, col: '#0ea5e9' }
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
        labels: ['Ingreso Neto', 'Inversión Total'],
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
          ctx.fillText('BRUTO', centerX, centerY - 15);
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
        labels: ['Bruto', 'Inv.', 'Neto'],
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
    alert("⚠️ No hay datos suficientes para exportar. Selecciona un protocolo y genera el cronograma primero.");
    return;
  }

  // Array de arrays para SheetJS
  let data = [];
  
  // Título Principal
  data.push(["REPORTE INTEGRAL DE INVERSIÓN - IATF PRO BY SOLUGAN SG"]);
  data.push(["Fecha Reporte:", new Date().toLocaleDateString()]);
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
    data.push(["Categoría", "Protocolo Inicial", "ReSx1", "ReSx2", "Total Proyecto"]);
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
    data.push(["DETALLE: RESINCRONIZACIÓN 1 (ReSx1)"]);
    data.push(["Protocolo:", document.getElementById('resx1-protocolo').value, "Fecha Inicio:", document.getElementById('resx1-fecha').value, "Animales:", document.getElementById('resx1-animales').value]);
    const r1Rows = extractToAOA('tc-resx1-body', ["Día", "Fecha", "Hora", "Hormona / Insumo", "Dosis", "Valor Unitario"]);
    data = data.concat(r1Rows);
    data.push(["", "", "", "", "TOTAL RESX1:", document.getElementById('resx1-total-footer')?.innerText || '0']);
    data.push([]);
  }

  // --- 5. RESINCRO 2 ---
  const resx2Res = document.getElementById('resx2-resultados');
  if (resx2Res && resx2Res.style.display !== 'none') {
    data.push(["DETALLE: RESINCRONIZACIÓN 2 (ReSx2)"]);
    data.push(["Protocolo:", document.getElementById('resx2-protocolo').value, "Fecha Inicio:", document.getElementById('resx2-fecha').value, "Animales:", document.getElementById('resx2-animales').value]);
    const r2Rows = extractToAOA('tc-resx2-body', ["Día", "Fecha", "Hora", "Hormona / Insumo", "Dosis", "Valor Unitario"]);
    data = data.concat(r2Rows);
    data.push(["", "", "", "", "TOTAL RESX2:", document.getElementById('resx2-total-footer')?.innerText || '0']);
    data.push([]);
  }

  // Crear libro y hoja
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(data);
  
  // Ajustar anchos de columna básicos
  ws['!cols'] = [{wch: 28}, {wch: 18}, {wch: 12}, {wch: 38}, {wch: 12}, {wch: 12}, {wch: 22}, {wch: 22}];

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

      // Fila 0: Título principal
      if (R === 0) {
        style.font = { name: "Arial", sz: 14, bold: true, color: { rgb: "FFFFFF" } };
        style.fill = { fgColor: { rgb: "0F4C81" } };
        style.alignment = { horizontal: "center", vertical: "center" };
        if(!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: {r:0, c:0}, e: {r:0, c:7} });
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
  
  // Obtener datos del consultor
  const perfil = JSON.parse(localStorage.getItem('reprocost_perfil_consultor')) || {};
  const nit = perfil.nit || 'N/A';
  const pais = perfil.pais || '';
  const movil = (perfil.movil || '').replace(/\s+/g, '');
  
  const totP = document.getElementById('res-total-preneces')?.innerText || '0';
  const inv = document.getElementById('res-total-inversion')?.innerText || '$ 0';
  const cPrenez = document.getElementById('res-costo-prenez')?.innerText || '$ 0';
  
  const usuarioStr = perfil.nombre ? `\n👤 *Usuario:* ${perfil.nombre}` : '';
  const nitStr = perfil.nit ? `\n🆔 *NIT/CC:* ${perfil.nit}` : '';

  const isEn = window.currentLang === 'en';
  let msg = isEn ? `*EXECUTIVE SUMMARY - IATF PRO BY SOLUGAN SG*\n\n` : `*RESUMEN EJECUTIVO - IATF PRO BY SOLUGAN SG*\n\n`;
  msg += `📍 *${isEn ? 'Farm' : 'Finca'}:* ${finca}\n`;
  msg += `📋 *${isEn ? 'Protocol' : 'Protocolo'}:* ${pName}${usuarioStr}${nitStr}\n\n`;
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
  const perfilStr = localStorage.getItem('reprocost_perfil');
  let nitValue = perfilStr ? (JSON.parse(perfilStr).nit || 'N/A') : 'N/A';
  if (nitValue === 'N/A') {
    nitValue = prompt("Para poder buscar este reporte después, por favor ingresa tu NIT:");
    if (!nitValue || nitValue.trim() === '') {
      alert("Operación cancelada. El NIT es necesario para guardar el reporte.");
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
  
  alert("✅ ¡Éxito! El reporte ha sido guardado en el historial. Ahora podrás buscarlo por NIT cuando lo necesites.");
};

window.buscarPorNit = function() {
  const term = document.getElementById('search-nit').value.trim();
  if (!term) {
    alert("Por favor ingresa un NIT para buscar.");
    return;
  }

  const historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
  const filtrados = historial.filter(r => String(r.nit || '').includes(term));

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
            <i data-lucide="eye" style="width:12px; height:12px;"></i> CARGAR
          </button>
          <button class="btn btn-secondary" onclick="exportarExcelDesdeHistorial(${r.id})" style="padding: 4px 10px; font-size: 0.75rem; background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid #10b981; margin-right: 5px;">
            <i data-lucide="file-spreadsheet" style="width:12px; height:12px;"></i> EXCEL
          </button>
          <button class="btn btn-danger" onclick="eliminarDeHistorial(${r.id})" style="padding: 4px 10px; font-size: 0.75rem; background: rgba(239, 68, 68, 0.1); color: var(--danger); border: 1px solid var(--danger);">
            <i data-lucide="trash-2" style="width:12px; height:12px;"></i> ELIMINAR
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
      <p>No se encontraron registros para el NIT: <strong>${term}</strong></p>
    `;
    lucide.createIcons();
  }
};

window.cargarDeHistorial = function(id) {
  const historial = JSON.parse(localStorage.getItem('reprocost_historial')) || [];
  const record = historial.find(r => r.id === id);
  if (!record) return;

  if (confirm(`¿Deseas cargar el reporte de la finca "${record.finca}" realizado el ${record.fecha}?\n\nNota: Esto reemplazará los datos actuales en pantalla.`)) {
    // Preservar la última versión de los protocolos al cargar un reporte antiguo
    const latestMatrixStr = localStorage.getItem('reprocost_custom_matriz');
    const newState = Object.assign({}, record.state);
    if (latestMatrixStr) {
      try {
        const parsedMatrix = JSON.parse(latestMatrixStr);
        if (Array.isArray(parsedMatrix)) {
          newState.matriz = parsedMatrix.map(p => {
            const newDays = adaptarDiasProtocolo(p.days, p.ia);
            const newHours = adaptarHorasProtocolo(p.hours);
            return Object.assign({}, p, { days: newDays, hours: newHours });
          });
        }
      } catch(e) {}
    }
    localStorage.setItem('reprocost_state', JSON.stringify(newState));
    location.reload(); 
  }
};

window.eliminarDeHistorial = function(id) {
  if (confirm("¿Estás seguro de que deseas eliminar este registro del historial permanentemente?")) {
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
        tempState.matriz = parsedMatrix.map(p => {
          const newDays = adaptarDiasProtocolo(p.days, p.ia);
          const newHours = adaptarHorasProtocolo(p.hours);
          return Object.assign({}, p, { days: newDays, hours: newHours });
        });
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
        tempState.matriz = parsedMatrix.map(p => {
          const newDays = adaptarDiasProtocolo(p.days, p.ia);
          const newHours = adaptarHorasProtocolo(p.hours);
          return Object.assign({}, p, { days: newDays, hours: newHours });
        });
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


