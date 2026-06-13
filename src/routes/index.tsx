import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Shield, Star, Ruler, Wind, BatteryLow, Heart, Activity, TrendingUp, Brain,
  Clock, Repeat, Smartphone, CheckCircle2, Scissors, Dumbbell, HandHeart, Baby,
  CreditCard, UserCircle, Play, Calendar, Menu, X, ChevronDown, ArrowRight,
  Instagram, Youtube, ChevronLeft, ChevronRight, Gift, MessageCircle,
} from "lucide-react";
import victoriaHero from "@/assets/victoria-hero.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

/* ---------- helpers ---------- */
function tomorrowFr() {
  const t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
}

function Reveal({ children, className = "", as: As = "div" }: { children: ReactNode; className?: string; as?: any }) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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

function CTA({ children = "Je commence le cours", className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <a href="#buy" className={`btn-primary btn-primary-hover ${className}`}>
      {children}
      <ArrowRight size={16} strokeWidth={1.5} />
    </a>
  );
}

function PriceBlock({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <span className={`label-eyebrow ${light ? "text-white/60" : ""}`}>Prix de lancement</span>
      <div className="flex items-baseline gap-3">
        <span className="font-display text-5xl md:text-6xl font-semibold text-terra leading-none" style={{ color: "var(--color-terra)" }}>
          9,99 €
        </span>
        <span className={`text-lg line-through ${light ? "text-white/50" : "text-ink-muted"}`} style={!light ? { color: "var(--color-ink-muted)" } : {}}>
          99 €
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
    { href: "#programme", label: "Programme" },
    { href: "#auteure", label: "Auteure" },
    { href: "#avis", label: "Avis" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--color-bg)]/95 backdrop-blur shadow-[0_1px_0_rgba(193,122,90,0.15)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg md:text-xl tracking-tight" style={{ color: "var(--color-ink)" }}>
          Victoria Korshak
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
            <a href="#buy" className="btn-primary btn-primary-hover" style={{ padding: "10px 22px", fontSize: "0.72rem" }}>
              Commencer le cours
            </a>
          )}
        </div>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 -mr-2" aria-label="Menu">
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
            <a href="#buy" onClick={() => setOpen(false)} className="btn-primary btn-primary-hover mt-2 text-center">
              Commencer le cours
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- PRE-HEADER ---------- */
function PreHeaderStrip() {
  return (
    <div className="w-full py-2.5 px-4 text-center text-xs md:text-sm text-white" style={{ background: "var(--color-terra)" }}>
      <span className="tracking-wide">
        Cours en ligne · Début : {tomorrowFr()} · Accès immédiat après paiement
      </span>
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="pt-6 md:pt-10 pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-16 items-center">
        <div className="md:order-1 order-2">
          <Reveal>
            <Eyebrow>
              Programme en ligne · 14 jours · Début le {tomorrowFr()}
            </Eyebrow>
            <h1 className="mt-6 text-[2.4rem] sm:text-5xl md:text-[3.6rem] leading-[1.05]">
              <span style={{ color: "var(--color-terra)" }}>Transformation</span>
              <br />
              <span>de la taille</span>
            </h1>
            <p className="mt-6 text-base md:text-[1.0625rem] max-w-[34rem]" style={{ color: "var(--color-ink-muted)" }}>
              Éliminez la graisse viscérale, réveillez vos muscles profonds et retrouvez un ventre plat
              grâce à des techniques de massage et de respiration — seulement 5 minutes par jour.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-end gap-6">
              <PriceBlock />
            </div>

            <div className="mt-7">
              <CTA>Je commence le cours</CTA>
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm" style={{ color: "var(--color-ink-muted)" }}>
              <li className="flex items-center gap-1.5"><CheckCircle2 size={14} style={{ color: "var(--color-sage)" }} /> Accès pendant 30 jours</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 size={14} style={{ color: "var(--color-sage)" }} /> Satisfait ou remboursé 14 jours</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 size={14} style={{ color: "var(--color-sage)" }} /> Sur mobile et tablette</li>
            </ul>
          </Reveal>
        </div>
        <div className="md:order-2 order-1">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden" style={{ background: "var(--color-surface)" }}>
              <img
                src={victoriaHero}
                alt="Victoria Korshak — thérapeute en réhabilitation viscérale"
                width={896}
                height={1152}
                className="w-full h-full object-cover"
              />
            </div>
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
        « Ce programme n'est pas un régime. C'est la reconquête de votre santé et de votre silhouette. »
      </p>
    </div>
  );
}

