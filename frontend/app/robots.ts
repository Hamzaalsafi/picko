import type { MetadataRoute } from "next";
import {siteUrl} from "@/src/i18n/config";
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:"*",allow:"/"},sitemap:`${siteUrl}/sitemap.xml`,host:siteUrl};}
