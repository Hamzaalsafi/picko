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
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};
const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (index:number) => ({opacity:1,y:0,transition:{duration:0.55,delay:index*0.07,ease:[0.22,1,0.36,1] as const}}),
};
export function RevealCard({index,children,...props}:HTMLMotionProps<"article"> & {index:number}){
  const reduce=useReducedMotion();
  return <motion.article {...props} custom={index} initial={reduce?false:"hidden"} whileInView="visible" viewport={{once:true,amount:0.18}} variants={cardReveal}>{children}</motion.article>;
}
/** Stable variants prevent hover state from replaying section entrance animations. */
export function RevealSection({
  children,
  ...props
}: HTMLMotionProps<"section">) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      {...props}
      initial={reduce || props.className?.includes("hero") ? false : "hidden"}
      whileInView="visible"
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
