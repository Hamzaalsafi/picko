import { motion, useReducedMotion } from "framer-motion";
import BearPart from "./BearPart";
import type { PickoPose } from "./Picko";
export default function ExpressionArtwork({
  pose,
  uid,
  delighted = false,
}: {
  pose: PickoPose;
  uid: string;
  delighted?: boolean;
}) {
  const reduced = useReducedMotion();
  const expressionTransition = { duration: reduced ? 0 : 0.36, ease: [0.22, 1, 0.36, 1] as const };
  switch (pose) {
    case "neutral":
      return (
        <>
          <defs>
            <linearGradient
              id={`${uid}-neutral-fur`}
              data-part="fur"
              x2="0.8"
              y2="1"
            >
              <stop stopColor="#a77a52" />
              <stop offset="1" stopColor="#956540" />
            </linearGradient>
            <linearGradient
              id={`${uid}-neutral-tan`}
              data-part="tan"
              x2="0.7"
              y2="1"
            >
              <stop stopColor="#eac08c" />
              <stop offset="1" stopColor="#d9a773" />
            </linearGradient>
            <linearGradient
              id={`${uid}-neutral-blue`}
              data-part="blue"
              x2="0.4"
              y2="1"
            >
              <stop stopColor="#588dbe" />
              <stop offset="1" stopColor="#386eaa" />
            </linearGradient>
          </defs>
          <g
            stroke="#59351f"
            strokeWidth="10"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <path
              id={`${uid}-neutral-body`}
              data-part="body"
              fill={`url(#${uid}-neutral-fur)`}
              d="M162 497 C105 530 65 591 67 645 C64 695 92 716 144 711 C282 723 452 716 540 682 C570 653 553 542 511 455 Z"
            />

            <BearPart zone="belly">
              <path
                id={`${uid}-neutral-belly`}
                data-part="belly"
                stroke="none"
                fill={`url(#${uid}-neutral-tan)`}
                d="M243 667 C246 614 280 562 319 548 C354 526 405 537 442 564 C479 592 505 630 518 667 Z"
              />
            </BearPart>
            <path
              id={`${uid}-neutral-neck-shadow`}
              data-part="neck-shadow"
              stroke="none"
              fill="#835438"
              d="M154 498 C245 540 391 540 487 473 C461 518 419 551 365 558 C290 565 201 548 154 519 Z"
            />
            <BearPart zone="left-ear">
              <path
                id={`${uid}-neutral-left-ear`}
                data-part="left-ear"
                fill={`url(#${uid}-neutral-fur)`}
                d="M160 158 C141 117 100 110 68 128 C35 146 20 182 32 221 C41 251 68 271 112 264 Z"
              />
              <path
                id={`${uid}-neutral-left-inner-ear`}
                data-part="left-inner-ear"
                fill={`url(#${uid}-neutral-tan)`}
                strokeWidth="8"
                d="M143 186 C127 160 107 155 91 166 C66 181 64 205 78 224 C86 233 96 237 110 238 Z"
              />
            </BearPart>
            <BearPart zone="right-ear">
              <path
                id={`${uid}-neutral-right-ear`}
                data-part="right-ear"
                fill={`url(#${uid}-neutral-fur)`}
                d="M426 121 C431 76 459 56 490 57 C526 55 558 86 562 117 C572 155 549 183 509 191 Z"
              />
              <path
                id={`${uid}-neutral-right-inner-ear`}
                data-part="right-inner-ear"
                fill={`url(#${uid}-neutral-tan)`}
                strokeWidth="8"
                d="M454 135 C457 111 474 95 492 99 C515 103 528 122 525 143 C522 157 512 167 500 173 Z"
              />
            </BearPart>
            <path
              id={`${uid}-neutral-ear-highlights`}
              data-part="ear-highlights"
              fill="none"
              stroke="#c7976e"
              strokeWidth="9"
              d="M43 193 C42 150 83 124 115 137 M439 111 C454 66 505 63 536 93"
            />
            <path
              id={`${uid}-neutral-head`}
              data-part="head"
              fill={`url(#${uid}-neutral-fur)`}
              d="M159 165 C188 139 220 122 249 112 C270 80 295 63 307 66 C319 70 307 93 302 103 C325 87 345 78 355 86 C367 94 351 113 335 120 C364 96 402 116 429 125 C462 137 508 168 534 215 C553 249 548 273 571 299 C587 317 586 333 565 330 C583 350 581 374 568 384 L562 376 C550 424 513 465 472 491 C399 534 231 549 151 500 C132 489 122 476 115 452 C109 470 88 452 93 410 C73 425 72 403 81 378 C94 344 88 298 96 263 C103 224 120 191 142 178 Z"
            />
            <path
              id={`${uid}-neutral-face-shadow`}
              data-part="face-shadow"
              fill="#875839"
              stroke="none"
              d="M94 411 C111 456 153 483 213 492 C360 515 499 475 559 376 C551 426 515 466 472 491 C391 541 231 543 151 500 C130 486 121 474 115 452 C107 464 96 449 94 411 Z"
            />
            <path
              id={`${uid}-neutral-head-highlight`}
              data-part="head-highlight"
              fill="none"
              stroke="#c2946b"
              strokeWidth="8"
              d="M165 170 C194 148 224 132 252 122 C269 101 287 81 303 77 M357 117 C383 119 404 125 426 131"
            />
            <path
              id={`${uid}-neutral-muzzle`}
              data-part="muzzle"
              stroke="none"
              fill={`url(#${uid}-neutral-tan)`}
              d="M255 367 C264 337 276 316 284 290 C292 265 309 252 335 257 C365 258 382 281 398 305 C416 324 435 341 441 369 C454 412 430 453 399 463 C366 474 312 470 286 454 C258 436 247 402 255 367 Z"
            />
            <path
              id={`${uid}-neutral-left-brow`}
              data-part="left-brow"
              stroke="none"
              fill="#60381e"
              d="M184 235 C190 220 207 211 216 214 C228 221 210 229 201 233 C190 244 178 251 184 235 Z"
            />
            <path
              id={`${uid}-neutral-right-brow`}
              data-part="right-brow"
              stroke="none"
              fill="#60381e"
              d="M410 190 C411 175 435 180 448 192 C463 209 439 201 428 199 C417 198 409 195 410 190 Z"
            />
            <g className="expression-blink"><path
              id={`${uid}-neutral-left-eye`}
              data-part="left-eye"
              fill="#fffaf0"
              strokeWidth="6"
              d="M201 336 C187 315 194 287 210 278 C232 266 252 282 256 303 L254 331 C235 326 215 333 201 336 Z"
            />
            <clipPath id={`${uid}-neutral-left-eye-clip`}>
              <use href={`#${uid}-neutral-left-eye`} />
            </clipPath>
            <g clipPath={`url(#${uid}-neutral-left-eye-clip)`}>
              <g id={`${uid}-neutral-left-pupil`} data-part="left-pupil" stroke="none"><ellipse cx="233" cy="313" rx="19" ry="25" fill="#815334"/><ellipse cx="233" cy="314" rx="13" ry="19" fill="#38251d"/><ellipse cx="228" cy="303" rx="5.5" ry="6.5" fill="#fffdf5"/><circle cx="240" cy="321" r="2.5" fill="#f3d5ac" opacity=".8"/></g>
            </g>
            <path
              id={`${uid}-neutral-right-eye`}
              data-part="right-eye"
              fill="#fffaf0"
              strokeWidth="6"
              d="M408 306 C395 284 404 252 421 242 C442 232 462 247 466 267 L463 294 C443 291 423 299 408 306 Z"
            />
            <clipPath id={`${uid}-neutral-right-eye-clip`}>
              <use href={`#${uid}-neutral-right-eye`} />
            </clipPath>
            <g clipPath={`url(#${uid}-neutral-right-eye-clip)`}>
              <g id={`${uid}-neutral-right-pupil`} data-part="right-pupil" stroke="none"><ellipse cx="432" cy="283" rx="19" ry="25" fill="#815334"/><ellipse cx="432" cy="284" rx="13" ry="19" fill="#38251d"/><ellipse cx="427" cy="273" rx="5.5" ry="6.5" fill="#fffdf5"/><circle cx="439" cy="291" r="2.5" fill="#f3d5ac" opacity=".8"/></g>
            </g>
            </g>
            <g fill="#cf9477" stroke="none">
              <ellipse
                cx="187"
                cy="373"
                rx="34"
                ry="21"
                transform="rotate(-11 187 373)"
              />
              <ellipse
                cx="493"
                cy="321"
                rx="33"
                ry="21"
                transform="rotate(-10 493 321)"
              />
            </g>

            <motion.path data-part="reaction-mouth" fill="#64371f" strokeWidth="6" initial={false}
              animate={{d: delighted ? "M309 384 C331 399 369 395 393 376 C395 412 379 442 353 443 C327 444 312 419 309 384 Z" : "M323 390 C339 398 356 396 373 386 C367 394 359 399 349 399 C338 399 328 395 323 390 Z"}}
              transition={expressionTransition}/>
            <motion.path data-part="reaction-tongue" fill="#df927a" stroke="none" d="M329 425 Q353 409 376 426 Q354 450 329 425 Z" initial={false} animate={{opacity:delighted?1:0}} transition={expressionTransition}/>
            <path data-part="neutral-mouth" fill="none" strokeWidth="7" d="M349 351 L349 375"/>
            <BearPart zone="nose">
              <path
                id={`${uid}-neutral-nose`}
                data-part="nose"
                strokeWidth="5"
                fill="#64371f"
                d="M301 324 C300 306 339 297 367 302 C393 305 381 328 368 343 C348 365 309 348 301 324 Z"
              />
              <path
                id={`${uid}-neutral-nose-shine`}
                data-part="nose-shine"
                stroke="none"
                fill="#ba8b61"
                d="M319 314 C331 307 353 305 366 308 C355 317 333 322 319 314 Z"
              />
            </BearPart>

            <path
              id={`${uid}-neutral-bow-shadow`}
              data-part="bow-shadow"
              stroke="none"
              fill="#b18158"
              d="M294 548 C284 583 298 610 326 596 L363 577 C380 573 414 591 438 584 C463 581 458 551 447 528 Z"
            />
            <BearPart zone="bow">
              <path
                id={`${uid}-neutral-bow-left`}
                data-part="bow-left"
                fill={`url(#${uid}-neutral-blue)`}
                strokeWidth="9"
                d="M352 528 C330 513 306 499 292 511 C280 520 287 543 290 550 C284 573 295 592 311 588 C328 582 344 565 354 559 Z"
              />
              <path
                id={`${uid}-neutral-bow-right`}
                data-part="bow-right"
                fill={`url(#${uid}-neutral-blue)`}
                strokeWidth="9"
                d="M387 526 C407 506 423 481 437 491 C447 497 445 518 449 539 C455 563 444 573 428 568 C413 568 397 559 385 552 Z"
              />
              <path
                id={`${uid}-neutral-bow-folds`}
                data-part="bow-folds"
                strokeWidth="4"
                fill="none"
                d="M324 536 L347 541 L332 553 M391 536 L411 524 M390 544 L413 551"
              />
              <path
                id={`${uid}-neutral-bow-knot`}
                data-part="bow-knot"
                fill={`url(#${uid}-neutral-blue)`}
                strokeWidth="8"
                d="M355 524 C364 516 381 518 386 528 C390 538 388 551 380 557 C370 563 355 556 352 548 C349 539 349 530 355 524 Z"
              />
            </BearPart>
            <path
              id={`${uid}-neutral-resting-paw`}
              data-part="resting-paw"
              fill={`url(#${uid}-neutral-fur)`}
              d="M153 601 C188 589 221 599 254 609 C300 623 323 648 320 676 C320 699 305 721 281 722 C252 737 225 712 197 714 C151 716 114 720 89 701 C68 685 65 661 69 635"
            />
            <path
              id={`${uid}-neutral-paw-shadow`}
              data-part="paw-shadow"
              stroke="none"
              fill="#805134"
              d="M78 659 C89 683 115 688 144 686 C179 685 209 700 237 708 C266 718 300 709 317 688 C312 708 297 721 280 722 C251 735 223 714 197 714 C149 717 114 719 90 702 C79 692 74 675 78 659 Z"
            />
            <path
              id={`${uid}-neutral-paw-details`}
              data-part="paw-details"
              fill="none"
              strokeWidth="7"
              d="M198 593 L205 575 M265 689 C276 696 278 706 275 719 M296 672 C306 680 309 689 309 700"
            />
            <path
              id={`${uid}-neutral-paw-shine`}
              data-part="paw-shine"
              fill="none"
              stroke="#c69872"
              strokeWidth="7"
              d="M165 603 C209 600 286 625 306 654"
            />
            <g
              id={`${uid}-neutral-resting-right-paw`}
              data-part="resting-right-paw"
              fill={`url(#${uid}-neutral-fur)`}
            >
              <path d="M513 579 C549 578 572 598 574 629 C585 659 565 683 532 686 C502 694 478 680 478 660 C469 637 485 604 513 579 Z" />
              <path
                fill="none"
                strokeWidth="5"
                d="M495 659 Q504 653 511 658 M512 672 Q522 664 530 669"
              />
              <path
                fill="none"
                stroke="#c39570"
                strokeWidth="7"
                d="M521 593 Q548 593 555 615"
              />
            </g>
          </g>
        </>
      );
    case "excited":
      return (
        <>
          <defs>
            <linearGradient
              id={`${uid}-excited-fur`}
              data-part="fur"
              x2="0.8"
              y2="1"
            >
              <stop stopColor="#a77a52" />
              <stop offset="1" stopColor="#956540" />
            </linearGradient>
            <linearGradient
              id={`${uid}-excited-tan`}
              data-part="tan"
              x2="0.7"
              y2="1"
            >
              <stop stopColor="#eac08c" />
              <stop offset="1" stopColor="#d9a773" />
            </linearGradient>
            <linearGradient
              id={`${uid}-excited-blue`}
              data-part="blue"
              x2="0.4"
              y2="1"
            >
              <stop stopColor="#588dbe" />
              <stop offset="1" stopColor="#386eaa" />
            </linearGradient>
          </defs>
          <g
            stroke="#59351f"
            strokeWidth="10"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <path
              id={`${uid}-excited-body`}
              data-part="body"
              fill={`url(#${uid}-excited-fur)`}
              d="M200 480 C165 510 143 555 149 604 C151 655 192 695 247 705 C304 719 389 719 443 701 C493 685 522 649 517 605 C513 554 487 509 461 481 Z"
            />

            <BearPart zone="belly">
              <path
                id={`${uid}-excited-belly`}
                data-part="belly"
                stroke="none"
                fill={`url(#${uid}-excited-tan)`}
                d="M274 569 C301 546 365 542 398 567 C431 593 451 653 425 680 C397 705 284 705 256 679 C235 652 245 596 274 569 Z"
              />
            </BearPart>
            <path
              id={`${uid}-excited-neck-shadow`}
              data-part="neck-shadow"
              stroke="none"
              fill="#835438"
              d="M154 498 C245 540 391 540 487 473 C461 518 419 551 365 558 C290 565 201 548 154 519 Z"
            />
            <BearPart zone="left-ear">
              <path
                id={`${uid}-excited-left-ear`}
                data-part="left-ear"
                fill={`url(#${uid}-excited-fur)`}
                d="M160 158 C141 117 100 110 68 128 C35 146 20 182 32 221 C41 251 68 271 112 264 Z"
              />
              <path
                id={`${uid}-excited-left-inner-ear`}
                data-part="left-inner-ear"
                fill={`url(#${uid}-excited-tan)`}
                strokeWidth="8"
                d="M143 186 C127 160 107 155 91 166 C66 181 64 205 78 224 C86 233 96 237 110 238 Z"
              />
            </BearPart>
            <BearPart zone="right-ear">
              <path
                id={`${uid}-excited-right-ear`}
                data-part="right-ear"
                fill={`url(#${uid}-excited-fur)`}
                d="M426 121 C431 76 459 56 490 57 C526 55 558 86 562 117 C572 155 549 183 509 191 Z"
              />
              <path
                id={`${uid}-excited-right-inner-ear`}
                data-part="right-inner-ear"
                fill={`url(#${uid}-excited-tan)`}
                strokeWidth="8"
                d="M454 135 C457 111 474 95 492 99 C515 103 528 122 525 143 C522 157 512 167 500 173 Z"
              />
            </BearPart>
            <path
              id={`${uid}-excited-ear-highlights`}
              data-part="ear-highlights"
              fill="none"
              stroke="#c7976e"
              strokeWidth="9"
              d="M43 193 C42 150 83 124 115 137 M439 111 C454 66 505 63 536 93"
            />
            <path
              id={`${uid}-excited-head`}
              data-part="head"
              fill={`url(#${uid}-excited-fur)`}
              d="M159 165 C188 139 220 122 249 112 C270 80 295 63 307 66 C319 70 307 93 302 103 C325 87 345 78 355 86 C367 94 351 113 335 120 C364 96 402 116 429 125 C462 137 508 168 534 215 C553 249 548 273 571 299 C587 317 586 333 565 330 C583 350 581 374 568 384 L562 376 C550 424 513 465 472 491 C399 534 231 549 151 500 C132 489 122 476 115 452 C109 470 88 452 93 410 C73 425 72 403 81 378 C94 344 88 298 96 263 C103 224 120 191 142 178 Z"
            />
            <path
              id={`${uid}-excited-face-shadow`}
              data-part="face-shadow"
              fill="#875839"
              stroke="none"
              d="M94 411 C111 456 153 483 213 492 C360 515 499 475 559 376 C551 426 515 466 472 491 C391 541 231 543 151 500 C130 486 121 474 115 452 C107 464 96 449 94 411 Z"
            />
            <path
              id={`${uid}-excited-head-highlight`}
              data-part="head-highlight"
              fill="none"
              stroke="#c2946b"
              strokeWidth="8"
              d="M165 170 C194 148 224 132 252 122 C269 101 287 81 303 77 M357 117 C383 119 404 125 426 131"
            />
            <path
              id={`${uid}-excited-muzzle`}
              data-part="muzzle"
              stroke="none"
              fill={`url(#${uid}-excited-tan)`}
              d="M255 367 C264 337 276 316 284 290 C292 265 309 252 335 257 C365 258 382 281 398 305 C416 324 435 341 441 369 C454 412 430 453 399 463 C366 474 312 470 286 454 C258 436 247 402 255 367 Z"
            />
            <path
              id={`${uid}-excited-left-brow`}
              data-part="left-brow"
              stroke="none"
              fill="#60381e"
              d="M178 239 C183 213 204 201 222 209 C204 211 189 225 184 241 Z"
            />
            <path
              id={`${uid}-excited-right-brow`}
              data-part="right-brow"
              stroke="none"
              fill="#60381e"
              d="M407 187 C411 165 439 167 454 180 C436 176 419 180 414 190 Z"
            />
            <g className="expression-blink"><path
              id={`${uid}-excited-left-eye`}
              data-part="left-eye"
              fill="#fffaf0"
              strokeWidth="6"
              d="M191 320 C181 294 194 265 217 262 C242 259 260 284 257 310 C253 340 202 345 191 320 Z"
            />
            <clipPath id={`${uid}-excited-left-eye-clip`}>
              <use href={`#${uid}-excited-left-eye`} />
            </clipPath>
            <g clipPath={`url(#${uid}-excited-left-eye-clip)`}>
              <g id={`${uid}-excited-left-pupil`} data-part="left-pupil" stroke="none"><ellipse cx="233" cy="313" rx="19" ry="25" fill="#815334"/><ellipse cx="233" cy="314" rx="13" ry="19" fill="#38251d"/><ellipse cx="228" cy="303" rx="5.5" ry="6.5" fill="#fffdf5"/><circle cx="240" cy="321" r="2.5" fill="#f3d5ac" opacity=".8"/></g>
            </g>
            <path
              id={`${uid}-excited-right-eye`}
              data-part="right-eye"
              fill="#fffaf0"
              strokeWidth="6"
              d="M399 290 C389 264 404 232 428 230 C454 227 473 253 468 281 C463 313 410 317 399 290 Z"
            />
            <clipPath id={`${uid}-excited-right-eye-clip`}>
              <use href={`#${uid}-excited-right-eye`} />
            </clipPath>
            <g clipPath={`url(#${uid}-excited-right-eye-clip)`}>
              <g id={`${uid}-excited-right-pupil`} data-part="right-pupil" stroke="none"><ellipse cx="432" cy="283" rx="19" ry="25" fill="#815334"/><ellipse cx="432" cy="284" rx="13" ry="19" fill="#38251d"/><ellipse cx="427" cy="273" rx="5.5" ry="6.5" fill="#fffdf5"/><circle cx="439" cy="291" r="2.5" fill="#f3d5ac" opacity=".8"/></g>
            </g>
            </g>
            <g fill="#d98265" stroke="none">
              <ellipse
                cx="187"
                cy="373"
                rx="34"
                ry="21"
                transform="rotate(-11 187 373)"
              />
              <ellipse
                cx="493"
                cy="321"
                rx="33"
                ry="21"
                transform="rotate(-10 493 321)"
              />
            </g>
            <path
              id={`${uid}-excited-mouth`}
              data-part="mouth"
              fill="#64351f"
              strokeWidth="7"
              d="M302 382 Q349 404 398 366 C403 425 378 457 350 453 C318 450 303 421 302 382 Z"
            />
            <path
              id={`${uid}-excited-tongue`}
              data-part="tongue"
              fill="#df8064"
              stroke="none"
              d="M320 431 Q349 408 380 430 C365 457 340 455 320 431 Z"
            />
            <path
              id={`${uid}-excited-smile`}
              data-part="smile"
              fill="none"
              strokeWidth="9"
              d="M285 370 C298 402 331 392 349 378 C375 391 405 374 409 349 M349 350 L349 376"
            />
            <BearPart zone="nose">
              <path
                id={`${uid}-excited-nose`}
                data-part="nose"
                strokeWidth="5"
                fill="#64371f"
                d="M301 324 C300 306 339 297 367 302 C393 305 381 328 368 343 C348 365 309 348 301 324 Z"
              />
              <path
                id={`${uid}-excited-nose-shine`}
                data-part="nose-shine"
                stroke="none"
                fill="#ba8b61"
                d="M319 314 C331 307 353 305 366 308 C355 317 333 322 319 314 Z"
              />
            </BearPart>

            <path
              id={`${uid}-excited-bow-shadow`}
              data-part="bow-shadow"
              stroke="none"
              fill="#b18158"
              d="M294 548 C284 583 298 610 326 596 L363 577 C380 573 414 591 438 584 C463 581 458 551 447 528 Z"
            />
            <BearPart zone="bow">
              <path
                id={`${uid}-excited-bow-left`}
                data-part="bow-left"
                fill={`url(#${uid}-excited-blue)`}
                strokeWidth="9"
                d="M352 528 C330 513 306 499 292 511 C280 520 287 543 290 550 C284 573 295 592 311 588 C328 582 344 565 354 559 Z"
              />
              <path
                id={`${uid}-excited-bow-right`}
                data-part="bow-right"
                fill={`url(#${uid}-excited-blue)`}
                strokeWidth="9"
                d="M387 526 C407 506 423 481 437 491 C447 497 445 518 449 539 C455 563 444 573 428 568 C413 568 397 559 385 552 Z"
              />
              <path
                id={`${uid}-excited-bow-folds`}
                data-part="bow-folds"
                strokeWidth="4"
                fill="none"
                d="M324 536 L347 541 L332 553 M391 536 L411 524 M390 544 L413 551"
              />
              <path
                id={`${uid}-excited-bow-knot`}
                data-part="bow-knot"
                fill={`url(#${uid}-excited-blue)`}
                strokeWidth="8"
                d="M355 524 C364 516 381 518 386 528 C390 538 388 551 380 557 C370 563 355 556 352 548 C349 539 349 530 355 524 Z"
              />
            </BearPart>

            <g
              id={`${uid}-excited-excited-paws`}
              data-part="excited-paws"
              fill={`url(#${uid}-excited-fur)`}
            >
              <path d="M183 626 C207 636 231 621 237 596 L250 518 C270 509 281 491 272 474 C277 457 263 443 246 446 C233 434 214 441 210 456 C192 457 183 474 191 490 L174 554 C158 582 161 614 183 626 Z" />
              <path d="M481 622 C507 627 529 605 517 576 L478 494 C489 478 483 459 466 455 C458 438 438 437 428 450 C410 447 397 461 402 477 C395 496 408 512 426 515 L453 595 C458 610 467 620 481 622 Z" />
              <path
                fill="none"
                stroke="#c39570"
                strokeWidth="7"
                d="M216 467 Q230 451 246 460 M421 469 Q434 455 448 461"
              />
              <path
                fill="none"
                strokeWidth="5"
                d="M205 489 Q214 485 219 490 M424 493 Q432 488 439 494"
              />
            </g>
            <g
              id={`${uid}-excited-excited-feet`}
              data-part="excited-feet"
              fill={`url(#${uid}-excited-fur)`}
            >
              <path d="M217 655 C188 644 162 655 160 679 C157 702 181 721 214 722 C249 724 271 710 269 690 C267 672 242 661 217 655 Z" />
              <path d="M438 655 C467 644 493 655 495 679 C498 702 474 721 441 722 C406 724 384 710 386 690 C388 672 413 661 438 655 Z" />
              <ellipse
                stroke="none"
                fill={`url(#${uid}-excited-tan)`}
                cx="214"
                cy="689"
                rx="25"
                ry="18"
              />
              <ellipse
                stroke="none"
                fill={`url(#${uid}-excited-tan)`}
                cx="441"
                cy="689"
                rx="25"
                ry="18"
              />
            </g>
          </g>
        </>
      );
    case "confused":
      return (
        <>
          <defs>
            <linearGradient
              id={`${uid}-confused-fur`}
              data-part="fur"
              x2="0.8"
              y2="1"
            >
              <stop stopColor="#a77a52" />
              <stop offset="1" stopColor="#956540" />
            </linearGradient>
            <linearGradient
              id={`${uid}-confused-tan`}
              data-part="tan"
              x2="0.7"
              y2="1"
            >
              <stop stopColor="#eac08c" />
              <stop offset="1" stopColor="#d9a773" />
            </linearGradient>
            <linearGradient
              id={`${uid}-confused-blue`}
              data-part="blue"
              x2="0.4"
              y2="1"
            >
              <stop stopColor="#588dbe" />
              <stop offset="1" stopColor="#386eaa" />
            </linearGradient>
          </defs>
          <g
            stroke="#59351f"
            strokeWidth="10"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <path
              id={`${uid}-confused-body`}
              data-part="body"
              fill={`url(#${uid}-confused-fur)`}
              d="M162 497 C105 530 65 591 67 645 C64 695 92 716 144 711 C282 723 452 716 540 682 C570 653 553 542 511 455 Z"
            />

            <BearPart zone="belly">
              <path
                id={`${uid}-confused-belly`}
                data-part="belly"
                stroke="none"
                fill={`url(#${uid}-confused-tan)`}
                d="M243 667 C246 614 280 562 319 548 C354 526 405 537 442 564 C479 592 505 630 518 667 Z"
              />
            </BearPart>
            <path
              id={`${uid}-confused-neck-shadow`}
              data-part="neck-shadow"
              stroke="none"
              fill="#835438"
              d="M154 498 C245 540 391 540 487 473 C461 518 419 551 365 558 C290 565 201 548 154 519 Z"
            />
            <BearPart zone="left-ear">
              <path
                id={`${uid}-confused-left-ear`}
                data-part="left-ear"
                fill={`url(#${uid}-confused-fur)`}
                d="M160 158 C141 117 100 110 68 128 C35 146 20 182 32 221 C41 251 68 271 112 264 Z"
              />
              <path
                id={`${uid}-confused-left-inner-ear`}
                data-part="left-inner-ear"
                fill={`url(#${uid}-confused-tan)`}
                strokeWidth="8"
                d="M143 186 C127 160 107 155 91 166 C66 181 64 205 78 224 C86 233 96 237 110 238 Z"
              />
            </BearPart>
            <BearPart zone="right-ear">
              <path
                id={`${uid}-confused-right-ear`}
                data-part="right-ear"
                fill={`url(#${uid}-confused-fur)`}
                d="M426 121 C431 76 459 56 490 57 C526 55 558 86 562 117 C572 155 549 183 509 191 Z"
              />
              <path
                id={`${uid}-confused-right-inner-ear`}
                data-part="right-inner-ear"
                fill={`url(#${uid}-confused-tan)`}
                strokeWidth="8"
                d="M454 135 C457 111 474 95 492 99 C515 103 528 122 525 143 C522 157 512 167 500 173 Z"
              />
            </BearPart>
            <path
              id={`${uid}-confused-ear-highlights`}
              data-part="ear-highlights"
              fill="none"
              stroke="#c7976e"
              strokeWidth="9"
              d="M43 193 C42 150 83 124 115 137 M439 111 C454 66 505 63 536 93"
            />
            <path
              id={`${uid}-confused-head`}
              data-part="head"
              fill={`url(#${uid}-confused-fur)`}
              d="M159 165 C188 139 220 122 249 112 C270 80 295 63 307 66 C319 70 307 93 302 103 C325 87 345 78 355 86 C367 94 351 113 335 120 C364 96 402 116 429 125 C462 137 508 168 534 215 C553 249 548 273 571 299 C587 317 586 333 565 330 C583 350 581 374 568 384 L562 376 C550 424 513 465 472 491 C399 534 231 549 151 500 C132 489 122 476 115 452 C109 470 88 452 93 410 C73 425 72 403 81 378 C94 344 88 298 96 263 C103 224 120 191 142 178 Z"
            />
            <path
              id={`${uid}-confused-face-shadow`}
              data-part="face-shadow"
              fill="#875839"
              stroke="none"
              d="M94 411 C111 456 153 483 213 492 C360 515 499 475 559 376 C551 426 515 466 472 491 C391 541 231 543 151 500 C130 486 121 474 115 452 C107 464 96 449 94 411 Z"
            />
            <path
              id={`${uid}-confused-head-highlight`}
              data-part="head-highlight"
              fill="none"
              stroke="#c2946b"
              strokeWidth="8"
              d="M165 170 C194 148 224 132 252 122 C269 101 287 81 303 77 M357 117 C383 119 404 125 426 131"
            />
            <path
              id={`${uid}-confused-muzzle`}
              data-part="muzzle"
              stroke="none"
              fill={`url(#${uid}-confused-tan)`}
              d="M255 367 C264 337 276 316 284 290 C292 265 309 252 335 257 C365 258 382 281 398 305 C416 324 435 341 441 369 C454 412 430 453 399 463 C366 474 312 470 286 454 C258 436 247 402 255 367 Z"
            />
            <path
              id={`${uid}-confused-left-brow`}
              data-part="left-brow"
              stroke="none"
              fill="#60381e"
              d="M169 232 Q188 201 220 217 L218 226 Q190 218 179 240 Z"
            />
            <path
              id={`${uid}-confused-right-brow`}
              data-part="right-brow"
              stroke="none"
              fill="#60381e"
              d="M408 211 Q433 202 461 218 L458 228 Q434 217 410 221 Z"
            />
            <g className="expression-blink"><path
              id={`${uid}-confused-left-eye`}
              data-part="left-eye"
              fill="#fffaf0"
              strokeWidth="6"
              d="M201 336 C187 315 194 287 210 278 C232 266 252 282 256 303 L254 331 C235 326 215 333 201 336 Z"
            />
            <clipPath id={`${uid}-confused-left-eye-clip`}>
              <use href={`#${uid}-confused-left-eye`} />
            </clipPath>
            <g clipPath={`url(#${uid}-confused-left-eye-clip)`}>
              <g id={`${uid}-confused-left-pupil`} data-part="left-pupil" stroke="none"><ellipse cx="233" cy="313" rx="19" ry="25" fill="#815334"/><ellipse cx="233" cy="314" rx="13" ry="19" fill="#38251d"/><ellipse cx="228" cy="303" rx="5.5" ry="6.5" fill="#fffdf5"/><circle cx="240" cy="321" r="2.5" fill="#f3d5ac" opacity=".8"/></g>
            </g>
            <path
              id={`${uid}-confused-right-eye`}
              data-part="right-eye"
              fill="#fffaf0"
              strokeWidth="6"
              d="M408 306 C395 284 404 252 421 242 C442 232 462 247 466 267 L463 294 C443 291 423 299 408 306 Z"
            />
            <clipPath id={`${uid}-confused-right-eye-clip`}>
              <use href={`#${uid}-confused-right-eye`} />
            </clipPath>
            <g clipPath={`url(#${uid}-confused-right-eye-clip)`}>
              <g id={`${uid}-confused-right-pupil`} data-part="right-pupil" stroke="none"><ellipse cx="432" cy="283" rx="19" ry="25" fill="#815334"/><ellipse cx="432" cy="284" rx="13" ry="19" fill="#38251d"/><ellipse cx="427" cy="273" rx="5.5" ry="6.5" fill="#fffdf5"/><circle cx="439" cy="291" r="2.5" fill="#f3d5ac" opacity=".8"/></g>
            </g>
            </g>
            <g fill="#d98265" stroke="none">
              <ellipse
                cx="187"
                cy="373"
                rx="34"
                ry="21"
                transform="rotate(-11 187 373)"
              />
              <ellipse
                cx="493"
                cy="321"
                rx="33"
                ry="21"
                transform="rotate(-10 493 321)"
              />
            </g>

            <path
              id={`${uid}-confused-puzzled-mouth`}
              data-part="puzzled-mouth"
              fill="none"
              strokeWidth="8"
              d="M320 404 Q338 393 349 403 Q360 414 378 400 M349 351 L349 376"
            />
            <BearPart zone="nose">
              <path
                id={`${uid}-confused-nose`}
                data-part="nose"
                strokeWidth="5"
                fill="#64371f"
                d="M301 324 C300 306 339 297 367 302 C393 305 381 328 368 343 C348 365 309 348 301 324 Z"
              />
              <path
                id={`${uid}-confused-nose-shine`}
                data-part="nose-shine"
                stroke="none"
                fill="#ba8b61"
                d="M319 314 C331 307 353 305 366 308 C355 317 333 322 319 314 Z"
              />
            </BearPart>

            <path
              id={`${uid}-confused-bow-shadow`}
              data-part="bow-shadow"
              stroke="none"
              fill="#b18158"
              d="M294 548 C284 583 298 610 326 596 L363 577 C380 573 414 591 438 584 C463 581 458 551 447 528 Z"
            />
            <BearPart zone="bow">
              <path
                id={`${uid}-confused-bow-left`}
                data-part="bow-left"
                fill={`url(#${uid}-confused-blue)`}
                strokeWidth="9"
                d="M352 528 C330 513 306 499 292 511 C280 520 287 543 290 550 C284 573 295 592 311 588 C328 582 344 565 354 559 Z"
              />
              <path
                id={`${uid}-confused-bow-right`}
                data-part="bow-right"
                fill={`url(#${uid}-confused-blue)`}
                strokeWidth="9"
                d="M387 526 C407 506 423 481 437 491 C447 497 445 518 449 539 C455 563 444 573 428 568 C413 568 397 559 385 552 Z"
              />
              <path
                id={`${uid}-confused-bow-folds`}
                data-part="bow-folds"
                strokeWidth="4"
                fill="none"
                d="M324 536 L347 541 L332 553 M391 536 L411 524 M390 544 L413 551"
              />
              <path
                id={`${uid}-confused-bow-knot`}
                data-part="bow-knot"
                fill={`url(#${uid}-confused-blue)`}
                strokeWidth="8"
                d="M355 524 C364 516 381 518 386 528 C390 538 388 551 380 557 C370 563 355 556 352 548 C349 539 349 530 355 524 Z"
              />
            </BearPart>
            <path
              id={`${uid}-confused-resting-paw`}
              data-part="resting-paw"
              fill={`url(#${uid}-confused-fur)`}
              d="M153 601 C188 589 221 599 254 609 C300 623 323 648 320 676 C320 699 305 721 281 722 C252 737 225 712 197 714 C151 716 114 720 89 701 C68 685 65 661 69 635"
            />
            <path
              id={`${uid}-confused-paw-shadow`}
              data-part="paw-shadow"
              stroke="none"
              fill="#805134"
              d="M78 659 C89 683 115 688 144 686 C179 685 209 700 237 708 C266 718 300 709 317 688 C312 708 297 721 280 722 C251 735 223 714 197 714 C149 717 114 719 90 702 C79 692 74 675 78 659 Z"
            />
            <path
              id={`${uid}-confused-paw-details`}
              data-part="paw-details"
              fill="none"
              strokeWidth="7"
              d="M198 593 L205 575 M265 689 C276 696 278 706 275 719 M296 672 C306 680 309 689 309 700"
            />
            <path
              id={`${uid}-confused-paw-shine`}
              data-part="paw-shine"
              fill="none"
              stroke="#c69872"
              strokeWidth="7"
              d="M165 603 C209 600 286 625 306 654"
            />
            <g
              id={`${uid}-confused-shrug-paw`}
              data-part="shrug-paw"
              fill={`url(#${uid}-confused-fur)`}
            >
              <path d="M526 617 C564 620 592 595 609 563 L640 515 C665 527 695 514 709 495 C721 478 711 461 695 470 C704 453 691 441 678 452 C681 432 666 427 655 444 C647 424 631 433 633 452 C610 451 599 471 604 492 L563 537 C529 535 510 579 526 617 Z" />
              <path
                fill={`url(#${uid}-confused-tan)`}
                strokeWidth="6"
                d="M627 478 Q650 461 678 479 Q663 507 638 500 Z"
              />
            </g>
            <g
              id={`${uid}-confused-question-mark`}
              data-part="question-mark"
              fill="none"
              stroke="#588dbe"
              strokeWidth="13"
            >
              <path d="M630 185 C627 137 692 135 696 174 C700 201 664 202 665 228" />
              <path d="M665 252 L665 255" />
            </g>
          </g>
        </>
      );
    case "celebrating":
      return (
        <>
          <defs>
            <linearGradient
              id={`${uid}-celebrating-fur`}
              data-part="fur"
              x2="0.8"
              y2="1"
            >
              <stop stopColor="#a77a52" />
              <stop offset="1" stopColor="#956540" />
            </linearGradient>
            <linearGradient
              id={`${uid}-celebrating-tan`}
              data-part="tan"
              x2="0.7"
              y2="1"
            >
              <stop stopColor="#eac08c" />
              <stop offset="1" stopColor="#d9a773" />
            </linearGradient>
            <linearGradient
              id={`${uid}-celebrating-blue`}
              data-part="blue"
              x2="0.4"
              y2="1"
            >
              <stop stopColor="#588dbe" />
              <stop offset="1" stopColor="#386eaa" />
            </linearGradient>
          </defs>
          <g
            stroke="#59351f"
            strokeWidth="10"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <g
              id={`${uid}-celebrating-celebrating-arms`}
              data-part="celebrating-arms"
              fill={`url(#${uid}-celebrating-fur)`}
            >
              <path d="M166 564 C112 548 76 493 56 432 L37 371 C20 361 19 339 31 324 C28 304 45 290 63 294 C80 279 102 287 108 303 C129 303 141 321 135 340 C148 357 139 379 121 385 L172 459 L213 505 Z" />
              <path d="M493 558 C550 548 593 494 621 433 L652 366 C673 360 682 341 671 323 C679 304 665 286 645 288 C632 269 610 272 599 289 C576 288 563 306 570 325 C555 341 561 363 579 374 L529 453 L478 505 Z" />
              <ellipse
                fill={`url(#${uid}-celebrating-tan)`}
                strokeWidth="5"
                cx="80"
                cy="338"
                rx="22"
                ry="24"
                transform="rotate(-20 80 338)"
              />
              <ellipse
                fill={`url(#${uid}-celebrating-tan)`}
                strokeWidth="5"
                cx="619"
                cy="327"
                rx="22"
                ry="24"
                transform="rotate(20 619 327)"
              />
            </g>
            <path
              id={`${uid}-celebrating-body`}
              data-part="body"
              fill={`url(#${uid}-celebrating-fur)`}
              d="M175 479 C120 510 90 562 94 616 C96 680 154 722 225 722 L455 722 C527 722 574 684 576 631 C579 570 540 507 483 479 Z"
            />

            <BearPart zone="belly">
              <path
                id={`${uid}-celebrating-belly`}
                data-part="belly"
                stroke="none"
                fill={`url(#${uid}-celebrating-tan)`}
                d="M252 566 C280 535 382 530 420 560 C464 596 474 661 444 694 C414 721 287 722 251 697 C216 669 220 602 252 566 Z"
              />
            </BearPart>
            <path
              id={`${uid}-celebrating-neck-shadow`}
              data-part="neck-shadow"
              stroke="none"
              fill="#835438"
              d="M154 498 C245 540 391 540 487 473 C461 518 419 551 365 558 C290 565 201 548 154 519 Z"
            />
            <BearPart zone="left-ear">
              <path
                id={`${uid}-celebrating-left-ear`}
                data-part="left-ear"
                fill={`url(#${uid}-celebrating-fur)`}
                d="M160 158 C141 117 100 110 68 128 C35 146 20 182 32 221 C41 251 68 271 112 264 Z"
              />
              <path
                id={`${uid}-celebrating-left-inner-ear`}
                data-part="left-inner-ear"
                fill={`url(#${uid}-celebrating-tan)`}
                strokeWidth="8"
                d="M143 186 C127 160 107 155 91 166 C66 181 64 205 78 224 C86 233 96 237 110 238 Z"
              />
            </BearPart>
            <BearPart zone="right-ear">
              <path
                id={`${uid}-celebrating-right-ear`}
                data-part="right-ear"
                fill={`url(#${uid}-celebrating-fur)`}
                d="M426 121 C431 76 459 56 490 57 C526 55 558 86 562 117 C572 155 549 183 509 191 Z"
              />
              <path
                id={`${uid}-celebrating-right-inner-ear`}
                data-part="right-inner-ear"
                fill={`url(#${uid}-celebrating-tan)`}
                strokeWidth="8"
                d="M454 135 C457 111 474 95 492 99 C515 103 528 122 525 143 C522 157 512 167 500 173 Z"
              />
            </BearPart>
            <path
              id={`${uid}-celebrating-ear-highlights`}
              data-part="ear-highlights"
              fill="none"
              stroke="#c7976e"
              strokeWidth="9"
              d="M43 193 C42 150 83 124 115 137 M439 111 C454 66 505 63 536 93"
            />
            <path
              id={`${uid}-celebrating-head`}
              data-part="head"
              fill={`url(#${uid}-celebrating-fur)`}
              d="M159 165 C188 139 220 122 249 112 C270 80 295 63 307 66 C319 70 307 93 302 103 C325 87 345 78 355 86 C367 94 351 113 335 120 C364 96 402 116 429 125 C462 137 508 168 534 215 C553 249 548 273 571 299 C587 317 586 333 565 330 C583 350 581 374 568 384 L562 376 C550 424 513 465 472 491 C399 534 231 549 151 500 C132 489 122 476 115 452 C109 470 88 452 93 410 C73 425 72 403 81 378 C94 344 88 298 96 263 C103 224 120 191 142 178 Z"
            />
            <path
              id={`${uid}-celebrating-face-shadow`}
              data-part="face-shadow"
              fill="#875839"
              stroke="none"
              d="M94 411 C111 456 153 483 213 492 C360 515 499 475 559 376 C551 426 515 466 472 491 C391 541 231 543 151 500 C130 486 121 474 115 452 C107 464 96 449 94 411 Z"
            />
            <path
              id={`${uid}-celebrating-head-highlight`}
              data-part="head-highlight"
              fill="none"
              stroke="#c2946b"
              strokeWidth="8"
              d="M165 170 C194 148 224 132 252 122 C269 101 287 81 303 77 M357 117 C383 119 404 125 426 131"
            />
            <path
              id={`${uid}-celebrating-muzzle`}
              data-part="muzzle"
              stroke="none"
              fill={`url(#${uid}-celebrating-tan)`}
              d="M255 367 C264 337 276 316 284 290 C292 265 309 252 335 257 C365 258 382 281 398 305 C416 324 435 341 441 369 C454 412 430 453 399 463 C366 474 312 470 286 454 C258 436 247 402 255 367 Z"
            />
            <path
              id={`${uid}-celebrating-left-brow`}
              data-part="left-brow"
              stroke="none"
              fill="#60381e"
              d="M184 235 C190 220 207 211 216 214 C228 221 210 229 201 233 C190 244 178 251 184 235 Z"
            />
            <path
              id={`${uid}-celebrating-right-brow`}
              data-part="right-brow"
              stroke="none"
              fill="#60381e"
              d="M410 190 C411 175 435 180 448 192 C463 209 439 201 428 199 C417 198 409 195 410 190 Z"
            />

            <g fill="#d98265" stroke="none">
              <ellipse
                cx="187"
                cy="373"
                rx="34"
                ry="21"
                transform="rotate(-11 187 373)"
              />
              <ellipse
                cx="493"
                cy="321"
                rx="33"
                ry="21"
                transform="rotate(-10 493 321)"
              />
            </g>
            <path
              id={`${uid}-celebrating-mouth`}
              data-part="mouth"
              fill="#64351f"
              strokeWidth="7"
              d="M302 382 Q349 404 398 366 C402 425 378 449 352 447 C319 445 304 420 302 382 Z"
            />
            <path
              id={`${uid}-celebrating-tongue`}
              data-part="tongue"
              fill="#df8064"
              stroke="none"
              d="M324 412 C337 399 362 403 376 414 C367 433 340 433 324 412 Z"
            />
            <path
              id={`${uid}-celebrating-smile`}
              data-part="smile"
              fill="none"
              strokeWidth="9"
              d="M285 370 C298 402 331 392 349 378 C375 391 405 374 409 349 M349 350 L349 376"
            />
            <g
              id={`${uid}-celebrating-happy-eyes`}
              data-part="happy-eyes"
              fill="none"
              strokeWidth="12"
            >
              <path d="M191 309 Q219 266 250 306" />
              <path d="M405 277 Q433 234 462 270" />
            </g>
            <BearPart zone="nose">
              <path
                id={`${uid}-celebrating-nose`}
                data-part="nose"
                strokeWidth="5"
                fill="#64371f"
                d="M301 324 C300 306 339 297 367 302 C393 305 381 328 368 343 C348 365 309 348 301 324 Z"
              />
              <path
                id={`${uid}-celebrating-nose-shine`}
                data-part="nose-shine"
                stroke="none"
                fill="#ba8b61"
                d="M319 314 C331 307 353 305 366 308 C355 317 333 322 319 314 Z"
              />
            </BearPart>

            <path
              id={`${uid}-celebrating-bow-shadow`}
              data-part="bow-shadow"
              stroke="none"
              fill="#b18158"
              d="M294 548 C284 583 298 610 326 596 L363 577 C380 573 414 591 438 584 C463 581 458 551 447 528 Z"
            />
            <BearPart zone="bow">
              <path
                id={`${uid}-celebrating-bow-left`}
                data-part="bow-left"
                fill={`url(#${uid}-celebrating-blue)`}
                strokeWidth="9"
                d="M352 528 C330 513 306 499 292 511 C280 520 287 543 290 550 C284 573 295 592 311 588 C328 582 344 565 354 559 Z"
              />
              <path
                id={`${uid}-celebrating-bow-right`}
                data-part="bow-right"
                fill={`url(#${uid}-celebrating-blue)`}
                strokeWidth="9"
                d="M387 526 C407 506 423 481 437 491 C447 497 445 518 449 539 C455 563 444 573 428 568 C413 568 397 559 385 552 Z"
              />
              <path
                id={`${uid}-celebrating-bow-folds`}
                data-part="bow-folds"
                strokeWidth="4"
                fill="none"
                d="M324 536 L347 541 L332 553 M391 536 L411 524 M390 544 L413 551"
              />
              <path
                id={`${uid}-celebrating-bow-knot`}
                data-part="bow-knot"
                fill={`url(#${uid}-celebrating-blue)`}
                strokeWidth="8"
                d="M355 524 C364 516 381 518 386 528 C390 538 388 551 380 557 C370 563 355 556 352 548 C349 539 349 530 355 524 Z"
              />
            </BearPart>

            <g
              id={`${uid}-celebrating-confetti`}
              data-part="confetti"
              strokeWidth="7"
              fill="none"
            >
              <path
                stroke="#588dbe"
                d="M53 109 l15 20 M664 213 l18 -15 M590 60 l-7 25"
              />
              <path
                stroke="#d98265"
                d="M92 76 l-9 22 M691 79 l-15 20 M46 252 l20 4"
              />
              <path stroke="#b79a50" d="M135 60 l8 17 M622 147 l14 8" />
            </g>
            <g
              id={`${uid}-celebrating-seated-paws`}
              data-part="seated-paws"
              fill={`url(#${uid}-celebrating-fur)`}
            >
              <path d="M170 628 C133 615 96 630 94 662 C88 695 117 722 157 724 C199 726 229 710 228 681 C228 655 199 638 170 628 Z" />
              <path d="M479 628 C516 615 553 630 555 662 C561 695 532 722 492 724 C450 726 420 710 421 681 C421 655 450 638 479 628 Z" />
              <ellipse
                stroke="none"
                fill={`url(#${uid}-celebrating-tan)`}
                cx="155"
                cy="675"
                rx="32"
                ry="24"
              />
              <ellipse
                stroke="none"
                fill={`url(#${uid}-celebrating-tan)`}
                cx="494"
                cy="675"
                rx="32"
                ry="24"
              />
            </g>
          </g>
        </>
      );
    case "facepalm":
      return (
        <>
          <defs>
            <linearGradient
              id={`${uid}-facepalm-fur`}
              data-part="fur"
              x2="0.8"
              y2="1"
            >
              <stop stopColor="#a77a52" />
              <stop offset="1" stopColor="#956540" />
            </linearGradient>
            <linearGradient
              id={`${uid}-facepalm-tan`}
              data-part="tan"
              x2="0.7"
              y2="1"
            >
              <stop stopColor="#eac08c" />
              <stop offset="1" stopColor="#d9a773" />
            </linearGradient>
            <linearGradient
              id={`${uid}-facepalm-blue`}
              data-part="blue"
              x2="0.4"
              y2="1"
            >
              <stop stopColor="#588dbe" />
              <stop offset="1" stopColor="#386eaa" />
            </linearGradient>
          </defs>
          <g
            stroke="#59351f"
            strokeWidth="10"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <path
              id={`${uid}-facepalm-body`}
              data-part="body"
              fill={`url(#${uid}-facepalm-fur)`}
              d="M162 497 C105 530 65 591 67 645 C64 695 92 716 144 711 C282 723 452 716 540 682 C570 653 553 542 511 455 Z"
            />

            <BearPart zone="belly">
              <path
                id={`${uid}-facepalm-belly`}
                data-part="belly"
                stroke="none"
                fill={`url(#${uid}-facepalm-tan)`}
                d="M243 667 C246 614 280 562 319 548 C354 526 405 537 442 564 C479 592 505 630 518 667 Z"
              />
            </BearPart>
            <path
              id={`${uid}-facepalm-neck-shadow`}
              data-part="neck-shadow"
              stroke="none"
              fill="#835438"
              d="M154 498 C245 540 391 540 487 473 C461 518 419 551 365 558 C290 565 201 548 154 519 Z"
            />
            <BearPart zone="left-ear">
              <path
                id={`${uid}-facepalm-left-ear`}
                data-part="left-ear"
                fill={`url(#${uid}-facepalm-fur)`}
                d="M160 158 C141 117 100 110 68 128 C35 146 20 182 32 221 C41 251 68 271 112 264 Z"
              />
              <path
                id={`${uid}-facepalm-left-inner-ear`}
                data-part="left-inner-ear"
                fill={`url(#${uid}-facepalm-tan)`}
                strokeWidth="8"
                d="M143 186 C127 160 107 155 91 166 C66 181 64 205 78 224 C86 233 96 237 110 238 Z"
              />
            </BearPart>
            <BearPart zone="right-ear">
              <path
                id={`${uid}-facepalm-right-ear`}
                data-part="right-ear"
                fill={`url(#${uid}-facepalm-fur)`}
                d="M426 121 C431 76 459 56 490 57 C526 55 558 86 562 117 C572 155 549 183 509 191 Z"
              />
              <path
                id={`${uid}-facepalm-right-inner-ear`}
                data-part="right-inner-ear"
                fill={`url(#${uid}-facepalm-tan)`}
                strokeWidth="8"
                d="M454 135 C457 111 474 95 492 99 C515 103 528 122 525 143 C522 157 512 167 500 173 Z"
              />
            </BearPart>
            <path
              id={`${uid}-facepalm-ear-highlights`}
              data-part="ear-highlights"
              fill="none"
              stroke="#c7976e"
              strokeWidth="9"
              d="M43 193 C42 150 83 124 115 137 M439 111 C454 66 505 63 536 93"
            />
            <path
              id={`${uid}-facepalm-head`}
              data-part="head"
              fill={`url(#${uid}-facepalm-fur)`}
              d="M159 165 C188 139 220 122 249 112 C270 80 295 63 307 66 C319 70 307 93 302 103 C325 87 345 78 355 86 C367 94 351 113 335 120 C364 96 402 116 429 125 C462 137 508 168 534 215 C553 249 548 273 571 299 C587 317 586 333 565 330 C583 350 581 374 568 384 L562 376 C550 424 513 465 472 491 C399 534 231 549 151 500 C132 489 122 476 115 452 C109 470 88 452 93 410 C73 425 72 403 81 378 C94 344 88 298 96 263 C103 224 120 191 142 178 Z"
            />
            <path
              id={`${uid}-facepalm-face-shadow`}
              data-part="face-shadow"
              fill="#875839"
              stroke="none"
              d="M94 411 C111 456 153 483 213 492 C360 515 499 475 559 376 C551 426 515 466 472 491 C391 541 231 543 151 500 C130 486 121 474 115 452 C107 464 96 449 94 411 Z"
            />
            <path
              id={`${uid}-facepalm-head-highlight`}
              data-part="head-highlight"
              fill="none"
              stroke="#c2946b"
              strokeWidth="8"
              d="M165 170 C194 148 224 132 252 122 C269 101 287 81 303 77 M357 117 C383 119 404 125 426 131"
            />
            <path
              id={`${uid}-facepalm-muzzle`}
              data-part="muzzle"
              stroke="none"
              fill={`url(#${uid}-facepalm-tan)`}
              d="M255 367 C264 337 276 316 284 290 C292 265 309 252 335 257 C365 258 382 281 398 305 C416 324 435 341 441 369 C454 412 430 453 399 463 C366 474 312 470 286 454 C258 436 247 402 255 367 Z"
            />
            <path
              id={`${uid}-facepalm-left-brow`}
              data-part="left-brow"
              stroke="none"
              fill="#60381e"
              d="M184 235 C190 220 207 211 216 214 C228 221 210 229 201 233 C190 244 178 251 184 235 Z"
            />
            <path
              id={`${uid}-facepalm-right-brow`}
              data-part="right-brow"
              stroke="none"
              fill="#60381e"
              d="M410 190 C411 175 435 180 448 192 C463 209 439 201 428 199 C417 198 409 195 410 190 Z"
            />

            <g fill="#d98265" stroke="none">
              <ellipse
                cx="187"
                cy="373"
                rx="34"
                ry="21"
                transform="rotate(-11 187 373)"
              />
              <ellipse
                cx="493"
                cy="321"
                rx="33"
                ry="21"
                transform="rotate(-10 493 321)"
              />
            </g>

            <g
              id={`${uid}-facepalm-closed-eyes`}
              data-part="closed-eyes"
              fill="none"
              strokeWidth="9"
            >
              <path d="M191 308 Q220 325 250 300 M407 277 Q433 293 460 266" />
              <path d="M328 403 Q351 395 371 401 M348 352 L348 375" />
            </g>
            <BearPart zone="nose">
              <path
                id={`${uid}-facepalm-nose`}
                data-part="nose"
                strokeWidth="5"
                fill="#64371f"
                d="M301 324 C300 306 339 297 367 302 C393 305 381 328 368 343 C348 365 309 348 301 324 Z"
              />
              <path
                id={`${uid}-facepalm-nose-shine`}
                data-part="nose-shine"
                stroke="none"
                fill="#ba8b61"
                d="M319 314 C331 307 353 305 366 308 C355 317 333 322 319 314 Z"
              />
            </BearPart>

            <path
              id={`${uid}-facepalm-bow-shadow`}
              data-part="bow-shadow"
              stroke="none"
              fill="#b18158"
              d="M294 548 C284 583 298 610 326 596 L363 577 C380 573 414 591 438 584 C463 581 458 551 447 528 Z"
            />
            <BearPart zone="bow">
              <path
                id={`${uid}-facepalm-bow-left`}
                data-part="bow-left"
                fill={`url(#${uid}-facepalm-blue)`}
                strokeWidth="9"
                d="M352 528 C330 513 306 499 292 511 C280 520 287 543 290 550 C284 573 295 592 311 588 C328 582 344 565 354 559 Z"
              />
              <path
                id={`${uid}-facepalm-bow-right`}
                data-part="bow-right"
                fill={`url(#${uid}-facepalm-blue)`}
                strokeWidth="9"
                d="M387 526 C407 506 423 481 437 491 C447 497 445 518 449 539 C455 563 444 573 428 568 C413 568 397 559 385 552 Z"
              />
              <path
                id={`${uid}-facepalm-bow-folds`}
                data-part="bow-folds"
                strokeWidth="4"
                fill="none"
                d="M324 536 L347 541 L332 553 M391 536 L411 524 M390 544 L413 551"
              />
              <path
                id={`${uid}-facepalm-bow-knot`}
                data-part="bow-knot"
                fill={`url(#${uid}-facepalm-blue)`}
                strokeWidth="8"
                d="M355 524 C364 516 381 518 386 528 C390 538 388 551 380 557 C370 563 355 556 352 548 C349 539 349 530 355 524 Z"
              />
            </BearPart>
            <path
              id={`${uid}-facepalm-resting-paw`}
              data-part="resting-paw"
              fill={`url(#${uid}-facepalm-fur)`}
              d="M153 601 C188 589 221 599 254 609 C300 623 323 648 320 676 C320 699 305 721 281 722 C252 737 225 712 197 714 C151 716 114 720 89 701 C68 685 65 661 69 635"
            />
            <path
              id={`${uid}-facepalm-paw-shadow`}
              data-part="paw-shadow"
              stroke="none"
              fill="#805134"
              d="M78 659 C89 683 115 688 144 686 C179 685 209 700 237 708 C266 718 300 709 317 688 C312 708 297 721 280 722 C251 735 223 714 197 714 C149 717 114 719 90 702 C79 692 74 675 78 659 Z"
            />
            <path
              id={`${uid}-facepalm-paw-details`}
              data-part="paw-details"
              fill="none"
              strokeWidth="7"
              d="M198 593 L205 575 M265 689 C276 696 278 706 275 719 M296 672 C306 680 309 689 309 700"
            />
            <path
              id={`${uid}-facepalm-paw-shine`}
              data-part="paw-shine"
              fill="none"
              stroke="#c69872"
              strokeWidth="7"
              d="M165 603 C209 600 286 625 306 654"
            />
            <g
              id={`${uid}-facepalm-facepalm-paw`}
              data-part="facepalm-paw"
              fill={`url(#${uid}-facepalm-fur)`}
            >
              <path d="M518 632 C558 631 577 603 562 568 C535 512 509 450 485 392 C470 353 450 319 436 300 C438 273 421 250 397 246 C375 232 350 241 340 249 C318 251 304 270 308 290 C304 313 323 334 346 338 C366 350 390 349 408 338 C431 390 435 445 443 494 C449 537 461 578 476 609 C484 626 499 634 518 632 Z" />
              <path
                fill="#805033"
                stroke="none"
                d="M430 310 C428 327 415 338 403 341 C431 392 435 445 443 494 C449 537 461 578 476 609 C484 627 503 635 518 632 C548 632 565 614 565 594 C547 618 518 617 504 593 C479 545 477 463 459 404 Z"
              />
              <path
                fill="none"
                stroke="#c39570"
                strokeWidth="7"
                d="M331 269 Q352 249 375 255 M505 557 Q487 524 482 495"
              />
              <path
                fill="none"
                strokeWidth="5"
                d="M322 291 Q331 288 337 292 M334 310 Q343 306 349 311"
              />
            </g>
            <path
              id={`${uid}-facepalm-sigh`}
              data-part="sigh"
              fill="none"
              stroke="#9badb7"
              strokeWidth="7"
              d="M594 369 q38 -18 29 -42 M604 394 q54 -9 53 -38"
            />
          </g>
        </>
      );
    case "proud":
      return (
        <>
          <defs>
            <linearGradient
              id={`${uid}-proud-fur`}
              data-part="fur"
              x2="0.8"
              y2="1"
            >
              <stop stopColor="#a77a52" />
              <stop offset="1" stopColor="#956540" />
            </linearGradient>
            <linearGradient
              id={`${uid}-proud-tan`}
              data-part="tan"
              x2="0.7"
              y2="1"
            >
              <stop stopColor="#eac08c" />
              <stop offset="1" stopColor="#d9a773" />
            </linearGradient>
            <linearGradient
              id={`${uid}-proud-blue`}
              data-part="blue"
              x2="0.4"
              y2="1"
            >
              <stop stopColor="#588dbe" />
              <stop offset="1" stopColor="#386eaa" />
            </linearGradient>
          </defs>
          <g
            stroke="#59351f"
            strokeWidth="10"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <path
              id={`${uid}-proud-body`}
              data-part="body"
              fill={`url(#${uid}-proud-fur)`}
              d="M162 497 C105 530 65 591 67 645 C64 695 92 716 144 711 C282 723 452 716 540 682 C570 653 553 542 511 455 Z"
            />

            <BearPart zone="belly">
              <path
                id={`${uid}-proud-belly`}
                data-part="belly"
                stroke="none"
                fill={`url(#${uid}-proud-tan)`}
                d="M243 667 C246 614 280 562 319 548 C354 526 405 537 442 564 C479 592 505 630 518 667 Z"
              />
            </BearPart>
            <path
              id={`${uid}-proud-neck-shadow`}
              data-part="neck-shadow"
              stroke="none"
              fill="#835438"
              d="M154 498 C245 540 391 540 487 473 C461 518 419 551 365 558 C290 565 201 548 154 519 Z"
            />
            <BearPart zone="left-ear">
              <path
                id={`${uid}-proud-left-ear`}
                data-part="left-ear"
                fill={`url(#${uid}-proud-fur)`}
                d="M160 158 C141 117 100 110 68 128 C35 146 20 182 32 221 C41 251 68 271 112 264 Z"
              />
              <path
                id={`${uid}-proud-left-inner-ear`}
                data-part="left-inner-ear"
                fill={`url(#${uid}-proud-tan)`}
                strokeWidth="8"
                d="M143 186 C127 160 107 155 91 166 C66 181 64 205 78 224 C86 233 96 237 110 238 Z"
              />
            </BearPart>
            <BearPart zone="right-ear">
              <path
                id={`${uid}-proud-right-ear`}
                data-part="right-ear"
                fill={`url(#${uid}-proud-fur)`}
                d="M426 121 C431 76 459 56 490 57 C526 55 558 86 562 117 C572 155 549 183 509 191 Z"
              />
              <path
                id={`${uid}-proud-right-inner-ear`}
                data-part="right-inner-ear"
                fill={`url(#${uid}-proud-tan)`}
                strokeWidth="8"
                d="M454 135 C457 111 474 95 492 99 C515 103 528 122 525 143 C522 157 512 167 500 173 Z"
              />
            </BearPart>
            <path
              id={`${uid}-proud-ear-highlights`}
              data-part="ear-highlights"
              fill="none"
              stroke="#c7976e"
              strokeWidth="9"
              d="M43 193 C42 150 83 124 115 137 M439 111 C454 66 505 63 536 93"
            />
            <path
              id={`${uid}-proud-head`}
              data-part="head"
              fill={`url(#${uid}-proud-fur)`}
              d="M159 165 C188 139 220 122 249 112 C270 80 295 63 307 66 C319 70 307 93 302 103 C325 87 345 78 355 86 C367 94 351 113 335 120 C364 96 402 116 429 125 C462 137 508 168 534 215 C553 249 548 273 571 299 C587 317 586 333 565 330 C583 350 581 374 568 384 L562 376 C550 424 513 465 472 491 C399 534 231 549 151 500 C132 489 122 476 115 452 C109 470 88 452 93 410 C73 425 72 403 81 378 C94 344 88 298 96 263 C103 224 120 191 142 178 Z"
            />
            <path
              id={`${uid}-proud-face-shadow`}
              data-part="face-shadow"
              fill="#875839"
              stroke="none"
              d="M94 411 C111 456 153 483 213 492 C360 515 499 475 559 376 C551 426 515 466 472 491 C391 541 231 543 151 500 C130 486 121 474 115 452 C107 464 96 449 94 411 Z"
            />
            <path
              id={`${uid}-proud-head-highlight`}
              data-part="head-highlight"
              fill="none"
              stroke="#c2946b"
              strokeWidth="8"
              d="M165 170 C194 148 224 132 252 122 C269 101 287 81 303 77 M357 117 C383 119 404 125 426 131"
            />
            <path
              id={`${uid}-proud-muzzle`}
              data-part="muzzle"
              stroke="none"
              fill={`url(#${uid}-proud-tan)`}
              d="M255 367 C264 337 276 316 284 290 C292 265 309 252 335 257 C365 258 382 281 398 305 C416 324 435 341 441 369 C454 412 430 453 399 463 C366 474 312 470 286 454 C258 436 247 402 255 367 Z"
            />
            <path
              id={`${uid}-proud-left-brow`}
              data-part="left-brow"
              stroke="none"
              fill="#60381e"
              d="M181 238 Q199 225 219 231 L218 240 Q199 234 183 248 Z"
            />
            <path
              id={`${uid}-proud-right-brow`}
              data-part="right-brow"
              stroke="none"
              fill="#60381e"
              d="M410 192 Q431 177 450 188 L448 197 Q431 190 413 202 Z"
            />
            <g className="expression-blink"><path
              id={`${uid}-proud-left-eye`}
              data-part="left-eye"
              fill="#fffaf0"
              strokeWidth="6"
              d="M201 336 C187 315 194 287 210 278 C232 266 252 282 256 303 L254 331 C235 326 215 333 201 336 Z"
            />
            <clipPath id={`${uid}-proud-left-eye-clip`}>
              <use href={`#${uid}-proud-left-eye`} />
            </clipPath>
            <g clipPath={`url(#${uid}-proud-left-eye-clip)`}>
              <g id={`${uid}-proud-left-pupil`} data-part="left-pupil" stroke="none"><ellipse cx="233" cy="313" rx="19" ry="25" fill="#815334"/><ellipse cx="233" cy="314" rx="13" ry="19" fill="#38251d"/><ellipse cx="228" cy="303" rx="5.5" ry="6.5" fill="#fffdf5"/><circle cx="240" cy="321" r="2.5" fill="#f3d5ac" opacity=".8"/></g>
            </g>
            <path
              id={`${uid}-proud-right-eye`}
              data-part="right-eye"
              fill="#fffaf0"
              strokeWidth="6"
              d="M408 306 C395 284 404 252 421 242 C442 232 462 247 466 267 L463 294 C443 291 423 299 408 306 Z"
            />
            <clipPath id={`${uid}-proud-right-eye-clip`}>
              <use href={`#${uid}-proud-right-eye`} />
            </clipPath>
            <g clipPath={`url(#${uid}-proud-right-eye-clip)`}>
              <g id={`${uid}-proud-right-pupil`} data-part="right-pupil" stroke="none"><ellipse cx="432" cy="283" rx="19" ry="25" fill="#815334"/><ellipse cx="432" cy="284" rx="13" ry="19" fill="#38251d"/><ellipse cx="427" cy="273" rx="5.5" ry="6.5" fill="#fffdf5"/><circle cx="439" cy="291" r="2.5" fill="#f3d5ac" opacity=".8"/></g>
            </g>
            </g>
            <g fill="#d98265" stroke="none">
              <ellipse
                cx="187"
                cy="373"
                rx="34"
                ry="21"
                transform="rotate(-11 187 373)"
              />
              <ellipse
                cx="493"
                cy="321"
                rx="33"
                ry="21"
                transform="rotate(-10 493 321)"
              />
            </g>

            <path
              id={`${uid}-proud-proud-smile`}
              data-part="proud-smile"
              fill="none"
              strokeWidth="9"
              d="M310 389 Q352 427 397 369 M348 352 L348 378"
            />
            <BearPart zone="nose">
              <path
                id={`${uid}-proud-nose`}
                data-part="nose"
                strokeWidth="5"
                fill="#64371f"
                d="M301 324 C300 306 339 297 367 302 C393 305 381 328 368 343 C348 365 309 348 301 324 Z"
              />
              <path
                id={`${uid}-proud-nose-shine`}
                data-part="nose-shine"
                stroke="none"
                fill="#ba8b61"
                d="M319 314 C331 307 353 305 366 308 C355 317 333 322 319 314 Z"
              />
            </BearPart>

            <path
              id={`${uid}-proud-bow-shadow`}
              data-part="bow-shadow"
              stroke="none"
              fill="#b18158"
              d="M294 548 C284 583 298 610 326 596 L363 577 C380 573 414 591 438 584 C463 581 458 551 447 528 Z"
            />
            <BearPart zone="bow">
              <path
                id={`${uid}-proud-bow-left`}
                data-part="bow-left"
                fill={`url(#${uid}-proud-blue)`}
                strokeWidth="9"
                d="M352 528 C330 513 306 499 292 511 C280 520 287 543 290 550 C284 573 295 592 311 588 C328 582 344 565 354 559 Z"
              />
              <path
                id={`${uid}-proud-bow-right`}
                data-part="bow-right"
                fill={`url(#${uid}-proud-blue)`}
                strokeWidth="9"
                d="M387 526 C407 506 423 481 437 491 C447 497 445 518 449 539 C455 563 444 573 428 568 C413 568 397 559 385 552 Z"
              />
              <path
                id={`${uid}-proud-bow-folds`}
                data-part="bow-folds"
                strokeWidth="4"
                fill="none"
                d="M324 536 L347 541 L332 553 M391 536 L411 524 M390 544 L413 551"
              />
              <path
                id={`${uid}-proud-bow-knot`}
                data-part="bow-knot"
                fill={`url(#${uid}-proud-blue)`}
                strokeWidth="8"
                d="M355 524 C364 516 381 518 386 528 C390 538 388 551 380 557 C370 563 355 556 352 548 C349 539 349 530 355 524 Z"
              />
            </BearPart>
            <path
              id={`${uid}-proud-resting-paw`}
              data-part="resting-paw"
              fill={`url(#${uid}-proud-fur)`}
              d="M153 601 C188 589 221 599 254 609 C300 623 323 648 320 676 C320 699 305 721 281 722 C252 737 225 712 197 714 C151 716 114 720 89 701 C68 685 65 661 69 635"
            />
            <path
              id={`${uid}-proud-paw-shadow`}
              data-part="paw-shadow"
              stroke="none"
              fill="#805134"
              d="M78 659 C89 683 115 688 144 686 C179 685 209 700 237 708 C266 718 300 709 317 688 C312 708 297 721 280 722 C251 735 223 714 197 714 C149 717 114 719 90 702 C79 692 74 675 78 659 Z"
            />
            <path
              id={`${uid}-proud-paw-details`}
              data-part="paw-details"
              fill="none"
              strokeWidth="7"
              d="M198 593 L205 575 M265 689 C276 696 278 706 275 719 M296 672 C306 680 309 689 309 700"
            />
            <path
              id={`${uid}-proud-paw-shine`}
              data-part="paw-shine"
              fill="none"
              stroke="#c69872"
              strokeWidth="7"
              d="M165 603 C209 600 286 625 306 654"
            />
            <g
              id={`${uid}-proud-proud-paw`}
              data-part="proud-paw"
              fill={`url(#${uid}-proud-fur)`}
            >
              <path d="M535 630 C568 614 579 575 552 551 C522 523 485 504 451 478 C431 461 407 465 397 484 C386 504 398 526 420 536 C445 550 473 558 483 581 C470 610 502 645 535 630 Z" />
              <path
                fill="#805033"
                stroke="none"
                d="M547 571 C557 599 535 618 516 618 C502 619 492 611 486 597 C483 620 508 641 535 630 C562 618 578 590 559 563 Z"
              />
              <path
                fill="none"
                stroke="#c39570"
                strokeWidth="7"
                d="M418 483 C435 482 451 494 467 505"
              />
              <path
                fill="none"
                strokeWidth="5"
                d="M410 509 Q416 502 423 503 M425 520 Q431 513 438 515"
              />
            </g>
            <g
              id={`${uid}-proud-proud-sparkle`}
              data-part="proud-sparkle"
              fill="#eac08c"
              stroke="#a77845"
              strokeWidth="4"
            >
              <path d="M645 233 L654 260 L681 269 L654 278 L645 305 L636 278 L609 269 L636 260 Z" />
            </g>
          </g>
        </>
      );
    default:
      return null;
  }
}
