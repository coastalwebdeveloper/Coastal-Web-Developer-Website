import Footer from "@/components/Footer";
import AdminLogin from "@/components/AdminLogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Pin, PinOff, LogOut, Plus, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { getFeedbacks, toggleFeedbackPin, deleteFeedback, type Feedback } from "@/lib/feedbackStore";
import { getWorks, addWork, removeWork, uploadWorkImage, type Work } from "@/lib/supabaseWorksStore";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [works, setWorks] = useState<Work[]>([]);
  const [showAddWork, setShowAddWork] = useState(false);
  const [newWork, setNewWork] = useState({
    title: '',
    description: '',
    image_url: '/placeholder.svg',
    tech: '',
    live_url: '',
    github_url: ''
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState<'feedback' | 'works'>('feedback');

  useEffect(() => {
    if (isLoggedIn) {
      setFeedbacks(getFeedbacks());
      loadWorks();
    }
  }, [isLoggedIn]);

  const loadWorks = async () => {
    setLoading(true);
    const worksData = await getWorks();
    setWorks(worksData);
    setLoading(false);
  };

  const togglePin = (id: number) => {
    toggleFeedbackPin(id);
    setFeedbacks(getFeedbacks());
  };

  const handleDeleteFeedback = (id: number) => {
    deleteFeedback(id);
    setFeedbacks(getFeedbacks());
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleAddWork = async () => {
    if (newWork.title && newWork.description) {
      setLoading(true);
      
      let imageUrl = '/placeholder.svg';
      if (selectedImage) {
        const uploadedUrl = await uploadWorkImage(selectedImage);
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
        }
      }
      
      const success = await addWork({
        ...newWork,
        image_url: imageUrl,
        tech: newWork.tech.split(',').map(t => t.trim())
      });
      
      if (success) {
        await loadWorks();
        setNewWork({ title: '', description: '', image_url: '/placeholder.svg', tech: '', live_url: '', github_url: '' });
        setSelectedImage(null);
        setShowAddWork(false);
      }
      setLoading(false);
    }
  };

  const handleRemoveWork = async (id: number) => {
    setLoading(true);
    const success = await removeWork(id);
    if (success) {
      await loadWorks();
    }
    setLoading(false);
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1">
        <section className="pt-8 pb-20">
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
                Manage feedback and portfolio works
              </p>
              
              <div className="flex justify-center gap-4 mt-8">
                <Button 
                  variant={activeSection === 'feedback' ? 'default' : 'outline'}
                  onClick={() => setActiveSection('feedback')}
                >
                  Manage Feedback
                </Button>
                <Button 
                  variant={activeSection === 'works' ? 'default' : 'outline'}
                  onClick={() => setActiveSection('works')}
                >
                  Manage Demo Websites
                </Button>
              </div>
            </div>

            <div className="max-w-6xl mx-auto space-y-12">
              {/* Feedback Management */}
              {activeSection === 'feedback' && (
              <div>
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

                        <div className="flex gap-2">
                          <Button
                            variant={feedback.pinned ? "default" : "outline"}
                            size="sm"
                            onClick={() => togglePin(feedback.id)}
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
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteFeedback(feedback.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              )}

              {/* Works Management */}
              {activeSection === 'works' && (
              <div>
                <div className="bg-muted/50 p-6 rounded-lg mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Works Management</h3>
                    <Button onClick={() => setShowAddWork(!showAddWork)}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Work
                    </Button>
                  </div>
                  <p className="text-muted-foreground">
                    Add or remove portfolio works displayed on the Our Works page.
                  </p>
                </div>

                {showAddWork && (
                  <div className="bg-background border rounded-lg p-6 mb-6">
                    <h4 className="font-semibold mb-4">Add New Work</h4>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Project Image</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-primary transition-colors">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setSelectedImage(e.target.files?.[0] || null)}
                          className="hidden"
                          id="file-upload"
                        />
                        <label 
                          htmlFor="file-upload" 
                          className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                          Choose File
                        </label>
                        <p className="text-sm text-gray-500 mt-2">
                          {selectedImage ? selectedImage.name : 'No file selected'}
                        </p>
                      </div>
                      {selectedImage && (
                        <div className="mt-2">
                          <img 
                            src={URL.createObjectURL(selectedImage)} 
                            alt="Preview" 
                            className="w-full h-48 object-cover rounded border"
                          />
                        </div>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Project Title"
                        value={newWork.title}
                        onChange={(e) => setNewWork({...newWork, title: e.target.value})}
                      />
                      <Input
                        placeholder="Technologies (comma separated)"
                        value={newWork.tech}
                        onChange={(e) => setNewWork({...newWork, tech: e.target.value})}
                      />
                      <Input
                        placeholder="Live URL"
                        value={newWork.live_url}
                        onChange={(e) => setNewWork({...newWork, live_url: e.target.value})}
                      />
                      <Input
                        placeholder="GitHub URL"
                        value={newWork.github_url}
                        onChange={(e) => setNewWork({...newWork, github_url: e.target.value})}
                      />
                    </div>
                    <Textarea
                      placeholder="Project Description"
                      value={newWork.description}
                      onChange={(e) => setNewWork({...newWork, description: e.target.value})}
                      className="mt-4"
                    />
                    <div className="flex gap-2 mt-4">
                      <Button onClick={handleAddWork} disabled={loading}>
                        {loading ? 'Adding...' : 'Add Work'}
                      </Button>
                      <Button variant="outline" onClick={() => setShowAddWork(false)}>Cancel</Button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {works.map((work) => (
                    <div key={work.id} className="bg-background border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{work.title}</h4>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRemoveWork(work.id)}
                          disabled={loading}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="mb-2">
                        <img 
                          src={work.image_url} 
                          alt={work.title}
                          className="w-full h-48 object-cover rounded border"
                        />
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">{work.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {work.tech.map((tech, i) => (
                          <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;