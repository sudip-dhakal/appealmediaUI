import React from "react";
import ai1 from "../assets/ai1.jpg";
import ai2 from "../assets/ai2.jpg";
import ai3 from "../assets/ai3.jpg";
import ai4 from "../assets/ai4.jpg";
import ai5 from "../assets/ai5.jpg";

const TeamCard = (props) => {
  return (
    <>
      <div className="flex flex-col gap-y-1 lg:w-[25%] w-full mt-12">
        <div className="w-full aspect-[4/3] border-2 bg-gray-400 overflow-hidden rounded-md">
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h1 className="text-center font-bold mt-4">{props.name}</h1>
        <h5 className="text-center">{props.designation}</h5>
        <p className="text-center text-[#656565]">Appeal media</p>
      </div>
    </>
  );
};

export default TeamCard;
