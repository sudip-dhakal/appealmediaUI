import React from "react";
import logo from "../assets/logo.png";
import { useNavigate, NavLink } from "react-router-dom";

const NavigationBar = () => {
  const navigation = useNavigate();
  return (
    <>
      <div className="bg-[#242627]">
        <div className=" text-white p-4 lg:flex lg:justify-between gap-x-1 ">
          <div className="bg-yellow-700 w-[3.5rem] h-[3.5rem] rounded-full ml-24 cursor-pointer hidden lg:block">
            <img
              src={logo}
              onClick={() => navigation("/")}
              alt="This is the appeal media logo"
              className="h-full w-full object-cover object-center border-2 border-solid border-white rounded-full "
            />
          </div>
          <ul className="flex justify-between gap-x-7 mr-24 sticky top-0">
            <NavLink
              to="/"
              title="Home"
              className={({ isActive }) =>
                `px-2 py-2 flex items-center justify-between gap-x-2 cursor-pointer hover:text-red-500 transition-all ease-in duration-300 ${
                  isActive ? "underline text-red-500" : ""
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-house-door"
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
              </svg>
              <span className="lg:block md:block hidden"> Home</span>
            </NavLink>
            <NavLink
              title="About Us"
              to="/about"
              className={({ isActive }) =>
                `px-2 py-2 flex items-center justify-between gap-x-2 cursor-pointer hover:text-red-500 transition-all ease-in duration-300 ${
                  isActive ? "underline text-red-500" : ""
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-people-fill "
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
              <span className="lg:block md:block hidden"> About Us</span>
            </NavLink>
            <NavLink
              title="News and Events"
              to="/newsAndEvents"
              className={({ isActive }) =>
                `px-2 py-2 flex items-center justify-between gap-x-2 cursor-pointer hover:text-red-500 transition-all ease-in duration-300 ${
                  isActive ? "text-red-600 underline  " : ""
                } `
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-info-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>
              <span className="lg:block md:block hidden"> News and Events</span>
            </NavLink>
            <NavLink
              title="Gallery"
              to="/gallery"
              className={({ isActive }) =>
                `px-2 py-2 flex items-center justify-between gap-x-2 cursor-pointer hover:text-red-500 transition-all ease-in duration-300 ${
                  isActive ? "underline text-red-600 " : " "
                } `
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-images"
                viewBox="0 0 16 16"
              >
                <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z" />
              </svg>
              <span className="lg:block md:block hidden"> Gallery</span>
            </NavLink>
            <NavLink
              title="Products"
              to="/products"
              className={({ isActive }) =>
                `px-2 py-2 flex items-center justify-between gap-x-2 cursor-pointer hover:text-red-500 transition-all ease-in duration-300 ${
                  isActive ? "underline text-red-600 " : " "
                } `
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-signpost-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.293.707A1 1 0 0 0 7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414A1 1 0 0 0 7.293.707" />
              </svg>
              <span className="lg:block md:block hidden"> Our Products</span>
            </NavLink>
            <NavLink
              title="Contacts"
              to="/contact"
              className={({ isActive }) =>
                `px-2 py-2 flex items-center justify-between gap-x-2 cursor-pointer hover:text-red-500 transition-all ease-in duration-300 ${
                  isActive ? "underline text-red-600 " : " "
                } `
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-reception-4"
                viewBox="0 0 16 16"
              >
                <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z" />
              </svg>
              <span className="lg:block md:block hidden">Contact Us</span>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
