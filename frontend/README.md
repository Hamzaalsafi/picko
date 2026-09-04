# Picko Frontend

Next.js (App Router) frontend for Picko — restaurant discovery and menu browsing.
Talks to the Picko ASP.NET Core backend.

## Structure

```
app/
  layout.tsx              # Root layout, header, footer
  loading.tsx             # Global loading skeleton
  error.tsx               # Root error boundary (retry)
  page.tsx                # Home: restaurant list + search (?searchTerm=)
  cart/page.tsx           # Cart from zustand store (client)
  restaurants/
    error.tsx             # Segment error boundary for restaurant routes
    [id]/page.tsx         # Detail + menu (404 via notFound())
    new/page.tsx          # Create form
src/
  lib/
    api.ts                # Typed fetch client (ApiError + ProblemDetails)
    types.ts              # DTOs mirroring the backend
  stores/
    cart.ts               # Zustand cart store (persisted to localStorage)
  components/
    Header.tsx            # Nav + cart badge (server)
    CartCount.tsx         # Hydration-safe cart badge (client)
    AddToCartButton.tsx   # Add menu item to cart (client)
    RestaurantCard.tsx    # List item (server)
    RestaurantSearch.tsx  # nuqs debounced ?searchTerm= input (client)
    RestaurantForm.tsx    # RHF + Zod create form with server errors (client)
    MenuList.tsx          # Menu grouped by category (server)
    DeleteRestaurantButton.tsx  # Delete + redirect (client)
```

## Getting Started

1. Start the backend (see `backend/` + `docs/Architecture.md`), default `http://localhost:5000`.
2. Copy env and run:

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable              | Used by | Purpose                                              |
| --------------------- | ------- | ---------------------------------------------------- |
| `NEXT_PUBLIC_API_URL` | Browser | Backend URL baked into the client bundle at build    |
| `API_URL`             | Server  | Backend URL for Server Components (falls back to `NEXT_PUBLIC_API_URL`) |

In docker compose, `API_URL=http://backend:5000` so server-side fetches
resolve inside the container network, while browsers use `http://localhost:5000`.

## Conventions

- Server Components fetch via `src/lib/api.ts`; data pages are `force-dynamic`.
- `params` / `searchParams` are async — always `await` them (`PageProps<'/...'>`).
- Route errors are caught by `error.tsx` boundaries (root + `restaurants/` segment);
  data is fetched before rendering so boundaries catch failures, not JSX in try/catch.
- Forms use React Hook Form + Zod (client validation mirrors the backend
  validators); backend field errors map onto fields via `setError`.
- Search state lives in the URL via `nuqs` (`useQueryState`, throttled).
- Client state (cart) lives in zustand with `persist`; components read via
  selectors and gate on `useCartHydrated()` to avoid SSR mismatches.
- Styling: Tailwind v4 `@theme` tokens in `app/globals.css`
  (`bg-picko-primary`, `text-picko-text`, `shadow-card`, …).
- Backend errors surface as `ApiError` with RFC 7807 `ProblemDetails`
  (field errors in `err.problem.errors`).

## Scripts

```bash
npm run dev    # dev server (Turbopack)
npm run build  # production build
npm run start  # serve production build
npm run lint   # eslint
```
