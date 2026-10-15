import { Menu } from "lucide-react";
import { NAV_WHATSAPP_LABEL } from "../../data";
import Navbar from "../shared/Navbar";
import { ResponsiveButton, WhatsApp } from "../ui/buttons";
import { Logo_header } from "../ui/logo";
import { useState } from "react";
import { whatsappGeneral } from "../../lib/whatsapp";
import ResponsiveNav from "../shared/ResponsiveNav";

const link = whatsappGeneral();

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 flex min-h-16 max-h-20 items-center justify-center backdrop-blur-md w-screen">
      <div className="mx-auto  flex min-h-16 items-center justify-between gap-3 sm:gap-6 w-full wrapper">
        <Logo_header />

        <div className="flex gap-4">
          <Navbar />
          <WhatsApp href={link} label={NAV_WHATSAPP_LABEL} className="hidden md:inline-flex" />

          <ResponsiveButton isOpen={isOpen} setIsOpen={setIsOpen} icon={Menu} />
        </div>
      </div>
      <ResponsiveNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
