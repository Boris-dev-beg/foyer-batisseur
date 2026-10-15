import React, { useState } from "react";
import { LayoutGrid } from "lucide-react";
import {
  VILLA_TABS,
  VILLAS,
  VILLAS_SECTION,
  villaSubtitle,
  type Villa,
  type VillaKind,
} from "../../data";
import { formatFCFA } from "../../lib/format";
export const VillasSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Toutes" | VillaKind>("Toutes");

  const filteredVillas =
    activeTab === "Toutes"
      ? VILLAS
      : VILLAS.filter((v) => v.kind === activeTab);

  return (
    <section id="villas" className="section-light">
      <div className="wrapper mx-auto">
        {/* En-tête de section */}
        <h2 className="section-title">{VILLAS_SECTION.title}</h2>
        <p className="section-subtitle">{VILLAS_SECTION.subtitle}</p>

        {/* Onglets de filtrage */}
        <div className="flex flex-wrap gap-3 mb-8">
          {VILLA_TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-brand-primary text-white shadow-sm"
                    : "bg-white text-brand-primary border border-slate-200 hover:border-brand-primary/30"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Grille des cartes de villas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredVillas.map((villa: Villa) => (
            <div
              key={villa.id}
              className="card p-0! overflow-hidden flex flex-col"
            >
              {/* Conteneur d'image */}
              <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                <img
                  src={villa.image}
                  alt={villa.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Contenu de la carte */}
              <div className="p-6 flex flex-col grow justify-between gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-brand-primary">
                    {villa.name}
                  </h3>
                  <p className="text-sm text-brand-muted">
                    {villaSubtitle(villa)}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-brand-primary font-medium">
                    <LayoutGrid className="w-4 h-4 text-brand-secondary" />
                    <span>{villa.surface} m²</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-brand-muted block">
                      {VILLAS_SECTION.priceLabel}
                    </span>
                    <span className="text-lg font-bold text-brand-primary">
                      {formatFCFA(villa.priceFrom)}
                    </span>
                  </div>

                  <button type="button" className="btn btn-primary w-full">
                    {VILLAS_SECTION.cardCta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bannière "Vous avez déjà un terrain ?" */}
        <div className="section-dark rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 p-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              {VILLAS_SECTION.banner.title}
            </h3>
            <p className="text-slate-300 text-sm md:text-base">
              {VILLAS_SECTION.banner.text}
            </p>
          </div>

          <button type="button" className="btn btn-primary shrink-0">
            {VILLAS_SECTION.banner.cta}
          </button>
        </div>
      </div>
    </section>
  );
};
