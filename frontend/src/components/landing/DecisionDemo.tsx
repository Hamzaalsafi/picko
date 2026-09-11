"use client";
import { useLocale } from "@/src/i18n/LocaleProvider";

import { useEffect, useRef, useState } from "react";
import Picko from "./Picko";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RevealSection } from "./Motion";

import { categories } from "./categories";
const questions = [
  { title: "What’s the vibe?", hint: "Go with your gut. I’ll do the rest.", options: ["Chill", "Fun", "Adventurous", "Surprise me"] },
  { title: "Who’s coming along?", hint: "Good company changes the plan.", options: ["Just me", "Friends", "Partner", "Family"] },
  { title: "How much effort?", hint: "A couch kind of day is a valid answer.", options: ["Minimal", "Some effort", "I don’t care"] },
];
const picks: Record<string, { title: string; detail: string; icon: string }[]> = {
  Eat: [
    { title: "A very good taco night.", detail: "Warm tortillas, your favorite fillings, and absolutely no complicated recipe.", icon: "🌮" },
    { title: "Make your own pizza.", detail: "Pick a topping each, turn up the music, and call it a night well spent.", icon: "🍕" },
    { title: "Try a new noodle bowl.", detail: "A little comfort, a little adventure. Choose a noodle dish you haven’t tried before.", icon: "🍜" },
  ],
  Watch: [
    { title: "Paddington 2", detail: "A warm, wonderfully funny adventure for a low-effort, feel-good evening.", icon: "🍿" },
    { title: "Knives Out", detail: "A twisty whodunit, a wonderfully suspicious family, and a very good reason to put your phone down.", icon: "🎬" },
    { title: "The Secret Life of Walter Mitty", detail: "Big landscapes and a little nudge to get out of your comfort zone.", icon: "🏔️" },
  ],
  Read: [
    { title: "The Little Prince", detail: "A short, thoughtful escape. Settle into a cozy corner and start with one chapter.", icon: "📖" },
    { title: "The Thursday Murder Club", detail: "An unlikely group of detectives and a mystery with plenty of heart.", icon: "🔎" },
    { title: "The Hobbit", detail: "One small step out of the door, one very big adventure. Your next chapter awaits.", icon: "🗺️" },
  ],
  "Go out": [
    { title: "A sunset walk + a little treat.", detail: "Find a nearby walking route, leave the agenda at home, and stop for something sweet.", icon: "🌅" },
    { title: "A café you’ve never tried.", detail: "Pick a neighborhood, find a cozy café, and give yourselves permission to linger.", icon: "☕" },
    { title: "Be a tourist in your own city.", detail: "Visit a local museum or landmark you keep walking past. Today’s the day.", icon: "🏛️" },
  ],
};

