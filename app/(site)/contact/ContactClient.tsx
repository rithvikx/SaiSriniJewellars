"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Clock, MessageCircle, Send, MapPin } from "lucide-react";

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

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Saisrini Jewellers! 🙏\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    border: "1px solid #E8E2D8",
    background: "#fff",
    fontFamily: "var(--font-dm-sans), sans-serif",
    fontSize: "0.875rem",
    color: "#332017",
    outline: "none",
    borderRadius: "2px",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const contactItems = [
    { icon: MapPin, label: "Address", value: "Saisrini Jewellers, Hyderabad, Telangana, India", href: "https://maps.google.com/?q=Saisrini+Jewellers+Hyderabad" },
    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: `tel:+${WHATSAPP_NUMBER}` },
    { icon: Clock, label: "Hours", value: "Mon–Sat: 10am–8pm · Sun: 11am–6pm", href: null },
  ];

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #332017 0%, #5a3a1a 100%)", padding: "5rem 1.5rem", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #E9B670, transparent)" }} />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#E9B670", marginBottom: "0.75rem" }}>✦ Get In Touch ✦</p>
          <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 600, color: "#fff", lineHeight: 1.2 }}>Contact Us</h1>
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1rem", color: "rgba(255,255,255,0.65)", marginTop: "0.75rem" }}>We respond within 2 hours on WhatsApp</p>
        </motion.div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #E9B670, transparent)" }} />
      </div>

      {/* Main Grid */}
      <section style={{ maxWidth: "1320px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "2rem", color: "#332017", marginBottom: "0.5rem" }}>Send Us a Message</h2>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.9rem", color: "rgba(51,32,23,0.6)", marginBottom: "2rem", lineHeight: 1.7 }}>
              Fill in the form below and we&apos;ll get back to you on WhatsApp within 2 hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ padding: "2.5rem", border: "1px solid rgba(233,182,112,0.3)", borderRadius: "2px", background: "rgba(233,182,112,0.05)", textAlign: "center" }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✦</div>
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.5rem", color: "#E9B670", marginBottom: "0.5rem" }}>Message Sent!</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.875rem", color: "rgba(51,32,23,0.65)" }}>
                  Thank you! We&apos;ve opened WhatsApp for you. We&apos;ll respond shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", message: "" }); }}
                  style={{ marginTop: "1.5rem", padding: "0.6rem 1.5rem", border: "1px solid #E9B670", background: "transparent", color: "#E9B670", fontFamily: "var(--font-dm-sans)", fontSize: "0.8rem", fontWeight: 600, cursor: "pointer", borderRadius: "2px", letterSpacing: "0.06em" }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input
                  type="text" id="contact-name" placeholder="Your Name *" required
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#E9B670")}
                  onBlur={(e) => (e.target.style.borderColor = "#E8E2D8")}
                />
                <input
                  type="tel" id="contact-phone" placeholder="Phone Number *" required
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#E9B670")}
                  onBlur={(e) => (e.target.style.borderColor = "#E8E2D8")}
                />
                <input
                  type="email" id="contact-email" placeholder="Email Address"
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#E9B670")}
                  onBlur={(e) => (e.target.style.borderColor = "#E8E2D8")}
                />
                <textarea
                  id="contact-message" placeholder="Your Message or Enquiry *" required
                  rows={5}
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "#E9B670")}
                  onBlur={(e) => (e.target.style.borderColor = "#E8E2D8")}
                />
                <button
                  type="submit"
                  style={{ padding: "1rem 2rem", background: "linear-gradient(135deg, #E9B670, #C8973D)", color: "#fff", border: "none", cursor: "pointer", fontFamily: "var(--font-dm-sans)", fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", borderRadius: "2px", transition: "all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(233,182,112,0.35)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <Send size={16} />
                  Send Message via WhatsApp
                </button>
              </form>
            )}
          </motion.div>

          {/* Store Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ padding: "2.5rem", border: "1px solid #E8E2D8", borderRadius: "2px", background: "#FAFAF9" }}>
              <div style={{ borderLeft: "3px solid #E9B670", paddingLeft: "1.25rem", marginBottom: "2.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.6rem", fontWeight: 600, color: "#332017", lineHeight: 1.2 }}>
                  Saisrini Jewellers
                </h3>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", color: "#E9B670", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "0.3rem" }}>
                  Hyderabad&apos;s Finest Gold Jewellers
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "rgba(233,182,112,0.1)", border: "1px solid rgba(233,182,112,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={17} color="#E9B670" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#E9B670", marginBottom: "0.3rem" }}>{label}</p>
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.9rem", color: "#332017", textDecoration: "none", lineHeight: 1.55 }}>{value}</a>
                      ) : (
                        <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.9rem", color: "#332017", lineHeight: 1.55 }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ height: "1px", background: "#E8E2D8", margin: "2rem 0" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.875rem", background: "linear-gradient(135deg, #25D366, #128C7E)", color: "#fff", borderRadius: "2px", textDecoration: "none", fontFamily: "var(--font-dm-sans)", fontWeight: 600, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.06em" }}
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/saisrinijewellers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.875rem", background: "transparent", color: "#332017", border: "1px solid #E8E2D8", borderRadius: "2px", textDecoration: "none", fontFamily: "var(--font-dm-sans)", fontWeight: 600, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.06em", transition: "all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#E9B670"; e.currentTarget.style.color = "#E9B670"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E8E2D8"; e.currentTarget.style.color = "#332017"; }}
                >
                  <InstagramIcon size={16} />
                  Follow on Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <div style={{ borderTop: "1px solid #E8E2D8", height: "450px" }}>
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
    </div>
  );
}
