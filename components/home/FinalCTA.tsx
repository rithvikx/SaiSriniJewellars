"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";

export default function FinalCTA() {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      {/* Gold-to-brown gradient */}
      <div
        style={{
          background: "linear-gradient(135deg, #332017 0%, #5a3a1a 40%, #332017 100%)",
          padding: "6rem 1.5rem",
          position: "relative",
        }}
      >
        {/* Gold shimmer line top */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #E9B670, transparent)" }} />

        {/* Gold decorative circles */}
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "240px", height: "240px", borderRadius: "50%", border: "1px solid rgba(233,182,112,0.1)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "320px", height: "320px", borderRadius: "50%", border: "1px solid rgba(233,182,112,0.08)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#E9B670",
              marginBottom: "1rem",
            }}>✦ Let&apos;s Connect ✦</p>

            <h2 style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}>
              Looking for the perfect piece?
            </h2>

            <p style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "520px",
              margin: "0 auto 2.5rem",
            }}>
              Visit our showroom in Hyderabad or chat with us directly on WhatsApp — we&apos;re here to help you find your perfect jewellery.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  background: "transparent",
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.5)",
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
              >
                <MapPin size={16} />
                Visit Showroom
              </Link>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  background: "linear-gradient(135deg, #E9B670, #C8973D)",
                  color: "#fff",
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  border: "1.5px solid transparent",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(233,182,112,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Gold shimmer line bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #E9B670, transparent)" }} />
      </div>
    </section>
  );
}
