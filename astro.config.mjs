// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // The website's public address. It is written ONLY here: the sitemap and
  // robots.txt read it from this line. When jpsa-ipsf.com is connected,
  // change this one value (and add public/CNAME).
  site: "https://jpsa-ipsf.github.io",

  build: {
    // Output partners.html, sep.html … exactly like the old site (not /partners/),
    // so every existing link keeps working unchanged. Never switch this to "directory".
    format: "file",
  },

  // Keep the spaces between neighbouring elements, like the old site had
  // (Astro 7's default "jsx" mode removes them and glues words together in the HTML).
  compressHTML: true,
});
