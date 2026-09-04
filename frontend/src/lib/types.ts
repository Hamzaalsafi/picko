// Types mirroring the Picko backend DTOs (Picko.Application.Restaurants.DTOs).

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phoneNumber: string;
  imageUrl: string;
  rating: number | null;
  isOpen: boolean;
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  isAvailable: boolean;
}

export interface PagedResult<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface CreateRestaurantInput {
  name: string;
  description: string;
  cuisine: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phoneNumber: string;
  imageUrl: string;
}

export interface UpdateRestaurantInput extends CreateRestaurantInput {
  id: string;
}

export interface AddMenuItemInput {
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  isAvailable: boolean;
}

/** RFC 7807 problem details returned by the backend ExceptionMiddleware. */
export interface ProblemDetails {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  traceId?: string;
  errors?: Record<string, string[]>;
}
