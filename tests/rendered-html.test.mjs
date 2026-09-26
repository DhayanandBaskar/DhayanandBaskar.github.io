import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the portfolio homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Dhayanand Baskar — Senior Software Engineer<\/title>/i);
  assert.match(html, /Software engineer building products, platforms/);
  assert.match(html, /Selected results/);
  assert.match(html, /Selected work/);
  assert.match(html, /Full-stack Software Engineer/);
  assert.match(html, /employee time-off and vacation balances/);
  assert.match(html, /used by payroll and reporting/);
  assert.match(html, /Writing/);
  assert.match(html, /Dhayanand-Baskar-Resume\.pdf\?v=4/);
  assert.doesNotMatch(html, /Senior Backend Engineer|Backend Software Engineer/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Building your site/);
});

test("keeps the static and application portfolio aligned and preserves the A4 resume", async () => {
  const [appCss, staticCss, page, staticHtml, resumeCss, resumeHtml] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../styles.css", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../index.html", import.meta.url), "utf8"),
    readFile(new URL("../resume.css", import.meta.url), "utf8"),
    readFile(new URL("../resume.html", import.meta.url), "utf8"),
  ]);

  assert.equal(staticCss, appCss);
  assert.match(staticCss, /font-size:\s*16px/);
  assert.match(staticCss, /@media \(max-width:\s*760px\)/);
  assert.match(staticCss, /prefers-reduced-motion/);
  assert.doesNotMatch(staticCss, /@keyframes|linear-gradient|border-radius/);
  assert.match(page, /href="\/Dhayanand-Baskar-Resume\.pdf\?v=4"/);
  assert.match(staticHtml, /href="Dhayanand-Baskar-Resume\.pdf\?v=4"/);
  assert.match(staticHtml, /styles\.css\?v=6/);
  assert.doesNotMatch(staticCss, /grayscale\(/);
  assert.match(staticHtml, /employee time-off and vacation balances/);

  assert.match(resumeCss, /aspect-ratio:\s*210\s*\/\s*297/);
  assert.match(resumeCss, /@page\s*\{\s*size:\s*A4/);
  assert.match(resumeHtml, /01 \/ 02/);
  assert.match(resumeHtml, /02 \/ 02/);
  assert.match(resumeHtml, /employee time-off and vacation balances handled by the materialization platform I led, used by payroll and reporting/);
  assert.match(resumeHtml, /resume\.css\?v=4/);
});

test("keeps the writing pages in the simple portfolio theme", async () => {
  const [blogCss, blogIndex, atmArticle, roomArticle] = await Promise.all([
    readFile(new URL("../blogs/blog.css", import.meta.url), "utf8"),
    readFile(new URL("../blogs/index.html", import.meta.url), "utf8"),
    readFile(new URL("../blogs/atm-operations-system-design/index.html", import.meta.url), "utf8"),
    readFile(new URL("../blogs/room-rental-system-design/index.html", import.meta.url), "utf8"),
  ]);

  assert.match(blogCss, /--blue:\s*#2149d8/);
  assert.doesNotMatch(blogCss, /Iowan|box-shadow|border-radius/);
  assert.match(blogIndex, /blog\.css\?v=4/);
  assert.match(blogIndex, /Resume ↓/);
  assert.match(atmArticle, /blog\.css\?v=4/);
  assert.match(roomArticle, /blog\.css\?v=4/);
});
