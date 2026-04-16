"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Users, Gem, Award } from "lucide-react";

const stats = [
  { value: "20+", label: "Years of Trust" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "50,000+", label: "Pieces Crafted" },
  { value: "100%", label: "BIS Hallmarked" },
];

const whyUs = [
  { icon: Shield, title: "Certified Purity", desc: "Every piece carries a BIS hallmark — your assurance of genuine gold quality." },
  { icon: Users, title: "Family Legacy", desc: "Three generations of goldsmithing expertise serving Hyderabad families." },
  { icon: Gem, title: "Bespoke Designs", desc: "From concept sketch to finished ornament — we craft your vision in gold." },
  { icon: Award, title: "Award Winning", desc: "Recognised among Hyderabad's finest jewellery stores by our loyal customers." },
];

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

export default function AboutClient() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <div style={{ position: "relative", height: "60vh", minHeight: "400px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image
          src="https://images.unsplash.com/photo-1610317718991-aaa5f6f7b9cc?w=1920&q=80"
          alt="About Saisrini Jewellers"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.58)" }} />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 1.5rem" }}
        >
          <motion.p variants={fadeUp} style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#E9B670", marginBottom: "1rem" }}>
            ✦ Our Heritage ✦
          </motion.p>
          <motion.h1 variants={fadeUp} style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 600, color: "#fff", lineHeight: 1.15 }}>
            Our Story
          </motion.h1>
        </motion.div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #E9B670, transparent)" }} />
      </div>

      {/* Brand Story */}
      <section style={{ maxWidth: "1320px", margin: "0 auto", padding: "6rem 1.5rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#E9B670", marginBottom: "1rem" }}>✦ Who We Are ✦</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "#332017", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              A Legacy Crafted in Gold
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1rem", color: "rgba(51,32,23,0.7)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
              Saisrini Jewellers was founded with one simple belief: that every piece of gold jewellery should be as timeless as the love it represents. Based in the heart of Hyderabad, we have served generations of families — from their first gold purchase to the grandest of bridal ensembles.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1rem", color: "rgba(51,32,23,0.7)", lineHeight: 1.9, marginBottom: "1.75rem" }}>
              Our master craftsmen bring centuries of Hyderabadi goldsmithing tradition to every creation. We believe jewellery is not just an ornament — it is a story, an heirloom, a memory forged in gold.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", border: "1px solid rgba(233,182,112,0.4)", borderRadius: "2px", background: "rgba(233,182,112,0.05)" }}>
              <span style={{ color: "#E9B670", fontSize: "1.1rem" }}>✦</span>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", color: "#332017" }}>BIS Hallmarked · 100% Pure Gold</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ position: "relative", aspectRatio: "4/5", borderRadius: "2px", overflow: "hidden" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=85"
              alt="Saisrini Jewellery Craftsmanship"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#332017", padding: "5rem 1.5rem", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #E9B670, transparent)" }} />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ maxWidth: "1320px", margin: "0 auto" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} style={{ textAlign: "center", padding: "2rem 1rem" }}>
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#E9B670", lineHeight: 1 }}>{stat.value}</p>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", marginTop: "0.5rem", letterSpacing: "0.04em" }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #E9B670, transparent)" }} />
      </section>

      {/* Craftsmanship */}
      <section style={{ maxWidth: "1320px", margin: "0 auto", padding: "6rem 1.5rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: "relative", aspectRatio: "4/3", borderRadius: "2px", overflow: "hidden" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=85"
              alt="Gold jewellery craftsmanship"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#E9B670", marginBottom: "1rem" }}>✦ The Art of Gold ✦</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 600, color: "#332017", lineHeight: 1.2, marginBottom: "1.25rem" }}>
              Craftsmanship in Every Detail
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.95rem", color: "rgba(51,32,23,0.7)", lineHeight: 1.85, marginBottom: "1rem" }}>
              Each piece begins with the finest gold procured from certified sources. Our artisans — many with decades of experience — hand-craft every detail with the precision and care that only human hands can deliver.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.95rem", color: "rgba(51,32,23,0.7)", lineHeight: 1.85 }}>
              From intricate filigree work to bold contemporary designs, we blend traditional Hyderabadi motifs with modern aesthetics — creating jewellery that is uniquely Saisrini.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ background: "#FBF7F0", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#E9B670", marginBottom: "0.75rem" }}>✦ Our Values ✦</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#332017" }}>Why Customers Love Us</h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  style={{ padding: "2rem", border: "1px solid #E8E2D8", borderRadius: "2px", background: "#fff", textAlign: "center" }}
                  whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.08)", borderColor: "#E9B670" }}
                  transition={{ duration: 0.2 }}
                >
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "rgba(233,182,112,0.1)", border: "1px solid rgba(233,182,112,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                    <Icon size={22} color="#E9B670" strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.2rem", fontWeight: 600, color: "#332017", marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.875rem", color: "rgba(51,32,23,0.65)", lineHeight: 1.75 }}>{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section style={{ padding: "6rem 1.5rem", maxWidth: "1320px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "2.2rem", color: "#332017" }}>Find Us in Hyderabad</h2>
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.9rem", color: "rgba(51,32,23,0.55)", marginTop: "0.5rem" }}>We&apos;d love to welcome you to our showroom</p>
        </motion.div>
        <div style={{ borderRadius: "2px", overflow: "hidden", border: "1px solid #E8E2D8", height: "420px" }}>
          <iframe
            src="https://maps.google.com/maps?q=Saisrini+Jewellers+Hyderabad+Telangana+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Saisrini Jewellers location on Google Maps"
          />
        </div>
      </section>

    </div>
  );
}
