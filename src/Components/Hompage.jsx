import React from "react";
import NavigationBar from "../Reusable/NavigationBar";
import WelcomeSection from "./WelcomeSection";
import WhatWeDo from "./WhatWeDo";
import OurProducts from "./OurProducts";
import MessageFromChairman from "./MessageFromChairman";
import Footer from "./Footer";

const Hompage = () => {
  return (
    <>
      <div className="flex flex-col gap-y-10">
        <div className="bg-[#242627] lg:h-[100vh] ">
          <NavigationBar />
          <WelcomeSection />
          <WhatWeDo />
        </div>

        <div>
          <OurProducts />
          <MessageFromChairman />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Hompage;
