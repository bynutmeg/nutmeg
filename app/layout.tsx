import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import Meg from "./components/Meg";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Nutmeg | Little joys for your desk",
  description:
    "Thoughtfully curated stationery for journal lovers, dreamers and cozy minds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${nunito.variable}`}>
        {children}
          <Meg />
      </body>
    </html>
  );
}