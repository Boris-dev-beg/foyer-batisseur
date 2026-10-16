import { LayoutGrid } from "lucide-react";
import { VILLAS_SECTION, villaSubtitle, type Villa } from "../../data";
import { formatFCFA } from "../../lib/format";
import { Button } from "../ui/buttons";
import { whatsappVilla } from "../../lib/whatsapp";

export const VillaCard = ({ villa }: { villa: Villa }) => {
  const href = whatsappVilla(villa);
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
      <div className="p-6 flex flex-col grow justify-between gap-2">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-brand-primary">{villa.name}</h3>
          <p className="text-brand-muted">{villaSubtitle(villa)}</p>
          <div className="flex items-center gap-2 text-lg text-brand-primary font-semibold">
            <LayoutGrid className="w-4 h-4 text-brand-secondary" />
            <span>{villa.surface} m²</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <span className="text-brand-muted block font-medium">
              {VILLAS_SECTION.priceLabel}
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-brand-primary">
              {formatFCFA(villa.priceFrom)}
            </span>
          </div>

          <Button
            className="btn btn-primary w-full"
            label={VILLAS_SECTION.cardCta}
            href={href}
          />
        </div>
      </div>
    </div>
  );
};
