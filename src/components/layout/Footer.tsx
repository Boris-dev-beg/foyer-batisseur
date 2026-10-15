
import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { DEMO_BANNER, FOOTER, SITE, WHATSAPP_MESSAGES } from '../../data';

// Liens de navigation issus de la maquette
const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Terrains', href: '#terrains' },
  { label: 'Villas', href: '#villas' },
  { label: 'Suivi de chantier', href: '#suivi' },
  { label: 'Paiement', href: '#paiement' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  // Génération du lien WhatsApp avec message pré-rempli
  const prospectWhatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    WHATSAPP_MESSAGES.prospect
  )}`;

  return (
    <footer className="bg-brand-primary text-white pt-12 pb-8 border-t border-white/10">
      <div className="wrapper mx-auto space-y-12">
        
        {/* Bandeau de démonstration (Call to action développeur) */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/15">
          <div className="space-y-1 text-center md:text-left">
            <span className="inline-block text-xs uppercase tracking-wider text-brand-secondary font-semibold">
              {DEMO_BANNER.mention}
            </span>
            <p className="text-lg sm:text-xl font-bold text-white">
              {DEMO_BANNER.text}
            </p>
          </div>
          
          <a
            href={prospectWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp rounded-xl font-medium px-6 py-3 shrink-0 flex items-center gap-2 shadow-sm hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{DEMO_BANNER.cta}</span>
          </a>
        </div>

        {/* Section principale du Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
          
          {/* Colonne 1 : Logo & Description de la marque */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* Icône / Logo simplifié */}
              <div className="w-10 h-10 rounded-xl bg-brand-secondary/20 border border-brand-secondary/40 flex items-center justify-center text-brand-secondary">
                <span className="font-bold text-xl">FB</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                {SITE.brand}
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              {SITE.tagline}
            </p>
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

          {/* Colonne 3 : Informations de contact */}
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