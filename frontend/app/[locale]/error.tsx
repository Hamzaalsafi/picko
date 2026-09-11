"use client";
import {useLocale} from "@/src/i18n/LocaleProvider";
export default function Error({reset}:{reset:()=>void}){const {isArabic}=useLocale();return <main id="main-content" className="section"><h1>{isArabic?"عطل بسيط.":"A little hiccup."}</h1><p>{isArabic?"بيكو يحتاج لحظة. حاول مرة أخرى.":"Picko needs a moment. Please try again."}</p><button className="button primary" onClick={reset}>{isArabic?"حاول مجدّدًا":"Try again"}</button></main>;}
