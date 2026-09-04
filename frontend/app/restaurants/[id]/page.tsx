import Link from "next/link";
import { notFound } from "next/navigation";
import { ApiError, api } from "@/src/lib/api";
import DeleteRestaurantButton from "@/src/components/DeleteRestaurantButton";
import MenuList from "@/src/components/MenuList";

export const dynamic = "force-dynamic";

export default async function RestaurantPage(
  props: PageProps<"/restaurants/[id]">,
) {
  const { id } = await props.params;

  let data: Awaited<ReturnType<typeof fetchData>> | null = null;
  try {
    data = await fetchData(id);
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      notFound();
    }
    throw err;
  }

  if (!data) {
    notFound();
  }

  const { restaurant, menu } = data;

  return (
    <div className="space-y-6">
      <Link
        href="/"
        className="text-sm font-medium text-picko-blue hover:underline"
      >
        ← Back to restaurants
      </Link>

      <div className="rounded-2xl border border-picko-border bg-picko-surface p-6 shadow-card">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">{restaurant.name}</h1>
            <p className="mt-1 text-sm text-picko-muted">
              {restaurant.cuisine} · {restaurant.street}, {restaurant.city},{" "}
              {restaurant.state} {restaurant.zipCode}
            </p>
            <p className="mt-2 text-sm">{restaurant.description}</p>
            <p className="mt-2 text-sm text-picko-muted">
              {restaurant.phoneNumber}
              {restaurant.rating !== null &&
                ` · ★ ${restaurant.rating.toFixed(1)}`}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                restaurant.isOpen
                  ? "bg-green-100 text-green-800"
                  : "bg-picko-cream text-picko-brown"
              }`}
            >
              {restaurant.isOpen ? "Open" : "Closed"}
            </span>
            <DeleteRestaurantButton id={restaurant.id} />
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-bold">Menu</h2>
        <MenuList items={menu} />
      </div>
    </div>
  );
}

async function fetchData(id: string) {
  const [restaurant, menu] = await Promise.all([
    api.getRestaurant(id),
    api.getMenu(id),
  ]);
  return { restaurant, menu };
}
