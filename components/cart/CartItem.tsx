"use client";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { CartItem as CartItemType, useCartStore } from "@/lib/cart-store";

export default function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem, updateNote } = useCartStore();

  return (
    <div style={{
      display: "flex",
      gap: "1rem",
      padding: "1rem",
      border: "1px solid #E8E2D8",
      borderRadius: "2px",
      background: "#fff",
      position: "relative",
    }}>
      {/* Image */}
      <div style={{ width: "72px", height: "72px", flexShrink: 0, borderRadius: "2px", overflow: "hidden", position: "relative" }}>
        <Image src={item.image} alt={item.name} fill style={{ objectFit: "cover" }} sizes="72px" />
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#332017",
          marginBottom: "0.25rem",
          lineHeight: 1.3,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}>
          {item.name}
        </p>
        {item.category && (
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem", color: "#E9B670", marginBottom: "0.5rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            {item.category}
          </p>
        )}

        {/* Quantity */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            style={{ width: "26px", height: "26px", border: "1px solid #E8E2D8", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#332017", borderRadius: "2px" }}
          >
            <Minus size={12} />
          </button>
          <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.875rem", fontWeight: 600, color: "#332017", minWidth: "20px", textAlign: "center" }}>
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            style={{ width: "26px", height: "26px", border: "1px solid #E8E2D8", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#332017", borderRadius: "2px" }}
          >
            <Plus size={12} />
          </button>
        </div>

        {/* Note */}
        <input
          type="text"
          placeholder="Add note (size, occasion...)"
          value={item.note || ""}
          onChange={(e) => updateNote(item.id, e.target.value)}
          style={{
            width: "100%",
            padding: "0.4rem 0.6rem",
            border: "1px solid #E8E2D8",
            background: "#FAFAF9",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.75rem",
            color: "#332017",
            outline: "none",
            borderRadius: "2px",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Remove */}
      <button
        onClick={() => removeItem(item.id)}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(51,32,23,0.35)",
          padding: "2px",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#cc0000")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(51,32,23,0.35)")}
      >
        <X size={14} />
      </button>
    </div>
  );
}
