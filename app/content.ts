export const languages = ["hu", "ro", "en"] as const;
export type Language = (typeof languages)[number];
export type PageKey = "home" | "about" | "music" | "contact";

export const isLanguage = (value: string): value is Language =>
  languages.includes(value as Language);

export const paths: Record<Language, Record<PageKey, string>> = {
  hu: { home: "", about: "rolunk", music: "zene", contact: "kapcsolat" },
  ro: { home: "", about: "despre-noi", music: "muzica", contact: "contact" },
  en: { home: "", about: "about", music: "music", contact: "contact" },
};

export const pageHref = (language: Language, page: PageKey) =>
  `/${language}${paths[language][page] ? `/${paths[language][page]}` : ""}`;

export const pageFromSlug = (language: Language, slug: string): PageKey | null => {
  const match = (Object.entries(paths[language]) as [PageKey, string][]).find(
    ([, value]) => value === slug,
  );
  return match?.[0] ?? null;
};

const members = [
  ["Dezső Attila", "hegedű, mandolin, brácsa, gitár", "vioară, mandolină, violă, chitară", "violin, mandolin, viola, guitar"],
  ["Szabó Bence", "hegedű, brácsa", "vioară, violă", "violin, viola"],
  ["Miklósi Hunor", "hegedű", "vioară", "violin"],
  ["Vincze Balázs", "brácsa, harmonika, gitár", "violă, acordeon, chitară", "viola, accordion, guitar"],
  ["Réman Gergő", "cimbalom, dob, harmonika", "țambal, tobe, acordeon", "cimbalom, drums, accordion"],
  ["Mohácsy Lőrinc Ágoston", "nagybőgő", "contrabas", "double bass"],
] as const;

const sharedMembers = (language: Language) =>
  members.map(([name, hu, ro, en]) => ({
    name,
    instrument: language === "hu" ? hu : language === "ro" ? ro : en,
  }));

