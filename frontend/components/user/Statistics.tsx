"use client";
import { BellIcon, SearchCheckIcon, SearchIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

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

  return (
    <>
      <section className="flex justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold">Welcome back, Linda</h1>
          <p className="capitalize text-xs">welcome to classmate+ dashboard</p>
        </div>
        <div className="flex justify-center my-auto align-middle gap-1 cursor-pointer text-color1">
          <SearchIcon className=" hover:text-color2" />
          <BellIcon className=" hover:text-color2" />
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

          <section>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              ex veritatis dolore magni perspiciatis voluptate quam, reiciendis
              porro velit! Possimus ipsa incidunt eveniet nostrum soluta saepe
              distinctio blanditiis, temporibus laudantium.
            </p> */}
          </section>
        </main>
        <aside className="w-full p-6 bg-gray-100/30">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </aside>
      </section>
    </>
  );
};

export default Statistics;
