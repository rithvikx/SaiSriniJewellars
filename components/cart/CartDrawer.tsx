"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, MessageCircle, Trash2 } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { buildCartWhatsAppUrl } from "@/lib/whatsapp";
import CartItem from "./CartItem";

export default function CartDrawer() {
  const { items, isOpen, closeCart, clearCart } = useCartStore();
  const [name, setName] = useState("");
  const [requirement, setRequirement] = useState("");

  const handleSendQuote = () => {
    if (!name.trim()) { alert("Please enter your name."); return; }
    if (items.length === 0) { alert("Your cart is empty."); return; }
    const url = buildCartWhatsAppUrl(items, name, requirement);
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1100, backdropFilter: "blur(4px)" }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(440px, 100vw)",
              background: "#fff",
              zIndex: 1101,
              display: "flex",
              flexDirection: "column",
              boxShadow: "-20px 0 60px rgba(0,0,0,0.15)",
            }}
          >
            {/* Header */}
            <div style={{
              padding: "1.5rem",
              borderBottom: "1px solid #E8E2D8",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#FAFAF9",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <ShoppingBag size={20} color="#E9B670" />
                <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.3rem", fontWeight: 600, color: "#332017" }}>
                  Quote Cart
                </span>
                {items.length > 0 && (
                  <span style={{
                    background: "#E9B670",
                    color: "#fff",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: "10px",
                    fontFamily: "var(--font-dm-sans)",
                  }}>
                    {items.reduce((t, i) => t + i.quantity, 0)}
                  </span>
                )}
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(51,32,23,0.4)", padding: "4px" }}
                    title="Clear cart"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
                <button onClick={closeCart} style={{ background: "none", border: "none", cursor: "pointer", color: "#332017", padding: "4px" }}>
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div style={{ flex: 1, overflowY: "auto", padding: "1.5rem" }}>
              {items.length === 0 ? (
                <div style={{ textAlign: "center", padding: "4rem 1rem", color: "rgba(51,32,23,0.45)" }}>
                  <ShoppingBag size={48} strokeWidth={1} style={{ marginBottom: "1rem", opacity: 0.4 }} />
                  <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.3rem", marginBottom: "0.5rem" }}>Your cart is empty</p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.875rem" }}>
                    Add jewellery pieces to request a quote on WhatsApp.
                  </p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {items.map((item) => <CartItem key={item.id} item={item} />)}
                </div>
              )}
            </div>

            {/* Footer Form */}
            {items.length > 0 && (
              <div style={{
                padding: "1.5rem",
                borderTop: "1px solid #E8E2D8",
                background: "#FAFAF9",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}>
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    border: "1px solid #E8E2D8",
                    background: "#fff",
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.875rem",
                    color: "#332017",
                    outline: "none",
                    borderRadius: "2px",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#E9B670")}
                  onBlur={(e) => (e.target.style.borderColor = "#E8E2D8")}
                />
                <textarea
                  placeholder="Special requirements or questions..."
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    border: "1px solid #E8E2D8",
                    background: "#fff",
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.875rem",
                    color: "#332017",
                    outline: "none",
                    resize: "none",
                    borderRadius: "2px",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#E9B670")}
                  onBlur={(e) => (e.target.style.borderColor = "#E8E2D8")}
                />
                <button
                  onClick={handleSendQuote}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    borderRadius: "2px",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <MessageCircle size={18} />
                  Send Quote on WhatsApp
                </button>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", color: "rgba(51,32,23,0.45)", textAlign: "center" }}>
                  We&apos;ll respond with pricing & availability within 2 hours.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
