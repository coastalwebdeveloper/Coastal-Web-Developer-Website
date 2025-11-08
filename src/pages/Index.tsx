import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AffordableExcellence from "@/components/AffordableExcellence";
import OurServices from "@/components/OurServices";
import DesignTools from "@/components/DesignTools";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <AffordableExcellence />
      <OurServices />
      <DesignTools />
      <Testimonials />
    </div>
  );
};

export default Index;
