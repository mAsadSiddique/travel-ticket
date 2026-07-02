import type { Metadata } from "next";
import { HomePage } from "@/view/home/home-page";
import {
  DEFAULT_PAGE_TITLE,
  SITE_DESCRIPTION,
  SITE_OG_IMAGE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/constant/site-meta-data";

export const metadata: Metadata = {
  title: DEFAULT_PAGE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
    title: DEFAULT_PAGE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SITE_OG_IMAGE,
        alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
      },
    ],
  },
};

export default function Home() {
  return <HomePage />;
}
