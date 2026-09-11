import type { MetadataRoute } from "next";
import { locales,siteUrl } from "@/src/i18n/config";
export default function sitemap():MetadataRoute.Sitemap{return locales.flatMap(locale=>["","/choose"].map(suffix=>({url:`${siteUrl}/${locale}${suffix}`,alternates:{languages:{en:`${siteUrl}/en${suffix}`,ar:`${siteUrl}/ar${suffix}`,"x-default":`${siteUrl}/en${suffix}`}}})));}
