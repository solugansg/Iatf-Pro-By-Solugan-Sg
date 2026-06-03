const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');

// Fix the missing closing brace for window.translations
if (code.includes('    chart_dx: "Dx Prenhez"\\r\\n\\r\\n\\r\\n// Helper de traducción')) {
  code = code.replace(
    '    chart_dx: "Dx Prenhez"\\r\\n\\r\\n\\r\\n// Helper de traducción',
    '    chart_dx: "Dx Prenhez"\\r\\n  }\\r\\n};\\r\\n\\r\\n// Helper de traducción'
  );
} else if (code.includes('    chart_dx: "Dx Prenhez"\\n\\n\\n// Helper de traducción')) {
  code = code.replace(
    '    chart_dx: "Dx Prenhez"\\n\\n\\n// Helper de traducción',
    '    chart_dx: "Dx Prenhez"\\n  }\\n};\\n\\n// Helper de traducción'
  );
} else {
  // If we can't find it with spaces, just use a broader regex
  code = code.replace(
    /chart_dx:\s*"Dx Prenhez"\s*\/\/\s*Helper de traducción/m,
    'chart_dx: "Dx Prenhez"\\n  }\\n};\\n\\n// Helper de traducción'
  );
}

// Fix the literal slash-n
code = code.replace(/\\nwindow\.changeLanguage =/g, '\\nwindow.changeLanguage =');

fs.writeFileSync(file, code, 'utf8');
console.log('Fixed syntax errors aggressively.');
