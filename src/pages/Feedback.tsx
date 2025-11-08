import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedbackForm from "@/components/FeedbackForm";
import { Star, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { getFeedbacks, type Feedback } from "@/lib/supabaseFeedbackStore";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Feedback = () => {
  const [allFeedbacks, setAllFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const loadFeedbacks = async () => {
      const feedbackData = await getFeedbacks();
      setAllFeedbacks(feedbackData);
    };
    loadFeedbacks();
  }, []);

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
        <FeedbackForm />
        
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                All <span className="text-primary">Feedback</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {allFeedbacks.map((feedbackItem) => (
                <div 
                  key={feedbackItem.id}
                  className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(feedbackItem.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    {feedbackItem.pinned && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Pinned
                      </span>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 italic">"{feedbackItem.feedback}"</p>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{feedbackItem.name}</p>
                    <p className="text-sm text-muted-foreground">{feedbackItem.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Feedback;