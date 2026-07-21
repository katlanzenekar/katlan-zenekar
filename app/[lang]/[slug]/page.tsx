import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLanguage, languages, pageFromSlug, paths, type PageKey } from "../../content";
import { metadataForPage } from "../../seo";
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
  return metadataForPage(lang, page);
}

export default async function ContentPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isLanguage(lang)) notFound();
  const page = pageFromSlug(lang, slug);
  if (!page || page === "home") notFound();
  return <SiteShell language={lang} page={page} />;
}
