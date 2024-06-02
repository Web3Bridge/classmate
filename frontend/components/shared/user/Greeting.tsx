"use client";
import { useEffect, useState } from "react";

const Greeting = () => {
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setTimeOfDay("morning 🌞");
    } else if (hour >= 12 && hour < 15) {
      setTimeOfDay("afternoon ☀️");
    } else if (hour >= 15 && hour <= 20) {
      setTimeOfDay("evening ⛅");
    } else {
      setTimeOfDay("night 🌃");
    }
  }, []);

  return (
    <h2 className="text-color2 text-xl font-belanosima capitalize">
      Classmate +
    </h2>
  );
};

export default Greeting;
