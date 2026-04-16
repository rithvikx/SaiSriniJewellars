"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  { name: "Bridal Jewellery", slug: "bridal-jewellery", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80" },
  { name: "Gold Chains", slug: "gold-chains", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
  { name: "Necklaces", slug: "necklaces", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80" },
  { name: "Earrings", slug: "earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
  { name: "Bangles", slug: "bangles", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80" },
  { name: "Rings", slug: "rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80" },
  { name: "Temple Jewellery", slug: "temple-jewellery", image: "https://images.unsplash.com/photo-1610317718991-aaa5f6f7b9cc?w=600&q=80" },
  { name: "Daily Wear", slug: "daily-wear", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function FeaturedCategories() {
  return (
    <section
      aria-label="Shop by category"
      style={{
        padding: "6rem 1.5rem",
        background: "#FFFFFF",
        maxWidth: "1320px",
        margin: "0 auto",
      }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "3.5rem" }}
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
          Browse Our Range
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
          Shop By Category
        </h2>
      </motion.div>

      {/* Category Grid — Tailwind responsive classes replace inline <style> */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5"
      >
        {categories.map((cat) => (
          <motion.div key={cat.slug} variants={cardVariants}>
            <Link
              href={`/products?category=${cat.slug}`}
              aria-label={`Browse ${cat.name}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  borderRadius: "2px",
                  cursor: "pointer",
                  border: "1px solid #E8E2D8",
                  transition: "border-color 0.3s ease",
                }}
                className="category-card group"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
                {/* Gradient Overlay */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(51,32,23,0.8) 0%, rgba(51,32,23,0.1) 50%, transparent 100%)",
                  }}
                />
                {/* Name */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.25rem 1rem",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "#fff",
                      letterSpacing: "0.02em",
                      display: "block",
                    }}
                    className="transition-transform duration-300 group-hover:-translate-y-1"
                  >
                    {cat.name}
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      display: "block",
                      height: "1px",
                      background: "#E9B670",
                      margin: "0.5rem auto 0",
                    }}
                    className="w-6 transition-all duration-300 group-hover:w-10"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
