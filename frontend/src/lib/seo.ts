import type { Metadata } from "next";
import { siteUrl, type Locale } from "@/src/i18n/config";
export function pageMetadata(locale:Locale, choose=false): Metadata {
  const title=locale==="ar" ? (choose ? "دع بيكو يختار لك | PickoGo" : "محتار؟ دع بيكو يختار لك | PickoGo") : (choose ? "Let Picko choose for you | PickoGo" : "Can’t decide? Let Picko decide | PickoGo");
  const description=locale==="ar" ? "رفيقك الصغير لاتخاذ القرارات. أخبر بيكو عن مزاجك ليقترح عليك ما تأكله أو تشاهده أو تقرأه أو تفعله اليوم. أسئلة بسيطة، واختيار واحد يناسبك." : "Your personal decision companion. Tell Picko your mood and get one thoughtful suggestion for what to eat, watch, read, or do next. Less scrolling, more living.";
  const suffix=choose?"/choose":"";
  return {metadataBase:new URL(siteUrl),title,description,alternates:{canonical:`/${locale}${suffix}`,languages:{en:`/en${suffix}`,ar:`/ar${suffix}`,"x-default":`/en${suffix}`}},openGraph:{type:"website",url:`/${locale}${suffix}`,siteName:"PickoGo",title,description,locale:locale==="ar"?"ar_AR":"en_US",alternateLocale:locale==="ar"?["en_US"]:["ar_AR"],images:[{url:`/social-${locale}.png`,width:1200,height:630,alt:locale==="ar"?"بيكو، رفيقك الصغير لاتخاذ القرارات":"Picko, your tiny decision companion"}]},twitter:{card:"summary_large_image",title,description,images:[`/social-${locale}.png`]},robots:{index:true,follow:true},icons:{icon:"/icon.svg"}};
}
export function websiteSchema(locale:Locale) {
 return {"@context":"https://schema.org","@type":"WebSite","@id":`${siteUrl}/#website`,name:"PickoGo",alternateName:"بيكو جو",url:siteUrl,inLanguage:["en","ar"],description:pageMetadata(locale).description,publisher:{"@type":"Organization",name:"PickoGo",url:siteUrl,logo:`${siteUrl}/picko.svg`}};
}
