"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Picko from "./Picko";
import { useLocale } from "@/src/i18n/LocaleProvider";
import { locales } from "@/src/i18n/config";
const links=[{hash:"how-it-works",label:"How it works"},{hash:"categories",label:"Categories"},{hash:"meet-picko",label:"Meet Picko ♡"}];
export default function Navbar(){
 const [open,setOpen]=useState(false);
 const {t,path,locale}=useLocale();
 const pathname=usePathname();const router=useRouter();
 const cta=(detail:boolean)=>window.dispatchEvent(new CustomEvent("picko-cta",{detail}));
 return <header className="landing-nav"><div className="nav-inner">
 <Link className="wordmark" dir="ltr" href={path()} aria-label={t("PickoGo home")} onClick={()=>setOpen(false)}><span className="brand-bear"><Picko/></span>Picko<span>Go</span><i>✦</i></Link>
 <nav className="nav-links" aria-label={t("Main navigation")}>{links.map(link=><Link key={link.hash} href={path(`#${link.hash}`)}>{t(link.label)}</Link>)}</nav>
 <div className="nav-actions"><nav className="language-switch" aria-label={t("Change language")}>{locales.map(language=>{const destination=`/${language}${pathname.replace(/^\/(en|ar)/,"")}`;return <Link key={language} href={destination} hrefLang={language} lang={language} aria-current={locale===language?"page":undefined} onClick={event=>{if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;event.preventDefault();setOpen(false);router.push(destination+window.location.search+window.location.hash);}}>{language==="ar"?"العربية":"EN"}</Link>;})}</nav>
 <Link href={path("/choose")} className="button primary nav-cta" onPointerEnter={()=>cta(true)} onPointerLeave={()=>cta(false)} onFocus={()=>cta(true)} onBlur={()=>cta(false)} onClick={()=>setOpen(false)}>{t("Let Picko decide")}<span aria-hidden="true">↗</span></Link>
 <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={t(open?"Close navigation":"Open navigation")} onClick={()=>setOpen(!open)}>{open?"✕":"☰"}</button></div>
 </div><nav id="mobile-menu" className="mobile-links" aria-label={t("Mobile navigation")} hidden={!open} onKeyDown={e=>{if(e.key==="Escape")setOpen(false);}}>{links.map(link=><Link key={link.hash} href={path(`#${link.hash}`)} onClick={()=>setOpen(false)}>{t(link.label)}</Link>)}<Link href={path("/choose")} onClick={()=>setOpen(false)}>{t("Let Picko decide")}</Link></nav></header>;
}
