import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;