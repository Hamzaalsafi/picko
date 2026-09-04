"use client";

import { useState } from "react";
import type { MenuItem } from "@/src/lib/types";
import { useCartStore } from "@/src/stores/cart";

export default function AddToCartButton({ item }: { item: MenuItem }) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  function onClick() {
    addItem(item);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  }

  return (
    <button
      onClick={onClick}
      disabled={!item.isAvailable}
      className="shrink-0 rounded-full bg-picko-primary px-4 py-1.5 text-sm font-semibold text-white shadow-button hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
    >
      {added ? "Added ✓" : "Add"}
    </button>
  );
}
