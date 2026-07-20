/* eslint-disable @next/next/no-img-element */
import type { Language, PageKey } from "./content";
import { content, pageHref } from "./content";
import { LanguageSync } from "./LanguageSync";

const socialLinks = [
  ["Instagram", "https://www.instagram.com/katlan_hivatalos/"],
  ["Facebook", "https://www.facebook.com/katlanhivatalos/"],
  ["Spotify", "https://open.spotify.com/artist/62JgFukLV2i7kE4zq0lJq5"],
] as const;

function Header({ language, page }: { language: Language; page: PageKey }) {
  const t = content[language];
  return (
    <header className="site-header">
      <a className="brand" href={pageHref(language, "home")} aria-label="Katlan">
        <img src="/images/katlan-logo-dark.svg" alt="Katlan" />
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
      <img src="/images/katlan-logo-light.svg" alt="" aria-hidden="true" />
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
          <p className="eyebrow light">{t.home.eyebrow}</p>
          <h1>{t.home.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="hero-intro">{t.home.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={pageHref(language, "music")}>{t.common.listen} <span>↗</span></a>
            <a className="button button-ghost" href={pageHref(language, "about")}>{t.common.discover}</a>
          </div>
        </div>
        <p className="hero-location">{t.common.location}</p>
      </section>
      <div className="ticker" aria-label={t.home.strip.join(", ")}>
        <div>{[...t.home.strip, ...t.home.strip].map((item, i) => <span key={`${item}-${i}`}>{item}<b>✦</b></span>)}</div>
      </div>
      <section className="manifesto section-grid">
        <p className="eyebrow">{t.home.manifestoLabel}</p>
        <p className="display-copy">{t.home.manifesto}</p>
        <img src="/images/katlan-logo-dark.svg" alt="" aria-hidden="true" />
      </section>
      <section className="home-music">
        <div className="photo-window"><img src="/images/katlan-live.webp" alt="Katlan koncert közben" /></div>
        <div className="home-music-copy">
          <p className="eyebrow">{t.nav.music}</p>
          <h2>{t.home.musicTitle}</h2>
          <p>{t.home.musicText}</p>
          <a className="text-link" href={pageHref(language, "music")}>{t.common.listen} <span>↗</span></a>
        </div>
      </section>
      <blockquote>{t.home.quote}</blockquote>
    </>
  );
}

function AboutPage({ language }: { language: Language }) {
  const t = content[language];
  return (
    <>
      <section className="page-hero warm">
        <p className="eyebrow">{t.about.eyebrow}</p>
        <h1>{t.about.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
        <p className="page-lead">{t.about.lead}</p>
        <img className="page-mark" src="/images/katlan-logo-dark.svg" alt="" aria-hidden="true" />
      </section>
      <section className="story-layout">
        <div className="story-photo"><img src="/images/katlan-live.webp" alt="A Katlan zenekar koncerten" /></div>
        <div className="story-copy">
          {t.about.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        </div>
      </section>
      <section className="members-section">
        <p className="eyebrow">06 / {t.about.membersTitle}</p>
        <div className="members-list">
          {t.about.members.map((member, index) => (
            <article key={member.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{member.name}</h2>
              <p>{member.instrument}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function MusicPage({ language }: { language: Language }) {
  const t = content[language];
  return (
    <>
      <section className="page-hero dark">
        <p className="eyebrow light">{t.music.eyebrow}</p>
        <h1>{t.music.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
        <p className="page-lead">{t.music.lead}</p>
        <img className="page-mark invert" src="/images/katlan-logo-dark.svg" alt="" aria-hidden="true" />
      </section>
      <section className="genres-section">
        {t.music.genres.map((genre) => (
          <article key={genre.number}>
            <span>{genre.number}</span>
            <h2>{genre.title}</h2>
            <p>{genre.text}</p>
          </article>
        ))}
      </section>
      <section className="player-section">
        <div>
          <p className="eyebrow">Spotify</p>
          <h2>{t.music.playerTitle}</h2>
          <p>{t.music.playerText}</p>
          <a className="text-link" href="https://open.spotify.com/artist/62JgFukLV2i7kE4zq0lJq5" target="_blank" rel="noreferrer">{t.music.spotify} ↗</a>
        </div>
        <iframe
          title="Katlan on Spotify"
          src="https://open.spotify.com/embed/artist/62JgFukLV2i7kE4zq0lJq5?utm_source=generator&theme=0"
          width="100%"
          height="352"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
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
        <p className="contact-note">{t.contact.note}</p>
      </div>
      <div className="contact-image">
        <img src="/images/katlan-live.webp" alt="A Katlan zenekar a színpadon" />
        <img className="contact-logo" src="/images/katlan-logo-light.svg" alt="Katlan" />
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
        {page === "contact" && <ContactPage language={language} />}
      </main>
      <Footer language={language} />
    </>
  );
}
