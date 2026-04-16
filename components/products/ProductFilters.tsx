"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";

const categories = [
  "Bridal Jewellery", "Gold Chains", "Necklaces",
  "Earrings", "Bangles", "Rings", "Temple Jewellery", "Daily Wear",
];
const occasions = ["Bridal", "Daily Wear", "Festivals", "Gifting"];
const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "az", label: "Name A–Z" },
  { value: "weight", label: "By Weight" },
];

interface ProductFiltersProps {
  onCategoryChange?: (cats: string[]) => void;
  onOccasionChange?: (occ: string[]) => void;
  onSortChange?: (sort: string) => void;
  onNewOnly?: (v: boolean) => void;
}

function FilterSidebar({ onCategoryChange, onOccasionChange, onSortChange, onNewOnly }: ProductFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [sort, setSort] = useState("newest");
  const [newOnly, setNewOnly] = useState(false);

  const toggleCategory = (cat: string) => {
    const updated = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];
    setSelectedCategories(updated);
    onCategoryChange?.(updated);
  };

  const toggleOccasion = (occ: string) => {
    const updated = selectedOccasions.includes(occ)
      ? selectedOccasions.filter((o) => o !== occ)
      : [...selectedOccasions, occ];
    setSelectedOccasions(updated);
    onOccasionChange?.(updated);
  };

  const sectionTitle = (title: string) => (
    <h3 style={{
      fontFamily: "var(--font-cormorant), serif",
      fontSize: "1rem",
      fontWeight: 600,
      color: "#332017",
      marginBottom: "1rem",
      paddingBottom: "0.5rem",
      borderBottom: "1px solid #E8E2D8",
      letterSpacing: "0.02em",
    }}>{title}</h3>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Sort */}
      <div>
        {sectionTitle("Sort By")}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {sortOptions.map((opt) => (
            <label key={opt.value} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
              <input
                type="radio"
                name="sort"
                value={opt.value}
                checked={sort === opt.value}
                onChange={() => { setSort(opt.value); onSortChange?.(opt.value); }}
                style={{ accentColor: "#E9B670" }}
              />
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.875rem", color: "#332017" }}>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        {sectionTitle("Category")}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {categories.map((cat) => (
            <label key={cat} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                style={{ accentColor: "#E9B670", width: "15px", height: "15px" }}
              />
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.875rem", color: "#332017" }}>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Occasions */}
      <div>
        {sectionTitle("Occasion")}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {occasions.map((occ) => (
            <label key={occ} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={selectedOccasions.includes(occ)}
                onChange={() => toggleOccasion(occ)}
                style={{ accentColor: "#E9B670", width: "15px", height: "15px" }}
              />
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.875rem", color: "#332017" }}>{occ}</span>
            </label>
          ))}
        </div>
      </div>

      {/* New Only */}
      <div>
        {sectionTitle("Availability")}
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={newOnly}
            onChange={() => { setNewOnly(!newOnly); onNewOnly?.(!newOnly); }}
            style={{ accentColor: "#E9B670", width: "15px", height: "15px" }}
          />
          <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.875rem", color: "#332017" }}>New Arrivals Only</span>
        </label>
      </div>
    </div>
  );
}

export default function ProductFilters(props: ProductFiltersProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        style={{
          width: "240px",
          flexShrink: 0,
          padding: "1.5rem",
          border: "1px solid #E8E2D8",
          borderRadius: "2px",
          background: "#FAFAF9",
          height: "fit-content",
          position: "sticky",
          top: "100px",
        }}
        className="hidden md:block"
      >
        <h2 style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "#332017",
          marginBottom: "1.5rem",
        }}>
          Filters
        </h2>
        <FilterSidebar {...props} />
      </aside>

      {/* Mobile filter button */}
      <div className="block md:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.25rem",
            border: "1px solid #E9B670",
            background: "transparent",
            color: "#E9B670",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.85rem",
            fontWeight: 600,
            cursor: "pointer",
            borderRadius: "2px",
            letterSpacing: "0.06em",
          }}
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
                zIndex: 1000,
              }}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              style={{
                position: "fixed", top: 0, left: 0, bottom: 0,
                width: "300px", background: "#fff", zIndex: 1001,
                padding: "2rem 1.5rem", overflowY: "auto",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.4rem", color: "#332017" }}>Filters</h2>
                <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#332017" }}>
                  <X size={22} />
                </button>
              </div>
              <FilterSidebar {...props} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
}
