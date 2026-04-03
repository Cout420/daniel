import fs from 'fs';
import path from 'path';

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.git')) {
        results = results.concat(getFiles(file));
      }
    } else {
      results.push({ file, size: stat.size });
    }
  });
  return results;
}

const files = getFiles('.').sort((a, b) => b.size - a.size).slice(0, 10);
console.log(files.map(f => `${f.file}: ${(f.size / 1024 / 1024).toFixed(2)} MB`).join('\n'));
