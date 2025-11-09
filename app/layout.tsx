import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Premium Web Hosting Services | Fast, Secure & Reliable",
  description: "Experience lightning-fast web hosting with 99.9% uptime guarantee. Get expert 24/7 support, free SSL, automated backups, and WordPress optimization. Start hosting your website today!",
  keywords: ["web hosting", "WordPress hosting", "VPS hosting", "cloud hosting", "managed hosting", "website hosting", "domain hosting"],
  authors: [{ name: "Premium Hosting" }],
  creator: "Premium Hosting",
  publisher: "Premium Hosting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hosting.devroox.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Premium Web Hosting Services | Fast, Secure & Reliable",
    description: "Experience lightning-fast web hosting with 99.9% uptime guarantee. Get expert 24/7 support, free SSL, automated backups, and WordPress optimization.",
    url: 'https://hosting.devroox.com',
    siteName: 'Premium Hosting',
    images: [
      {
        url: '/assets/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Premium Hosting Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Premium Web Hosting Services | Fast, Secure & Reliable",
    description: "Experience lightning-fast web hosting with 99.9% uptime guarantee. Get expert 24/7 support, free SSL, and automated backups.",
    images: ['/assets/images/logo.png'],
    creator: '@premiumhosting',
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
      { url: '/assets/images/logo.png' },
      { url: '/assets/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/images/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/images/logo.png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/assets/images/logo.png',
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
        {children}
      </body>
    </html>
  );
}
