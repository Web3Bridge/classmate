import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { iconsData } from "@/utils/Sidebar";
import { BiLogOut } from "react-icons/bi";

export default function Sidebar() {
  return (
    <Card className="w-[238px] h-[630px] bg-color2 border rounded-2xl text-gray-100">
      <div className="flex flex-col items-center justify-start pt-4">
        <div className="flex mb-8 w-full justify-center items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h1 className="text-xl">Emmanuel</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {iconsData.map((item, index) => (
          <div key={index} className="flex flex-col justify-end mb-8">
            <div className="flex gap-2 justify-center hover:text-color1 cursor-pointer">
              <div>
                <item.icon className="h-[22.21px] w-[22.51px] " />
              </div>
              <div className="h-[24px] w-[93px] whitespace-nowrap  text-ellipsis ">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border border-gray-400 w-full mb-5"></div>
      <div className="flex gap-2 justify-center mt-12 hover:text-color1 cursor-pointer">
        <div>
          <BiLogOut className="h-[22.21px] w-[22.51px]" />
        </div>
        <div className="h-[24px] w-[93px] whitespace-nowrap text-ellipsis">
          <h1>Log out</h1>
        </div>
      </div>
    </Card>
  );
}
