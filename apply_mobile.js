const fs = require('fs');

// 1. Update index.html to add bottom nav
let html = fs.readFileSync('index.html', 'utf8');
const bottomNavHtml = `
      <!-- Barra de Navegación Inferior (Móvil) -->
      <nav class="mobile-bottom-nav" style="display: none;">
        <button class="nav-btn-bottom active" data-target="tablero-control">
          <i data-lucide="settings"></i>
          <span data-i18n="sidebar_dashboard">Tablero</span>
        </button>
        <button class="nav-btn-bottom" data-target="protocolo-inicial">
          <i data-lucide="calendar"></i>
          <span data-i18n="sidebar_pi">Inicial</span>
        </button>
        <button class="nav-btn-bottom" data-target="resincronizacion1">
          <i data-lucide="refresh-cw"></i>
          <span data-i18n="sidebar_resx1">Resinc 1</span>
        </button>
        <button class="nav-btn-bottom" data-target="dashboard">
          <i data-lucide="layout-dashboard"></i>
          <span data-i18n="sidebar_dash_roi">ROI</span>
        </button>
        <button class="nav-btn-bottom mobile-menu-trigger" onclick="toggleSidebar()">
          <i data-lucide="menu"></i>
          <span>Menú</span>
        </button>
      </nav>
`;

if (!html.includes('mobile-bottom-nav')) {
  // Insert before closing main-content or body
  html = html.replace('</main>', bottomNavHtml + '\n    </main>');
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Added bottom nav to index.html');
}

// 2. Add Mobile CSS to style.css
let css = fs.readFileSync('style.css', 'utf8');
const mobileCSS = `
/* --- MEJORAS VISUALES MÓVIL PREMIUM --- */
@media (max-width: 900px) {
  /* Bottom Navigation Bar */
  .mobile-bottom-nav {
    display: flex !important;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    background: rgba(15, 23, 42, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid var(--glass-border);
    z-index: 95;
    padding: 0.5rem 0.25rem;
    padding-bottom: calc(0.5rem + env(safe-area-inset-bottom, 0px));
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.5);
  }
  
  .nav-btn-bottom {
    background: transparent;
    border: none;
    color: var(--text-muted);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 0.65rem;
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  .nav-btn-bottom i, .nav-btn-bottom svg {
    width: 24px !important;
    height: 24px !important;
  }
  
  .nav-btn-bottom.active {
    color: var(--accent);
  }
  
  .nav-btn-bottom.active i, .nav-btn-bottom.active svg {
    filter: drop-shadow(0 0 5px var(--accent-glow));
  }
  
  /* Main content padding for bottom nav */
  .main-content {
    padding-bottom: 90px !important; /* Espacio para la barra inferior */
  }

  /* Transformar Tablas a Tarjetas (Responsive Cards) */
  .data-table, .data-table tbody, .data-table tr, .data-table td {
    display: block;
    width: 100%;
  }

  .data-table thead, .data-table th {
    display: none !important;
  }

  #tc-pi-body tr, #tc-resx1-body tr, #tc-resx2-body tr, #tc-matriz-body tr {
    display: flex;
    flex-direction: column;
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    margin-bottom: 1rem;
    padding: 1rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }

  .data-table td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0 !important;
    border-bottom: 1px dashed rgba(255,255,255,0.1) !important;
    text-align: right !important;
    min-height: auto !important;
  }

  .data-table td:last-child {
    border-bottom: none !important;
  }

  /* Mostrar la etiqueta de la cabecera usando ::before */
  .data-table td::before {
    content: attr(data-label);
    font-weight: 700;
    color: var(--text-muted);
    font-size: 0.75rem;
    text-transform: uppercase;
    text-align: left;
    margin-right: 1rem;
    flex-shrink: 0;
  }
  
  .data-table td input.cell-input {
    text-align: right;
  }

  /* Modales a 100% y deslizables */
  .modal-content {
    width: 100% !important;
    height: auto !important;
    max-height: 90vh !important;
    border-radius: 20px 20px 0 0 !important;
    margin: auto 0 0 0 !important; /* Bottom sheet style */
    position: absolute;
    bottom: 0;
    animation: slideUp 0.3s ease-out forwards !important;
    overflow-y: auto;
  }

  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  /* Touch Spinners más grandes */
  .spin-btn {
    width: 50px !important;
    height: 50px !important;
    font-size: 1.5rem !important;
  }
  .spinner-wrap input {
    font-size: 1.25rem !important;
  }
}
`;

if (!css.includes('/* --- MEJORAS VISUALES MÓVIL PREMIUM --- */')) {
  fs.appendFileSync('style.css', '\n' + mobileCSS, 'utf8');
  console.log('Appended mobile premium CSS to style.css');
}
