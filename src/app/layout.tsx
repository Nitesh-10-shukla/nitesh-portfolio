import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../css/card.scss";
import "../css/globals.scss";
import ClientProviders from "@/components/ClientProviders";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { personalData } from "@/utils/data/personal-data";

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

export const metadata: Metadata = {
  title: "Nitesh | Full-Stack Developer Portfolio",
  description:
    "Welcome to Nitesh's portfolio! A passionate self-taught full-stack developer who thrives on learning, collaboration, and tackling new challenges. Let's build something amazing together!",
  openGraph: {
    title: "Nitesh | Full-Stack Developer Portfolio",
    description:
      "Explore the work of Nitesh, a full-stack developer with a passion for innovation and problem-solving.",
    images: [
      {
        url: personalData?.profile,
        width: 1200,
        height: 630,
        alt: "Portfolio preview of Nitesh",
      },
    ],
    type: "website",
    url: "https://niteshverse.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitesh | Full-Stack Developer Portfolio",
    description:
      "Explore the work of Nitesh, a full-stack developer with a passion for innovation and problem-solving.",
    images: [personalData?.profile],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Nitesh Shukla",
      jobTitle: "Full-Stack Developer",
      url: "https://niteshverse.vercel.app/",
      sameAs: [
        "https://github.com/Nitesh-10-shukla",
        "https://www.linkedin.com/in/nitesh-shukla-32a9051b6",
        "https://twitter.com/NiteshS84273251",
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
        suppressHydrationWarning
      >
        <ClientProviders>
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <Navbar />
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}