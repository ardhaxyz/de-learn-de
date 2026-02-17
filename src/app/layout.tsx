import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProgressProvider } from "./context/ProgressContext";
import BottomNav from "./components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "de-learn-de | Learn German with Love",
  description: "de-learn-de - A 14-day German A1 course for Ine Maria. Interactive quiz with listening & reading exercises. Learn German with love 💕",
  keywords: ["German", "learn German", "A1 German", "German course", "language learning", "Deutsch"],
  authors: [{ name: "ardhaxyz" }],
  creator: "ardhaxyz",
  openGraph: {
    title: "de-learn-de | Learn German with Love",
    description: "A 14-day German A1 course. Interactive quiz with listening & reading exercises. Learn German with love 💕",
    url: "https://de-learn-de.vercel.app",
    siteName: "de-learn-de",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "de-learn-de | Learn German with Love",
    description: "A 14-day German A1 course. Interactive quiz with listening & reading exercises.",
    creator: "@ardhaxyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} min-h-screen bg-de-gray pb-20`}>
        <ProgressProvider>
          <main className="max-w-md mx-auto min-h-screen bg-white shadow-sm">
            {children}
          </main>
          <BottomNav />
        </ProgressProvider>
      </body>
    </html>
  );
}
