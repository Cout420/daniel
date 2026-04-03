import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

const mediaDir = path.join(process.cwd(), 'public', 'media');
if (!fs.existsSync(mediaDir)) {
  fs.mkdirSync(mediaDir, { recursive: true });
}

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      getFiles(path.join(dir, file), fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

async function downloadFile(url, dest) {
  if (fs.existsSync(dest)) return; // Already downloaded
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

async function main() {
  const dirsToScan = ['components', 'hooks', 'lib', 'pages'];
  const files = [];
  for (const dir of dirsToScan) {
    if (fs.existsSync(path.join(process.cwd(), dir))) {
      getFiles(path.join(process.cwd(), dir), files);
    }
  }
  const urlRegex = /https?:\/\/[^\s"'`]+?\.(?:mp4|jpg|jpeg|png|webp)(?:\.webp)?/g;

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    let modified = false;
    const matches = content.match(urlRegex);

    if (matches) {
      for (const url of matches) {
        // Skip unsplash and pravatar as they are dynamic/placeholders
        if (url.includes('unsplash.com') || url.includes('pravatar.cc')) continue;

        const urlObj = new URL(url);
        let filename = path.basename(urlObj.pathname);
        // Handle query params if any, or just use basename
        if (!filename) filename = 'downloaded_media';
        
        // Ensure unique filename or just use the basename
        const dest = path.join(mediaDir, filename);
        
        await downloadFile(url, dest);

        // Replace in content
        const localPath = `/media/${filename}`;
        content = content.split(url).join(localPath);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(file, content, 'utf-8');
      console.log(`Updated ${file}`);
    }
  }
}

main().catch(console.error);
