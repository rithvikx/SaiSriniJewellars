"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, MessageCircle } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { getTotalItems, openCart } = useCartStore();
  const totalItems = getTotalItems();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Skip to main content — first focusable element for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: "var(--z-navbar)" as unknown as number,
          transition: "all 0.4s ease",
          background: scrolled ? "#332017" : "rgba(51,32,23,0.72)",
          backdropFilter: "blur(12px)",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.25)" : "none",
        }}
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: scrolled ? "68px" : "80px",
            transition: "height 0.4s ease",
          }}
        >
          {/* Logo + brand name */}
          <Link
            href="/"
            aria-label="Saisrini Jewellers — Home"
            style={{
              textDecoration: "none",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: "0.65rem",
            }}
          >
            <Image
              src="/ssl-logo.png"
              alt=""
              width={160}
              height={60}
              className="nav-logo"
              style={{
                objectFit: "contain",
                height: scrolled ? "40px" : "48px",
                width: "auto",
                transition: "height 0.4s ease",
              }}
              priority
            />
            <div className="flex flex-col" style={{ lineHeight: 1.15 }}>
              <span
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: scrolled ? "1.25rem" : "1.4rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  color: scrolled ? "#E9B670" : "#E9B670",
                  transition: "font-size 0.4s ease",
                  whiteSpace: "nowrap",
                }}
              >
                Sai Srini
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.65)",
                  transition: "color 0.4s ease",
                  whiteSpace: "nowrap",
                }}
              >
                Jewellars
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div
            className="hidden md:flex"
            style={{
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: isActive ? "#E9B670" : "rgba(255,255,255,0.9)",
                    position: "relative",
                    paddingBottom: "4px",
                    transition: "color 0.25s ease",
                    borderRadius: "2px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#E9B670";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.9)";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "1.5px",
                        background: "#E9B670",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(233,182,112,0.2)";
                e.currentTarget.style.color = "#E9B670";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "#fff";
              }}
            >
              <MessageCircle size={18} aria-hidden="true" />
            </a>

            {/* Cart */}
            <button
              onClick={openCart}
              aria-label={totalItems > 0 ? `View cart — ${totalItems} item${totalItems !== 1 ? "s" : ""}` : "View cart"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                position: "relative",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(233,182,112,0.2)";
                e.currentTarget.style.color = "#E9B670";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "#fff";
              }}
            >
              <ShoppingBag size={18} aria-hidden="true" />
              {totalItems > 0 && (
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "2px",
                    right: "2px",
                    width: "18px",
                    height: "18px",
                    background: "#E9B670",
                    color: "#fff",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                  }}
                >
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                borderRadius: "4px",
              }}
              className="md:hidden flex"
            >
              {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
              background: "#332017",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "transparent",
                border: "none",
                color: "#E9B670",
                cursor: "pointer",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <X size={28} aria-hidden="true" />
            </button>

            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <Image
                src="/ssl-logo.png"
                alt="Sai Srini Jewellers"
                width={180}
                height={68}
                style={{ objectFit: "contain" }}
              />
            </div>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "2.2rem",
                    fontWeight: 400,
                    color: pathname === link.href ? "#E9B670" : "rgba(255,255,255,0.85)",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    transition: "color 0.2s",
                    display: "block",
                    padding: "0.25rem 1rem",
                    borderRadius: "2px",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#E9B670"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = pathname === link.href ? "#E9B670" : "rgba(255,255,255,0.85)"; }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <div style={{ marginTop: "1rem" }}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open WhatsApp to chat with us"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  background: "linear-gradient(135deg, #E9B670, #C8973D)",
                  color: "#fff",
                  borderRadius: "2px",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  minHeight: "44px",
                }}
              >
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
