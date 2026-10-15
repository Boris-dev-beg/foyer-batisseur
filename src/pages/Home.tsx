import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import Steps from "../components/sections/Steps";
import Terrains from "../components/sections/Terrains";

export default function Home() {
  return (
    <div className="bg-brand-primary/95">
      <Header />
      <main>
        <Hero />
        <section className="section-light flex flex-col gap-16">
          {/* Statistiques */}
          <Stats />

          {/* Comment ça marche (Étapes) */}
          <Steps />
        </section>
        <Terrains />
      </main>
    </div>
  );
}
