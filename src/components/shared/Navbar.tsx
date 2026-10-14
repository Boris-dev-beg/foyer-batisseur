import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigationLinks, whatsappUrl } from "../../data/home";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex min-h-16 items-center justify-between gap-3 sm:gap-6">
      <a
        className="flex shrink-0 items-center whitespace-nowrap text-xl font-semibold text-white italic sm:text-2xl"
        href="#accueil"
        aria-label="Foyer Bâtisseur, accueil"
      >
        <img className="-ml-2 mr-1 h-14 w-16 object-contain sm:w-20" src="/images/logo.png" alt="" />
        <span>Foyer Bâtisseur</span>
      </a>

      <button
        className="ml-auto inline-flex size-11 items-center justify-center rounded-lg border border-white/55 bg-brand-primary/40 text-white md:hidden"
        type="button"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav
        className={`${isOpen ? "flex" : "hidden"} absolute top-full right-0 left-0 z-10 flex-col rounded-lg border border-white/30 bg-brand-primary/95 px-4 py-2 md:static md:flex md:flex-row md:items-center md:justify-center md:gap-5 md:border-0 md:bg-transparent md:p-0 lg:gap-7`}
        aria-label="Navigation principale"
      >
        {navigationLinks.map(({ label, href, current }) => (
          <a
            key={href}
            className={`relative w-fit py-2 text-sm text-white after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[3px] after:origin-left after:scale-x-0 after:bg-brand-secondary after:transition-transform hover:after:scale-x-100 md:whitespace-nowrap ${current ? "font-semibold after:scale-x-100" : ""}`}
            href={href}
            aria-current={current ? "page" : undefined}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <a
        className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-accent px-3 text-xs font-medium text-white sm:px-4 sm:text-sm"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        <img className="size-5" src="https://cdn.simpleicons.org/whatsapp/FFFFFF" alt="" />
        WhatsApp
      </a>
    </header>
  );
}
