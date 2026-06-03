const fs = require('fs');
let code = fs.readFileSync('iatf-app.js', 'utf8');

const strToRemove = `}</th>\`;
    });
  } else {
    // Fallback if empty (should never happen if default is loaded)
    for (let i = 0; i < state.colDefs.length; i++) {
      trHead.innerHTML += \`<th>Col \${i+1}</th>\`;
    }
  }

  // Agregar columnas finales fijas
  trHead.innerHTML += \`
    <th style="padding: 4px; font-size: 0.75rem; min-width: 280px;">Observaciones</th>
    <th id="th-acciones" style="display: none; background: #ef4444; color:#fff;">Acciones</th>
  \`;
}`;

code = code.replace(strToRemove, "");

fs.writeFileSync('iatf-app.js', code, 'utf8');
console.log('Cleanup applied');
