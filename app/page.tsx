import type { Metadata } from "next";
import { SiteShell } from "./SiteShell";
import { metadataForPage } from "./seo";

export const metadata: Metadata = metadataForPage("hu", "home");

export default function Home() {
  return <SiteShell language="hu" page="home" />;
}
