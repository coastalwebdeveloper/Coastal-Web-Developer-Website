import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="pt-16 sm:pt-20 flex-1">
        <div className="container mx-auto px-4 pt-4">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home Page
            </Button>
          </Link>
        </div>
        <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                About <span className="text-primary">Us</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4">
                We are passionate web developers dedicated to creating exceptional digital experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Our Story</h3>
                <p className="text-muted-foreground mb-6">
                  Coastal Web Developers was founded with a simple mission: to make professional web development 
                  accessible and affordable for businesses of all sizes. We believe every business deserves a 
                  stunning online presence that drives results.
                </p>
                <p className="text-muted-foreground">
                  With years of experience in modern web technologies, we specialize in creating responsive, 
                  fast, and user-friendly websites that help our clients grow their business online.
                </p>
              </div>

              <div className="bg-background p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Affordable pricing without compromising quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Modern, responsive designs that work on all devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Fast turnaround times and reliable support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Custom solutions tailored to your business needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;