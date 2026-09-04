import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useSyncExternalStore } from "react";
import type { MenuItem } from "@/src/lib/types";

export interface CartLine {
  item: MenuItem;
  quantity: number;
}

interface CartState {
  lines: CartLine[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      addItem: (item) =>
        set((s) => {
          const existing = s.lines.find((l) => l.item.id === item.id);
          if (existing) {
            return {
              lines: s.lines.map((l) =>
                l.item.id === item.id
                  ? { ...l, quantity: l.quantity + 1 }
                  : l,
              ),
            };
          }
          return { lines: [...s.lines, { item, quantity: 1 }] };
        }),
      removeItem: (id) =>
        set((s) => ({ lines: s.lines.filter((l) => l.item.id !== id) })),
      setQuantity: (id, quantity) =>
        set((s) => ({
          lines:
            quantity <= 0
              ? s.lines.filter((l) => l.item.id !== id)
              : s.lines.map((l) =>
                  l.item.id === id ? { ...l, quantity } : l,
                ),
        })),
      clear: () => set({ lines: [] }),
    }),
    { name: "picko-cart" },
  ),
);

export const selectCartCount = (s: CartState) =>
  s.lines.reduce((n, l) => n + l.quantity, 0);

export const selectCartTotal = (s: CartState) =>
  s.lines.reduce((sum, l) => sum + l.item.price * l.quantity, 0);

/**
 * True once the persisted cart has rehydrated on the client.
 * Server snapshot is always false, so client-only cart UI can
 * render a placeholder during SSR without hydration mismatches.
 */
export function useCartHydrated() {
  return useSyncExternalStore(
    (onChange) => useCartStore.persist.onFinishHydration(onChange),
    () => useCartStore.persist.hasHydrated(),
    () => false,
  );
}
