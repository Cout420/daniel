import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

const mediaDir = path.join(process.cwd(), 'public', 'media');

async function downloadFile(url, dest) {
  console.log(`Downloading ${url}...`);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
    const fileStream = fs.createWriteStream(dest);
    await finished(Readable.fromWeb(res.body).pipe(fileStream));
    console.log(`Saved to ${dest}`);
  } catch (e) {
    console.error(`Error downloading ${url}:`, e.message);
  }
}

const missingFiles = [
  'sobre-1.jpg.webp',
  'sobre-2.jpeg.webp',
  'sobre-3.jpg.webp',
  'produtos-1.png.webp',
  'produtos-2.png.webp',
  'produtos-3.png.webp',
  'energia-produtos-1.png.webp',
  'energia-produtos-2.png.webp',
  'energia-produtos-3.png.webp',
  'inovacao-1.png',
  'inovacao-2.png'
];

async function main() {
  for (const file of missingFiles) {
    let url = `https://www.metalurgicadaniela.com.br/wp-content/webp-express/webp-images/uploads/2025/11/${file}`;
    if (file.startsWith('inovacao')) {
      url = `https://metalurgicadaniela.com.br/wp-content/uploads/2025/11/${file}`;
    }
    const dest = path.join(mediaDir, file);
    await downloadFile(url, dest);
  }
}

main().catch(console.error);
