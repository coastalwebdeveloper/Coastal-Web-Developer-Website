import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 animate-scale-in">
            <img 
              src="/CWD_logo.png" 
              alt="Coastal Web Developers" 
              className="h-8 w-auto"
            />
            <div className="text-lg font-bold hidden sm:block">
              <span className="text-foreground">Coastal</span>
              <span className="text-primary">WebDevelopers</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-medium hover:text-primary/80 transition-colors ${
                location.pathname === '/' ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-primary transition-colors ${
                location.pathname === '/about' ? 'text-primary font-medium' : 'text-foreground'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/works" 
              className={`hover:text-primary transition-colors ${
                location.pathname === '/works' ? 'text-primary font-medium' : 'text-foreground'
              }`}
            >
              Our Works
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact">
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6 font-semibold animate-scale-in"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col gap-4 pt-4">
              <Link 
                to="/" 
                className={`font-medium hover:text-primary/80 transition-colors ${
                  location.pathname === '/' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-primary transition-colors ${
                  location.pathname === '/about' ? 'text-primary font-medium' : 'text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/works" 
                className={`hover:text-primary transition-colors ${
                  location.pathname === '/works' ? 'text-primary font-medium' : 'text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Works
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6 font-semibold w-full"
                >
                  Contact Us
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
