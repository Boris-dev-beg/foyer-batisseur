import BenefitCard from "../shared/BenefitCard";
import { Button, WhatsApp } from "../ui/buttons";
import { whatsappGeneral } from "../../lib/whatsapp";
import { HERO } from "../../data";

const href = whatsappGeneral();

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate grid min-h-svh grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden text-white"
      aria-labelledby="hero-title"
    >
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]"
        src="/images/hero.jpg"
        alt="Maison en construction sur un chantier"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-brand-primary via-brand-primary/85 to-brand-primary/40 md:to-brand-primary/10" />

      <div className="mx-auto grid min-h-svh w-full max-w-7xl grid-rows-[auto_minmax(0,1fr)_auto] px-4 py-4 sm:px-8 lg:px-10">
        <div className="max-w-155 self-center py-12 sm:py-16">
          <p className="mb-3 text-sm font-semibold uppercase text-brand-secondary">
            {HERO.badge}
          </p>
          <h1
            id="hero-title"
            className="max-w-152.5 text-[clamp(2.375rem,5vw,3rem)] leading-[1.14] font-bold"
          >
            {HERO.title}
          </h1>
          <p className="mt-3 mb-4 max-w-142.5 text-base leading-relaxed text-white/85 sm:text-lg">
            {HERO.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              href={HERO.primaryCta.href}
              label={HERO.primaryCta.label}
              className="btn-primary"
            />
            <WhatsApp href={href} label={HERO.secondaryCtaLabel} />
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-3 pb-2 md:grid-cols-3 md:gap-6"
          aria-label="Nos engagements"
        >
          {HERO.trust.map(({ icon, title, text }, index) => (
            <BenefitCard
              key={index}
              icon={icon}
              title={title}
              description={text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
