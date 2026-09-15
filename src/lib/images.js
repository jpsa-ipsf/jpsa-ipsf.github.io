// Every photo in assets/img/ is optimized when the site is built (WebP, sized per screen).
// content.js refers to photos by their path, e.g. "assets/img/people/full-name.jpg".
const files = import.meta.glob("/assets/img/**/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" });

export function img(path) {
  const meta = files["/" + String(path).replace(/^\/+/, "")];
  if (!meta) {
    throw new Error(`Photo not found: "${path}". Check the path in content.js and that the file exists in assets/img/.`);
  }
  return meta;
}
