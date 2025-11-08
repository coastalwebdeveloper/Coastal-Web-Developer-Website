import { Star, Users, CheckCircle } from "lucide-react";

const Stats = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-12 h-12 text-primary fill-primary" />
            </div>
            <h3 className="text-4xl font-bold text-foreground mb-2">4.9/5</h3>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-center mb-4">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-foreground mb-2">500+</h3>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-foreground mb-2">1000+</h3>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;