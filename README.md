# JPSA website

The showcase website of the **Jordan Pharmaceutical Students' Association (JPSA)**.
It is a plain static site: no build step, no framework, no server code. Upload the folder anywhere and it works.

## Pages

| File | Page |
|---|---|
| `index.html` | Home: welcome, about JPSA, our journey (universities), IPSF, mission & vision, why JPSA + member benefits, meet the family, teams |
| `sep.html` | Student Exchange Program |
| `conferences.html` | National Symposium, conferences we organized, patrons, international events |
| `portfolios.html` | Public Health, Professional Development, Humanitarian Campaigns, Social Events, SEP |
| `partners.html` | Strategic partners, hospitals, internships & careers, member perks (cafés) |

## Editing the content

**All the text lives in one file: `assets/js/content.js`.** Open it in any text editor, change the words between the quotes, save, and refresh the browser.

- **Add or update a person** (Meet the family): put a portrait photo (4:5, around 640×800 px) in `assets/img/people/`, then add or edit an entry in `family.people`:
  ```js
  { name: "Full Name", role: "President", photo: "assets/img/people/full-name.jpg" },
  ```
- **Team leads**: fill the `leads` list of any team in `teams`, e.g. `leads: [{ name: "Full Name", role: "Director" }]`.
- **Café discounts**: add entries to `partners.perks.list`, e.g.
  `{ name: "Café name", area: "Amman — Jabal Al-Weibdeh", discount: "15%", note: "Show your JPSA card" }`.
  While the list is empty, the page shows a "coming soon" card.
- **Join button**: set `site.links.join` to your membership form link (right now it points to Instagram).
- **Family photo wall**: photos are `assets/img/family/f01.jpg` … `f66.jpg`. To add more, keep the naming and update `family.wallCount`.

Lines marked `TODO` in `content.js` still need information from the team.

## Preview on your computer

Open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000. (Opening `index.html` by double-clicking also works in most browsers.)

## Publishing

Any static host works, for free:

- **Netlify**: drag and drop this folder on https://app.netlify.com/drop
- **GitHub Pages**: push the folder to a repository and enable Pages
- **Vercel**: import the folder as a project (no build settings needed)

Then point your domain (e.g. `jpsa-ipsf.com`) to the host.

## Brand

- Colors (official palette): `#9E1414` red · `#FDD82E` yellow · `#EEEEEE` gray · `#000000` black. Defined as CSS variables at the top of `assets/css/base.css`.
- Fonts (Google Fonts): Anton (headlines), DM Sans (text), Instrument Serif (italic accents).
- Logos: `assets/img/brand/logo-dark.png` (for light backgrounds) and `logo-light.png` (for dark backgrounds).

## Files

```
assets/css/base.css        tokens, typography, layout
assets/css/components.css  header, footer, buttons, cards, marquee, FAQ …
assets/css/pages.css       page-specific sections
assets/js/content.js       ← all the words (edit this)
assets/js/core.js          shared helpers, header & footer
assets/js/pages.js         page templates
assets/js/app.js           interactions (menu, animations, tabs, filters)
assets/js/icons.js         icons from Lucide (ISC license)
assets/img/                logos, portraits, event photos
```
