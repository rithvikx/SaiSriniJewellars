"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero — Saisrini Jewellers"
      style={{
        position: "relative",
        width: "100%",
        height: "100dvh",
        minHeight: "600px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
        poster="https://images.unsplash.com/photo-1610317718991-aaa5f6f7b9cc?w=1920&q=80"
      >
        <source src="/b-roll/b-roll.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.52)",
          zIndex: 1,
        }}
      />

      {/* Luxury grain / noise texture — adds tactile depth */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
          zIndex: 2,
          mixBlendMode: "overlay",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Bottom gradient fade to white */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          padding: "0 1.5rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#E9B670",
            marginBottom: "1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
          }}
        >
          <span aria-hidden="true" style={{ display: "inline-block", width: "32px", height: "1px", background: "#E9B670" }} />
          Hyderabad&apos;s Finest Gold Jewellery
          <span aria-hidden="true" style={{ display: "inline-block", width: "32px", height: "1px", background: "#E9B670" }} />
        </motion.p>

        {/* H1 with Gold Shimmer */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 600,
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
          className="gold-shimmer"
        >
          Crafted To Shine.
          <br />
          Designed To Last.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "clamp(0.95rem, 2.5vw, 1.2rem)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.82)",
            letterSpacing: "0.02em",
            lineHeight: 1.7,
            maxWidth: "580px",
            margin: "0 auto 2.5rem",
          }}
        >
          Timeless jewellery collections for weddings, celebrations &amp; everyday elegance.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <Link href="/products" className="btn-gold" style={{ borderRadius: "2px" }}>
            Explore Collection
          </Link>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send a WhatsApp enquiry"
            className="btn-outline-white"
            style={{ borderRadius: "2px" }}
          >
            <MessageCircle size={16} aria-hidden="true" />
            WhatsApp Enquiry
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} color="rgba(255,255,255,0.5)" />
        </motion.div>
      </motion.div>

      {/* Gold divider at section bottom */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent 0%, #E9B670 30%, #E9B670 70%, transparent 100%)",
          zIndex: 6,
        }}
      />
    </section>
  );
}