/* ---------- BONUS OFFER ---------- */
function BonusOffer() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <Eyebrow>Offre limitée</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-[2.25rem]">Offre de lancement exclusive</h2>
          <p className="mt-6 md:text-[1.0625rem]" style={{ color: "var(--color-ink-muted)" }}>
            En vous inscrivant aujourd'hui, vous recevez gratuitement l'accès à la méditation audio
            <em> « Respiration Anti-Stress »</em> (valeur 39 €) — une technique de respiration profonde
            pour libérer les tensions du diaphragme en 10 minutes.
          </p>

          <div className="mt-10 p-8 md:p-10 bg-white border border-[rgba(193,122,90,0.25)] text-left max-w-xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 flex items-center justify-center" style={{ background: "var(--color-terra)" }}>
                <Gift size={22} className="text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="label-eyebrow" style={{ color: "var(--color-terra)" }}>Bonus inclus — offert (valeur 39 €)</p>
                <h3 className="font-display text-xl md:text-2xl mt-1">Méditation « Respiration Anti-Stress »</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--color-ink-muted)" }}>
                  Offert lors de votre inscription aujourd'hui.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <CTA>Obtenir le bonus + le cours — 9,99 €</CTA>
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
          <h3 className="mt-6 text-2xl md:text-3xl">Garantie satisfait ou remboursé</h3>
          <p className="mt-5 md:text-[1.0625rem]" style={{ color: "var(--color-ink-muted)" }}>
            Si le programme ne vous convient pas, je vous rembourse intégralement dans les 14 jours.
            Sans question. Sans condition.
          </p>
          <p className="mt-4 font-display italic text-lg">— Victoria Korshak</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIAL CARD + CAROUSEL ---------- */
