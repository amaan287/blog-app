import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default function InstagramVideo() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row md:gap-6 gap-4 justify-between min-h-screen bg-card p-4">
      {/* Instagram Embed Section */}
      <div className="w-full md:w-1/2 max-w-xl mx-auto md:mx-0">
        <blockquote
          data-instgrm-permalink="https://www.instagram.com/reel/C-C85d5PwbI/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          className="instagram-media bg-gray-800 border border-gray-700 rounded-xl shadow-lg max-w-full p-0 transition-transform hover:scale-105 duration-300"
        >
          <div className="p-6">
            <a
              href="https://www.instagram.com/reel/C-C85d5PwbI/?utm_source=ig_embed&amp;utm_campaign=loading"
              className="block space-y-4 no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gray-600 rounded-full h-12 w-12 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="bg-gray-600 rounded-full h-4 w-28 animate-pulse"></div>
                  <div className="bg-gray-600 rounded-full h-4 w-20 animate-pulse"></div>
                </div>
              </div>

              <div className="aspect-video bg-gray-700 rounded-lg"></div>

              <div className="flex flex-col items-center space-y-4">
                <div className="h-12 w-12 bg-gray-600 rounded-full animate-pulse"></div>
                <span className="text-blue-400 font-semibold text-lg hover:text-blue-300 transition-colors">
                  View this post on Instagram
                </span>
              </div>
            </a>

            <div className="mt-4 text-center border-t border-gray-700 pt-4">
              <a
                href="https://www.instagram.com/reel/C-C85d5PwbI/?utm_source=ig_embed&amp;utm_campaign=loading"
                className="text-gray-400 text-sm hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                A post shared by Priyansh soni 🎨 | Artist (@priyanshsoniii)
              </a>
            </div>
          </div>
        </blockquote>
      </div>

      {/* Text and Call-to-Action Section */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 text-center max-w-3xl mb-6">
          Follow us on Instagram for daily inspiration, exclusive updates, and a
          behind-the-scenes look at our journey!
        </h1>
        <Link
          to="https://www.instagram.com/priyanshsoniii/"
          target="_blank"
          className="flex items-center"
        >
          <Button className="text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-lg">
            Follow Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
