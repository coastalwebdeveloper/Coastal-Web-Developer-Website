import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
        <div className="text-[40rem] font-bold leading-none text-foreground">
          C
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in max-w-6xl mx-auto leading-tight">
          Professional{" "}
          <span className="text-primary">Web Development</span>{" "}
          Services
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          We bring your ideas to life with stunning websites. From custom web applications to e-commerce platforms, we do it all.{" "}
          <span className="text-primary font-semibold">At incredibly affordable prices!</span>{" "}
          Let's create something amazing together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-6 text-lg font-semibold hover-scale"
          >
            Get a Free Quote
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg px-8 py-6 text-lg font-semibold hover-scale"
          >
            <Star className="w-5 h-5 mr-2 fill-primary" />
            Give Feedback
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
