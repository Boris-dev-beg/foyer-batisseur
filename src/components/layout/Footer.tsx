import { Phone, MapPin } from "lucide-react";
import {
  DEMO_BANNER,
  FOOTER,
  NAV_LINKS,
  SITE,
} from "../../data";
import { WhatsApp } from "../ui/buttons";
import { whatsappProspect } from "../../lib/whatsapp";
import { Logo_header } from "../ui/logo";

const href = whatsappProspect();

export function Footer() {
  return (
    <footer className="bg-brand-primary/50 text-white pt-12 pb-8 border-t border-white/10">
      <div className="wrapper mx-auto space-y-12">
        {/* Bandeau de démonstration (Call to action développeur) */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/15">
          <div className="space-y-1 text-center md:text-left">
            <span className="inline-block text-sm uppercase tracking-wider text-brand-secondary font-semibold">
              {DEMO_BANNER.mention}
            </span>
            <p className="text-sm sm:text-lg font-semibold text-white">
              {DEMO_BANNER.text}
            </p>
          </div>

          <WhatsApp href={href} label={DEMO_BANNER.cta.split(" ")[2]} />
        </div>

        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
          {/* Colonne 1 : Logo & Description de la marque */}
          <div className="md:col-span-5 space-y-4">
              {/* Logo  */}
            <Logo_header />
            <p className="text-slate-400 text-sm max-w-sm">{SITE.tagline}</p>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-base font-bold text-white">
              {FOOTER.navigationTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-brand-secondary transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : contact */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-base font-bold text-white">
              {FOOTER.contactTitle}
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-secondary shrink-0" />
                <span>{SITE.whatsappDisplay}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                <span>{SITE.addressShort}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pied de page / Mentions légales */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{FOOTER.legalLeft}</p>
          <p className="font-medium text-slate-300 tracking-wider">
            {FOOTER.legalRight}
          </p>
        </div>
      </div>
    </footer>
  );
};
