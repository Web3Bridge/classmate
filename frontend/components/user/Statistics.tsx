"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useGetStudentName from "@/hooks/studentHooks/useGetStudentName";
import useRequestNameCorrection from "@/hooks/nameEditingHooks/useRequestNameCorrection";
import useGetAttendanceRatio from "@/hooks/studentHooks/useGetAttendanceRatio";
import useGetLectureData from "@/hooks/adminHooks/useGetLectureData";
import useGetSignedAttendanceImages from "@/hooks/studentHooks/useGetSignedAttendanceImages";
import { useAccount } from "wagmi";
import Link from "next/link";
import { FaChartLine, FaFileSignature } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { GiPieChart } from "react-icons/gi";
import { TbAlarmAverage, TbArrowRotaryLastLeft } from "react-icons/tb";
import { RiChatSettingsFill } from "react-icons/ri";

interface Statistic {
  title: any;
  value: any;
  icon?: any;
}

const Statistics = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { address, isConnected } = useAccount();
  const studentName = useGetStudentName(address);
  const attendanceRatio = useGetAttendanceRatio(address);

  const { lectureInfo } = useGetLectureData();

  const { signedAttendanceImages, isLoading } =
    useGetSignedAttendanceImages(address);

  const statistics: Statistic[] = [
    {
      title: "Total Classes",
      value: attendanceRatio.attendanceRatio.totalClasses,
      icon: <SiGoogleclassroom />,
    },
    {
      title: "Class attended",
      value: attendanceRatio.attendanceRatio.attendance,
      icon: <FaFileSignature />,
    },
    {
      title: "Class Percentage",
      value: `${
        (attendanceRatio.attendanceRatio.attendance /
          attendanceRatio.attendanceRatio.totalClasses) *
        100
      }%`,
      icon: <GiPieChart />,
    },
    { title: "Average Score", value: "NaN", icon: <TbAlarmAverage /> },
    { title: "Total Score", value: "NaN", icon: <TbArrowRotaryLastLeft /> },
    { title: "Students rating", value: "NaN", icon: <FaChartLine /> },
  ];

  const {
    requestNameCorrection,
    isWriting: isWritingtoStudents,
    isConfirming: isConfirmingtoStudents,
  } = useRequestNameCorrection();

  const handleRequestNameChange = () => {
    requestNameCorrection();
  };

  return (
    <>
      <section className="flex justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold">Welcome back, {studentName}</h1>
          <p className="capitalize text-xs">welcome to classmate+ dashboard</p>
        </div>
        <div className="flex justify-center my-auto align-middle gap-1 cursor-pointer text-color1">
          <button
            className="bg-color2 px-3 py-2 rounded-md text-white capitalize hover:bg-color1 transition-all ease-in-out"
            onClick={handleRequestNameChange}
          >
            request name change
          </button>
        </div>
      </section>
      <section>
        <h1 className="mb-2">Overview</h1>
      </section>
      <section className="w-full grid md:grid-cols-3 gap-8 ">
        <main className="w-full md:col-span-2">
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 ">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="w-full h-20 hover:border hover:border-color2 transition-all ease-in-out shadow-md bg-white/95 rounded-md  px-3 p-2"
              >
                <h1 className="">{stat.title}</h1>

                <div className="flex justify-between pt-2 font-semibold text-xl">
                  <div>
                    <h1>{stat.value}</h1>
                  </div>
                  <div className="border border-color2 rounded-full w-8 h-8 flex justify-center items-center align-middle">
                    {stat.icon}{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <section className="">
            {isLoading ? (
              <div className="w-full h-[250px] flex justify-center items-center">
                <h1 className="text-center md:text-2xl text-lg text-color1 font-bold">
                  Fetching signed attendance...
                </h1>
              </div>
            ) : isLoading === false && signedAttendanceImages?.length === 0 ? (
              <div className="w-full h-[250px] flex justify-center items-center">
                <h1 className="text-center md:text-2xl text-lg text-color1 font-bold">
                  No attendance signed yet
                </h1>
              </div>
            ) : (
              <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 md:gap-4 mt-3 gap-6">
                {signedAttendanceImages?.slice(0, 3).map((list, index) => (
                  <>
                    <Link href="/user/attendance" key={index}>
                      <Card
                        key={index}
                        className="bg-white/95 hover:border hover:border-color2 transition-all ease-in-out shadow-md rounded-md"
                      >
                        <CardHeader>
                          <h1>{list.topic}</h1>
                          <h3>{list.mentorName}</h3>
                        </CardHeader>
                        <CardContent>
                          <img
                            src={list.imageURI}
                            alt="NFT Image"
                            className="w-full h-40 object-cover rounded-md"
                          />
                          <h1 className="mt-2">Lecture ID: {list.lectureId}</h1>
                        </CardContent>
                      </Card>
                    </Link>
                  </>
                ))}
              </section>
            )}
          </section>
        </main>
        <aside className="w-full p-6 bg-white rounded-md  h-[350px] shadow-lg">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border h-full"
          />
        </aside>
      </section>
    </>
  );
};

export default Statistics;
