import { Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RootState } from "../redux/store";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.user);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <div className=" top-0 z-50 ">
      <nav className="border-b-2 mx-2 bg-gray-100 dark:bg-card rounded-xl shadow-xl flex justify-between px-5 py-2 items-center z-50">
        <Link
          to="/"
          className="text-sm sm:text-xl font-semibold flex items-center justify-center gap-2"
        >
          <div className="h-5 w-6 bg-[url('/favicon.ico')] bg-center bg-cover flex-shrink-0" />
          <span className="font-medium text-black dark:text-white whitespace-pre">
            Heritage Strokes
          </span>
        </Link>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <h1 className=" cursor-pointer font-semibold border px-2 py-1 rounded-lg">
                <IoReorderThreeOutline />
              </h1>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="py-4 flex flex-col  w-full">
              <div className="w-full items-center flex justify-center  ">
                {/* <ModeToggle /> */}
              </div>
              <Link to={"/story"} className="">
                <DropdownMenuCheckboxItem className="cursor-pointer">
                  My story
                </DropdownMenuCheckboxItem>
              </Link>
              <Link to={"/socials"}>
                <DropdownMenuCheckboxItem className="cursor-pointer">
                  Socials
                </DropdownMenuCheckboxItem>
              </Link>
              {currentUser ? (
                <Link to={"/"} onClick={handleSignout}>
                  <DropdownMenuCheckboxItem className="cursor-pointer">
                    Signout
                  </DropdownMenuCheckboxItem>
                </Link>
              ) : (
                <div>
                  <Link to={"/sign-in"}>
                    <DropdownMenuCheckboxItem className=" bg-yellow-50 hover:bg-orange-50 text-card cursor-pointer">
                      Login
                    </DropdownMenuCheckboxItem>{" "}
                  </Link>
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="hidden md:flex gap-5 items-center justify-center">
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <h1 className=" cursor-pointer  text-xs md:text-md font-semibold border px-2 py-1 rounded-lg">
            Community
            </h1>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 py-4">
              <Link to={"/story"}>
                <DropdownMenuCheckboxItem>My story</DropdownMenuCheckboxItem>
              </Link>
              <Link to={"/socials"}>
                <DropdownMenuCheckboxItem>Socials</DropdownMenuCheckboxItem>
              </Link>
              <Link to={"/dashboard?tab=profile"}>
                <DropdownMenuCheckboxItem>Join now</DropdownMenuCheckboxItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <ModeToggle />
          <div>
            <Link to={"/socials"}>Socials</Link>
          </div>
          {currentUser ? (
            <div className="flex gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <h1 className="scale-75 md:scale-100 cursor-pointer">
                    <Avatar
                      alt="user"
                      // size={icons}
                      img={currentUser?.profilePicture}
                      rounded
                    />
                  </h1>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>
                    <span className="block text-sm">
                      @{currentUser?.username}
                    </span>
                    <span className="block text-sm font-medium truncate">
                      {currentUser?.email}
                    </span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {currentUser.isAdmin && (
                    <Link to={"/dashboard?tab=profile"}>
                      <DropdownMenuCheckboxItem>
                        Profile
                      </DropdownMenuCheckboxItem>
                    </Link>
                  )}
                  <DropdownMenuCheckboxItem onClick={handleSignout}>
                    Signout
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div>
              <Link to={"/sign-in"}>
                <Button className="text-gray-700 bg-gradient-to-r from-yellow-50 to-orange-50 hover:shadow-md hover:shadow-yellow-50 hover:bg-yellow-50 transition-all font-medium ">
                  Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
