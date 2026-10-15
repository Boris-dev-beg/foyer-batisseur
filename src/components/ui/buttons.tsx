import type { LucideIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsApp({ href, label, className }: { href: string; label: string, className?: string}) {
  return (
    <a
      className={`btn btn-whatsapp max-w-3xs ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp aria-hidden="true" className="size-7" />
      {label}
    </a>
  );
}

export function ResponsiveButton({
  isOpen,
  setIsOpen,
  icon: Icon,
  className,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <button
      className={`${className} ml-auto inline-flex size-11 items-center justify-center rounded-lg text-white cursor-pointer active:border-2 active:border-white/55 md:hidden`}
      type="button"
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Icon aria-hidden="true" />
    </button>
  );
}

export function Button({
  className,
  href,
  label,
}: {
  className: string;
  href: string;
  label: string;
}) {
  return (
    <a className={`${className} btn`} href={href}>
      {label}
    </a>
  );
}
