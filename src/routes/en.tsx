import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Shield, Star, Wind, Scissors, Dumbbell, HandHeart, Baby,
  Clock, Repeat, Smartphone, CheckCircle2,
  CreditCard, UserCircle, Play, Calendar, Menu, X, ChevronDown, ArrowRight,
  ChevronLeft, ChevronRight, Gift, MessageCircle,
} from "lucide-react";
import heroWaistBg from "@/assets/hero-waist-bg.jpg";
import symptomWaist from "@/assets/symptom-waist.jpg";
import symptomBloating from "@/assets/symptom-bloating.jpg";
import symptomFatigue from "@/assets/symptom-fatigue.jpg";
import symptomHeart from "@/assets/symptom-heart.jpg";
import symptomHormones from "@/assets/symptom-hormones.jpg";
import symptomInsulin from "@/assets/symptom-insulin.jpg";
import symptomStress from "@/assets/symptom-stress.jpg";

import visceral2 from "@/assets/visceral-2.jpg";
import benefitWaist from "@/assets/benefit-waist.jpg";
import benefitDigestion from "@/assets/benefit-digestion.jpg";
import benefitPosture from "@/assets/benefit-posture.jpg";
import benefitCirculation from "@/assets/benefit-circulation.jpg";
import benefitVitality from "@/assets/benefit-vitality.jpg";
import authorS1 from "@/assets/author-s1.png.asset.json";
import authorS2 from "@/assets/author-s2.png.asset.json";
import authorS3 from "@/assets/author-s3.png.asset.json";
import authorS4 from "@/assets/author-s4.png.asset.json";
import resultWaist from "@/assets/result-waist.png.asset.json";
import o1 from "@/assets/o1en.png.asset.json";
import o2 from "@/assets/o2en.png.asset.json";
import o3 from "@/assets/o3en.png.asset.json";
import o4 from "@/assets/o4en.png.asset.json";
import o5 from "@/assets/o5en.png.asset.json";
import o6 from "@/assets/o6en.png.asset.json";
import o7 from "@/assets/o7en.png.asset.json";
import o8 from "@/assets/o8en.png.asset.json";
import do0 from "@/assets/do0.jpg.asset.json";
import do1 from "@/assets/do1.jpg.asset.json";
import do2 from "@/assets/do2.jpg.asset.json";
import do3 from "@/assets/do3.jpg.asset.json";
import do4a from "@/assets/do4a.jpg.asset.json";
import do4b from "@/assets/do4b.jpg.asset.json";
import do5 from "@/assets/do5.jpg.asset.json";
import do6a from "@/assets/do6a.jpg.asset.json";
import do6b from "@/assets/do6b.jpg.asset.json";

const PAY_URL = "https://pay.vimoreau.com/connect/form?site=pay.vimoreau.com&amount=4.99&symbol=USD&vat=0&riderect_success=https%3A%2F%2Fvimoreau.com%2Fpayment-failed&riderect_failed=https%3A%2F%2Fvimoreau.com%2Fpayment-failed&riderect_back=https%3A%2F%2Fvimoreau.com%2Fen&billing_country=IN";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: "Waist Transformation — 14-Day Program | Victoire Moreau" },
      { name: "description", content: "Online 14-day program to eliminate visceral fat, activate deep muscles and improve digestion. Just 5 minutes a day." },
    ],
  }),
  component: LandingPage,
});

/* ---------- helpers ---------- */
function tomorrowEn() {
  const t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toLocaleDateString("en-GB", { day: "numeric", month: "long" });
}

function Reveal({ children, className = "", as: As = "div" }: { children: ReactNode; className?: string; as?: any }) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    document.documentElement.classList.add("js-reveal-enabled");
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <As ref={ref as any} className={`reveal ${className}`}>
      {children}
    </As>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <hr className="section-divider" />
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="label-eyebrow">{children}</p>;
}

function CTA({ children = "Start the program", className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <a href={PAY_URL} className={`btn-primary btn-primary-hover ${className}`}>
      {children}
      <ArrowRight size={16} strokeWidth={1.5} />
    </a>
  );
}

