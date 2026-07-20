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
      <section className="home-music">
        <div className="photo-window"><img src="/katlan-zenekar/media/554101546-727746720310646-7773571306944070569-n.webp" alt="Katlan koncert közben" /></div>
        <div className="home-music-copy">
          <h2>{t.nav.music}</h2>
          <p>{t.music.lead}</p>
          <a className="text-link" href={pageHref(language, "music")}>{t.common.listen} <span>↗</span></a>
        </div>
      </section>
    </>
  );
}

function MusicPage({ language }: { language: Language }) {
  const t = content[language];
  return (
    <>
      <section className="music-hero">
        <div className="music-hero-copy">
          <p className="eyebrow">{t.music.eyebrow}</p>
          <h1>{t.music.title}</h1>
          <div className="platform-links" aria-label="Music links">
            <a href="https://open.spotify.com/artist/62JgFukLV2i7kE4zq0lJq5" target="_blank" rel="noreferrer">Spotify ↗</a>
            <a href="https://www.youtube.com/watch?v=e7xBDxF_ufQ" target="_blank" rel="noreferrer">YouTube ↗</a>
            <a href="https://linktr.ee/katlanzenekar1" target="_blank" rel="noreferrer">Linktree ↗</a>
          </div>
        </div>
        <div className="music-hero-image">
          <img src="/katlan-zenekar/media/Katlan-2048-241212PIT-385.webp" alt="A Katlan zenekar koncerten" />
        </div>
      </section>
      <section className="player-section">
        <div className="player-heading">
          <p className="eyebrow">Spotify · YouTube</p>
          <h2>{t.music.playerTitle}</h2>
        </div>
        <div className="players-grid">
          <iframe
            className="spotify-player"
            title="Katlan on Spotify"
            src="https://open.spotify.com/embed/artist/62JgFukLV2i7kE4zq0lJq5?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <div className="video-frame music-video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/e7xBDxF_ufQ"
              title="Katlan zenekar — Kalotaszeg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function AboutPage({ language }: { language: Language }) {
  const t = content[language];
  return (
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
