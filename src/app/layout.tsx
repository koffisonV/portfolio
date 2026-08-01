import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inconsolata",
});

export const metadata: Metadata = {
  title: "Koffison Voumadi — Full-Stack Software Developer",
  description:
    "Portfolio of Koffison Voumadi, a Full-Stack Software Developer based in New York, NY. Specializing in React, Next.js, Node.js, AWS, and cybersecurity. B.S. in Computer Science & Information Security.",
  keywords: [
    "Koffison Voumadi",
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Cybersecurity",
    "Biotech",
    "AI Development",
    "New York",
    "Portfolio",
  ],
  authors: [{ name: "Koffison Voumadi", url: "https://koffisonv.com" }],
  openGraph: {
    type: "website",
    url: "https://koffisonv.com",
    title: "Koffison Voumadi — Full-Stack Software Developer",
    description:
      "Full-Stack Software Developer based in NYC. Projects span biotech automation, blockchain media provenance, real-time vehicle diagnostics, and AI-powered NLP tools.",
    images: [
      {
        url: "https://koffisonv.com/images/nyscf.webp",
        width: 1200,
        height: 630,
        alt: "Koffison Voumadi Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inconsolata.variable} antialiased flex flex-col min-h-screen`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
