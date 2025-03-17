import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({ weight: ["400"], subsets: ["latin"] });

import "./globals.css";

export const metadata: Metadata = {
  title: "Erik Aouizerate | Développeur Sénior Fullstack",
  description:
    "Portfolio d'Erik Aouizerate, développeur sénior fullstack spécialisé en React, TypeScript, Node.js et DevOps. Découvrez mes projets et compétences.",
  keywords: [
    "développeur",
    "fullstack",
    "react",
    "typescript",
    "node.js",
    "devops",
    "python",
    "docker",
    "git",
    "gitlab",
    "portfolio",
  ],
  authors: [{ name: "Erik Aouizerate" }],
  creator: "Erik Aouizerate",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://erikaouizerate.com",
    title: "Erik Aouizerate | Développeur Sénior Fullstack",
    description:
      "Portfolio d'Erik Aouizerate, développeur sénior fullstack spécialisé en React, TypeScript, Node.js et DevOps.",
    siteName: "Portfolio d'Erik Aouizerate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erik Aouizerate | Développeur Sénior Fullstack",
    description:
      "Portfolio d'Erik Aouizerate, développeur sénior fullstack spécialisé en React, TypeScript, Node.js et DevOps.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://erik-aouizerate.me" />
      </head>
      <body className={`overflow-x-hidden w-full ${manrope.className}`}>
        {children}
      </body>
    </html>
  );
}
