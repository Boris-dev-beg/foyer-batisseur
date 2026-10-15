import { TERRAINS, TERRAINS_SECTION } from "../../data";
import { GroundCard } from "../cards/GroundCard";
import { FilterGround } from "../form/filterForm";
import { Button } from "../ui/buttons";

export default function Terrains() {
  return (
    <section id="terrains" className="section-light">
      <div className="wrapper">
        <div className="max-w-7xl">
          <h2 className="section-title">{TERRAINS_SECTION.title}</h2>
          <p className="section-subtitle">{TERRAINS_SECTION.subtitle}</p>
        </div>

        <FilterGround />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 py-5 border-t-2 border-brand-muted">
          {TERRAINS.map((ground) => (
            <GroundCard ground={ground} />
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Button
            href={""}
            label={TERRAINS_SECTION.moreCta}
            className="btn-secondary px-25"
          />
        </div>
      </div>
    </section>
  );
}
