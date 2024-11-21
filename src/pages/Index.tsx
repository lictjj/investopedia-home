import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Stats } from "../components/Stats";
import { CTA } from "../components/CTA";
import { About } from "../components/About";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <main className="bg-black">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <About />
        <Features />
        <Stats />
        <CTA />
      </div>
    </main>
  );
};

export default Index;