function TestimonialCard({ name, city, quote }: { name: string; city: string; quote: string }) {
  return (
    <div className="shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-6">
      <div className="p-7 h-full border border-[rgba(193,122,90,0.18)]" style={{ background: "var(--color-surface)" }}>
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle size={16} style={{ color: "var(--color-sage)" }} />
          <span className="label-eyebrow" style={{ color: "var(--color-sage)" }}>WhatsApp</span>
        </div>
        <p className="text-[0.95rem] leading-relaxed" style={{ color: "var(--color-ink)" }}>
          “{quote}”
        </p>
        <div className="mt-5 pt-5 border-t border-[rgba(193,122,90,0.18)] flex items-center justify-between">
          <div>
            <p className="font-medium text-sm">{name}</p>
            <p className="text-xs" style={{ color: "var(--color-ink-muted)" }}>{city}</p>
          </div>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="var(--color-terra)" stroke="var(--color-terra)" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCarousel({ items }: { items: { name: string; city: string; quote: string }[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: true });
  return (
    <div className="relative">
      <div className="overflow-hidden -ml-6" ref={emblaRef}>
        <div className="flex">
          {items.map((it, i) => (
            <TestimonialCard key={i} {...it} />
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          aria-label="Précédent"
          onClick={() => embla?.scrollPrev()}
          className="w-10 h-10 border flex items-center justify-center hover:bg-[var(--color-surface)] transition"
          style={{ borderColor: "var(--color-terra)" }}
        >
          <ChevronLeft size={18} style={{ color: "var(--color-terra)" }} />
        </button>
        <button
          aria-label="Suivant"
          onClick={() => embla?.scrollNext()}
          className="w-10 h-10 border flex items-center justify-center hover:bg-[var(--color-surface)] transition"
          style={{ borderColor: "var(--color-terra)" }}
        >
          <ChevronRight size={18} style={{ color: "var(--color-terra)" }} />
        </button>
      </div>
    </div>
  );
}

/* ---------- SOCIAL PROOF ---------- */
const reviews1 = [
  { name: "Sophie M.", city: "Paris", quote: "En 3 semaines, mon ventre est plus plat et j'ai retrouvé une vraie énergie. Les exercices sont si simples." },
  { name: "Isabelle T.", city: "Lyon", quote: "Je souffrais de ballonnements depuis des années. Tout a changé dès la première semaine du programme." },
  { name: "Marie-Claire B.", city: "Bordeaux", quote: "J'ai 52 ans et je n'avais plus d'espoir. 5 minutes par jour ont suffi à transformer ma silhouette." },
  { name: "Nathalie R.", city: "Marseille", quote: "La respiration apprise avec Victoria m'a libérée d'un stress chronique. Mon sommeil s'est apaisé." },
  { name: "Caroline D.", city: "Toulouse", quote: "Une méthode douce, intelligente et profondément efficace. Je recommande à toutes mes amies." },
  { name: "Hélène V.", city: "Strasbourg", quote: "Après ma grossesse, je n'arrivais pas à retrouver mon ventre. En 14 jours, j'ai senti la différence." },
];

function SocialProof() {
  return (
    <section id="avis" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Témoignages</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem] leading-tight">
              Plus de 20 000 personnes <br className="hidden md:inline" />
              ont déjà transformé leur corps
            </h2>
          </div>
        </Reveal>
        <div className="mt-14">
          <TestimonialCarousel items={reviews1} />
        </div>
        <p className="mt-6 text-center text-xs" style={{ color: "var(--color-ink-muted)" }}>
          Témoignages reçus via WhatsApp de nos participantes francophones
        </p>
      </div>
    </section>
  );
}

/* ---------- VISCERAL PROBLEM ---------- */
function VisceralProblem() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <Eyebrow>Comprendre le problème</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">
              La graisse abdominale n'est pas une question d'esthétique. C'est un signal d'alarme de votre corps.
            </h2>
            <p className="mt-6 md:text-[1.0625rem]" style={{ color: "var(--color-ink-muted)" }}>
              La graisse viscérale s'accumule autour des organes internes et perturbe leur fonctionnement.
              Contrairement à la graisse sous-cutanée, elle est invisible — mais ses conséquences sur la santé
              sont profondes et mesurables.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 grid grid-cols-2 gap-6 md:gap-10 max-w-3xl mx-auto">
            {[1, 2].map((n) => (
              <div key={n} className="aspect-square flex items-center justify-center border border-[rgba(193,122,90,0.25)]" style={{ background: "var(--color-surface)" }}>
                <svg viewBox="0 0 200 200" className="w-3/4 h-3/4" stroke="var(--color-terra)" fill="none" strokeWidth="1.2">
                  <ellipse cx="100" cy="110" rx="55" ry="70" />
                  <path d="M60 110 Q100 80 140 110" />
                  <path d="M70 130 Q100 115 130 130" />
                  <circle cx="85" cy={n === 1 ? 105 : 115} r="6" fill="var(--color-terra)" opacity="0.5" />
                  <circle cx="115" cy={n === 1 ? 120 : 100} r="5" fill="var(--color-terra)" opacity="0.4" />
                  <circle cx="100" cy={n === 1 ? 90 : 130} r="4" fill="var(--color-terra)" opacity="0.6" />
                </svg>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm italic" style={{ color: "var(--color-ink-muted)" }}>
            La graisse viscérale — un ennemi silencieux de votre santé
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SYMPTOMS ---------- */
const symptoms = [
  { Icon: Ruler, title: "Tour de taille en expansion", text: "Silhouette en « pomme », > 80 cm chez la femme." },
  { Icon: Wind, title: "Ballonnements & transit perturbé", text: "Inconfort digestif chronique, constipation." },
  { Icon: BatteryLow, title: "Fatigue persistante", text: "Épuisement sans cause apparente, manque d'énergie." },
  { Icon: Heart, title: "Tension & cholestérol", text: "Risques cardiovasculaires accrus." },
  { Icon: Activity, title: "Déséquilibres hormonaux", text: "Variations de poids inexpliquées, cycles irréguliers." },
  { Icon: TrendingUp, title: "Résistance à l'insuline", text: "Envies de sucre intenses, difficultés à mincir." },
  { Icon: Brain, title: "Stress chronique & cortisol", text: "Anxiété, insomnies, inflammation silencieuse." },
];

function Symptoms() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Diagnostic</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">Reconnaissez-vous ces symptômes ?</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {symptoms.map(({ Icon, title, text }, i) => (
            <Reveal key={i}>
              <div className="bg-white p-6 md:p-7 h-full border border-[rgba(193,122,90,0.15)]">
                <Icon size={26} strokeWidth={1.3} style={{ color: "var(--color-terra)" }} />
                <h3 className="font-display text-lg md:text-xl mt-4">{title}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--color-ink-muted)" }}>{text}</p>
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
            <Eyebrow>Résultats clients</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">Leurs résultats parlent d'eux-mêmes</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="border border-[rgba(193,122,90,0.2)]">
              <div className="grid grid-cols-2">
                {["Avant", "Après"].map((label) => (
                  <div key={label} className="aspect-[3/4] flex items-end justify-center relative" style={{ background: "var(--color-surface)" }}>
                    <span className="absolute top-3 left-3 label-eyebrow" style={{ color: "var(--color-terra)" }}>{label}</span>
                    <svg viewBox="0 0 100 140" className="h-3/4" stroke="var(--color-ink-muted)" fill="none" strokeWidth="1">
                      <circle cx="50" cy="25" r="12" />
                      <path d={label === "Avant" ? "M30 50 Q50 45 70 50 L75 100 Q50 110 25 100 Z" : "M35 50 Q50 48 65 50 L68 100 Q50 105 32 100 Z"} />
                    </svg>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-white">
                <p className="text-sm italic" style={{ color: "var(--color-ink)" }}>
                  « −15 cm de tour de taille en 6 mois de pratique régulière. »
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="border border-[rgba(193,122,90,0.2)] h-full p-7" style={{ background: "var(--color-surface)" }}>
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle size={16} style={{ color: "var(--color-sage)" }} />
                <span className="label-eyebrow" style={{ color: "var(--color-sage)" }}>WhatsApp · Témoignage</span>
              </div>
              <p className="text-[0.95rem] leading-relaxed">
                « Je suis un homme de 47 ans, sceptique au départ. Après 14 jours, mon ventre a perdu 4 cm,
                ma digestion s'est apaisée et je dors enfin profondément. Cette méthode est un trésor. »
              </p>
              <p className="mt-5 pt-5 border-t border-[rgba(193,122,90,0.18)] text-sm font-medium">
                Thomas L. <span className="text-xs font-normal" style={{ color: "var(--color-ink-muted)" }}>· Genève</span>
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
          <Eyebrow>Le programme</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-[2.25rem] max-w-2xl">Ce qui vous attend dans le programme</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-12 md:text-[1.0625rem]" style={{ color: "var(--color-ink-muted)" }}>
          <Reveal>
            <p>
              Durant ces 14 jours, je vous guide à travers des techniques simples et efficaces de massage,
              d'exercices fonctionnels et de respiration consciente.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Vous apprendrez à « modeler » votre ventre de vos propres mains — à réveiller les muscles
              profonds, à stimuler le drainage lymphatique et à libérer les tensions du diaphragme.
              Des méthodes éprouvées que vous pourrez pratiquer toute votre vie.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { Icon: Clock, top: "Seulement", bot: "5 min/jour" },
              { Icon: Repeat, top: "Pratiques", bot: "à vie" },
              { Icon: Smartphone, top: "Accès sur", bot: "tous vos appareils" },
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
            « Ce programme est fondé sur mon expérience en tant que thérapeute en réhabilitation physique
            et en thérapie viscérale. Mais aussi sur mon propre parcours : je vis sans vésicule biliaire
            depuis 15 ans. Chaque technique a été testée sur moi-même avant d'être enseignée à mes clientes. »
          </p>
          <p className="mt-8 label-eyebrow" style={{ color: "var(--color-terra)" }}>— Victoria Korshak</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- AUTHOR BIO ---------- */
function AuthorBio() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const photos = [1, 2, 3, 4];
  return (
    <section id="auteure" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-16 items-start">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {photos.map((p) => (
                  <div key={p} className="shrink-0 grow-0 basis-full">
                    <div className="aspect-[4/5] flex items-center justify-center" style={{ background: "var(--color-surface)" }}>
                      {p === 1 ? (
                        <img src={victoriaHero} alt="Victoria" className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <span className="label-eyebrow" style={{ color: "var(--color-ink-muted)" }}>Photo {p}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button onClick={() => embla?.scrollPrev()} className="w-9 h-9 bg-white/90 flex items-center justify-center" aria-label="Précédent">
                <ChevronLeft size={16} style={{ color: "var(--color-terra)" }} />
              </button>
              <button onClick={() => embla?.scrollNext()} className="w-9 h-9 bg-white/90 flex items-center justify-center" aria-label="Suivant">
                <ChevronRight size={16} style={{ color: "var(--color-terra)" }} />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <Eyebrow>L'auteure</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-[2.25rem]">Victoria Korshak</h2>
          <p className="mt-2 font-display italic text-lg" style={{ color: "var(--color-ink-muted)" }}>
            Thérapeute en réhabilitation & thérapie viscérale
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "2 diplômes universitaires, dont un en rééducation physique",
              "8 ans d'expérience en coaching · 4 ans en thérapie viscérale",
              "4 ans de création de programmes en ligne",
              "Plus de 24 000 participants à ses programmes",
              "Méthode exclusive : entraînement fonctionnel, Pilates, yoga, techniques respiratoires, massage, MFR, somatique, Animal Flow",
              "Parcours personnel : 15 ans sans vésicule biliaire + thyroïdite de Hashimoto — cette expérience a fondé sa pratique",
            ].map((t, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle2 size={18} className="shrink-0 mt-1" style={{ color: "var(--color-terra)" }} strokeWidth={1.5} />
                <span className="text-[0.97rem]">{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs italic flex items-center gap-2" style={{ color: "var(--color-ink-muted)" }}>
            <span>⚑</span> Diplômes et certifications disponibles sur demande
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FOR WHO ---------- */
const forWho = [
  { Icon: Scissors, title: "Vous souhaitez affiner votre taille", text: "Sans régime strict ni sport intensif." },
  { Icon: Wind, title: "Vous souffrez de ballonnements ou de transit irrégulier", text: "Et voulez agir sur les causes profondes." },
  { Icon: Dumbbell, title: "Vous cherchez des exercices concrets au quotidien", text: "Efficaces en 5 minutes, sans matériel." },
  { Icon: HandHeart, title: "Vous voulez apprendre les techniques de massage", text: "Et retrouver calme et légèreté dans votre corps." },
  { Icon: Baby, title: "Vous avez accouché (diastasis, césarienne)", text: "Et souhaitez retrouver votre ventre en douceur." },
];
function ForWho() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Pour qui ?</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">Ce programme est fait pour vous si…</h2>
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
  { title: "Silhouette & taille", text: "Réduction des rondeurs abdominales.", svg: <circle cx="50" cy="50" r="30" /> },
  { title: "Digestion & hormones", text: "Moins de ballonnements, meilleur transit.", svg: <path d="M30 50 Q50 20 70 50 T30 50" /> },
  { title: "Posture & dos", text: "Soulagement des douleurs lombaires et cervicales.", svg: <path d="M40 20 L40 80 M60 20 L60 80 M30 50 L70 50" /> },
  { title: "Circulation & œdèmes", text: "Jambes légères, visage dégonflé.", svg: <path d="M30 30 Q50 50 30 70 M70 30 Q50 50 70 70" /> },
  { title: "Vie intime", text: "Regain de vitalité et de sensations.", svg: <path d="M50 30 L30 60 L50 70 L70 60 Z" /> },
];
function ProblemsGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Bénéfices</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">Un ventre en bonne santé change tout</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {problems.map((p, i) => (
            <Reveal key={i}>
              <div className="border border-[rgba(193,122,90,0.18)] h-full">
                <div className="aspect-square flex items-center justify-center" style={{ background: "var(--color-surface)" }}>
                  <svg viewBox="0 0 100 100" className="w-1/2 h-1/2" stroke="var(--color-terra)" fill="none" strokeWidth="1.3">
                    {p.svg}
                  </svg>
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
  "La graisse viscérale : diagnostic et prise de conscience",
  "Le système lymphatique : activation et drainage",
  "Retrouver l'énergie par la stimulation lymphatique",
  "Libération myofasciale (MFR) du ventre",
  "Relâchement du diaphragme",
  "Mobilisation de la cage thoracique",
  "Respiration pour stimuler la digestion",
  "Respiration pour la vésicule biliaire et les muscles abdominaux",
  "Technique de travail sur l'intestin",
  "Travail sur l'anneau ombilical",
  "Travail sur le muscle psoas",
  "Intégration : routine complète de 5 minutes",
  "Ancrage et autonomie : créer votre rituel quotidien",
  "Bilan, évaluation et suite du parcours",
];
function ProgramAccordion() {
  return (
    <section id="programme" className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="text-center">
            <Eyebrow>14 jours · 5 minutes par jour</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">Le programme en détail</h2>
          </div>
        </Reveal>
        <div className="mt-12 divide-y divide-[rgba(193,122,90,0.2)] border-y border-[rgba(193,122,90,0.2)] bg-white">
          {days.map((d, i) => (
            <details key={i} className="group">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 md:p-6 hover:bg-[var(--color-bg)] transition">
                <div className="flex items-center gap-5 min-w-0">
                  <span className="label-eyebrow shrink-0 w-14" style={{ color: "var(--color-terra)" }}>Jour {i + 1}</span>
                  <span className="font-display text-base md:text-lg leading-snug">{d}</span>
                </div>
                <ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" style={{ color: "var(--color-terra)" }} />
              </summary>
              <div className="px-5 md:px-6 pb-6 -mt-1">
                <div className="ml-0 md:ml-[4.75rem] pt-3 border-t border-[rgba(193,122,90,0.15)] text-sm" style={{ color: "var(--color-ink-muted)" }}>
                  <p className="flex items-center gap-2"><Play size={14} style={{ color: "var(--color-terra)" }} /> Vidéo incluse · Durée ~5 min</p>
                  <p className="mt-1">Technique : massage, MFR, respiration ou drainage selon le jour.</p>
                  <p className="mt-1">Matériel : aucun (rouleau de massage ou balle de fascia recommandés sur certaines séances).</p>
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
  { Icon: CreditCard, title: "Paiement sécurisé", text: "Accès immédiat après votre règlement." },
  { Icon: UserCircle, title: "Espace membre personnel", text: "Connectez-vous depuis n'importe quel appareil." },
  { Icon: Play, title: "Progressez à votre rythme", text: "Tous les contenus sont disponibles en vidéo." },
  { Icon: Calendar, title: "Accès 30 jours", text: "Prolongation possible si nécessaire." },
];
function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Mode d'emploi</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">Comment accéder au programme ?</h2>
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
  { emoji: "📏", text: "Réduction du tour de taille" },
  { emoji: "💨", text: "Digestion apaisée, moins de ballonnements" },
  { emoji: "⚡", text: "Regain d'énergie et de vitalité" },
  { emoji: "⚖️", text: "Meilleur équilibre hormonal" },
  { emoji: "🧘", text: "Moins de stress, sommeil amélioré" },
  { emoji: "💗", text: "Retour du désir et de la sensualité" },
];
function Results() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Vos résultats</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">Ce que vous allez vivre en 14 jours</h2>
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
            Seulement 5 minutes par jour.
            <br />
            <em className="font-normal" style={{ color: "var(--color-terra)" }}>Des résultats pour toute la vie.</em>
          </h2>
          <p className="mt-6 md:text-[1.0625rem]" style={{ color: "var(--color-ink-muted)" }}>
            Pas de salle de sport. Pas de matériel coûteux. Juste vos mains, votre souffle — et la méthode.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SECOND CAROUSEL ---------- */
const reviews2 = [
  { name: "Anne-Sophie L.", city: "Nice", quote: "Une révélation. Je n'avais jamais imaginé que la respiration puisse autant transformer mon corps." },
  { name: "Valérie M.", city: "Lille", quote: "Élégant, intelligent, profond. Victoria nous offre bien plus qu'un programme — une nouvelle hygiène de vie." },
  { name: "Christine B.", city: "Rennes", quote: "Ma taille s'est affinée, mon humeur s'est éclaircie. Je me sens à nouveau féminine et vivante." },
  { name: "Émilie P.", city: "Nantes", quote: "Discret, doux, mais terriblement efficace. Cinq minutes par jour ont changé ma relation à mon corps." },
];
function SecondCarousel() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Témoignages</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">Ce qu'elles en disent</h2>
          </div>
        </Reveal>
        <div className="mt-14">
          <TestimonialCarousel items={reviews2} />
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
          <h2 className="font-display text-[2.25rem] md:text-5xl leading-tight">
            Votre ventre est le centre <br className="hidden md:inline" />
            de votre force et de votre beauté.
            <br />
            <em className="font-normal" style={{ color: "var(--color-terra)" }}>Commencez aujourd'hui.</em>
          </h2>

          <div className="mt-12 flex flex-col items-center gap-8">
            <div className="flex flex-col items-center">
              <span className="label-eyebrow text-white/60">Prix de lancement</span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="font-display text-6xl font-semibold" style={{ color: "var(--color-terra)" }}>9,99 €</span>
                <span className="text-lg line-through text-white/50">99 €</span>
              </div>
            </div>
            <CTA>Je m'inscris maintenant</CTA>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/60">
              <li className="flex items-center gap-1.5"><CheckCircle2 size={14} /> Accès 30 jours</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 size={14} /> Remboursement 14 jours</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 size={14} /> Paiement sécurisé</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  { q: "Je ne parviens pas à accéder à la plateforme, que faire ?", a: "Contactez notre support à support@victoriakorshak.com — nous vous répondons sous 24h." },
  { q: "Quels moyens de paiement acceptez-vous ?", a: "Paiement par carte bancaire (Visa, Mastercard) ou PayPal. Si vous rencontrez une difficulté, écrivez-nous." },
  { q: "Je n'aurai pas le temps de tout voir en 30 jours.", a: "L'accès peut être prolongé sur simple demande. Nous nous adaptons à votre rythme." },
  { q: "Ce programme convient-il aux hommes ?", a: "Absolument. Les techniques sont efficaces pour tous les corps." },
  { q: "J'ai accouché récemment, est-ce adapté (diastasis, césarienne) ?", a: "Oui, le programme inclut des recommandations spécifiques. Consultez votre médecin avant de commencer si vous avez des doutes." },
  { q: "J'ai beaucoup de poids à perdre, est-ce que ça marchera pour moi ?", a: "Oui. Le programme s'adapte à tous les profils. Les résultats sont progressifs et durables." },
  { q: "Ai-je besoin d'équipement particulier ?", a: "Un rouleau de massage et une balle de fascia sont recommandés pour certaines séances, mais non obligatoires pour commencer." },
];
function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-[2.25rem]">Questions fréquentes</h2>
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
          <p className="font-display text-2xl text-white">Victoria Korshak</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
              <Youtube size={16} />
            </a>
          </div>
        </div>
        <hr className="my-8 border-white/15" />
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 text-sm">
          <div className="space-y-2">
            <p>support@victoriakorshak.com</p>
            <p className="text-xs text-white/50">FOP Korshak Victoria (données légales du prestataire)</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
            <a href="#" className="hover:text-white">Politique de confidentialité</a>
            <a href="#" className="hover:text-white">Contrat d'offre</a>
            <a href="#" className="hover:text-white">Mentions légales</a>
          </div>
        </div>
        <p className="mt-10 text-xs text-white/40">© 2025 Victoria Korshak. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

/* ---------- PAGE ---------- */
function LandingPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--color-bg)" }}>
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
    </main>
  );
}
