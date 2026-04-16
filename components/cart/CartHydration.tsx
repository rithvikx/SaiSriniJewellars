"use client";

import { useEffect } from "react";
import { useCartStore } from "@/lib/cart-store";

export default function CartHydration() {
  const _hydrate = useCartStore((s) => s._hydrate);
  useEffect(() => {
    _hydrate();
  }, [_hydrate]);
  return null;
}
