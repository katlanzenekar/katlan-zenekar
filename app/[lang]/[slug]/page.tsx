import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { content, isLanguage, languages, pageFromSlug, paths, type PageKey } from "../../content";
import { SiteShell } from "../../SiteShell";

export const dynamicParams = false;
export function generateStaticParams() {
  return languages.flatMap((lang) =>
    (Object.entries(paths[lang]) as [PageKey, string][])
      .filter(([page]) => page !== "home")
      .map(([, slug]) => ({ lang, slug })),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLanguage(lang)) return {};
  const page = pageFromSlug(lang, slug);
  if (!page) return {};
  const title = content[lang].nav[page];
  const description = page === "about" ? content[lang].about.lead : page === "music" ? content[lang].music.lead : content[lang].contact.lead;
  return { title, description };
}

export default async function ContentPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isLanguage(lang)) notFound();
  const page = pageFromSlug(lang, slug);
  if (!page || page === "home") notFound();
  return <SiteShell language={lang} page={page} />;
}
