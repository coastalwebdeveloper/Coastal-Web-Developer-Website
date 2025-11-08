import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="pt-20 flex-1">
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-primary">Us</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                We are passionate web developers dedicated to creating exceptional digital experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Our Story</h3>
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

              <div className="bg-background p-8 rounded-lg shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Why Choose Us?</h3>
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