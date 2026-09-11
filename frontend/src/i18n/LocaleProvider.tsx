"use client";
import { createContext, useContext } from "react";
import type { Locale } from "./config";
import { MotionConfig } from "framer-motion";
const LocaleContext = createContext<{ locale: Locale; messages: Record<string, string> }>({ locale: "en", messages: {} });
export default function LocaleProvider({locale,messages,children}: {locale:Locale;messages:Record<string,string>;children:React.ReactNode}) {
  return <LocaleContext.Provider value={{locale,messages}}><MotionConfig reducedMotion="user">{children}</MotionConfig></LocaleContext.Provider>;
}
export function useLocale() {
  const {locale,messages}=useContext(LocaleContext);
  const t=(key:string | undefined) => key ? messages[key] ?? key : "";
  const path=(suffix="")=>`/${locale}${suffix}`;
  return {locale,t,path,isArabic:locale==="ar"};
}
