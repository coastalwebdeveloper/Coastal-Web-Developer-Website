import Header from "@/components/Header";
import AdminLogin from "@/components/AdminLogin";
import { Button } from "@/components/ui/button";
import { Star, Pin, PinOff, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { getFeedbacks, toggleFeedbackPin, type Feedback } from "@/lib/feedbackStore";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    if (isLoggedIn) {
      setFeedbacks(getFeedbacks());
    }
  }, [isLoggedIn]);

  const togglePin = (id: number) => {
    toggleFeedbackPin(id);
    setFeedbacks(getFeedbacks());
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Admin <span className="text-primary">Panel</span>
                </h1>
                <Button variant="outline" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
              <p className="text-lg text-muted-foreground">
                Manage feedback visibility and pinning
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Feedback Management</h3>
                <p className="text-muted-foreground">
                  Pin feedback to show on homepage. Only top 5 pinned feedback will be displayed.
                </p>
              </div>

              <div className="space-y-4">
                {feedbacks.map((feedback) => (
                  <div 
                    key={feedback.id}
                    className="bg-background border rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="flex">
                            {[...Array(feedback.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <span className="font-semibold">{feedback.name}</span>
                          <span className="text-sm text-muted-foreground">{feedback.date}</span>
                        </div>
                        
                        <p className="text-muted-foreground italic mb-4">"{feedback.feedback}"</p>
                      </div>

                      <Button
                        variant={feedback.pinned ? "default" : "outline"}
                        size="sm"
                        onClick={() => togglePin(feedback.id)}
                        className="ml-4"
                      >
                        {feedback.pinned ? (
                          <>
                            <PinOff className="w-4 h-4 mr-2" />
                            Unpin
                          </>
                        ) : (
                          <>
                            <Pin className="w-4 h-4 mr-2" />
                            Pin
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;