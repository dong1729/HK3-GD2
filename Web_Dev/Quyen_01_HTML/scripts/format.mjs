import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import * as prettier from '../qa/node_modules/prettier/index.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const directories = ['du-an', 'nguon', 'minh-hoa'];
for (const name of await fs.readdir(root)) if (name.startsWith('Chuong_')) directories.push(name);
const files = [path.join(root, 'index.html')];
async function collect(directory) {
  for (const entry of await fs.readdir(directory, {withFileTypes: true})) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await collect(file);
    else if (/\.(html|css|js|json)$/.test(file)) files.push(file);
  }
}
for (const directory of directories) await collect(path.join(root, directory));
for (const file of files) {
  let text = await prettier.format(await fs.readFile(file, 'utf8'), {
    filepath: file, tabWidth: 2, useTabs: false, printWidth: 90,
  });
  if (file.endsWith('.html')) {
    text = text.replace(/<!doctype html>/i, '<!DOCTYPE html>');
    text = text.replace(/<(?:meta|link|img|input|br|hr|source|track|wbr|area|base|col|embed|param)\b[^>]*?\/\s*>/gis,
      match => match.replace(/\/\s*>$/, '>'));
    text = text.replace(/<title>([\s\S]*?)<\/title>/g,
      (_, title) => '<title>' + title.replace(/\s+/g, ' ').trim() + '</title>');
  }
  await fs.writeFile(file, text);
}
console.log(`Formatted ${files.length} source and exercise files.`);
