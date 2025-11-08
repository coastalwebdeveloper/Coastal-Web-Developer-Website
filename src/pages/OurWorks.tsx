import Header from "@/components/Header";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const OurWorks = () => {
  const projects = [
    {
      title: "E-commerce Store",
      description: "Modern online store with payment integration",
      image: "/placeholder.svg",
      tech: ["React", "Node.js", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Restaurant Website",
      description: "Beautiful restaurant site with online ordering",
      image: "/placeholder.svg",
      tech: ["React", "Tailwind", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Business Portfolio",
      description: "Professional portfolio for consulting firm",
      image: "/placeholder.svg",
      tech: ["React", "TypeScript", "Framer"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard for SaaS platform",
      image: "/placeholder.svg",
      tech: ["React", "Chart.js", "API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real Estate Site",
      description: "Property listing website with search",
      image: "/placeholder.svg",
      tech: ["React", "Maps API", "Database"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Blog Platform",
      description: "Content management system for bloggers",
      image: "/placeholder.svg",
      tech: ["React", "CMS", "SEO"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Our <span className="text-primary">Works</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in">
                Explore our portfolio of successful projects and see how we've helped businesses grow online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-muted/50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Site
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurWorks;