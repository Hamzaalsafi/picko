"use client";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { useInView, useReducedMotion, useSpring, type MotionStyle } from "framer-motion";
import type { BearZone } from "./BearPart";

export default function useBearInteraction(trackEyes: boolean) {
  const ref = useRef<SVGSVGElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { margin: "80px" });
  const [active, setActive] = useState<BearZone>("");
  const [hovered, setHovered] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tilt = useSpring(0, { stiffness: 180, damping: 18 });
  const lift = useSpring(0, { stiffness: 180, damping: 18 });
  const eyeX = useSpring(0, { stiffness: 210, damping: 24 });
  const eyeY = useSpring(0, { stiffness: 210, damping: 24 });
  useEffect(() => {
    if (!trackEyes || reduce || !inView) return;
    function look(event: globalThis.PointerEvent) {
      if (event.pointerType !== "mouse") return;
      const bounds = ref.current?.getBoundingClientRect();
      if (!bounds || bounds.bottom < 0 || bounds.top > window.innerHeight) return;
      const centerX = bounds.left + bounds.width * .45;
      const centerY = bounds.top + bounds.height * .4;
      eyeX.set(Math.max(-8, Math.min(8, (event.clientX - centerX) / 35)));
      eyeY.set(Math.max(-5, Math.min(5, (event.clientY - centerY) / 45)));
    }
    function rest() { eyeX.set(0); eyeY.set(0); }
    window.addEventListener("pointermove", look, { passive: true });
    document.documentElement.addEventListener("pointerleave", rest);
    window.addEventListener("blur", rest);
    return () => { window.removeEventListener("pointermove", look); document.documentElement.removeEventListener("pointerleave", rest); window.removeEventListener("blur", rest); };
  }, [trackEyes, reduce, inView, eyeX, eyeY]);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  function zoneFor(event: PointerEvent<SVGSVGElement>): BearZone {
    const target = event.target as Element;
    const zone = target.closest("[data-zone]")?.getAttribute("data-zone");
    if (zone) return zone as BearZone;
    const part = target.closest("[data-part]")?.getAttribute("data-part") ?? "";
    if (part.includes("paw")) return "paw";
    if (part === "body") return "belly";
    return part ? "head" : "";
  }
  function move(event: PointerEvent<SVGSVGElement>) {
    if (reduce || event.pointerType !== "mouse") return;
    setHovered(true);
    const zone = zoneFor(event);
    setActive(zone);
    const bounds = event.currentTarget.getBoundingClientRect();
    // A light face lean; ears and nose keep their own independent reactions.
    tilt.set(zone === "head" ? ((event.clientX - bounds.left) / bounds.width - .5) * 7 : 0);
    lift.set(zone === "belly" ? -4 : 0);
  }
  function leave() { setHovered(false); setActive(""); tilt.set(0); lift.set(0); }
  function tap(event: PointerEvent<SVGSVGElement>) {
    if (reduce || event.pointerType === "mouse") return;
    setActive(zoneFor(event));
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(""), 900);
  }
  const style = { rotate: tilt, y: lift, originX: "50%", originY: "80%", "--look-x": eyeX, "--look-y": eyeY } as MotionStyle;
  return { ref, reduce, inView, active, hovered, style, move, leave, tap };
}
