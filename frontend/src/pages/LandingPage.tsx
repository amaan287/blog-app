import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BlurFade from "@/components/magicui/blur-fade";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
export default function LandingPage() {
  const { currentUser } = useSelector((state: RootState) => state.user);
  return (
    <div className="w-screen h-screen bg-background">
      <div className="w-full h-full bg-[url('../../images/landing.jpg')] bg-cover bg-center relative z-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-zinc-400 opacity-40 text-black flex flex-col items-center justify-center "></div>
        <div className="z-50 flex flex-col w-[50vw]  items-center  ">
          <div className="flex flex-col items-center mb-40">
            <BlurFade delay={0.5} inView>
              <h1 className="text-slate-900 bg-white bg-opacity-40 px-8 py-4 rounded-xl shadow-lg shadow-gray-700  font-bold text-4xl md:text-5xl">
                Explore the World of Art with{" "}
                <span className="text-indigo-800 italic">Daily Airs</span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <div className=" bg-white  shadow-lg shadow-gray-700 rounded-2xl bg-opacity-40 px-10 py-4 mt-2 flex flex-col">
                <BlurFade delay={0.5} inView>
                  <p className="md:text-xl text-lg font-semibold text-slate-900">
                    <span className="font-semibold">
                      Your Daily Source for Artistic Inspiration.
                    </span>
                    From{" "}
                    <span className="text-indigo-800 font-bold">Plein Air</span>
                    {" to "}
                    <span className="text-orange-800 font-bold">Portraits</span>
                    {"."}
                  </p>
                </BlurFade>
                <BlurFade delay={0.75} inView>
                  <Link
                    to={currentUser ? "/home" : "/sign-up"}
                    className="w-full"
                  >
                    <Button className=" w-full text-gray-100 bg-gradient-to-r from-blue-800  to-orange-900 font-semibold mt-2 hover:bg-gradient-to-r hover:from-blue-700 hover:to-orange-800 hover:text-white transition-all ">
                      Explore more
                    </Button>
                  </Link>
                </BlurFade>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
