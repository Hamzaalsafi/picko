import { ApiError, api } from "@/src/lib/api";
import type { PagedResult, Restaurant } from "@/src/lib/types";
import RestaurantCard from "@/src/components/RestaurantCard";
import RestaurantSearch from "@/src/components/RestaurantSearch";

export const dynamic = "force-dynamic";

export default async function Home(props: PageProps<"/">) {
  const searchParams = await props.searchParams;
  const raw = searchParams.searchTerm;
  const searchTerm =
    typeof raw === "string" && raw.trim() ? raw.trim() : undefined;

  let result: PagedResult<Restaurant> | null = null;
  let fetchError: string | null = null;
  try {
    result = await api.getRestaurants(searchTerm);
  } catch (err) {
    fetchError =
      err instanceof ApiError
        ? err.message
        : "Could not reach the Picko API. Is the backend running?";
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Find your next meal</h1>
        <p className="mt-1 text-picko-muted">
          Browse restaurants and explore their menus.
        </p>
      </div>
      <RestaurantSearch />
      {fetchError ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-800">
          <p className="font-semibold">Something went wrong</p>
          <p className="mt-1">{fetchError}</p>
        </div>
      ) : result && result.items.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-picko-border bg-picko-surface p-10 text-center text-sm text-picko-muted">
          {searchTerm
            ? `No restaurants found for “${searchTerm}”.`
            : "No restaurants yet. Add the first one!"}
        </p>
      ) : (
        result && (
          <>
            <p className="mb-4 text-sm text-picko-muted">
              {result.totalCount} restaurant
              {result.totalCount === 1 ? "" : "s"}
              {searchTerm ? ` for “${searchTerm}”` : ""}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {result.items.map((r) => (
                <RestaurantCard key={r.id} restaurant={r} />
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
}
