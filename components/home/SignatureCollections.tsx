"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const collections = [
  {
    id: "1",
    name: "Royal Bridal Set",
    tagline: "Where heritage meets modern elegance",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=85",
    category: "bridal-jewellery",
  },
  {
    id: "2",
    name: "Antique Temple Collection",
    tagline: "Inspired by centuries of divine artistry",
    image: "https://images.unsplash.com/photo-1610317718991-aaa5f6f7b9cc?w=800&q=85",
    category: "temple-jewellery",
  },
  {
    id: "3",
    name: "Everyday Luxe",
    tagline: "Refined designs for every moment",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=85",
    category: "daily-wear",
  },
  {
    id: "4",
    name: "The Gold Chain Edit",
    tagline: "Timeless chains in 22KT gold",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85",
    category: "gold-chains",
  },
  {
    id: "5",
    name: "Festival Splendour",
    tagline: "Celebrate every occasion in gold",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=85",
    category: "necklaces",
  },
  {
    id: "6",
    name: "Bangle Royale",
    tagline: "Stacked with stories, crafted with love",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=85",
    category: "bangles",
  },
];

export default function SignatureCollections() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  /* Track drag state for mouse-drag-to-scroll */
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
  };

  /* Mouse drag handlers */
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    dragStartX.current = e.pageX - scrollRef.current.offsetLeft;
    dragScrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
    scrollRef.current.style.userSelect = "none";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const delta = (x - dragStartX.current) * 1.2;
    scrollRef.current.scrollLeft = dragScrollLeft.current - delta;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
      scrollRef.current.style.userSelect = "";
    }
  };

  const btnStyle = (enabled: boolean): React.CSSProperties => ({
    width: "44px",
    height: "44px",
    border: `1px solid ${enabled ? "#E9B670" : "#E8E2D8"}`,
    background: "transparent",
    cursor: enabled ? "pointer" : "not-allowed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: enabled ? "#E9B670" : "#C8BFB8",
    borderRadius: "2px",
    transition: "all 0.25s ease",
    opacity: enabled ? 1 : 0.45,
  });

  return (
    <section
      aria-label="Signature collections"
      style={{ padding: "6rem 0", background: "#FBF7F0", overflow: "hidden" }}
    >
      {/* Header */}
      <div style={{ padding: "0 1.5rem", maxWidth: "1320px", margin: "0 auto 3rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}
        >
          <div>
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
              Handpicked For You
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
              Our Signature Collections
            </h2>
          </div>

          {/* Scroll nav buttons */}
          <div style={{ display: "flex", gap: "0.5rem" }} role="group" aria-label="Scroll collections">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll collections left"
              style={btnStyle(canScrollLeft)}
              onMouseEnter={(e) => { if (canScrollLeft) { e.currentTarget.style.background = "#E9B670"; e.currentTarget.style.color = "#fff"; } }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = canScrollLeft ? "#E9B670" : "#C8BFB8"; }}
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll collections right"
              style={btnStyle(canScrollRight)}
              onMouseEnter={(e) => { if (canScrollRight) { e.currentTarget.style.background = "#E9B670"; e.currentTarget.style.color = "#fff"; } }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = canScrollRight ? "#E9B670" : "#C8BFB8"; }}
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll with drag-to-scroll */}
      <div
        ref={scrollRef}
        role="list"
        aria-label="Collections carousel"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        style={{
          display: "flex",
          gap: "1.5rem",
          overflowX: "auto",
          paddingLeft: "max(1.5rem, calc((100vw - 1320px) / 2 + 1.5rem))",
          paddingRight: "1.5rem",
          paddingBottom: "1rem",
          scrollbarWidth: "none",
          cursor: "grab",
        }}
        className="no-scrollbar"
      >
        {collections.map((col, i) => (
          <motion.div
            key={col.id}
            role="listitem"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            style={{ flexShrink: 0, width: "clamp(280px, 30vw, 380px)" }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                overflow: "hidden",
                borderRadius: "2px",
                marginBottom: "1.25rem",
              }}
              className="group"
            >
              <Image
                src={col.image}
                alt={col.name}
                fill
                sizes="380px"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                draggable={false}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(51,32,23,0.75) 0%, transparent 55%)",
                }}
              />
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "0.35rem",
                    lineHeight: 1.2,
                  }}
                >
                  {col.name}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.75)", fontStyle: "italic" }}>
                  {col.tagline}
                </p>
              </div>
            </div>

            <Link
              href={`/products?category=${col.category}`}
              aria-label={`View ${col.name} collection`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#E9B670",
                textDecoration: "none",
                transition: "gap 0.25s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = "0.75rem"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = "0.5rem"; }}
            >
              View Collection <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
