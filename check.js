const fs = require('fs');
const html = fs.readFileSync('c:/Users/JAN/Documents/App Solugan Sg/Iatf Pro By Solugan Sg/index.html', 'utf8');
const sw = fs.readFileSync('c:/Users/JAN/Documents/App Solugan Sg/Iatf Pro By Solugan Sg/service-worker.js', 'utf8');

const regex = /(src|href)=['"]([^'"]+)['"]/g;
let match;
console.log('--- HTML ASSETS ---');
const htmlAssets = new Set();
while ((match = regex.exec(html)) !== null) {
    if (!match[2].startsWith('http') && !match[2].startsWith('#')) {
        let p = match[2].split('?')[0];
        if (p.startsWith('/')) p = p.substring(1);
        htmlAssets.add(p);
    }
}
htmlAssets.forEach(a => console.log(a));

console.log('--- SW CACHED ASSETS ---');
const swCacheMatch = sw.match(/const ASSETS_TO_CACHE = \[([\s\S]*?)\];/);
if (swCacheMatch) {
    const assets = swCacheMatch[1].split(',')
        .map(s => s.trim().replace(/['"]/g, ''))
        .filter(s => s && !s.startsWith('//'));
    assets.forEach(a => console.log(a));
    
    console.log('\n--- MISSING IN SW CACHE ---');
    htmlAssets.forEach(a => {
        if (!assets.includes(a) && a !== '') {
            console.log(a);
        }
    });
}
