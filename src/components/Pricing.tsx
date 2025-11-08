import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const features = [
    "5 Pages (Home, About, Services, Contact, etc.)",
    "Responsive Design (Mobile & Desktop)",
    "Basic SEO Setup",
    "Contact Form Integration",
    "Social Media Links",
    "Google Maps Integration",
    "Fast Loading Speed"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Simple <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Get a professional website at an unbeatable price
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center animate-fade-in">
            <h3 className="text-2xl font-bold mb-2">Basic Website Package</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-primary">₹3,999</span>
            </div>
            <p className="text-muted-foreground mb-8">Perfect for small businesses and startups</p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-left">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/contact">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 text-lg"
              >
                Get Started – ₹3,999
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;