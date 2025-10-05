import { Card } from "@/components/ui/card";
import {
  Mouse,
  Keyboard,
  Smartphone,
  Lightbulb,
  Satellite,
  Map,
  BarChart3,
} from "lucide-react";

const HowToPlay = () => {
  const steps = [
    {
      number: "01",
      title: "Access NASA Data",
      description: "View real-time satellite information about your farm's location including temperature, humidity, and precipitation forecasts.",
    },
    {
      number: "02",
      title: "Plan Your Crops",
      description: "Choose which crops to plant based on climate data and seasonal patterns. Each crop has different requirements and yields.",
    },
    {
      number: "03",
      title: "Manage Resources",
      description: "Allocate water, nutrients, and labor efficiently. Monitor livestock health and adapt to changing conditions.",
    },
    {
      number: "04",
      title: "Complete Missions",
      description: "Tackle environmental challenges like droughts, floods, and pests. Earn rewards and unlock new farming technologies.",
    },
  ];

  const controls = [
    { icon: Mouse, label: "Mouse", desc: "Click and drag to navigate" },
    { icon: Keyboard, label: "Keyboard", desc: "Arrow keys to move" },
    { icon: Smartphone, label: "Touch", desc: "Swipe and tap controls" },
  ];

  const spotlight = [
    {
      icon: Satellite,
      title: "Space-Powered Insights",
      description: "Understand live orbital data powering every farming decision.",
    },
    {
      icon: Map,
      title: "Adaptive Strategies",
      description: "Map soil health, crop rotation, and climate shifts in one dashboard.",
    },
    {
      icon: BarChart3,
      title: "Smart Progression",
      description: "Unlock tools and missions as you master sustainable techniques.",
    },
  ];

  return (
    <section id="how-to-play" className="py-20 md:py-32 relative bg-gradient-space" data-reveal="repeat">
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-10 left-6 w-2 h-2 rounded-full bg-secondary/70 animate-particle"></span>
        <span className="absolute bottom-12 right-12 w-3 h-3 rounded-full bg-primary/60 animate-particle-delay"></span>
        <span className="absolute top-1/2 right-20 w-2 h-2 rounded-full bg-white/50 animate-particle-delay-2"></span>
       
        <span className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-primary/70 animate-particle"></span>
        <span className="absolute top-8 right-10 w-1.5 h-1.5 rounded-full bg-white/50 animate-particle-slow"></span>
      </div>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              How to Play
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Master the art of data-driven farming in four simple steps
            </p>
          </div>

          {/* Experience Spotlight */}
          <Card className="mb-16 p-10 md:p-14 bg-gradient-earth border-primary/40 glow-green hover-lift">
            <div className="grid md:grid-cols-3 gap-8">
              {spotlight.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white/15 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/85 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Steps */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="p-8 bg-card/30 backdrop-blur-sm border-border hover:border-secondary/40 transition-all duration-300 hover:glow-blue"
              >
                <div className="flex gap-6">
                  <div className="text-6xl font-bold text-secondary/20" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {step.number}
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    <p className="text-white/80 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Controls */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-primary/20 hover-lift">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Controls
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {controls.map((control, index) => {
                const Icon = control.icon;
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{control.label}</h4>
                    <p className="text-sm text-white/70">{control.desc}</p>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Tips Card */}
          <Card className="mt-8 p-8 bg-gradient-earth border-primary/40 glow-green">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-white flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">Pro Tips</h4>
                <ul className="space-y-2 text-white/90 list-disc list-inside">
                  <li>Check weather forecasts daily to plan irrigation schedules</li>
                  <li>Diversify crops to minimize risk from climate events</li>
                  <li>Complete daily missions for bonus resources and achievements</li>
                  <li>Use historical data patterns to predict future conditions</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
