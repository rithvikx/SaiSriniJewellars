import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Saisrini Jewellers Hyderabad",
  description:
    "Learn the story behind Saisrini Jewellers — Hyderabad's trusted BIS hallmarked gold jewellery store. Heritage, craftsmanship, and a passion for excellence.",
  openGraph: {
    title: "About Saisrini Jewellers | A Legacy in Gold",
    description: "Three generations of goldsmithing expertise serving Hyderabad families.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
