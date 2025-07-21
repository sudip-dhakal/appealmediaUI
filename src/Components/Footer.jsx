import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  let navigation = useNavigate();
  let goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#063C50] text-white w-full py-10 mt-10 relative">
      <div className="max-w-7xl mx-auto px-4 ">
        <button
          className="absolute cursor-pointer lg:bottom-11 lg:right-11 bottom-10 right-6"
          onClick={goToTop}
          title="Go to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            fill="currentColor"
            class="bi bi-arrow-up-circle-fill hidden lg:block"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-up-circle-fill lg:hidden "
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-dotted border-white pb-8">
          <div className="flex justify-center md:justify-start">
            <div className="h-40 w-40 border-2 border-solid border-amber-600">
              <img
                src={logo}
                alt="logo"
                onClick={() => navigation("/")}
                className="w-full h-full object-cover object-center cursor-pointer"
              />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3 text-center md:text-left">
              Appeal Media
            </h2>
            <ul className="space-y-1 text-sm text-center md:text-left">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3 text-center md:text-left">
              Address
            </h2>
            <ul className="space-y-1 text-sm text-center md:text-left">
              <li>1234 Media Street</li>
              <li>Suite 567</li>
              <li>New York, NY 10001</li>
              <li>USA</li>
              <li>Phone: +1 (212) 555-7890</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3 text-center md:text-left">
              CEO
            </h2>
            <ul className="space-y-1 text-sm text-center md:text-left">
              <li>John Doe</li>
              <li>Founder & CEO</li>
              <li>Email: john.doe@appealmedia.com</li>
              <li>LinkedIn: linkedin.com/in/johndoe</li>
              <li>Phone: +1 (212) 555-1234</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3 text-center md:text-left">
              Reach Us
            </h2>
            <ul className="space-y-1 text-sm text-center md:text-left">
              <li>Advertise with Us</li>
              <li>Press & Media</li>
              <li>Partnerships</li>
              <li>Customer Support</li>
              <li>FAQs</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center">
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li className="hover:text-red-400 transition">Appeal Media</li>
            <li className="hover:text-red-400 transition">
              © 2025 All rights reserved
            </li>
            <li className="hover:text-red-400 transition">Privacy Policy</li>
            <li className="hover:text-red-400 transition">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
