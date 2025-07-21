import React from "react";
import NavigationBar from "../Reusable/NavigationBar";
import animation from "../assets/animation.mp4";
import Milestone from "../Reusable/Milestone";
import OurTeam from "./OurTeam";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigation = useNavigate();

  return (
    <>
      <div>
        <NavigationBar />

        <div className="lg:h-[91vh] relative bg-cover bg-center shadow-orange-900 w-full mx-auto pb-5 lg:pb-1">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
            playsInline
            src={animation}
          ></video>
          <div className="bg-black opacity-80 h-full w-full absolute top-0 left-0"></div>

          <div className="relative z-20 flex lg:flex-row flex-col items-center justify-center h-full w-full p-2 lg:w-[50%] mx-auto gap-x-10">
            <h1 className="font-bold text-4xl text-amber-600 lg:mt-24 mt-10 text-right">
              Empowering Digital Innovation — Our mission is to redefine how
              media connects, inspires, and informs the world.
            </h1>
            <span className="flex flex-col gap-y-5">
              <p className="text-xl text-[#b4b1b1] lg:mt-24 mt-10 lg:text-left text-center">
                Founded with a vision to bridge creativity and technology,
                Appeal Media has grown into a leading force in digital media.
                Our team is passionate about crafting compelling stories,
                building powerful platforms, and delivering results that matter.
                From launching innovative products to forming global
                partnerships, each chapter in our story reflects our commitment
                to excellence and meaningful impact. Explore our journey and
                discover how we continue to shape the future of media.
              </p>
              <button
                onClick={() => navigation("/contact")}
                className="lg:bg-[#ffffff] bg-blue-700 px-4 py-2 font-bold lg:text-black text-white rounded-lg text-[0.7rem] lg:text-[1.2rem] lg:w-[90%] w-[50%] mx-auto text-center justify-center cursor-pointer transition-transform flex gap-x-10 items-center hover:scale-110 duration-300"
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-arrow-right hidden lg:block"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-right lg:hidden"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div>
          <div className="mt-16 w-[80%] mx-auto">
            <h1 className="font-bold text-5xl text-center">
              <span className="text-red-500">Our Journey </span>
              <span className="text-red-600">& </span>
              <strong className="text-red-800">Milestones</strong>
            </h1>
            <p className="text-center text-[#656565] mt-4">
              From our humble beginnings to becoming a recognized leader in
              digital storytelling, our milestones reflect our passion,
              innovation, and dedication to excellence.
            </p>

            <div>
              <Milestone />
              <OurTeam />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
