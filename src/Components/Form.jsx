import React from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  let handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="shadow-md p-6 rounded-xl bg-white">
      <form className="flex flex-col gap-y-6">
        <h1 className="font-bold text-2xl text-gray-800">Get in Touch</h1>

        <div className="flex flex-col md:flex-col gap-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="firstName" className="text-sm text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Appeal"
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="lastName" className="text-sm text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Media"
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="appealmedia@gmail.com"
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phoneNumber" className="text-sm text-gray-600">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="+977-123456789"
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="help" className="text-sm text-gray-600">
            How can we help?
          </label>
          <textarea
            id="help"
            rows={4}
            placeholder="Write your message here..."
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-md w-[30%] transition cursor-pointer"
            onClick={() => navigate("/")}
          >
            Back
          </button>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md w-[30%] transition cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
