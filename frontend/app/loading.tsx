export default function Loading() {
  return (
    <div className="space-y-4" aria-busy="true" aria-label="Loading">
      <div className="h-8 w-64 animate-pulse rounded-lg bg-picko-border" />
      <div className="h-11 w-full animate-pulse rounded-full bg-picko-border" />
      <div className="grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-36 animate-pulse rounded-2xl bg-picko-border"
          />
        ))}
      </div>
    </div>
  );
}
