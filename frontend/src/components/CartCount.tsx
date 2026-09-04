"use client";

import { selectCartCount, useCartHydrated, useCartStore } from "@/src/stores/cart";

export default function CartCount() {
  const count = useCartStore(selectCartCount);
  const hydrated = useCartHydrated();

  if (!hydrated || count === 0) return null;

  return (
    <span className="ml-1 rounded-full bg-picko-primary px-2 py-0.5 text-xs font-bold text-white">
      {count}
    </span>
  );
}
