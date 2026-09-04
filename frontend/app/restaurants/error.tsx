"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function RestaurantsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
      <h2 className="text-lg font-bold text-red-900">
        Couldn&apos;t load restaurants
      </h2>
      <p className="mt-1 text-sm text-red-700">
        The menu service may be unavailable. Check that the Picko API is
        running and try again.
      </p>
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-full bg-picko-primary px-5 py-2 text-sm font-semibold text-white shadow-button hover:opacity-90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-picko-border bg-picko-surface px-5 py-2 text-sm font-semibold text-picko-text hover:opacity-90"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
