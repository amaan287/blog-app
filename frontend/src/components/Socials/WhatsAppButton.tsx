import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = `+919784404469`;
  const message = `Hello, I am interested in your services. Please provide me with more details.`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const openWhatsApp = () => {
    window.open(url, "_blank");
  };
  return (
    <Button className="flex gap-2" onClick={openWhatsApp}>
      <span>
        <FaWhatsapp className="size-6" />
      </span>
      Chat on whatsapp
    </Button>
  );
}
