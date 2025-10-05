import { Button } from "@/components/ui/button";
import { Rocket, Leaf, Database, Mouse } from "lucide-react";
import heroImage from "@/assets/hero-farm-space.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-start justify-center overflow-hidden pt-24 pb-16 md:pt-28"
      data-reveal="static"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="VIRDIAN - Farming meets Space Exploration"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <span className="absolute top-16 left-10 w-2 h-2 bg-primary rounded-full animate-particle"></span>
        <span className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-particle-delay"></span>
        <span className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary rounded-full animate-particle-delay-2"></span>
        <span className="absolute top-1/3 left-1/2 w-2 h-2 bg-secondary/70 rounded-full animate-particle-fast"></span>
        <span className="absolute bottom-24 right-1/3 w-1.5 h-1.5 bg-white/70 rounded-full animate-particle-slow"></span>
        <span className="absolute top-10 right-1/4 w-2 h-2 bg-primary/80 rounded-full animate-particle-delay"></span>
        <span className="absolute bottom-16 left-12 w-3 h-3 bg-secondary/60 rounded-full animate-particle"></span>
        <span className="absolute top-1/4 left-1/5 w-1.5 h-1.5 bg-white/60 rounded-full animate-particle-tiny"></span>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-7 animate-fade-in-up">
          {/* Title */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-earth-green">VIRDIAN</span>
            <br />
            <span className="text-foreground">Learn Farming,</span>
            <br />
            <span className="text-space-blue">Explore Space Data</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Play. Learn. Grow smarter with NASA data.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Manage resources, tackle climate challenges, and discover how real space data 
            shapes sustainable agriculture. Experience farming through the lens of NASA's 
            Earth observation technology.
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Sustainable Farming</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-secondary/20">
              <Database className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">Real NASA Data</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Climate Science</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-2">
            <Button
              size="lg"
              className="text-lg px-8 py-6 glow-green hover-lift flex items-center justify-center gap-2"
            >
              <Rocket className="h-5 w-5" />
              Play Now
            </Button>
            <div className="mouse-indicator">
              <Mouse className="h-6 w-6 text-white" />
            </div>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-secondary hover:bg-secondary/10 flex items-center justify-center gap-2 hover-lift"
              onClick={() => {
                const element = document.querySelector("#about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
