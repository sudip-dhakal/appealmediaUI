import React from "react";
import Card from "../Reusable/Card";
import { useNavigate } from "react-router-dom";

const OurProducts = () => {
  const Navigation = useNavigate();
  return (
    <>
      <div className="lg:mt-5 lg:m-4">
        <div className="lg:w-[80%]  mx-auto flex flex-col gap-y-10 shadow-md lg:p-10 p-2">
          <h1 className="font-bold lg:text-4xl  text-[2rem] text-center text-[#757575]">
            What we have done ?
          </h1>
          <div className="flex lg:flex-row sm:flex-row sm:justify-center sm:gap-x-5 flex-col  lg:gap-x-10 items-center flex-wrap gap-y-7">
            <Card />
            <Card />
          </div>
          <p
            onClick={() => Navigation("/products")}
            className="text-end bg-blue-700 text-white px-4 py-2 inline-block w-fit rounded-md ml-7 cursor-pointer mr-35 hover:text-red-700 transition-all duration-300 "
          >
            See More
          </p>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
