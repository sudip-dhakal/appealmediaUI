import React from "react";
import chairman from "../assets/chairman.jpg";
import "../Reusable/Animation.css";

const MessageFromChairman = () => {
  return (
    <div className="lg:mt-24 w-[95%] mt-12 lg:w-[50%] mx-auto">
      <div className="flex flex-col lg:gap-y-10 gap-y-5">
        <h1 className="font-bold lg:text-4xl text-[2rem] text-center lg:text-left">
          What our chairman says
        </h1>
        <div className="flex lg:flex-row flex-col lg:gap-x-10 items-center">
          <div className="lg:h-[25rem] lg:w-[25rem] h-[20rem] w-[20rem] rounded-full shrink-0">
            <img
              src={chairman}
              alt="Chairman"
              className="h-full w-full object-cover object-top rounded-full animation border-amber-600 border-2 border-dotted"
            />
          </div>
          <div className="text-[#5a5252] text-justify p-2">
            <p style={{ fontFamily: "'Poetsen One', sans-serif" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              atque facilis fugit id, quas asperiores dignissimos dicta
              provident quae ullam impedit dolorum natus facere sunt saepe,
              obcaecati eveniet numquam. Facere in animi soluta? Minima ipsa
              dolorum nihil et exercitationem. Laborum doloremque eaque ducimus
              odit enim nam asperiores deserunt recusandae nostrum sint sit
              ipsa, iste dicta quia. Eaque facere sed impedit ducimus! Ratione
              dolor vero cupiditate. Eveniet, ullam iusto! Possimus eveniet quia
              illo laboriosam quasi alias rerum deserunt quas quibusdam cumque
              ut tenetur a dignissimos asperiores veniam iure, deleniti quaerat
              impedit inventore doloremque. Excepturi itaque consectetur
              asperiores quia est distinctio vero?
            </p>
            <div className="mt-6">
              <h3 className="font-bold text-xl text-[#656565]">
                Lorem ipsum dolor sit.
              </h3>
              <p className="text-xl text-[0.85rem] text-[#656565]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageFromChairman;
