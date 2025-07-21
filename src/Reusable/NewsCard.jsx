import React from "react";

const NewsCard = () => {
  return (
    <>
      <div className="w-full rounded-md border-gray-600 border-2 border-solid px-4 py-2 bg-[#e9f1fa] flex flex-row-reverse justify-between">
        <div className="flex justify-end space-x-2 ">
          <p className="text-[#656565]">2002-04-08</p>
          <p className="text-[#656565]">01:36</p>
        </div>
        <div>
          <h1 className="font-bold lg:text-2xl">This is the heading</h1>
          <p className="text-[1rem] text-[#382b2b]">
            This is the paragraph or description
          </p>
          <button className="text-center rounded-md mt-4 hover:bg-red-500 cursor-pointer transition-all duration-500 lg:py-2 py-1 px-4 bg-gray-700 text-white font-semibold flex justify-center items-center">
            Explore More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              class="bi bi-caret-right"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
