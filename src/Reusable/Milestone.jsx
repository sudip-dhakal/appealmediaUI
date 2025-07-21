import React, { useState } from "react";
import { MileStoneData } from "./MileStoneData";

const Milestone = () => {
  const [mileStone, setMileStone] = useState(MileStoneData);

  return (
    <div className="relative  lg:w-[48%] mx-auto mt-10 p-6 flex flex-col gap-y-10 ">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-full bg-blue-700 z-0" />

      {mileStone.map((items, index) => {
        let date = new Date(items.date);
        let year = date.getFullYear();
        let month = date.toLocaleString("en-US", { month: "short" });
        let day = date.getDate();

        return (
          <div
            key={index}
            className={`relative flex items-center justify-${
              index % 2 === 0 ? "start" : "end"
            } z-10 `}
          >
            <div
              className={`relative w-[20rem] bg-[#f5f5f5] border border-gray-300 rounded-xl shadow-md px-5 py-4 flex gap-x-4`}
            >
              <div
                className={`absolute top-1/2 -translate-y-1/2 ${
                  index % 2 === 0 ? "-right-5" : "-left-5"
                } text-blue-700`}
              >
                {index % 2 === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor "
                    className="hidden lg:block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="hidden lg:block"
                  >
                    <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
                  </svg>
                )}
              </div>

              <div className="w-[80%] pr-2 border-r border-gray-300">
                <h3 className="text-lg font-semibold text-gray-900">
                  {items.heading}
                </h3>
                <p className="text-sm text-gray-600">{items.subText}</p>
              </div>

              <div className="w-[20%] flex flex-col items-center text-sm text-gray-700">
                <span>{month}</span>
                <span className="text-lg font-bold">{day}</span>
                <span>{year}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Milestone;
