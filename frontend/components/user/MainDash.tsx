import React from "react";
import Contents from "./Contents";
import Navbar from "../shared/user/Navbar";
import Sidebar from "../shared/user/Sidebar";

export default function MainDash() {
  return (
    <div className=" ">
      <div className="w-[95%] mx-auto">
        <Navbar />
      </div>
      <div className="border border-gray-100 w-full mb-5"></div>
      <div className="w-[95%] mx-auto flex gap-8">
        <Sidebar />
        <Contents />
      </div>
    </div>
  );
}
