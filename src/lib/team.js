// Lookups for team.html, and checks that run when the site is built.
// A mistake in the TEAM section of content.js stops the build with a message saying what to
// fix, so a broken team page never replaces the live one.
import C from "../../content.js";
import { hasImg, imagePaths } from "./images.js";

const T = C.team;
const where = "content.js, TEAM section";

const people = new Map();
for (const p of T.people) {
  if (people.has(p.id)) throw new Error(`${where}: the id "${p.id}" is in "people" twice. Every person is listed once.`);
  people.set(p.id, p);
}
const universities = new Map(C.universities.map((u) => [u.abbr, u]));
const groups = new Set(T.groups.map((g) => g.id));
const teamIds = new Set(T.teams.list.map((t) => t.id));

/** The person with this id; `context` says where the id was used, for the error message. */
export function person(id, context) {
  const p = people.get(id);
  if (!p) throw new Error(`${where}: "${id}" (used in ${context}) is not in "people". Check the id, or add the person to "people".`);
  return p;
}

/** The photo file for a person (assets/img/people/<id>.jpg, .jpeg, .png or .webp), or undefined. */
export const photoOf = (id) => ["jpg", "jpeg", "png", "webp"].map((ext) => `assets/img/people/${id}.${ext}`).find(hasImg);

export const university = (abbr) => universities.get(abbr);

/** The Executive Committee position that leads a team. */
export const leaderOf = (teamId) => T.exco.positions.find((pos) => pos.team === teamId);

// A team's members are one list in content.js: members: [{ person, role }]. A member can also be
// written as just the id (no role), and the older lists (local and committee) are still read,
// after members, so a team written the old way still works.
const entriesOf = (t) => [...(t.members || []), ...(t.local || []), ...(t.committee || [])]
  .map((m) => (typeof m === "string" ? { person: m } : m));
const rank = (abbr) => {
  const i = C.universities.findIndex((u) => u.abbr === abbr);
  return i < 0 ? C.universities.length : i;
};

/** A team's members as { p, role }, sorted by university (in the order of the universities list,
    people without one last). Members of the same university keep the order they are written in. */
export const membersOf = (t) => entriesOf(t)
  .map((m) => ({ p: person(m.person, `the team "${t.name}"`), role: m.role || "" }))
  .sort((a, b) => rank(a.p.university) - rank(b.p.university));

// ---- Checks: each one stops the build with a clear message ----
for (const p of T.people) {
  if (p.university && !universities.has(p.university)) {
    throw new Error(`${where}: ${p.name} has the university "${p.university}", which is not one of ${[...universities.keys()].join(", ")} (the list at the top of content.js).`);
  }
}
for (const pos of T.exco.positions) {
  person(pos.person, `the position "${pos.title}"`);
  if (!groups.has(pos.group)) throw new Error(`${where}: the position "${pos.title}" is in the group "${pos.group}", which is not in "groups".`);
  if (pos.team && !teamIds.has(pos.team)) throw new Error(`${where}: the position "${pos.title}" leads the team "${pos.team}", which is not in the teams list.`);
}
for (const t of T.teams.list) {
  if (!groups.has(t.group)) throw new Error(`${where}: the team "${t.name}" is in the group "${t.group}", which is not in "groups".`);
  if (!leaderOf(t.id)) throw new Error(`${where}: the team "${t.name}" has no leader. Add team: "${t.id}" to its position in exco.positions.`);
  const seen = new Set();
  for (const m of entriesOf(t)) {
    if (!m || typeof m.person !== "string") {
      throw new Error(`${where}: a member of the team "${t.name}" is written as ${JSON.stringify(m)}. Write { person: "their-id", role: "Their role" }, or just "their-id".`);
    }
    const p = person(m.person, `the team "${t.name}"`);
    if (seen.has(p.id)) throw new Error(`${where}: ${p.name} is in the team "${t.name}" twice. List each member of a team once.`);
    seen.add(p.id);
  }
}

// ---- Warnings: printed in the build log; the build carries on ----
const plain = (name) => name.toLowerCase().replace(/[^a-z]/g, "").replace(/(.)\1+/g, "$1");
const distance = (a, b) => {
  const row = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const next = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = row[j];
      row[j] = next;
    }
  }
  return row[b.length];
};
T.people.forEach((a, i) => {
  T.people.slice(i + 1).forEach((b) => {
    const [x, y] = [plain(a.name), plain(b.name)];
    if (x.slice(0, 3) === y.slice(0, 3) && distance(x, y) <= 2) {
      console.warn(`[JPSA] Two people with almost the same name: "${a.name}" and "${b.name}". If they are one person, keep one entry.`);
    }
  });
});
for (const path of imagePaths("assets/img/people/")) {
  const id = path.split("/").pop().replace(/\.\w+$/, "");
  if (!people.has(id)) console.warn(`[JPSA] Photo not shown: ${path} (no person with the id "${id}").`);
}
