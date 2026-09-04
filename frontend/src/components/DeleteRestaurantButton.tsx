"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/src/lib/api";

export default function DeleteRestaurantButton({ id }: { id: string }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  async function onDelete() {
    if (!window.confirm("Delete this restaurant?")) return;
    setDeleting(true);
    try {
      await api.deleteRestaurant(id);
      router.push("/");
      router.refresh();
    } catch {
      setDeleting(false);
      window.alert("Could not delete the restaurant. Please try again.");
    }
  }

  return (
    <button
      onClick={onDelete}
      disabled={deleting}
      className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 disabled:opacity-60"
    >
      {deleting ? "Deleting…" : "Delete"}
    </button>
  );
}
