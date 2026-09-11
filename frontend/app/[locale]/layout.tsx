import Navbar from "@/src/components/landing/Navbar";
import LocaleProvider from "@/src/i18n/LocaleProvider";
import { isLocale, locales } from "@/src/i18n/config";
import { notFound } from "next/navigation";
import { Geist, Noto_Sans_Arabic } from "next/font/google";
import "../globals.css";
const geist=Geist({variable:"--font-geist-sans",subsets:["latin"],display:"swap"});
const arabic=Noto_Sans_Arabic({variable:"--font-arabic",subsets:["arabic"],display:"swap"});
export function generateStaticParams(){return locales.map(locale=>({locale}));}
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){
 const {locale}=await params;
 if(!isLocale(locale)) notFound();
 const messages=locale==="ar"?(await import("@/src/i18n/ar.json")).default:{};
 return <html lang={locale} dir={locale==="ar"?"rtl":"ltr"} className={`${geist.variable} ${arabic.variable} antialiased`}><body className="min-h-full font-sans"><LocaleProvider locale={locale} messages={messages}><a className="skip-link" href="#main-content">{locale==="ar"?"انتقل إلى المحتوى":"Skip to content"}</a><Navbar />{children}</LocaleProvider></body></html>;
}
