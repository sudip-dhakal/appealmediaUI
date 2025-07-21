import React, { useState } from "react";
import NavigationBar from "../Reusable/NavigationBar";
import GalleryCard from "../Reusable/GalleryCard";
import gallery from "../Files/Gallery";
import Footer from "../Components/Footer";

const Gallery = () => {
  const [imageFiles, setImageFiles] = useState(gallery);

  return (
    <>
      <div>
        <NavigationBar />
        <div className="lg:w-[70%] w-full mx-auto lg:mt-16 shadow-md p-4">
          <h1 className="text-amber-600 font-bold text-4xl">Gallery</h1>
          <div className="flex gap-4 flex-wrap  shrink-0 mt-4">
            {imageFiles.map((item, index) => (
              <GalleryCard key={index} Image={item.Image} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
