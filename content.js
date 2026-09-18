/* ==========================================================================
   JPSA WEBSITE CONTENT
   --------------------------------------------------------------------------
   Almost everything you read on the site lives in this one file.
   Edit the text between the quotes, save, and refresh the page.

   • Text can use <strong>…</strong>, <em>…</em> and <br> for emphasis.
   • Photos live in assets/img/. People's photos go in assets/img/people/
     and are named after the person's id in the TEAM section (e.g. eyad-tayem.jpg).
   • Lines marked TODO still need information from the JPSA team.
   ========================================================================== */

export default {
  site: {
    name: "Jordan Pharmaceutical Students' Association",
    short: "JPSA",
    slogan: "Students Today, Pharmacists Tomorrow.",
    email: "jordanjpsa.cp@gmail.com", // contact listed for JPSA in IPSF's member directory
    logo: {
      dark: "assets/img/brand/logo-dark.png",
      light: "assets/img/brand/logo-light.png",
    },
    links: {
      join: "https://www.instagram.com/jpsa_ipsf/", // TODO: replace with the membership form link
      instagram: "https://www.instagram.com/jpsa_ipsf/",
      facebook: "https://www.facebook.com/JPSA.IPSF/",
      linkedin: "https://www.linkedin.com/company/jordan-pharmaceutical-students-association-jpsa",
      sepInstagram: "https://www.instagram.com/sep.jordan/",
      sepJordan: "https://sepjordan.net", // JPSA's exchange platform: the application form, destinations, stories, FAQ
      ipsf: "https://www.ipsf.org",
      ipsfSep: "https://www.ipsf.org/student-exchange-programme",
      ipsfFaq: "https://www.ipsf.org/faq",
      ipsfJpsa: "https://www.ipsf.org/association/jpsa-jordan",
    },
  },

  /* The top menu and the footer's "Explore" list.
     menu: false → footer only (the logo already links to the home page).
     menuLabel → a shorter name for the top menu only (the footer keeps "label"). */
  nav: [
    { page: "home", label: "Home", href: "index.html", menu: false },
    { page: "about", label: "About", href: "about.html" },
    { page: "team", label: "Team", href: "team.html" },
    { page: "sep", label: "Student Exchange", menuLabel: "Exchange", href: "sep.html" },
    { page: "conferences", label: "Conferences", href: "conferences.html" },
    { page: "portfolios", label: "Portfolios", href: "portfolios.html" },
    { page: "partners", label: "Partners", href: "partners.html" },
  ],

  /* The year each university joined JPSA ("Our journey" on the About page;
     the names also scroll across the home page) */
  universities: [
    { year: 2007, abbr: "JU", name: "The University of Jordan" },
    { year: 2014, abbr: "JUST", name: "Jordan University of Science & Technology" },
    { year: 2018, abbr: "MEU", name: "Middle East University" },
    { year: 2019, abbr: "HU", name: "The Hashemite University" },
    { year: 2023, abbr: "UOP", name: "University of Petra" },
    { year: 2024, abbr: "ASU", name: "Applied Science Private University" },
    { year: 2026, abbr: "AAU", name: "Al-Ahliyya Amman University" },
  ],

  /* ------------------------------------------------------------------ HOME */
  home: {
    // Shown in search results and link previews.
    meta: {
      title: "JPSA — Jordan Pharmaceutical Students' Association",
      description: "JPSA brings pharmacy students across Jordan together through student exchange, conferences, public health and humanitarian campaigns, and social events.",
    },

    hero: {
      kicker: "Jordan Pharmaceutical Students' Association",
      titleLines: ["This is", "JPSA"],
      sub: "What if one decision to join could turn into a hundred stories worth telling?",
      chips: ["Est. May 2007", "Affiliated with IPSF", "7 universities"],
      // ⚠️ NOT SHOWN ON THE SITE (since September 2026): "photos" and "badge" below.
      // They belonged to the hero's collage (three framed photos and a spinning round badge). The
      // hero now shows members' faces instead (the family wall photos, assets/img/family/), so
      // editing these three photos, their alt texts or the badge text changes nothing visible.
      // They are kept in case the collage comes back. To bring it back, it goes in
      // src/sections/home/HomeHero.astro (the collage markup, with its styles in
      // public/assets/css/pages.css). Its last version is in the git history: commit 150fe4a.
      photos: [
        { src: "assets/img/moments/jpsa-banner.jpg", alt: "A JPSA member next to the JPSA banner: Students Today, Pharmacists Tomorrow" },
        { src: "assets/img/moments/national-symposium-7.jpg", alt: "A JPSA member in a suit in front of the 7th National Symposium backdrop" },
        { src: "assets/img/moments/national-symposium-7-b.jpg", alt: "A JPSA member with arms crossed in front of the 7th National Symposium banner" },
      ],
      badge: "Est. 2007 • Affiliated with IPSF • ",
    },

    manifesto: {
      kicker: "Welcome to JPSA",
      title: "The stories behind the name.",
      text: [
        "Behind every event you see, there are people who stayed late to make it happen. Behind every achievement, there is a team that believed in something bigger.",
        "Behind every picture, there is a story — and behind every story, there is someone who decided to be part of it.",
      ],
      lines: [
        "A first event.",
        "A new friendship.",
        "A stage you never thought you would stand on.",
        "An idea that became something real.",
        "A challenge that changed you.",
      ],
      close: "And somewhere along the way… a community started feeling like home. <strong>That's JPSA.</strong>",
    },

    why: {
      kicker: "Why JPSA?",
      title: "You don't just build your CV. You build yourself.",
      quote: "Maybe you join for the experience. Maybe for the opportunities. Maybe for the people. But somehow, you stay for something more.",
      text: [
        "You stay because JPSA gives you a space to try before you feel ready, to speak before you feel confident, to lead before you ever imagined yourself as a leader.",
        "Here, pharmacy goes beyond lectures, labs, and exams. It becomes:",
      ],
      words: ["Conversations", "Connections", "Projects", "Challenges", "Stages", "Friendships"],
      after: "JPSA is where an idea can become an initiative, a teammate can become a lifelong friend, and a student can discover a version of themselves they hadn't met yet.",
      benefitsTitle: "What you get as a member",
      benefits: [
        { icon: "plane-takeoff", title: "Train abroad with SEP", text: "Apply for professional exchanges through IPSF's Student Exchange Programme — or host students coming to Jordan.", href: "sep.html" },
        { icon: "presentation", title: "Symposium & conferences", text: "Our annual National Symposium and conferences put you in the room with professionals and leaders.", href: "conferences.html" },
        { icon: "microscope", title: "Scientific Research Program", text: "Take your first steps into scientific research with our annual program.", href: "portfolios.html#professional-development" },
        { icon: "briefcase", title: "Internships & careers", text: "Training and internship opportunities with partners such as AstraZeneca, Nairoukh Pharma and Saudi Hospital.", href: "partners.html#careers" },
        { icon: "hospital", title: "Hospital collaborations", text: "Scientific activities, awareness campaigns and training with hospitals across Jordan.", href: "partners.html#hospitals" },
        { icon: "heart-pulse", title: "Public health campaigns", text: "Turn knowledge into action through awareness campaigns, lectures and our Medical Convention.", href: "portfolios.html#public-health" },
        { icon: "hand-heart", title: "Humanitarian campaigns", text: "Iftar gatherings with orphans, Eid clothing campaigns, blood donation and elderly visits.", href: "portfolios.html#humanitarian" },
        { icon: "party-popper", title: "Social events", text: "Sports, games, creative activities and gatherings — the moments you'll remember most.", href: "portfolios.html#social" },
        { icon: "users", title: "Lead a team", text: "Join a subcommittee or become a local coordinator at your university.", href: "team.html" },
      ],
      eligibility: "<strong>Who can join?</strong> Every pharmacy student at a Jordanian university — and graduates, up to four years after graduation.",
    },

    // The photo wall near the end of the page: assets/img/family/f01.jpg … f66.jpg
    wallCount: 66,

    cta: {
      title: "What will yours be?",
      text: "Ask ten members and you might get ten different answers. Your JPSA story starts with one decision.",
    },
  },

  /* ----------------------------------------------------------------- ABOUT */
  about: {
    // Shown in search results and link previews.
    meta: {
      title: "About JPSA — Our Story, Mission & IPSF",
      description: "How JPSA started at the University of Jordan in 2007, grew to seven universities and joined IPSF's global network, and the mission and vision behind it.",
    },

    intro: {
      kicker: "About JPSA",
      title: "Founded in 2007. Built by students.",
      text: [
        "JPSA is a non-political, non-profit, and non-religious organization that was founded in May 2007. JPSA is affiliated with the International Pharmaceutical Students' Federation (IPSF), the mother federation of pharmacy students' associations around the world.",
        "All pharmacy students at Jordanian universities are eligible to join — up until four years after their graduation. Today, JPSA is present in seven universities across Jordan.",
      ],
      badges: ["Non-political", "Non-profit", "Non-religious"],
      stats: [
        { num: "2007", label: "Founded in May 2007" },
        { num: "7", label: "Universities across Jordan" },
        { num: "4", label: "Main portfolios, plus our exchange programme" },
        { num: "100", label: "Countries in the IPSF network" },
      ],
    },

    journey: {
      kicker: "Our journey",
      title: "One university in 2007. Seven today.",
      lead: "JPSA started at the University of Jordan and has grown campus by campus, bringing the spirit of JPSA closer to every pharmacy student in the country.",
    },

    ipsf: {
      kicker: "Our global family",
      title: "Part of the International Pharmaceutical Students' Federation",
      text: [
        "The International Pharmaceutical Students' Federation was founded in 1949 in London. The Federation now represents around 500,000 pharmacy students and recent graduates in 100 countries worldwide.",
        "IPSF is a non-governmental, non-political, and non-religious organization, and the leading international advocacy organization of pharmacy students promoting improved public health.",
        "For JPSA members, that means international exchanges, regional and global congresses, and friends in every corner of the world.",
      ],
      facts: [
        { k: "1949", v: "Founded in London, United Kingdom" },
        { k: "500K", v: "Pharmacy students and recent graduates represented" },
        { k: "100", v: "Countries worldwide" },
        { k: "EMRO", v: "JPSA belongs to IPSF's Eastern Mediterranean Regional Office" },
      ],
    },

    mission: {
      kicker: "Mission & vision",
      title: "What we're here for",
      mission: "To empower Jordanian youth, unlock their full potential, and equip them with the knowledge, guidance, and opportunities they need to excel as future healthcare professionals and leaders.",
      vision: "We do not simply prepare students for their future. We help them discover it.",
      values: ["Growing", "Serving", "Connecting", "Exploring", "Creating impact"],
    },
  },

  /* ------------------------------------------------------------------ TEAM
     team.html: the Executive Committee and the teams (the exchange team is on sep.html).
     • Every person is written ONCE, in "people" at the end of this section. Positions and
       teams point to a person by id, so a name is always spelled the same way on the site.
     • Photos appear by themselves: add assets/img/people/<id>.jpg (for example
       eyad-tayem.jpg). Until then, the person's initials are shown.
     • "university" is only for people who represent a university (local coordinators).
     • A mistake (an id that is not in "people", a university that is not in the list at the
       top of this file, a team without a leader) stops the build with a message saying what
       to fix, so the live site stays as it was. */
  team: {
    // Shown in search results and link previews.
    meta: {
      title: "Our Team — JPSA",
      description: "Meet JPSA's Executive Committee and its teams: who leads each one, what they do, and who to contact at your university.",
    },

    hero: {
      kicker: "Meet the family",
      title: "More than a mandate. A family.",
      lead: "From our Executive Committee, who led the journey with vision and commitment, to our Local Coordinators, who brought the spirit of JPSA closer to every university, and our Subcommittees, whose passion, creativity, and dedication turned ideas into action — every individual played a role in shaping this mandate.",
      ghost: "Family",
    },

    structure: [
      { title: "Executive Committee", text: "Leads the journey with vision and commitment." },
      { title: "Local Coordinators", text: "Bring the spirit of JPSA closer to every university." },
      { title: "Subcommittees", text: "Turn ideas into action with passion, creativity and dedication." },
    ],
    lines: "This family was never defined by positions or titles. It was built through teamwork, late nights, shared challenges, unforgettable moments, and a common belief in making a difference.",

    groups: [
      { id: "leadership", name: "Leadership" },
      { id: "portfolios", name: "Portfolios" },
      { id: "exchange", name: "Student Exchange" },
      { id: "operations", name: "Operations" },
    ],

    exco: {
      title: "The faces behind the vision.",
      lead: "The voices behind the ideas. The hands behind every achievement.",
      // "team" is the id of the team the position leads (the President and Vice President lead none).
      positions: [
        { title: "President", person: "eyad-tayem", group: "leadership" },
        { title: "Vice President", person: "malak-elaian", group: "leadership" },
        { title: "Secretary General", person: "layan-ayman", group: "operations", team: "secretary-general" },
        { title: "Treasurer", person: "saif-ghassab", group: "operations", team: "treasurer" },
        { title: "Contact Person", person: "bayanne-fannoun", group: "operations", team: "contact-person" },
        // page: "sep" → shown on sep.html, not on team.html: that page is the whole home of the programme.
        { title: "Student Exchange Officer", person: "saif-khraino", group: "exchange", team: "student-exchange", page: "sep" },
        { title: "External Relations", person: "abd-alrahman-shammout", group: "operations", team: "external-relations" },
        { title: "Humanitarian Campaigns", person: "jude-obaidat", group: "portfolios", team: "humanitarian" },
        { title: "Internal Communication", person: "abd-alrahman-othman", group: "operations", team: "internal-communication" },
        { title: "Media and Publications", person: "adawiya-ali", group: "operations", team: "media-publications" },
        { title: "Professional Development", person: "ahmad-alhourani", group: "portfolios", team: "professional-development" },
        { title: "Public Health", person: "abd-alrahman-abu-rumman", group: "portfolios", team: "public-health" },
        { title: "Social Events", person: "sama-shadid", group: "portfolios", team: "social" },
      ],
    },

    teams: {
      kicker: "Who does what",
      title: "Our teams. One family.",
      lead: "Every JPSA activity is run by one of our teams. Pick one to see what they do.",
      labels: {
        ledBy: "Led by",
        member: "member",
        members: "members",
        does: "What the team does",
        now: "What's happening now",
        join: "If you join",
        work: "See what they do",
        local: "At your university",
        portfolio: "Portfolio",
        name: "Name",
        role: "Role",
        university: "University",
        coverage: "At your university today:",
        notYet: "Not yet:",
        jump: "Teams",
        meetTeam: "Meet the team",
      },
      /* The team cards follow the order of this list (the exchange team is on sep.html).
         For each team:
         • work: the page that describes the team's work (portfolios and exchange), linked instead of repeated.
         • does / join: DRAFTS written on 2026-09-16, to be corrected by the committee.
           join says what a member of this team does all year, in words no other team uses. Name the
           National Symposium only where it is the team's own work (Professional Development leads it):
           the symposium is one event a year, and the teams work all year.
         • now: left empty on purpose; the committee fills it in (hidden while empty).
         • members: the team's members, each { person: "their-id", role: "Their role" }. Shown in one
           table, "At your university": name, role, and the university from the person's entry in
           people, sorted by university. A column only shows when someone in the team has it, so a
           member without a role is written { person: "their-id" }. */
      list: [
        {
          id: "secretary-general", name: "Secretary General", group: "operations",
          does: "Keeps the association organized: meeting records, official documents and deadlines.",
          now: "",
          join: "You take the minutes at meetings, follow up on what each team agreed to do, and keep our files in order.",
          members: [
            { person: "diana-aboqudais" },
          ],
        },
        {
          id: "treasurer", name: "Treasurer", group: "operations",
          does: "Looks after JPSA's finances: budgets, payments and financial records.",
          now: "",
          join: "You prepare each activity's budget with the Treasurer, collect the receipts, and keep a clear record of what comes in and goes out.",
          members: [
            { person: "bassel-mahfouz", role: "Fundraising & logistics subcommittee" },
            { person: "mohammad-alqaisi", role: "Fundraising & logistics subcommittee" },
            { person: "saleh-mohammad", role: "Logistics subcommittee" },
            { person: "leen-shawabkeh", role: "Logistics subcommittee" },
            { person: "aisha-jaradat", role: "Logistics subcommittee" },
            { person: "nadia-nasri", role: "Logistics subcommittee" },
          ],
        },
        {
          id: "contact-person", name: "Contact Person", group: "operations",
          does: "Connects JPSA with IPSF: official communication with the federation, and its news and opportunities for our members.",
          now: "",
          join: "As a subcommittee member at your university, you share IPSF news and opportunities with students on your campus.",
          members: [
            { person: "mariam-amer", role: "Subcommittee" },
            { person: "amjad-rani", role: "Subcommittee" },
            { person: "tala-amro", role: "Subcommittee" },
          ],
        },
        {
          // The whole team is shown on sep.html (page: "sep"), next to what the programme is and how to apply.
          id: "student-exchange", name: "Student Exchange Programme", group: "exchange", page: "sep",
          // No "does" here: sep.html explains the programme above this team. "now" stays for updates.
          now: "",
          join: "As a local exchange officer, you answer exchange questions at your university and help welcome incoming students.",
          members: [
            { person: "tamam-alttayyeb", role: "Local exchange officer" },
            { person: "lara-alashi", role: "Promotion & cultural coordinator" },
            { person: "sadeen-salem", role: "Local exchange officer" },
            { person: "layan-mansour", role: "Local exchange officer" },
          ],
        },
        {
          id: "external-relations", name: "External Relations", group: "operations",
          does: "Builds JPSA's relationships with hospitals, companies and institutions, and looks after our partnerships.",
          now: "",
          join: "You look for new partners and sponsors, prepare the proposals we send them, and stay in touch with the ones we already have.",
          members: [
            { person: "mohammad-selawe", role: "Local coordinator" },
            { person: "aleen-arar", role: "Local coordinator" },
            { person: "yara-altarsha", role: "Local coordinator" },
            { person: "hala-abushattal", role: "Local coordinator" },
            { person: "noor-awadallah", role: "Subcommittee" },
            { person: "mohammad-albeshtawi", role: "Subcommittee" },
            { person: "jamal-almomani", role: "Subcommittee" },
            { person: "layan-faidi", role: "Subcommittee" },
            { person: "zaid-asaad", role: "Subcommittee" },
            { person: "zaid-abushanab", role: "Subcommittee" },
          ],
        },
        {
          id: "humanitarian", name: "Humanitarian Campaigns", group: "portfolios", work: "portfolios.html#humanitarian",
          does: "Organizes JPSA's volunteering and giving campaigns, run on campuses by its local coordinators.",
          now: "",
          join: "As a local coordinator, you gather students at your university and organize the team's campaigns there.",
          members: [
            { person: "majd-alshlool", role: "Local coordinator" },
            { person: "salma-alnasser", role: "Local coordinator" },
            { person: "tala-almagharbeh", role: "Local coordinator" },
            { person: "yazan-jarrar", role: "Local coordinator" },
            { person: "dima-halasa", role: "Local coordinator" },
          ],
        },
        {
          id: "internal-communication", name: "Internal Communication", group: "operations",
          does: "Keeps our teams and members connected, so everyone knows what is happening and who to ask.",
          now: "",
          join: "You pass updates between teams and universities, answer members' questions, and help new members find their way.",
          members: [
            { person: "samer-tadrous", role: "Local coordinator" },
            { person: "mustafa-daoud", role: "Local coordinator" },
            { person: "juri-al-hadid", role: "Local coordinator" },
            { person: "sarah-alwrekat", role: "Local coordinator" },
            { person: "nadeen-shoshary", role: "Local coordinator" },
            { person: "hala-obeid", role: "Subcommittee" },
            { person: "tala-khalaf", role: "Subcommittee" },
            { person: "yasmeen-denieh", role: "Subcommittee" },
            { person: "neveen-shawabkeh", role: "Subcommittee" },
          ],
        },
        {
          id: "media-publications", name: "Media and Publications", group: "operations",
          does: "Tells JPSA's story: social media, design, photography and publications for every team.",
          now: "",
          join: "You design our posts, photograph our activities, and write the captions and publications that go with them.",
          members: [
            { person: "boshra-rawashdeh", role: "Local coordinator" },
            { person: "shahd-ahmad", role: "Local coordinator" },
            { person: "sadeen-alrosan", role: "Local coordinator" },
            { person: "rahaf-masoud", role: "Local coordinator" },
            { person: "laina-alzuhiri", role: "Subcommittee" },
            { person: "noor-bataineh", role: "Subcommittee" },
            { person: "tala-amro", role: "Subcommittee" },
          ],
        },
        {
          id: "professional-development", name: "Professional Development", group: "portfolios", work: "portfolios.html#professional-development",
          does: "Builds the programs that help members prepare for their careers, and brings together the committee behind our National Symposium.",
          now: "",
          join: "You help prepare trainings and the Scientific Research Program, work on the JPSA Podcast and JPSA Talks, and organize our annual National Symposium.",
          members: [
            { person: "ahmad-bakri", role: "Local coordinator" },
            { person: "asma-mefrej", role: "Local coordinator" },
            { person: "faisal-alhadid", role: "Local coordinator" },
            { person: "shahed-nasser", role: "Local coordinator" },
            { person: "mira-hamad", role: "Local coordinator" },
            { person: "bissan-alghroz", role: "Subcommittee" },
            { person: "jamal-alrazem", role: "Subcommittee" },
            { person: "tamam-alttayyeb", role: "Subcommittee" },
            { person: "zeena-alhaj", role: "Subcommittee" },
          ],
        },
        {
          id: "public-health", name: "Public Health", group: "portfolios", work: "portfolios.html#public-health",
          does: "Plans JPSA's public health activities and takes them to campuses through its local coordinators.",
          now: "",
          join: "As a local coordinator, you bring the team's activities to your own university and help run them there.",
          members: [
            { person: "noura-almajali", role: "Local coordinator" },
            { person: "jude-rabayah", role: "Local coordinator" },
            { person: "aya-alajlouni", role: "Local coordinator" },
            { person: "tala-hilweh", role: "Local coordinator" },
            { person: "zeena-alhaj", role: "Local coordinator" },
          ],
        },
        {
          id: "social", name: "Social Events", group: "portfolios", work: "portfolios.html#social",
          does: "Brings members from different universities together outside the classroom, so the association feels like a community.",
          now: "",
          join: "You plan sports, game nights and creative sessions, from the first idea to the day itself.",
          members: [
            { person: "hala-dawoud" },
            { person: "yasmeen-abudayyeh" },
            { person: "reema-mustafa" },
            { person: "suleiman-awjan" },
          ],
        },
      ],
    },

    /* Everyone, once. The id is the name in lowercase with hyphens, and names the photo file. */
    people: [
      // Executive Committee
      { id: "eyad-tayem", name: "Eyad Tayem" },
      { id: "malak-elaian", name: "Malak Elaian" },
      { id: "abd-alrahman-abu-rumman", name: "Abd Alrahman Abu Rumman" },
      { id: "ahmad-alhourani", name: "Ahmad Alhourani" },
      { id: "jude-obaidat", name: "Jude Obaidat" },
      { id: "sama-shadid", name: "Sama Shadid" },
      { id: "saif-khraino", name: "Saif Khraino" },
      { id: "layan-ayman", name: "Layan Ayman" },
      { id: "saif-ghassab", name: "Saif Ghassab" },
      { id: "bayanne-fannoun", name: "Bayanne Fannoun" },
      { id: "abd-alrahman-shammout", name: "Abd Alrahman Shammout" },
      { id: "abd-alrahman-othman", name: "Abd Alrahman Othman" },
      { id: "adawiya-ali", name: "Adawiya Ali" },
      // Public Health
      { id: "noura-almajali", name: "Noura Almajali", university: "JU" },
      { id: "jude-rabayah", name: "Jude Rabayah", university: "JUST" },
      { id: "aya-alajlouni", name: "Aya Alajlouni", university: "HU" },
      { id: "tala-hilweh", name: "Tala Hilweh", university: "UOP" },
      { id: "zeena-alhaj", name: "Zeena Alhaj", university: "MEU" }, // also in Professional Development
      // Professional Development
      { id: "ahmad-bakri", name: "Ahmad Bakri", university: "JUST" },
      { id: "asma-mefrej", name: "Asma Mefrej", university: "MEU" },
      { id: "faisal-alhadid", name: "Faisal Alhadid", university: "HU" },
      { id: "shahed-nasser", name: "Shahed Nasser", university: "ASU" },
      { id: "mira-hamad", name: "Mira Hamad", university: "UOP" },
      { id: "bissan-alghroz", name: "Bissan Alghroz", university: "JUST" },
      { id: "jamal-alrazem", name: "Jamal Alrazem", university: "JUST" },
      // Humanitarian Campaigns
      { id: "majd-alshlool", name: "Majd Alshlool", university: "JU" },
      { id: "salma-alnasser", name: "Salma Alnasser", university: "JUST" },
      { id: "tala-almagharbeh", name: "Tala Almagharbeh", university: "UOP" },
      { id: "yazan-jarrar", name: "Yazan Jarrar", university: "ASU" },
      { id: "dima-halasa", name: "Dima Halasa", university: "MEU" },
      // Social Events
      { id: "hala-dawoud", name: "Hala Dawoud", university: "MEU" },
      { id: "yasmeen-abudayyeh", name: "Yasmeen Abudayyeh", university: "JU" },
      { id: "reema-mustafa", name: "Reema Mustafa", university: "ASU" },
      { id: "suleiman-awjan", name: "Suleiman Awjan", university: "ASU" },
      // Student Exchange Programme
      { id: "tamam-alttayyeb", name: "Tamam Alttayyeb", university: "JUST" }, // also in Professional Development
      { id: "lara-alashi", name: "Lara Alashi", university: "JU" },
      { id: "sadeen-salem", name: "Sadeen Salem", university: "UOP" },
      { id: "layan-mansour", name: "Layan Mansour", university: "JU" },
      // Secretary General
      { id: "diana-aboqudais", name: "Diana AboQudais", university: "JUST" },
      // Treasurer
      { id: "bassel-mahfouz", name: "Bassel Mahfouz", university: "JU" },
      { id: "mohammad-alqaisi", name: "Mohammad Alqaisi", university: "JU" },
      { id: "saleh-mohammad", name: "Saleh Mohammad", university: "MEU" },
      { id: "leen-shawabkeh", name: "Leen Shawabkeh", university: "JU" },
      { id: "aisha-jaradat", name: "Aisha Jaradat", university: "MEU" },
      { id: "nadia-nasri", name: "Nadia Nasri" },
      // Contact Person
      { id: "mariam-amer", name: "Mariam Amer", university: "UOP" },
      { id: "amjad-rani", name: "Amjad Rani", university: "JU" },
      { id: "tala-amro", name: "Tala Amro", university: "JUST" }, // also in Media and Publications
      // External Relations
      { id: "mohammad-albeshtawi", name: "Mohammad Albeshtawi", university: "JUST" },
      { id: "aleen-arar", name: "Aleen Arar", university: "JU" },
      { id: "jamal-almomani", name: "Jamal Almomani", university: "ASU" },
      { id: "hala-abushattal", name: "Hala Abushattal", university: "UOP" },
      { id: "layan-faidi", name: "Layan Faidi", university: "UOP" },
      { id: "zaid-asaad", name: "Zaid Asaad", university: "JUST" },
      { id: "zaid-abushanab", name: "Zaid AbuShanab", university: "JU" },
      { id: "noor-awadallah", name: "Noor Awadallah", university: "JU" },
      { id: "yara-altarsha", name: "Yara Altarsha", university: "UOP" },
      { id: "mohammad-selawe", name: "Mohammad Selawe", university: "JUST" },
      // Internal Communication
      { id: "tala-khalaf", name: "Tala Khalaf", university: "AAU" },
      { id: "yasmeen-denieh", name: "Yasmeen Denieh", university: "ASU" },
      { id: "juri-al-hadid", name: "Juri Al-Hadid", university: "ASU" },
      { id: "samer-tadrous", name: "Samer Tadrous", university: "HU" },
      { id: "nadeen-shoshary", name: "Nadeen Shoshary", university: "MEU" },
      { id: "mustafa-daoud", name: "Mustafa Daoud", university: "JUST" },
      { id: "hala-obeid", name: "Hala Obeid", university: "UOP" },
      { id: "neveen-shawabkeh", name: "Neveen Shawabkeh", university: "HU" },
      { id: "sarah-alwrekat", name: "Sarah Alwrekat", university: "JU" },
      // Media and Publications
      { id: "boshra-rawashdeh", name: "Boshra Rawashdeh", university: "JU" },
      { id: "laina-alzuhiri", name: "Laina Alzuhiri", university: "JU" },
      { id: "noor-bataineh", name: "Noor Bataineh", university: "JU" },
      { id: "sadeen-alrosan", name: "Sadeen Alrosan", university: "ASU" },
      { id: "rahaf-masoud", name: "Rahaf Masoud", university: "JU" },
      { id: "shahd-ahmad", name: "Shahd Ahmad", university: "ASU" },
    ],
  },

  /* ------------------------------------------------------------------- SEP */
  sep: {
    // Shown in search results and link previews.
    meta: {
      title: "Student Exchange Programme (SEP) — JPSA",
      description: "Train abroad through IPSF's Student Exchange Programme, or come to Jordan: how JPSA's SEP works, who can apply and what to expect.",
    },
    hero: {
      kicker: "Beyond borders. Beyond classrooms.",
      title: "Student Exchange Programme", // the page's h1: the full name, for search
      crumb: "Student Exchange Programme",
      lead: "The Student Exchange Programme opens the door for students to experience pharmacy and life from a global perspective.",
      ghost: "SEP",
    },
    stats: [
      { num: "1953", label: "The year IPSF's exchange programme began" },
      { num: "80+", label: "Countries taking part" },
      { num: "1,000+", label: "Students exchanged every year" },
      { num: "2–12", label: "Weeks per placement (2 weeks to 3 months)" },
    ],
    statsSource: "Figures: IPSF",
    ways: {
      kicker: "Two directions",
      title: "Go out. Welcome in.",
      out: { icon: "plane-takeoff", title: "Go abroad", text: "Through exchange opportunities, students from Jordan can travel around the world, experience different cultures, explore new academic environments, and gain knowledge beyond their local setting." },
      in: { icon: "map-pin", title: "Come to Jordan", text: "At the same time, JPSA welcomes students from around the world to Jordan — giving them the opportunity to discover our culture, our country, and the different fields of pharmacy we have to offer." },
    },
    fields: {
      kicker: "Where you can train",
      title: "Across the fields of pharmacy",
      lead: "The programme provides training opportunities across different fields of pharmacy, allowing students to gain practical experience, broaden their knowledge, and discover new areas of interest.",
      list: [
        { icon: "pill", label: "Community pharmacy" },
        { icon: "hospital", label: "Hospital & clinical" },
        { icon: "factory", label: "Pharmaceutical industry" },
        { icon: "microscope", label: "Research & academia" },
        { icon: "route", label: "Wholesale & distribution" },
        { icon: "shield-check", label: "Health agencies" },
      ],
    },
    steps: {
      kicker: "Going abroad",
      title: "How it works",
      list: [
        { title: "Be a JPSA member", text: "The exchange is open to pharmacy students and recent graduates through IPSF member associations like JPSA." },
        { title: "Talk to our SEP team", text: "JPSA's Student Exchange Officer guides you through deadlines, requirements and destinations." },
        // button: shows the yellow "apply" button (links.sepJordan) inside this step.
        { title: "Apply on SEP Jordan", text: "Fill in the form on sepjordan.net and choose your destinations and the kind of training you're looking for.", button: "Apply on SEP Jordan" },
        { title: "Interview", text: "A short interview with our exchange team." },
        { title: "Register with IPSF", text: "Once you're accepted, create your account on the IPSF website and complete the official SEP application." },
        { title: "Get matched & prepare", text: "When a host accepts you, sort out your visa, insurance, travel and accommodation." },
        { title: "Train, explore, share", text: "Gain practical experience abroad — then come back and share your story with the family." },
      ],
      note: "IPSF charges an application fee (part of it goes to the host country), and some associations add their own. IPSF also offers an SEP Grant. Always check the latest rules on the IPSF website.",
    },
    incoming: {
      kicker: "Incoming students",
      title: "Coming to Jordan?",
      lead: "From facilitating meaningful educational experiences to creating unforgettable memories, the SEP team works to ensure that every exchange student gets the best possible experience — both academically and personally.",
      facts: [
        { k: "~24", v: "Exchange places offered every year" },
        { k: "2–4", v: "Weeks per placement" },
        { k: "4", v: "Fields: research, industry, clinical & hospital, and community pharmacy" },
        { k: "2", v: "Seasons: winter (late Jan – early Mar) and summer (mid-Jun – late Sep)" },
      ],
      note: "Placements are based in Amman. There is no stipend, but our SEP team helps with airport pickup and accommodation, and plans trips around the country.",
      source: "Details from JPSA's page on the IPSF website.",
      tiles: [
        { art: "petra", title: "Petra", text: "The Rose City, carved into sandstone cliffs — one of the New Seven Wonders of the World." },
        { art: "rum", title: "Wadi Rum", text: "Red sands and towering mountains in a desert protected as a UNESCO World Heritage Site." },
        { art: "deadsea", title: "Dead Sea", text: "Float at the lowest point on Earth's land surface." },
        { art: "amman", title: "Amman", text: "Your home base: a lively capital where history and modern city life meet." },
      ],
    },
    faq: {
      kicker: "Good to know",
      title: "Questions, answered",
      list: [
        { q: "Who can apply?", a: "Pharmacy students, and graduates up to four years after graduation, through an IPSF member association such as JPSA." },
        { q: "How long is an exchange?", a: "IPSF placements usually last from two weeks up to three months. Incoming placements in Jordan run for 2–4 weeks." },
        { q: "Where can I train?", a: "It depends on the host country: community and hospital pharmacy, clinical settings, industry, wholesale, university research, and government or private health agencies." },
        { q: "Is the exchange paid?", a: "Generally no. SEP is a training experience rather than a paid job, and there are application fees. IPSF offers an SEP Grant to support some students. Placements in Jordan do not include a stipend." },
        { q: "How do I start?", a: "Reach out to our SEP team early. Applications go through JPSA's Student Exchange Officer and follow IPSF's deadlines. Follow @sep.jordan for announcements." },
      ],
    },
    cta: {
      title: "Ready to cross borders?",
      text: "Follow @sep.jordan for announcements, or email JPSA to talk to the SEP team.",
    },
  },

  /* ----------------------------------------------------------- CONFERENCES */
  conferences: {
    // Shown in search results and link previews.
    meta: {
      title: "Conferences — JPSA",
      description: "JPSA's National Symposium, the conferences we organized and took part in, and IPSF's events beyond Jordan.",
    },
    hero: {
      kicker: "Conferences",
      title: "Stages worth standing on.",
      lead: "At JPSA, we take great pride in organizing impactful conferences that bring together students, professionals, and leaders from across Jordan and beyond.",
      ghost: "Stage",
    },
    intro: "Whether through our internationally recognized conferences or our annual National Symposium, we remain committed to creating meaningful platforms for learning, networking, and professional growth.",
    missionQuote: "The core mission of these events is to empower Jordanian youth, unlock their full potential, and equip them with the knowledge, guidance, and opportunities needed to excel as future healthcare professionals and leaders.",
    national: {
      kicker: "Our flagship",
      edition: "7",
      editionSuffix: "th",
      label: "National Symposium",
      when: "September 2025",
      title: "The National Symposium",
      theme: "Prescribing Initiatives, Dispensing Innovation",
      text: [
        "Every year, our National Symposium brings students together to explore diverse fields of pharmacy, discuss current trends, and discover the opportunities that await them in the professional world.",
        "The first edition was held in the presence of Her Royal Highness Princess Sumaya bint El Hassan.",
        "The 7th edition was held under the patronage of former Prime Minister Dr. Abd Al Raouf Al Rawabdeh, in cooperation with the Jordan Pharmacists Association — our strategic partner for the conference.",
      ],
      photos: [
        { src: "assets/img/moments/national-symposium-7.jpg", alt: "A JPSA member in a suit in front of the 7th National Symposium backdrop" },
        { src: "assets/img/moments/national-symposium-7-b.jpg", alt: "A JPSA member with arms crossed in front of the 7th National Symposium banner" },
      ],
    },
    /* Each conference below (events and joined) can carry event photos, shown under its section:
         gallery: [{ event: "Name", when: "Month Year", photos: [{ src: "assets/img/conferences/<event>/01.jpg", alt: "What the photo shows" }] }]
       The same guard as the portfolios: a name, at least one photo, a description for each. */
    events: {
      kicker: "Hosted by JPSA",
      title: "Conferences we've organized",
      list: [
        { tag: "July 2018", icon: "earth", title: "IPSF Eastern Mediterranean Pharmaceutical Symposium", text: "JPSA hosted IPSF's regional symposium (EMPS), welcoming pharmacy students from across the Eastern Mediterranean region.", where: "Amman, Jordan" },
        // TODO confirm, then uncomment: { tag: "2010", icon: "earth", title: "1st IPSF Eastern Mediterranean Pharmaceutical Symposium", text: "…", where: "Jordan" },
        { tag: "Every year", icon: "presentation", title: "National Symposium", text: "Our flagship annual conference, now in its seventh edition, built with the Jordan Pharmacists Association.", where: "Jordan",
          gallery: [
            { event: "7th National Symposium", photos: [
                { src: "assets/img/conferences/7th-national-symposium/01.jpg", alt: "A group on stage holding certificates and an oversized cheque, in front of the symposium backdrop" },
                { src: "assets/img/conferences/7th-national-symposium/02.jpg", alt: "A large group photo in front of the symposium backdrop" },
                { src: "assets/img/conferences/7th-national-symposium/03.jpg", alt: "A row of people standing in front of the symposium backdrop" },
                { src: "assets/img/conferences/7th-national-symposium/04.jpg", alt: "Two people working together on a laptop in the conference hall" },
                { src: "assets/img/conferences/7th-national-symposium/05.jpg", alt: "Three people posing in front of the symposium backdrop" },
              ] },
          ] },
        { tag: "Public Health", icon: "stethoscope", title: "Medical Convention", text: "Organized by our Public Health Team so students can expand their medical knowledge and look beyond the classroom.", where: "" },
        { tag: "Professional Development", icon: "microscope", title: "Scientific Research Program", text: "An annual program that introduces students to the fundamentals of research and their first steps into scientific inquiry.", where: "" },
      ],
    },
    /* Conferences in Jordan that JPSA took part in: one line each, with the year and the partners
       (with: [...]). Leave "with" empty until the partners are confirmed. The build stops on a
       conference without a name or a year. */
    joined: {
      kicker: "In Jordan, with others",
      title: "Conferences we took part in",
      list: [
        { name: "Pharmarise", year: "2025", with: ["HopeGivers"] },
        { name: "Step Up Forum", year: "2026", with: ["HopeGivers", "JADS", "Medical Club"],
          gallery: [
            { event: "Step Up Forum 2026", photos: [
                { src: "assets/img/conferences/step-up-forum-2026/01.jpg", alt: "A group posing in front of the Step Up Forum 2026 sponsor wall" },
                { src: "assets/img/conferences/step-up-forum-2026/02.jpg", alt: "A panel seated on stage under a screen reading Rethinking Health in Oncology" },
                { src: "assets/img/conferences/step-up-forum-2026/03.jpg", alt: "Six people posing on stage in front of the panel screen" },
              ] },
          ] },
        { name: "Mandala", year: "2026", with: [], // TODO: partners not confirmed yet
          gallery: [
            { event: "Mandala 2026", photos: [
                { src: "assets/img/conferences/mandala-2026/01.jpg", alt: "An award presented in front of a projection screen" },
                { src: "assets/img/conferences/mandala-2026/02.jpg", alt: "Attendees seated around a round table during a session" },
                { src: "assets/img/conferences/mandala-2026/03.jpg", alt: "A group posing with a certificate beside the Jordanian flag" },
                { src: "assets/img/conferences/mandala-2026/04.jpg", alt: "A crowded hall of attendees at round tables" },
                { src: "assets/img/conferences/mandala-2026/05.jpg", alt: "A panel of six seated beneath the projection screen" },
                { src: "assets/img/conferences/mandala-2026/06.jpg", alt: "A panel at a table, one member speaking into a microphone" },
                { src: "assets/img/conferences/mandala-2026/07.jpg", alt: "Attendees listening from their seats in a warmly lit hall" },
              ] },
          ] },
      ],
      // Full names of abbreviations used above: shown on hover and read by screen readers.
      abbr: { JADS: "Jordanian Association of Dental Students" },
    },
    international: {
      kicker: "Beyond Jordan",
      title: "On the international stage",
      lead: "As an IPSF member association, JPSA connects Jordanian pharmacy students with IPSF's global and regional events.",
      list: [
        { icon: "earth", title: "IPSF World Congress", text: "IPSF's annual global gathering of pharmacy students, with the federation's General Assembly, educational sessions and cultural exchange." },
        { icon: "map", title: "Eastern Mediterranean Pharmaceutical Symposium", text: "IPSF EMRO's regional symposium for our region." },
      ],
      // TODO: list the congresses JPSA delegations attended, e.g.
      // { icon: "plane", title: "71st IPSF World Congress", text: "Bangkok, Thailand — 2026" },
    },
    cta: {
      title: "Speak. Sponsor. Show up.",
      text: "Want to speak at, sponsor, or partner on our next conference? We'd love to hear from you.",
    },
  },

  /* ------------------------------------------------------------ PORTFOLIOS */
  portfolios: {
    // Shown in search results and link previews.
    meta: {
      title: "Our Portfolios — JPSA",
      description: "Public Health, Professional Development, Humanitarian Campaigns and Social Events: the four portfolios behind everything JPSA does.",
    },
    hero: {
      kicker: "Our portfolios",
      title: "More than a pharmacy student experience.",
      lead: "At JPSA, we believe that being a pharmacy student is about more than academics. It is about growing, serving, connecting, exploring, and creating an impact.",
      ghost: "Impact",
    },
    intro: "Through our four main portfolios — and our Student Exchange Programme — we aim to provide students with experiences and opportunities that enrich every aspect of their journey.",
    /* The sections of the page, in order.
       • Portfolios are numbered automatically in this order (01, 02, …). The Student Exchange
         Programme is not a portfolio (portfolio: false), so it has no number.
       • gallery: photos from the team's big events, shown after its cards (nothing is shown while
         the list is empty). One entry per event, with the photos in assets/img/portfolios/<id>/:
           { event: "Name of the event", when: "Month Year", photos: [
               { src: "assets/img/portfolios/public-health/event-1.jpg", alt: "What the photo shows, in one sentence" },
           ] },
         Every event needs a name and at least one photo, and every photo a description (alt):
         otherwise the build stops and says what is missing. */
    list: [
      {
        id: "public-health", name: "Public Health", theme: "white",
        tagline: "Raising awareness. Saving lives.",
        intro: [
          "The Public Health Team works to empower students and communities with knowledge about health and disease prevention. Through awareness campaigns addressing prevalent diseases, their prevention, and proper management, the team turns knowledge into meaningful action.",
          "From educational lectures on rare diseases and clinical cases to our Medical Convention, the team creates opportunities for students to expand their medical knowledge and look beyond the classroom.",
        ],
        items: [
          { icon: "megaphone", title: "Awareness campaigns", text: "Campaigns on prevalent diseases, their prevention and proper management — on campus and in the community." },
          { icon: "book-open", title: "Educational lectures", text: "Lectures on rare diseases and clinical cases that take students beyond the curriculum." },
          { icon: "stethoscope", title: "Medical Convention", text: "Our convention that lets students expand their medical knowledge and meet the field." },
          { icon: "hospital", title: "Hospital collaborations", text: "Awareness activities and scientific sessions with hospitals such as Jordan Hospital, KHCC and Specialty Hospital, plus campaigns with the Jordan Breast Cancer Program (JBCP).", href: "partners.html#hospitals" },
        ],
        gallery: [
          { event: "Medical Convention", photos: [
              { src: "assets/img/portfolios/public-health/medical-convention-01.jpg", alt: "A plaque presented on stage, in front of a screen showing the Jordanian flag" },
              { src: "assets/img/portfolios/public-health/medical-convention-02.jpg", alt: "A group photo on stage, in front of a screen showing the Medical Convention logo" },
              { src: "assets/img/portfolios/public-health/medical-convention-03.jpg", alt: "Visitors looking at a leaflet at an outdoor exhibition stand" },
              { src: "assets/img/portfolios/public-health/medical-convention-04.jpg", alt: "The audience standing in the front rows of a lecture hall" },
              { src: "assets/img/portfolios/public-health/medical-convention-05.jpg", alt: "Visitors talking at a supplements stand outdoors" },
              { src: "assets/img/portfolios/public-health/medical-convention-06.jpg", alt: "A panel of five seated on stage, under the Medical Convention screen" },
              { src: "assets/img/portfolios/public-health/medical-convention-07.jpg", alt: "A full lecture hall during the convention" },
              { src: "assets/img/portfolios/public-health/medical-convention-08.jpg", alt: "Five people on stage, one holding an award, in front of a presentation screen" },
              { src: "assets/img/portfolios/public-health/medical-convention-09.jpg", alt: "A plaque presented on stage, in front of the Medical Convention screen" },
            ] },
        ],
      },
      {
        id: "professional-development", name: "Professional Development", theme: "gray",
        tagline: "Preparing students for what comes next.",
        intro: [
          "The Professional Development Team focuses on equipping students with the knowledge, skills, and experiences they need to step confidently into their future careers. Through training programs and career-oriented initiatives, students explore different fields of pharmacy and better understand the world of work.",
          "The team also leads the annual Scientific Research Program and our annual National Symposium.",
        ],
        items: [
          { icon: "graduation-cap", title: "Training programs", text: "Career-oriented trainings such as Leaders in Training and our Scientific Workshops Program." },
          { icon: "microscope", title: "Scientific Research Program", text: "An annual program introducing students to the fundamentals of research and scientific inquiry." },
          { icon: "presentation", title: "National Symposium", text: "Our annual symposium on diverse fields of pharmacy, current trends and the opportunities ahead.", href: "conferences.html" },
        ],
        /* JPSA Talks and the JPSA Podcast are two different things.
           JPSA Talks is a yearly event with a theme and six speakers, so it gets the bigger block.
           Each year is one entry in "editions", newest first: { year, theme, text, talks: [...] }.
           The build stops on an edition without its year, theme, line or talks. */
        talks: {
          name: "JPSA Talks",
          tagline: "The road, not just the destination.",
          text: "A TED-style stage where entrepreneurs, leaders and people who have built something stand up for twenty to thirty minutes and tell how they got there. JPSA Talks started in the 2025/2026 mandate and returns every year under a new theme.",
          editions: [
            {
              year: "2026",
              theme: "The Unwritten",
              text: "Six speakers, six parts of a life that rarely make it into the telling.",
              talks: [
                "The Unwritten Acts of Kindness",
                "The Unwritten Rules of Influence",
                "The Unwritten Challenges of Entrepreneurship",
                "The Unwritten Moments Behind the Camera",
                "The Unwritten Journey Between Passion and Profession",
                "The Unwritten Side of Saving Lives",
              ],
            },
          ],
        },
        // The JPSA Podcast: an ongoing series.
        podcast: {
          name: "JPSA Podcast",
          tagline: "Where ideas find their voice.",
          text: "Conversations beyond the classroom that bring together students, professionals, leaders, and changemakers to explore the experiences, challenges, and opportunities shaping the future of pharmacy.",
        },
        gallery: [
          { event: "Scientific Research Program 2025/2026", photos: [
              { src: "assets/img/portfolios/professional-development/scientific-research-program-2025-2026-01.jpg", alt: "A group holding a certificate, in front of a panel discussion slide" },
              { src: "assets/img/portfolios/professional-development/scientific-research-program-2025-2026-02.jpg", alt: "A certificate folder handed over on stage" },
              { src: "assets/img/portfolios/professional-development/scientific-research-program-2025-2026-03.jpg", alt: "Six people on stage, two of them holding a certificate" },
              { src: "assets/img/portfolios/professional-development/scientific-research-program-2025-2026-04.jpg", alt: "Two people at a lectern, one speaking while reading from a tablet" },
              { src: "assets/img/portfolios/professional-development/scientific-research-program-2025-2026-05.jpg", alt: "The audience smiling in the front rows of a lecture hall" },
              { src: "assets/img/portfolios/professional-development/scientific-research-program-2025-2026-06.jpg", alt: "A large group on stage in front of the JPSA logo, holding awards and an oversized cheque" },
              { src: "assets/img/portfolios/professional-development/scientific-research-program-2025-2026-07.jpg", alt: "An award handed over on stage, beside a JPSA banner" },
            ] },
          { event: "Scientific Research Program 2024/2025", photos: [
              { src: "assets/img/portfolios/professional-development/scientific-research-program-2024-2025-01.jpg", alt: "A large group photo on a lecture hall stage" },
              { src: "assets/img/portfolios/professional-development/scientific-research-program-2024-2025-02.jpg", alt: "A speaker at a lectern, beside a JPSA banner" },
              { src: "assets/img/portfolios/professional-development/scientific-research-program-2024-2025-03.jpg", alt: "A plaque presented on stage" },
            ] },
        ],
      },
      {
        id: "humanitarian", name: "Humanitarian Campaigns", theme: "white",
        tagline: "Where humanity meets the joy of giving.",
        intro: [
          "Because making a difference is not always about how much we give, but about how much we care.",
          "The Humanitarian Campaigns Team creates opportunities for students to give back to their communities and bring happiness to those who need it most. Every activity is driven by compassion and a genuine desire to serve.",
        ],
        items: [
          { icon: "moon-star", title: "Ramadan iftars", text: "Iftar gatherings with orphans during the holy month." },
          { icon: "gift", title: "Eid clothing campaigns", text: "New clothes that bring Eid joy to children and families." },
          { icon: "heart-pulse", title: "Blood donation", text: "Campaigns that rally students to donate blood and save lives." },
          { icon: "heart-handshake", title: "Elderly visits", text: "Visits to the elderly, and many other volunteering initiatives." },
        ],
        closing: "Through every campaign, the team reminds us that small acts of kindness can leave a lasting impact.",
        gallery: [],
      },
      {
        id: "social", name: "Social Events", theme: "yellow",
        tagline: "Because every journey needs a little fun.",
        intro: [
          "After learning, developing ourselves, raising awareness, and giving back to our communities, there is always room to simply enjoy the journey.",
          "The Social Events Team creates spaces for students to connect, have fun, build friendships, and expand their circles beyond their usual surroundings.",
        ],
        items: [
          { icon: "volleyball", title: "Sports & recreation", text: "Sports and recreational activities that get everyone out and moving." },
          { icon: "palette", title: "Drawing & decorating", text: "Creative sessions where members make things together." },
          { icon: "gamepad-2", title: "Games & gatherings", text: "Game nights and social gatherings that bring people together." },
          { icon: "camera", title: "Memories", text: "The moments that often become the memories we remember most." },
        ],
        gallery: [],
      },
      {
        // No tagline or intro here: sep.html already opens with them, and repeating them would duplicate that page.
        // Not a fifth portfolio: no number and no "Portfolio" label (the intro above says "four main portfolios").
        id: "student-exchange", portfolio: false, name: "Student Exchange Programme", theme: "black",
        items: [
          { icon: "plane-takeoff", title: "Go abroad", text: "Travel, experience different cultures and explore new academic environments.", href: "sep.html" },
          { icon: "map-pin", title: "Welcome students to Jordan", text: "Host exchange students and show them our culture and our country.", href: "sep.html#incoming" },
          { icon: "flask-conical", title: "Train across pharmacy", text: "Gain practical experience in different fields of pharmacy.", href: "sep.html#fields" },
        ],
        gallery: [],
      },
    ],
    closing: {
      kicker: "One belief",
      title: "Many opportunities",
      text: "Whether it is learning about a disease, attending a medical convention, developing a professional skill, conducting research, volunteering for a humanitarian cause, making lifelong friends, or crossing borders to experience pharmacy from a different perspective — there is a place for every student to learn, grow, and make an impact.",
      serif: "Because at JPSA, we do not simply prepare students for their future. We help them discover it.",
    },
  },

  /* -------------------------------------------------------------- PARTNERS */
  partners: {
    // Shown in search results and link previews.
    meta: {
      title: "Partners & Collaborators — JPSA",
      description: "The institutions, hospitals and companies that work with JPSA — and the perks that come with membership.",
    },
    hero: {
      kicker: "Partners & collaborations",
      title: "Partnerships for a healthier community.",
      lead: "JPSA takes pride in building strong relationships with leading pharmaceutical and healthcare institutions in Jordan — to empower pharmacy students, enhance professional development, and contribute to impactful healthcare initiatives nationwide.",
      ghost: "Together",
    },
    intro: "Our collaborations support educational programs, awareness campaigns, scientific events, and opportunities that bridge the gap between students and the professional pharmaceutical sector.",
    filters: [
      { id: "all", label: "All" },
      { id: "strategic", label: "Strategic partners" },
      { id: "hospitals", label: "Hospitals & healthcare" },
      { id: "careers", label: "Internships & careers" },
      { id: "perks", label: "Member perks" },
    ],
    strategic: {
      kicker: "Strategic partners",
      title: "Our strategic partners",
      list: [
        { mono: "JPA", name: "Jordan Pharmacists Association", type: "Strategic partner", text: "A strategic partner in JPSA's annual National Conference, supporting pharmacy students through professional, scientific, and healthcare-related initiatives." },
        { mono: "JFDA", name: "Jordan Food and Drug Administration", type: "Strategic partner", text: "Healthcare awareness initiatives and scientific activities that support pharmacy students and public health education." },
        { mono: "IPSF", name: "International Pharmaceutical Students' Federation", type: "International federation", text: "The mother federation of pharmacy students' associations worldwide, and our gateway to exchanges, congresses and a global network." },
        { mono: "JBCP", name: "Jordan Breast Cancer Program", type: "Public health partner", text: "Awareness campaigns and public health initiatives that promote early detection and community health awareness across Jordan." },
      ],
    },
    hospitals: {
      kicker: "Hospitals & healthcare",
      title: "Hospitals we work with",
      list: [
        { mono: "JH", name: "Jordan Hospital", text: "Healthcare initiatives, awareness campaigns, and scientific activities that support pharmacy students and community engagement." },
        { mono: "KHCC", name: "King Hussein Cancer Center", text: "Awareness campaigns and healthcare initiatives that support public health advocacy and student engagement." },
        { mono: "SPH", name: "Specialty Hospital", text: "Scientific activities, healthcare initiatives, and awareness campaigns that support the professional and practical development of students." },
        { mono: "AIH", name: "Al Istiklal Hospital", text: "Healthcare initiatives and awareness activities that promote student engagement and support future healthcare professionals." },
        { mono: "SAH", name: "Saudi Hospital", text: "Healthcare initiatives, awareness campaigns, and training opportunities that support student development and community engagement." },
        { mono: "AH", name: "Abdali Hospital", text: "Healthcare initiatives, scientific activities, and training opportunities that support the professional development of pharmacy students." },
      ],
    },
    areas: {
      kicker: "How we collaborate",
      title: "Five ways we work together",
      list: [
        { title: "Scientific & professional activities", text: "Organized with healthcare institutions across Jordan." },
        { title: "Official meetings", text: "Strengthening partnerships with professional institutions." },
        { title: "Healthcare collaborations", text: "Supporting community health and student development." },
        { title: "Public health & awareness", text: "Impactful campaigns and events for the community." },
        { title: "Internships & careers", text: "Training programs and professional opportunities." },
      ],
    },
    careers: {
      kicker: "Internships & careers",
      title: "Where members train",
      lead: "Supporting pharmacy students through internships, training programs, and professional opportunities in collaboration with leading healthcare organizations and pharmaceutical companies.",
      list: [
        { name: "AstraZeneca", note: "Pharmaceutical company" },
        { name: "OMNITRADE", note: "Career partner" },
        { name: "Saudi Hospital", note: "Healthcare" },
        // TODO: Ibn Sina goes back here once the official name arrives (a medicine warehouse, not a pharmacy).
        { name: "Nairoukh Pharma", note: "Pharmaceutical company" },
      ],
    },
    perks: {
      kicker: "Member perks",
      title: "Your card, your perks",
      lead: "Show your JPSA membership and enjoy discounts at partner cafés and places around Jordan.",
      // TODO: add café partners, e.g. { name: "Café name", area: "Amman — Jabal Al-Weibdeh", discount: "15%", note: "Show your JPSA card" },
      list: [],
      soon: { title: "Café partners coming soon", text: "We're lining up member discounts at cafés around Jordan. Follow @jpsa_ipsf to hear first." },
    },
    cta: {
      title: "Let's build something together.",
      text: "JPSA is committed to building meaningful partnerships for a healthier community. Want to support Jordan's future pharmacists?",
    },
  },

  footer: {
    blurb: "A non-political, non-profit, and non-religious organization founded in May 2007 and affiliated with the International Pharmaceutical Students' Federation.",
  },
};
