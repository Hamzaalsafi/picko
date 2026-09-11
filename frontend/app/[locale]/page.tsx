import LandingPage from "@/src/components/landing/LandingPage";
import { isLocale } from "@/src/i18n/config";
import { pageMetadata,websiteSchema } from "@/src/lib/seo";
import { notFound } from "next/navigation";
type Props={params:Promise<{locale:string}>};
export async function generateMetadata({params}:Props){const {locale}=await params;if(!isLocale(locale))notFound();return pageMetadata(locale);}
export default async function Home({params}:Props){const {locale}=await params;if(!isLocale(locale))notFound();return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(websiteSchema(locale)).replace(/</g,"\\u003c")}}/><LandingPage /></>;}