export default function DecisionDemo({ initialCategory = "" }: { initialCategory?: string }) {
  const { t, locale } = useLocale();

  const reduce = useReducedMotion();
  const [category, setCategory] = useState(initialCategory);
  const [step, setStep] = useState(initialCategory ? 1 : 0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const interacted = useRef(false);


  useEffect(() => { if (interacted.current) heading.current?.focus({ preventScroll: true }); }, [step]);

  function reset() { setStep(0); setCategory(""); setAnswers([]); setSaved(false); setShareMessage(""); }
  function answer(value: string) {
    interacted.current = true;
    if (step === 0) setCategory(value);
    else setAnswers((current) => [...current.slice(0, step - 1), value]);
    setStep(step + 1);
  }
  const resultIndex = answers[0] === "Chill" || answers[2] === "Minimal" ? 0 : answers[0] === "Adventurous" || answers[0] === "Surprise me" ? 2 : 1;
  const result = (picks[category] ?? picks.Watch)[resultIndex];

  async function share() {
    const text = `Picko chose ${t(result.title)} for me. Let Picko decide your next plan at pickoforme.com.`;
    try {
      await navigator.clipboard.writeText(text);
      setShareMessage(t("Copied! Send your pick to a friend."));
    } catch { setShareMessage(text); }
  }

  return <RevealSection id="try-picko" className="section demo-section">
    <div className="section-heading"><span className="eyebrow">{t("LESS SCROLLING. MORE LIVING.")}</span><h1>{t("A little less “maybe.”")}<br />{t("A little more")} <span className="blue-text">{t("“let’s do it.”")}</span></h1><p>{t("Try a little Picko magic. No account. No overthinking.")}</p></div>
    <div className="demo-layout">
      <div className="demo-aside"><div className="demo-speech">{t(step === 4 ? "See? You had it in you.\nI just helped a little." : "You bring the mood.\nI’ll bring the idea.")}<span>♡</span></div><Picko pose={step === 4 ? "proud" : "thinking"} /><span className="hand-note">{t("your tiny tie-breaking expert")}</span></div>
      <div className="demo-card">
        <div className="demo-top"><span><span className="status-dot" /> {t("PICKO’S ON IT")}</span><span>{t("Interactive demo")}</span></div>
        <div className="demo-progress" aria-label={locale === "ar" ? `الخطوة ${Math.min(step + 1, 4)} من ٤` : `Step ${Math.min(step + 1, 4)} of 4`}>{[0, 1, 2, 3].map((i) => <span key={i} className={i <= step ? "complete" : ""} />)}</div>
        <AnimatePresence mode="wait" initial={false}><motion.div className="demo-content" key={`${category}-${step}`} initial={{ opacity: 0, x: reduce ? 0 : locale === "ar" ? -18 : 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: reduce ? 0 : locale === "ar" ? 12 : -12 }} transition={{ duration: 0.2 }} onAnimationComplete={() => { if (interacted.current) heading.current?.focus({ preventScroll: true }); }}>
          {step < 4 ? <>
            <span className="step-label">0{step + 1} / 04</span>
            <h2 ref={heading} tabIndex={-1}>{t(step === 0 ? "What are we doing today?" : questions[step - 1].title)}</h2>
            <p>{t(step === 0 ? "One good choice starts right here." : questions[step - 1].hint)}</p>
            <div className="answer-grid">{step === 0 ? categories.map((item) => <button key={t(item.name)} onClick={() => answer(item.name)}><span className="answer-icon">{item.icon}</span><strong>{t(item.name)}</strong><small>{t(item.description)}</small><span className="option-arrow">↗</span></button>) : questions[step - 1].options.map((option, index) => <button key={t(option)} className="mood-option" onClick={() => answer(option)}><span className="answer-icon">{["✦", "☀", "↗", "✧"][index]}</span><strong>{t(option)}</strong><span className="option-arrow">→</span></button>)}</div>
          </> : <div className="pick-result"><span className="eyebrow">{t("✦ PICKO’S PICK")}</span><div className={`result-art art-${category.replace(" ", "-").toLowerCase()}`}><span>{result.icon}</span><i>{t("one good answer.")}</i></div><h2 ref={heading} tabIndex={-1}>{t(result.title)}</h2><p>{t(result.detail)}</p><div className="result-tags">{answers.map((a) => <span key={a}>{t(a)}</span>)}</div><small className="result-reason">{locale === "ar" ? `اختيار يناسب ${t(answers[0])}، مع ${t(answers[1])}، وبـ ${t(answers[2])}.` : `Picked for your ${answers[0]?.toLowerCase()} mood, ${answers[1] === "Just me" ? "some time to yourself" : `time with ${answers[1]?.toLowerCase()}`}, and ${answers[2]?.toLowerCase()}.`}</small><div className="result-actions"><button className="button primary" onClick={() => setSaved(true)}>{t(saved ? "✓ It’s a plan!" : "That’s my pick ♡")}</button><button className="button secondary" onClick={share}>{t("Share ↗")}</button></div><p className="share-status" role="status">{shareMessage || t(saved ? "Decision made. Go enjoy it!" : "A sample pick, made from your answers.")}</p></div>}
        </motion.div></AnimatePresence>
        <div className="demo-bottom">{step > 0 && step < 4 ? <button onClick={() => setStep(step - 1)}>{t("← Back")}</button> : <span>{t("✧ A few questions. One good answer.")}</span>}{step > 0 && <button onClick={reset}>{t("Start again ↻")}</button>}</div>
      </div>
    </div>
  </RevealSection>;
}
