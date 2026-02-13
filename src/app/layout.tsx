import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../css/card.scss";
import ClientProviders from "@/components/ClientProviders";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { personalData } from "@/utils/data/personal-data";

// Footer is below the fold, lazy load it
const Footer = dynamic(() => import("@/components/footer"), { ssr: true });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only used in hero code block, defer loading
});

export const metadata: Metadata = {
  title: "Nitesh Shukla | Full-Stack Product Engineer",
  description:
    "Expert Full Stack Product Engineer specializing in React, Next.js, and Node.js. Building scalable, high-performance web applications.",
  openGraph: {
    title: "Nitesh Shukla | Full-Stack Product Engineer",
    description:
      "Expert Full Stack Product Engineer specializing in React, Next.js, and Node.js. Building scalable, high-performance web applications.",
    images: [
      {
        url: personalData?.profile,
        width: 1200,
        height: 630,
        alt: "Nitesh Shukla Portfolio",
      },
    ],
    type: "website",
    url: "https://niteshverse.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitesh Shukla | Full-Stack Product Engineer",
    description:
      "Expert Full Stack Product Engineer specializing in React, Next.js, and Node.js. Building scalable, high-performance web applications.",
    images: [personalData?.profile],
  },
  keywords: ["Nitesh Shukla", "Full Stack Developer", "Next.js", "React", "Node.js", "Product Engineer", "Software Engineer"],
  authors: [{ name: "Nitesh Shukla", url: "https://niteshverse.vercel.app/" }],
  creator: "Nitesh Shukla",
  metadataBase: new URL("https://niteshverse.vercel.app"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload hero image so browser fetches it immediately — this is the LCP element */}
        <link rel="preload" href="/hero.svg" as="image" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0d1224] text-white selection:bg-[#ec4899] selection:text-white`}
        suppressHydrationWarning
      >
        <ClientProviders>
          <Navbar />
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white pt-20">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}