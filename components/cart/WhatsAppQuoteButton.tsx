"use client";

import { MessageCircle } from "lucide-react";
import { buildSingleProductWhatsApp } from "@/lib/whatsapp";

interface WhatsAppQuoteButtonProps {
  productName: string;
  fullWidth?: boolean;
}

export default function WhatsAppQuoteButton({ productName, fullWidth }: WhatsAppQuoteButtonProps) {
  const href = buildSingleProductWhatsApp(productName);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "0.875rem 2rem",
        background: "linear-gradient(135deg, #25D366, #128C7E)",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-dm-sans)",
        fontSize: "0.875rem",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        textDecoration: "none",
        borderRadius: "2px",
        transition: "all 0.3s ease",
        width: fullWidth ? "100%" : "auto",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,211,102,0.3)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <MessageCircle size={16} />
      WhatsApp Enquiry
    </a>
  );
}
