import { BellIcon, SearchCheckIcon, SearchIcon } from "lucide-react";
import { BiNotification } from "react-icons/bi";

const Statistics = () => {
  return (
    <>
      <section className="flex justify-between mb-6">
        <div>
          <h1 className="text-xl">Welcome back, Linda</h1>
          <p className="capitalize text-sm">welcome to classmate+ dashboard</p>
        </div>
        <div className="flex justify-center my-auto align-middle gap-1 cursor-pointer text-color1 hover:text-color2">
          <SearchIcon />
          <BellIcon />
        </div>
      </section>
      <section>
        <h1 className="mb-2">Overview</h1>
      </section>
      <section className="w-full grid grid-cols-4 gap-3">
        <div className="w-full h-20 bg-color1 rounded-md text-white">1</div>
        <div className="w-full h-20 bg-color1 rounded-md text-white">2</div>
        <div className="w-full h-20 bg-color1 rounded-md text-white">3</div>
        <div className="w-full h-20 bg-color1 rounded-md text-white">4</div>
      </section>
    </>
  );
};

export default Statistics;
