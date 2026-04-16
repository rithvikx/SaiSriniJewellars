import type { Metadata } from "next";
import { Star, BadgeCheck, Clock, ThumbsUp } from "lucide-react";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "Customer Reviews | Saisrini Jewellers Hyderabad",
  description: "Read verified customer reviews for Saisrini Jewellers, Hyderabad. 4.9★ rating with 500+ happy customers sharing their jewellery experiences.",
};

export default function ReviewsPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #332017 0%, #5a3a1a 100%)", padding: "5rem 1.5rem", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #E9B670, transparent)" }} />
        <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#E9B670", marginBottom: "0.75rem" }}>✦ 500+ Happy Customers ✦</p>
        <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 600, color: "#fff", marginBottom: "1.5rem" }}>Customer Reviews</h1>

        {/* Star summary */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "1rem", background: "rgba(255,255,255,0.07)", padding: "1rem 2rem", borderRadius: "2px", border: "1px solid rgba(233,182,112,0.2)" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "3rem", fontWeight: 700, color: "#E9B670", lineHeight: 1 }}>4.9</p>
            <div style={{ display: "flex", gap: "3px", justifyContent: "center", marginTop: "4px" }}>
              {[1,2,3,4,5].map((s) => <Star key={s} size={14} color="#E9B670" fill="#E9B670" />)}
            </div>
          </div>
          <div style={{ width: "1px", height: "50px", background: "rgba(255,255,255,0.15)" }} />
          <div style={{ textAlign: "left" }}>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1.1rem", fontWeight: 600, color: "#fff" }}>500+ Reviews</p>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.8rem", color: "rgba(255,255,255,0.55)" }}>Google & In-store verified</p>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #E9B670, transparent)" }} />
      </div>

      {/* Trust Badges */}
      <section style={{ background: "#FAFAF9", borderBottom: "1px solid #E8E2D8" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "2rem 1.5rem", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          {[
            { icon: BadgeCheck, label: "Google Verified Reviews" },
            { icon: Star, label: "4.9★ Average Rating" },
            { icon: ThumbsUp, label: "500+ Happy Customers" },
            { icon: Clock, label: "Trusted Since Founding" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.25rem", border: "1px solid #E8E2D8", borderRadius: "2px", background: "#fff" }}>
              <Icon size={16} color="#E9B670" />
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.8rem", fontWeight: 600, color: "#332017" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Carousel */}
      <Testimonials />

      {/* Leave a Review CTA */}
      <section style={{ background: "#332017", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "2rem", color: "#fff", marginBottom: "1rem" }}>Share Your Experience</h2>
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", marginBottom: "1.75rem", lineHeight: 1.7 }}>
            Visited our showroom or purchased online? We&apos;d love to hear from you.
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "linear-gradient(135deg, #E9B670, #C8973D)", color: "#fff", fontFamily: "var(--font-dm-sans)", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}
          >
            <Star size={16} />
            Write a Google Review
          </a>
        </div>
      </section>
    </div>
  );
}
