"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Heart, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCartStore } from "@/lib/cart-store";
import WhatsAppQuoteButton from "@/components/cart/WhatsAppQuoteButton";
import { Product } from "@/components/products/ProductCard";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const { addItem } = useCartStore();
  const images = product.images?.length > 0 ? product.images : ["https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=85"];
  const slug = typeof product.slug === "string" ? product.slug : product.slug?.current;

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem", fontFamily: "var(--font-dm-sans)", fontSize: "0.8rem", color: "rgba(51,32,23,0.5)" }}>
        <Link href="/products" style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", color: "#E9B670", textDecoration: "none" }}>
          <ChevronLeft size={14} /> All Products
        </Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Gallery */}
        <div>
          <motion.div
            key={activeImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", borderRadius: "2px", marginBottom: "1rem", border: "1px solid #E8E2D8" }}
          >
            <Image src={images[activeImg]} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
            {product.isNew && (
              <span style={{ position: "absolute", top: "1rem", left: "1rem", background: "#E9B670", color: "#fff", fontSize: "0.65rem", fontWeight: 700, padding: "4px 10px", borderRadius: "2px", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-dm-sans)" }}>New</span>
            )}
          </motion.div>
          {images.length > 1 && (
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {images.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)} style={{ position: "relative", width: "72px", height: "72px", border: i === activeImg ? "2px solid #E9B670" : "2px solid transparent", borderRadius: "2px", overflow: "hidden", cursor: "pointer", padding: 0, background: "none" }}>
                  <Image src={img} alt={`View ${i + 1}`} fill style={{ objectFit: "cover" }} sizes="72px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          {product.category && (
            <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E9B670", display: "block", marginBottom: "0.75rem" }}>
              {product.category.name}
            </span>
          )}
          <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "#332017", lineHeight: 1.15, marginBottom: "1.5rem" }}>
            {product.name}
          </h1>

          {/* Specs */}
          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {product.weight && (
              <div style={{ padding: "0.6rem 1.25rem", border: "1px solid #E8E2D8", borderRadius: "2px", background: "#FAFAF9" }}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.65rem", fontWeight: 600, color: "#E9B670", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Weight</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600, color: "#332017", fontSize: "0.9rem" }}>{product.weight}</p>
              </div>
            )}
            {product.purity && (
              <div style={{ padding: "0.6rem 1.25rem", border: "1px solid #E8E2D8", borderRadius: "2px", background: "#FAFAF9" }}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.65rem", fontWeight: 600, color: "#E9B670", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Purity</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600, color: "#332017", fontSize: "0.9rem" }}>{product.purity}</p>
              </div>
            )}
            <div style={{ padding: "0.6rem 1.25rem", border: "1px solid #E8E2D8", borderRadius: "2px", background: "#FAFAF9" }}>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.65rem", fontWeight: 600, color: "#E9B670", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Certification</p>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600, color: "#332017", fontSize: "0.9rem" }}>BIS Hallmark</p>
            </div>
          </div>

          {/* Price */}
          <div style={{ borderTop: "1px solid #E8E2D8", borderBottom: "1px solid #E8E2D8", padding: "1.5rem 0", marginBottom: "1.75rem" }}>
            {product.price ? (
              <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "2rem", fontWeight: 600, color: "#332017" }}>
                ₹{product.price.toLocaleString("en-IN")}
              </span>
            ) : (
              <div>
                <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.6rem", fontStyle: "italic", color: "#E9B670" }}>Ask for Price</span>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.8rem", color: "rgba(51,32,23,0.5)", marginTop: "0.25rem" }}>
                  Price varies with daily gold rate. Enquire on WhatsApp for current pricing.
                </p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button
                onClick={() => addItem({ id: product._id, name: product.name, quantity: 1, image: images[0], price: product.price, category: product.category?.name })}
                style={{ flex: 1, padding: "1rem", background: "linear-gradient(135deg, #E9B670, #C8973D)", color: "#fff", border: "none", cursor: "pointer", fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", borderRadius: "2px", transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(233,182,112,0.35)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <ShoppingBag size={16} />
                Add to Cart
              </button>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                style={{ width: "52px", height: "52px", background: "transparent", border: "1px solid #E8E2D8", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "2px", color: wishlisted ? "#E9B670" : "#332017", transition: "all 0.3s" }}
                aria-label="Wishlist"
              >
                <Heart size={20} fill={wishlisted ? "#E9B670" : "none"} />
              </button>
            </div>
            <WhatsAppQuoteButton productName={product.name} fullWidth />
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.75rem" }}>
            {["✦ BIS Hallmarked", "✦ Free Polish Service", "✦ Custom Sizing"].map((badge) => (
              <span key={badge} style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.06em", color: "#E9B670", padding: "0.35rem 0.75rem", border: "1px solid rgba(233,182,112,0.3)", borderRadius: "2px" }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
