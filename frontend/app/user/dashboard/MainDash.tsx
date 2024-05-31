import React from "react";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import Contents from "./Contents";

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
