import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adlef | Fast, Reliable, Secure Hosting",
  description: "Adlef delivers fast, reliable, secure hosting with 99.9% uptime, expert 24/7 support, free SSL, automated backups, and WordPress optimization.",
  keywords: ["Adlef", "web hosting", "WordPress hosting", "VPS hosting", "cloud hosting", "managed hosting", "website hosting", "domain hosting"],
  authors: [{ name: "Adlef" }],
  creator: "Adlef",
  publisher: "Adlef",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://adlef.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Adlef | Fast, Reliable, Secure Hosting",
    description: "Fast. Reliable. Secure hosting. Get expert 24/7 support, free SSL, automated backups, and WordPress optimization with Adlef.",
    url: 'https://adlef.com',
    siteName: 'Adlef',
    images: [
      {
        url: '/assets/images/graph.png',
        width: 1254,
        height: 1254,
        alt: 'Adlef hosting — fast, reliable, secure hosting with 99.9% uptime and 24/7 support',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Adlef | Fast, Reliable, Secure Hosting",
    description: "Fast. Reliable. Secure hosting. Expert 24/7 support, free SSL, and automated backups with Adlef.",
    images: ['/assets/images/graph.png'],
    creator: '@adlef',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/assets/images/adlef-logo.png' },
      { url: '/assets/images/adlef-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/images/adlef-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/images/adlef-logo.png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/assets/images/adlef-logo.png',
      },
    ],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
