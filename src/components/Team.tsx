import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Anugrah",
      role: "Team Leader",
      emoji: "🧭",
    },
    {
      name: "Diya Joshy",
      role: "Web Developer & Documentation",
      emoji: "💻",
    },
    {
      name: "Anaswar",
      role: "Logic Developer",
      emoji: "🧠",
    },
    {
      name: "Anandhakrishna",
      role: "Logic Developer",
      emoji: "🛠️",
    },
    {
      name: "Vishnu",
      role: "UI/UX Developer",
      emoji: "🎨",
    },
    {
      name: "Niveditha",
      role: "UI/UX Developer",
      emoji: "✨",
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 relative" data-reveal="repeat">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <Users className="w-10 h-10 text-primary" />
              <h2
                className="text-4xl md:text-5xl font-bold text-earth-green"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Terra_Bytes
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate team behind VIRDIAN's educational mission
            </p>
          </div>

          {/* Team Introduction */}
          <Card className="p-8 md:p-12 mb-12 bg-gradient-space border-secondary/20 glow-blue hover-lift">
            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Terra_Bytes is a team of developers, designers, and educators dedicated to making 
                space data accessible and engaging for everyone. We believe that combining gaming 
                with real NASA datasets can inspire the next generation of scientists, farmers, 
                and environmental stewards.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Through VIRDIAN, we're bridging the gap between space exploration and everyday 
                life, showing how satellite technology directly impacts sustainable agriculture 
                and climate science.
              </p>
            </div>
          </Card>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 mb-16">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300 hover:glow-green hover-lift group"
              >
                <div className="text-center space-y-4">
                  {/* Avatar/Emoji */}
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-5xl group-hover:bg-primary/20 transition-colors">
                    {member.emoji}
                  </div>
                  {/* Name */}
                  <h4 className="text-xl font-bold text-foreground">{member.name}</h4>
                  {/* Role */}
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Culture Divider */}
          <Card className="mb-16 p-8 md:p-10 bg-card/40 backdrop-blur-sm border-primary/20 text-center hover-lift" data-reveal="repeat">
            <div className="max-w-3xl mx-auto space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-earth-green">How We Collaborate</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our developers blend creative design, precise engineering, and space-science insight.
                Between each feature release, we host rapid playtests, gather feedback from students and educators,
                and iterate until the gameplay feels both inspiring and informative.
              </p>
            </div>
          </Card>

          {/* Team Values */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border text-center hover-lift">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">
                Pushing boundaries in educational gaming
              </p>
            </Card>
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border text-center hover-lift">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Impact</h4>
              <p className="text-sm text-muted-foreground">
                Creating awareness about climate and agriculture
              </p>
            </Card>
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border text-center hover-lift">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Education</h4>
              <p className="text-sm text-muted-foreground">
                Making science accessible and fun for all
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
