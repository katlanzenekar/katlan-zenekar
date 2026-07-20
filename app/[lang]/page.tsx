import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { content, isLanguage, languages } from "../content";
import { SiteShell } from "../SiteShell";

export const dynamicParams = false;
export function generateStaticParams() { return languages.map((lang) => ({ lang })); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  return { title: content[lang].nav.home, description: content[lang].home.intro };
}

export default async function LanguageHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return <SiteShell language={lang} page="home" />;
}
