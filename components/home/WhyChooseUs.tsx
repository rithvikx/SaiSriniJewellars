"use client";

import { motion } from "framer-motion";
import { Shield, Star, Palette, BadgeCheck, Heart, Gem } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const promises: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Shield,
    title: "BIS Hallmarked Gold",
    desc: "Every piece certified with BIS hallmark — your guarantee of purity and quality.",
  },
  {
    icon: Star,
    title: "Trusted Since Founding",
    desc: "Decades of expertise in gold jewellery, serving Hyderabad families with pride.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    desc: "Bring your dream jewellery to life with our bespoke design service.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    desc: "No hidden charges. Fair pricing based on daily gold rates, always.",
  },
  {
    icon: Heart,
    title: "Bridal Specialists",
    desc: "Complete bridal jewellery sets crafted for your most important moments.",
  },
  {
    icon: Gem,
    title: "Premium Service",
    desc: "White-glove customer care from selection through lifetime after-service.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function WhyChooseUs() {
  return (
    <section
      aria-label="Why choose Saisrini Jewellers"
      style={{ padding: "6rem 1.5rem", background: "#fff" }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#E9B670",
              marginBottom: "0.75rem",
            }}
          >
            Our Commitment
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "#332017",
              lineHeight: 1.2,
            }}
          >
            The Saisrini Promise
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "1rem",
              color: "rgba(51,32,23,0.65)",
              maxWidth: "520px",
              margin: "1rem auto 0",
              lineHeight: 1.7,
            }}
          >
            Six pillars that have made us Hyderabad&apos;s most trusted jewellery destination.
          </p>
        </motion.div>

        {/* Grid — Tailwind responsive classes replace inline <style> */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {promises.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  boxShadow: "0 24px 60px rgba(0,0,0,0.08)",
                  borderColor: "#E9B670",
                }}
                style={{
                  padding: "2.5rem 2rem",
                  border: "1px solid #E8E2D8",
                  borderRadius: "2px",
                  background: "#FAFAF9",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Gold corner accent */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "3px",
                    height: "40px",
                    background: "linear-gradient(to bottom, #E9B670, transparent)",
                  }}
                />

                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(233,182,112,0.15), rgba(233,182,112,0.05))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                    border: "1px solid rgba(233,182,112,0.25)",
                  }}
                >
                  <Icon size={22} color="#E9B670" strokeWidth={1.5} aria-hidden="true" />
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    color: "#332017",
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(51,32,23,0.65)",
                    lineHeight: 1.75,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
