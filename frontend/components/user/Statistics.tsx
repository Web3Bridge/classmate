import { BellIcon, SearchCheckIcon, SearchIcon } from "lucide-react";
import { BiNotification } from "react-icons/bi";

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
      <section className="w-full grid grid-cols-2 md:grid-cols-3 gap-3">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="w-full h-20 bg-color2 rounded-md text-white text-center p-2"
          >
            {stat.title}
            <h1>{stat.value}</h1>
          </div>
        ))}
      </section>
    </>
  );
};

export default Statistics;
