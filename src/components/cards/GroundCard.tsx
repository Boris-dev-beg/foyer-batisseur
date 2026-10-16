import { MapPin, CheckCircle2 } from "lucide-react";
import { formatFCFA } from "../../lib/format";
import { TERRAINS_SECTION, terrainTitle, type Terrain } from "../../data";
import { Button } from "../ui/buttons";
import { whatsappTerrain } from "../../lib/whatsapp";

export const GroundCard = ({ ground }: { ground: Terrain }) => {
  const href = whatsappTerrain(ground);
  return (
    <div className="card p-0! overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
        <img
          src={ground.image}
          alt={ground.alt}
          className="h-full w-full object-cover"
        />
        {ground.titled && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-brand-primary text-sm font-medium px-3 py-1 rounded-full shadow-sm">
            <CheckCircle2
              className="w-5 h-5 text-brand-secondary"
              strokeWidth={2.5}
            />
            {TERRAINS_SECTION.titledBadge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow justify-between gap-4">
        <div className="space-y-0.5">
          <h3 className="text-xl font-bold text-brand-primary">
            {terrainTitle(ground)}
          </h3>
          <div className="flex items-center gap-1.5 text-brand-muted text-sm font-medium">
            <MapPin className="size-5 text-brand-secondary" strokeWidth={2.5} />
            <span>{ground.quartier}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-2xl sm:text-3xl font-black text-brand-primary">
            {formatFCFA(ground.price)}
          </div>
          <Button
            href={href}
            label={TERRAINS_SECTION.cardCta}
            className="btn-secondary w-full"
          />
        </div>
      </div>
    </div>
  );
};
