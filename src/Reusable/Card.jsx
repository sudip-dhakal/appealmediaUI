import React from "react";
import random1 from "../assets/random1.jpg";
import random2 from "../assets/random2.jpg";
import random3 from "../assets/random3.jpg";
import random4 from "../assets/random4.jpg";
import random5 from "../assets/random5.jpg";

const Card = () => {
  return (
    <>
      <div className="shadow-sm w-[18rem] h-[25rem]  p-1  mt-4 rounded-md  bg-[#f2f4f5] border-b border-gray-600 border-dotted">
        <div className="h-[50%] w-[98%] mx-auto bg-amber-500 ">
          <img
            src={random1}
            alt="Random1 "
            className="h-full w-full object-center object-cover rounded-md"
          />
        </div>
        <h3 className="font-bold text-[0.9em] mt-2 px-4 py-1 text-left">
          Lorem ipsum dolor sit amet
        </h3>
        <p className="text-[#656565] px-4 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi
          deleniti qui illo repellendus libero adipisci saepe iure itaque
          eveniet, voluptas mollitia atque.
        </p>
      </div>
    </>
  );
};

export default Card;
