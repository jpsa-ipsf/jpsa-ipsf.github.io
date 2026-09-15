/* ==========================================================================
   JPSA — page templates (content comes from content.js)
   ========================================================================== */
(function () {
  "use strict";

  const { C, esc, rich, icon, paras, btn, textLink, mailto, leaves, sectionHead, pageHero, marquee, person, stats, ctaBand } = window.JP;
  const L = C.site.links;
  const pad = (n) => String(n).padStart(2, "0");
  const delay = (i, step = 80, mod = 3) => `style="--delay:${(i % mod) * step}ms"`;

  /* ============================== HOME ============================== */

  const spinBadge = (text) => `
    <svg class="badge-spin" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <defs><path id="badge-path" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0"/></defs>
      <circle cx="100" cy="100" r="99" fill="#000"/>
      <text font-family="DM Sans, system-ui, sans-serif" font-size="16.5" font-weight="700" fill="#fdd82e" textLength="470" lengthAdjust="spacing">
        <textPath href="#badge-path">${esc(text.toUpperCase())}</textPath>
      </text>
      <g transform="translate(72 67) scale(0.5)">
        <path d="M44 118C12 94 12 46 52 10c16 34 18 72-8 108z" fill="#c21f1f"/>
        <path d="M52 124c-2-34 20-62 58-68 2 36-20 64-58 68z" fill="#fdd82e"/>
      </g>
    </svg>`;

  const homeHero = (h) => `
    <section class="home-hero">
      <div class="container home-hero__grid">
        <div>
          <span class="kicker reveal">${esc(h.kicker)}</span>
          <h1 class="home-hero__title reveal" style="--delay:80ms">
            <span class="line">${esc(h.titleLines[0])}</span>
            <span class="line">${esc(h.titleLines[1])}<span class="dot">.</span></span>
          </h1>
          <p class="home-hero__sub reveal" style="--delay:160ms">${esc(h.sub)}</p>
          <div class="cluster home-hero__meta reveal" style="--delay:220ms">
            ${h.chips.map((c, i) => `<span class="chip${i === 0 ? " chip--dark" : ""}">${esc(c)}</span>`).join("")}
          </div>
          <div class="cluster actions reveal" style="--delay:280ms">
            ${btn({ label: "Join JPSA", href: L.join })}
            ${btn({ label: "Explore our portfolios", href: "portfolios.html", variant: "outline" })}
          </div>
        </div>
        <div class="collage reveal" style="--delay:140ms">
          <div class="collage__block"></div>
          ${h.photos
            .map((p, i) => `<figure class="collage__photo collage__photo--${i + 1}"><img src="${esc(p.src)}" alt="${esc(p.alt)}" width="800" height="1000"></figure>`)
            .join("")}
          ${leaves("collage__leaves")}
          ${spinBadge(h.badge)}
        </div>
      </div>
    </section>`;

  const manifesto = (m) => `
    <section class="section">
      <div class="container manifesto">
        <div class="manifesto__aside reveal">
          <span class="kicker">${esc(m.kicker)}</span>
          <h2 style="margin-top:18px">${esc(m.title)}</h2>
          <div class="prose muted" style="margin-top:22px">${paras(m.text)}</div>
        </div>
        <div>
          <ol class="manifesto__lines" role="list">
            ${m.lines.map((l, i) => `<li class="manifesto__line"><span class="n">${pad(i + 1)}</span><span>${esc(l)}</span></li>`).join("")}
          </ol>
          <p class="manifesto__close reveal">${rich(m.close)}</p>
        </div>
      </div>
    </section>`;

  const about = (a) => `
    <section class="section section--paper" id="about">
      <div class="container">
        <div class="split">
          <div class="reveal">
            <span class="kicker">${esc(a.kicker)}</span>
            <h2 style="margin-top:18px">${esc(a.title)}</h2>
            <div class="tri-badges">${a.badges.map((b) => `<span class="chip chip--red">${icon("check")}${esc(b)}</span>`).join("")}</div>
          </div>
          <div class="prose lead reveal" style="--delay:100ms">${paras(a.text)}</div>
        </div>
        <div class="about-stats">${stats(a.stats)}</div>
      </div>
    </section>`;

  const journey = (j) => `
    <section class="section section--black" id="journey">
      <div class="container">
        ${sectionHead({ kicker: j.kicker, title: j.title, lead: j.lead, split: true })}
        <div class="journey" role="list">
          <span class="journey__progress" aria-hidden="true"></span>
          ${C.universities
            .map(
              (u) => `<div class="journey__item" role="listitem">
                <span class="journey__dot" aria-hidden="true"></span>
                <div class="journey__year">${esc(u.year)}</div>
                <div class="journey__abbr">${esc(u.abbr)}</div>
                <div class="journey__name">${esc(u.name)}</div>
              </div>`
            )
            .join("")}
        </div>
      </div>
    </section>`;

  const ipsf = (x) => `
    <section class="section section--yellow" id="ipsf">
      <div class="container ipsf-grid">
        <div class="reveal">
          <span class="kicker">${esc(x.kicker)}</span>
          <h2 style="margin-top:18px">${esc(x.title)}</h2>
          <div class="prose" style="margin-top:24px">${paras(x.text)}</div>
          <div class="cluster" style="margin-top:28px">
            ${btn({ label: "Visit ipsf.org", href: L.ipsf, variant: "dark", iconName: "arrow-up-right" })}
            ${btn({ label: "JPSA on the IPSF site", href: L.ipsfJpsa, variant: "outline", iconName: "arrow-up-right" })}
          </div>
        </div>
        <div class="fact-list reveal" style="--delay:120ms">
          ${x.facts.map((f) => `<div class="fact"><div class="fact__k">${esc(f.k)}</div><div class="fact__v">${esc(f.v)}</div></div>`).join("")}
        </div>
      </div>
    </section>`;

  const mission = (m) => `
    <section class="section" id="mission">
      <div class="container">
        ${sectionHead({ kicker: m.kicker, title: m.title })}
        <div class="mv">
          <article class="mv__card mv__card--mission reveal">${icon("target", "mv__icon")}<h3 class="mv__label">Mission</h3><p class="mv__text">${esc(m.mission)}</p></article>
          <article class="mv__card mv__card--vision reveal" style="--delay:100ms">${icon("eye", "mv__icon")}<h3 class="mv__label">Vision</h3><p class="mv__text">${esc(m.vision)}</p></article>
        </div>
        <div class="values reveal">${m.values.map((v) => `<span class="chip">${icon("sparkles")}${esc(v)}</span>`).join("")}</div>
      </div>
    </section>`;

  const why = (w) => `
    <section class="section section--gray" id="why">
      <div class="container">
        <div class="why">
          <div class="reveal">
            <span class="kicker">${esc(w.kicker)}</span>
            <p class="why__quote" style="margin-top:20px">${esc(w.quote)}</p>
          </div>
          <div class="why__body reveal" style="--delay:100ms">
            <h2 style="font-size:clamp(2rem,4.2vw,3.4rem)">${esc(w.title)}</h2>
            <div class="prose" style="margin-top:20px">${paras(w.text)}</div>
            <ul class="why__words" role="list">${w.words.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
            <p class="prose" style="margin-top:22px">${rich(w.after)}</p>
          </div>
        </div>
        <h2 class="reveal" style="margin-top:clamp(56px,7vw,96px);font-size:clamp(1.9rem,3.6vw,2.8rem)">${esc(w.benefitsTitle)}</h2>
        <div class="benefits" style="margin-top:24px">
          ${w.benefits
            .map(
              (b, i) => `<a class="benefit reveal" ${delay(i)} href="${esc(b.href)}">
                <span class="icon-badge${i % 3 === 1 ? " icon-badge--red" : i % 3 === 2 ? " icon-badge--black" : ""}">${icon(b.icon)}</span>
                <div><h3>${esc(b.title)}</h3><p>${esc(b.text)}</p></div>
              </a>`
            )
            .join("")}
        </div>
        <div class="eligibility reveal">${icon("badge-check")}<p>${rich(w.eligibility)}</p>${btn({ label: "Join JPSA", href: L.join, variant: "yellow", size: "sm" })}</div>
      </div>
    </section>`;

  const family = (f) => {
    const wall = Array.from({ length: f.wallCount }, (_, i) => `assets/img/family/f${pad(i + 1)}.jpg`);
    const half = Math.ceil(wall.length / 2);
    const row = (list, reverse) => {
      const imgs = list.map((src) => `<div class="wall__img"><img src="${src}" alt="" loading="lazy" decoding="async" width="360" height="480"></div>`).join("");
      return `<div class="wall__row${reverse ? " wall__row--reverse" : ""}">${imgs}${imgs}</div>`;
    };
    return `
    <section class="section section--black" id="family">
      <div class="container">
        ${sectionHead({ kicker: f.kicker, title: f.title, lead: f.lead, split: true })}
        <div class="structure">
          ${f.structure.map((s, i) => `<article class="structure__card reveal" ${delay(i, 90)}><div class="structure__num">${pad(i + 1)}</div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></article>`).join("")}
        </div>
      </div>
      <div class="wall family-wall" role="img" aria-label="Portraits of JPSA members">${row(wall.slice(0, half))}${row(wall.slice(half), true)}</div>
      <div class="container">
        <p class="family-lines reveal">${esc(f.lines)}</p>
        <div class="section-head reveal" style="margin-top:clamp(56px,7vw,96px)">
          <h2>${esc(f.peopleTitle)}</h2>
          <p class="lead">${esc(f.peopleLead)}</p>
        </div>
        <div class="people">${f.people.map(person).join("")}</div>
      </div>
    </section>`;
  };

  const teams = (list) => `
    <section class="section" id="teams">
      <div class="container">
        ${sectionHead({ kicker: "Our teams", title: "Five teams. One family.", lead: "Every JPSA activity is run by one of our teams. Pick one to see what they do.", split: true })}
        <div class="teams reveal" data-tabs>
          <div class="teams__list" role="tablist" aria-label="JPSA teams">
            ${list
              .map((t, i) => `<button class="team-tab" type="button" role="tab" id="tab-${t.id}" aria-controls="panel-${t.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${icon(t.icon)}<span>${esc(t.name)}</span></button>`)
              .join("")}
          </div>
          ${list
            .map(
              (t, i) => `<div class="team-panel" role="tabpanel" id="panel-${t.id}" aria-labelledby="tab-${t.id}" tabindex="0"${i === 0 ? "" : " hidden"}>
                <div class="team-panel__top">
                  <div><h3>${esc(t.name)}</h3><p class="team-panel__tag">${esc(t.tagline)}</p></div>
                  <span class="icon-badge icon-badge--red" style="margin:0">${icon(t.icon)}</span>
                </div>
                <p class="team-panel__body">${esc(t.summary)}</p>
                <ul class="checks" role="list">${t.does.map((d) => `<li>${icon("check")}${esc(d)}</li>`).join("")}</ul>
                ${t.leads && t.leads.length ? `<p class="muted" style="margin-top:20px"><strong>Led by:</strong> ${t.leads.map((l) => esc(l.name) + (l.role ? ` (${esc(l.role)})` : "")).join(", ")}</p>` : ""}
                ${textLink(t.href.indexOf("sep") === 0 ? "Explore the exchange program" : "See what they do", t.href)}
              </div>`
            )
            .join("")}
        </div>
      </div>
    </section>`;

  function home() {
    const h = C.home;
    return [
      homeHero(h.hero),
      marquee(C.universities.map((u) => u.name)),
      manifesto(h.manifesto),
      about(h.about),
      journey(h.journey),
      ipsf(h.ipsf),
      mission(h.mission),
      why(h.why),
      family(C.family),
      teams(C.teams),
      ctaBand({
        title: h.cta.title,
        text: h.cta.text,
        buttons:
          btn({ label: "Join JPSA", href: L.join, variant: "yellow" }) +
          btn({ label: "Follow @jpsa_ipsf", href: L.instagram, variant: "outline-light", iconName: "instagram" }),
      }),
    ].join("");
  }

  /* ============================== SEP ============================== */

  const ART = {
    petra: `<svg class="art" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="g-petra" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6b26b"/><stop offset="1" stop-color="#d9673d"/></linearGradient></defs><rect width="300" height="400" fill="url(#g-petra)"/><path d="M0 70 60 36l60 26 60-38 60 32 60-28v372H0z" fill="#a9442c"/><path d="M40 400V160l110-58 110 58v240z" fill="#c9644a"/><path d="M68 176 150 126l82 50z" fill="#e0856a"/><rect x="68" y="180" width="164" height="14" fill="#e0856a"/><rect x="82" y="196" width="14" height="190" fill="#e9967a"/><rect x="112" y="196" width="14" height="190" fill="#e9967a"/><rect x="174" y="196" width="14" height="190" fill="#e9967a"/><rect x="204" y="196" width="14" height="190" fill="#e9967a"/><rect x="132" y="292" width="36" height="108" rx="3" fill="#5a1d12"/><rect y="384" width="300" height="16" fill="#8e3421"/></svg>`,
    rum: `<svg class="art" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="g-rum" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd27a"/><stop offset="1" stop-color="#f08a3c"/></linearGradient></defs><rect width="300" height="400" fill="url(#g-rum)"/><circle cx="210" cy="110" r="42" fill="#fff3b8"/><path d="M0 250 40 170l30 40 40-90 50 110 30-50 50 70 60-60v160H0z" fill="#8c2b16"/><path d="M0 300c60-40 120-30 170-10s90 10 130-10v120H0z" fill="#c0501f"/><path d="M0 350c80-30 160-20 300 0v50H0z" fill="#d9622b"/></svg>`,
    deadsea: `<svg class="art" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="g-sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbe3bf"/><stop offset=".55" stop-color="#a9d9e3"/><stop offset="1" stop-color="#2f8fb0"/></linearGradient></defs><rect width="300" height="400" fill="url(#g-sea)"/><circle cx="80" cy="120" r="30" fill="#fff6d9"/><path d="M0 220 70 180l60 22 70-40 100 50v20H0z" fill="#c9a47a"/><path d="M0 232h300v168H0z" fill="#3b9cbd"/><path d="M0 270c50 8 100-8 150 0s100 8 150 0v130H0z" fill="#2a86a8"/><path d="M0 330c60 10 120-10 180 0s80 6 120 0v70H0z" fill="#1f6f8f"/><path d="M30 360h60l-8-14H40zM190 372h80l-10-16h-58z" fill="#f4f1ea"/></svg>`,
    amman: `<svg class="art" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="g-amman" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c1f3a"/><stop offset="1" stop-color="#5a2a3c"/></linearGradient></defs><rect width="300" height="400" fill="url(#g-amman)"/><g fill="#fdd82e" opacity=".8"><circle cx="40" cy="50" r="1.6"/><circle cx="120" cy="30" r="1.2"/><circle cx="200" cy="60" r="1.6"/><circle cx="260" cy="36" r="1.2"/><circle cx="80" cy="96" r="1.2"/></g><circle cx="236" cy="96" r="18" fill="#fff3b8"/><path d="M0 230c60-30 120-40 180-20s90 10 120-10v200H0z" fill="#2c2233"/><g fill="#3a2d40"><rect x="20" y="236" width="40" height="40"/><rect x="66" y="222" width="34" height="54"/><rect x="108" y="230" width="44" height="46"/><rect x="160" y="216" width="36" height="60"/><rect x="204" y="226" width="42" height="50"/><rect x="252" y="214" width="34" height="62"/></g><g fill="#fdd82e"><rect x="28" y="246" width="6" height="6"/><rect x="44" y="258" width="6" height="6"/><rect x="76" y="232" width="6" height="6"/><rect x="88" y="252" width="6" height="6"/><rect x="118" y="240" width="6" height="6"/><rect x="170" y="228" width="6" height="6"/><rect x="182" y="250" width="6" height="6"/><rect x="214" y="238" width="6" height="6"/><rect x="262" y="226" width="6" height="6"/><rect x="272" y="250" width="6" height="6"/></g><path d="M0 300c80-20 160-10 300 10v90H0z" fill="#171320"/><g fill="#d9b48a"><rect x="96" y="150" width="10" height="70"/><rect x="118" y="150" width="10" height="70"/><rect x="90" y="142" width="44" height="10"/></g></svg>`,
  };

  function sep() {
    const s = C.sep;
    return `
    ${pageHero(s.hero)}
    <section class="section section--tight">
      <div class="container">
        ${stats(s.stats)}
        <p class="small muted" style="margin-top:18px">${esc(s.statsSource)}</p>
      </div>
    </section>

    <section class="section section--paper" id="ways">
      <div class="container">
        ${sectionHead({ kicker: s.ways.kicker, title: s.ways.title })}
        <div class="ways">
          ${[["out", s.ways.out], ["in", s.ways.in]]
            .map(([k, w], i) => `<article class="way way--${k} reveal" style="--delay:${i * 100}ms"><span class="way__icon">${icon(w.icon)}</span><h3>${esc(w.title)}</h3><p>${esc(w.text)}</p></article>`)
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="fields">
      <div class="container">
        ${sectionHead({ kicker: s.fields.kicker, title: s.fields.title, lead: s.fields.lead, split: true })}
        <div class="fields">${s.fields.list.map((f, i) => `<div class="field reveal" ${delay(i, 60, 6)}>${icon(f.icon)}${esc(f.label)}</div>`).join("")}</div>
      </div>
    </section>

    <section class="section section--gray" id="apply">
      <div class="container">
        ${sectionHead({ kicker: s.steps.kicker, title: s.steps.title })}
        <ol class="steps" role="list">
          ${s.steps.list.map((st, i) => `<li class="step reveal" ${delay(i)}><h3>${esc(st.title)}</h3><p>${esc(st.text)}</p></li>`).join("")}
        </ol>
        <p class="note reveal">${icon("info")}<span>${esc(s.steps.note)} <a href="${L.ipsfSep}" target="_blank" rel="noopener">IPSF's SEP page</a> · <a href="${L.ipsfFaq}" target="_blank" rel="noopener">IPSF FAQ</a></span></p>
      </div>
    </section>

    <section class="section section--black" id="incoming">
      <div class="container">
        ${sectionHead({ kicker: s.incoming.kicker, title: s.incoming.title, lead: s.incoming.lead, split: true })}
        <div class="split split--even">
          <div class="fact-list reveal">
            ${s.incoming.facts.map((f) => `<div class="fact"><div class="fact__k">${esc(f.k)}</div><div class="fact__v">${esc(f.v)}</div></div>`).join("")}
          </div>
          <div class="reveal" style="--delay:100ms">
            <p class="lead">${esc(s.incoming.note)}</p>
            <p class="small muted" style="margin-top:14px">${esc(s.incoming.source)}</p>
            <div class="cluster" style="margin-top:24px">
              ${btn({ label: "Follow @sep.jordan", href: L.sepInstagram, variant: "yellow", iconName: "instagram" })}
              ${btn({ label: "JPSA on ipsf.org", href: L.ipsfJpsa, variant: "outline-light", iconName: "arrow-up-right" })}
            </div>
          </div>
        </div>
        <div class="jordan-tiles" style="margin-top:clamp(40px,6vw,72px)">
          ${s.incoming.tiles.map((t, i) => `<article class="jtile reveal" ${delay(i, 80, 4)}>${ART[t.art] || ""}<h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></article>`).join("")}
        </div>
      </div>
    </section>

    <section class="section" id="faq">
      <div class="container split">
        <div class="reveal">
          <span class="kicker">${esc(s.faq.kicker)}</span>
          <h2 style="margin-top:18px">${esc(s.faq.title)}</h2>
        </div>
        <div class="faq reveal">
          ${s.faq.list.map((f, i) => `<details${i === 0 ? " open" : ""}><summary>${esc(f.q)}${icon("plus")}</summary><div class="faq__body"><p>${esc(f.a)}</p></div></details>`).join("")}
        </div>
      </div>
    </section>

    ${ctaBand({
      title: s.cta.title,
      text: s.cta.text,
      buttons:
        btn({ label: "@sep.jordan", href: L.sepInstagram, variant: "yellow", iconName: "instagram" }) +
        btn({ label: "Email the SEP team", href: mailto("Student Exchange Program"), variant: "outline-light", iconName: "mail" }),
    })}`;
  }

  /* =========================== CONFERENCES =========================== */

  function conferences() {
    const c = C.conferences;
    const n = c.national;
    const ev = c.events.list;
    return `
    ${pageHero(c.hero)}

    <section class="section section--red">
      <div class="container split split--center">
        <div class="reveal">
          <span class="kicker">Why we gather</span>
          <p class="lead" style="margin-top:18px">${esc(c.intro)}</p>
        </div>
        <p class="quote-band reveal" style="--delay:100ms">${esc(c.missionQuote)}</p>
      </div>
    </section>

    <section class="section section--paper" id="national-symposium">
      <div class="container">
        ${sectionHead({ kicker: n.kicker, title: n.title })}
        <article class="feature reveal">
          <div class="feature__side">
            <span class="chip chip--yellow" style="align-self:flex-start">${icon("calendar")}${esc(n.when)}</span>
            <div>
              <div class="feature__big">${esc(n.edition)}<sup>${esc(n.editionSuffix)}</sup></div>
              <p style="margin-top:10px;font-family:var(--font-display);font-size:clamp(1.6rem,3vw,2.4rem);line-height:1;text-transform:uppercase">${esc(n.label)}</p>
            </div>
          </div>
          <div class="feature__body">
            <span class="kicker">Theme of the ${esc(n.edition + n.editionSuffix)} edition</span>
            <h3 style="margin-top:14px">${esc(n.theme)}</h3>
            ${paras(n.text)}
            <div class="feature__photos">${n.photos.map((p) => `<img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy" decoding="async" width="800" height="1000">`).join("")}</div>
          </div>
        </article>
      </div>
    </section>

    <section class="section" id="organized">
      <div class="container">
        ${sectionHead({ kicker: c.events.kicker, title: c.events.title })}
        <div class="event-cards${ev.length === 2 || ev.length === 4 ? " event-cards--2" : ""}">
          ${ev
            .map(
              (e, i) => `<article class="event-card reveal" ${delay(i, 80, 2)}>
                <span class="event-card__when">${icon(e.icon)}${esc(e.tag)}</span>
                <h3>${esc(e.title)}</h3>
                <p>${esc(e.text)}</p>
                ${e.where ? `<p class="event-card__where">${icon("map-pin")}${esc(e.where)}</p>` : ""}
              </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section--black" id="patrons">
      <div class="container">
        ${sectionHead({ kicker: c.patrons.kicker, title: c.patrons.title, lead: c.patrons.lead, split: true })}
        <div class="patrons">
          ${c.patrons.list
            .map((p, i) => `<article class="patron reveal" ${delay(i, 90, 2)}><span class="patron__mono" aria-hidden="true">${esc(p.mono)}</span><div><p class="patron__title">${esc(p.title)}</p><p class="patron__name">${esc(p.name)}</p></div></article>`)
            .join("")}
        </div>
        <p class="family-lines reveal" style="max-width:60ch;margin-top:clamp(32px,5vw,56px)">${esc(c.patrons.closing)}</p>
      </div>
    </section>

    <section class="section" id="international">
      <div class="container">
        ${sectionHead({ kicker: c.international.kicker, title: c.international.title, lead: c.international.lead, split: true })}
        <div class="grid grid-2">
          ${c.international.list
            .map((x, i) => `<article class="card card--block reveal" style="--delay:${i * 90}ms"><span class="icon-badge">${icon(x.icon)}</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></article>`)
            .join("")}
        </div>
      </div>
    </section>

    ${ctaBand({
      title: c.cta.title,
      text: c.cta.text,
      buttons:
        btn({ label: "Email JPSA", href: mailto("Conference partnership"), variant: "yellow", iconName: "mail" }) +
        btn({ label: "Follow @jpsa_ipsf", href: L.instagram, variant: "outline-light", iconName: "instagram" }),
    })}`;
  }

  /* =========================== PORTFOLIOS =========================== */

  const podcast = (pc) => `
    <div class="podcast reveal">
      <div class="wave" aria-hidden="true">${Array.from({ length: 12 }, (_, i) => `<span style="--i:${i}"></span>`).join("")}</div>
      <div>
        <span class="kicker">${esc(pc.kicker)}</span>
        <h3 style="margin-top:12px">${esc(pc.title)} — <span>${esc(pc.tagline)}</span></h3>
        <p>${esc(pc.text)}</p>
      </div>
    </div>`;

  function portfolios() {
    const p = C.portfolios;
    const themeCls = { white: "", gray: "section--gray", yellow: "section--yellow", black: "section--black" };
    const dot = { white: "var(--red)", gray: "var(--red)", yellow: "var(--yellow)", black: "#555" };

    const subnav = `
      <nav class="subnav" aria-label="Portfolios">
        <div class="container subnav__inner">
          ${p.list.map((x) => `<a href="#${x.id}" data-spy="${x.id}"><span class="dot" style="--dot:${dot[x.theme] || "var(--red)"}"></span>${esc(x.name)}</a>`).join("")}
        </div>
      </nav>`;

    const sections = p.list
      .map(
        (x) => `
      <section class="section portfolio ${themeCls[x.theme] || ""}" id="${x.id}">
        <div class="container">
          <div class="portfolio__head reveal">
            <div class="portfolio__num" aria-hidden="true">${esc(x.num)}</div>
            <div>
              <span class="kicker">Portfolio ${esc(x.num)}</span>
              <h2 style="margin-top:14px">${esc(x.name)}</h2>
              <p class="portfolio__tag">${esc(x.tagline)}</p>
              <div class="portfolio__intro prose">${paras(x.intro)}</div>
            </div>
          </div>
          <div class="grid ${x.items.length === 3 ? "grid-3" : "grid-4"}">
            ${x.items
              .map(
                (it, i) => `<article class="item-card reveal" ${delay(i, 70, 4)}>
                  <span class="icon-badge${x.theme === "black" ? "" : " icon-badge--black"}">${icon(it.icon)}</span>
                  <h3>${esc(it.title)}</h3>
                  <p>${esc(it.text)}</p>
                  ${it.href ? textLink("Learn more", it.href) : ""}
                </article>`
              )
              .join("")}
          </div>
          ${x.highlight ? `<div class="highlight reveal"><span class="highlight__num">${esc(x.highlight.num)}</span><p>${rich(x.highlight.text)}</p></div>` : ""}
          ${x.podcast ? podcast(x.podcast) : ""}
          ${x.closing ? `<p class="portfolio__tag reveal" style="max-width:40ch;margin-top:40px">${esc(x.closing)}</p>` : ""}
          ${x.id === "student-exchange" ? `<div class="cluster" style="margin-top:36px">${btn({ label: "Explore the exchange program", href: "sep.html", variant: "yellow" })}</div>` : ""}
        </div>
      </section>`
      )
      .join("");

    return `
    ${pageHero(p.hero)}
    <section class="section section--tight">
      <div class="container"><p class="lead reveal" style="max-width:64ch">${esc(p.intro)}</p></div>
    </section>
    ${subnav}
    ${sections}
    <section class="section closing">
      <div class="container reveal">
        <span class="kicker">${esc(p.closing.kicker)}</span>
        <h2 style="margin-top:16px">${esc(p.closing.title)}</h2>
        <p class="lead">${esc(p.closing.text)}</p>
        <span class="serif">${esc(p.closing.serif)}</span>
        <div class="cluster" style="justify-content:center;margin-top:32px">
          ${btn({ label: "Join JPSA", href: L.join })}
          ${btn({ label: "Meet the family", href: "index.html#family", variant: "outline" })}
        </div>
      </div>
    </section>`;
  }

  /* ============================ PARTNERS ============================ */

  function partners() {
    const P = C.partners;
    const card = (x, strategic) => `
      <article class="partner${strategic ? " partner--strategic" : ""} reveal">
        <span class="partner__mono" aria-hidden="true">${esc(x.mono)}</span>
        ${x.type ? `<span class="partner__type">${esc(x.type)}</span>` : ""}
        <h3 class="partner__name">${esc(x.name)}</h3>
        <p>${esc(x.text)}</p>
      </article>`;

    const coupon = (x) => `
      <article class="coupon reveal">
        <div class="coupon__main"><h3>${esc(x.name)}</h3><p>${esc(x.area)}</p>${x.note ? `<p class="small">${esc(x.note)}</p>` : ""}</div>
        <div class="coupon__stub">${esc(x.discount)}<span class="small" style="font-family:var(--font-body);font-weight:700">off</span></div>
      </article>`;

    const soon = `
      <article class="coupon coupon--soon reveal">
        <div class="coupon__main"><h3>${esc(P.perks.soon.title)}</h3><p>${esc(P.perks.soon.text)}</p><div style="margin-top:6px">${textLink("@jpsa_ipsf", L.instagram)}</div></div>
        <div class="coupon__stub">${icon("coffee")}</div>
      </article>`;

    const memberCard = `
      <div class="page-hero__card" aria-hidden="true">
        <div class="member-card">
          <div class="member-card__top"><img src="${C.site.logo.light}" alt=""><span class="member-card__chip"></span></div>
          <div><div class="member-card__label">Membership card</div><div class="member-card__name">JPSA Member</div></div>
        </div>
      </div>`;

    return `
    ${pageHero({ ...P.hero, extra: memberCard })}

    <section class="section section--tight">
      <div class="container">
        <div class="filter-bar reveal">
          <p class="lead" style="max-width:58ch">${esc(P.intro)}</p>
          <div class="pills" role="group" aria-label="Filter partners">
            ${P.filters.map((f, i) => `<button class="pill" type="button" data-filter="${f.id}" aria-pressed="${i === 0}">${esc(f.label)}</button>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section section--paper" id="strategic" data-group="strategic">
      <div class="container">
        ${sectionHead({ kicker: P.strategic.kicker, title: P.strategic.title })}
        <div class="partner-grid">${P.strategic.list.map((x) => card(x, true)).join("")}</div>
      </div>
    </section>

    <section class="section" id="hospitals" data-group="hospitals">
      <div class="container">
        ${sectionHead({ kicker: P.hospitals.kicker, title: P.hospitals.title })}
        <div class="partner-grid">${P.hospitals.list.map((x) => card(x)).join("")}</div>
      </div>
    </section>

    <section class="section section--gray" id="areas" data-group="all">
      <div class="container">
        ${sectionHead({ kicker: P.areas.kicker, title: P.areas.title })}
        <ol class="areas" role="list">
          ${P.areas.list.map((a, i) => `<li class="area reveal" ${delay(i, 70, 5)}><div class="area__num">${pad(i + 1)}</div><h3>${esc(a.title)}</h3><p>${esc(a.text)}</p></li>`).join("")}
        </ol>
      </div>
    </section>

    <section class="section" id="careers" data-group="careers">
      <div class="container">
        ${sectionHead({ kicker: P.careers.kicker, title: P.careers.title, lead: P.careers.lead, split: true })}
        <div class="wordmarks reveal">${P.careers.list.map((x) => `<div class="wordmark"><strong>${esc(x.name)}</strong><span>${esc(x.note)}</span></div>`).join("")}</div>
      </div>
    </section>

    <section class="section section--paper" id="perks" data-group="perks">
      <div class="container">
        ${sectionHead({ kicker: P.perks.kicker, title: P.perks.title, lead: P.perks.lead, split: true })}
        <div class="perks">${P.perks.list.length ? P.perks.list.map(coupon).join("") : soon}</div>
      </div>
    </section>

    ${ctaBand({
      title: P.cta.title,
      text: P.cta.text,
      buttons:
        btn({ label: "Become a partner", href: mailto("Partnership with JPSA"), variant: "yellow", iconName: "mail" }) +
        btn({ label: "JPSA on LinkedIn", href: L.linkedin, variant: "outline-light", iconName: "linkedin" }),
    })}`;
  }

  window.JP.pages = { home, sep, conferences, portfolios, partners };
})();
