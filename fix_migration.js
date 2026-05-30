const fs = require('fs');
const path = require('path');
const appPath = path.resolve(__dirname, 'app_core.js');

let content = fs.readFileSync(appPath, 'utf8');

const oldMigration = `              // MIGRACION UNICA FIREBASE USER DATA: Limpiar datos cacheados de usuarios de la versión vieja
              if (!localStorage.getItem('iatfpro_user_migrated_v260528_13')) {
                for (let k in state.insumos) {
                  state.insumos[k].def = 0;
                  state.insumos[k].resx1 = 0;
                  state.insumos[k].resx2 = 0;
                  if (['gen','retdib','mo1','mo2','opu','dx1','dx2','iate'].includes(k)) {
                    state.insumos[k].valorFrasco = 0;
                  }
                }

                localStorage.setItem('iatfpro_user_migrated_v260528_13', 'true');
                if (typeof window.saveStateToFirestore === 'function') {
                  window.saveStateToFirestore();
                }
              }`;

const newMigration = `              // MIGRACION UNICA FIREBASE USER DATA: Limpiar datos cacheados por usuario
              if (!localStorage.getItem('iatfpro_user_migrated_v22_' + user.uid)) {
                for (let k in state.insumos) {
                  state.insumos[k].def = 0;
                  state.insumos[k].resx1 = 0;
                  state.insumos[k].resx2 = 0;
                  if (['gen','retdib','mo1','mo2','opu','dx1','dx2','iate'].includes(k)) {
                    state.insumos[k].valorFrasco = 0;
                  }
                }

                localStorage.setItem('iatfpro_user_migrated_v22_' + user.uid, 'true');
                if (typeof window.saveStateToFirestore === 'function') {
                  window.saveStateToFirestore();
                }
              }`;

const oldMigrationCRLF = oldMigration.replace(/\n/g, '\r\n');

if (content.includes(oldMigration)) {
    content = content.replace(oldMigration, newMigration);
    fs.writeFileSync(appPath, content, 'utf8');
    console.log("Migration replaced successfully.");
} else if (content.includes(oldMigrationCRLF)) {
    content = content.replace(oldMigrationCRLF, newMigration);
    fs.writeFileSync(appPath, content, 'utf8');
    console.log("Migration replaced successfully (CRLF).");
} else {
    console.log("Old migration not found!");
}
