import { X } from "lucide-react";
import { FOOTER, NAV_LINKS, NAV_WHATSAPP_LABEL } from "../../data";
import { Logo_header } from "../ui/logo";
import { ResponsiveButton, WhatsApp } from "../ui/buttons";
import { whatsappGeneral } from "../../lib/whatsapp";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const link = whatsappGeneral();

export default function ResponsiveNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  // ! States
  const params = useLocation();
  const [activeLink, setActiveLink] = useState(params.hash || "#accueil");

  // ! Functions
  const handleClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  // ! Render
  return (
    <aside
      className={`${isOpen ? "translate-x-0" : "-translate-x-full"} transition-all duration-300 flex flex-col md:hidden fixed w-[97vw] h-screen top-0 left-0 bg-brand-primary/90 wrapper`}
    >
      <ResponsiveButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        icon={X}
        className="absolute top-5 right-5 "
      />
      <>
        <Logo_header />
        <nav
          className="flex flex-col justify-center p-5 gap-1"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              className={`relative w-fit py-2 text-sm text-white after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.75 after:origin-left after:scale-x-0 after:bg-brand-secondary after:transition-transform hover:after:scale-x-100 md:whitespace-nowrap ${activeLink === href ? "font-semibold after:scale-x-100" : ""}`}
              href={href}
              aria-current={activeLink === href ? "page" : undefined}
              onClick={() => handleClick(href)}
            >
              {label}
            </a>
          ))}
        </nav>

        <WhatsApp href={link} label={NAV_WHATSAPP_LABEL} />
      </>
      <div className="mt-auto mb-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>{FOOTER.legalLeft}</p>
        <p className="font-medium text-slate-300 tracking-wider">
          {FOOTER.legalRight}
        </p>
      </div>
    </aside>
  );
}
