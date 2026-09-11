"use client";
import {useLocale} from "@/src/i18n/LocaleProvider";
export default function Loading(){const {isArabic}=useLocale();return <main id="main-content" className="section" aria-busy="true"><p role="status">{isArabic?"بيكو يستعدّ…":"Picko is getting ready…"}</p></main>;}
