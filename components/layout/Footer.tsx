"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, Phone, Clock, Heart } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

const collections = [
  { href: "/products?category=bridal-jewellery", label: "Bridal Jewellery" },
  { href: "/products?category=gold-chains", label: "Gold Chains" },
  { href: "/products?category=necklaces", label: "Necklaces" },
  { href: "/products?category=earrings", label: "Earrings" },
  { href: "/products?category=bangles", label: "Bangles & Kadas" },
  { href: "/products?category=rings", label: "Rings" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #1a0e08 0%, #332017 100%)",
        color: "rgba(255,255,255,0.75)",
        fontFamily: "var(--font-dm-sans), sans-serif",
      }}
    >
      {/* Main Footer Grid */}
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "5rem 1.5rem 3rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
        }}
      >
        {/* Brand Column */}
        <div style={{ gridColumn: "span 1" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <Link href="/" aria-label="Sai Srini Jewellers — Home">
              <Image
                src="/ssl-logo.png"
                alt="Sai Srini Jewellers"
                width={180}
                height={68}
                style={{
                  objectFit: "contain",
                  objectPosition: "left center",
                  maxWidth: "180px",
                  height: "auto",
                }}
              />
            </Link>
          </div>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.8, maxWidth: "240px", marginBottom: "1.5rem" }}>
            Crafting timeless gold jewellery for weddings, celebrations &amp; everyday elegance since our founding in Hyderabad.
          </p>

          {/* BIS Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid rgba(233,182,112,0.3)",
              borderRadius: "2px",
              fontSize: "0.75rem",
              color: "#E9B670",
              letterSpacing: "0.08em",
            }}
          >
            <span style={{ fontSize: "1rem" }}>✦</span>
            BIS Hallmarked Gold
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#E9B670",
              marginBottom: "1.25rem",
              letterSpacing: "0.04em",
            }}
          >
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E9B670")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Collections */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#E9B670",
              marginBottom: "1.25rem",
              letterSpacing: "0.04em",
            }}
          >
            Collections
          </h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {collections.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E9B670")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#E9B670",
              marginBottom: "1.25rem",
              letterSpacing: "0.04em",
            }}
          >
            Contact Us
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <MapPin size={15} color="#E9B670" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                Saisrini Jewellers, Hyderabad, Telangana, India
              </span>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <Phone size={15} color="#E9B670" style={{ flexShrink: 0 }} />
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
              >
                +91 98765 43210
              </a>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <Clock size={15} color="#E9B670" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: "0.875rem" }}>Mon–Sat: 10am–8pm · Sun: 11am–6pm</span>
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
              <a
                href="https://www.instagram.com/saisrinijewellers/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "38px", height: "38px", borderRadius: "50%",
                  border: "1px solid rgba(233,182,112,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#E9B670", transition: "all 0.3s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "#E9B670"; el.style.color = "#fff"; }}
                onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "#E9B670"; }}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "38px", height: "38px", borderRadius: "50%",
                  border: "1px solid rgba(233,182,112,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#E9B670", transition: "all 0.3s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "#25D366"; el.style.borderColor = "#25D366"; el.style.color = "#fff"; }}
                onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "transparent"; el.style.borderColor = "rgba(233,182,112,0.3)"; el.style.color = "#E9B670"; }}
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          borderTop: "1px solid rgba(233,182,112,0.15)",
        }}
      />

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "1.5rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          fontSize: "0.8rem",
          color: "rgba(255,255,255,0.45)",
        }}
      >
        <span>© {new Date().getFullYear()} Saisrini Jewellers · Hyderabad · All Rights Reserved</span>
        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          Made with <Heart size={12} color="#E9B670" fill="#E9B670" /> in Hyderabad
        </span>
      </div>
    </footer>
  );
}
