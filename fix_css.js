const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const marker = '/* --- MEJORAS VISUALES MÓVIL PREMIUM --- */';
const index = css.indexOf(marker);

if (index !== -1) {
  css = css.substring(0, index).trim();
}

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
    border-top: 1px solid rgba(255, 255, 255, 0.05);
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
    font-family: inherit;
    font-weight: 600;
  }
  
  .nav-btn-bottom i, .nav-btn-bottom svg {
    width: 22px !important;
    height: 22px !important;
    margin-bottom: 2px;
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

  /* Transformar Tablas de Resultados a Tarjetas (Responsive Cards) */
  #tc-pi-body, #tc-resx1-body, #tc-resx2-body {
    display: block;
    width: 100%;
  }

  #tc-pi-body tr, #tc-resx1-body tr, #tc-resx2-body tr {
    display: flex;
    flex-direction: column;
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    margin-bottom: 1rem;
    padding: 1rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }

  #tc-pi-body td, #tc-resx1-body td, #tc-resx2-body td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0 !important;
    border-bottom: 1px dashed rgba(255,255,255,0.1) !important;
    text-align: right !important;
    min-height: auto !important;
  }

  #tc-pi-body td:last-child, #tc-resx1-body td:last-child, #tc-resx2-body td:last-child {
    border-bottom: none !important;
  }

  /* Etiquetas generadas con nth-of-type para las 8 columnas estándar de PI/Resync */
  #tc-pi-body td::before, #tc-resx1-body td::before, #tc-resx2-body td::before {
    font-weight: 700;
    color: var(--text-muted);
    font-size: 0.75rem;
    text-transform: uppercase;
    text-align: left;
    margin-right: 1rem;
    flex-shrink: 0;
  }

  #tc-pi-body td:nth-of-type(1)::before, #tc-resx1-body td:nth-of-type(1)::before, #tc-resx2-body td:nth-of-type(1)::before { content: "Día"; }
  #tc-pi-body td:nth-of-type(2)::before, #tc-resx1-body td:nth-of-type(2)::before, #tc-resx2-body td:nth-of-type(2)::before { content: "Fecha"; }
  #tc-pi-body td:nth-of-type(3)::before, #tc-resx1-body td:nth-of-type(3)::before, #tc-resx2-body td:nth-of-type(3)::before { content: "Hora"; }
  #tc-pi-body td:nth-of-type(4)::before, #tc-resx1-body td:nth-of-type(4)::before, #tc-resx2-body td:nth-of-type(4)::before { content: "ACTIVIDAD / INSUMO"; }
  #tc-pi-body td:nth-of-type(5)::before, #tc-resx1-body td:nth-of-type(5)::before, #tc-resx2-body td:nth-of-type(5)::before { content: "DOSIS"; }
  #tc-pi-body td:nth-of-type(6)::before, #tc-resx1-body td:nth-of-type(6)::before, #tc-resx2-body td:nth-of-type(6)::before { content: "UND"; }
  #tc-pi-body td:nth-of-type(7)::before, #tc-resx1-body td:nth-of-type(7)::before, #tc-resx2-body td:nth-of-type(7)::before { content: "VALOR UNITARIO"; }
  #tc-pi-body td:nth-of-type(8)::before, #tc-resx1-body td:nth-of-type(8)::before, #tc-resx2-body td:nth-of-type(8)::before { content: "INVERSIÓN TOTAL"; }

  /* En el modo de edición de tabla (si tiene menos columnas o inputs), adaptar */
  #tc-pi-body td[colspan], #tc-resx1-body td[colspan], #tc-resx2-body td[colspan] {
    justify-content: center !important;
    text-align: center !important;
  }
  #tc-pi-body td[colspan]::before, #tc-resx1-body td[colspan]::before, #tc-resx2-body td[colspan]::before {
    display: none !important;
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

fs.writeFileSync('style.css', css + '\n\n' + mobileCSS, 'utf8');
console.log('Fixed style.css duplicates');
