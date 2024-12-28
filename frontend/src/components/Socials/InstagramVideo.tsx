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
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 bg-card p-4 md:p-8">
      {/* Instagram Embed Section */}
      <div className="w-full md:w-1/2">
        <blockquote
          data-instgrm-permalink="https://www.instagram.com/reel/C-C85d5PwbI/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          className="instagram-media bg-gray-800 border border-gray-700 rounded-xl shadow-lg w-full max-w-full aspect-video"
        ></blockquote>
      </div>

      {/* Text and Call-to-Action Section */}
      <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 space-y-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200 text-center md:text-left max-w-3xl">
          Follow us on Instagram for daily inspiration, exclusive updates, and a
          behind-the-scenes look at our journey!
        </h1>
        <Link
          to="https://www.instagram.com/priyanshsoniii/"
          target="_blank"
          className="block"
        >
          <Button className="text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-lg hover:scale-105 transform transition-transform">
            Follow Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
