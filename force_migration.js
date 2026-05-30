const fs = require('fs');
const path = require('path');
const jsPath = path.resolve(__dirname, 'app_v42.js');

let js = fs.readFileSync(jsPath, 'utf8');
const loadCondition = `if (userData.matriz && Array.isArray(userData.matriz) && userData.matriz.length > 0) {`;
const replaceCondition = `if (false) {`; // Bypass loading from cloud user data to force default for everyone unless they click "Actualizar"

// Wait actually, we just want DEFAULT to be loaded for new users, existing users SHOULD get the new defaults, but how to force it?
// Best way: Force a migration flag update.
const targetFlag = `if (!localStorage.getItem('iatfpro_user_migrated_v22_' + user.uid)) {`;
const newFlag = `if (!localStorage.getItem('iatfpro_user_migrated_v46_' + user.uid)) {`;

js = js.replace(targetFlag, newFlag);
fs.writeFileSync(jsPath, js, 'utf8');

// Increment SW cache
const swPath = path.resolve(__dirname, 'service-worker.js');
let sw = fs.readFileSync(swPath, 'utf8');
const versionMatch = sw.match(/const CACHE_NAME = 'iatfpro-V260528\.(\d+)';/);
if (versionMatch) {
  const oldV = parseInt(versionMatch[1]);
  const newV = oldV + 1;
  sw = sw.replace(`const CACHE_NAME = 'iatfpro-V260528.${oldV}';`, `const CACHE_NAME = 'iatfpro-V260528.${newV}';`);
}
fs.writeFileSync(swPath, sw, 'utf8');
console.log('Fixed migration flag');
