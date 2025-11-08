import { Award, DollarSign, Clock, Shield } from "lucide-react";

const AffordableExcellence = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Affordable <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We believe quality web development shouldn't break the bank. Get premium services at prices that work for your budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-muted-foreground">Professional-grade websites with attention to every detail</p>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Budget-Friendly</h3>
            <p className="text-muted-foreground">Competitive pricing without compromising on quality</p>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">Quick turnaround times to get your project live faster</p>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Reliable Support</h3>
            <p className="text-muted-foreground">Ongoing maintenance and support for peace of mind</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffordableExcellence;