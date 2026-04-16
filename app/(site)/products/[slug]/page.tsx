import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import WhatsAppQuoteButton from "@/components/cart/WhatsAppQuoteButton";
import ProductGrid from "@/components/products/ProductGrid";
import { MOCK_PRODUCTS } from "@/components/products/ProductGrid";
import ProductDetailClient from "./ProductDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((p) => {
    const s = typeof p.slug === "string" ? p.slug : p.slug?.current;
    return s === slug;
  });
  if (!product) return { title: "Product Not Found | Saisrini Jewellers" };
  return {
    title: `${product.name} | Saisrini Jewellers Hyderabad`,
    description: `Buy ${product.name} — ${product.purity ?? "22KT"} BIS hallmarked gold at Saisrini Jewellers, Hyderabad.`,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((p) => {
    const s = typeof p.slug === "string" ? p.slug : p.slug?.current;
    return s === slug;
  });

  if (!product) notFound();

  const related = MOCK_PRODUCTS.filter((p) => {
    const s = typeof p.slug === "string" ? p.slug : p.slug?.current;
    return s !== slug && p.category?.slug?.current === product.category?.slug?.current;
  }).slice(0, 3);

  return (
    <div style={{ paddingTop: "80px" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <ProductDetailClient product={product} />

        {/* Related Products */}
        {related.length > 0 && (
          <div style={{ marginTop: "5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#E9B670", marginBottom: "0.5rem" }}>✦ You May Also Like ✦</p>
              <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "2rem", color: "#332017" }}>Related Pieces</h2>
            </div>
            <ProductGrid products={related} />
          </div>
        )}
      </div>
    </div>
  );
}
