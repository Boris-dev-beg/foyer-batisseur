import { useState } from "react";
import { TERRAINS, TERRAINS_SECTION } from "../../data";
import { GroundCard } from "../cards/GroundCard";
import { FilterGround } from "../form/filterForm";
import { Button } from "../ui/buttons";
import { filterGround } from "../../lib/filters";
import { whatsappQuote } from "../../lib/whatsapp";

const href = whatsappQuote()
export default function Terrains() {
  const [neighborhoodFilter, setNeighborhoodFilter] = useState("");
  const [budgetIdFilter, setBudgetIdFilter] = useState("");
  const [surfaceIdFilter, setSurfaceIdFilter] = useState("");

  const groundToShow = filterGround(TERRAINS, {
    quartier: neighborhoodFilter,
    surfaceId: surfaceIdFilter,
    budgetId: budgetIdFilter,
  });
  return (
    <section id="terrains" className="section-light">
      <div className="wrapper">
        <div className="max-w-7xl">
          <h2 className="section-title">{TERRAINS_SECTION.title}</h2>
          <p className="section-subtitle">{TERRAINS_SECTION.subtitle}</p>
        </div>

        <FilterGround
          neighborhood={neighborhoodFilter}
          budget={budgetIdFilter}
          surface={surfaceIdFilter}
          setBudget={setBudgetIdFilter}
          setNeighborhood={setNeighborhoodFilter}
          setSurface={setSurfaceIdFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 py-5 border-t-2 border-brand-muted">
          {groundToShow.map((ground) => (
            <GroundCard ground={ground} key={ground.id} />
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Button
            href={href}
            label={TERRAINS_SECTION.moreCta}
            className="btn-secondary sm:px-25"
          />
        </div>
      </div>
    </section>
  );
}
