import React from "react";

const GalleryCard = (props) => {
  return (
    <div className="lg:mt-4 mt-1 lg:w-[23%] w-[45%] mx-auto   ">
      <div className="w-full aspect-square flex shrink-0">
        <img
          src={props.Image}
          className="h-full w-full object-cover object-center cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
};

export default GalleryCard;
