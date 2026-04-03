import fs from 'fs';
import archiver from 'archiver';

const output = fs.createWriteStream('source_code.zip');
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', async () => {
  console.log(`Zip created: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
  
  try {
    console.log('Uploading to transfer.sh...');
    const fileBuffer = fs.readFileSync('source_code.zip');
    const response = await fetch('https://transfer.sh/projeto_metalurgica.zip', {
      method: 'PUT',
      body: fileBuffer
    });
    
    if (response.ok) {
      const url = await response.text();
      console.log('UPLOAD_SUCCESS:', url);
    } else {
      console.error('Upload failed:', response.status, response.statusText);
    }
  } catch (err) {
    console.error('Error uploading:', err);
  }
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Add files, ignoring heavy/unnecessary folders
archive.glob('**/*', {
  ignore: [
    'node_modules/**', 
    '.git/**', 
    'dist/**', 
    '**/*.zip',
    'package-lock.json'
  ]
});

archive.finalize();
