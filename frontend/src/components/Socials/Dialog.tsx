import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import WhatsAppButton from "./WhatsAppButton";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Contact Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> Get in Touch with Us!</DialogTitle>
          <DialogDescription>
            We're here to help with any questions, suggestions, or concerns.
            Connect with us on WhatsApp for quick and efficient support. Our
            team is ready to assist you!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <WhatsAppButton />
          <Link
            to={
              "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjgCQbcxnCJLLJlkzDlbpNPMKMrbCckKbXlVSmKrhDkFnlkhVFTQtSTXdpJSSjxHRdWnWS"
            }
            target="_blank"
            className="w-full md:w-auto"
          >
            <Button className="flex w-full gap-2">
              <span>
                <Mail />
              </span>
              Mail us
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
