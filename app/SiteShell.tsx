/* eslint-disable @next/next/no-img-element */
import type { Language, PageKey } from "./content";
import { content, pageHref } from "./content";
import { LanguageSync } from "./LanguageSync";

const socialLinks = [
  ["Instagram", "https://www.instagram.com/katlan_hivatalos/"],
  ["Facebook", "https://www.facebook.com/katlanhivatalos/"],
  ["Spotify", "https://open.spotify.com/artist/62JgFukLV2i7kE4zq0lJq5"],
  ["Linktree", "https://linktr.ee/katlanzenekar1"],
] as const;

function Header({ language, page }: { language: Language; page: PageKey }) {
  const t = content[language];
  return (
    <header className="site-header">
      <a className="brand" href={pageHref(language, "home")} aria-label="Katlan">
        <img src="/katlan-zenekar/images/katlan-logo-dark.svg" alt="Katlan" />
      </a>
      <nav className="desktop-nav" aria-label={t.common.menu}>
        {(Object.keys(t.nav) as PageKey[]).map((key) => (
          <a key={key} href={pageHref(language, key)} aria-current={key === page ? "page" : undefined}>
            {t.nav[key]}
          </a>
        ))}
      </nav>
      <div className="language-nav" aria-label="Language">
        {(["hu", "ro", "en"] as Language[]).map((lang) => (
          <a key={lang} href={pageHref(lang, page)} aria-current={lang === language ? "true" : undefined}>
            {lang.toUpperCase()}
          </a>
        ))}
      </div>
      <details className="mobile-nav">
        <summary>{t.common.menu}</summary>
        <div>
          {(Object.keys(t.nav) as PageKey[]).map((key) => (
            <a key={key} href={pageHref(language, key)}>{t.nav[key]}</a>
          ))}
        </div>
      </details>
    </header>
  );
}

function Footer({ language }: { language: Language }) {
  const t = content[language];
  return (
    <footer className="site-footer">
      <img src="/katlan-zenekar/images/katlan-logo-transparent.png" alt="" aria-hidden="true" />
      <div>
        <p>{t.common.location}</p>
        <a href="mailto:katlan.zenekar@gmail.com">katlan.zenekar@gmail.com</a>
        <a href="tel:+40755465048">+40 755 465 048</a>
      </div>
      <div>
        <p>{t.common.socials}</p>
        {socialLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label} ↗</a>)}
      </div>
      <small>© {new Date().getFullYear()} Katlan. {t.common.rights}</small>
    </footer>
  );
}

