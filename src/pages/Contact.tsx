import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="pt-20 flex-1">
        <div className="container mx-auto px-4 pt-4">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home Page
            </Button>
          </Link>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;