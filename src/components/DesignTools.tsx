const DesignTools = () => {
  const tools = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Vite", logo: "https://vitejs.dev/logo.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Technologies <span className="text-primary">I Use</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            I use modern web technologies and frameworks to build fast, responsive, and scalable websites.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg p-2">
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm font-medium text-foreground">{tool.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Using cutting-edge technologies ensures your website is fast, secure, and built with modern web standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignTools;