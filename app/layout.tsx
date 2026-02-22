import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";
import { METADATA } from "../constants";
import { getSiteSettingsWithRevalidate } from "../cms/lib/actions";
import { ThemeProvider } from "./providers/theme-provider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = METADATA;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await getSiteSettingsWithRevalidate(60);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider settings={siteSettings}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
