import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { personalData, socialLinks } from "@/utils/data/personal-data";

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
  preload: true,
});

const TITLE = `${personalData.name} | ${personalData.designation}`;
const DESCRIPTION =
  "Full Stack AI Engineer with 4+ years building production SaaS applications in React.js, Next.js and TypeScript — complex dashboards, real-time interfaces and AI-powered products, backed by Node.js, GraphQL and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(personalData.siteUrl),
  title: {
    default: TITLE,
    template: `%s | ${personalData.name}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Nitesh Shukla",
    "Full Stack AI Engineer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Apollo Client",
    "GraphQL",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "RAG",
    "OpenAI API",
    "SaaS Dashboards",
    "Web Performance",
  ],
  authors: [{ name: personalData.name, url: personalData.siteUrl }],
  creator: personalData.name,
  applicationName: `${personalData.name} Portfolio`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: personalData.siteUrl,
    siteName: `${personalData.name} — Portfolio`,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${personalData.name} — ${personalData.designation}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: { google: "google55f62a6358c15690" },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/icon-192.png", sizes: "192x192" }],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#070b18",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/** Person schema so search engines can read the profile directly. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalData.name,
  jobTitle: personalData.designation,
  description: DESCRIPTION,
  url: personalData.siteUrl,
  email: `mailto:${personalData.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Lucknow", addressCountry: "IN" },
  sameAs: socialLinks.map((link) => link.href),
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "TanStack Query",
    "Apollo Client",
    "Tailwind CSS",
    "Node.js",
    "NestJS",
    "GraphQL",
    "REST APIs",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Prisma ORM",
    "pgvector",
    "OpenAI API",
    "Retrieval-Augmented Generation",
    "Chrome Extensions",
    "Web Performance",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/*
          Marks that scripting is available before first paint, so the
          scroll-reveal styles (which hide content) only ever apply when there
          is JavaScript around to reveal it again.
        */}
        <script
          dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js')` }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-ink-800)] focus:px-4 focus:py-2.5 focus:text-sm focus:text-[var(--color-accent)]"
        >
          Skip to content
        </a>

        <div className="aurora" aria-hidden />

        <ClientProviders>
          <Navbar />
          <main id="main" className="pt-[var(--nav-h)]">
            {children}
          </main>
          <Footer />
        </ClientProviders>

        <SpeedInsights />
        {/* Service worker registers after load so it never competes with first paint. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){})})}`,
          }}
        />
      </body>
    </html>
  );
}
