import { VILLAS, VILLAS_SECTION, type Villa, type VillaKind } from "../../data";
import { useState } from "react";
import { FilterVillas } from "../form/filterForm";
import { VillaCard } from "../cards/VillaCard";
import { Button } from "../ui/buttons";
import { whatsappQuote } from "../../lib/whatsapp";

const href = whatsappQuote()
export function VillasSection() {
  const [activeTab, setActiveTab] = useState<"Toutes" | VillaKind>("Toutes");

  const filteredVillas =
    activeTab === "Toutes"
      ? VILLAS
      : VILLAS.filter((v) => v.kind === activeTab);

  return (
    <section id="villas" className="section-light">
      <div className="wrapper mx-auto">
        {/* Header */}
        <div className="max-w-7xl">
          <h2 className="section-title">{VILLAS_SECTION.title}</h2>
          <p className="section-subtitle">{VILLAS_SECTION.subtitle}</p>
        </div>

        {/* Filter Zone */}
        <FilterVillas activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredVillas.map((villa: Villa) => (
            <VillaCard villa={villa} key={villa.id} />
          ))}
        </div>

        {/* Banner */}
        <div className="section-dark rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 p-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              {VILLAS_SECTION.banner.title}
            </h3>
            <p className="text-slate-300 text-sm md:text-base">
              {VILLAS_SECTION.banner.text}
            </p>
          </div>

          <Button
            className="btn btn-primary shrink-0"
            label={VILLAS_SECTION.banner.cta}
            href={href}
          />
        </div>
      </div>
    </section>
  );
}
