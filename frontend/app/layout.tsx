import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/src/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Picko — Find your next meal",
  description: "Discover restaurants and browse menus with Picko.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-picko-bg font-sans text-picko-text">
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-picko-border py-4 text-center text-xs text-picko-muted">
          Picko template · Next.js + ASP.NET Core
        </footer>
      </body>
    </html>
  );
}
