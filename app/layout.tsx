import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Scoozi | Artisan Café & Restaurant",
  description:
    "Experience the warmth of handcrafted coffee and fresh pastries in a calm, welcoming atmosphere. Scoozi - where every moment is savored.",
  keywords: ["café", "restaurant", "coffee", "pastries", "artisan", "brunch"],
  openGraph: {
    title: "Scoozi | Artisan Café & Restaurant",
    description:
      "Experience the warmth of handcrafted coffee and fresh pastries in a calm, welcoming atmosphere.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
