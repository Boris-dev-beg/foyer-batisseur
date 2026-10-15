import { LayoutGrid } from "lucide-react";
import { VILLAS_SECTION, villaSubtitle, type Villa } from "../../data";
import { formatFCFA } from "../../lib/format";

export const VillaCard = ({ villa }: { villa: Villa }) => {
  return (
    <div key={villa.id} className="card p-0! overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
        <img
          src={villa.image}
          alt={villa.alt}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col grow justify-between gap-6">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-brand-primary">{villa.name}</h3>
          <p className="text-sm text-brand-muted">{villaSubtitle(villa)}</p>
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
  );
};
