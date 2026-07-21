import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://katlanzenekar.github.io/katlan-zenekar";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default: "Katlan zenekar | Kolozsvári népzene és bluegrass",
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
  url: `${siteUrl}/`,
  logo: `${siteUrl}/images/katlan-logo-dark.svg`,
  image: `${siteUrl}/images/katlan-og.webp`,
  description:
    "Kolozsvári zenekar, amely kárpát-medencei magyar, román és cigány népzenét, valamint amerikai bluegrasst játszik.",
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
