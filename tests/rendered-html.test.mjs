import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const context = { waitUntil() {}, passThroughOnException() {} };
  const response = await worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), env, context);
  // The application normalizes a trailing slash; GitHub Pages serves directory URLs directly.
  if (response.status === 308) {
    const location = response.headers.get("location");
    assert.equal(new URL(location, "http://localhost").pathname, path.replace(/\/$/, ""));
    return worker.fetch(new Request(new URL(location, "http://localhost"), { headers: { accept: "text/html" } }), env, context);
  }
  return response;
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
  assert.match(html, /TypeScript and Node\.js services on GCP/);
  assert.match(html, /Dhayanand-Baskar-Resume\.pdf\?v=7/);
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
  assert.match(page, /href="\/Dhayanand-Baskar-Resume\.pdf\?v=7"/);
  assert.match(staticHtml, /href="Dhayanand-Baskar-Resume\.pdf\?v=7"/);
  assert.match(staticHtml, /styles\.css\?v=7/);
  assert.doesNotMatch(staticCss, /grayscale\(/);
  assert.match(staticHtml, /employee time-off and vacation balances/);

  assert.match(resumeCss, /aspect-ratio:\s*210\s*\/\s*297/);
  assert.match(resumeCss, /@page\s*\{\s*size:\s*A4/);
  assert.match(resumeHtml, /01 \/ 02/);
  assert.match(resumeHtml, /02 \/ 02/);
  assert.match(resumeHtml, /employee time-off and vacation balances handled by the materialization platform I led, used by payroll and reporting/);
  assert.match(resumeHtml, /Java · Kotlin · Spring Boot/);
  assert.match(resumeHtml, /TypeScript · Node\.js · GCP/);
  assert.match(resumeHtml, /<strong>2M\+<\/strong>/);
  assert.doesNotMatch(resumeHtml, /5M\+/);
  assert.match(resumeHtml, /Main engineering driver/);
  assert.match(resumeHtml, /TypeScript and Node\.js services on GCP in production for a year/);
  assert.match(resumeHtml, /resume\.css\?v=6/);
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


test("app directory leads to rendered guides with actionable setup and public download", async () => {
  const directory = await render("/apps/");
  assert.equal(directory.status, 200);
  const index = await directory.text();
  assert.match(index, /href="\/apps\/speaklet\/"/);
  assert.match(index, /href="\/apps\/still\/"/);
  for (const path of ["/apps/speaklet/", "/apps/still/"]) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /id="get-started"/);
    assert.match(html, /href="\/apps\/"/);
    assert.doesNotMatch(html, /SkeletonPreview|Not found/);
    if (path.includes("speaklet")) {
      assert.match(html, /releases\/latest\/download\/Speaklet\.dmg/);
      assert.match(html, /API usage is billed separately/);
      assert.match(html, /Apache 2\.0/);
    } else {
      assert.match(html, /github\.com\/DhayanandBaskar\/Still\/releases\/latest\/download\/Still\.dmg/);
      assert.match(html, /href="https:\/\/github\.com\/DhayanandBaskar\/Still">Source on GitHub/);
      assert.match(html, /Apache 2\.0/);
      assert.match(html, /Download for Apple silicon/);
      assert.doesNotMatch(html, /Ask for a build|Current personal build|Still%20for%20Mac/);
    }
  }
});

test("GitHub Pages guides have existing local links and assets and match shared content", async () => {
  const { appPages, pageMarkup } = await import("../content/apps.mjs");
  const { stat } = await import("node:fs/promises");
  for (const page of Object.values(appPages)) {
    const html = await readFile(new URL(`..${page.path}index.html`, import.meta.url), "utf8");
    assert.ok(html.includes(pageMarkup(page)), `Generated content differs for ${page.path}`);
    for (const match of html.matchAll(/(?:href|src|srcset)="(\/[^"#?]+)(?:[?#][^"]*)?"/g)) {
      const path = match[1];
      const target = new URL(`..${path}${path.endsWith("/") ? "index.html" : ""}`, import.meta.url);
      assert.ok((await stat(target)).isFile(), `Missing local link/asset: ${path}`);
    }
  }
});
