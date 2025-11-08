import { Code, Smartphone, Palette, Search, Zap, Building } from "lucide-react";

const OurServices = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Tailored frontend websites built from scratch for small businesses"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first designs that look perfect on all devices and screen sizes"
    },
    {
      icon: Building,
      title: "Small Business Websites",
      description: "Professional websites designed specifically for small business needs"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly interfaces that enhance user experience"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimization to help your website rank higher on Google"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed and performance"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We specialize in creating professional frontend websites for small businesses to establish their online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;