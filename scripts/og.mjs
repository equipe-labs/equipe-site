// One-off export: design/og.svg -> design/og.png + public/og.png (1200x630).
// Run: node scripts/og.mjs
import sharp from 'sharp';
import { copyFile } from 'node:fs/promises';

await sharp('design/og.svg', { density: 96 }).resize(1200, 630).png().toFile('design/og.png');
await copyFile('design/og.png', 'public/og.png');
const m = await sharp('public/og.png').metadata();
console.log(`og.png ${m.width}x${m.height}`);
