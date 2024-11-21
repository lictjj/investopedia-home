import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Stats } from "../components/Stats";
import { CTA } from "../components/CTA";

const Index = () => {
  return (
    <main className="bg-black">
      <Hero />
      <Features />
      <Stats />
      <CTA />
    </main>
  );
};

export default Index;