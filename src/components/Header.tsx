import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border animate-fade-in">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 animate-scale-in">
          <div className="w-10 h-10 bg-foreground rounded-md flex items-center justify-center text-primary font-bold text-xl">
            C
          </div>
          <div className="text-xl font-bold">
            <span className="text-foreground">Coastal</span>
            <span className="text-primary">WebDevelopers</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-primary font-medium hover:text-primary/80 transition-colors">
            Home
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#works" className="text-foreground hover:text-primary transition-colors">
            Our Works
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Web Development
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Button 
            variant="destructive" 
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 animate-scale-in"
          >
            <Tag className="w-4 h-4 mr-2" />
            OFFERS
          </Button>
          <Button 
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6 font-semibold animate-scale-in"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
