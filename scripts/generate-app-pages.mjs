import { mkdir, writeFile, copyFile } from 'node:fs/promises';
import { appPages, pageMarkup } from '../content/apps.mjs';
const escape = value => value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
for (const page of Object.values(appPages)) {
  const dir = new URL(`..${page.path}`, import.meta.url);
  await mkdir(dir, { recursive:true });
  const image = `https://dhayanandbaskar.github.io${page.image || '/og.png'}`;
  await writeFile(new URL('index.html',dir), `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>${escape(page.title)}</title><meta name="description" content="${escape(page.description)}"/><link rel="canonical" href="https://dhayanandbaskar.github.io${page.path}"/><meta property="og:title" content="${escape(page.title)}"/><meta property="og:description" content="${escape(page.description)}"/><meta property="og:type" content="website"/><meta property="og:url" content="https://dhayanandbaskar.github.io${page.path}"/><meta property="og:image" content="${image}"/><meta property="og:image:width" content="${page.imageWidth || 1200}"/><meta property="og:image:height" content="${page.imageHeight || 630}"/><meta name="twitter:card" content="summary_large_image"/><link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2"/><link rel="stylesheet" href="/styles.css?v=7"/><link rel="stylesheet" href="/apps/apps.css?v=4"/></head><body>${pageMarkup(page)}</body></html>\n`);
}
await copyFile(new URL('../apps/apps.css',import.meta.url),new URL('../public/apps/apps.css',import.meta.url));
