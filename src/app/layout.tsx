import type { Metadata } from "next";
import { satoshi } from "./fonts";
import "./globals.css";
import { Navbar } from "./_components/navbar";

export const metadata: Metadata = {
  title: "Ali Academy",
  description: "An online learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      {/* Changed from "en" to "uz" */}
      <head>
        <meta name="language" content="Uzbek" />
        <meta name="google-translate-customization" content="auto-translate" />
        <meta property="og:locale" content="uz_UZ" />
        <meta httpEquiv="content-language" content="uz" />
      </head>
      <body className={`${satoshi.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