export const content = {
  hu: {
    languageName: "Magyar",
    nav: { home: "Főoldal", about: "Rólunk", music: "Zene", contact: "Kapcsolat" },
    common: {
      location: "Kolozsvár · Erdély",
      booking: "Koncertszervezés",
      listen: "Hallgass bele",
      discover: "Ismerj meg minket",
      menu: "Menü",
      socials: "Kövess minket",
      rights: "Minden jog fenntartva.",
    },
    home: {
      eyebrow: "Népzene, szabad tűzön",
      title: "Hagyomány.\nTűz. Lendület.",
      intro:
        "Kárpát-medencei magyar, román és cigány népzene, bluegrass és country — frissen, pimaszul, autentikusan Kolozsvárról.",
      manifestoLabel: "A mi hangunk",
      manifesto:
        "Nem félünk új szemszögből nézni a hagyományra. A két zenei világ meglepően jól megfér a Katlan tüze mellett.",
      strip: ["Magyar népzene", "Román népzene", "Cigány népzene", "Bluegrass", "Country", "Saját dalok"],
      musicTitle: "Két part, egy tűz.",
      musicText:
        "Erdélytől az Appalache-hegységig keressük azt a nyers, közösségi energiát, amelyben a zene igazán élni kezd.",
      quote: "A hagyomány élő dolog — mi pedig élni szeretnénk vele.",
    },
    about: {
      eyebrow: "A zenekar",
      title: "Fiatalon.\nKomolyan.\nSzabadon.",
      lead:
        "A Katlan egy fiatal zenekar, amely azzal a lendülettel, frissességgel és kedves pimaszsággal lép a táncházmozgalomba, amire csak a fiatalság képes.",
      paragraphs: [
        "Nem félünk új szemszögből nézni a hagyományra — és pontosan ez teszi egyedivé azt, amit csinálunk.",
        "Elsősorban a Kárpát-medence gazdag népzenei hagyományából táplálkozunk, de szívesen kalandozunk az Appalache-hegység zenéjébe is: bluegrass és country. A két világ meglepően jól megfér a Katlan tüze mellett.",
        "Repertoárunkban megtalálható a magyar, román és cigány népzene, bluegrass, country, valamint saját szerzeményeink — mert a hagyomány élő dolog, és mi élni szeretnénk vele.",
      ],
      membersTitle: "A Katlan körül",
      members: sharedMembers("hu"),
    },
    music: {
      eyebrow: "Repertoár",
      title: "Két világ.\nEgy közös pulzus.",
      lead:
        "A vonó, a cimbalom és a nagybőgő ugyanahhoz az ősi ösztönhöz szól, mint a mandolin és a bluegrass lüktetése.",
      genres: [
        { number: "01", title: "Kárpát-medence", text: "Magyar, román és cigány népzene — táncházi erővel, az adatközlők iránti tisztelettel." },
        { number: "02", title: "Appalache", text: "Bluegrass és country — az amerikai népzene nyers, közösségi megszólalása." },
        { number: "03", title: "Saját hang", text: "Saját szerzemények, amelyekben a hagyomány nem keret, hanem eleven kiindulópont." },
      ],
      playerTitle: "Hallgasd a Katlant",
      playerText: "Lemezek, felvételek és a legfrissebb megjelenések Spotify-on.",
      spotify: "Megnyitás Spotify-on",
    },
    contact: {
      eyebrow: "Koncert · Táncház · Együttműködés",
      title: "Gyújtsuk\nbe.",
      lead:
        "Meghívnád a Katlant koncertre, fesztiválra vagy táncházba? Keress minket közvetlenül.",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      note: "Kolozsvárról indulunk, de a jó zenéért messzire is elmegyünk.",
    },
  },
  ro: {
    languageName: "Română",
    nav: { home: "Acasă", about: "Despre noi", music: "Muzică", contact: "Contact" },
    common: {
      location: "Cluj-Napoca · Transilvania",
      booking: "Rezervă un concert",
      listen: "Ascultă-ne",
      discover: "Descoperă povestea",
      menu: "Meniu",
      socials: "Urmărește-ne",
      rights: "Toate drepturile rezervate.",
    },
    home: {
      eyebrow: "Muzică tradițională, la foc liber",
      title: "Tradiție.\nFoc. Energie.",
      intro:
        "Muzică populară maghiară, românească și romă din Bazinul Carpatic, bluegrass și country — proaspăt, îndrăzneț și autentic, din Cluj.",
      manifestoLabel: "Sunetul nostru",
      manifesto:
        "Nu ne este teamă să privim tradiția dintr-un unghi nou. Cele două lumi muzicale conviețuiesc surprinzător de bine lângă focul Katlan.",
      strip: ["Muzică maghiară", "Muzică românească", "Muzică romă", "Bluegrass", "Country", "Compoziții proprii"],
      musicTitle: "Două lumi, același foc.",
      musicText:
        "Din Transilvania până în Munții Apalași, căutăm energia brută și comunitară prin care muzica prinde cu adevărat viață.",
      quote: "Tradiția este vie — iar noi vrem să trăim împreună cu ea.",
    },
    about: {
      eyebrow: "Formația",
      title: "Tineri.\nSerioși.\nLiberi.",
      lead:
        "Katlan este o formație tânără care intră în mișcarea caselor de dans cu energia, prospețimea și îndrăzneala prietenoasă de care numai tinerețea este capabilă.",
      paragraphs: [
        "Nu ne este teamă să privim tradiția dintr-un unghi nou — iar tocmai acest lucru face unic ceea ce facem.",
        "Ne inspirăm în primul rând din bogata tradiție muzicală a Bazinului Carpatic, dar ne aventurăm cu plăcere și în muzica Munților Apalași: bluegrass și country. Cele două lumi conviețuiesc surprinzător de bine lângă focul Katlan.",
        "Repertoriul nostru cuprinde muzică populară maghiară, românească și romă, bluegrass, country, precum și compoziții proprii — pentru că tradiția este vie, iar noi vrem să trăim împreună cu ea.",
      ],
      membersTitle: "În jurul focului",
      members: sharedMembers("ro"),
    },
    music: {
      eyebrow: "Repertoriu",
      title: "Două lumi.\nUn singur puls.",
      lead:
        "Arcușul, țambalul și contrabasul vorbesc aceluiași instinct străvechi ca mandolina și pulsația bluegrass-ului.",
      genres: [
        { number: "01", title: "Bazinul Carpatic", text: "Muzică populară maghiară, românească și romă — cu energie de dans și respect față de izvoare." },
        { number: "02", title: "Munții Apalași", text: "Bluegrass și country — sunetul brut și comunitar al muzicii tradiționale americane." },
        { number: "03", title: "Vocea noastră", text: "Compoziții proprii în care tradiția nu este o limită, ci un punct de plecare viu." },
      ],
      playerTitle: "Ascultă Katlan",
      playerText: "Albume, înregistrări și cele mai noi apariții pe Spotify.",
      spotify: "Deschide în Spotify",
    },
    contact: {
      eyebrow: "Concert · Joc · Colaborare",
      title: "Aprindem\nfocul?",
      lead:
        "Vrei să inviți Katlan la un concert, festival sau joc? Scrie-ne sau sună-ne direct.",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      note: "Pornim din Cluj, dar pentru muzică bună mergem departe.",
    },
  },
  en: {
    languageName: "English",
    nav: { home: "Home", about: "About", music: "Music", contact: "Contact" },
    common: {
      location: "Cluj-Napoca · Transylvania",
      booking: "Book the band",
      listen: "Listen now",
      discover: "Meet the band",
      menu: "Menu",
      socials: "Follow us",
      rights: "All rights reserved.",
    },
    home: {
      eyebrow: "Folk music, over an open fire",
      title: "Tradition.\nFire. Momentum.",
      intro:
        "Hungarian, Romanian and Roma folk music from the Carpathian Basin, bluegrass and country — fresh, bold and authentic, from Cluj.",
      manifestoLabel: "Our sound",
      manifesto:
        "We are not afraid to see tradition from a new angle. The two musical worlds sit surprisingly well beside the fire of Katlan.",
      strip: ["Hungarian folk", "Romanian folk", "Roma folk", "Bluegrass", "Country", "Original songs"],
      musicTitle: "Two worlds, one fire.",
      musicText:
        "From Transylvania to Appalachia, we look for the raw, communal energy that makes music truly come alive.",
      quote: "Tradition is alive — and we want to live with it.",
    },
    about: {
      eyebrow: "The band",
      title: "Young.\nSerious.\nFree.",
      lead:
        "Katlan is a young band entering the folk dance-house movement with the momentum, freshness and friendly audacity that only youth can bring.",
      paragraphs: [
        "We are not afraid to see tradition from a new angle — and that is exactly what makes our music unique.",
        "We draw first and foremost from the rich folk traditions of the Carpathian Basin, while gladly wandering into the music of Appalachia: bluegrass and country. The two worlds sit surprisingly well beside the fire of Katlan.",
        "Our repertoire embraces Hungarian, Romanian and Roma folk music, bluegrass, country and original compositions — because tradition is alive, and we want to live with it.",
      ],
      membersTitle: "Around the fire",
      members: sharedMembers("en"),
    },
    music: {
      eyebrow: "Repertoire",
      title: "Two worlds.\nOne pulse.",
      lead:
        "The bow, cimbalom and double bass speak to the same ancient instinct as the mandolin and the drive of bluegrass.",
      genres: [
        { number: "01", title: "Carpathian Basin", text: "Hungarian, Romanian and Roma folk music — with dance-house energy and deep respect for its sources." },
        { number: "02", title: "Appalachia", text: "Bluegrass and country — the raw, communal voice of American traditional music." },
        { number: "03", title: "Our own voice", text: "Original songs where tradition is not a boundary, but a living point of departure." },
      ],
      playerTitle: "Listen to Katlan",
      playerText: "Records, live sessions and the latest releases on Spotify.",
      spotify: "Open in Spotify",
    },
    contact: {
      eyebrow: "Concert · Dance house · Collaboration",
      title: "Let’s light\nit up.",
      lead:
        "Want to bring Katlan to a concert, festival or dance house? Write to us or call us directly.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      note: "We start in Cluj, but we travel far for good music.",
    },
  },
} as const;
