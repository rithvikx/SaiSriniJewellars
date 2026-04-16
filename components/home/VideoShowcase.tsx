"use client";

import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section
      style={{
        position: "relative",
        height: "70vh",
        minHeight: "480px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          willChange: "transform",
        }}
        poster="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
      >
        <source src="/b-roll/b-roll.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.65)",
          zIndex: 1,
        }}
      />

      {/* Gold top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent, #E9B670, transparent)",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 1.5rem",
          maxWidth: "700px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#E9B670",
            marginBottom: "1.25rem",
          }}
        >
          ✦ Our Craft ✦
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#fff",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
          }}
        >
          &ldquo;Every piece tells a story.&rdquo;
        </h2>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
          }}
        >
          Witness the craftsmanship behind every ornament — from raw gold to timeless jewellery.
        </p>

        {/* Decorative divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <span style={{ display: "block", width: "40px", height: "1px", background: "rgba(233,182,112,0.5)" }} />
          <span style={{ color: "#E9B670", fontSize: "1.2rem" }}>✦</span>
          <span style={{ display: "block", width: "40px", height: "1px", background: "rgba(233,182,112,0.5)" }} />
        </div>
      </motion.div>

      {/* Gold bottom border */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent, #E9B670, transparent)",
          zIndex: 2,
        }}
      />
    </section>
  );
}
