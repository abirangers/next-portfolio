import { Metadata } from "next";
import HomePage from "@/app/homePage";

type baseMeta = {
  title: string;
  description: string;
  url: string;
};

const baseMetaData: baseMeta = {
  title: "Home | Bingers",
  description:
    "seorang Front-end Developer yang sangat-sangat senang sekali dengan yang namanya Slicing UI. Menikmati membangun semuanya dari situs app kecil hingga app yang elegan.",
  url: "https://bingers.vercel.app/",
};

const { title, description, url } = baseMetaData;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    title,
    description,
    images: [
      {
        url: "/img/Bingers-Home.svg",
        alt: "OG Image",
      },
    ],
    siteName: "bingers.vercel.app",
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
  metadataBase: new URL(url),
};

export default function Home() {
  return <HomePage />;
}
