export const locales = ["en", "ar"] as const;
export type Locale = typeof locales[number];
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);
export const localePath = (locale: Locale, path = "") => `/${locale}${path}`;
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://pickoforme.com").replace(/\/$/, "");
