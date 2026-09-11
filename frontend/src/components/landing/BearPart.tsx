"use client";
import { motion } from "framer-motion";
import { createContext, useContext } from "react";
export type BearZone =
  | "left-ear"
  | "right-ear"
  | "nose"
  | "belly"
  | "bow"
  | "head"
  | "paw"
  | "";
export const BearInteraction = createContext<{
  active: BearZone;
  reduced: boolean;
}>({ active: "", reduced: false });

/** Keep each vector part together so fur, outlines and highlights move as one. */
export default function BearPart({
  zone,
  children,
}: {
  zone: BearZone;
  children: React.ReactNode;
}) {
  const { active, reduced } = useContext(BearInteraction);
  const engaged = active === zone && !reduced;
  const ear = zone === "left-ear" || zone === "right-ear";
  const origin =
    zone === "left-ear"
      ? "125px 240px"
      : zone === "right-ear"
        ? "465px 166px"
        : zone === "nose"
          ? "348px 325px"
          : zone === "bow"
            ? "369px 539px"
            : "370px 635px";
  return (
    <motion.g
      data-zone={zone}
      style={{ transformOrigin: origin }}
      animate={
        engaged
          ? ear
            ? { rotate: [0, -11, 9, -5, 0], scale: 1.04 }
            : zone === "nose"
              ? { scaleX: [1, 1.12, 0.97, 1], scaleY: [1, 0.8, 1.05, 1] }
              : zone === "bow"
                ? { rotate: [0, -8, 8, 0], scale: 1.07 }
                : { scaleX: [1, 1.05, 0.98, 1], scaleY: [1, 0.94, 1.02, 1] }
          : { rotate: 0, scale: 1, scaleX: 1, scaleY: 1 }
      }
      transition={
        engaged
          ? {
              duration: ear ? 0.7 : 0.5,
              repeat: ear ? Infinity : 0,
              repeatDelay: 0.55,
            }
          : { type: "spring", stiffness: 240, damping: 16 }
      }
    >
      {children}
    </motion.g>
  );
}
