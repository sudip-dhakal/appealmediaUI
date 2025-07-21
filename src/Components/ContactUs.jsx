import React from "react";
import NavigationBar from "../Reusable/NavigationBar";
import Form from "./Form";
import Footer from "../Components/Footer";


const ContactUs = () => {
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

      <div className="flex flex-col md:flex-row md:gap-x-5 justify-between w-[90%] mx-auto lg:mt-20 mt-10 md:mt-5 gap-y-5 lg:gap-y-12 flex-grow min-h-screen ">
        <div className="md:w-[50%] space-y-8">
          <h1 className="font-extrabold text-4xl md:text-5xl leading-tight">
            <span className="text-amber-600">Contact </span>
            <span className="text-amber-700">Us</span>
          </h1>
          <div className="space-y-4 text-[#46494c] text-lg leading-relaxed">
            <p>
              Get in touch via email or phone, or fill out the form below to
              learn how Appeal Media can assist you.
            </p>
            <p>Email: example@appealmedia.com</p>
            <p>Phone: +977-123456789</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 lg:mt-24 mt-10">
            <div className="md:w-1/2 space-y-2">
              <h4 className="font-semibold text-xl text-amber-700">
                Feedback and Suggestions
              </h4>
              <p className="text-[#46494c] text-base">
                We value your feedback and are continuously working to improve
                Appeal Media. Your input is crucial in shaping our future.
              </p>
            </div>
            <div className="md:w-1/2 space-y-2">
              <h4 className="font-semibold text-xl text-amber-700">
                Media Inquiries
              </h4>
              <p className="text-[#46494c] text-base">
                For media-related questions or press inquiries, please contact
                us.
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-3xl text-blue-600"> Captcha will be here</h1>
          </div>
        </div>

        <div className="md:w-[50%]">
          <Form />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
