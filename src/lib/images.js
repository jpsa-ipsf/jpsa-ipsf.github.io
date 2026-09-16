// Every photo in assets/img/ is optimized when the site is built (WebP, sized per screen).
// content.js refers to photos by their path, e.g. "assets/img/people/full-name.jpg".
const files = import.meta.glob("/assets/img/**/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" });

const key = (path) => "/" + String(path).replace(/^\/+/, "");

/** True if a photo exists at this path (used to show a photo only once one has been added). */
export const hasImg = (path) => Boolean(files[key(path)]);

/** Paths of every photo in a folder, e.g. imagePaths("assets/img/people/"). */
export const imagePaths = (folder) => Object.keys(files).map((k) => k.slice(1)).filter((p) => p.startsWith(folder));

export function img(path) {
  const meta = files[key(path)];
  if (!meta) {
    throw new Error(`Photo not found: "${path}". Check the path in content.js and that the file exists in assets/img/.`);
  }
  return meta;
}
