import { Button } from "@/components/ui/button";
import { ExternalLink, Palette, Users, MessageSquare } from "lucide-react";

const NammaDesigns = () => {
  const highlights = [
    {
      icon: <Palette className="w-5 h-5" />,
      text: "Creative Graphic Designs"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Client Portfolio & Works"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      text: "Customer Feedback & Reviews"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Explore Our <span className="text-primary">Graphic Design</span> Portfolio
              </h2>
              <p className="text-lg text-muted-foreground">
                Visit Namma Designs to see our creative graphic design works and client testimonials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg"
                >
                  <div className="text-primary">
                    {highlight.icon}
                  </div>
                  <span className="font-medium">{highlight.text}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg"
              asChild
            >
              <a 
                href="https://namma-designs.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Visit Namma Designs
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NammaDesigns;