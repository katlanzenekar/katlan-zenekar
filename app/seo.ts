import type { Metadata } from "next";
import { paths, type Language, type PageKey } from "./content";

export const siteUrl = "https://katlanzenekar.github.io/katlan-zenekar";

const seo: Record<Language, Record<PageKey, { title: string; description: string }>> = {
  hu: {
    home: {
      title: "Katlan zenekar | Kolozsvári népzene és bluegrass",
      description:
        "A kolozsvári Katlan zenekar kárpát-medencei magyar, román és cigány népzenét, valamint amerikai bluegrasst játszik.",
    },
    about: {
      title: "Rólunk | Katlan zenekar",
      description:
        "A kolozsvári Katlan zenekar bemutatkozása és tagjai. Kárpát-medencei népzene és amerikai bluegrass.",
    },
    music: {
      title: "Lenyomat | Katlan zenekar – zene és streaming",
      description:
        "A Katlan zenekar Lenyomat című lemeze Spotify-on, Apple Musicon, YouTube Musicon, Amazon Musicon és Tidalen.",
    },
    media: {
      title: "Média | Katlan zenekar – fotók és videók",
      description:
        "Koncertfotók és videók a kolozsvári Katlan zenekarról.",
    },
    contact: {
      title: "Kapcsolat | Katlan zenekar – koncertszervezés",
      description:
        "A Katlan zenekar elérhetőségei koncert, fesztivál, táncház és együttműködés szervezéséhez.",
    },
  },
  ro: {
    home: {
      title: "Katlan | Formație de muzică tradițională din Cluj",
      description:
        "Katlan este o formație din Cluj care interpretează muzică tradițională maghiară, românească și romă, precum și bluegrass american.",
    },
    about: {
      title: "Despre noi | Katlan",
      description:
        "Prezentarea formației Katlan din Cluj și membrii ei. Muzică tradițională din Bazinul Carpatic și bluegrass american.",
    },
    music: {
      title: "Lenyomat | Katlan – muzică și streaming",
      description:
        "Albumul Lenyomat al formației Katlan pe Spotify, Apple Music, YouTube Music, Amazon Music și Tidal.",
    },
    media: {
      title: "Media | Katlan – fotografii și videoclipuri",
      description:
        "Fotografii de concert și videoclipuri cu formația Katlan din Cluj.",
    },
    contact: {
      title: "Contact | Katlan – concerte și evenimente",
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
      title: "About | Katlan band",
      description:
        "Meet Katlan, a folk and bluegrass band from Cluj, Transylvania, and learn about its members.",
    },
    music: {
      title: "Lenyomat | Katlan – music and streaming",
      description:
        "Listen to Katlan's album Lenyomat on Spotify, Apple Music, YouTube Music, Amazon Music and Tidal.",
    },
    media: {
      title: "Media | Katlan – photos and videos",
      description:
        "Concert photography and videos featuring Katlan, a folk and bluegrass band from Cluj.",
    },
    contact: {
      title: "Contact | Katlan – bookings and concerts",
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
