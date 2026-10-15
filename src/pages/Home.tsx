import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <div className="bg-brand-primary/95">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
