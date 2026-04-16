"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const FALLBACK_REVIEWS = [
  { _id: "1", customerName: "Priya Reddy", rating: 5, reviewText: "Absolutely stunning bridal set! The craftsmanship is beyond compare. Every piece was exactly as I envisioned for my wedding day. The team at Saisrini is so helpful and patient.", date: "2024-11-20" },
  { _id: "2", customerName: "Kavitha Sharma", rating: 5, reviewText: "I got my daughter's wedding jewellery from Saisrini Jewellers. The quality is exceptional and the designs are truly timeless. Will recommend to everyone!", date: "2024-10-15" },
  { _id: "3", customerName: "Ananya Lakshmi", rating: 5, reviewText: "The temple jewellery collection is breathtaking. Got a beautiful necklace set for my festival — received so many compliments. Transparent pricing and BIS hallmark gives me full confidence.", date: "2024-09-08" },
  { _id: "4", customerName: "Meera Venkat", rating: 5, reviewText: "Custom design service is phenomenal. They brought my sketch to life perfectly. The gold chains collection is also amazing for everyday wear.", date: "2024-12-02" },
  { _id: "5", customerName: "Sunita Rao", rating: 5, reviewText: "Best jewellery in Hyderabad, hands down. The showroom ambiance, the service, and most importantly the jewellery quality — everything is top class!", date: "2024-08-19" },
];

type Review = {
  _id: string;
  customerName: string;
  rating: number;
  reviewText: string;
  date: string;
};

interface TestimonialsProps {
  reviews?: Review[];
}

export default function Testimonials({ reviews = FALLBACK_REVIEWS }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);
  const allReviews = reviews.length > 0 ? reviews : FALLBACK_REVIEWS;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % allReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [allReviews.length]);

  const prev = () => setCurrent((c) => (c - 1 + allReviews.length) % allReviews.length);
  const next = () => setCurrent((c) => (c + 1) % allReviews.length);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-IN", { month: "long", year: "numeric" });

  return (
    <section
      aria-label="Customer testimonials"
      style={{ padding: "6rem 1.5rem", background: "#FBF7F0" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#E9B670", marginBottom: "0.75rem" }}>
            ✦ Customer Stories ✦
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#332017", lineHeight: 1.2 }}>
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Carousel container — extra horizontal padding so arrows don't clip */}
        <div style={{ position: "relative", padding: "0 3rem" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              role="group"
              aria-roledescription="slide"
              aria-label={`Review ${current + 1} of ${allReviews.length} — ${allReviews[current].customerName}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{
                background: "#fff",
                border: "1px solid #E8E2D8",
                borderRadius: "2px",
                padding: "clamp(1.5rem, 5vw, 3rem)",
                textAlign: "center",
                boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative quote mark */}
              <div
                aria-hidden="true"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "6rem",
                  lineHeight: 0.8,
                  color: "rgba(233,182,112,0.15)",
                  position: "absolute",
                  top: "1.5rem",
                  left: "2rem",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div
                role="img"
                aria-label={`${allReviews[current].rating} out of 5 stars`}
                style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "1.5rem" }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    color="#E9B670"
                    fill={i < allReviews[current].rating ? "#E9B670" : "none"}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                  fontStyle: "italic",
                  color: "#332017",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                  maxWidth: "680px",
                  margin: "0 auto 2rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {allReviews[current].reviewText}
              </blockquote>

              {/* Customer info */}
              <footer>
                <div
                  aria-hidden="true"
                  style={{ width: "40px", height: "2px", background: "#E9B670", margin: "0 auto 1rem" }}
                />
                <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600, color: "#332017", fontSize: "0.95rem" }}>
                  {allReviews[current].customerName}
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.8rem", color: "rgba(51,32,23,0.5)", marginTop: "0.25rem" }}>
                  <time dateTime={allReviews[current].date}>{formatDate(allReviews[current].date)}</time>
                </p>
              </footer>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next — positioned within the padding lanes, never clip */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "#fff",
              border: "1px solid #E8E2D8",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#332017",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              transition: "all 0.25s ease",
              zIndex: 10,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#E9B670"; e.currentTarget.style.color = "#E9B670"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E8E2D8"; e.currentTarget.style.color = "#332017"; }}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "#fff",
              border: "1px solid #E8E2D8",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#332017",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              transition: "all 0.25s ease",
              zIndex: 10,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#E9B670"; e.currentTarget.style.color = "#E9B670"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E8E2D8"; e.currentTarget.style.color = "#332017"; }}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Dot indicators */}
        <div
          role="tablist"
          aria-label="Testimonial navigation"
          style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "2rem" }}
        >
          {allReviews.map((review, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to review by ${review.customerName}`}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === current ? "#E9B670" : "#E8E2D8",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
