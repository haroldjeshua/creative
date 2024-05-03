import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const fontDisplay = localFont({
  src: "../public/fonts/PPNeueBit-Bold.otf",
  display: "swap",
  variable: "--font-display",
});

const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.subtitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}