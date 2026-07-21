import type { Metadata } from "next";
import { paths, type Language, type PageKey } from "./content";

export const siteUrl = "https://katlanzenekar.github.io/katlan-zenekar";

const seo: Record<Language, Record<PageKey, { title: string; description: string }>> = {
  hu: {
    home: {
      title: "Katlan zenekar | Kolozsvári népzenekar és bluegrass",
      description:
        "A Katlan kolozsvári népzenekar: magyar, román és cigány népzene, táncházi muzsika és amerikai bluegrass.",
    },
    about: {
      title: "Katlan zenekar | Rólunk és a zenekar tagjai",
      description:
        "A kolozsvári Katlan zenekar bemutatkozása és tagjai. Erdélyi és kárpát-medencei népzene, táncház és amerikai bluegrass.",
    },
    music: {
      title: "Lenyomat – Katlan zenekar | Album és streaming",
      description:
        "A Katlan zenekar Lenyomat című lemeze Spotify-on, Apple Musicon, YouTube Musicon, Amazon Musicon és Tidalen.",
    },
    media: {
      title: "Katlan zenekar | Koncertfotók és videók",
      description:
        "Koncertfotók és videók a kolozsvári Katlan zenekarról.",
    },
    contact: {
      title: "Katlan zenekar kapcsolat | Koncert- és táncházszervezés",
      description:
        "A Katlan zenekar elérhetőségei koncert, fesztivál, táncház és együttműködés szervezéséhez.",
    },
  },
  ro: {
    home: {
      title: "Katlan | Formație de muzică tradițională din Cluj",
      description:
        "Katlan este o formație de muzică tradițională din Cluj: folclor muzical maghiar, românesc și rom, alături de bluegrass american.",
    },
    about: {
      title: "Despre Katlan | Formație de muzică tradițională din Cluj",
      description:
        "Prezentarea formației Katlan din Cluj și membrii ei. Muzică tradițională din Bazinul Carpatic și bluegrass american.",
    },
    music: {
      title: "Lenyomat – Katlan | Album și streaming",
      description:
        "Albumul Lenyomat al formației Katlan pe Spotify, Apple Music, YouTube Music, Amazon Music și Tidal.",
    },
    media: {
      title: "Katlan | Fotografii de concert și videoclipuri",
      description:
        "Fotografii de concert și videoclipuri cu formația Katlan din Cluj.",
    },
    contact: {
      title: "Contact Katlan | Concerte și evenimente",
      description:
        "Contactează formația Katlan pentru concerte, festivaluri, seri de dans și colaborări.",
    },
  },
  en: {
    home: {
      title: "Katlan | Transylvanian folk and bluegrass band",
      description:
        "Katlan is a band from Cluj playing Hungarian, Romanian and Roma folk music from the Carpathian Basin, along with American bluegrass.",
    },
    about: {
      title: "About Katlan | Folk band from Cluj, Transylvania",
      description:
        "Meet Katlan, a folk and bluegrass band from Cluj, Transylvania, and learn about its members.",
    },
    music: {
      title: "Lenyomat – Katlan | Album and streaming",
      description:
        "Listen to Katlan's album Lenyomat on Spotify, Apple Music, YouTube Music, Amazon Music and Tidal.",
    },
    media: {
      title: "Katlan | Concert photos and videos",
      description:
        "Concert photography and videos featuring Katlan, a folk and bluegrass band from Cluj.",
    },
    contact: {
      title: "Contact Katlan | Concert and festival bookings",
      description:
        "Contact Katlan for concerts, festivals, dance-house events and collaborations.",
    },
  },
};

export function pageUrl(language: Language, page: PageKey) {
  if (language === "hu" && page === "home") return `${siteUrl}/`;
  const slug = paths[language][page];
  return `${siteUrl}/${language}${slug ? `/${slug}` : ""}/`;
}

export function metadataForPage(language: Language, page: PageKey): Metadata {
  const pageSeo = seo[language][page];
  const canonical = pageUrl(language, page);
  const hu = pageUrl("hu", page);
  const ro = pageUrl("ro", page);
  const en = pageUrl("en", page);
  const locale = language === "hu" ? "hu_HU" : language === "ro" ? "ro_RO" : "en_US";

  return {
    title: { absolute: pageSeo.title },
    description: pageSeo.description,
    alternates: {
      canonical,
      languages: {
        "hu-HU": hu,
        "ro-RO": ro,
        en,
        "x-default": hu,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: pageSeo.title,
      description: pageSeo.description,
      siteName: "Katlan",
      locale,
      alternateLocale: ["hu_HU", "ro_RO", "en_US"].filter((value) => value !== locale),
      images: [
        {
          url: `${siteUrl}/images/katlan-og.webp`,
          width: 1200,
          height: 630,
          alt: "Katlan zenekar",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageSeo.title,
      description: pageSeo.description,
      images: [`${siteUrl}/images/katlan-og.webp`],
    },
  };
}
