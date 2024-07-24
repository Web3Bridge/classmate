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

interface Statistic {
  title: any;
  value: any;
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
    },
    {
      title: "classes attended",
      value: attendanceRatio.attendanceRatio.attendance,
    },
    {
      title: "Class Percentage",
      value: `${
        (attendanceRatio.attendanceRatio.attendance /
          attendanceRatio.attendanceRatio.totalClasses) *
        100
      }%`,
    },
    { title: "Average Score", value: "NaN" },
    { title: "Total Score", value: "NaN" },
    { title: "Students rating", value: "NaN" },
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
                className="w-full h-20 bg-color2 rounded-md text-white text-center p-2"
              >
                {stat.title}
                <h1>{stat.value}</h1>
              </div>
            ))}
          </div>
          <section className="">
            {isLoading ? (
              <div className="w-full h-[250px] flex justify-center items-center">
                <h1 className="text-center md:text-2xl text-lg text-color1 font-bold">
                  Fetching created attendance...
                </h1>
              </div>
            ) : isLoading === false && signedAttendanceImages?.length === 0 ? (
              <div className="w-full h-[250px] flex justify-center items-center">
                <h1 className="text-center md:text-2xl text-lg text-color1 font-bold">
                  No attendance created yet
                </h1>
              </div>
            ) : (
              <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 md:gap-8 mt-3 gap-6">
                {signedAttendanceImages?.slice(0, 3).map((list, index) => (
                  <>
                    <Link href="/user/attendance" key={index}>
                      <Card
                        key={index}
                        className="bg-color2 text-gray-100 border-none"
                      >
                        <CardHeader>
                          <CardTitle> Mentor: {list.mentorName}</CardTitle>
                          <h1>Topic: {list.topic}</h1>
                          <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>
                          <img
                            src={list.imageURI}
                            alt="NFT Image"
                            className="w-full h-[200px] object-cover"
                          />
                          Lecture ID: {list.lectureId}
                        </CardContent>
                      </Card>
                    </Link>
                  </>
                ))}
              </section>
            )}
          </section>
        </main>
        <aside className="w-full p-6 bg-white rounded-md">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border "
          />
        </aside>
      </section>
    </>
  );
};

export default Statistics;
