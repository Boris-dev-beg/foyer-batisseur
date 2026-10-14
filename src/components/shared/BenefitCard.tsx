import type { ReactNode } from "react";

type BenefitCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function BenefitCard({
  icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <article className="min-h-40 rounded-lg border border-white/85 bg-white/15 p-4 text-white backdrop-blur-sm sm:p-5">
      <span className="mb-2 inline-flex size-12 items-center justify-center bg-brand-primary/75 [&>svg]:size-8 [&>svg]:stroke-[1.7]">
        {icon}
      </span>
      <h2 className="mb-1 text-base font-semibold text-white">{title}</h2>
      <p className="text-sm leading-relaxed text-white/85">{description}</p>
    </article>
  );
}
