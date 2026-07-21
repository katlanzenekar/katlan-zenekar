import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLanguage, languages } from "../content";
import { metadataForPage } from "../seo";
import { SiteShell } from "../SiteShell";

export const dynamicParams = false;
export function generateStaticParams() { return languages.map((lang) => ({ lang })); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  return metadataForPage(lang, "home");
}

export default async function LanguageHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return <SiteShell language={lang} page="home" />;
}
