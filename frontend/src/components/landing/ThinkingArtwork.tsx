"use client";
import BearPart, { BearInteraction } from "./BearPart";
import { useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
export default function ThinkingArtwork({uid}: {uid: string}) {
const preference=useReducedMotion();
const {reduced}=useContext(BearInteraction);
const reduce=preference || reduced;
return <>
<defs>
 <linearGradient id={`${uid}-thinking-fur`} data-part="fur" x2="0.8" y2="1"><stop stopColor="#a77a52"/><stop offset="1" stopColor="#956540"/></linearGradient>
 <linearGradient id={`${uid}-thinking-tan`} data-part="tan" x2="0.7" y2="1"><stop stopColor="#eac08c"/><stop offset="1" stopColor="#d9a773"/></linearGradient>
 <linearGradient id={`${uid}-thinking-blue`} data-part="blue" x2="0.4" y2="1"><stop stopColor="#588dbe"/><stop offset="1" stopColor="#386eaa"/></linearGradient>
</defs>
<g stroke="#59351f" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round">
 <path id={`${uid}-thinking-body`} data-part="body" fill={`url(#${uid}-thinking-fur)`} d="M162 497 C105 530 65 591 67 645 C64 695 92 716 144 711 C282 723 452 716 540 682 C570 653 553 542 511 455 Z"/>
 
 <BearPart zone="belly"><path id={`${uid}-thinking-belly`} data-part="belly" stroke="none" fill={`url(#${uid}-thinking-tan)`} d="M243 667 C246 614 280 562 319 548 C354 526 405 537 442 564 C479 592 505 630 518 667 Z"/></BearPart>
 <path id={`${uid}-thinking-neck-shadow`} data-part="neck-shadow" stroke="none" fill="#835438" d="M154 498 C245 540 391 540 487 473 C461 518 419 551 365 558 C290 565 201 548 154 519 Z"/>
 <BearPart zone="left-ear"><path id={`${uid}-thinking-left-ear`} data-part="left-ear" fill={`url(#${uid}-thinking-fur)`} d="M160 158 C141 117 100 110 68 128 C35 146 20 182 32 221 C41 251 68 271 112 264 Z"/>
 <path id={`${uid}-thinking-left-inner-ear`} data-part="left-inner-ear" fill={`url(#${uid}-thinking-tan)`} strokeWidth="8" d="M143 186 C127 160 107 155 91 166 C66 181 64 205 78 224 C86 233 96 237 110 238 Z"/></BearPart>
 <BearPart zone="right-ear"><path id={`${uid}-thinking-right-ear`} data-part="right-ear" fill={`url(#${uid}-thinking-fur)`} d="M426 121 C431 76 459 56 490 57 C526 55 558 86 562 117 C572 155 549 183 509 191 Z"/>
 <path id={`${uid}-thinking-right-inner-ear`} data-part="right-inner-ear" fill={`url(#${uid}-thinking-tan)`} strokeWidth="8" d="M454 135 C457 111 474 95 492 99 C515 103 528 122 525 143 C522 157 512 167 500 173 Z"/></BearPart>
 <path id={`${uid}-thinking-ear-highlights`} data-part="ear-highlights" fill="none" stroke="#c7976e" strokeWidth="9" d="M43 193 C42 150 83 124 115 137 M439 111 C454 66 505 63 536 93"/>
 <path id={`${uid}-thinking-head`} data-part="head" fill={`url(#${uid}-thinking-fur)`} d="M159 165 C188 139 220 122 249 112 C270 80 295 63 307 66 C319 70 307 93 302 103 C325 87 345 78 355 86 C367 94 351 113 335 120 C364 96 402 116 429 125 C462 137 508 168 534 215 C553 249 548 273 571 299 C587 317 586 333 565 330 C583 350 581 374 568 384 L562 376 C550 424 513 465 472 491 C399 534 231 549 151 500 C132 489 122 476 115 452 C109 470 88 452 93 410 C73 425 72 403 81 378 C94 344 88 298 96 263 C103 224 120 191 142 178 Z"/>
 <path id={`${uid}-thinking-face-shadow`} data-part="face-shadow" fill="#875839" stroke="none" d="M94 411 C111 456 153 483 213 492 C360 515 499 475 559 376 C551 426 515 466 472 491 C391 541 231 543 151 500 C130 486 121 474 115 452 C107 464 96 449 94 411 Z"/>
 <path id={`${uid}-thinking-head-highlight`} data-part="head-highlight" fill="none" stroke="#c2946b" strokeWidth="8" d="M165 170 C194 148 224 132 252 122 C269 101 287 81 303 77 M357 117 C383 119 404 125 426 131"/>
 <path id={`${uid}-thinking-muzzle`} data-part="muzzle" stroke="none" fill={`url(#${uid}-thinking-tan)`} d="M255 367 C264 337 276 316 284 290 C292 265 309 252 335 257 C365 258 382 281 398 305 C416 324 435 341 441 369 C454 412 430 453 399 463 C366 474 312 470 286 454 C258 436 247 402 255 367 Z"/>
 <path id={`${uid}-thinking-left-brow`} data-part="left-brow" stroke="none" fill="#60381e" d="M174 244 C184 218 205 208 224 218 C206 220 189 231 180 247 Z"/>
 <path id={`${uid}-thinking-right-brow`} data-part="right-brow" stroke="none" fill="#60381e" d="M403 202 C414 185 442 178 457 190 C438 188 419 197 407 209 Z"/>
 <path id={`${uid}-thinking-left-eye`} data-part="left-eye" fill="#fffaf0" strokeWidth="6" d="M190 316 C188 290 203 270 226 271 C250 272 262 294 255 319 C235 330 211 330 190 316 Z"/>
 <clipPath id={`${uid}-thinking-left-eye-clip`}><use href={`#${uid}-thinking-left-eye`} /></clipPath><g clipPath={`url(#${uid}-thinking-left-eye-clip)`}><g id={`${uid}-thinking-left-pupil`} data-part="left-pupil" stroke="none"><ellipse cx="237" cy="298" rx="19" ry="25" fill="#815334"/><ellipse cx="237" cy="299" rx="13" ry="19" fill="#38251d"/><ellipse cx="232" cy="288" rx="5.5" ry="6.5" fill="#fffdf5"/><circle cx="244" cy="306" r="2.5" fill="#f3d5ac" opacity=".8"/></g></g>
 <path id={`${uid}-thinking-right-eye`} data-part="right-eye" fill="#fffaf0" strokeWidth="6" d="M401 283 C398 260 414 240 437 242 C460 244 473 263 465 286 C444 297 420 298 401 283 Z"/>
 <clipPath id={`${uid}-thinking-right-eye-clip`}><use href={`#${uid}-thinking-right-eye`} /></clipPath><g clipPath={`url(#${uid}-thinking-right-eye-clip)`}><g id={`${uid}-thinking-right-pupil`} data-part="right-pupil" stroke="none"><ellipse cx="446" cy="268" rx="19" ry="25" fill="#815334"/><ellipse cx="446" cy="269" rx="13" ry="19" fill="#38251d"/><ellipse cx="441" cy="258" rx="5.5" ry="6.5" fill="#fffdf5"/><circle cx="453" cy="276" r="2.5" fill="#f3d5ac" opacity=".8"/></g></g>
 
 <g fill="#d98265" stroke="none"><ellipse cx="187" cy="373" rx="34" ry="21" transform="rotate(-11 187 373)"/><ellipse cx="493" cy="321" rx="33" ry="21" transform="rotate(-10 493 321)"/></g>
 
 
 
 <path id={`${uid}-thinking-thoughtful-mouth`} data-part="thoughtful-mouth" fill="none" strokeWidth="8" d="M329 400 Q354 391 378 399 M348 352 L348 374"/>
<BearPart zone="nose"><path id={`${uid}-thinking-nose`} data-part="nose" strokeWidth="5" fill="#64371f" d="M301 324 C300 306 339 297 367 302 C393 305 381 328 368 343 C348 365 309 348 301 324 Z"/>
 <path id={`${uid}-thinking-nose-shine`} data-part="nose-shine" stroke="none" fill="#ba8b61" d="M319 314 C331 307 353 305 366 308 C355 317 333 322 319 314 Z"/></BearPart>
 
 
 
 <path id={`${uid}-thinking-bow-shadow`} data-part="bow-shadow" stroke="none" fill="#b18158" d="M294 548 C284 583 298 610 326 596 L363 577 C380 573 414 591 438 584 C463 581 458 551 447 528 Z"/>
 <BearPart zone="bow"><path id={`${uid}-thinking-bow-left`} data-part="bow-left" fill={`url(#${uid}-thinking-blue)`} strokeWidth="9" d="M352 528 C330 513 306 499 292 511 C280 520 287 543 290 550 C284 573 295 592 311 588 C328 582 344 565 354 559 Z"/>
 <path id={`${uid}-thinking-bow-right`} data-part="bow-right" fill={`url(#${uid}-thinking-blue)`} strokeWidth="9" d="M387 526 C407 506 423 481 437 491 C447 497 445 518 449 539 C455 563 444 573 428 568 C413 568 397 559 385 552 Z"/>
 <path id={`${uid}-thinking-bow-folds`} data-part="bow-folds" strokeWidth="4" fill="none" d="M324 536 L347 541 L332 553 M391 536 L411 524 M390 544 L413 551"/>
 <path id={`${uid}-thinking-bow-knot`} data-part="bow-knot" fill={`url(#${uid}-thinking-blue)`} strokeWidth="8" d="M355 524 C364 516 381 518 386 528 C390 538 388 551 380 557 C370 563 355 556 352 548 C349 539 349 530 355 524 Z"/></BearPart>
 <path id={`${uid}-thinking-resting-paw`} data-part="resting-paw" fill={`url(#${uid}-thinking-fur)`} d="M153 601 C188 589 221 599 254 609 C300 623 323 648 320 676 C320 699 305 721 281 722 C252 737 225 712 197 714 C151 716 114 720 89 701 C68 685 65 661 69 635"/>
 <path id={`${uid}-thinking-paw-shadow`} data-part="paw-shadow" stroke="none" fill="#805134" d="M78 659 C89 683 115 688 144 686 C179 685 209 700 237 708 C266 718 300 709 317 688 C312 708 297 721 280 722 C251 735 223 714 197 714 C149 717 114 719 90 702 C79 692 74 675 78 659 Z"/>
 <path id={`${uid}-thinking-paw-details`} data-part="paw-details" fill="none" strokeWidth="7" d="M198 593 L205 575 M265 689 C276 696 278 706 275 719 M296 672 C306 680 309 689 309 700"/>
 <path id={`${uid}-thinking-paw-shine`} data-part="paw-shine" fill="none" stroke="#c69872" strokeWidth="7" d="M165 603 C209 600 286 625 306 654"/>
<g id={`${uid}-thinking-thinking-paw`} data-part="thinking-paw"><path fill={`url(#${uid}-thinking-fur)`} d="M521 634 C560 633 577 602 565 569 C553 535 519 482 479 441 C469 417 447 406 425 410 C402 399 377 414 375 435 C367 458 391 479 420 482 C439 488 454 485 460 479 C479 509 489 542 489 567 C463 594 479 636 521 634 Z"/><path fill="#805033" stroke="none" d="M547 577 C558 602 542 620 520 620 C500 622 483 612 482 601 C476 625 495 638 521 634 C557 633 578 602 565 569 C548 533 515 482 479 441 L467 465 C509 512 533 549 547 577 Z"/><path fill="none" stroke="#c39570" strokeWidth="7" d="M507 552 Q494 522 477 505 M387 438 Q389 450 405 455"/><path fill="none" strokeWidth="6" d="M398 432 Q404 429 410 433 M418 426 Q424 423 430 427"/></g>
</g>
<motion.g initial={false} animate={reduce ? {} : { y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} id={`${uid}-thinking-thought-bubbles`} data-part="thought-bubbles" fill="#fffaf0" stroke="#9b7856" strokeWidth="5"><circle id={`${uid}-thinking-thought-one`} data-part="thought-one" cx="555" cy="240" r="12"/><circle id={`${uid}-thinking-thought-two`} data-part="thought-two" cx="596" cy="204" r="20"/><path id={`${uid}-thinking-thought-cloud`} data-part="thought-cloud" d="M594 112 C578 84 603 58 630 65 C641 37 680 43 688 63 C719 55 739 84 725 107 C743 134 722 159 694 155 C676 177 646 164 642 152 C615 159 590 139 594 112 Z"/><g fill="#588dbe" stroke="none"><circle cx="626" cy="110" r="7"/><circle cx="657" cy="110" r="7"/><circle cx="688" cy="110" r="7"/></g></motion.g>
</>;
}
