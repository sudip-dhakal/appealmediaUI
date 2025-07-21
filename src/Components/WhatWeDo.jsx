import React from "react";
import nature from "../assets/nature.jpg";

const WhatWeDo = () => {
  return (
    <>
      <div className="bg-[#242627] lg:mt-1 w-full mt-8">
        <div className=" lg:w-[50%] w-[95%] lg:p-6 p-2 mx-auto flex lg:flex-row flex-col lg:justify-between lg:gap-x-10 ">
          <div className="lg:w-[50%] w-full overflow-hidden">
            <h1 className="text-orange-400 font-bold text-4xl">What we do ? </h1>
            <p className="text-white mt-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              deserunt obcaecati? Ut fugiat debitis illo numquam rem eligendi
              error cumque voluptate sit molestias suscipit nihil maiores
              repellat, deleniti quasi quod. Repellendus aspernatur sequi fugiat
              debitis, aut iusto aperiam consequuntur dolore in, labore placeat
              laudantium necessitatibus tempora inventore voluptatem a, rem
              quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quas iure cum enim excepturi aliquam laudantium nam quis, alias
              laboriosam fugit!
            </p>
          </div>
          <div className=" lg:w-[50%] w-full h-full bg-amber-400 mt-2 lg:mt-0 ">
            <img
              src={nature}
              alt="This is the description"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
