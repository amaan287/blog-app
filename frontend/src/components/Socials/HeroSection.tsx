import { DialogDemo } from "./Dialog";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-screen bg-card text-center p-6">
      <h1 className="text-4xl font-bold text-gray-200 mb-4">
        Get in Touch with Us!
      </h1>
      <p className="text-lg text-gray-100 max-w-lg mb-6">
        We're here to help with any questions, suggestions, or concerns. Connect
        with us on WhatsApp for quick and efficient support. Our team is ready
        to assist you!
      </p>
      <DialogDemo />
    </div>
  );
}
