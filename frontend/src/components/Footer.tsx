import { Footer } from "flowbite-react";
import { Mail } from "lucide-react";
// import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function FooterCom() {
  return (
    <div className="border max-w-screen w-full px-2 py-2 rounded-lg bg-background ">
      <div className="w-full px-2 py-2 max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="grid grid-cols-2 gap-8 mt-4 py-2 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Follow us" className="pb-2 " />
              <Footer.LinkGroup col>
                <Link
                  to="https://www.facebook.com/priyansh.soni.12576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  Facebook
                </Link>

                <Link to={"https://www.instagram.com/priyanshsoniii/"}>
                  Instagram
                </Link>

                <Link
                  to={"https://youtube.com/@priyanshsoniii?si=ixnJZJAczAKWnYgi"}
                >
                  Youtube
                </Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Contact Us" className="pb-2" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjgCQbcxnCJLLJlkzDlbpNPMKMrbCckKbXlVSmKrhDkFnlkhVFTQtSTXdpJSSjxHRdWnWS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mail
                </Footer.Link>
                <Footer.Link
                  href={`https://wa.me/${"+919784404469"}?text=${encodeURIComponent(
                    `Hello, I am interested in your services. Please provide me with more details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="pb-2" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="pb-2 my-2" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="/"
            by="Heritage Strokes"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              target="_blank"
              href="https://www.facebook.com/priyansh.soni.12576"
              icon={BsFacebook}
            />
            <Footer.Icon
              target="_blank"
              href="https://www.instagram.com/priyanshsoniii/"
              icon={BsInstagram}
            />
            <Footer.Icon
              target="_blank"
              href="https://youtube.com/@priyanshsoniii?si=ixnJZJAczAKWnYgi"
              icon={BsYoutube}
            />
            <Footer.Icon
              target="_blank"
              href={`https://wa.me/${"+919784404469"}?text=${encodeURIComponent(
                `Hello, I am interested in your services. Please provide me with more details.`
              )}`}
              icon={BsWhatsapp}
            />
            <Footer.Icon
              target="_blank"
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjgCQbcxnCJLLJlkzDlbpNPMKMrbCckKbXlVSmKrhDkFnlkhVFTQtSTXdpJSSjxHRdWnWS"
              icon={Mail}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
