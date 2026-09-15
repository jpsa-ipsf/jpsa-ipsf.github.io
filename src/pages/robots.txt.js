// robots.txt, generated when the site is built.
// The site address is NOT written here: it comes from `site` in astro.config.mjs,
// so connecting a new domain only means changing that one line.
//
// Every page is open to every crawler. AI assistants are also named one by one,
// because letting them read the site is the reason it is built as plain HTML.
// There must never be a "Disallow" line in this file for any of the pages.
const AI_CRAWLERS = [
  ["OpenAI (ChatGPT)", ["GPTBot", "OAI-SearchBot", "ChatGPT-User"]],
  ["Anthropic (Claude)", ["ClaudeBot", "Claude-SearchBot", "Claude-User"]],
  ["Perplexity", ["PerplexityBot", "Perplexity-User"]],
  ["Google (Gemini, Vertex AI; Google Search itself is covered by *)", ["Google-Extended", "Google-CloudVertexBot"]],
  ["Apple (Apple Intelligence)", ["Applebot-Extended"]],
  ["Common Crawl (an open dataset many AI models learn from)", ["CCBot"]],
  ["Amazon (Alexa)", ["Amazonbot"]],
  ["Meta AI", ["meta-externalagent"]],
  ["DuckDuckGo (DuckAssist)", ["DuckAssistBot"]],
  ["Mistral (Le Chat)", ["MistralAI-User"]],
];

export function GET({ site }) {
  const lines = [
    "# JPSA website: every page is open to every crawler.",
    "",
    "User-agent: *",
    "Allow: /",
    "",
    "# AI assistants, named explicitly so there is no doubt they may read the site.",
  ];
  for (const [label, agents] of AI_CRAWLERS) {
    lines.push("", `# ${label}`, ...agents.map((agent) => `User-agent: ${agent}`), "Allow: /");
  }
  lines.push("", `Sitemap: ${new URL("sitemap-index.xml", site).href}`, "");
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