function HomePage({ language }: { language: Language }) {
  const t = content[language];
  const schedule = {
    hu: {
      title: "Itt találkozhatsz velünk legközelebb",
      events: [
        ["Július 30. – augusztus 2.", "Méra World Music Fesztivál"],
        ["Augusztus 9–15.", "Mezőségi Népzene- és Néptánctábor"],
        ["Augusztus 19.", "Kolozsvári Magyar Napok · #főtér 23"],
        ["Augusztus 20.", "Kolozsvári Magyar Napok · REFO udvar"],
        ["Augusztus 21–23.", "Kolozsvári Magyar Napok · Folkudvar"],
        ["Szeptember 4–6.", "Erdélyi Táncháztalálkozó"],
        ["November 27–29.", "Kolozsvári Népzene- és Néptánctalálkozó"],
      ],
    },
    ro: {
      title: "Următoarele concerte",
      events: [
        ["30 iulie – 2 august", "Festivalul Méra World Music"],
        ["9–15 august", "Tabăra de Muzică și Dans Popular din Câmpia Transilvaniei"],
        ["19 august", "Zilele Culturale Maghiare din Cluj · #Piața Unirii 23"],
        ["20 august", "Zilele Culturale Maghiare din Cluj · Curtea REFO"],
        ["21–23 august", "Zilele Culturale Maghiare din Cluj · Folkudvar"],
        ["4–6 septembrie", "Întâlnirea Caselor de Dans din Transilvania"],
        ["27–29 noiembrie", "Întâlnirea de Muzică și Dans Popular din Cluj"],
      ],
    },
    en: {
      title: "See us live next",
      events: [
        ["30 July – 2 August", "Méra World Music Festival"],
        ["9–15 August", "Transylvanian Plain Folk Music and Dance Camp"],
        ["19 August", "Hungarian Cultural Days of Cluj · Main Square 23"],
        ["20 August", "Hungarian Cultural Days of Cluj · REFO Courtyard"],
        ["21–23 August", "Hungarian Cultural Days of Cluj · Folk Courtyard"],
        ["4–6 September", "Transylvanian Dance House Meeting"],
        ["27–29 November", "Cluj Folk Music and Dance Meeting"],
      ],
    },
  }[language];
  return (
    <>
      <section className="hero">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <h1>{t.home.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="hero-intro">{t.home.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={pageHref(language, "music")}>{t.common.listen} <span>↗</span></a>
            <a className="button button-ghost" href={pageHref(language, "media")}>{t.nav.media}</a>
          </div>
        </div>
        <p className="hero-location">{t.common.location}</p>
      </section>
      <section className="schedule-section" aria-labelledby="schedule-title">
        <div className="schedule-heading">
          <p className="eyebrow">2026</p>
          <h2 id="schedule-title">{schedule.title}</h2>
        </div>
        <div className="schedule-list">
          {schedule.events.map(([date, event]) => (
            <article key={`${date}-${event}`}>
              <time>{date}</time>
              <h3>{event}</h3>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function MusicPage({ language }: { language: Language }) {
  return (
    <section className="music-page">
      <article className="album-feature">
        <img className="album-cover" src="/katlan-zenekar/images/lenyomat-cover.webp" alt="Katlan — Lenyomat album borító" />
        <div className="album-copy">
          <p className="eyebrow">Katlan · 2025</p>
          <h1>Lenyomat</h1>
          <div className="platform-links" aria-label="Lenyomat album links">
            <a href="https://open.spotify.com/album/03hWqmfJj0hGY8cBVP7b2y" target="_blank" rel="noreferrer">Spotify ↗</a>
            <a href="https://music.apple.com/hu/album/lenyomat/1812287150" target="_blank" rel="noreferrer">Apple Music ↗</a>
            <a href="https://youtube.com/playlist?list=OLAK5uy_lHEmtAHw8amy3Vv-iwWw0ro9qGgKuyLco" target="_blank" rel="noreferrer">YouTube Music ↗</a>
            <a href="https://music.amazon.com/albums/B0F7FKLCL1" target="_blank" rel="noreferrer">Amazon Music ↗</a>
            <a href="https://tidal.com/album/433753507/u" target="_blank" rel="noreferrer">TIDAL ↗</a>
          </div>
        </div>
      </article>
      <div className="music-video-block">
        <div className="video-frame music-video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/e7xBDxF_ufQ"
            title="Katlan zenekar — Kalotaszeg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="platform-links" aria-label="More music links">
          <a href="https://www.youtube.com/watch?v=e7xBDxF_ufQ" target="_blank" rel="noreferrer">YouTube ↗</a>
          <a href="https://linktr.ee/katlanzenekar1" target="_blank" rel="noreferrer">Minden link ↗</a>
        </div>
      </div>
    </section>
  );
}

function AboutPage({ language }: { language: Language }) {
  const t = content[language];
  const mapCopy = {
    hu: { title: "Ahol már játszottunk", count: "27 helyszín · 4 ország", region: "Kárpát-medence" },
    ro: { title: "Unde am cântat", count: "27 de locuri · 4 țări", region: "Bazinul Carpatic" },
    en: { title: "Where we've played", count: "27 places · 4 countries", region: "Carpathian Basin" },
  }[language];
  const pin = (x: number, y: number, label: string) => (
    <g className="map-pin" transform={`translate(${x} ${y})`} tabIndex={0} role="img" aria-label={label} key={label}>
      <circle className="pin-ring" r="10" />
      <circle className="pin-core" r="4.5" />
      <g className="pin-label">
        <rect x="-74" y="-43" width="148" height="29" rx="7" />
        <text x="0" y="-24">{label}</text>
      </g>
    </g>
  );
  return (
    <>
      <section className="about-simple">
        <div className="about-image">
          <img src="/katlan-zenekar/media/Katlan-2048-241212PIT-376.webp" alt="A Katlan zenekar koncerten" />
        </div>
        <div className="about-copy">
          <h1>{t.nav.about}</h1>
          <p>{t.about.text}</p>
          <div className="about-members">
            <h2>{t.about.membersTitle}</h2>
            <div>
              {t.about.members.map((member) => (
                <article key={member.name}>
                  <h3>{member.name}</h3>
                  <p>{member.instrument}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="tour-map" aria-labelledby="tour-map-title">
        <div className="tour-map-heading">
          <p className="eyebrow light">{mapCopy.count}</p>
          <h2 id="tour-map-title">{mapCopy.title}</h2>
        </div>
        <div className="map-canvas">
          <svg className="desktop-tour-map" viewBox="0 0 1200 560" role="img" aria-labelledby="map-svg-title map-svg-desc">
            <title id="map-svg-title">{mapCopy.title}</title>
            <desc id="map-svg-desc">27 locations across Romania, Hungary, Germany and the United States.</desc>
            <g className="continents">
              <path d="M65 116L122 70l91-22 86 23 55 54-23 36-46 10-28 53-52 25-35-40-45-8-35-43z" />
              <path d="M285 282l53 26 31 58-19 67-31 76-28-20-9-72-35-72z" />
              <path d="M527 91l64-36 143 5 98 41 91-3 107 43-28 51-105 5-50 34-76-16-60 24-52-38-60 4-56-44z" />
              <path d="M621 233l80 13 53 56-15 106-60 83-46-51-16-91-42-63z" />
              <path d="M941 358l70-24 85 38-12 72-74 24-70-42z" />
              <path d="M1096 246l28-13 28 16-22 18z" />
            </g>
            <g className="routes">
              <path d="M691 169 Q665 112 624 151" />
              <path d="M691 169 Q470 20 310 198" />
              <path d="M691 169 Q445 70 250 184" />
            </g>
            <g className="map-point origin"><circle cx="691" cy="169" r="9" /><circle cx="691" cy="169" r="20" /></g>
            {pin(250, 184, "Denver")}
            {pin(303, 218, "Nashville")}
            {pin(310, 200, "Clay City")}
            {pin(322, 193, "Lexington")}
            {pin(615, 165, "Stuttgart")}
            {pin(625, 150, "München")}
            {pin(633, 130, "Berlin")}
            <g className="regional-inset" transform="translate(755 282)">
              <rect className="inset-frame" width="405" height="240" rx="18" />
              <path className="inset-land" d="M35 91l54-38 79 14 52-22 76 21 65 45-18 77-90 25-92-10-79 19-55-58z" />
              <text className="inset-title" x="22" y="32">{mapCopy.region}</text>
              {pin(110, 100, "Budapest")}
              {pin(48, 135, "Magyarföld")}
              {pin(122, 87, "Nagymaros")}
              {pin(96, 86, "Piliscsaba")}
              {pin(88, 154, "Balatonszárszó")}
              {pin(170, 104, "Nagyvárad")}
              {pin(182, 78, "Szatmárnémeti")}
              {pin(230, 110, "Kolozsvár")}
              {pin(247, 91, "Szamosújvár")}
              {pin(252, 105, "Válaszút")}
              {pin(217, 100, "Méra")}
              {pin(277, 132, "Marosvásárhely")}
              {pin(225, 132, "Torockó")}
              {pin(244, 145, "Csombord")}
              {pin(304, 126, "Székelyudvarhely")}
              {pin(314, 139, "Lengyelfalva")}
              {pin(336, 119, "Csíkszereda")}
              {pin(346, 99, "Balánbánya")}
              {pin(329, 163, "Sepsiszentgyörgy")}
              {pin(353, 176, "Zabola")}
            </g>
          </svg>
          <div className="mobile-map-stack">
            <svg className="mobile-world-map" viewBox="0 0 720 300" role="img" aria-label={mapCopy.title}>
              <g className="continents">
                <path d="M30 75L78 38l98-9 79 38 25 55-48 28-48 69-91-29-32-54z" />
                <path d="M350 55l64-29 116 10 64 34 93 2-36 63-91 6-57 42-86-27-77-47z" />
                <path d="M438 164l70 17 25 56-45 44-49-35-23-50z" />
              </g>
              <g className="routes"><path d="M430 108 Q330 20 186 122" /><path d="M430 108 Q421 67 392 84" /></g>
              {pin(155, 119, "Denver")}
              {pin(197, 151, "Nashville")}
              {pin(207, 137, "Clay City")}
              {pin(217, 131, "Lexington")}
              {pin(393, 104, "Stuttgart")}
              {pin(403, 92, "München")}
              {pin(410, 72, "Berlin")}
              <g className="map-point origin"><circle cx="430" cy="108" r="7" /><circle cx="430" cy="108" r="15" /></g>
            </svg>
            <svg className="mobile-region-map" viewBox="0 0 405 240" role="img" aria-label={mapCopy.region}>
              <rect className="inset-frame" width="405" height="240" rx="18" />
              <path className="inset-land" d="M35 91l54-38 79 14 52-22 76 21 65 45-18 77-90 25-92-10-79 19-55-58z" />
              <text className="inset-title" x="22" y="32">{mapCopy.region}</text>
              {pin(110, 100, "Budapest")}{pin(48, 135, "Magyarföld")}{pin(122, 87, "Nagymaros")}
              {pin(96, 86, "Piliscsaba")}{pin(88, 154, "Balatonszárszó")}{pin(170, 104, "Nagyvárad")}
              {pin(182, 78, "Szatmárnémeti")}{pin(230, 110, "Kolozsvár")}{pin(247, 91, "Szamosújvár")}
              {pin(252, 105, "Válaszút")}{pin(217, 100, "Méra")}{pin(277, 132, "Marosvásárhely")}
              {pin(225, 132, "Torockó")}{pin(244, 145, "Csombord")}{pin(304, 126, "Székelyudvarhely")}
              {pin(314, 139, "Lengyelfalva")}{pin(336, 119, "Csíkszereda")}{pin(346, 99, "Balánbánya")}
              {pin(329, 163, "Sepsiszentgyörgy")}{pin(353, 176, "Zabola")}
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

const videos = [
  { id: "e7xBDxF_ufQ", title: "Katlan zenekar — Kalotaszeg" },
] as const;

const photos = [
  "/katlan-zenekar/media/Katlan-2048-241212PIT-337-1.webp",
  "/katlan-zenekar/media/370693955-346211544403989-8680754188917633003-n.webp",
  "/katlan-zenekar/media/554101546-727746720310646-7773571306944070569-n.webp",
  "/katlan-zenekar/media/Katlan-2048-241212PIT-53.webp",
  "/katlan-zenekar/media/528093905-686522067766445-4536889760417029560-n.webp",
  "/katlan-zenekar/media/Katlan-2048-241212PIT-78.webp",
  "/katlan-zenekar/media/Katlan-2048-241212PIT-338.webp",
  "/katlan-zenekar/media/Katlan-2048-241212PIT-371.webp",
  "/katlan-zenekar/media/Katlan-2048-241212PIT-372.webp",
  "/katlan-zenekar/media/Katlan-2048-241212PIT-376.webp",
  "/katlan-zenekar/media/Katlan-2048-241212PIT-385.webp",
] as const;

function MediaPage({ language }: { language: Language }) {
  const t = content[language];
  return (
    <>
      <section className="media-header">
        <h1>{t.media.title}</h1>
      </section>
      <section className="media-photos" aria-labelledby="photos-title">
        <h2 id="photos-title">{t.media.photos}</h2>
        <div className="photo-grid">
          {photos.map((src, index) => (
            <figure key={src}>
              <img src={src} alt={`Katlan koncert ${index + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
      <section className="media-videos" aria-labelledby="videos-title">
        <h2 id="videos-title">{t.media.videos}</h2>
        <div className="video-grid">
          {videos.map((video) => (
            <article key={video.id}>
              <div className="video-frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p>{video.title}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage({ language }: { language: Language }) {
  const t = content[language];
  return (
    <section className="contact-page">
      <div className="contact-copy">
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h1>{t.contact.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
        <p className="page-lead">{t.contact.lead}</p>
        <div className="contact-details">
          <div><span>{t.contact.phoneLabel}</span><a href="tel:+40755465048">+40 755 465 048</a></div>
          <div><span>{t.contact.emailLabel}</span><a href="mailto:katlan.zenekar@gmail.com">katlan.zenekar@gmail.com</a></div>
        </div>
      </div>
      <div className="contact-image">
        <img src="/katlan-zenekar/media/370693955-346211544403989-8680754188917633003-n.webp" alt="A Katlan zenekar a színpadon" />
        <img className="contact-logo" src="/katlan-zenekar/images/katlan-logo-transparent.png" alt="Katlan" />
      </div>
    </section>
  );
}

export function SiteShell({ language, page }: { language: Language; page: PageKey }) {
  return (
    <>
      <LanguageSync language={language} />
      <Header language={language} page={page} />
      <main>
        {page === "home" && <HomePage language={language} />}
        {page === "about" && <AboutPage language={language} />}
        {page === "music" && <MusicPage language={language} />}
        {page === "media" && <MediaPage language={language} />}
        {page === "contact" && <ContactPage language={language} />}
      </main>
      <Footer language={language} />
    </>
  );
}
