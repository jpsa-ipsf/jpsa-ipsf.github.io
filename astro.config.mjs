// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // The website's public address: https://jpsaipsf.net (no hyphen). It is written
  // ONLY here: the sitemap and robots.txt read it from this line.
  //
  // The domain is also in public/CNAME (one line: jpsaipsf.net). Keep that file,
  // always, and keep it the same as this line: GitHub Pages reads the domain from
  // it when a site is published from a branch. This repository publishes with
  // GitHub Actions (.github/workflows/deploy.yml), and then GitHub ignores the
  // file and keeps the domain in the repository's Settings > Pages > Custom
  // domain, which must stay jpsaipsf.net as well.
  //
  // The site must be served from the ROOT of this address. Pictures and scripts
  // are linked from the root (/_astro/...): under a sub-path (github.io/<name>/)
  // the pages open with their colours and fonts, but no picture loads, nothing
  // interactive works, and every section that fades in while scrolling stays hidden.
  site: "https://jpsaipsf.net",

  build: {
    // Output partners.html, sep.html … exactly like the old site (not /partners/),
    // so every existing link keeps working unchanged. Never switch this to "directory".
    format: "file",
  },

  // Keep the spaces between neighbouring elements, like the old site had
  // (Astro 7's default "jsx" mode removes them and glues words together in the HTML).
  compressHTML: true,

  // sitemap-index.xml + sitemap-0.xml, rebuilt automatically on every deploy.
  // The sitemap plugin writes /sep instead of the real /sep.html, so each page is
  // listed with its .html file name (the home page stays at the root address).
  integrations: [
    sitemap({
      serialize(item) {
        const url = new URL(item.url);
        if (url.pathname !== "/" && !url.pathname.endsWith(".html")) {
          url.pathname = url.pathname.replace(/\/$/, "") + ".html";
        }
        item.url = url.href;
        return item;
      },
    }),
  ],
});
