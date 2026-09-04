"use client";

import { useQueryState } from "nuqs";

export default function RestaurantSearch() {
  // URL-synced, throttled search: typing updates ?searchTerm= (debounced),
  // which re-renders the server list. `null` removes the param entirely.
  const [searchTerm, setSearchTerm] = useQueryState("searchTerm", {
    defaultValue: "",
    throttleMs: 300,
  });

  return (
    <div className="flex gap-2">
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value || null)}
        placeholder="Search restaurants…"
        className="w-full rounded-full border border-picko-border bg-picko-surface px-4 py-2 text-sm text-picko-text outline-none placeholder:text-picko-muted focus:border-picko-primary"
      />
      {searchTerm && (
        <button
          type="button"
          onClick={() => setSearchTerm(null)}
          className="shrink-0 rounded-full border border-picko-border bg-picko-surface px-5 py-2 text-sm font-semibold text-picko-muted hover:text-picko-text"
        >
          Clear
        </button>
      )}
    </div>
  );
}
