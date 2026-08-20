import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete resume", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Dhayanand Baskar — Senior Software Engineer<\/title>/i);
  assert.match(html, /Building high-throughput distributed systems/);
  assert.match(html, /Thoughtworks \/ Grab/);
  assert.match(html, /2M\+/);
  assert.match(html, /End-to-end transport tracking/);
  assert.match(html, /How I lead/i);
  assert.match(html, /Dhayanand-Baskar-Resume\.pdf/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Building your site/);
});

test("keeps the screen and print layouts aligned to A4", async () => {
  const [appCss, staticCss, page, staticHtml] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../styles.css", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../index.html", import.meta.url), "utf8"),
  ]);

  assert.match(appCss, /aspect-ratio:\s*210\s*\/\s*297/);
  assert.match(appCss, /@page\s*\{\s*size:\s*A4/);
  assert.match(appCss, /\.role li[^}]*font-size:\s*13px/);
  assert.equal(
    staticCss,
    appCss
      .replace('@import "tailwindcss";\n\n', "")
      .replace(
        ":root {",
        ':root {\n  --font-geist-mono: "SFMono-Regular", Consolas, "Liberation Mono";',
      ),
  );
  assert.match(page, /href="\/Dhayanand-Baskar-Resume\.pdf"/);
  assert.match(staticHtml, /href="Dhayanand-Baskar-Resume\.pdf"/);
});
