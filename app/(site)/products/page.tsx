import type { Metadata } from "next";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilters from "@/components/products/ProductFilters";
import { readProducts } from "@/lib/products-db";

export const metadata: Metadata = {
  title: "Gold Jewellery Collection | Saisrini Jewellers Hyderabad",
  description: "Browse our complete collection of BIS hallmarked gold jewellery — bridal sets, chains, necklaces, earrings, bangles and rings.",
  keywords: ["gold jewellery Hyderabad", "bridal jewellery", "gold necklace", "gold bangles"],
};

export default async function ProductsPage() {
  const products = readProducts();
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Page Hero */}
      <div style={{
        background: "linear-gradient(135deg, #332017 0%, #5a3a1a 100%)",
        padding: "4rem 1.5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #E9B670, transparent)" }} />
        <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#E9B670", marginBottom: "0.75rem" }}>
          ✦ Our Collection ✦
        </p>
        <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 600, color: "#fff", lineHeight: 1.2 }}>
          All Jewellery
        </h1>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #E9B670, transparent)" }} />
      </div>

      {/* Products Layout */}
      <div style={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
        display: "flex",
        gap: "2.5rem",
        alignItems: "flex-start",
      }}>
        {/* Filters — handles desktop sidebar + mobile drawer internally */}
        <ProductFilters />

        {/* Grid */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginBottom: "2rem" }}>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.875rem", color: "rgba(51,32,23,0.55)" }}>
              Showing all items
            </p>
          </div>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
