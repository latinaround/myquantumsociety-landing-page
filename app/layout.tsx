import type { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import { FooterComponent, HeaderComponent } from "@/components";
import { Language } from "./_lib/language/en";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: {
    default: 'qAIntum Inc',
    template: `%s | qAIntum Inc`,
  },
  description: "Quantum Intelligence with Light",
  openGraph: {
    type: 'website',
    url: 'https://www.qaintum.ai/',
    title: 'qAIntum Inc',
    description: 'Quantum Intelligence with Light',
    images: [
      {
        url: 'https://www.qaintum.ai/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'qAIntum.ai Logo',
      },
    ],
    site_name: 'qAIntum Inc',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@qaintumai',
    title: 'qAIntum Inc',
    description: 'Quantum Intelligence with Light',
    images: [
      {
        url: 'https://www.qaintum.ai/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'qAIntum.ai Logo',
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
      <body className={`${inter.variable} ${roboto_mono.variable}`}>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
