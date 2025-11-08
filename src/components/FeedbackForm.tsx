import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { useState } from "react";
import { addFeedback } from "@/lib/feedbackStore";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && feedback && rating > 0) {
      addFeedback({ name, email, rating, feedback });
      setSubmitted(true);
      // Reset form
      setName("");
      setEmail("");
      setFeedback("");
      setRating(0);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
            <p className="text-green-700">Your feedback has been submitted successfully.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Share Your <span className="text-primary">Feedback</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in">
            We value your opinion and would love to hear about your experience with us.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name" 
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com" 
              />
            </div>
          </div>

          <div>
            <Label>Rating *</Label>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 cursor-pointer transition-colors ${
                    star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="feedback">Your Feedback *</Label>
            <Textarea 
              id="feedback" 
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell us about your experience..." 
              rows={6}
              required
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-primary hover:bg-primary/90"
          >
            Submit Feedback
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;