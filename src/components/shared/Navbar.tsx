import { NAV_LINKS } from "../../data";


export default function Navbar() {

  return (
      <nav
        className={`md:flex items-center justify-center gap-5 bg-transparent md:p-0 lg:gap-7 hidden`}
        aria-label="Navigation principale"
      >
        {NAV_LINKS.map(({ label, href, current }) => (
          <a
            key={href}
            className={`relative w-fit py-2 text-sm text-white after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.75 after:origin-left after:scale-x-0 after:bg-brand-secondary after:transition-transform hover:after:scale-x-100 md:whitespace-nowrap ${current ? "font-semibold after:scale-x-100" : ""}`}
            href={href}
            aria-current={current ? "page" : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
  );
}
