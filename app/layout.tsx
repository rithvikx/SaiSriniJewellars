import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: "Best Gold Jewellery in Hyderabad | Saisrini Jewellers",
  description:
    "Shop premium bridal and gold jewellery at Saisrini Jewellers, Hyderabad. BIS hallmarked gold, custom designs, and transparent pricing for weddings & celebrations.",
  keywords: [
    "gold jewellery Hyderabad",
    "bridal jewellery Hyderabad",
    "Saisrini Jewellers",
    "BIS hallmark gold",
    "wedding jewellery",
  ],
  openGraph: {
    title: "Saisrini Jewellers — Hyderabad's Finest Gold Jewellery",
    description:
      "Timeless jewellery collections for weddings, celebrations & everyday elegance.",
    siteName: "Saisrini Jewellers",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
