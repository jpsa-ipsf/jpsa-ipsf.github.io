// The build guard for event photos (portfolios and conferences): a mistake stops the build with a
// message saying what to fix, so a broken gallery never goes live.
import { img } from "./images.js";

/** gallery: [{ event, when, photos: [{ src, alt }] }]. `where` names the place in content.js. */
export function checkGallery(gallery = [], where) {
  gallery.forEach((ev, i) => {
    const at = `${where}, gallery entry ${i + 1}`;
    if (!ev.event) throw new Error(`${at}: the event has no name (event: "...").`);
    if (!ev.photos || !ev.photos.length) throw new Error(`${at} ("${ev.event}"): add at least one photo, or remove the entry.`);
    ev.photos.forEach((ph, j) => {
      if (!ph.alt || !ph.alt.trim()) throw new Error(`${at} ("${ev.event}"), photo ${j + 1} (${ph.src}): add a description (alt: "...").`);
      img(ph.src); // stops the build if the file is missing
    });
  });
}
