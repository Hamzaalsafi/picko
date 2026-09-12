"use client";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { useInView, useReducedMotion, useSpring, type MotionStyle } from "framer-motion";
import type { BearZone } from "./BearPart";

let lastMouse: {x:number;y:number} | null = null;

export default function useBearInteraction(trackEyes: boolean) {
  const ref = useRef<SVGSVGElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { margin: "80px" });
  const [active, setActive] = useState<BearZone>("");
  const [hovered, setHovered] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tilt = useSpring(0, { stiffness: 180, damping: 18 });
  const lift = useSpring(0, { stiffness: 180, damping: 18 });
  const eyeX = useSpring(0, { stiffness: 320, damping: 32 });
  const eyeY = useSpring(0, { stiffness: 320, damping: 32 });
  const rightX = useSpring(0, { stiffness: 320, damping: 32 });
  const rightY = useSpring(0, { stiffness: 320, damping: 32 });
  useEffect(() => {
    if (!trackEyes || reduce || !inView) return;
    let frame = 0;
    function update() {
      frame = 0;
      const svg = ref.current;
      const matrix = svg?.getScreenCTM();
      if (!svg || !matrix) return;
      // Map the pointer into SVG coordinates, including scale and pose rotation.
      const pointer = lastMouse ? new DOMPoint(lastMouse.x, lastMouse.y).matrixTransform(matrix.inverse()) : null;
      const eyes = ["left", "right"].map(side => {
        const white = svg.querySelector<SVGGraphicsElement>('[data-part="'+side+'-eye"]');
        const iris = svg.querySelector<SVGEllipseElement>('[data-part="'+side+'-pupil"] ellipse');
        if (!white || !iris) return null;
        const box = white.getBBox();
        return {x:box.x+box.width/2,y:box.y+box.height/2,iris,
          travelX:Math.max(0,box.width/2-iris.rx.baseVal.value-2),
          travelY:Math.max(0,box.height/2-iris.ry.baseVal.value-2)};
      });
      const visible = eyes.filter(eye => eye !== null);
      if (!visible.length) return;
      const cx = visible.reduce((sum,eye)=>sum+eye.x,0)/visible.length;
      const cy = visible.reduce((sum,eye)=>sum+eye.y,0)/visible.length;
      const dx = pointer ? pointer.x-cx : 0;
      const dy = pointer ? pointer.y-cy : 0;
      const distance = Math.hypot(dx,dy,170);
      eyes.forEach((eye,index)=>{
        if (!eye) return;
        // Both eyes look in one direction; their own outlines limit the travel.
        const x = eye.x-eye.iris.cx.baseVal.value + dx/distance*eye.travelX;
        const y = eye.y-eye.iris.cy.baseVal.value + dy/distance*eye.travelY;
        (index===0?eyeX:rightX).set(x);
        (index===0?eyeY:rightY).set(y);
      });
    }
    function schedule(){if(!frame) frame=requestAnimationFrame(update);}
    function look(event:globalThis.PointerEvent){
      if(event.pointerType!=="mouse") return;
      lastMouse={x:event.clientX,y:event.clientY};schedule();
    }
    function rest(){lastMouse=null;schedule();}
    schedule();
    window.addEventListener("pointermove",look,{passive:true});
    window.addEventListener("scroll",schedule,{passive:true});
    window.addEventListener("resize",schedule);
    window.addEventListener("blur",rest);
    document.documentElement.addEventListener("pointerleave",rest);
    return ()=>{
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove",look);
      window.removeEventListener("scroll",schedule);
      window.removeEventListener("resize",schedule);
      window.removeEventListener("blur",rest);
      document.documentElement.removeEventListener("pointerleave",rest);
    };
  }, [trackEyes, reduce, inView, eyeX, eyeY, rightX, rightY]);
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
  const style = { rotate: tilt, y: lift, originX: "50%", originY: "80%", "--look-x": eyeX, "--look-y": eyeY, "--look-right-x": rightX, "--look-right-y": rightY } as MotionStyle;
  return { ref, reduce, inView, active, hovered, style, move, leave, tap };
}
