import RestaurantForm from "@/src/components/RestaurantForm";

export default function NewRestaurantPage() {
  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Add a restaurant</h1>
        <p className="mt-1 text-sm text-picko-muted">
          Fill in the details below to list a new restaurant on Picko.
        </p>
      </div>
      <RestaurantForm />
    </div>
  );
}
