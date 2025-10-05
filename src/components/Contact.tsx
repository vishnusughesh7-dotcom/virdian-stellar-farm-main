import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Send, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("https://formsubmit.co/ajax/nivedithavs2007@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New VIRDIAN Message",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll respond soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Delivery Issue",
        description: "Unable to send right now. Please try again shortly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialClick = (network: string) => {
    toast({
      title: "Coming Soon",
      description: `${network} updates are launching soon!`,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-gradient-space" data-reveal>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-space-blue"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Get in Touch
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions, feedback, or want to report a bug? We'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Options */}
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border text-center hover-lift">
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-bold text-foreground mb-2">Email Us</h4>
              <p className="text-sm text-muted-foreground">
                nivedithavs2007@gmail.com
              </p>
            </Card>
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border text-center hover-lift">
              <MessageSquare className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h4 className="text-lg font-bold text-foreground mb-2">Feedback</h4>
              <p className="text-sm text-muted-foreground">
                Share your game experience
              </p>
            </Card>
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border text-center hover-lift">
              <Send className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-bold text-foreground mb-2">Bug Reports</h4>
              <p className="text-sm text-muted-foreground">
                Help us improve VIRDIAN
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-primary/20 glow-green hover-lift">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full glow-green"
                disabled={isSubmitting}
              >
                <Send className="mr-2 w-5 h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Social Media Links Placeholder */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Follow Terra_Bytes</p>
            <div className="flex justify-center gap-4">
              <Button
                type="button"
                variant="ghost"
                className="rounded-full w-12 h-12 bg-primary/10 hover:bg-primary/20 transition-transform hover:-translate-y-1"
                onClick={() => handleSocialClick("Twitter")}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="rounded-full w-12 h-12 bg-primary/10 hover:bg-primary/20 transition-transform hover:-translate-y-1"
                onClick={() => handleSocialClick("Instagram")}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="rounded-full w-12 h-12 bg-primary/10 hover:bg-primary/20 transition-transform hover:-translate-y-1"
                onClick={() => handleSocialClick("LinkedIn")}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="rounded-full w-12 h-12 bg-primary/10 hover:bg-primary/20 transition-transform hover:-translate-y-1"
                onClick={() => handleSocialClick("YouTube")}
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
