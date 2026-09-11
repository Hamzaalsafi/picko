"use client";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";
import { useRef } from "react";
const reveal = {
  visible: {
    y: [24, 0],
    opacity: [0.4, 1],
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};
/** Stable variants prevent hover state from replaying section entrance animations. */
export function RevealSection({
  children,
  ...props
}: HTMLMotionProps<"section">) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      {...props}
      initial={false}
      whileInView={reduce ? undefined : "visible"}
      variants={reveal}
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </motion.section>
  );
}
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className="scroll-progress"
      style={{ scaleX: reduce ? scrollYProgress : scaleX }}
    />
  );
}
export function HeroScene({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);
  return (
    <motion.div ref={ref} className="hero-scene" style={{ y: reduce ? 0 : y }}>
      {children}
    </motion.div>
  );
}
