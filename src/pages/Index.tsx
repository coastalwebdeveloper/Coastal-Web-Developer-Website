import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AffordableExcellence from "@/components/AffordableExcellence";
import OurServices from "@/components/OurServices";
import DesignTools from "@/components/DesignTools";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <Hero />
      <Stats />
      <AffordableExcellence />
      <OurServices />
      <DesignTools />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
