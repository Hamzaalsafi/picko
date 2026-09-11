"use client";
import { useLocale } from "@/src/i18n/LocaleProvider";

import { motion, MotionConfig } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HeroScene, RevealSection, ScrollProgress } from "./Motion";
import Picko, { type PickoPose } from "./Picko";
import ScrollStory from "./ScrollStory";
import { categories } from "./categories";

function ChooseLink({
  children = "Let Picko choose",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { t, path } = useLocale();

  return (
    <a
      className={`button primary ${className}`}
      href={path("/choose")}
      onPointerEnter={() =>
        window.dispatchEvent(new CustomEvent("picko-cta", { detail: true }))
      }
      onPointerLeave={() =>
        window.dispatchEvent(new CustomEvent("picko-cta", { detail: false }))
      }
      onFocus={() =>
        window.dispatchEvent(new CustomEvent("picko-cta", { detail: true }))
      }
      onBlur={() =>
        window.dispatchEvent(new CustomEvent("picko-cta", { detail: false }))
      }
    >
      {typeof children === "string" ? t(children) : children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
function useStartCategory() {
  const router = useRouter();
  const {path}=useLocale();
  return (name: string) =>
    router.push(path(`/choose?category=${encodeURIComponent(name)}`));
}
export function Hero() {
  const { t } = useLocale();

  const startCategory = useStartCategory();
  const [eager, setEager] = useState(false);
  useEffect(() => {
    const react = (event: Event) =>
      setEager((event as CustomEvent<boolean>).detail);
    window.addEventListener("picko-cta", react);
    return () => window.removeEventListener("picko-cta", react);
  }, []);
  return (
    <RevealSection className="hero section">
      <div className="hero-copy">
        <div className="hero-kicker">
          <span className="status-dot" />{" "}
          {t("SMALL BEAR. BIG DECISION ENERGY.")}
        </div>
        <h1>
          {t("Can’t decide?")}
          <br />
          {t("Let")}{" "}
          <span className="hero-picko">
            {t("Picko")}
            <svg viewBox="0 0 250 24" aria-hidden="true">
              <path d="M4 17 Q111 -2 245 11 M29 23 Q123 8 219 18" />
            </svg>
          </span>
          <br />
          {t("decide")}
          <span className="blue-text">.</span>
        </h1>
        <p>
          {t("Too many options. Too many open tabs.")}
          <br />
          {t("Tell Picko what you’re in the mood for.")}
          <br />
          <strong>{t("He’ll make the choice.")}</strong>
        </p>
        <div className="hero-actions">
          <ChooseLink />
          <a className="text-link" href="#how-it-works">
            <span className="play-icon">▷</span> {t("See how it works")}
          </a>
        </div>
        <div className="hero-footnote">
          <span className="mini-faces">
            <i>☺</i>
            <i>✿</i>
            <i>☻</i>
          </span>
          <span>
            {t("For the “I don’t know, you choose” people.")}
            <br />
            <strong>{t("Yes, you. You’re in the right place.")}</strong>
          </span>
        </div>
      </div>
      <HeroScene>
        <div className="scene-orbit orbit-one" />
        <div className="scene-orbit orbit-two" />
        <span className="scene-star star-one">✦</span>
        <span className="scene-star star-two">✧</span>
        <span className="scene-star star-three">✦</span>
        <div className="hero-bubble">
          {eager ? (
            <>
              {t("Oh! Pick me.")}
              <br />
              {t("I’ve got this!")} <span>✦</span>
            </>
          ) : (
            <>
              {t("Whenever")}
              <br />
              {t("you’re ready.")} <span>♡</span>
            </>
          )}
        </div>
        <button
          className="floating-chip chip-eat"
          onClick={() => startCategory("Eat")}
        >
          <span>🍔</span>
          {t("What to eat?")}
        </button>
        <button
          className="floating-chip chip-watch"
          onClick={() => startCategory("Watch")}
        >
          <span>🎬</span>
          {t("What to watch?")}
        </button>
        <button
          className="floating-chip chip-read"
          onClick={() => startCategory("Read")}
        >
          <span>📚</span>
          {t("What to read?")}
        </button>
        <button
          className="floating-chip chip-out"
          onClick={() => startCategory("Go out")}
        >
          <span>🌙</span>
          {t("Where to go?")}
        </button>
        <div className="hero-mascot">
          <Picko trackEyes pose={eager ? "excited" : "neutral"} />
        </div>
        <div className="hero-pick-card">
          <div className="tiny-movie">
            ☾
            <span>
              {t("THE NIGHT")}
              <br />
              {t("IS YOURS")}
            </span>
          </div>
          <div>
            <span className="card-eyebrow">{t("✦ ONE LESS DECISION")}</span>
            <strong>{t("Your evening, sorted.")}</strong>
            <small>{t("A cozy movie night? That’s a yes.")}</small>
          </div>
          <span className="pick-check">✓</span>
        </div>
        <div className="scene-caption">
          {t("a little nudge toward a good day")} <span>↗</span>
        </div>
      </HeroScene>
    </RevealSection>
  );
}
function DecisionStrip() {
  const { t } = useLocale();
  return (
    <div className="decision-strip">
      <span>{t("YOUR NEXT GOOD THING")}</span>
      <i>✦</i>
      <span>{t("A really good meal")}</span>
      <i>✦</i>
      <span>{t("Your new favorite movie")}</span>
      <i>✦</i>
      <span>{t("A spontaneous little adventure")}</span>
      <i>✦</i>
      <span>{t("One less “I don’t know”")}</span>
    </div>
  );
}
export function ProblemSection() {
  const { t } = useLocale();

  return (
    <RevealSection className="section problem-section">
      <div>
        <span className="eyebrow">{t("SOUND FAMILIAR?")}</span>
        <h2>
          {t("Too many choices.")}
          <br />
          {t("Not enough")} <em>{t("certainty.")}</em>
        </h2>
        <p>
          {t("Forty minutes picking a movie. Twenty tabs choosing dinner.")}
          <br className="desktop-break" />{" "}
          {t("Sometimes the hardest part is just… choosing.")}
        </p>
        <div className="problem-answer">
          {t("You don’t need more options.")}
          <br />
          <strong>{t("You need one good answer.")}</strong>
          <span>↗</span>
        </div>
      </div>
      <div className="choice-cloud">
        <span className="cloud-choice choice-one">
          {t("Pizza? Sushi? Tacos?")}
        </span>
        <span className="cloud-choice choice-two">
          {t("“Whatever you want”")}
        </span>
        <span className="cloud-choice choice-three">
          {t("Something new? The usual?")}
        </span>
        <span className="cloud-choice choice-four">
          {t("What should we watch?")}
        </span>
        <span className="cloud-choice choice-five">
          {t("Let me check one more review…")}
        </span>
        <div className="cloud-pick">
          <span>✦</span>
          <div>
            <small>{t("A LITTLE CLARITY")}</small>
            <strong>{t("Picko’s got this.")}</strong>
          </div>
          <span>✓</span>
        </div>
      </div>
    </RevealSection>
  );
}
export function HowItWorks() {
  const { t } = useLocale();

  return (
    <RevealSection className="section how-section" id="how-it-works">
      <div className="section-heading">
        <span className="eyebrow">
          {t("THREE LITTLE STEPS. ONE BIG SIGH OF RELIEF.")}
        </span>
        <h2>
          {t("From “hmm” to")}{" "}
          <span className="blue-text">{t("“heck yes.”")}</span>
        </h2>
      </div>
      <div className="steps-grid">
        {[
          {
            title: "Tell Picko",
            copy: "A few quick questions. Your mood, your people, your kind of day.",
            pose: "wave",
            note: "What’s the vibe?",
          },
          {
            title: "Picko thinks",
            copy: "A little thought, a little intuition. He puts your answers together.",
            pose: "thinking",
            note: "Hmm… I have an idea.",
          },
          {
            title: "Get your pick",
            copy: "One thoughtful recommendation. Now go make a little memory.",
            pose: "celebrating",
            note: "Yep. This is the one.",
          },
        ].map((step, index) => (
          <motion.article
            className="step-card"
            key={t(step.title)}
            initial={false}
            whileInView={{ opacity: [0.3, 1], y: [28, 0] }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{ y: -7 }}
          >
            <div className="step-visual">
              <span className="step-number">0{index + 1}</span>
              <Picko pose={step.pose as PickoPose} />
              <span className="step-note">{t(step.note)}</span>
            </div>
            <h3>{t(step.title)}</h3>
            <p>{t(step.copy)}</p>
          </motion.article>
        ))}
      </div>
    </RevealSection>
  );
}
export function Personalization() {
  const { t } = useLocale();

  return (
    <RevealSection className="section personalization">
      <div className="profile-card">
        <div className="profile-top">
          <span>{t("YOUR PICKO PROFILE")}</span>
          <span>{t("✧ made of little things")}</span>
        </div>
        <div className="profile-avatar">
          <Picko pose="proud" />
        </div>
        <h3>{t("Very you. A little unexpected.")}</h3>
        <div className="preference-bubbles">
          <span>{t("☾ Cozy nights in")}</span>
          <span>{t("🎬 Movie lover")}</span>
          <span>{t("♡ Good company")}</span>
          <span>{t("↗ Adventure: 62%")}</span>
          <span>{t("✧ Curious by nature")}</span>
          <span>{t("☕ Little treats, little budget")}</span>
        </div>
        <div className="profile-caption">
          <span>♡</span> {t("Your preferences. Your pace. Always.")}
        </div>
      </div>
      <div className="personalization-copy">
        <span className="eyebrow">{t("LESS GUESSWORK. MORE YOU.")}</span>
        <h2>
          {t("Picko gets")}
          <br />
          {t("to")} <em>{t("know you.")}</em>
        </h2>
        <p>
          {t(
            "The idea is simple: the more you tell Picko, the better your picks get. Your likes, your not-for-mes, your mood today.",
          )}
        </p>
        <p>
          {t(
            "A quiet night on a small budget? An adventure with friends? The little things make the difference.",
          )}
        </p>
        <div className="privacy-note">
          <span>♡</span>
          <div>
            <strong>{t("A companion, not a mind reader.")}</strong>
            <small>
              {t(
                "You choose what to share. This preview only uses your answers for your current pick.",
              )}
            </small>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
export function Categories() {
  const { t } = useLocale();

  const startCategory = useStartCategory();
  return (
    <RevealSection className="section categories-section" id="categories">
      <div className="section-heading">
        <span className="eyebrow">
          {t("ALL THE LITTLE “WHAT SHOULD I…?”S")}
        </span>
        <h2>
          {t("One Picko.")} <em>{t("Every decision.")}</em>
        </h2>
        <p>{t("Start with tonight. See where it takes you.")}</p>
      </div>
      <div className="category-grid">
        {categories.map((c, i) => (
          <button
            className={`category-card category-${i}`}
            key={t(c.name)}
            onClick={() => startCategory(c.name)}
          >
            <span className="category-emoji">{c.icon}</span>
            <strong>{t(c.name)}</strong>
            <small>{t(c.description)}</small>
            <span className="category-arrow">↗</span>
          </button>
        ))}
      </div>
      <div className="coming-categories">
        <span>{t("AND A LITTLE FURTHER DOWN THE ROAD")}</span>
        <div>
          {[
            "🎮 Play",
            "🎵 Listen",
            "🛍️ Shop",
            "✈️ Travel",
            "🎁 Gifts",
            "👕 Style",
          ].map((c) => (
            <span key={c}>
              {c}
              <small>{t("Coming later")}</small>
            </span>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
export function GroupDecision() {
  const { t } = useLocale();

  const [decided, setDecided] = useState(false);
  return (
    <RevealSection className="section group-section">
      <div>
        <span className="eyebrow">{t("THE GROUP CHAT DESERVES BETTER.")}</span>
        <h2>
          {t("Four friends.")}
          <br />
          {t("Zero decisions.")}
          <br />
          <span className="blue-text">{t("One Picko.")}</span>
        </h2>
        <p>
          {t("“Anywhere” isn’t a place.")}
          <br />
          {t("“Whatever” isn’t a plan.")}
          <br />
          {t("Let your most decisive friend take it from here.")}
        </p>
        <button className="button primary" onClick={() => setDecided(!decided)}>
          {t(decided ? "Replay the group chat" : "Let Picko settle it")}
          <span>↗</span>
        </button>
        <small className="concept-note">
          {t("A little preview of group picks. Shared rooms are coming later.")}
        </small>
      </div>
      <div className="chat-card">
        <div className="chat-header">
          <span className="chat-avatars">☺ ☻ ☺</span>
          <div>
            <strong>{t("The very indecisive ones")}</strong>
            <small>{t("4 friends · 0 actual plans")}</small>
          </div>
          <span>•••</span>
        </div>
        <div className="chat-messages">
          <div className="chat-message mine">
            <small>{t("You")}</small>
            <p>{t("So… where are we going tonight?")}</p>
          </div>
          <div className="chat-message">
            <small>{t("Alex")}</small>
            <p>{t("Anywhere honestly 🙃")}</p>
          </div>
          <div className="chat-message">
            <small>{t("Sam")}</small>
            <p>{t("You guys choose")}</p>
          </div>
          <div className="chat-message">
            <small>{t("Jamie")}</small>
            <p>{t("I’m good with whatever 😂")}</p>
          </div>
          <div className="picko-chat">
            <div className="chat-picko">
              <Picko pose={decided ? "proud" : "confused"} />
            </div>
            <div>
              <small>{t("PICKO HAS ENTERED THE CHAT")}</small>
              <strong>
                {decided
                  ? "A new café. Then a sunset walk."
                  : "Alright. I’ll decide."}
              </strong>
              <p>
                {decided
                  ? "Low effort. Good company. A plan everyone can get behind. ☕"
                  : "Someone had to say it. 😌"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
export function MascotSection() {
  const { t } = useLocale();

  const [pose, setPose] = useState<PickoPose>("proud");
  const expressions: { pose: PickoPose; label: string; quote: string }[] = [
    {
      pose: "thinking",
      label: "Thinking",
      quote: "Let me put my one brain cell to work.",
    },
    {
      pose: "excited",
      label: "Excited",
      quote: "Oh, you’re going to LOVE this one.",
    },
    {
      pose: "confused",
      label: "Confused",
      quote: "You want me to choose… but not that?",
    },
    {
      pose: "celebrating",
      label: "Celebrating",
      quote: "Look at us. Making actual plans!",
    },
    {
      pose: "facepalm",
      label: "Facepalm",
      quote: "“Anything” is not a food group.",
    },
    {
      pose: "proud",
      label: "A little proud",
      quote: "Not to brag, but that was a very good pick.",
    },
  ];
  return (
    <RevealSection className="section mascot-section" id="meet-picko">
      <div className="section-heading">
        <span className="eyebrow">
          {t("A SMALL INTRODUCTION TO A BIG PERSONALITY.")}
        </span>
        <h2>
          {t("Meet")} <span className="blue-text">{t("Picko.")}</span>
        </h2>
        <p>
          {t("Your tiny decision-making companion.")}
          <br />
          {t("Part good taste. Part gut feeling. A very small amount of sass.")}
        </p>
      </div>
      <div className="mascot-stage">
        <span className="mascot-note note-left">
          {t("excellent taste")}
          <br />
          {t("questionable dance moves ↘")}
        </span>
        <Picko pose={pose} />
        <span className="mascot-note note-right">
          {t("↙ big heart.")}
          <br />
          {t("even bigger head.")}
        </span>
      </div>
      <p className="mascot-quote" aria-live="polite">
        “{t(expressions.find((e) => e.pose === pose)?.quote)}”
      </p>
      <div className="expression-tabs" aria-label={t("Picko’s expressions")}>
        {expressions.map((e) => (
          <button
            key={e.pose}
            aria-pressed={pose === e.pose}
            onClick={() => setPose(e.pose)}
          >
            {t(e.label)}
          </button>
        ))}
      </div>
    </RevealSection>
  );
}
export function SocialSection() {
  const { t } = useLocale();

  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  async function share() {
    try {
      await navigator.clipboard.writeText(
        "POV: You said ‘I don’t care, you choose.’ Meet your new most decisive friend: Picko. pickoforme.com",
      );
      setCopied(true);
    } catch {
      setMessage(
        "POV: You said ‘I don’t care, you choose.’ — PickoGo · pickoforme.com",
      );
    }
  }
  return (
    <RevealSection className="section social-section">
      <div>
        <span className="eyebrow">
          {t("TOO MUCH PERSONALITY FOR ONE WEBSITE.")}
        </span>
        <h2>
          {t("Picko doesn’t")}
          <br />
          {t("just")} <em>{t("live here.")}</em>
        </h2>
        <p>
          {t(
            "Your group chat. Your next story. That friend who takes an hour to order. A little Picko goes a long way.",
          )}
        </p>
        <button className="text-link" onClick={share}>
          {t(copied ? "✓ Caption copied" : "Send a little Picko energy ↗")}
        </button>
        <p role="status" className="share-status">
          {message}
        </p>
      </div>
      <div className="social-cards">
        <div className="social-post">
          <span className="social-label">{t("PICKO, UNFILTERED")}</span>
          <h3>
            {t("POV: You said")}
            <br />
            {t("“I don’t care,")}
            <br />
            {t("you choose.”")}
          </h3>
          <Picko pose="confused" />
          <div>
            <span>♡ ↗</span>
            <small>{t("@pickogo · concept")}</small>
          </div>
        </div>
        <div className="sticker-card">
          <span className="social-label">{t("GOOD PICK. GREAT STICKER.")}</span>
          <Picko pose="celebrating" />
          <strong>{t("decision made.")}</strong>
          <span className="sticker-star">✦</span>
          <a href="/picko.svg" download="picko.svg">
            {t("Take Picko with you ↓")}
          </a>
        </div>
      </div>
    </RevealSection>
  );
}
export function FinalCTA() {
  const { t } = useLocale();
  return (
    <RevealSection className="final-section">
      <div className="final-inner">
        <div>
          <span className="eyebrow">
            {t("GO ON. GIVE YOUR BRAIN A LITTLE BREAK.")}
          </span>
          <h2>
            {t("Still can’t decide?")}
            <br />
            <span>{t("Let Picko decide.")}</span>
          </h2>
          <ChooseLink>{t("Try PickoGo")}</ChooseLink>
          <p>{t("Your next decision is one click away.")}</p>
        </div>
        <div className="final-bear">
          <span>{t("you had me at “choose.” ♡")}</span>
          <Picko pose="wave" />
        </div>
      </div>
    </RevealSection>
  );
}
export function Footer() {
  const { t, path } = useLocale();
  return (
    <footer className="landing-footer">
      <a className="wordmark" href="#">
        {t("Picko")}
        <span>{t("Go")}</span>
        <i>✦</i>
      </a>
      <p>{t("A little less overthinking. A little more life.")}</p>
      <span>
        © {new Date().getFullYear()} {t("PickoGo")}
      </span>
      <a href={path("/choose")}>{t("Go make a good decision ↗")}</a>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="landing">
        <ScrollProgress />
        <main id="main-content">
          <Hero />
          <DecisionStrip />
          <ScrollStory />
          <ProblemSection />
          <HowItWorks />
          <Personalization />
          <Categories />
          <GroupDecision />
          <MascotSection />
          <SocialSection />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
