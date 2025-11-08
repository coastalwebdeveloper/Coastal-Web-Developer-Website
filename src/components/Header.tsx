import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border animate-fade-in">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 animate-scale-in">
          <img 
            src="/logo.jpg" 
            alt="Coastal Web Developers" 
            className="h-10 w-auto"
          />
          <div className="text-xl font-bold">
            <span className="text-foreground">Coastal</span>
            <span className="text-primary">WebDevelopers</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-primary font-medium hover:text-primary/80 transition-colors">
            Home
          </Link>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About Us
          </a>
          <Link to="/works" className="text-foreground hover:text-primary transition-colors">
            Our Works
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/contact">
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6 font-semibold animate-scale-in"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
