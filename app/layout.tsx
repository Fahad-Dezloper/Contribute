import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://solanaoss.com";
const TITLE = "Solana Open Source Repositories to Contribute To — Contribute";
const DESCRIPTION =
  "Browse a live, curated index of active Solana open-source repositories — DeFi, NFT, infrastructure, SDKs, wallets, and developer tools to contribute to on GitHub.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Solana Open Source Index",
  },
  description: DESCRIPTION,
  applicationName: "Contribute",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Solana open source repositories",
    "Solana open source projects",
    "contribute to Solana",
    "Solana GitHub projects",
    "Solana repositories",
    "active Solana repos",
    "open source Solana",
    "Solana DeFi open source",
    "Solana developer tools",
    "Anchor",
    "Rust",
    "Web3",
    "Superteam",
    "Solana Foundation",
  ],
  authors: [{ name: "Superteam" }],
  category: "technology",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: "Contribute — Solana Open Source Index",
    images: [
      {
        url: "/OG/OG2.png",
        width: 1200,
        height: 630,
        alt: "Solana Open Source Repositories Index",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/OG/OG2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="ed6b0ed7-cde1-48f6-b582-a1cd0168ddf0"
        />
        <Script
          id="microsoft-clarity"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wmdngahzzv");
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Solana Contribute",
              url: "https://solanaoss.com/",
              description:
                "Discover high-impact open-source projects on Solana.",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://solanaoss.com/?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <div className="gradient-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
