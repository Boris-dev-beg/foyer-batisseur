import { X } from "lucide-react";
import { NAV_LINKS, NAV_WHATSAPP_LABEL, SITE } from "../../data";
import { Logo_header } from "../ui/logo";
import { ResponsiveButton, WhatsApp } from "../ui/buttons";
import { whatsappGeneral } from "../../lib/whatsapp";

const link = whatsappGeneral();

export default function ResponsiveNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  return (
    <aside
      className={`${isOpen ? "translate-x-0" : "-translate-x-full"} transition-all duration-300 flex flex-col md:hidden fixed w-[97vw] h-screen top-0 left-0 bg-brand-primary/90 wrapper`}
    >
      <ResponsiveButton isOpen={isOpen} setIsOpen={setIsOpen} icon={X} className="absolute top-5 right-5 " />
      <>
        <Logo_header />
        <nav
          className="flex flex-col justify-center p-5 gap-1"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map(({ label, href, current }) => (
            <a
              key={href}
              className={`relative w-fit py-2 text-sm text-white after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.75 after:origin-left after:scale-x-0 after:bg-brand-secondary after:transition-transform hover:after:scale-x-100 md:whitespace-nowrap ${current ? "font-semibold after:scale-x-100" : ""}`}
              href={href}
              aria-current={current ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <WhatsApp href={link} label={NAV_WHATSAPP_LABEL} />
      </>
      <p className="text-brand-card mt-auto mb-5 text-sm">
        Designed and developped by {SITE.creator}
      </p>
    </aside>
  );
}
