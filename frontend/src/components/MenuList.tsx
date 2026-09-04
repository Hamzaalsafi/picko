import type { MenuItem } from "@/src/lib/types";
import AddToCartButton from "@/src/components/AddToCartButton";

export default function MenuList({ items }: { items: MenuItem[] }) {
  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-picko-border bg-picko-surface p-6 text-center text-sm text-picko-muted">
        No menu items yet.
      </p>
    );
  }

  const byCategory = items.reduce<Record<string, MenuItem[]>>((acc, item) => {
    (acc[item.category] ??= []).push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {Object.entries(byCategory).map(([category, categoryItems]) => (
        <section key={category}>
          <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-picko-brown">
            {category}
          </h3>
          <ul className="divide-y divide-picko-border overflow-hidden rounded-2xl border border-picko-border bg-picko-surface shadow-card">
            {categoryItems.map((item) => (
              <li
                key={item.id}
                className="flex items-start justify-between gap-4 p-4"
              >
                <div>
                  <p className="font-medium text-picko-text">
                    {item.name}
                    {!item.isAvailable && (
                      <span className="ml-2 rounded-full bg-picko-cream px-2 py-0.5 text-xs font-semibold text-picko-brown">
                        Unavailable
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-picko-muted">{item.description}</p>
                </div>
                <p className="shrink-0 font-semibold text-picko-text">
                  {item.price.toFixed(2)}{" "}
                  <span className="text-xs font-normal text-picko-muted">
                    {item.currency}
                  </span>
                </p>
                <AddToCartButton item={item} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
