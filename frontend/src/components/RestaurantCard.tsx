import Link from "next/link";
import type { Restaurant } from "@/src/lib/types";

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  return (
    <Link
      href={`/restaurants/${restaurant.id}`}
      className="block rounded-2xl border border-picko-border bg-picko-surface p-5 shadow-card transition hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-picko-text">
            {restaurant.name}
          </h2>
          <p className="text-sm text-picko-muted">
            {restaurant.cuisine} · {restaurant.city}
          </p>
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
            restaurant.isOpen
              ? "bg-green-100 text-green-800"
              : "bg-picko-cream text-picko-brown"
          }`}
        >
          {restaurant.isOpen ? "Open" : "Closed"}
        </span>
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-picko-muted">
        {restaurant.description}
      </p>
      {restaurant.rating !== null && (
        <p className="mt-2 text-sm font-medium text-picko-text">
          ★ {restaurant.rating.toFixed(1)}
        </p>
      )}
    </Link>
  );
}
