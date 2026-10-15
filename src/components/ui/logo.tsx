export function Logo_header() {
  return (
    <a
      className="flex shrink-0 items-center whitespace-nowrap text-2xl md:text-3xl font-semibold text-white italic sm:text-2xl font-script"
      href="#accueil"
      aria-label="Foyer Bâtisseur, accueil"
    >
      <img
        className="-ml-2 mr-1 h-20 w-16 object-contain sm:w-20"
        src="/images/logo.png"
        alt="Logo de Foyer Bâtisseur"
      />
      <span>Foyer Bâtisseur</span>
    </a>
  );
}
