import React from "react";
import welcome from "../assets/welcome.jpg";
import welcome1 from "../assets/welcome1.jpg";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WelcomeSection = () => {
  let navigation = useNavigate();
  return (
    <>
      <div className="bg-[#063C50] h-[50vh] w-full text-white px-2 py-4 relative">
        <img
          src={welcome1}
          alt="This is welcoming background"
          className="h-full w-full object-cover object-center"
        />
        <div className="h-[50vh] w-full absolute top-0 left-0 bg-black opacity-65 "></div>

        <div className="absolute lg:bottom-60 lg:left-30 bottom-[11rem] ">
          <h1 className="font-bold text-4xl mb-4">Hello there !</h1>
          <h5 className="text-[1rem]  lg:text-[1.2rem] mb-4">
            We are team working together and sharing our passion on different
            areas.
          </h5>
          <button
            onClick={() => navigation("/about")}
            className="px-4 py-2 bg-amber-50 text-black flex justify-between gap-x-2 items-center rounded-md cursor-pointer hover:bg-amber-100 transition-all duration-300"
          >
            Learn more <ArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;
