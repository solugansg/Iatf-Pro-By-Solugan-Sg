const fs = require('fs');
let js = fs.readFileSync('iatf-app.js', 'utf8');

// 1. DEFAULT_ENCABEZADOS
js = js.replace(
  "window.DEFAULT_ENCABEZADOS = ['DIB<br><small>Día</small>', 'B.E. 1",
  "window.DEFAULT_ENCABEZADOS = ['DIB<br><small>Día</small>', 'P4 Iny<br><small>Día</small>', 'B.E. 1"
);

// 2. colDefs
js = js.replace(
  "colDefs: ['dib','be1','be2'",
  "colDefs: ['dib','prog_iny','be1','be2'"
);

// 3. state.insumos
js = js.replace(
  "dib: { name: 'Dispositivo Intravaginal Bovino', tipo: 'Und', tamano: 10, valorFrasco: 160000, def: 0, resx1: 1, resx2: 1, cat: 'hormonas', obs: 'P4', usos: 1 },",
  "dib: { name: 'Dispositivo Intravaginal Bovino', tipo: 'Und', tamano: 10, valorFrasco: 160000, def: 0, resx1: 1, resx2: 1, cat: 'hormonas', obs: 'P4', usos: 1 },\n    prog_iny: { name: 'Progesterona Inyectable', tipo: 'ml', tamano: 50, valorFrasco: 0, def: 1, resx1: 1, resx2: 1, cat: 'hormonas', obs: 'P4 Iny', usos: 1 },"
);

// 4. adaptarDiasProtocolo
let adaptDaysLogic = `function adaptarDiasProtocolo(days, iaVal) {
  const currentLen = 19; // Updated from 18 to 19
  if (!Array.isArray(days)) {
    return Array(currentLen).fill('-');
  }
  if (days.length === currentLen) {
    return days;
  }
  let newDays = Array(currentLen).fill('-');
  
  if (days.length === 18) {
    newDays[0] = days[0] !== undefined ? days[0] : '-';
    newDays[1] = '-';
    for (let i = 1; i < 18; i++) {
      newDays[i+1] = days[i] !== undefined ? days[i] : '-';
    }
  } else `;

js = js.replace(
  "function adaptarDiasProtocolo(days, iaVal) {\n  const currentLen = 18; // Longitud actual de colDefs\n  if (!Array.isArray(days)) {\n    return Array(currentLen).fill('-');\n  }\n  if (days.length === currentLen) {\n    return days;\n  }\n  let newDays = Array(currentLen).fill('-');\n  if (days.length === 17) {",
  adaptDaysLogic + "if (days.length === 17) {"
);

// 5. adaptarHorasProtocolo
let adaptHoursLogic = `function adaptarHorasProtocolo(hours) {
  const currentLen = 19; // Updated to 19
  if (!Array.isArray(hours)) {
    return Array(currentLen).fill('08:00');
  }
  if (hours.length === currentLen) {
    return hours;
  }
  let newHours = Array(currentLen).fill('08:00');
  
  if (hours.length === 18) {
    newHours[0] = hours[0] || '08:00';
    newHours[1] = '08:00';
    for (let i = 1; i < 18; i++) {
      newHours[i+1] = hours[i] || '08:00';
    }
  } else `;

js = js.replace(
  "function adaptarHorasProtocolo(hours) {\n  const currentLen = 18;\n  if (!Array.isArray(hours)) {\n    return Array(currentLen).fill('08:00');\n  }\n  if (hours.length === currentLen) {\n    return hours;\n  }\n  let newHours = Array(currentLen).fill('08:00');\n  if (hours.length === 17) {",
  adaptHoursLogic + "if (hours.length === 17) {"
);

// 6. DEFAULT_MATRIZ (parse, modify, stringify)
const matrizMatch = js.match(/window\.DEFAULT_MATRIZ\s*=\s*(\[.*?\]);/);
if (matrizMatch) {
  let matriz = JSON.parse(matrizMatch[1]);
  matriz = matriz.map(p => {
    if (p.days.length === 18) {
      p.days.splice(1, 0, '-');
      p.hours.splice(1, 0, '08:00');
    }
    return p;
  });
  js = js.replace(matrizMatch[0], 'window.DEFAULT_MATRIZ = ' + JSON.stringify(matriz) + ';');
}

// 7. Translations ES
js = js.replace(
  'ins_dib: "Dispositivo Intravaginal Bovino",',
  'ins_dib: "Dispositivo Intravaginal Bovino",\n    ins_prog_iny: "Progesterona Inyectable",'
);

// 8. Translations EN
js = js.replace(
  'ins_dib: "Bovine Intravaginal Device",',
  'ins_dib: "Bovine Intravaginal Device",\n    ins_prog_iny: "Injectable Progesterone",'
);

// 9. Translations PT
js = js.replace(
  'ins_dib: "Dispositivo Intravaginal Bovino",',
  'ins_dib: "Dispositivo Intravaginal Bovino",\n    ins_prog_iny: "Progesterona Injetável",'
);

fs.writeFileSync('iatf-app.js', js, 'utf8');
console.log('Update completed');
