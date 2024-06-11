import { useEffect, useState } from "react";

function DigiClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      let hours = date.getHours();
      let minutes = String(date.getMinutes()).padStart(2, "0");
      let seconds = String(date.getSeconds()).padStart(2, "0");

      hours = hours % 24;
      hours = hours ? hours : 24;
      hours = String(hours).padStart(2, "0");

      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-slate-600 p-10 rounded-xl">
      <p className=" text-5xl text-white">{time}</p>
    </div>
  );
}

export default DigiClock;
