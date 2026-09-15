// Small text helpers shared by the page templates.
import C from "../../content.js";

const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ESC[c]);

/** Escapes text but keeps the few inline tags content.js may use: <strong>, <em>, <br>. Use with set:html. */
export const rich = (s) => esc(s).replace(/&lt;(\/?)(strong|em|br)&gt;/g, "<$1$2>");

export const isExternal = (href) => /^https?:/i.test(href);

/** Links to other websites open in a new tab. Spread onto an <a>: {...ext(href)} */
export const ext = (href) => (isExternal(href) ? { target: "_blank", rel: "noopener" } : {});

export const mailto = (subject) => `mailto:${C.site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export const pad = (n) => String(n).padStart(2, "0");
