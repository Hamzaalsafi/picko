import type {
  AddMenuItemInput,
  CreateRestaurantInput,
  MenuItem,
  PagedResult,
  ProblemDetails,
  Restaurant,
  UpdateRestaurantInput,
} from "@/src/lib/types";

/**
 * Base URL resolution:
 * - Browser: NEXT_PUBLIC_API_URL (inlined at build time).
 * - Server: API_URL first so docker compose can point at
 *   http://backend:5000 while browsers use http://localhost:5000.
 */
function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";
  }
  return (
    process.env.API_URL ??
    process.env.NEXT_PUBLIC_API_URL ??
    "http://localhost:5000"
  );
}

export class ApiError extends Error {
  status: number;
  problem?: ProblemDetails;

  constructor(status: number, problem?: ProblemDetails) {
    super(problem?.title ?? `Request failed with status ${status}`);
    this.status = status;
    this.problem = problem;
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${getBaseUrl()}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });

  if (res.status === 204) {
    return undefined as T;
  }

  if (!res.ok) {
    let problem: ProblemDetails | undefined;
    try {
      problem = (await res.json()) as ProblemDetails;
    } catch {
      problem = undefined;
    }
    throw new ApiError(res.status, problem);
  }

  return (await res.json()) as T;
}

export const api = {
  getRestaurants(searchTerm?: string, page = 1, pageSize = 20) {
    const params = new URLSearchParams({
      page: String(page),
      pageSize: String(pageSize),
    });
    if (searchTerm) params.set("searchTerm", searchTerm);
    return request<PagedResult<Restaurant>>(`/api/restaurants?${params}`);
  },

  getRestaurant(id: string) {
    return request<Restaurant>(`/api/restaurants/${id}`);
  },

  getMenu(id: string) {
    return request<MenuItem[]>(`/api/restaurants/${id}/menu`);
  },

  createRestaurant(input: CreateRestaurantInput) {
    return request<string>("/api/restaurants", {
      method: "POST",
      body: JSON.stringify(input),
    });
  },

  updateRestaurant(id: string, input: UpdateRestaurantInput) {
    return request<void>(`/api/restaurants/${id}`, {
      method: "PUT",
      body: JSON.stringify(input),
    });
  },

  deleteRestaurant(id: string) {
    return request<void>(`/api/restaurants/${id}`, { method: "DELETE" });
  },

  addMenuItem(restaurantId: string, input: AddMenuItemInput) {
    return request<string>(`/api/restaurants/${restaurantId}/menu`, {
      method: "POST",
      body: JSON.stringify(input),
    });
  },

  health() {
    return request<{ status: string; timestamp: string }>("/api/health");
  },
};
