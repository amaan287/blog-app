import { DockD } from "@/components/Dock";
import InstagramVideo from "@/components/Socials/InstagramVideo";
import HeroSection from "@/components/Socials/HeroSection";
import YoutubeVideo from "@/components/YoutubeVideo";
import { Button } from "flowbite-react";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Socials() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <div className="min-h-screen bg-card text-white mx-2">
      <ScrollToTop />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="space-y-32">
          <HeroSection />

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-16">
            <div className="md:w-1/2 space-y-8">
              <p className="text-gray-300 text-lg">
                Stay inspired, stay connected. Join us on our journey!
              </p>
            </div>

            <div className="md:w-1/2 flex flex-col space-y-8">
              <YoutubeVideo />
              <div className="space-y-4 flex flex-col">
                <p className="text-lg text-gray-400">
                  Dive into a world of exclusive content and opportunities.
                </p>
                <div className="space-y-2">
                  <Link
                    target="_blank"
                    to="https://youtube.com/@priyanshsoniii?si=OXBF5MiwhwwYqWLA"
                  >
                    <Button className="w-full md:w-auto bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-transform duration-300">
                      Subscribe Now
                    </Button>
                  </Link>
                  <p className="text-sm text-gray-500">
                    Join our growing community on YouTube.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 pb-20 gap-2">
            <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400">
              What about Instagram?
            </h2>
            <div className="bg-card border p-8 rounded-lg shadow-lg">
              <InstagramVideo />
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                to="https://www.instagram.com/priyanshsoniii/"
                target="_blank"
              ></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full ">
        <DockD />
      </div>
    </div>
  );
}
