"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ApiError, api } from "@/src/lib/api";

const CUISINES = [
  "American",
  "Italian",
  "Mexican",
  "Chinese",
  "Japanese",
  "Thai",
  "Indian",
  "Mediterranean",
  "French",
  "Korean",
  "Other",
] as const;

// Mirrors Picko.Application CreateRestaurantCommandValidator.
const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  description: z.string().trim().max(1000),
  cuisine: z.enum(CUISINES, "Pick a valid cuisine"),
  street: z.string().trim().min(1, "Street is required").max(200),
  city: z.string().trim().min(1, "City is required").max(100),
  state: z.string().trim().max(100),
  zipCode: z.string().trim().max(20),
  country: z.string().trim().min(1, "Country is required").max(100),
  phoneNumber: z.string().trim().min(1, "Phone is required").max(30),
  imageUrl: z.string().trim().max(500),
});

type FormValues = z.infer<typeof schema>;

const DEFAULT_VALUES: FormValues = {
  name: "",
  description: "",
  cuisine: "Other",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
  phoneNumber: "",
  imageUrl: "",
};

const inputClass =
  "w-full rounded-xl border border-picko-border bg-picko-surface px-3 py-2 text-sm text-picko-text outline-none placeholder:text-picko-muted focus:border-picko-primary";

const FIELDS: {
  name: keyof FormValues;
  label: string;
  placeholder?: string;
}[] = [
  { name: "name", label: "Name", placeholder: "Pizza Palace" },
  {
    name: "description",
    label: "Description",
    placeholder: "Authentic Neapolitan pizza",
  },
  { name: "street", label: "Street", placeholder: "1 Main Street" },
  { name: "city", label: "City", placeholder: "Springfield" },
  { name: "state", label: "State", placeholder: "IL" },
  { name: "zipCode", label: "ZIP code", placeholder: "62701" },
  { name: "country", label: "Country", placeholder: "USA" },
  { name: "phoneNumber", label: "Phone", placeholder: "555-1234" },
  {
    name: "imageUrl",
    label: "Image URL",
    placeholder: "/images/pizza-palace.png",
  },
];

export default function RestaurantForm() {
  const router = useRouter();
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_VALUES,
  });

  async function onSubmit(values: FormValues) {
    setFormError(null);
    try {
      const id = await api.createRestaurant(values);
      router.push(`/restaurants/${id}`);
      router.refresh();
    } catch (err) {
      if (err instanceof ApiError && err.problem?.errors) {
        // Map backend PascalCase field errors onto form fields.
        for (const [key, messages] of Object.entries(err.problem.errors)) {
          const field = FIELDS.find(
            (f) => f.name.toLowerCase() === key.toLowerCase(),
          )?.name;
          if (field && messages.length > 0) {
            setError(field, { type: "server", message: messages[0] });
          } else {
            setFormError(messages.join(" "));
          }
        }
      } else {
        setFormError(
          err instanceof Error ? err.message : "Something went wrong.",
        );
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-4 rounded-2xl border border-picko-border bg-picko-surface p-6 shadow-card"
    >
      {FIELDS.map((f) => (
        <div key={f.name}>
          <label
            htmlFor={f.name}
            className="mb-1 block text-sm font-medium text-picko-text"
          >
            {f.label}
          </label>
          <input
            id={f.name}
            placeholder={f.placeholder}
            className={inputClass}
            {...register(f.name)}
          />
          {errors[f.name] && (
            <p className="mt-1 text-xs text-red-600">
              {errors[f.name]?.message}
            </p>
          )}
        </div>
      ))}

      <div>
        <label
          htmlFor="cuisine"
          className="mb-1 block text-sm font-medium text-picko-text"
        >
          Cuisine
        </label>
        <select id="cuisine" className={inputClass} {...register("cuisine")}>
          {CUISINES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.cuisine && (
          <p className="mt-1 text-xs text-red-600">{errors.cuisine.message}</p>
        )}
      </div>

      {formError && <p className="text-sm text-red-600">{formError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-picko-primary py-2.5 text-sm font-semibold text-white shadow-button hover:opacity-90 disabled:opacity-60"
      >
        {isSubmitting ? "Saving…" : "Create restaurant"}
      </button>
    </form>
  );
}
