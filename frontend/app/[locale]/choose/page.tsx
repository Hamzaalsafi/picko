import DecisionDemo from "@/src/components/landing/DecisionDemo";
import { categories } from "@/src/components/landing/categories";
import { isLocale } from "@/src/i18n/config";
import { pageMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";
type Props={params:Promise<{locale:string}>;searchParams:Promise<{category?:string}>};
export async function generateMetadata({params}:Props){const {locale}=await params;if(!isLocale(locale))notFound();return pageMetadata(locale,true);}
export default async function ChoosePage({params,searchParams}:Props){const {locale}=await params;if(!isLocale(locale))notFound();const {category}=await searchParams;const initialCategory=categories.some(c=>c.name===category)?category:"";return <div className="choose-page"><main id="main-content"><DecisionDemo key={`${locale}-${initialCategory}`} initialCategory={initialCategory}/></main></div>;}