function PriceBlock({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <span className={`label-eyebrow ${light ? "text-white/60" : ""}`}>Launch price</span>
      <div className="flex items-baseline gap-3">
        <span className="font-display text-5xl md:text-6xl font-semibold leading-none" style={{ color: "var(--color-terra)" }}>
          $4.99
        </span>
        <span className={`text-lg line-through ${light ? "text-white/50" : ""}`} style={!light ? { color: "var(--color-ink-muted)" } : {}}>
          $49
        </span>
      </div>
    </div>
  );
}

/* ---------- HEADER ---------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const navItems = [
    { href: "#programme", label: "Program" },
    { href: "#auteure", label: "Author" },
    { href: "#avis", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="relative z-40 bg-[var(--color-bg)] border-b border-[rgba(193,122,90,0.12)]">
      <div className="mx-auto max-w-6xl px-5 md:px-6 h-14 md:h-16 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <a href="#top" className="font-display text-base md:text-xl tracking-tight truncate" style={{ color: "var(--color-ink)" }}>
          Victoire Moreau
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-sm hover:text-[var(--color-terra)] transition-colors" style={{ color: "var(--color-ink-muted)" }}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          {scrolled && (
            <a href={PAY_URL} className="btn-primary btn-primary-hover" style={{ padding: "10px 22px", fontSize: "0.72rem" }}>
              Start the program
            </a>
          )}
        </div>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 -mr-2 shrink-0" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[rgba(193,122,90,0.2)] bg-[var(--color-bg)]">
          <div className="px-6 py-5 flex flex-col gap-4">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-base" style={{ color: "var(--color-ink)" }}>
                {n.label}
              </a>
            ))}
            <a href={PAY_URL} onClick={() => setOpen(false)} className="btn-primary btn-primary-hover mt-2 text-center">
              Start the program
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- PRE-HEADER ---------- */
function PreHeaderStrip() {
  const [date, setDate] = useState<string | null>(null);
  useEffect(() => { setDate(tomorrowEn()); }, []);
  return (
    <div className="w-full py-2.5 px-4 text-center text-xs md:text-sm text-white" style={{ background: "var(--color-terra)" }}>
      <span className="tracking-wide" suppressHydrationWarning>
        Online course{date ? ` · Starts: ${date}` : ""} · Instant access after payment
      </span>
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroWaistBg})`,
        backgroundSize: "cover",
        backgroundPosition: "70% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 md:hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(250,247,244,0.99) 0%, rgba(250,247,244,0.97) 45%, rgba(250,247,244,0.85) 65%, rgba(250,247,244,0.45) 85%, rgba(250,247,244,0.15) 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden md:block pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(250,247,244,0.98) 0%, rgba(250,247,244,0.9) 42%, rgba(250,247,244,0.35) 70%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-10 md:pt-20 pb-16 md:pb-28 min-h-[88vh] md:min-h-[80vh] flex items-center">
        <div className="w-full md:max-w-[34rem]">
          <Reveal>
            <Eyebrow>
              Online program · 14 days · Starts {tomorrowEn()}
            </Eyebrow>

            <h1 className="mt-5 text-[2.5rem] sm:text-5xl md:text-[3.6rem] leading-[1.02] font-display">
              <span style={{ color: "var(--color-terra)" }}>Waist</span>
              <br />
              <span>Transformation</span>
            </h1>
            <p className="mt-5 text-base md:text-[1.0625rem] max-w-[32rem]" style={{ color: "var(--color-ink-muted)" }}>
              Eliminate visceral fat, awaken your deep muscles and regain a flat stomach
              with massage and breathing techniques — only 5 minutes a day.
            </p>

            <div className="mt-7">
              <PriceBlock />
            </div>

            <div className="mt-6">
              <CTA>Start the program</CTA>
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs md:text-sm" style={{ color: "var(--color-ink-muted)" }}>
              <li className="flex items-center gap-1.5"><CheckCircle2 size={14} style={{ color: "var(--color-sage)" }} /> 30-day access</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 size={14} style={{ color: "var(--color-sage)" }} /> Money-back guarantee</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 size={14} style={{ color: "var(--color-sage)" }} /> Mobile & tablet</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SIGNATURE BAND ---------- */
function SignatureBand() {
  return (
    <div className="w-full py-10 md:py-14 px-6 text-center text-white" style={{ background: "var(--color-terra)" }}>
      <p className="font-display italic text-xl md:text-2xl max-w-3xl mx-auto leading-snug">
        “This program is not a diet. It's reclaiming your health and your figure.”
      </p>
    </div>
  );
}

/* ---------- BONUS OFFER ---------- */
function BonusOffer() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <Eyebrow>Limited offer</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-[2.25rem]">Two free bonuses with your enrolment</h2>
          <p className="mt-6 md:text-[1.0625rem] max-w-2xl mx-auto" style={{ color: "var(--color-ink-muted)" }}>
            Sign up today and receive two exclusive gifts that support your transformation
            beyond the main program.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-5 text-left">
            <div className="p-7 md:p-8 bg-white border border-[rgba(193,122,90,0.25)]">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center" style={{ background: "var(--color-terra)" }}>
                  <Gift size={22} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="label-eyebrow" style={{ color: "var(--color-terra)" }}>Bonus #1 — free ($39 value)</p>
                  <h3 className="font-display text-xl md:text-[1.4rem] mt-1 leading-snug">“Anti-Stress Breathing” Meditation</h3>
                  <p className="mt-3 text-sm" style={{ color: "var(--color-ink-muted)" }}>
                    A deep breathing technique to release diaphragm tension in 10 minutes.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-7 md:p-8 bg-white border border-[rgba(193,122,90,0.25)]">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center" style={{ background: "var(--color-terra)" }}>
                  <Play size={20} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="label-eyebrow" style={{ color: "var(--color-terra)" }}>Bonus #2 — free ($59 value)</p>
                  <h3 className="font-display text-xl md:text-[1.4rem] mt-1 leading-snug">Live open class with Victoire</h3>
                  <p className="mt-3 text-sm" style={{ color: "var(--color-ink-muted)" }}>
                    An exclusive live session to ask questions, practise together and get personal advice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <CTA>Get the bonuses + program — $4.99</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- GUARANTEE ---------- */
function Guarantee() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center border" style={{ borderColor: "var(--color-terra)" }}>
            <Shield size={28} strokeWidth={1.3} style={{ color: "var(--color-terra)" }} />
          </div>
          <h3 className="mt-6 text-2xl md:text-3xl">Money-back guarantee</h3>
          <p className="mt-5 md:text-[1.0625rem]" style={{ color: "var(--color-ink-muted)" }}>
            If the program doesn't suit you, I'll refund you in full within 14 days.
            No questions. No conditions.
          </p>
          <p className="mt-4 font-display italic text-lg">— Victoire Moreau</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SOCIAL PROOF ---------- */
function SocialProof() {
  return (
    <section id="avis" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem] leading-tight">
              More than 20,000 people <br className="hidden md:inline" />
              have already transformed their bodies
            </h2>
          </div>
        </Reveal>
        <div className="mt-14">
          <ReviewImagesCarousel />
        </div>
      </div>
    </section>
  );
}

function ReviewImagesCarousel() {
  const images = [o1, o2, o3, o4, o5, o6, o7, o8];
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: true });
  return (
    <div className="relative">
      <div className="overflow-hidden -ml-6" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-6">
              <div className="p-4 h-full border border-[rgba(193,122,90,0.18)] flex items-center justify-center" style={{ background: "var(--color-surface)" }}>
                <img
                  src={img.url}
                  alt={`WhatsApp testimonial ${i + 1}`}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-3">
        <button aria-label="Previous" onClick={() => embla?.scrollPrev()} className="w-10 h-10 border flex items-center justify-center hover:bg-[var(--color-surface)] transition" style={{ borderColor: "var(--color-terra)" }}>
          <ChevronLeft size={18} style={{ color: "var(--color-terra)" }} />
        </button>
        <button aria-label="Next" onClick={() => embla?.scrollNext()} className="w-10 h-10 border flex items-center justify-center hover:bg-[var(--color-surface)] transition" style={{ borderColor: "var(--color-terra)" }}>
          <ChevronRight size={18} style={{ color: "var(--color-terra)" }} />
        </button>
      </div>
    </div>
  );
}

/* ---------- VISCERAL PROBLEM ---------- */
function VisceralProblem() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <Eyebrow>Understanding the problem</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">
              Belly fat isn't about appearance. It's your body's alarm signal.
            </h2>
            <p className="mt-6 md:text-[1.0625rem]" style={{ color: "var(--color-ink-muted)" }}>
              Visceral fat builds up around your internal organs and disrupts how they work.
              Unlike subcutaneous fat, it's invisible — but its impact on your health is
              deep and measurable.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 max-w-2xl mx-auto">
            <div className="aspect-square overflow-hidden border border-[rgba(193,122,90,0.25)]" style={{ background: "var(--color-surface)" }}>
              <img src={visceral2} alt="Anatomical comparison: healthy organs vs. organs surrounded by visceral fat" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <p className="mt-6 text-center text-sm italic" style={{ color: "var(--color-ink-muted)" }}>
            Visceral fat — a silent enemy of your health
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SYMPTOMS ---------- */
const symptoms = [
  { img: symptomWaist, title: "Expanding waistline", text: "Apple-shape silhouette, > 80 cm in women." },
  { img: symptomBloating, title: "Bloating & sluggish digestion", text: "Chronic digestive discomfort, constipation." },
  { img: symptomFatigue, title: "Persistent fatigue", text: "Exhaustion with no clear cause, low energy." },
  { img: symptomHeart, title: "Blood pressure & cholesterol", text: "Increased cardiovascular risk." },
  { img: symptomHormones, title: "Hormonal imbalances", text: "Unexplained weight changes, irregular cycles." },
  { img: symptomInsulin, title: "Insulin resistance", text: "Strong sugar cravings, trouble losing weight." },
  { img: symptomStress, title: "Chronic stress & cortisol", text: "Anxiety, insomnia, silent inflammation." },
];

function Symptoms() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Diagnosis</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">Do you recognise these symptoms?</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {symptoms.map(({ img, title, text }, i) => (
            <Reveal key={i}>
              <div className="bg-white h-full border border-[rgba(193,122,90,0.15)] flex flex-col">
                <div className="aspect-square overflow-hidden" style={{ background: "var(--color-bg)" }}>
                  <img src={img} alt={title} width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-display text-lg md:text-xl">{title}</h3>
                  <p className="mt-2 text-sm" style={{ color: "var(--color-ink-muted)" }}>{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BEFORE / AFTER ---------- */
function BeforeAfter() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Client results</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">Their results speak for themselves</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="border border-[rgba(193,122,90,0.2)] bg-white overflow-hidden">
              <div className="relative">
                <img src={resultWaist.url} alt="Client result — before and after the program" width={996} height={650} loading="lazy" className="w-full h-auto block" />
                <span className="absolute top-3 left-3 label-eyebrow px-2.5 py-1 bg-white/90" style={{ color: "var(--color-terra)" }}>Before</span>
                <span className="absolute top-3 right-3 label-eyebrow px-2.5 py-1 bg-white/90" style={{ color: "var(--color-terra)" }}>After</span>
              </div>
              <div className="p-5">
                <p className="text-sm italic" style={{ color: "var(--color-ink)" }}>
                  “−15 cm waistline in 6 months of regular practice.”
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="border border-[rgba(193,122,90,0.2)] h-full p-7" style={{ background: "var(--color-surface)" }}>
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle size={16} style={{ color: "var(--color-sage)" }} />
                <span className="label-eyebrow" style={{ color: "var(--color-sage)" }}>WhatsApp · Testimonial</span>
              </div>
              <p className="text-[0.95rem] leading-relaxed">
                “I'm a 47-year-old man and was sceptical at first. After 14 days my belly lost 4 cm,
                my digestion calmed down and I finally sleep deeply. This method is a treasure.”
              </p>
              <p className="mt-5 pt-5 border-t border-[rgba(193,122,90,0.18)] text-sm font-medium">
                Thomas L. <span className="text-xs font-normal" style={{ color: "var(--color-ink-muted)" }}>· Geneva</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROGRAM DESCRIPTION ---------- */
function ProgramDescription() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <Eyebrow>The program</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-[2.25rem] max-w-2xl">What awaits you in the program</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-12 md:text-[1.0625rem]" style={{ color: "var(--color-ink-muted)" }}>
          <Reveal>
            <p>
              Over 14 days I guide you through simple, effective massage, functional
              exercise and conscious breathing techniques.
            </p>
          </Reveal>
          <Reveal>
            <p>
              You'll learn to “sculpt” your belly with your own hands — awakening the deep
              muscles, stimulating lymphatic drainage and releasing diaphragm tension.
              Proven methods you can practise for a lifetime.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { Icon: Clock, top: "Only", bot: "5 min/day" },
              { Icon: Repeat, top: "Practices", bot: "for life" },
              { Icon: Smartphone, top: "Access on", bot: "all your devices" },
            ].map(({ Icon, top, bot }, i) => (
              <div key={i} className="bg-white py-7 px-6 flex items-center gap-4 border border-[rgba(193,122,90,0.15)]">
                <Icon size={28} strokeWidth={1.3} style={{ color: "var(--color-terra)" }} />
                <div>
                  <p className="label-eyebrow">{top}</p>
                  <p className="font-display text-xl mt-0.5">{bot}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- AUTHOR QUOTE ---------- */
function AuthorQuote() {
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--color-black-bg)" }}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-display italic text-xl md:text-2xl leading-relaxed text-white/90">
            “This program is built on my experience as a physical rehabilitation and visceral
            therapist — and on my own story: I've lived without a gallbladder for 15 years.
            Every technique was tested on myself before being taught to my clients.”
          </p>
          <p className="mt-8 label-eyebrow" style={{ color: "var(--color-terra)" }}>— Victoire Moreau</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- AUTHOR BIO ---------- */
function AuthorBio() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const photos = [
    { src: authorS1.url, alt: "Participant result — waist transformation, front view" },
    { src: authorS2.url, alt: "Participant result — waist transformation, profile" },
    { src: authorS3.url, alt: "Participant result — waist transformation, before and after" },
    { src: authorS4.url, alt: "Participant result — collage of program results" },
  ];

  return (
    <section id="auteure" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-16 items-start">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {photos.map((photo) => (
                  <div key={photo.src} className="shrink-0 grow-0 basis-full">
                    <div className="aspect-[4/5] overflow-hidden border border-[rgba(193,122,90,0.15)]" style={{ background: "var(--color-surface)" }}>
                      <img src={photo.src} alt={photo.alt} width={900} height={1125} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button onClick={() => embla?.scrollPrev()} className="w-9 h-9 bg-white/90 border border-[rgba(193,122,90,0.2)] flex items-center justify-center" aria-label="Previous">
                <ChevronLeft size={16} style={{ color: "var(--color-terra)" }} />
              </button>
              <button onClick={() => embla?.scrollNext()} className="w-9 h-9 bg-white/90 border border-[rgba(193,122,90,0.2)] flex items-center justify-center" aria-label="Next">
                <ChevronRight size={16} style={{ color: "var(--color-terra)" }} />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <Eyebrow>The author</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-[2.25rem]">Victoire Moreau</h2>
          <p className="mt-2 font-display italic text-lg" style={{ color: "var(--color-ink-muted)" }}>
            Rehabilitation & visceral therapist
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "2 university degrees, including one in physical rehabilitation",
              "8 years of coaching experience · 4 years in visceral therapy",
              "4 years creating online programs",
              "More than 24,000 participants in her programs",
              "Exclusive method: functional training, Pilates, yoga, breathing techniques, massage, MFR, somatics, Animal Flow",
              "Personal journey: 15 years without a gallbladder + Hashimoto's thyroiditis — this experience shaped her practice",
            ].map((t, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle2 size={18} className="shrink-0 mt-1" style={{ color: "var(--color-terra)" }} strokeWidth={1.5} />
                <span className="text-[0.97rem]">{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs italic flex items-center gap-2" style={{ color: "var(--color-ink-muted)" }}>
            <span>⚑</span> Diplomas and certifications available on request
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FOR WHO ---------- */
const forWho = [
  { Icon: Scissors, title: "You want to slim your waist", text: "Without a strict diet or intensive sport." },
  { Icon: Wind, title: "You suffer from bloating or irregular transit", text: "And want to act on the root causes." },
  { Icon: Dumbbell, title: "You want practical daily exercises", text: "Effective in 5 minutes, with no equipment." },
  { Icon: HandHeart, title: "You want to learn massage techniques", text: "And bring calm and lightness back to your body." },
  { Icon: Baby, title: "You've given birth (diastasis, C-section)", text: "And want to gently restore your belly." },
];
function ForWho() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Who is it for?</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">This program is for you if…</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {forWho.map(({ Icon, title, text }, i) => (
            <Reveal key={i}>
              <div className="bg-white p-7 h-full border border-[rgba(193,122,90,0.15)]">
                <Icon size={26} strokeWidth={1.3} style={{ color: "var(--color-terra)" }} />
                <h3 className="font-display text-lg mt-4">{title}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--color-ink-muted)" }}>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROBLEMS GRID ---------- */
const problems = [
  { title: "Silhouette & waist", text: "Reduces belly roundness.", img: benefitWaist },
  { title: "Digestion & hormones", text: "Less bloating, better transit.", img: benefitDigestion },
  { title: "Posture & back", text: "Relief from lower back and neck pain.", img: benefitPosture },
  { title: "Circulation & swelling", text: "Lighter legs, less puffy face.", img: benefitCirculation },
  { title: "Intimate life", text: "Renewed vitality and sensation.", img: benefitVitality },
];
function ProblemsGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Benefits</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">A healthy belly changes everything</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {problems.map((p, i) => (
            <Reveal key={i}>
              <div className="border border-[rgba(193,122,90,0.18)] h-full flex flex-col">
                <div className="aspect-square overflow-hidden" style={{ background: "var(--color-surface)" }}>
                  <img src={p.img} alt={p.title} width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-display text-base md:text-lg">{p.title}</h3>
                  <p className="mt-1 text-xs md:text-sm" style={{ color: "var(--color-ink-muted)" }}>{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROGRAM ACCORDION ---------- */
const days = [
  "Visceral fat: diagnosis and awareness",
  "The lymphatic system: activation and drainage",
  "Regaining energy through lymphatic stimulation",
  "Myofascial release (MFR) of the belly",
  "Releasing the diaphragm",
  "Mobilising the rib cage",
  "Breathing to stimulate digestion",
  "Breathing for the gallbladder and abdominal muscles",
  "Intestine-focused technique",
  "Working the umbilical ring",
  "Working the psoas muscle",
  "Integration: complete 5-minute routine",
  "Anchoring and autonomy: building your daily ritual",
  "Review, evaluation and next steps",
];
function ProgramAccordion() {
  return (
    <section id="programme" className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="text-center">
            <Eyebrow>14 days · 5 minutes a day</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">The program in detail</h2>
          </div>
        </Reveal>
        <div className="mt-12 divide-y divide-[rgba(193,122,90,0.2)] border-y border-[rgba(193,122,90,0.2)] bg-white">
          {days.map((d, i) => (
            <details key={i} className="group">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 md:p-6 hover:bg-[var(--color-bg)] transition">
                <div className="flex items-center gap-5 min-w-0">
                  <span className="label-eyebrow shrink-0 w-14" style={{ color: "var(--color-terra)" }}>Day {i + 1}</span>
                  <span className="font-display text-base md:text-lg leading-snug">{d}</span>
                </div>
                <ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" style={{ color: "var(--color-terra)" }} />
              </summary>
              <div className="px-5 md:px-6 pb-6 -mt-1">
                <div className="ml-0 md:ml-[4.75rem] pt-3 border-t border-[rgba(193,122,90,0.15)] text-sm" style={{ color: "var(--color-ink-muted)" }}>
                  <p className="flex items-center gap-2"><Play size={14} style={{ color: "var(--color-terra)" }} /> Video included · ~5 min</p>
                  <p className="mt-1">Technique: massage, MFR, breathing or drainage depending on the day.</p>
                  <p className="mt-1">Equipment: none (a massage roller or fascia ball is recommended for some sessions).</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS ---------- */
const steps = [
  { Icon: CreditCard, title: "Secure payment", text: "Immediate access after payment." },
  { Icon: UserCircle, title: "Personal member area", text: "Log in from any device." },
  { Icon: Play, title: "Progress at your own pace", text: "All content is available on video." },
  { Icon: Calendar, title: "30-day access", text: "Extension available if needed." },
];
function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">How do you access the program?</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-5">
          {steps.map(({ Icon, title, text }, i) => (
            <Reveal key={i}>
              <div className="relative pl-12 md:pl-0 md:pt-0">
                <span className="absolute left-0 top-0 md:static font-display text-4xl md:text-5xl" style={{ color: "var(--color-terra)", opacity: 0.35 }}>
                  0{i + 1}
                </span>
                <Icon size={26} strokeWidth={1.3} style={{ color: "var(--color-terra)" }} className="hidden md:block mt-4" />
                <h3 className="font-display text-xl mt-0 md:mt-4">{title}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--color-ink-muted)" }}>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- RESULTS ---------- */
const resultsItems = [
  { emoji: "📏", text: "Smaller waistline" },
  { emoji: "💨", text: "Calmer digestion, less bloating" },
  { emoji: "⚡", text: "Renewed energy and vitality" },
  { emoji: "⚖️", text: "Better hormonal balance" },
  { emoji: "🧘", text: "Less stress, better sleep" },
  { emoji: "💗", text: "Return of desire and sensuality" },
];
function Results() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Your results</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">What you'll experience in 14 days</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {resultsItems.map((r, i) => (
            <Reveal key={i}>
              <div className="bg-white p-6 flex items-start gap-4 border border-[rgba(193,122,90,0.15)] h-full">
                <span className="text-2xl shrink-0">{r.emoji}</span>
                <p className="font-display text-lg leading-snug">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SIMPLICITY ---------- */
function Simplicity() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-[2.5rem] leading-tight">
            Just 5 minutes a day.
            <br />
            <em className="font-normal" style={{ color: "var(--color-terra)" }}>Results that last a lifetime.</em>
          </h2>
          <p className="mt-6 md:text-[1.0625rem]" style={{ color: "var(--color-ink-muted)" }}>
            No gym. No expensive equipment. Just your hands, your breath — and the method.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SECOND CAROUSEL ---------- */
function SecondCarousel() {
  const images = [do6a, do6b, do0, do5, do4a, do4b, do3, do2, do1];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Before / After</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">Our participants' results</h2>
            <p className="mt-4 text-[var(--color-ink-muted)]">
              Real transformations achieved with the method.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 relative">
          <div className="overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="flex">
              {images.map((img, i) => (
                <div key={i} className="min-w-0 shrink-0 grow-0 basis-full px-2">
                  <div className="mx-auto max-w-2xl bg-[var(--color-surface)] rounded-lg overflow-hidden">
                    <img src={img.url} alt={`Before/after transformation ${i + 1}`} className="w-full h-auto object-contain" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => emblaApi?.scrollPrev()} aria-label="Previous" className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[var(--color-terra)] hover:text-white transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => emblaApi?.scrollNext()} aria-label="Next" className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[var(--color-terra)] hover:text-white transition">
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === selectedIndex ? "w-8 bg-[var(--color-terra)]" : "w-2 bg-[var(--color-ink-muted)]/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section id="buy" className="py-24 md:py-32" style={{ background: "var(--color-black-bg)" }}>
      <div className="mx-auto max-w-3xl px-6 text-center text-white">
        <Reveal>
          <h2 className="font-display text-[2.25rem] md:text-5xl leading-tight" style={{ color: "#FFFFFF" }}>
            Your belly is the centre <br className="hidden md:inline" />
            of your strength and your beauty.
            <br />
            <em className="font-normal" style={{ color: "#E8A07F" }}>Start today.</em>
          </h2>

          <div className="mt-12 flex flex-col items-center gap-8">
            <div className="flex flex-col items-center">
              <span className="label-eyebrow text-white/60">Launch price</span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="font-display text-6xl font-semibold" style={{ color: "var(--color-terra)" }}>$4.99</span>
                <span className="text-lg line-through text-white/50">$49</span>
              </div>
            </div>
            <CTA>Enrol now</CTA>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/60">
              <li className="flex items-center gap-1.5"><CheckCircle2 size={14} /> 30-day access</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 size={14} /> 14-day refund</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 size={14} /> Secure payment</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  { q: "I can't access the platform — what should I do?", a: "Contact our support at support@vimoreau.com — we reply within 24 hours." },
  { q: "Which payment methods do you accept?", a: "Card payment (Visa, Mastercard) or PayPal. If you run into trouble, just write to us." },
  { q: "I won't have time to watch everything in 30 days.", a: "Access can be extended on request. We adapt to your pace." },
  { q: "Is this program suitable for men?", a: "Absolutely. The techniques are effective for every body." },
  { q: "I gave birth recently — is it suitable (diastasis, C-section)?", a: "Yes, the program includes specific recommendations. Check with your doctor first if you have any doubts." },
  { q: "I have a lot of weight to lose — will it work for me?", a: "Yes. The program adapts to every profile. Results are gradual and lasting." },
  { q: "Do I need any special equipment?", a: "A massage roller and a fascia ball are recommended for some sessions but not required to start." },
];
function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">Frequently asked questions</h2>
          </div>
        </Reveal>
        <div className="mt-12 divide-y divide-[rgba(193,122,90,0.2)] border-y border-[rgba(193,122,90,0.2)]">
          {faqs.map((f, i) => (
            <details key={i} className="group">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4 py-5">
                <span className="font-display text-lg leading-snug">{f.q}</span>
                <ChevronDown size={18} className="shrink-0 mt-1 transition-transform group-open:rotate-180" style={{ color: "var(--color-terra)" }} />
              </summary>
              <p className="pb-5 text-[0.95rem]" style={{ color: "var(--color-ink-muted)" }}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="py-16 text-white/70" style={{ background: "var(--color-ink)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-display text-2xl text-white">Victoire Moreau</p>
          <a href="mailto:support@vimoreau.com" className="text-sm hover:text-white">support@vimoreau.com</a>
        </div>
        <hr className="my-8 border-white/15" />
        <div className="grid gap-8 md:grid-cols-2 text-sm">
          <div className="space-y-1 text-xs text-white/60 leading-relaxed">
            <p className="text-white/80 text-sm font-medium mb-2">Victoire Moreau — Sole trader</p>
            <p>67 Avenue Gambetta, 92400 Courbevoie, France</p>
            <p>SIREN: 899 736 226 · SIRET: 899 736 226 00016</p>
            <p>APE code: 58.11Z — Book publishing</p>
            <p>Intra-EU VAT: FR96899736226</p>
            <p>Email: support@vimoreau.com</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs md:justify-end md:items-start">
            <Link to="/legal-notice" className="hover:text-white">Legal notice</Link>
            <Link to="/privacy-policy" className="hover:text-white">Privacy policy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/refund-policy" className="hover:text-white">Refund policy</Link>
          </div>
        </div>
        <p className="mt-10 text-xs text-white/40">© 2026 Victoire Moreau. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ---------- STICKY BOTTOM BUY BAR ---------- */
function StickyBuyBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      const threshold = hero ? hero.offsetTop + hero.offsetHeight - 80 : 600;
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid rgba(193,122,90,0.25)",
        boxShadow: "0 -8px 24px rgba(28,26,24,0.08)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-baseline gap-2 min-w-0">
          <span className="font-display text-xl md:text-2xl" style={{ color: "var(--color-terra)" }}>$4.99</span>
          <span className="text-xs md:text-sm line-through" style={{ color: "var(--color-ink-muted)" }}>$49</span>
          <span className="hidden sm:inline text-xs uppercase tracking-wider" style={{ color: "var(--color-ink-muted)" }}>· Instant access</span>
        </div>
        <a href={PAY_URL} className="btn-primary btn-primary-hover shrink-0" style={{ padding: "12px 18px", fontSize: "0.72rem" }}>
          Buy for $4.99
        </a>
      </div>
    </div>
  );
}

/* ---------- PAGE ---------- */
function LandingPage() {
  return (
    <main className="min-h-screen pb-20 md:pb-0" style={{ background: "var(--color-bg)" }}>
      <PreHeaderStrip />
      <Header />
      <Hero />
      <SignatureBand />
      <BonusOffer />
      <Divider />
      <Guarantee />
      <Divider />
      <SocialProof />
      <Divider />
      <VisceralProblem />
      <Symptoms />
      <BeforeAfter />
      <ProgramDescription />
      <AuthorQuote />
      <AuthorBio />
      <ForWho />
      <ProblemsGrid />
      <ProgramAccordion />
      <HowItWorks />
      <Results />
      <Simplicity />
      <SecondCarousel />
      <FinalCTA />
      <FAQ />
      <Footer />
      <StickyBuyBar />
    </main>
  );
}
