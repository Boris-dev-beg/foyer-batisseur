import type { LucideIcon } from "lucide-react";

type BenefitCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function BenefitCard({
  icon:Icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <article className="indication-card">
      <span className="inline-flex size-15 items-center justify-center">
        <Icon className="size-12" strokeWidth={1.5} />
      </span>
      <h2 className="mb-1 text-lg font-semibold text-white">{title}</h2>
      <p className="text-sm leading-relaxed text-white/85">{description}</p>
    </article>
  );
}
