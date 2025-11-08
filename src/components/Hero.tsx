import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none">
        <img 
          src="/CWD_logo.png" 
          alt="" 
          className="w-48 h-48 md:w-96 md:h-96 object-contain"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-8 animate-fade-in max-w-6xl mx-auto leading-tight">
          Professional{" "}
          <span className="text-primary">Web Development</span>{" "}
          Services
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in px-4" style={{ animationDelay: "0.2s" }}>
          We bring your ideas to life with stunning websites. From custom web applications to e-commerce platforms, we do it all.{" "}
          <span className="text-primary font-semibold">At incredibly affordable prices!</span>{" "}
          Let's create something amazing together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in px-4" style={{ animationDelay: "0.4s" }}>
          <Link to="/contact" className="w-full sm:w-auto">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold hover-scale w-full"
            >
              Get a Free Quote
            </Button>
          </Link>
          <Link to="/feedback" className="w-full sm:w-auto">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold hover-scale w-full"
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2 fill-primary" />
              Give Feedback
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
