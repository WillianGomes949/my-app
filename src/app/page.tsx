// src/app/page.tsx
"use client";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Projects from "@/components/layout/Projects"; // Vamos criar este
import Contact from "@/components/layout/Contact";
import StackMarquee from "@/components/UI/StackMarquee";
import PayGrid from "@/components/UI/PayGrid";
import SiteBenefits from "@/components/layout/SiteBenefits";

export default function Home() {
  return (
    <main>
      <Hero />
      <StackMarquee />
      <SiteBenefits />
      <About />
      <Projects />
      <Contact />
      <PayGrid />
    </main>
  );
}
