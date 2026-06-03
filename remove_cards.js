const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const regex = /\/\* Transformar Tablas de Resultados a Tarjetas \(Responsive Cards\) \*\/[\s\S]*?\/\* En el modo de edici\u00f3n de tabla \(si tiene menos columnas o inputs\), adaptar \*\/[\s\S]*?\}\s*(?=\/\* Modales a 100% y deslizables \*\/)/;
if (css.match(regex)) {
  css = css.replace(regex, '');
  fs.writeFileSync('style.css', css, 'utf8');
  console.log('Cards CSS removed');
} else {
  // Let's try matching with wildcard for the special character in edición
  const regex2 = /\/\* Transformar Tablas de Resultados a Tarjetas \(Responsive Cards\) \*\/[\s\S]*?(?=\/\* Modales a 100% y deslizables \*\/)/;
  if (css.match(regex2)) {
    css = css.replace(regex2, '');
    fs.writeFileSync('style.css', css, 'utf8');
    console.log('Cards CSS removed with regex2');
  } else {
    console.log('Regex failed');
  }
}
