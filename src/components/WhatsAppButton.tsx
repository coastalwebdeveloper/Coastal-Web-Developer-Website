import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/your-number"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-success hover:bg-success/90 text-success-foreground w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover-scale animate-scale-in"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
