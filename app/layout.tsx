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
    default: `${Language.app.name}`,
    template: `%s | ${Language.app.name}`,
  },
  description: "Quantum Ai",
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
