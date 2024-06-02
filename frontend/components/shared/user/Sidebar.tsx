"use client";
import { useCallback, useEffect, useRef } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiFundsLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { GrServices } from "react-icons/gr";
import { BiMoneyWithdraw } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sideLinks } from "@/utils/Sidebar";
import { MdAssignment, MdEventSeat } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";

const SideBar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const pathname = usePathname();

  const handleCloseSideBar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const toggleScroll = () => {
      document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    };
    toggleScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  const renderIcons = useCallback((element: number) => {
    switch (element) {
      case 0:
        return <RxDashboard />;
      case 1:
        return <GrServices />;
      case 2:
        return <RiFundsLine />;
      case 3:
        return <BiMoneyWithdraw />;
      case 4:
        return <MdAssignment />;
      case 5:
        return <MdEventSeat />;
      case 6:
        return <FiSettings />;
      default:
        return "";
    }
  }, []);

  return (
    <aside
      ref={sidebar}
      className={`absolute font-barlow left-0 top-0 z-[9999] flex h-screen w-72 flex-col overflow-y-hidden bg-color2 duration-300 ease-linear lg:static lg:translate-x-0 lg:rounded-lg ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex flex-col gap-2 font-barlow px-6 py-8 lg:py-6.5">
        <div className="flex items-center justify-between gap-2  ">
          <div className="w-full gap-1.5 mt-8">
            <div className="w-[30%] overflow-hidden rounded-lg mx-auto mb-2">
              <Image
                src={`https://github.com/shadcn.png`}
                alt="avatar"
                className="w-full h-full object-cover "
                width={400}
                height={400}
              />
            </div>
            <h3 className="text-gray-400 text-base ml-2 font-barlow my-auto text-center">
              Linda
            </h3>
          </div>

          <button
            ref={trigger}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            className="block lg:hidden text-white"
          >
            <IoIosArrowRoundBack className="text-2xl" />
          </button>
        </div>
        {/* <h1 className="text-sm md:text-sm text-gray-200 uppercase">
          Welcome Back
        </h1> */}
      </div>

      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-3 pb-4 px-4 lg:mt-3 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="font-barlow flex flex-col gap-1.5">
              {/* <!-- Menu Item Calendar --> */}
              {sideLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 text-gray-300 duration-300 ease-in-out before:absolute before:left-0 before:top-0 before:w-0.5 before:transition-all before:duration-200  before:bg-color1 hover:before:h-full ${
                      pathname === link.href ? "before:h-full" : "before:h-0"
                    }`}
                    onClick={handleCloseSideBar}
                  >
                    {renderIcons(index)}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- Sidebar Footer --> */}
          <div className="w-full  text-white flex justify-center gap-1.5 mt-8">
            <div className="flex items-center space-x-2">
              <LuLogOut />
              <h1 className="">Log out</h1>
            </div>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default SideBar;
