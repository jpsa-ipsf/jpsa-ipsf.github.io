/* ==========================================================================
   JPSA WEBSITE CONTENT
   --------------------------------------------------------------------------
   Almost everything you read on the site lives in this one file.
   Edit the text between the quotes, save, and refresh the page.

   • Text can use <strong>…</strong>, <em>…</em> and <br> for emphasis.
   • Photos live in assets/img/. To add a person, drop a 4:5 portrait
     (e.g. 640×800) into assets/img/people/ and point "photo" to it.
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
      ipsf: "https://www.ipsf.org",
      ipsfSep: "https://www.ipsf.org/student-exchange-programme",
      ipsfFaq: "https://www.ipsf.org/faq",
      ipsfJpsa: "https://www.ipsf.org/association/jpsa-jordan",
    },
  },

  /* The top menu and the footer's "Explore" list.
     menu: false → footer only (the logo already links to the home page). */
  nav: [
    { page: "home", label: "Home", href: "index.html", menu: false },
    { page: "about", label: "About", href: "about.html" },
    { page: "sep", label: "Student Exchange", href: "sep.html" },
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
        { icon: "plane-takeoff", title: "Train abroad with SEP", text: "Apply for professional exchanges through IPSF's Student Exchange Program — or host students coming to Jordan.", href: "sep.html" },
        { icon: "presentation", title: "Symposium & conferences", text: "Our annual National Symposium and conferences put you in the room with professionals and leaders.", href: "conferences.html" },
        { icon: "microscope", title: "Scientific Research Program", text: "Take your first steps into scientific research with our annual program.", href: "portfolios.html#professional-development" },
        { icon: "briefcase", title: "Internships & careers", text: "Training and internship opportunities with partners such as AstraZeneca, KHCC and Saudi Hospital.", href: "partners.html#careers" },
        { icon: "hospital", title: "Hospital collaborations", text: "Scientific activities, awareness campaigns and training with hospitals across Jordan.", href: "partners.html#hospitals" },
        { icon: "heart-pulse", title: "Public health campaigns", text: "Turn knowledge into action through awareness campaigns, lectures and our Medical Convention.", href: "portfolios.html#public-health" },
        { icon: "hand-heart", title: "Humanitarian campaigns", text: "Iftar gatherings with orphans, Eid clothing campaigns, blood donation and elderly visits.", href: "portfolios.html#humanitarian" },
        { icon: "party-popper", title: "Social events", text: "Sports, games, creative activities and gatherings — the moments you'll remember most.", href: "portfolios.html#social" },
        { icon: "users", title: "Lead a team", text: "Join a subcommittee or become a local coordinator at your university.", href: "about.html#family" },
      ],
      eligibility: "<strong>Who can join?</strong> Every pharmacy student at a Jordanian university — and graduates, up to four years after graduation.",
    },

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
        { num: "4", label: "Main portfolios, plus our exchange program" },
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

  /* ---------------------------------------------------------- THE FAMILY
     "Meet the family" on the About page. The photo wall (wallCount) is on the home page. */
  family: {
    kicker: "Meet the family",
    title: "More than a mandate. A family.",
    lead: "From our Executive Committee, who led the journey with vision and commitment, to our Local Coordinators, who brought the spirit of JPSA closer to every university, and our Subcommittees, whose passion, creativity, and dedication turned ideas into action — every individual played a role in shaping this mandate.",
    structure: [
      { title: "Executive Committee", text: "Leads the journey with vision and commitment." },
      { title: "Local Coordinators", text: "Bring the spirit of JPSA closer to every university." },
      { title: "Subcommittees", text: "Turn ideas into action with passion, creativity and dedication." },
    ],
    lines: "This family was never defined by positions or titles. It was built through teamwork, late nights, shared challenges, unforgettable moments, and a common belief in making a difference.",
    wallCount: 66, // photos assets/img/family/f01.jpg … f66.jpg
    peopleTitle: "The faces behind the vision.",
    peopleLead: "The voices behind the ideas. The hands behind every achievement.",
    // TODO: add each person's role (e.g. "President", "Public Health Director") and university.
    people: [
      { name: "Boshra Rawashdeh", role: "", photo: "assets/img/people/boshra-rawashdeh.jpg" },
      { name: "Dima Halasa", role: "", photo: "assets/img/people/dima-halasa.jpg" },
      { name: "Jude Rabayah", role: "", photo: "assets/img/people/jude-rabayah.jpg" },
      { name: "Juri Al-Hadid", role: "", photo: "assets/img/people/juri-al-hadid.jpg" },
      { name: "Lara Alashi", role: "", photo: "assets/img/people/lara-alashi.jpg" },
      { name: "Mira Hamad", role: "", photo: "assets/img/people/mira-hamad.jpg" },
      { name: "Mustafa Daoud", role: "", photo: "assets/img/people/mustafa-daoud.jpg" },
      { name: "Samer Tadrous", role: "", photo: "assets/img/people/samer-tadrous.jpg" },
      { name: "Sarah Alwrekat", role: "", photo: "assets/img/people/sarah-alwrekat.jpg" },
      { name: "Shahd Ahmad", role: "", photo: "assets/img/people/shahd-ahmad.jpg" },
      { name: "Shahed Nasser", role: "", photo: "assets/img/people/shahed-nasser.jpg" },
      { name: "Zeena Alhaj", role: "", photo: "assets/img/people/zeena-alhaj.jpg" },
    ],
  },

  /* The five teams, shown as cards on the About page. Each card links to the
     page that describes what the team does (so that text is not repeated here).
     "leads" is optional: [{ name: "…", role: "Team lead" }] */
  teams: [
    { id: "public-health", name: "Public Health", icon: "heart-pulse", href: "portfolios.html#public-health", leads: [] },
    { id: "professional-development", name: "Professional Development", icon: "briefcase", href: "portfolios.html#professional-development", leads: [] },
    { id: "humanitarian", name: "Humanitarian Campaigns", icon: "hand-heart", href: "portfolios.html#humanitarian", leads: [] },
    { id: "social", name: "Social Events", icon: "party-popper", href: "portfolios.html#social", leads: [] },
    { id: "student-exchange", name: "Student Exchange Program", icon: "plane", href: "sep.html", leads: [] },
  ],

  /* ------------------------------------------------------------------- SEP */
  sep: {
    // Shown in search results and link previews.
    meta: {
      title: "Student Exchange Programme (SEP) — JPSA",
      description: "Train abroad through IPSF's Student Exchange Programme, or come to Jordan: how JPSA's SEP works, who can apply and what to expect.",
    },
    hero: {
      kicker: "Student Exchange Program",
      title: "Beyond borders. Beyond classrooms.",
      lead: "The Student Exchange Program opens the door for students to experience pharmacy and life from a global perspective.",
      ghost: "SEP",
    },
    stats: [
      { num: "1953", label: "The year IPSF's exchange program began" },
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
      lead: "The program provides training opportunities across different fields of pharmacy, allowing students to gain practical experience, broaden their knowledge, and discover new areas of interest.",
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
        { title: "Register with IPSF", text: "Create your account on the IPSF website. Once our officer approves it, complete your SEP application." },
        { title: "Pick your destinations", text: "Choose up to three countries and the kind of training you're looking for." },
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
      description: "JPSA's National Conference, the IPSF Eastern Mediterranean symposium we hosted in Amman, and the national figures who stood with us.",
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
        "The 7th edition was held under the patronage of former Prime Minister Dr. Abd Al Raouf Al Rawabdeh, in cooperation with the Jordan Pharmacists Association — our strategic partner for the conference.",
      ],
      photos: [
        { src: "assets/img/moments/national-symposium-7.jpg", alt: "A JPSA member in a suit in front of the 7th National Symposium backdrop" },
        { src: "assets/img/moments/national-symposium-7-b.jpg", alt: "A JPSA member with arms crossed in front of the 7th National Symposium banner" },
      ],
    },
    events: {
      kicker: "Hosted by JPSA",
      title: "Conferences we've organized",
      list: [
        { tag: "July 2018", icon: "earth", title: "7th IPSF Eastern Mediterranean Pharmaceutical Symposium", text: "JPSA hosted IPSF's regional symposium (EMPS), welcoming pharmacy students from across the Eastern Mediterranean region.", where: "Amman, Jordan" },
        // TODO confirm, then uncomment: { tag: "2010", icon: "earth", title: "1st IPSF Eastern Mediterranean Pharmaceutical Symposium", text: "…", where: "Jordan" },
        { tag: "Every year", icon: "presentation", title: "National Symposium", text: "Our flagship annual conference, now in its seventh edition, built with the Jordan Pharmacists Association.", where: "Jordan" },
        { tag: "Public Health", icon: "stethoscope", title: "Medical Convention", text: "Organized by our Public Health Team so students can expand their medical knowledge and look beyond the classroom.", where: "" },
        { tag: "Professional Development", icon: "microscope", title: "Scientific Research Program", text: "An annual program that introduces students to the fundamentals of research and their first steps into scientific inquiry.", where: "" },
      ],
    },
    patrons: {
      kicker: "Who was with us",
      title: "Honored by their presence",
      lead: "Over the years, our conferences have been honored by the patronage and presence of distinguished national figures, including:",
      list: [
        { title: "Her Royal Highness", name: "Princess Sumaya bint El Hassan", mono: "SH" },
        { title: "Former Prime Minister", name: "Abd Al Raouf Al Rawabdeh", mono: "AR" },
        { title: "Former Minister of Youth", name: "Mohammad Al Nabulsi", mono: "MN" },
        { title: "Her Royal Highness", name: "Princess Alia Al Tabbaa", mono: "AT" },
      ],
      closing: "Their support reflects the significance of our mission and our continued commitment to investing in the next generation of changemakers in Jordan.",
    },
    international: {
      kicker: "Beyond Jordan",
      title: "On the international stage",
      lead: "As an IPSF member association, JPSA connects Jordanian pharmacy students with IPSF's global and regional events.",
      list: [
        { icon: "earth", title: "IPSF World Congress", text: "IPSF's annual global gathering of pharmacy students, with the federation's General Assembly, educational sessions and cultural exchange." },
        { icon: "map", title: "Eastern Mediterranean Pharmaceutical Symposium", text: "IPSF EMRO's regional symposium for our region — hosted by JPSA in Amman in 2018." },
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
    intro: "Through our four main portfolios — and our Student Exchange Program — we aim to provide students with experiences and opportunities that enrich every aspect of their journey.",
    list: [
      {
        id: "public-health", num: "01", name: "Public Health", theme: "white",
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
        highlight: { num: "~7,000", text: "<strong>residents served</strong> at a free medical day in Al-Sukhna camp, organized with Universal Medicine in December 2024." },
      },
      {
        id: "professional-development", num: "02", name: "Professional Development", theme: "gray",
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
        podcast: {
          kicker: "JPSA Talks",
          title: "JPSA Podcast",
          tagline: "Where ideas find their voice.",
          text: "Conversations beyond the classroom that bring together students, professionals, leaders, and changemakers to explore the experiences, challenges, and opportunities shaping the future of pharmacy.",
        },
      },
      {
        id: "humanitarian", num: "03", name: "Humanitarian Campaigns", theme: "white",
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
      },
      {
        id: "social", num: "04", name: "Social Events", theme: "yellow",
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
      },
      {
        // No tagline or intro here: sep.html already opens with them, and repeating them would duplicate that page.
        id: "student-exchange", num: "05", name: "Student Exchange Program", theme: "black",
        items: [
          { icon: "plane-takeoff", title: "Go abroad", text: "Travel, experience different cultures and explore new academic environments.", href: "sep.html" },
          { icon: "map-pin", title: "Welcome students to Jordan", text: "Host exchange students and show them our culture and our country.", href: "sep.html#incoming" },
          { icon: "flask-conical", title: "Train across pharmacy", text: "Gain practical experience in different fields of pharmacy.", href: "sep.html#fields" },
        ],
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
        { name: "King Hussein Cancer Center", note: "Healthcare" },
        { name: "Saudi Hospital", note: "Healthcare" },
        { name: "SKYDERMA", note: "Career partner" },
        { name: "SKN GYM", note: "Career partner" },
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
