import BearPart from "./BearPart";
export type ExtraPose="sleepy"|"winking"|"loving"|"surprised";
export default function ExtraArtwork({pose,uid}:{pose:ExtraPose;uid:string}){switch(pose){
case "sleepy": return <>


<defs>
 <linearGradient id={`${uid}-sleepy-fur`} data-part="fur" x2="0.8" y2="1"><stop stopColor="#a77a52"/><stop offset="1" stopColor="#956540"/></linearGradient>
 <linearGradient id={`${uid}-sleepy-tan`} data-part="tan" x2="0.7" y2="1"><stop stopColor="#eac08c"/><stop offset="1" stopColor="#d9a773"/></linearGradient>
 <linearGradient id={`${uid}-sleepy-blue`} data-part="blue" x2="0.4" y2="1"><stop stopColor="#588dbe"/><stop offset="1" stopColor="#386eaa"/></linearGradient>
</defs>
<g stroke="#59351f" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round">
 <path id={`${uid}-sleepy-body`} data-part="body" fill={`url(#${uid}-sleepy-fur)`} d="M162 497 C105 530 65 591 67 645 C64 695 92 716 144 711 C282 723 452 716 540 682 C570 653 553 542 511 455 Z"/>
 
 <BearPart zone="belly"><path id={`${uid}-sleepy-belly`} data-part="belly" stroke="none" fill={`url(#${uid}-sleepy-tan)`} d="M243 667 C246 614 280 562 319 548 C354 526 405 537 442 564 C479 592 505 630 518 667 Z"/></BearPart>
 <path id={`${uid}-sleepy-neck-shadow`} data-part="neck-shadow" stroke="none" fill="#835438" d="M154 498 C245 540 391 540 487 473 C461 518 419 551 365 558 C290 565 201 548 154 519 Z"/>
 <BearPart zone="left-ear"><path id={`${uid}-sleepy-left-ear`} data-part="left-ear" fill={`url(#${uid}-sleepy-fur)`} d="M160 158 C141 117 100 110 68 128 C35 146 20 182 32 221 C41 251 68 271 112 264 Z"/>
 <path id={`${uid}-sleepy-left-inner-ear`} data-part="left-inner-ear" fill={`url(#${uid}-sleepy-tan)`} strokeWidth="8" d="M143 186 C127 160 107 155 91 166 C66 181 64 205 78 224 C86 233 96 237 110 238 Z"/></BearPart>
 <BearPart zone="right-ear"><path id={`${uid}-sleepy-right-ear`} data-part="right-ear" fill={`url(#${uid}-sleepy-fur)`} d="M426 121 C431 76 459 56 490 57 C526 55 558 86 562 117 C572 155 549 183 509 191 Z"/>
 <path id={`${uid}-sleepy-right-inner-ear`} data-part="right-inner-ear" fill={`url(#${uid}-sleepy-tan)`} strokeWidth="8" d="M454 135 C457 111 474 95 492 99 C515 103 528 122 525 143 C522 157 512 167 500 173 Z"/></BearPart>
 <path id={`${uid}-sleepy-ear-highlights`} data-part="ear-highlights" fill="none" stroke="#c7976e" strokeWidth="9" d="M43 193 C42 150 83 124 115 137 M439 111 C454 66 505 63 536 93"/>
 <path id={`${uid}-sleepy-head`} data-part="head" fill={`url(#${uid}-sleepy-fur)`} d="M159 165 C188 139 220 122 249 112 C270 80 295 63 307 66 C319 70 307 93 302 103 C325 87 345 78 355 86 C367 94 351 113 335 120 C364 96 402 116 429 125 C462 137 508 168 534 215 C553 249 548 273 571 299 C587 317 586 333 565 330 C583 350 581 374 568 384 L562 376 C550 424 513 465 472 491 C399 534 231 549 151 500 C132 489 122 476 115 452 C109 470 88 452 93 410 C73 425 72 403 81 378 C94 344 88 298 96 263 C103 224 120 191 142 178 Z"/>
 <path id={`${uid}-sleepy-face-shadow`} data-part="face-shadow" fill="#875839" stroke="none" d="M94 411 C111 456 153 483 213 492 C360 515 499 475 559 376 C551 426 515 466 472 491 C391 541 231 543 151 500 C130 486 121 474 115 452 C107 464 96 449 94 411 Z"/>
 <path id={`${uid}-sleepy-head-highlight`} data-part="head-highlight" fill="none" stroke="#c2946b" strokeWidth="8" d="M165 170 C194 148 224 132 252 122 C269 101 287 81 303 77 M357 117 C383 119 404 125 426 131"/>
 <path id={`${uid}-sleepy-muzzle`} data-part="muzzle" stroke="none" fill={`url(#${uid}-sleepy-tan)`} d="M255 367 C264 337 276 316 284 290 C292 265 309 252 335 257 C365 258 382 281 398 305 C416 324 435 341 441 369 C454 412 430 453 399 463 C366 474 312 470 286 454 C258 436 247 402 255 367 Z"/>
 <path id={`${uid}-sleepy-left-brow`} data-part="left-brow" stroke="none" fill="#60381e" d="M184 235 C190 220 207 211 216 214 C228 221 210 229 201 233 C190 244 178 251 184 235 Z"/>
 <path id={`${uid}-sleepy-right-brow`} data-part="right-brow" stroke="none" fill="#60381e" d="M410 190 C411 175 435 180 448 192 C463 209 439 201 428 199 C417 198 409 195 410 190 Z"/>
 <path id={`${uid}-sleepy-left-eye`} data-part="left-eye" fill="none" strokeWidth="7" d="M197 309 Q225 333 252 298"/>
 
 <path id={`${uid}-sleepy-right-eye`} data-part="right-eye" fill="none" strokeWidth="7" d="M407 279 Q433 302 461 267"/>
 
 
 <g fill="#cf9477" stroke="none"><ellipse cx="187" cy="373" rx="34" ry="21" transform="rotate(-11 187 373)"/><ellipse cx="493" cy="321" rx="33" ry="21" transform="rotate(-10 493 321)"/></g>
 
 
 
 <ellipse id={`${uid}-sleepy-sleepy-yawn`} data-part="sleepy-yawn" cx="350" cy="411" rx="18" ry="24" fill="#64371f" strokeWidth="6"/><BearPart zone="nose"><path id={`${uid}-sleepy-nose`} data-part="nose" strokeWidth="5" fill="#64371f" d="M301 324 C300 306 339 297 367 302 C393 305 381 328 368 343 C348 365 309 348 301 324 Z"/>
 <path id={`${uid}-sleepy-nose-shine`} data-part="nose-shine" stroke="none" fill="#ba8b61" d="M319 314 C331 307 353 305 366 308 C355 317 333 322 319 314 Z"/></BearPart>
 
 
 
 <path id={`${uid}-sleepy-bow-shadow`} data-part="bow-shadow" stroke="none" fill="#b18158" d="M294 548 C284 583 298 610 326 596 L363 577 C380 573 414 591 438 584 C463 581 458 551 447 528 Z"/>
 <BearPart zone="bow"><path id={`${uid}-sleepy-bow-left`} data-part="bow-left" fill={`url(#${uid}-sleepy-blue)`} strokeWidth="9" d="M352 528 C330 513 306 499 292 511 C280 520 287 543 290 550 C284 573 295 592 311 588 C328 582 344 565 354 559 Z"/>
 <path id={`${uid}-sleepy-bow-right`} data-part="bow-right" fill={`url(#${uid}-sleepy-blue)`} strokeWidth="9" d="M387 526 C407 506 423 481 437 491 C447 497 445 518 449 539 C455 563 444 573 428 568 C413 568 397 559 385 552 Z"/>
 <path id={`${uid}-sleepy-bow-folds`} data-part="bow-folds" strokeWidth="4" fill="none" d="M324 536 L347 541 L332 553 M391 536 L411 524 M390 544 L413 551"/>
 <path id={`${uid}-sleepy-bow-knot`} data-part="bow-knot" fill={`url(#${uid}-sleepy-blue)`} strokeWidth="8" d="M355 524 C364 516 381 518 386 528 C390 538 388 551 380 557 C370 563 355 556 352 548 C349 539 349 530 355 524 Z"/></BearPart>
 <path id={`${uid}-sleepy-resting-paw`} data-part="resting-paw" fill={`url(#${uid}-sleepy-fur)`} d="M153 601 C188 589 221 599 254 609 C300 623 323 648 320 676 C320 699 305 721 281 722 C252 737 225 712 197 714 C151 716 114 720 89 701 C68 685 65 661 69 635"/>
 <path id={`${uid}-sleepy-paw-shadow`} data-part="paw-shadow" stroke="none" fill="#805134" d="M78 659 C89 683 115 688 144 686 C179 685 209 700 237 708 C266 718 300 709 317 688 C312 708 297 721 280 722 C251 735 223 714 197 714 C149 717 114 719 90 702 C79 692 74 675 78 659 Z"/>
 <path id={`${uid}-sleepy-paw-details`} data-part="paw-details" fill="none" strokeWidth="7" d="M198 593 L205 575 M265 689 C276 696 278 706 275 719 M296 672 C306 680 309 689 309 700"/>
 <path id={`${uid}-sleepy-paw-shine`} data-part="paw-shine" fill="none" stroke="#c69872" strokeWidth="7" d="M165 603 C209 600 286 625 306 654"/>
<g id={`${uid}-sleepy-resting-right-paw`} data-part="resting-right-paw" fill={`url(#${uid}-sleepy-fur)`}><path d="M513 579 C549 578 572 598 574 629 C585 659 565 683 532 686 C502 694 478 680 478 660 C469 637 485 604 513 579 Z"/><path fill="none" strokeWidth="5" d="M495 659 Q504 653 511 658 M512 672 Q522 664 530 669"/><path fill="none" stroke="#c39570" strokeWidth="7" d="M521 593 Q548 593 555 615"/></g></g>
<g id={`${uid}-sleepy-sleepy-dream`} data-part="sleepy-dream" fill="none" stroke="#507fa6" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"><path d="M602 194 L625 194 L602 222 L625 222 M639 132 L669 132 L639 170 L669 170 M676 61 L717 61 L676 110 L717 110"/></g>
</>;
case "winking": return <>


<defs>
 <linearGradient id={`${uid}-winking-fur`} data-part="fur" x2="0.8" y2="1"><stop stopColor="#a77a52"/><stop offset="1" stopColor="#956540"/></linearGradient>
 <linearGradient id={`${uid}-winking-tan`} data-part="tan" x2="0.7" y2="1"><stop stopColor="#eac08c"/><stop offset="1" stopColor="#d9a773"/></linearGradient>
 <linearGradient id={`${uid}-winking-blue`} data-part="blue" x2="0.4" y2="1"><stop stopColor="#588dbe"/><stop offset="1" stopColor="#386eaa"/></linearGradient>
</defs>
<g stroke="#59351f" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round">
 <path id={`${uid}-winking-body`} data-part="body" fill={`url(#${uid}-winking-fur)`} d="M162 497 C105 530 65 591 67 645 C64 695 92 716 144 711 C282 723 452 716 540 682 C570 653 553 542 511 455 Z"/>
 
 <BearPart zone="belly"><path id={`${uid}-winking-belly`} data-part="belly" stroke="none" fill={`url(#${uid}-winking-tan)`} d="M243 667 C246 614 280 562 319 548 C354 526 405 537 442 564 C479 592 505 630 518 667 Z"/></BearPart>
 <path id={`${uid}-winking-neck-shadow`} data-part="neck-shadow" stroke="none" fill="#835438" d="M154 498 C245 540 391 540 487 473 C461 518 419 551 365 558 C290 565 201 548 154 519 Z"/>
 <BearPart zone="left-ear"><path id={`${uid}-winking-left-ear`} data-part="left-ear" fill={`url(#${uid}-winking-fur)`} d="M160 158 C141 117 100 110 68 128 C35 146 20 182 32 221 C41 251 68 271 112 264 Z"/>
 <path id={`${uid}-winking-left-inner-ear`} data-part="left-inner-ear" fill={`url(#${uid}-winking-tan)`} strokeWidth="8" d="M143 186 C127 160 107 155 91 166 C66 181 64 205 78 224 C86 233 96 237 110 238 Z"/></BearPart>
 <BearPart zone="right-ear"><path id={`${uid}-winking-right-ear`} data-part="right-ear" fill={`url(#${uid}-winking-fur)`} d="M426 121 C431 76 459 56 490 57 C526 55 558 86 562 117 C572 155 549 183 509 191 Z"/>
 <path id={`${uid}-winking-right-inner-ear`} data-part="right-inner-ear" fill={`url(#${uid}-winking-tan)`} strokeWidth="8" d="M454 135 C457 111 474 95 492 99 C515 103 528 122 525 143 C522 157 512 167 500 173 Z"/></BearPart>
 <path id={`${uid}-winking-ear-highlights`} data-part="ear-highlights" fill="none" stroke="#c7976e" strokeWidth="9" d="M43 193 C42 150 83 124 115 137 M439 111 C454 66 505 63 536 93"/>
 <path id={`${uid}-winking-head`} data-part="head" fill={`url(#${uid}-winking-fur)`} d="M159 165 C188 139 220 122 249 112 C270 80 295 63 307 66 C319 70 307 93 302 103 C325 87 345 78 355 86 C367 94 351 113 335 120 C364 96 402 116 429 125 C462 137 508 168 534 215 C553 249 548 273 571 299 C587 317 586 333 565 330 C583 350 581 374 568 384 L562 376 C550 424 513 465 472 491 C399 534 231 549 151 500 C132 489 122 476 115 452 C109 470 88 452 93 410 C73 425 72 403 81 378 C94 344 88 298 96 263 C103 224 120 191 142 178 Z"/>
 <path id={`${uid}-winking-face-shadow`} data-part="face-shadow" fill="#875839" stroke="none" d="M94 411 C111 456 153 483 213 492 C360 515 499 475 559 376 C551 426 515 466 472 491 C391 541 231 543 151 500 C130 486 121 474 115 452 C107 464 96 449 94 411 Z"/>
 <path id={`${uid}-winking-head-highlight`} data-part="head-highlight" fill="none" stroke="#c2946b" strokeWidth="8" d="M165 170 C194 148 224 132 252 122 C269 101 287 81 303 77 M357 117 C383 119 404 125 426 131"/>
 <path id={`${uid}-winking-muzzle`} data-part="muzzle" stroke="none" fill={`url(#${uid}-winking-tan)`} d="M255 367 C264 337 276 316 284 290 C292 265 309 252 335 257 C365 258 382 281 398 305 C416 324 435 341 441 369 C454 412 430 453 399 463 C366 474 312 470 286 454 C258 436 247 402 255 367 Z"/>
 <path id={`${uid}-winking-left-brow`} data-part="left-brow" stroke="none" fill="#60381e" d="M184 235 C190 220 207 211 216 214 C228 221 210 229 201 233 C190 244 178 251 184 235 Z"/>
 <path id={`${uid}-winking-right-brow`} data-part="right-brow" stroke="none" fill="#60381e" d="M410 190 C411 175 435 180 448 192 C463 209 439 201 428 199 C417 198 409 195 410 190 Z"/>
 <path id={`${uid}-winking-left-eye`} data-part="left-eye" fill="#fffaf0" strokeWidth="6" d="M201 336 C187 315 194 287 210 278 C232 266 252 282 256 303 L254 331 C235 326 215 333 201 336 Z"/>
 <clipPath id={`${uid}-winking-left-pupil-boundary`} data-part="left-pupil-boundary"><use href={`#${uid}-winking-left-eye`}/></clipPath><g clipPath={`url(#${uid}-winking-left-pupil-boundary)`}><g id={`${uid}-winking-left-pupil`} data-part="left-pupil"  stroke="none"><ellipse cx="233" cy="313" rx="19" ry="25" fill="#815334"/><ellipse cx="233" cy="314" rx="13" ry="19" fill="#38251d"/><ellipse cx="228" cy="303" rx="5.5" ry="6.5" fill="#fffdf5"/><circle cx="240" cy="321" r="2.5" fill="#f3d5ac" opacity=".8"/></g></g>
 <path id={`${uid}-winking-right-eye`} data-part="right-eye" fill="none" strokeWidth="7" d="M407 283 Q429 261 462 276"/>
 
 
 <g fill="#cf9477" stroke="none"><ellipse cx="187" cy="373" rx="34" ry="21" transform="rotate(-11 187 373)"/><ellipse cx="493" cy="321" rx="33" ry="21" transform="rotate(-10 493 321)"/></g>
 
 
 
 <path id={`${uid}-winking-wink-smile`} data-part="wink-smile" fill="none" strokeWidth="8" d="M314 391 Q354 430 394 380 M349 351 L349 375"/><BearPart zone="nose"><path id={`${uid}-winking-nose`} data-part="nose" strokeWidth="5" fill="#64371f" d="M301 324 C300 306 339 297 367 302 C393 305 381 328 368 343 C348 365 309 348 301 324 Z"/>
 <path id={`${uid}-winking-nose-shine`} data-part="nose-shine" stroke="none" fill="#ba8b61" d="M319 314 C331 307 353 305 366 308 C355 317 333 322 319 314 Z"/></BearPart>
 
 
 
 <path id={`${uid}-winking-bow-shadow`} data-part="bow-shadow" stroke="none" fill="#b18158" d="M294 548 C284 583 298 610 326 596 L363 577 C380 573 414 591 438 584 C463 581 458 551 447 528 Z"/>
 <BearPart zone="bow"><path id={`${uid}-winking-bow-left`} data-part="bow-left" fill={`url(#${uid}-winking-blue)`} strokeWidth="9" d="M352 528 C330 513 306 499 292 511 C280 520 287 543 290 550 C284 573 295 592 311 588 C328 582 344 565 354 559 Z"/>
 <path id={`${uid}-winking-bow-right`} data-part="bow-right" fill={`url(#${uid}-winking-blue)`} strokeWidth="9" d="M387 526 C407 506 423 481 437 491 C447 497 445 518 449 539 C455 563 444 573 428 568 C413 568 397 559 385 552 Z"/>
 <path id={`${uid}-winking-bow-folds`} data-part="bow-folds" strokeWidth="4" fill="none" d="M324 536 L347 541 L332 553 M391 536 L411 524 M390 544 L413 551"/>
 <path id={`${uid}-winking-bow-knot`} data-part="bow-knot" fill={`url(#${uid}-winking-blue)`} strokeWidth="8" d="M355 524 C364 516 381 518 386 528 C390 538 388 551 380 557 C370 563 355 556 352 548 C349 539 349 530 355 524 Z"/></BearPart>
 <path id={`${uid}-winking-resting-paw`} data-part="resting-paw" fill={`url(#${uid}-winking-fur)`} d="M153 601 C188 589 221 599 254 609 C300 623 323 648 320 676 C320 699 305 721 281 722 C252 737 225 712 197 714 C151 716 114 720 89 701 C68 685 65 661 69 635"/>
 <path id={`${uid}-winking-paw-shadow`} data-part="paw-shadow" stroke="none" fill="#805134" d="M78 659 C89 683 115 688 144 686 C179 685 209 700 237 708 C266 718 300 709 317 688 C312 708 297 721 280 722 C251 735 223 714 197 714 C149 717 114 719 90 702 C79 692 74 675 78 659 Z"/>
 <path id={`${uid}-winking-paw-details`} data-part="paw-details" fill="none" strokeWidth="7" d="M198 593 L205 575 M265 689 C276 696 278 706 275 719 M296 672 C306 680 309 689 309 700"/>
 <path id={`${uid}-winking-paw-shine`} data-part="paw-shine" fill="none" stroke="#c69872" strokeWidth="7" d="M165 603 C209 600 286 625 306 654"/>
<g id={`${uid}-winking-resting-right-paw`} data-part="resting-right-paw" fill={`url(#${uid}-winking-fur)`}><path d="M513 579 C549 578 572 598 574 629 C585 659 565 683 532 686 C502 694 478 680 478 660 C469 637 485 604 513 579 Z"/><path fill="none" strokeWidth="5" d="M495 659 Q504 653 511 658 M512 672 Q522 664 530 669"/><path fill="none" stroke="#c39570" strokeWidth="7" d="M521 593 Q548 593 555 615"/></g></g>
<path id={`${uid}-winking-wink-sparkle`} data-part="wink-sparkle" fill="#eac08c" stroke="#a77845" strokeWidth="4" d="M626 218 L634 245 L661 253 L634 261 L626 288 L618 261 L591 253 L618 245 Z"/>
</>;
case "loving": return <>


<defs>
 <linearGradient id={`${uid}-loving-fur`} data-part="fur" x2="0.8" y2="1"><stop stopColor="#a77a52"/><stop offset="1" stopColor="#956540"/></linearGradient>
 <linearGradient id={`${uid}-loving-tan`} data-part="tan" x2="0.7" y2="1"><stop stopColor="#eac08c"/><stop offset="1" stopColor="#d9a773"/></linearGradient>
 <linearGradient id={`${uid}-loving-blue`} data-part="blue" x2="0.4" y2="1"><stop stopColor="#588dbe"/><stop offset="1" stopColor="#386eaa"/></linearGradient>
</defs>
<g stroke="#59351f" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round">
 <path id={`${uid}-loving-body`} data-part="body" fill={`url(#${uid}-loving-fur)`} d="M162 497 C105 530 65 591 67 645 C64 695 92 716 144 711 C282 723 452 716 540 682 C570 653 553 542 511 455 Z"/>
 
 <BearPart zone="belly"><path id={`${uid}-loving-belly`} data-part="belly" stroke="none" fill={`url(#${uid}-loving-tan)`} d="M243 667 C246 614 280 562 319 548 C354 526 405 537 442 564 C479 592 505 630 518 667 Z"/></BearPart>
 <path id={`${uid}-loving-neck-shadow`} data-part="neck-shadow" stroke="none" fill="#835438" d="M154 498 C245 540 391 540 487 473 C461 518 419 551 365 558 C290 565 201 548 154 519 Z"/>
 <BearPart zone="left-ear"><path id={`${uid}-loving-left-ear`} data-part="left-ear" fill={`url(#${uid}-loving-fur)`} d="M160 158 C141 117 100 110 68 128 C35 146 20 182 32 221 C41 251 68 271 112 264 Z"/>
 <path id={`${uid}-loving-left-inner-ear`} data-part="left-inner-ear" fill={`url(#${uid}-loving-tan)`} strokeWidth="8" d="M143 186 C127 160 107 155 91 166 C66 181 64 205 78 224 C86 233 96 237 110 238 Z"/></BearPart>
 <BearPart zone="right-ear"><path id={`${uid}-loving-right-ear`} data-part="right-ear" fill={`url(#${uid}-loving-fur)`} d="M426 121 C431 76 459 56 490 57 C526 55 558 86 562 117 C572 155 549 183 509 191 Z"/>
 <path id={`${uid}-loving-right-inner-ear`} data-part="right-inner-ear" fill={`url(#${uid}-loving-tan)`} strokeWidth="8" d="M454 135 C457 111 474 95 492 99 C515 103 528 122 525 143 C522 157 512 167 500 173 Z"/></BearPart>
 <path id={`${uid}-loving-ear-highlights`} data-part="ear-highlights" fill="none" stroke="#c7976e" strokeWidth="9" d="M43 193 C42 150 83 124 115 137 M439 111 C454 66 505 63 536 93"/>
 <path id={`${uid}-loving-head`} data-part="head" fill={`url(#${uid}-loving-fur)`} d="M159 165 C188 139 220 122 249 112 C270 80 295 63 307 66 C319 70 307 93 302 103 C325 87 345 78 355 86 C367 94 351 113 335 120 C364 96 402 116 429 125 C462 137 508 168 534 215 C553 249 548 273 571 299 C587 317 586 333 565 330 C583 350 581 374 568 384 L562 376 C550 424 513 465 472 491 C399 534 231 549 151 500 C132 489 122 476 115 452 C109 470 88 452 93 410 C73 425 72 403 81 378 C94 344 88 298 96 263 C103 224 120 191 142 178 Z"/>
 <path id={`${uid}-loving-face-shadow`} data-part="face-shadow" fill="#875839" stroke="none" d="M94 411 C111 456 153 483 213 492 C360 515 499 475 559 376 C551 426 515 466 472 491 C391 541 231 543 151 500 C130 486 121 474 115 452 C107 464 96 449 94 411 Z"/>
 <path id={`${uid}-loving-head-highlight`} data-part="head-highlight" fill="none" stroke="#c2946b" strokeWidth="8" d="M165 170 C194 148 224 132 252 122 C269 101 287 81 303 77 M357 117 C383 119 404 125 426 131"/>
 <path id={`${uid}-loving-muzzle`} data-part="muzzle" stroke="none" fill={`url(#${uid}-loving-tan)`} d="M255 367 C264 337 276 316 284 290 C292 265 309 252 335 257 C365 258 382 281 398 305 C416 324 435 341 441 369 C454 412 430 453 399 463 C366 474 312 470 286 454 C258 436 247 402 255 367 Z"/>
 <path id={`${uid}-loving-left-brow`} data-part="left-brow" stroke="none" fill="#60381e" d="M184 235 C190 220 207 211 216 214 C228 221 210 229 201 233 C190 244 178 251 184 235 Z"/>
 <path id={`${uid}-loving-right-brow`} data-part="right-brow" stroke="none" fill="#60381e" d="M410 190 C411 175 435 180 448 192 C463 209 439 201 428 199 C417 198 409 195 410 190 Z"/>
 <path id={`${uid}-loving-left-eye`} data-part="left-eye" fill="#cb7869" strokeWidth="7" d="M222 335 C204 321 182 305 193 289 C204 274 219 281 224 291 C235 272 256 279 258 296 C260 313 239 329 222 335 Z"/>
 
 <path id={`${uid}-loving-right-eye`} data-part="right-eye" fill="#cb7869" strokeWidth="7" d="M431 300 C412 286 392 269 404 253 C414 239 429 246 433 256 C444 237 465 244 467 261 C469 278 448 294 431 300 Z"/>
 
 
 <g fill="#cf9477" stroke="none"><ellipse cx="187" cy="373" rx="34" ry="21" transform="rotate(-11 187 373)"/><ellipse cx="493" cy="321" rx="33" ry="21" transform="rotate(-10 493 321)"/></g>
 
 
 
 <path id={`${uid}-loving-love-smile`} data-part="love-smile" fill="none" strokeWidth="8" d="M314 391 Q354 430 394 380 M349 351 L349 375"/><BearPart zone="nose"><path id={`${uid}-loving-nose`} data-part="nose" strokeWidth="5" fill="#64371f" d="M301 324 C300 306 339 297 367 302 C393 305 381 328 368 343 C348 365 309 348 301 324 Z"/>
 <path id={`${uid}-loving-nose-shine`} data-part="nose-shine" stroke="none" fill="#ba8b61" d="M319 314 C331 307 353 305 366 308 C355 317 333 322 319 314 Z"/></BearPart>
 
 
 
 <path id={`${uid}-loving-bow-shadow`} data-part="bow-shadow" stroke="none" fill="#b18158" d="M294 548 C284 583 298 610 326 596 L363 577 C380 573 414 591 438 584 C463 581 458 551 447 528 Z"/>
 <BearPart zone="bow"><path id={`${uid}-loving-bow-left`} data-part="bow-left" fill={`url(#${uid}-loving-blue)`} strokeWidth="9" d="M352 528 C330 513 306 499 292 511 C280 520 287 543 290 550 C284 573 295 592 311 588 C328 582 344 565 354 559 Z"/>
 <path id={`${uid}-loving-bow-right`} data-part="bow-right" fill={`url(#${uid}-loving-blue)`} strokeWidth="9" d="M387 526 C407 506 423 481 437 491 C447 497 445 518 449 539 C455 563 444 573 428 568 C413 568 397 559 385 552 Z"/>
 <path id={`${uid}-loving-bow-folds`} data-part="bow-folds" strokeWidth="4" fill="none" d="M324 536 L347 541 L332 553 M391 536 L411 524 M390 544 L413 551"/>
 <path id={`${uid}-loving-bow-knot`} data-part="bow-knot" fill={`url(#${uid}-loving-blue)`} strokeWidth="8" d="M355 524 C364 516 381 518 386 528 C390 538 388 551 380 557 C370 563 355 556 352 548 C349 539 349 530 355 524 Z"/></BearPart>
 <path id={`${uid}-loving-resting-paw`} data-part="resting-paw" fill={`url(#${uid}-loving-fur)`} d="M153 601 C188 589 221 599 254 609 C300 623 323 648 320 676 C320 699 305 721 281 722 C252 737 225 712 197 714 C151 716 114 720 89 701 C68 685 65 661 69 635"/>
 <path id={`${uid}-loving-paw-shadow`} data-part="paw-shadow" stroke="none" fill="#805134" d="M78 659 C89 683 115 688 144 686 C179 685 209 700 237 708 C266 718 300 709 317 688 C312 708 297 721 280 722 C251 735 223 714 197 714 C149 717 114 719 90 702 C79 692 74 675 78 659 Z"/>
 <path id={`${uid}-loving-paw-details`} data-part="paw-details" fill="none" strokeWidth="7" d="M198 593 L205 575 M265 689 C276 696 278 706 275 719 M296 672 C306 680 309 689 309 700"/>
 <path id={`${uid}-loving-paw-shine`} data-part="paw-shine" fill="none" stroke="#c69872" strokeWidth="7" d="M165 603 C209 600 286 625 306 654"/>
<g id={`${uid}-loving-resting-right-paw`} data-part="resting-right-paw" fill={`url(#${uid}-loving-fur)`}><path d="M513 579 C549 578 572 598 574 629 C585 659 565 683 532 686 C502 694 478 680 478 660 C469 637 485 604 513 579 Z"/><path fill="none" strokeWidth="5" d="M495 659 Q504 653 511 658 M512 672 Q522 664 530 669"/><path fill="none" stroke="#c39570" strokeWidth="7" d="M521 593 Q548 593 555 615"/></g></g>
<g id={`${uid}-loving-floating-hearts`} data-part="floating-hearts" fill="#cf8c7d" stroke="none"><path d="M624 178 C588 149 600 126 618 139 C636 117 660 140 624 178 Z"/><path d="M680 112 C651 89 659 70 676 80 C691 61 712 82 680 112 Z"/></g>
</>;
case "surprised": return <>


<defs>
 <linearGradient id={`${uid}-surprised-fur`} data-part="fur" x2="0.8" y2="1"><stop stopColor="#a77a52"/><stop offset="1" stopColor="#956540"/></linearGradient>
 <linearGradient id={`${uid}-surprised-tan`} data-part="tan" x2="0.7" y2="1"><stop stopColor="#eac08c"/><stop offset="1" stopColor="#d9a773"/></linearGradient>
 <linearGradient id={`${uid}-surprised-blue`} data-part="blue" x2="0.4" y2="1"><stop stopColor="#588dbe"/><stop offset="1" stopColor="#386eaa"/></linearGradient>
</defs>
<g stroke="#59351f" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round">
 <path id={`${uid}-surprised-body`} data-part="body" fill={`url(#${uid}-surprised-fur)`} d="M162 497 C105 530 65 591 67 645 C64 695 92 716 144 711 C282 723 452 716 540 682 C570 653 553 542 511 455 Z"/>
 
 <BearPart zone="belly"><path id={`${uid}-surprised-belly`} data-part="belly" stroke="none" fill={`url(#${uid}-surprised-tan)`} d="M243 667 C246 614 280 562 319 548 C354 526 405 537 442 564 C479 592 505 630 518 667 Z"/></BearPart>
 <path id={`${uid}-surprised-neck-shadow`} data-part="neck-shadow" stroke="none" fill="#835438" d="M154 498 C245 540 391 540 487 473 C461 518 419 551 365 558 C290 565 201 548 154 519 Z"/>
 <BearPart zone="left-ear"><path id={`${uid}-surprised-left-ear`} data-part="left-ear" fill={`url(#${uid}-surprised-fur)`} d="M160 158 C141 117 100 110 68 128 C35 146 20 182 32 221 C41 251 68 271 112 264 Z"/>
 <path id={`${uid}-surprised-left-inner-ear`} data-part="left-inner-ear" fill={`url(#${uid}-surprised-tan)`} strokeWidth="8" d="M143 186 C127 160 107 155 91 166 C66 181 64 205 78 224 C86 233 96 237 110 238 Z"/></BearPart>
 <BearPart zone="right-ear"><path id={`${uid}-surprised-right-ear`} data-part="right-ear" fill={`url(#${uid}-surprised-fur)`} d="M426 121 C431 76 459 56 490 57 C526 55 558 86 562 117 C572 155 549 183 509 191 Z"/>
 <path id={`${uid}-surprised-right-inner-ear`} data-part="right-inner-ear" fill={`url(#${uid}-surprised-tan)`} strokeWidth="8" d="M454 135 C457 111 474 95 492 99 C515 103 528 122 525 143 C522 157 512 167 500 173 Z"/></BearPart>
 <path id={`${uid}-surprised-ear-highlights`} data-part="ear-highlights" fill="none" stroke="#c7976e" strokeWidth="9" d="M43 193 C42 150 83 124 115 137 M439 111 C454 66 505 63 536 93"/>
 <path id={`${uid}-surprised-head`} data-part="head" fill={`url(#${uid}-surprised-fur)`} d="M159 165 C188 139 220 122 249 112 C270 80 295 63 307 66 C319 70 307 93 302 103 C325 87 345 78 355 86 C367 94 351 113 335 120 C364 96 402 116 429 125 C462 137 508 168 534 215 C553 249 548 273 571 299 C587 317 586 333 565 330 C583 350 581 374 568 384 L562 376 C550 424 513 465 472 491 C399 534 231 549 151 500 C132 489 122 476 115 452 C109 470 88 452 93 410 C73 425 72 403 81 378 C94 344 88 298 96 263 C103 224 120 191 142 178 Z"/>
 <path id={`${uid}-surprised-face-shadow`} data-part="face-shadow" fill="#875839" stroke="none" d="M94 411 C111 456 153 483 213 492 C360 515 499 475 559 376 C551 426 515 466 472 491 C391 541 231 543 151 500 C130 486 121 474 115 452 C107 464 96 449 94 411 Z"/>
 <path id={`${uid}-surprised-head-highlight`} data-part="head-highlight" fill="none" stroke="#c2946b" strokeWidth="8" d="M165 170 C194 148 224 132 252 122 C269 101 287 81 303 77 M357 117 C383 119 404 125 426 131"/>
 <path id={`${uid}-surprised-muzzle`} data-part="muzzle" stroke="none" fill={`url(#${uid}-surprised-tan)`} d="M255 367 C264 337 276 316 284 290 C292 265 309 252 335 257 C365 258 382 281 398 305 C416 324 435 341 441 369 C454 412 430 453 399 463 C366 474 312 470 286 454 C258 436 247 402 255 367 Z"/>
 <path id={`${uid}-surprised-left-brow`} data-part="left-brow" transform="translate(0 -20)" stroke="none" fill="#60381e" d="M184 235 C190 220 207 211 216 214 C228 221 210 229 201 233 C190 244 178 251 184 235 Z"/>
 <path id={`${uid}-surprised-right-brow`} data-part="right-brow" transform="translate(0 -20)" stroke="none" fill="#60381e" d="M410 190 C411 175 435 180 448 192 C463 209 439 201 428 199 C417 198 409 195 410 190 Z"/>
 <path id={`${uid}-surprised-left-eye`} data-part="left-eye" fill="#fffaf0" strokeWidth="6" d="M201 336 C187 315 194 287 210 278 C232 266 252 282 256 303 L254 331 C235 326 215 333 201 336 Z"/>
 <clipPath id={`${uid}-surprised-left-pupil-boundary`} data-part="left-pupil-boundary"><use href={`#${uid}-surprised-left-eye`}/></clipPath><g clipPath={`url(#${uid}-surprised-left-pupil-boundary)`}><g id={`${uid}-surprised-left-pupil`} data-part="left-pupil"  stroke="none"><ellipse cx="233" cy="313" rx="19" ry="25" fill="#815334"/><ellipse cx="233" cy="314" rx="13" ry="19" fill="#38251d"/><ellipse cx="228" cy="303" rx="5.5" ry="6.5" fill="#fffdf5"/><circle cx="240" cy="321" r="2.5" fill="#f3d5ac" opacity=".8"/></g></g>
 <path id={`${uid}-surprised-right-eye`} data-part="right-eye" fill="#fffaf0" strokeWidth="6" d="M408 306 C395 284 404 252 421 242 C442 232 462 247 466 267 L463 294 C443 291 423 299 408 306 Z"/>
 <clipPath id={`${uid}-surprised-right-pupil-boundary`} data-part="right-pupil-boundary"><use href={`#${uid}-surprised-right-eye`}/></clipPath><g clipPath={`url(#${uid}-surprised-right-pupil-boundary)`}><g id={`${uid}-surprised-right-pupil`} data-part="right-pupil"  stroke="none"><ellipse cx="432" cy="283" rx="19" ry="25" fill="#815334"/><ellipse cx="432" cy="284" rx="13" ry="19" fill="#38251d"/><ellipse cx="427" cy="273" rx="5.5" ry="6.5" fill="#fffdf5"/><circle cx="439" cy="291" r="2.5" fill="#f3d5ac" opacity=".8"/></g></g>
 
 <g fill="#cf9477" stroke="none"><ellipse cx="187" cy="373" rx="34" ry="21" transform="rotate(-11 187 373)"/><ellipse cx="493" cy="321" rx="33" ry="21" transform="rotate(-10 493 321)"/></g>
 
 
 
 <ellipse id={`${uid}-surprised-surprised-mouth`} data-part="surprised-mouth" cx="350" cy="410" rx="21" ry="28" fill="#64371f" strokeWidth="6"/><BearPart zone="nose"><path id={`${uid}-surprised-nose`} data-part="nose" strokeWidth="5" fill="#64371f" d="M301 324 C300 306 339 297 367 302 C393 305 381 328 368 343 C348 365 309 348 301 324 Z"/>
 <path id={`${uid}-surprised-nose-shine`} data-part="nose-shine" stroke="none" fill="#ba8b61" d="M319 314 C331 307 353 305 366 308 C355 317 333 322 319 314 Z"/></BearPart>
 
 
 
 <path id={`${uid}-surprised-bow-shadow`} data-part="bow-shadow" stroke="none" fill="#b18158" d="M294 548 C284 583 298 610 326 596 L363 577 C380 573 414 591 438 584 C463 581 458 551 447 528 Z"/>
 <BearPart zone="bow"><path id={`${uid}-surprised-bow-left`} data-part="bow-left" fill={`url(#${uid}-surprised-blue)`} strokeWidth="9" d="M352 528 C330 513 306 499 292 511 C280 520 287 543 290 550 C284 573 295 592 311 588 C328 582 344 565 354 559 Z"/>
 <path id={`${uid}-surprised-bow-right`} data-part="bow-right" fill={`url(#${uid}-surprised-blue)`} strokeWidth="9" d="M387 526 C407 506 423 481 437 491 C447 497 445 518 449 539 C455 563 444 573 428 568 C413 568 397 559 385 552 Z"/>
 <path id={`${uid}-surprised-bow-folds`} data-part="bow-folds" strokeWidth="4" fill="none" d="M324 536 L347 541 L332 553 M391 536 L411 524 M390 544 L413 551"/>
 <path id={`${uid}-surprised-bow-knot`} data-part="bow-knot" fill={`url(#${uid}-surprised-blue)`} strokeWidth="8" d="M355 524 C364 516 381 518 386 528 C390 538 388 551 380 557 C370 563 355 556 352 548 C349 539 349 530 355 524 Z"/></BearPart>
 <path id={`${uid}-surprised-resting-paw`} data-part="resting-paw" fill={`url(#${uid}-surprised-fur)`} d="M153 601 C188 589 221 599 254 609 C300 623 323 648 320 676 C320 699 305 721 281 722 C252 737 225 712 197 714 C151 716 114 720 89 701 C68 685 65 661 69 635"/>
 <path id={`${uid}-surprised-paw-shadow`} data-part="paw-shadow" stroke="none" fill="#805134" d="M78 659 C89 683 115 688 144 686 C179 685 209 700 237 708 C266 718 300 709 317 688 C312 708 297 721 280 722 C251 735 223 714 197 714 C149 717 114 719 90 702 C79 692 74 675 78 659 Z"/>
 <path id={`${uid}-surprised-paw-details`} data-part="paw-details" fill="none" strokeWidth="7" d="M198 593 L205 575 M265 689 C276 696 278 706 275 719 M296 672 C306 680 309 689 309 700"/>
 <path id={`${uid}-surprised-paw-shine`} data-part="paw-shine" fill="none" stroke="#c69872" strokeWidth="7" d="M165 603 C209 600 286 625 306 654"/>
<g id={`${uid}-surprised-resting-right-paw`} data-part="resting-right-paw" fill={`url(#${uid}-surprised-fur)`}><path d="M513 579 C549 578 572 598 574 629 C585 659 565 683 532 686 C502 694 478 680 478 660 C469 637 485 604 513 579 Z"/><path fill="none" strokeWidth="5" d="M495 659 Q504 653 511 658 M512 672 Q522 664 530 669"/><path fill="none" stroke="#c39570" strokeWidth="7" d="M521 593 Q548 593 555 615"/></g></g>
<g id={`${uid}-surprised-surprise-marks`} data-part="surprise-marks" stroke="#507fa6" strokeWidth="9" strokeLinecap="round"><path d="M612 137 L622 91 M644 157 L677 128 M594 118 L587 81"/></g>
</>;
}}
