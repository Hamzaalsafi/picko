"use client";

import { useEffect } from "react";

export default function Error({
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
      <h2 className="text-lg font-bold text-red-900">Something went wrong</h2>
      <p className="mt-1 text-sm text-red-700">
        Please try again. If the problem persists, check that the Picko API is
        running.
      </p>
      <button
        onClick={reset}
        className="mt-4 rounded-full bg-picko-primary px-5 py-2 text-sm font-semibold text-white shadow-button hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
