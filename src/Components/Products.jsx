import React, { useState } from "react";
import NavigationBar from "../Reusable/NavigationBar";
import { productInfo } from "../Files/productInfo";
import Footer from "../Components/Footer";

const Products = () => {
  const [productDetails] = useState(productInfo);

  return (
    <>
      <NavigationBar />

      <div className="w-[90%] max-w-6xl mx-auto lg:mt-16 mt-5 p-4">
        <h1 className="text-5xl font-extrabold mb-16 text-left">
          <span className="text-amber-600">Our </span>
          <span className="text-amber-700">Products</span>
        </h1>

        {productDetails.map((items, index) => (
          <div
            key={index}
            className={`group flex flex-col ${
              index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-10 bg-white shadow-xl rounded-2xl px-6 lg:py-10 mt-20 transition-transform hover:scale-[1.01]`}
          >
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#824adb] order-1">
                {items.topic}
              </h2>
              <p className="text-lg text-gray-800 order-2">{items.description}</p>
              <p className="text-gray-600 italic order-3">{items.paragraph}</p>
              <a
                href={items.link}
                className="w-fit mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition order-5"
              >
                Visit Site
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                  />
                </svg>
              </a>
            </div>

            <div className="flex-1 aspect-square overflow-hidden rounded-xl border border-amber-200 shadow-inner order-4">
              <img
                src={items.image}
                alt={items.topic}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Products;
