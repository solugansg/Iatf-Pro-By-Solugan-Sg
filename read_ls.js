const fs = require('fs');
const path = require('path');

const dbPath = 'C:\\Users\\JAN\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Local Storage\\leveldb';
const files = fs.readdirSync(dbPath);
let output = '';

files.forEach(fn => {
  if (fn.endsWith('.ldb') || fn.endsWith('.log')) {
    const fp = path.join(dbPath, fn);
    try {
      const data = fs.readFileSync(fp);
      const searchKey = Buffer.from('iatfpro_state');
      let idx = 0;
      
      while (true) {
        idx = data.indexOf(searchKey, idx);
        if (idx === -1) break;
        
        output += `=== Found in ${fn} at index ${idx} ===\n`;
        const chunk = data.slice(idx, idx + 8000);
        
        try {
          const decoded = chunk.toString('utf16le');
          const start = decoded.indexOf('{');
          if (start !== -1) {
            let braces = 0;
            let end = -1;
            for (let i = start; i < decoded.length; i++) {
              if (decoded[i] === '{') braces++;
              else if (decoded[i] === '}') {
                braces--;
                if (braces === 0) {
                  end = i + 1;
                  break;
                }
              }
            }
            if (end !== -1) {
              output += "FOUND UTF-16LE JSON:\n";
              output += decoded.substring(start, end) + "\n\n";
            }
          }
        } catch(e) {}
        
        try {
          const decodedUtf8 = chunk.toString('utf8');
          const start = decodedUtf8.indexOf('{');
          if (start !== -1) {
            let braces = 0;
            let end = -1;
            for (let i = start; i < decodedUtf8.length; i++) {
              if (decodedUtf8[i] === '{') braces++;
              else if (decodedUtf8[i] === '}') {
                braces--;
                if (braces === 0) {
                  end = i + 1;
                  break;
                }
              }
            }
            if (end !== -1) {
              output += "FOUND UTF-8 JSON:\n";
              output += decodedUtf8.substring(start, end) + "\n\n";
            }
          }
        } catch(e) {}
        
        idx += searchKey.length;
      }
    } catch(e) {}
  }
});

fs.writeFileSync('ls_dump.txt', output);
console.log('Done reading leveldb');
