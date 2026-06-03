const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'iatf-app.js');
let code = fs.readFileSync(file, 'utf8');

const target1 = 'chart_dx: "Dx Prenhez"\\n  }\\n};\\n\\n// Helper de traducción';
const replacement1 = `chart_dx: "Dx Prenhez"
  }
};

// Helper de traducción`;

code = code.split(target1).join(replacement1);

const target2 = '\\nwindow.changeLanguage =';
const replacement2 = `
window.changeLanguage =`;

code = code.split(target2).join(replacement2);

// Also let's check if the previous fix_syntax2 inserted multiple literal \n
// I'll just use regex to replace literal \n before } and };
code = code.replace(/\\n  \}\\n\};\\n\\n\/\/ Helper de traducción/g, `
  }
};

// Helper de traducción`);

fs.writeFileSync(file, code, 'utf8');
console.log('Fixed literal newlines');
