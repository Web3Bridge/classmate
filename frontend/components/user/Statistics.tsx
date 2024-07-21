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
import { useAccount } from "wagmi";
import useGetStudentName from "@/hooks/studentHooks/useGetStudentName";
import useRequestNameCorrection from "@/hooks/nameEditingHooks/useRequestNameCorrection";

interface Statistic {
  title: string;
  value: string;
}

const statistics: Statistic[] = [
  { title: "Total classes", value: "25/100" },
  { title: "Overall classes attended", value: "15/100" },
  { title: "Class Percentage", value: "0.00%" },
  { title: "Average Score", value: "NaN" },
  { title: "Total Score", value: "NaN" },
  { title: "Students rating", value: "NaN" },
];

const Statistics = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { address, isConnected } = useAccount();
  const studentName = useGetStudentName(address);

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

          <section className="mt-3 grid md:grid-cols-2 gap-2">
            <Card className=" bg-color2 text-gray-100 border-none">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card className=" bg-color2 text-gray-100 border-none">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
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
