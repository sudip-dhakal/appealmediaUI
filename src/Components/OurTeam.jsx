import React from "react";
import TeamCard from "../Reusable/TeamCard";
import ai1 from "../assets/ai1.jpg";
import ai2 from "../assets/ai2.jpg";
import ai3 from "../assets/ai3.jpg";
import ai4 from "../assets/ai4.jpg";
import ai5 from "../assets/ai5.jpg";

const OurTeam = () => {
  return (
    <>
      <div className="lg:w-[70%] w-full p-2 mx-auto mt-20 ">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-center text-5xl  font-bold">
            <span className="text-amber-600">Our </span>
            <span className="text-amber-800">Team</span>
          </h1>
          <p className="lg:w-[70%] w-full mx-auto text-center">
            Our leadership team comprises of visionary innovators, seasoned
            bankers, technologists, futurists and domain experts, all committed
            to driving change through transformative solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 items-center">
          <TeamCard
            image={ai1}
            designation={`Chairman`}
            name={`Krishna Basudev`}
          />
          <TeamCard image={ai2} designation={`Manager`} name={`Shyam Keshav`} />

          <TeamCard
            image={ai3}
            designation={`Salesman`}
            name={`RadhaNath Sapkota`}
          />
          <TeamCard
            image={ai4}
            designation={`Developer`}
            name={`Ram Dasarath`}
          />
          <TeamCard
            image={ai5}
            designation={`Developer`}
            name={`Nandanandan Das`}
          />
        </div>
      </div>
    </>
  );
};

export default OurTeam;
