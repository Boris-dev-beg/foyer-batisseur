import { Camera, ShieldCheck, WalletCards } from "lucide-react";
import BenefitCard from "../shared/BenefitCard";
import Navbar from "../shared/Navbar";
import { heroBenefits, whatsappUrl } from "../../data/home";

const benefitIcons = {
  title: ShieldCheck,
  payment: Camera,
  tracking: WalletCards,
};

export default function Hero() {
  return (
    <section
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
        <Navbar />

        <div className="max-w-155 self-center py-12 sm:py-16">
          <p className="mb-3 text-sm font-semibold uppercase text-brand-secondary">
            Promoteur immobilier - Bafousam
          </p>
          <h1
            id="hero-title"
            className="max-w-152.5 text-[clamp(2.375rem,5vw,3rem)] leading-[1.14] font-bold"
          >
            Terrains titrés et construction clé en main à Bafoussam
          </h1>
          <p className="mt-3 mb-4 max-w-142.5 text-base leading-relaxed text-white/85 sm:text-lg">
            De l’achat du terrain à la remise des clés, suivez votre chantier en
            photos, même depuis l’étranger.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-secondary px-7 text-base font-semibold text-brand-primary transition hover:-translate-y-0.5 hover:bg-brand-secondary-hover"
              href="#terrains"
            >
              Voir les terrains
            </a>
            <a
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-white bg-brand-primary/30 px-6 text-base transition hover:bg-brand-primary/60"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="size-7"
                src="https://cdn.simpleicons.org/whatsapp/FFFFFF"
                alt=""
              />
              Écrire sur WhatsApp
            </a>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-3 pb-2 md:grid-cols-3 md:gap-6"
          aria-label="Nos engagements"
        >
          {heroBenefits.map(({ id, title, description }) => {
            const Icon = benefitIcons[id];

            return (
              <BenefitCard
                key={id}
                icon={<Icon aria-hidden="true" />}
                title={title}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
