"use client";

import Image from "next/image";
import { motion } from "framer-motion";
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// TODO: Replace with actual Instagram images from Sanity CMS
const igPosts = [
  { id: "1", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&q=80", alt: "Bridal gold set" },
  { id: "2", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80", alt: "Gold necklace" },
  { id: "3", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80", alt: "Gold chains" },
  { id: "4", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&q=80", alt: "Gold bangles" },
  { id: "5", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80", alt: "Gold earrings" },
  { id: "6", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80", alt: "Gold ring" },
];

export default function InstagramFeed() {
  return (
    <section style={{ padding: "6rem 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <p style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#E9B670",
            marginBottom: "0.75rem",
          }}>
            ✦ Stay Connected ✦
          </p>
          <h2 style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600,
            color: "#332017",
            lineHeight: 1.2,
            marginBottom: "0.75rem",
          }}>
            Follow Our Journey
          </h2>
          <a
            href="https://www.instagram.com/saisrinijewellers/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.875rem",
              color: "#E9B670",
              textDecoration: "none",
              fontWeight: 500,
              transition: "opacity 0.2s",
            }}
          >
            <InstagramIcon size={16} />
            @saisrinijewellers
          </a>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-2"
        >
          {igPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/saisrinijewellers/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
                display: "block",
                borderRadius: "2px",
              }}
              className="ig-post"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 640px) 33vw, 200px"
                style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                className="ig-img"
              />
              {/* Hover overlay */}
              <div
                className="ig-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(233,182,112,0.85)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <InstagramIcon size={28} />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <style>{`
        .ig-post:hover .ig-img { transform: scale(1.08); }
        .ig-post:hover .ig-overlay { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
