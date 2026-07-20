export const languages = ["hu", "ro", "en"] as const;
export type Language = (typeof languages)[number];
export type PageKey = "home" | "about" | "music" | "media" | "contact";

export const isLanguage = (value: string): value is Language =>
  languages.includes(value as Language);

export const paths: Record<Language, Record<PageKey, string>> = {
  hu: { home: "", about: "rolunk", music: "zene", media: "media", contact: "kapcsolat" },
  ro: { home: "", about: "despre-noi", music: "muzica", media: "media", contact: "contact" },
  en: { home: "", about: "about", music: "music", media: "media", contact: "contact" },
};

export const pageHref = (language: Language, page: PageKey) =>
  `/katlan-zenekar/${language}${paths[language][page] ? `/${paths[language][page]}` : ""}`;

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
    nav: { home: "Főoldal", about: "Rólunk", music: "Zene", media: "Média", contact: "Kapcsolat" },
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
      eyebrow: "Katlan",
      title: "Katlan",
      intro:
        "Kárpát-medencei népzene és amerikai bluegrass.",
    },
    about: {
      text: "A kolozsvári Katlan zenekar egy fiatal népzenészből álló formáció, amely a zene fiatalos, pimasz, ugyanakkor autentikus és hagyományos megfogalmazására törekszik. Céljuk a kárpát-medencei magyar, román és cigány népzene népszerűsítése mellett az amerikai népzene legautentikusabb megszólaltatása.",
      eyebrow: "A zenekar",
      title: "A zenekar",
      lead:
        "A kolozsvári Katlan zenekar fiatal népzenészekből álló formáció.",
      paragraphs: [
        "A zene fiatalos, ugyanakkor autentikus és hagyományos megfogalmazására törekszünk.",
        "Repertoárunkban magyar, román és cigány népzene, bluegrass, country, valamint saját szerzemények szerepelnek.",
      ],
      membersTitle: "Tagok",
      members: sharedMembers("hu"),
    },
    music: {
      eyebrow: "Repertoár",
      title: "Zene",
      lead:
        "Kárpát-medencei népzene, bluegrass, country és saját dalok.",
      genres: [
        { number: "01", title: "Kárpát-medence", text: "Magyar, román és cigány népzene." },
        { number: "02", title: "Amerikai népzene", text: "Bluegrass és country." },
        { number: "03", title: "Saját dalok", text: "Saját szerzemények." },
      ],
      playerTitle: "Hallgasd a Katlant",
      playerText: "Felvételek Spotify-on.",
      spotify: "Megnyitás Spotify-on",
    },
    media: { title: "Média", photos: "Képek", videos: "Videók" },
    contact: {
      eyebrow: "Koncert · Táncház · Együttműködés",
      title: "Kapcsolat",
      lead:
        "Koncert, fesztivál, táncház vagy együttműködés ügyében keress minket közvetlenül.",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      note: "Kolozsvár",
    },
  },
  ro: {
    languageName: "Română",
    nav: { home: "Acasă", about: "Despre noi", music: "Muzică", media: "Media", contact: "Contact" },
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
      eyebrow: "Katlan",
      title: "Katlan",
      intro:
        "Muzică tradițională din Bazinul Carpatic și bluegrass american.",
    },
    about: {
      text: "Formația Katlan din Cluj este alcătuită din tineri muzicieni populari și urmărește o interpretare tânără, îndrăzneață, autentică și tradițională. Scopul formației este promovarea muzicii populare maghiare, românești și rome din Bazinul Carpatic, precum și interpretarea autentică a muzicii tradiționale americane.",
      eyebrow: "Formația",
      title: "Formația",
      lead:
        "Katlan este o formație din Cluj alcătuită din tineri muzicieni populari.",
      paragraphs: [
        "Urmărim o interpretare tânără, autentică și tradițională.",
        "Repertoriul include muzică maghiară, românească și romă, bluegrass, country și compoziții proprii.",
      ],
      membersTitle: "Membri",
      members: sharedMembers("ro"),
    },
    music: {
      eyebrow: "Repertoriu",
      title: "Muzică",
      lead:
        "Muzică din Bazinul Carpatic, bluegrass, country și piese proprii.",
      genres: [
        { number: "01", title: "Bazinul Carpatic", text: "Muzică maghiară, românească și romă." },
        { number: "02", title: "Muzică americană", text: "Bluegrass și country." },
        { number: "03", title: "Piese proprii", text: "Compoziții proprii." },
      ],
      playerTitle: "Ascultă Katlan",
      playerText: "Înregistrări pe Spotify.",
      spotify: "Deschide în Spotify",
    },
    media: { title: "Media", photos: "Fotografii", videos: "Videoclipuri" },
    contact: {
      eyebrow: "Concert · Joc · Colaborare",
      title: "Contact",
      lead:
        "Pentru concerte, festivaluri, jocuri sau colaborări, scrie-ne sau sună-ne.",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      note: "Cluj-Napoca",
    },
  },
  en: {
    languageName: "English",
    nav: { home: "Home", about: "About", music: "Music", media: "Media", contact: "Contact" },
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
      eyebrow: "Katlan",
      title: "Katlan",
      intro:
        "Folk music from the Carpathian Basin and American bluegrass.",
    },
    about: {
      text: "Katlan is a Cluj-based group of young folk musicians aiming for a youthful, bold, authentic and traditional sound. Alongside promoting Hungarian, Romanian and Roma folk music from the Carpathian Basin, the band aims to perform American folk music in its most authentic form.",
      eyebrow: "The band",
      title: "The band",
      lead:
        "Katlan is a Cluj-based group of young folk musicians.",
      paragraphs: [
        "We aim for a young, authentic and traditional interpretation.",
        "The repertoire includes Hungarian, Romanian and Roma folk music, bluegrass, country and original compositions.",
      ],
      membersTitle: "Members",
      members: sharedMembers("en"),
    },
    music: {
      eyebrow: "Repertoire",
      title: "Music",
      lead:
        "Music from the Carpathian Basin, bluegrass, country and original songs.",
      genres: [
        { number: "01", title: "Carpathian Basin", text: "Hungarian, Romanian and Roma folk music." },
        { number: "02", title: "American folk", text: "Bluegrass and country." },
        { number: "03", title: "Original songs", text: "Original compositions." },
      ],
      playerTitle: "Listen to Katlan",
      playerText: "Recordings on Spotify.",
      spotify: "Open in Spotify",
    },
    media: { title: "Media", photos: "Photos", videos: "Videos" },
    contact: {
      eyebrow: "Concert · Dance house · Collaboration",
      title: "Contact",
      lead:
        "For concerts, festivals, dance houses or collaborations, contact us directly.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      note: "Cluj-Napoca",
    },
  },
} as const;
