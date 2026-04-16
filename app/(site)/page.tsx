import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import SignatureCollections from "@/components/home/SignatureCollections";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import VideoShowcase from "@/components/home/VideoShowcase";
import Testimonials from "@/components/home/Testimonials";
import InstagramFeed from "@/components/home/InstagramFeed";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Best Gold Jewellery in Hyderabad | Saisrini Jewellers",
  description:
    "Shop premium BIS hallmarked bridal and gold jewellery at Saisrini Jewellers, Hyderabad. Custom designs, transparent pricing for weddings & celebrations.",
  keywords: ["gold jewellery Hyderabad", "bridal jewellery Hyderabad", "Saisrini Jewellers", "BIS hallmark gold"],
  openGraph: {
    title: "Saisrini Jewellers — Hyderabad's Finest Gold Jewellery",
    description: "Timeless jewellery for weddings, celebrations & everyday elegance.",
    type: "website",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "JewelryStore",
      name: "Saisrini Jewellers",
      description: "Premium BIS hallmarked gold jewellery store in Hyderabad, Telangana.",
      url: "https://saisrinijewellers.com",
      telephone: "+91-98765-43210",
      address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
      openingHours: ["Mo-Sa 10:00-20:00", "Su 11:00-18:00"],
      sameAs: ["https://www.instagram.com/saisrinijewellers/"],
    },
    {
      "@type": "LocalBusiness",
      name: "Saisrini Jewellers",
      image: "https://saisrinijewellers.com/og-image.jpg",
      priceRange: "₹₹₹",
      address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <FeaturedCategories />
      <SignatureCollections />
      <WhyChooseUs />
      <VideoShowcase />
      <Testimonials />
      <InstagramFeed />
      <FinalCTA />
    </>
  );
}
