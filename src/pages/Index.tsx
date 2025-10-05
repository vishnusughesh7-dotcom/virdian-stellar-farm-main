import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowToPlay from "@/components/HowToPlay";
import Missions from "@/components/Missions";
import Resources from "@/components/Resources";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if ((entry.target as HTMLElement).dataset.reveal !== "repeat") {
              observer.unobserve(entry.target);
            }
          } else if ((entry.target as HTMLElement).dataset.reveal === "repeat") {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <HowToPlay />
      <Missions />
      <Resources />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
