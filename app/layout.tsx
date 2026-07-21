import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://katlanzenekar.github.io/katlan-zenekar";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default: "Katlan zenekar | Kolozsvári népzenekar és bluegrass",
    template: "%s",
  },
  description:
    "A kolozsvári Katlan zenekar kárpát-medencei népzenét és amerikai bluegrasst játszik.",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Katlan",
    images: [{ url: `${siteUrl}/images/katlan-og.webp`, width: 1200, height: 630, alt: "Katlan zenekar" }],
  },
  icons: {
    icon: "/katlan-zenekar/images/katlan-logo-dark.svg",
  },
  other: {
    "theme-color": "#f6a000",
  },
};

const musicGroupJsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "@id": `${siteUrl}/#musicgroup`,
  name: "Katlan",
  alternateName: "Katlan Zenekar",
  url: `${siteUrl}/`,
  logo: `${siteUrl}/images/katlan-logo-dark.svg`,
  image: `${siteUrl}/images/katlan-og.webp`,
  email: "mailto:katlan.zenekar@gmail.com",
  telephone: "+40755465048",
  description:
    "Kolozsvári népzenekar: magyar, román és cigány népzene, táncházi muzsika és amerikai bluegrass.",
  foundingLocation: {
    "@type": "Place",
    name: "Kolozsvár / Cluj-Napoca",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cluj-Napoca",
      addressCountry: "RO",
    },
  },
  genre: [
    "Hungarian folk music",
    "Romanian folk music",
    "Roma folk music",
    "Bluegrass",
    "Country",
  ],
  areaServed: ["Romania", "Hungary", "Europe"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "booking",
    email: "katlan.zenekar@gmail.com",
    telephone: "+40755465048",
    availableLanguage: ["Hungarian", "Romanian", "English"],
  },
  member: [
    "Dezső Attila",
    "Szabó Bence",
    "Miklósi Hunor",
    "Vincze Balázs",
    "Réman Gergő",
    "Mohácsy Lőrinc Ágoston",
  ].map((name) => ({ "@type": "Person", name })),
  album: {
    "@type": "MusicAlbum",
    name: "Lenyomat",
    datePublished: "2025",
    url: "https://open.spotify.com/album/03hWqmfJj0hGY8cBVP7b2y",
    byArtist: { "@id": `${siteUrl}/#musicgroup` },
    sameAs: [
      "https://open.spotify.com/album/03hWqmfJj0hGY8cBVP7b2y",
      "https://music.apple.com/hu/album/lenyomat/1812287150",
      "https://youtube.com/playlist?list=OLAK5uy_lHEmtAHw8amy3Vv-iwWw0ro9qGgKuyLco",
      "https://music.amazon.com/albums/B0F7FKLCL1",
      "https://tidal.com/album/433753507/u",
    ],
  },
  subjectOf: {
    "@type": "NewsArticle",
    headline: "Erdélyi népzenészek a tengerentúlon: hazatért Amerikából a kolozsvári Katlan zenekar",
    url: "https://maszol.ro/kultura/Erdelyi-nepzeneszek-a-tengerentulon-Hazatert-Amerikabol-a-kolozsvari-Katlan-zenekar-INTERJU",
  },
  sameAs: [
    "https://www.instagram.com/katlan_hivatalos/",
    "https://www.facebook.com/katlanhivatalos/",
    "https://open.spotify.com/artist/62JgFukLV2i7kE4zq0lJq5",
    "https://linktr.ee/katlanzenekar1",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(musicGroupJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
