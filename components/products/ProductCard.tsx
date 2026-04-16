"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/lib/cart-store";

export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  images: string[];
  weight?: string;
  purity?: string;
  price?: number;
  isNew?: boolean;
  category?: { name: string; slug: { current: string } };
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCartStore();

  const img1 = product.images?.[0] || "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80";
  const img2 = product.images?.[1] || img1;
  const slug = typeof product.slug === "string" ? product.slug : product.slug?.current;

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    addItem({
      id: product._id,
      name: product.name,
      quantity: 1,
      image: img1,
      price: product.price,
      category: product.category?.name,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      style={{ position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: hovered ? "#E9B670" : "#E8E2D8",
          borderRadius: "2px",
          overflow: "hidden",
          background: "#fff",
          transition: "all 0.3s ease",
          boxShadow: hovered ? "0 16px 48px rgba(0,0,0,0.1)" : "none",
        }}
      >
        {/* Image Area — standalone div so button is NOT nested inside <a> */}
        <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
          <Link
            href={`/products/${slug}`}
            style={{ display: "block", width: "100%", height: "100%" }}
            tabIndex={0}
          >
            <Image
              src={hovered ? img2 : img1}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{
                objectFit: "cover",
                transition: "transform 0.6s ease",
                transform: hovered ? "scale(1.05)" : "scale(1)",
              }}
            />

            {/* Badges */}
            <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", display: "flex", flexDirection: "column", gap: "0.4rem", pointerEvents: "none" }}>
              {product.category && (
                <span style={{
                  background: "rgba(51,32,23,0.85)",
                  color: "#E9B670",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "2px",
                  fontFamily: "var(--font-dm-sans)",
                }}>
                  {product.category.name}
                </span>
              )}
              {product.isNew && (
                <span style={{
                  background: "#E9B670",
                  color: "#fff",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "2px",
                  fontFamily: "var(--font-dm-sans)",
                }}>
                  New
                </span>
              )}
            </div>
          </Link>

          {/* Add to Cart — outside the Link, absolute overlay so it renders over the image */}
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={hovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
            style={{
              position: "absolute",
              bottom: "1rem",
              left: "1rem",
              right: "1rem",
              background: added
                ? "linear-gradient(135deg, #6b7280, #4b5563)"
                : "linear-gradient(135deg, #E9B670, #C8973D)",
              color: "#fff",
              border: "none",
              padding: "0.75rem",
              cursor: "pointer",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "var(--font-dm-sans)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              borderRadius: "2px",
              transition: "background 0.3s ease",
              zIndex: 2,
            }}
          >
            <ShoppingBag size={14} />
            {added ? "Added!" : "Add to Cart"}
          </motion.button>
        </div>

        {/* Info */}
        <div style={{ padding: "1.25rem" }}>
          <Link href={`/products/${slug}`} style={{ textDecoration: "none" }}>
            <h3 style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: hovered ? "#E9B670" : "#332017",
              lineHeight: 1.3,
              marginBottom: "0.4rem",
              transition: "color 0.2s",
            }}>
              {product.name}
            </h3>
          </Link>

          {product.weight && (
            <p style={{ fontSize: "0.8rem", color: "rgba(51,32,23,0.55)", fontFamily: "var(--font-dm-sans)", marginBottom: "0.75rem" }}>
              {product.weight}{product.purity ? ` · ${product.purity}` : ""}
            </p>
          )}

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 600,
              fontSize: "0.95rem",
              color: product.price ? "#332017" : "#E9B670",
            }}>
              {product.price ? `₹${product.price.toLocaleString("en-IN")}` : "Ask for Price"}
            </span>

            <button
              onClick={() => setWishlisted(!wishlisted)}
              aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
              aria-pressed={wishlisted}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: wishlisted ? "#E9B670" : "rgba(51,32,23,0.3)",
                transition: "color 0.2s, transform 0.2s",
                transform: wishlisted ? "scale(1.15)" : "scale(1)",
                padding: "6px",
                borderRadius: "50%",
                lineHeight: 0,
              }}
            >
              <Heart size={18} fill={wishlisted ? "#E9B670" : "none"} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
