import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Research } from "@/components/Research";
import { Shipped } from "@/components/Shipped";
import { Experience } from "@/components/Experience";
import { Competencies } from "@/components/Competencies";
import { OutsideSystems } from "@/components/OutsideSystems";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Research />
      <Shipped />
      <Experience />
      <Competencies />
      <OutsideSystems />
      <Contact />
    </main>
  );
}
