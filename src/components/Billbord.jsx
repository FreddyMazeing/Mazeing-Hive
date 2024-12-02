import React from "react";
import billboardad from "../assets/billboardad.jpg";
import billboardad2 from "../assets/billboardad2.jpg";

const Billbord = () => {
  return (
    <div className="max-w-full flex min-h-screen items-center justify-center ">
      <div
        className=" text-[#120c35]   min-h-screen flex
       container items-center max-w-4xl flex-col gap-4 mx-4 md:mx-20 justify-center"
      >
        <img
          src={billboardad}
          alt=""
          className="w-full h-[152px] hover:scale-110 duration-200 ease-in-out object-cover object-center rounded-xl"
        />
        <img
          src={billboardad2}
          alt=""
          className="w-full h-[300px] hover:scale-110 duration-200 ease-in-out object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Billbord;
