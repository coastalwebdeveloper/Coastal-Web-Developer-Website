import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="pt-20 flex-1">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;