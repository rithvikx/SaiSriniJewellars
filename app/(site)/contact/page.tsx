import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Saisrini Jewellers Hyderabad",
  description:
    "Visit Saisrini Jewellers showroom in Hyderabad or chat with us on WhatsApp. Get in touch for bridal jewellery, custom designs, and gold enquiries.",
  openGraph: {
    title: "Contact Saisrini Jewellers | Hyderabad Gold Jewellery",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
