import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPinnedFeedbacks, type Feedback } from "@/lib/feedbackStore";

const Testimonials = () => {
  const [pinnedTestimonials, setPinnedTestimonials] = useState<Feedback[]>([]);

  useEffect(() => {
    setPinnedTestimonials(getPinnedFeedbacks());
  }, []);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pinnedTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-primary/30 mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 italic">"{testimonial.feedback}"</p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">Verified Client</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/feedback">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View More Feedback
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;