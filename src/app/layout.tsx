import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const script = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Arkawell — Boutique Full-Stack Consultancy",
  description:
    "Arkawell crafts intelligent digital products, architectural strategy, and rapid MVP builds for founders and modern teams.",
  keywords: [
    "Arkawell",
    "tech consultancy",
    "full-stack product studio",
    "rapid MVP development",
    "digital transformation",
  ],
  metadataBase: new URL("https://arkawell.com"),
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "Arkawell — Smart Tech, Artfully Delivered.",
    description:
      "Experience a boutique product team that blends premium UX, full-stack engineering, and strategic guidance.",
    url: "https://arkawell.com",
    siteName: "Arkawell",
    images: [
      {
        url: "/arkawell-logo-light.png",
        width: 1200,
        height: 630,
        alt: "Arkawell emblem on gradient background",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkawell — Smart Tech, Artfully Delivered.",
    description:
      "Boutique full-stack consultancy delivering elegant, measurable product outcomes for startups and SMBs.",
    images: ["/arkawell-logo-light.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${script.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
