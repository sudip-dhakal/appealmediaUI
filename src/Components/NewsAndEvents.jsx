import React from "react";
import NavigationBar from "../Reusable/NavigationBar";
import NewsCard from "../Reusable/NewsCard";

const NewsAndEvents = () => {
  return (
    <>
      <div>
        <NavigationBar />

        <div className="lg:w-[50%] w-full px-4 py-2 mx-auto lg:mt-24 mt-10 flex flex-col gap-y-5">
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </>
  );
};

export default NewsAndEvents;
