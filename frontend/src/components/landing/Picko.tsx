"use client";
import { useLocale } from "@/src/i18n/LocaleProvider";
import ExpressionArtwork from "./ExpressionArtwork";
import ThinkingArtwork from "./ThinkingArtwork";
import { useId } from "react";
import BearPart, { BearInteraction } from "./BearPart";
import useBearInteraction from "./useBearInteraction";
import { motion } from "framer-motion";
export type PickoPose = "neutral" | "wave" | "thinking" | "excited" | "confused" | "celebrating" | "facepalm" | "proud";
export default function Picko({pose = "neutral", className = "", trackEyes = false}: {pose?: PickoPose; className?: string; trackEyes?: boolean}) {
const {t,locale}=useLocale();
const uid = useId().replace(/:/g, "");
const { ref, reduce, inView, active, hovered, style, move, leave, tap } = useBearInteraction(trackEyes);

return (<motion.svg ref={ref} style={style} data-in-view={inView} data-active-part={active} data-track-eyes={trackEyes} onPointerMove={move} onPointerLeave={leave} onPointerDown={tap} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 750" className={`picko-svg pose-${pose} ${className}`} role="img" aria-label={locale === "ar" ? `بيكو الدب، ${t(pose)}` : `Picko the bear, ${pose}`}><title>{t("Picko, your decision companion")}</title>

<BearInteraction.Provider value={{ active, reduced: !!reduce || !inView }}>{pose === "thinking" ? <ThinkingArtwork uid={uid} /> : pose !== "wave" ? <ExpressionArtwork uid={uid} pose={pose} /> : <><defs>
 <linearGradient id={`${uid}-fur`} data-part="fur" x2="0.8" y2="1"><stop stopColor="#a77a52"/><stop offset="1" stopColor="#956540"/></linearGradient>
 <linearGradient id={`${uid}-tan`} data-part="tan" x2="0.7" y2="1"><stop stopColor="#eac08c"/><stop offset="1" stopColor="#d9a773"/></linearGradient>
 <linearGradient id={`${uid}-blue`} data-part="blue" x2="0.4" y2="1"><stop stopColor="#588dbe"/><stop offset="1" stopColor="#386eaa"/></linearGradient>
</defs>
<g stroke="#59351f" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round">
 <motion.g className="picko-wave" style={{ transformOrigin: "530px 550px" }} animate={{ rotate: reduce || !inView ? 0 : hovered && active === "paw" ? [0, -20, 9, -16, 5, 0] : [0, -8, 4, 0] }} transition={hovered && active === "paw" ? { duration: 1.1, repeat: Infinity, repeatDelay: 0.3 } : { duration: 2.4, repeat: ["wave", "excited", "celebrating"].includes(pose) && !reduce && inView ? Infinity : 0, repeatDelay: 1.8 }}><path fill={`url(#${uid}-fur)`} d="M490 477 C553 446 589 390 615 333 C627 309 647 291 672 300 C691 292 706 299 714 319 C724 312 735 319 739 342 C747 381 739 433 710 480 C675 538 613 583 551 604 L520 541 Z"/><path id={`${uid}-arm-shadow`} data-part="arm-shadow" stroke="none" fill="#805033" d="M532 548 C583 550 661 504 700 444 C722 411 735 376 737 352 C750 418 703 541 552 603 Z"/><path id={`${uid}-paw-highlight`} data-part="paw-highlight" fill="none" stroke="#c39570" strokeWidth="7" d="M553 453 C584 427 607 389 626 348 C638 326 647 316 660 314"/><path id={`${uid}-paw-pad`} data-part="paw-pad" fill="#754b31" d="M649 373 C658 354 679 352 693 367 C711 387 700 410 681 400 C670 391 639 399 649 373 Z"/><g fill={`url(#${uid}-tan)`} stroke="none"><ellipse cx="656" cy="341" rx="9" ry="10"/><ellipse cx="686" cy="335" rx="10" ry="11"/><ellipse cx="711" cy="353" rx="9" ry="10"/></g></motion.g><path id={`${uid}-body`} data-part="body" fill={`url(#${uid}-fur)`} d="M162 497 C105 530 65 591 67 645 C64 695 92 716 144 711 L566 667 C563 625 536 548 511 455 Z"/>
 
 <BearPart zone="belly"><path id={`${uid}-belly`} data-part="belly" stroke="none" fill={`url(#${uid}-tan)`} d="M243 667 C246 614 280 562 319 548 C354 526 405 537 442 564 C479 592 505 630 518 667 Z"/></BearPart>
 <path id={`${uid}-neck-shadow`} data-part="neck-shadow" stroke="none" fill="#835438" d="M154 498 C245 540 391 540 487 473 C461 518 419 551 365 558 C290 565 201 548 154 519 Z"/>
 <BearPart zone="left-ear"><path id={`${uid}-left-ear`} data-part="left-ear" fill={`url(#${uid}-fur)`} d="M160 158 C141 117 100 110 68 128 C35 146 20 182 32 221 C41 251 68 271 112 264 Z"/>
 <path id={`${uid}-left-inner-ear`} data-part="left-inner-ear" fill={`url(#${uid}-tan)`} strokeWidth="8" d="M143 186 C127 160 107 155 91 166 C66 181 64 205 78 224 C86 233 96 237 110 238 Z"/></BearPart>
 <BearPart zone="right-ear"><path id={`${uid}-right-ear`} data-part="right-ear" fill={`url(#${uid}-fur)`} d="M426 121 C431 76 459 56 490 57 C526 55 558 86 562 117 C572 155 549 183 509 191 Z"/>
 <path id={`${uid}-right-inner-ear`} data-part="right-inner-ear" fill={`url(#${uid}-tan)`} strokeWidth="8" d="M454 135 C457 111 474 95 492 99 C515 103 528 122 525 143 C522 157 512 167 500 173 Z"/></BearPart>
 <path id={`${uid}-ear-highlights`} data-part="ear-highlights" fill="none" stroke="#c7976e" strokeWidth="9" d="M43 193 C42 150 83 124 115 137 M439 111 C454 66 505 63 536 93"/>
 <path id={`${uid}-head`} data-part="head" fill={`url(#${uid}-fur)`} d="M159 165 C188 139 220 122 249 112 C270 80 295 63 307 66 C319 70 307 93 302 103 C325 87 345 78 355 86 C367 94 351 113 335 120 C364 96 402 116 429 125 C462 137 508 168 534 215 C553 249 548 273 571 299 C587 317 586 333 565 330 C583 350 581 374 568 384 L562 376 C550 424 513 465 472 491 C399 534 231 549 151 500 C132 489 122 476 115 452 C109 470 88 452 93 410 C73 425 72 403 81 378 C94 344 88 298 96 263 C103 224 120 191 142 178 Z"/>
 <path id={`${uid}-face-shadow`} data-part="face-shadow" fill="#875839" stroke="none" d="M94 411 C111 456 153 483 213 492 C360 515 499 475 559 376 C551 426 515 466 472 491 C391 541 231 543 151 500 C130 486 121 474 115 452 C107 464 96 449 94 411 Z"/>
 <path id={`${uid}-head-highlight`} data-part="head-highlight" fill="none" stroke="#c2946b" strokeWidth="8" d="M165 170 C194 148 224 132 252 122 C269 101 287 81 303 77 M357 117 C383 119 404 125 426 131"/>
 <path id={`${uid}-muzzle`} data-part="muzzle" stroke="none" fill={`url(#${uid}-tan)`} d="M255 367 C264 337 276 316 284 290 C292 265 309 252 335 257 C365 258 382 281 398 305 C416 324 435 341 441 369 C454 412 430 453 399 463 C366 474 312 470 286 454 C258 436 247 402 255 367 Z"/>
 <path id={`${uid}-left-brow`} data-part="left-brow" stroke="none" fill="#60381e" d="M184 235 C190 220 207 211 216 214 C228 221 210 229 201 233 C190 244 178 251 184 235 Z"/>
 <path id={`${uid}-right-brow`} data-part="right-brow" stroke="none" fill="#60381e" d="M410 190 C411 175 435 180 448 192 C463 209 439 201 428 199 C417 198 409 195 410 190 Z"/>
 <motion.g className="picko-eyes" style={{ transformBox: "fill-box", transformOrigin: "center" }} animate={{ scaleY: reduce ? 1 : [1, 1, 0.08, 1, 1] }} transition={{ duration: 5, times: [0, 0.43, 0.45, 0.47, 1], repeat: Infinity }}><path id={`${uid}-left-eye`} data-part="left-eye" fill="#fffaf0" strokeWidth="6" d="M201 336 C187 315 194 287 210 278 C232 266 252 282 256 303 L254 331 C235 326 215 333 201 336 Z"/>
 <clipPath id={`${uid}-left-eye-clip`}><use href={`#${uid}-left-eye`} /></clipPath><g clipPath={`url(#${uid}-left-eye-clip)`}><path id={`${uid}-left-pupil`} data-part="left-pupil" stroke="none" fill="#633d26" d="M219 331 C207 317 210 297 221 291 C237 283 251 295 255 307 L254 331 Z"/></g>
 <path id={`${uid}-right-eye`} data-part="right-eye" fill="#fffaf0" strokeWidth="6" d="M408 306 C395 284 404 252 421 242 C442 232 462 247 466 267 L463 294 C443 291 423 299 408 306 Z"/>
 <clipPath id={`${uid}-right-eye-clip`}><use href={`#${uid}-right-eye`} /></clipPath><g clipPath={`url(#${uid}-right-eye-clip)`}><path id={`${uid}-right-pupil`} data-part="right-pupil" stroke="none" fill="#633d26" d="M409 304 C402 287 408 262 422 258 C440 251 451 266 450 293 Z"/></g>
 <g className="eye-highlights" fill="#fffdf5" stroke="none"><ellipse cx="240" cy="299" rx="6" ry="6"/><ellipse cx="436" cy="268" rx="6" ry="6"/></g>
 </motion.g><g fill="#d98265" stroke="none"><ellipse cx="187" cy="373" rx="34" ry="21" transform="rotate(-11 187 373)"/><ellipse cx="493" cy="321" rx="33" ry="21" transform="rotate(-10 493 321)"/></g>
 <path id={`${uid}-mouth`} data-part="mouth" fill="#64351f" strokeWidth="7" d="M304 387 C326 394 376 387 394 373 C394 412 377 435 354 434 C329 435 313 415 304 387 Z"/>
 <path id={`${uid}-tongue`} data-part="tongue" fill="#df8064" stroke="none" d="M324 412 C337 399 362 403 376 414 C367 433 340 433 324 412 Z"/>
 <path id={`${uid}-smile`} data-part="smile" fill="none" strokeWidth="9" d="M285 370 C298 402 331 392 349 378 C375 391 405 374 409 349 M349 350 L349 376"/>
 <BearPart zone="nose"><path id={`${uid}-nose`} data-part="nose" strokeWidth="5" fill="#64371f" d="M301 324 C300 306 339 297 367 302 C393 305 381 328 368 343 C348 365 309 348 301 324 Z"/>
 <path id={`${uid}-nose-shine`} data-part="nose-shine" stroke="none" fill="#ba8b61" d="M319 314 C331 307 353 305 366 308 C355 317 333 322 319 314 Z"/></BearPart>
 <path id={`${uid}-arm-line`} data-part="arm-line" fill="none" strokeWidth="8" d="M532 550 C540 567 547 585 552 606 M153 503 C182 517 220 525 249 527"/>
 
 
 <path id={`${uid}-bow-shadow`} data-part="bow-shadow" stroke="none" fill="#b18158" d="M294 548 C284 583 298 610 326 596 L363 577 C380 573 414 591 438 584 C463 581 458 551 447 528 Z"/>
 <BearPart zone="bow"><path id={`${uid}-bow-left`} data-part="bow-left" fill={`url(#${uid}-blue)`} strokeWidth="9" d="M352 528 C330 513 306 499 292 511 C280 520 287 543 290 550 C284 573 295 592 311 588 C328 582 344 565 354 559 Z"/>
 <path id={`${uid}-bow-right`} data-part="bow-right" fill={`url(#${uid}-blue)`} strokeWidth="9" d="M387 526 C407 506 423 481 437 491 C447 497 445 518 449 539 C455 563 444 573 428 568 C413 568 397 559 385 552 Z"/>
 <path id={`${uid}-bow-folds`} data-part="bow-folds" strokeWidth="4" fill="none" d="M324 536 L347 541 L332 553 M391 536 L411 524 M390 544 L413 551"/>
 <path id={`${uid}-bow-knot`} data-part="bow-knot" fill={`url(#${uid}-blue)`} strokeWidth="8" d="M355 524 C364 516 381 518 386 528 C390 538 388 551 380 557 C370 563 355 556 352 548 C349 539 349 530 355 524 Z"/></BearPart>
 <path id={`${uid}-resting-paw`} data-part="resting-paw" fill={`url(#${uid}-fur)`} d="M153 601 C188 589 221 599 254 609 C300 623 323 648 320 676 C320 699 305 721 281 722 C252 737 225 712 197 714 C151 716 114 720 89 701 C68 685 65 661 69 635"/>
 <path id={`${uid}-paw-shadow`} data-part="paw-shadow" stroke="none" fill="#805134" d="M78 659 C89 683 115 688 144 686 C179 685 209 700 237 708 C266 718 300 709 317 688 C312 708 297 721 280 722 C251 735 223 714 197 714 C149 717 114 719 90 702 C79 692 74 675 78 659 Z"/>
 <path id={`${uid}-paw-details`} data-part="paw-details" fill="none" strokeWidth="7" d="M198 593 L205 575 M265 689 C276 696 278 706 275 719 M296 672 C306 680 309 689 309 700"/>
 <path id={`${uid}-paw-shine`} data-part="paw-shine" fill="none" stroke="#c69872" strokeWidth="7" d="M165 603 C209 600 286 625 306 654"/>
</g>
</>}</BearInteraction.Provider></motion.svg>);
}
