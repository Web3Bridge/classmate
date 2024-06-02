"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SiStreamrunners } from "react-icons/si";
import Greeting from "./Greeting";

const Header = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <header className="sticky top-0 z-[999] flex w-full bg-white lg:rounded-lg overflow-hidden drop-shadow-1">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow md:px-2 2xl:px-11 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-gradient-to-l before:from-color1 before:to-color2">
        <div className="flex items-center gap-3 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-[9999] block rounded-sm border border-emerald-400 bg-transparent p-1.5 shadow-sm lg:hidden"
          >
            <span className="relative block h-5 w-5 cursor-pointer">
              <span className="block absolute right-0 h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-emerald-400 delay-[0] duration-200 ease-in-out ${
                    !sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-emerald-400 delay-150 duration-200 ease-in-out ${
                    !sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-emerald-400 delay-200 duration-200 ease-in-out ${
                    !sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-emerald-400 delay-300 duration-200 ease-in-out ${
                    !sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-emerald-400 duration-200 ease-in-out ${
                    !sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link
            href="/user"
            className="flex flex-shrink-0 lg:hidden items-center bg-gradient-to-r from-sky-400 to-emerald-400 text-transparent bg-clip-text gap-1"
          >
            <SiStreamrunners className="md:text-4xl text-3xl text-sky-400" />
            <span className=" font-belanosima md:text-xl text-lg">
              Classmate+
            </span>
          </Link>
        </div>

        <div className="hidden sm:block">
          <Greeting />
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          {/* <!-- User Area --> */}
          <Button className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-center items-center gap-1 bg-color1 hover:bg-color2">
            Connect
          </Button>
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
