"use client";

import ProductCard, { Product } from "./ProductCard";

// Fallback mock products for when Sanity isn't connected
export const MOCK_PRODUCTS: Product[] = [
  { _id: "1", name: "Royal Bridal Haar Set", slug: { current: "royal-bridal-haar-set" }, images: ["https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80"], weight: "65g", purity: "22KT", isNew: true, category: { name: "Bridal Jewellery", slug: { current: "bridal-jewellery" } } },
  { _id: "2", name: "Temple Lakshmi Necklace", slug: { current: "temple-lakshmi-necklace" }, images: ["https://images.unsplash.com/photo-1610317718991-aaa5f6f7b9cc?w=600&q=80"], weight: "42g", purity: "22KT", price: 185000, category: { name: "Temple Jewellery", slug: { current: "temple-jewellery" } } },
  { _id: "3", name: "Gold Singapore Chain", slug: { current: "gold-singapore-chain" }, images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80"], weight: "12g", purity: "22KT", price: 64000, category: { name: "Gold Chains", slug: { current: "gold-chains" } } },
  { _id: "4", name: "Diamond Cut Bangles (Pair)", slug: { current: "diamond-cut-bangles" }, images: ["https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80"], weight: "28g", purity: "22KT", isNew: true, category: { name: "Bangles", slug: { current: "bangles" } } },
  { _id: "5", name: "Kundan Drop Earrings", slug: { current: "kundan-drop-earrings" }, images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80"], weight: "8g", purity: "22KT", price: 38000, category: { name: "Earrings", slug: { current: "earrings" } } },
  { _id: "6", name: "Solitaire Gold Ring", slug: { current: "solitaire-gold-ring" }, images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80"], weight: "5g", purity: "18KT", price: 22000, category: { name: "Rings", slug: { current: "rings" } } },
  { _id: "7", name: "Antique Haaram Necklace", slug: { current: "antique-haaram-necklace" }, images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80"], weight: "55g", purity: "22KT", category: { name: "Necklaces", slug: { current: "necklaces" } } },
  { _id: "8", name: "Daily Wear Gold Chain", slug: { current: "daily-wear-chain" }, images: ["https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80"], weight: "7g", purity: "22KT", price: 36000, isNew: true, category: { name: "Daily Wear", slug: { current: "daily-wear" } } },
  { _id: "9", name: "Bridal Vaddanam Waist Belt", slug: { current: "bridal-vaddanam" }, images: ["https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80"], weight: "120g", purity: "22KT", category: { name: "Bridal Jewellery", slug: { current: "bridal-jewellery" } } },
];

interface ProductGridProps {
  products?: Product[];
}

export default function ProductGrid({ products = MOCK_PRODUCTS }: ProductGridProps) {
  const displayProducts = products.length > 0 ? products : MOCK_PRODUCTS;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
