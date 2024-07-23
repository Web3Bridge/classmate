"use client";
import { useCallback, useEffect, useRef } from "react";
import { IoIosArrowRoundBack, IoIosLogOut } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { GrCertificate } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  MdAssignment,
  MdEventSeat,
  MdRecentActors,
  MdUploadFile,
} from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { sideLinksAd } from "@/utils/SidebarAD";
import { PiStudentLight } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import useGetMentorName from "@/hooks/adminHooks/useGetMentorName";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { GiGiftOfKnowledge } from "react-icons/gi";

const SideBar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const { open } = useWeb3Modal();

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
        return <PiStudentLight />;
      case 2:
        return <MdRecentActors />;
      case 3:
        return <MdAssignment />;
      case 4:
        return <MdEventSeat />;
      case 5:
        return <MdUploadFile />;
      case 6:
        return <GrCertificate />;
      case 7:
        return <GiGiftOfKnowledge />
      case 8:
        return <FiSettings />;
      default:
        return "";
    }
  }, []);

  const { address } = useAccount();

  const adminName = useGetMentorName(address);

  return (
    <aside
      ref={sidebar}
      className={`absolute font-barlow left-0 top-0 z-[9999] flex h-screen w-72 flex-col overflow-y-hidden bg-color2 duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex flex-col gap-2 font-barlow px-6 py-8 lg:py-6.5">
        <div className="flex items-start justify-between gap-2  ">
          <Link href={`/dashboard`} className="flex items-end">
            <PiStudentFill className="text-gray-100 md:text-4xl text-3xl" />
            <span className="text-gray-200 md:text-xl font-semibold">
              ClassMate+
            </span>
          </Link>

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
        <h1 className="text-sm ml-2 text-gray-200 uppercase">
          Welcome Back Admin
        </h1>
      </div>

      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-3 pb-4 px-4 lg:mt-3 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="font-barlow flex flex-col gap-1.5">
              {/* <!-- Menu Item Calendar --> */}
              {sideLinksAd.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`group relative capitalize flex items-center gap-2.5 rounded-sm py-2 px-4 text-gray-300 duration-300 ease-in-out before:absolute before:left-0 before:top-0 before:w-0.5 before:transition-all before:duration-200  before:bg-color1 hover:before:h-full ${pathname === link.href ? "before:h-full" : "before:h-0"
                      }`}
                    onClick={handleCloseSideBar}
                  >
                    {renderIcons(index)}
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className="flex items-center gap-2.5 rounded-sm py-2 px-4  text-gray-300 duration-300 ease-in-out"
                  onClick={() => open()}
                >
                  <IoIosLogOut className="text-xl" />
                  Log Out
                </button>
              </li>
            </ul>
          </div>
          {/* <!-- Sidebar Footer --> */}
          <div className="w-full text-white cursor-pointer hover:text-color1 flex flex-col items-start justify-center gap-1.5 mt-8 pl-8">
            <div className="w-[30%] overflow-hidden rounded-lg">
              <Image
                src={`https://github.com/shadcn.png`}
                alt="avatar"
                className="w-full h-full object-cover "
                width={400}
                height={400}
              />
            </div>
            <h3 className="text-gray-400 text-base ml-2 font-barlow my-auto text-center">
              {adminName}
            </h3>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default SideBar;
