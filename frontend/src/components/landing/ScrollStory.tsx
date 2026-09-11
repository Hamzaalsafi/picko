"use client";
import { useLocale } from "@/src/i18n/LocaleProvider";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import Picko from "./Picko";

const choices = [
  { icon: "🍜", label: "Something delicious", x: -380, y: -120, rotation: -12 },
  { icon: "🎬", label: "A movie night?", x: 340, y: -140, rotation: 10 },
  { icon: "📚", label: "One more chapter", x: -310, y: 100, rotation: 7 },
  { icon: "🌙", label: "A little adventure", x: 370, y: 105, rotation: -8 },
];
function OrbitCard({ item, progress }: { item: typeof choices[number]; progress: MotionValue<number> }) {
  const { t } = useLocale();

  const x = useTransform(progress, [0, .18, .42, .57], [item.x * 1.35, item.x, item.x * .85, 0]);
  const responsiveX = useTransform(x, value => `calc(${value} * var(--story-unit))`);
  const y = useTransform(progress, [0, .18, .42, .57], [item.y * 1.5, item.y, item.y * .7, 15]);
  const rotate = useTransform(progress, [0, .2, .57], [item.rotation * 2, item.rotation, 0]);
  const scale = useTransform(progress, [0, .18, .45, .57], [.8, 1, 1, .35]);
  const opacity = useTransform(progress, [0, .1, .47, .58], [0, 1, 1, 0]);
  return <motion.div className="story-choice" style={{ x: responsiveX, y, rotate, scale, opacity }}><span>{item.icon}</span>{t(item.label)}</motion.div>;
}

/** A pinned, scroll-scrubbed scene: options -> thought -> one answer. */
export default function ScrollStory() {
  const { t } = useLocale();

  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: .001 });
  const backdrop = useTransform(progress, [0, .45, .8], ["#eee4d3", "#dfe9ee", "#e4e8d8"]);
  const ringScale = useTransform(progress, [0, .5, 1], [.72, 1.1, 1.7]);
  const ringRotate = useTransform(progress, [0, 1], [-25, 65]);
  const firstOpacity = useTransform(progress, [0, .24, .29], [1, 1, 0]);
  const secondOpacity = useTransform(progress, [.30, .37, .57, .62], [0, 1, 1, 0]);
  const finalOpacity = useTransform(progress, [.64, .75], [0, 1]);
  const waveOpacity = useTransform(progress, [0, .24, .29], [1, 1, 0]);
  const thoughtOpacity = useTransform(progress, [.30, .37, .58, .63], [0, 1, 1, 0]);
  const proudOpacity = useTransform(progress, [.64, .73], [0, 1]);
  const waveEvents = useTransform(progress, value => value < .29 ? "auto" as const : "none" as const);
  const thoughtEvents = useTransform(progress, value => value >= .30 && value < .64 ? "auto" as const : "none" as const);
  const proudEvents = useTransform(progress, value => value >= .64 ? "auto" as const : "none" as const);
  const bearScale = useTransform(progress, [0, .18, .48, .72, 1], [.8, 1, .93, 1.02, 1]);
  const resultY = useTransform(progress, [.61, .82], [100, 0]);
  const resultRotate = useTransform(progress, [.61, .82], [-9, -3]);
  const resultScale = useTransform(progress, [.61, .82], [.75, 1]);
  const firstY = useTransform(progress,[0,.24,.29],[0,0,-24]);
  const secondY = useTransform(progress,[.30,.37,.57,.62],[24,0,0,-24]);
  const finalY = useTransform(progress,[.64,.75],[24,0]);
  const hintOpacity = useTransform(progress, [.8, .94], [1, 0]);
  if (reduce) return <section className="story-static section"><span className="eyebrow">{t("A LITTLE CLARITY, PLEASE.")}</span><h2>{t("All those options.")}<br />{t("One")} <em>{t("good answer.")}</em></h2><Picko trackEyes pose="thinking" /><p>{t("Tell Picko your mood. He’ll turn the maybes into a plan.")}</p></section>;
  return <section ref={ref} className="scroll-story" aria-label={t("From too many options to one good answer")}>
    <motion.div className="story-sticky" style={{ backgroundColor: backdrop }}>
      <div className="story-accessible">{t("Too many options? Picko thinks it through. One good answer: a cozy movie night.")}</div>
      <div className="story-heading" aria-hidden="true">
        <motion.div style={{ opacity: firstOpacity, y: firstY }}><span className="eyebrow">{t("SOUND LIKE YOUR BRAIN?")}</span><h2>{t("Maybe this.")}<br />{t("Or that. Or")} <em>{t("this?")}</em></h2></motion.div>
        <motion.div style={{ opacity: secondOpacity, y: secondY }}><span className="eyebrow">{t("GIVE HIM A LITTLE SECOND.")}</span><h2>{t("A small bear.")}<br />{t("A")} <em>{t("thoughtful")}</em> {t("little pause.")}</h2></motion.div>
        <motion.div style={{ opacity: finalOpacity, y: finalY }}><span className="eyebrow">{t("AND JUST LIKE THAT.")}</span><h2>{t("Less deciding.")}<br /><em>{t("More doing.")}</em></h2></motion.div>
      </div>
      <div className="story-stage" aria-hidden="true">
        <motion.div className="story-ring" style={{ scale: ringScale, rotate: ringRotate }} /><motion.div className="story-ring inner-ring" style={{ rotate: ringRotate }} />
        {choices.map(item => <OrbitCard key={t(item.label)} item={item} progress={progress} />)}
        <motion.div className="story-bear" style={{ scale: bearScale }}>
          <motion.div style={{ opacity: waveOpacity, pointerEvents: waveEvents }}><Picko trackEyes pose="neutral" /></motion.div>
          <motion.div style={{ opacity: thoughtOpacity, pointerEvents: thoughtEvents }}><Picko trackEyes pose="thinking" /></motion.div>
          <motion.div style={{ opacity: proudOpacity, pointerEvents: proudEvents }}><Picko trackEyes pose="proud" /></motion.div>
        </motion.div>
        <motion.div className="story-result" style={{ opacity: finalOpacity, y: resultY, rotate: resultRotate, scale: resultScale }}><span className="story-result-icon">🎬</span><div><small>{t("✦ PICKO’S PICK")}</small><strong>{t("A cozy movie night.")}</strong><p>{t("Popcorn. Your people. Decision made.")}</p></div><span className="story-tick">✓</span></motion.div>
      </div>
      <motion.div className="story-scroll-hint" style={{ opacity: hintOpacity }}>{t("KEEP SCROLLING. HE’S GOT THIS.")} <span>↓</span></motion.div>
      <motion.div className="story-progress" style={{ scaleX: progress }} />
    </motion.div>
  </section>;
}
