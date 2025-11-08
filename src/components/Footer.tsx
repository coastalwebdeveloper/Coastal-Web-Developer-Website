import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/CWD_logo.png" 
                alt="Coastal Web Developers" 
                className="h-8 w-auto bg-white p-1 rounded"
              />
              <div className="text-lg font-bold">
                <span className="text-white">Coastal</span>
                <span className="text-primary">WebDevelopers</span>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Professional web development services at affordable prices. 
              Creating stunning websites that drive results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-gray-300 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-gray-300 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/works" className="block text-sm text-gray-300 hover:text-primary transition-colors">
                Our Works
              </Link>
              <Link to="/contact" className="block text-sm text-gray-300 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Ready to start your project?</p>
              <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors">
                Contact us today
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © 2024 Coastal Web Developers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;