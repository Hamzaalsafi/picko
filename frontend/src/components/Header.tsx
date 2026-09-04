import Link from "next/link";
import CartCount from "@/src/components/CartCount";

export default function Header() {
  return (
    <header className="border-b border-picko-border bg-picko-surface">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-picko-text">
          Picko<span className="text-picko-primary">.</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-picko-muted hover:text-picko-text"
          >
            Restaurants
          </Link>
          <Link
            href="/cart"
            className="text-sm font-medium text-picko-muted hover:text-picko-text"
          >
            Cart
            <CartCount />
          </Link>
          <Link
            href="/restaurants/new"
            className="rounded-full bg-picko-primary px-4 py-2 text-sm font-semibold text-white shadow-button hover:opacity-90"
          >
            Add restaurant
          </Link>
        </nav>
      </div>
    </header>
  );
}
