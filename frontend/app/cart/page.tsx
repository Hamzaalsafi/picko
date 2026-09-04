"use client";

import Link from "next/link";
import { selectCartTotal, useCartHydrated, useCartStore } from "@/src/stores/cart";

export default function CartPage() {
  const lines = useCartStore((s) => s.lines);
  const total = useCartStore(selectCartTotal);
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const clear = useCartStore((s) => s.clear);
  const hydrated = useCartHydrated();

  if (!hydrated) {
    return (
      <div className="h-48 animate-pulse rounded-2xl bg-picko-border" aria-label="Loading cart" />
    );
  }

  if (lines.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-picko-border bg-picko-surface p-10 text-center">
        <h1 className="text-xl font-bold">Your cart is empty</h1>
        <p className="mt-1 text-sm text-picko-muted">
          Browse restaurants and add something tasty.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-full bg-picko-primary px-5 py-2 text-sm font-semibold text-white shadow-button hover:opacity-90"
        >
          Find food
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your cart</h1>
        <button
          onClick={clear}
          className="text-sm font-medium text-picko-muted hover:text-picko-text"
        >
          Clear all
        </button>
      </div>

      <ul className="divide-y divide-picko-border overflow-hidden rounded-2xl border border-picko-border bg-picko-surface shadow-card">
        {lines.map(({ item, quantity }) => (
          <li
            key={item.id}
            className="flex items-center justify-between gap-4 p-4"
          >
            <div>
              <p className="font-medium text-picko-text">{item.name}</p>
              <p className="text-sm text-picko-muted">
                {item.price.toFixed(2)} {item.currency} each
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                onClick={() => setQuantity(item.id, quantity - 1)}
                aria-label={`Decrease ${item.name}`}
                className="h-8 w-8 rounded-full border border-picko-border text-picko-text hover:bg-picko-bg"
              >
                −
              </button>
              <span className="w-6 text-center text-sm font-semibold">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(item.id, quantity + 1)}
                aria-label={`Increase ${item.name}`}
                className="h-8 w-8 rounded-full border border-picko-border text-picko-text hover:bg-picko-bg"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.id)}
                aria-label={`Remove ${item.name}`}
                className="ml-2 text-sm font-medium text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between rounded-2xl border border-picko-border bg-picko-surface p-4 shadow-card">
        <p className="font-semibold">Total</p>
        <p className="text-lg font-bold">{total.toFixed(2)}</p>
      </div>

      <button
        onClick={() => window.alert("Checkout is not part of this template yet.")}
        className="w-full rounded-full bg-picko-primary py-2.5 text-sm font-semibold text-white shadow-button hover:opacity-90"
      >
        Checkout
      </button>
    </div>
  );
}
