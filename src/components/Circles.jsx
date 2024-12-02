import React from "react";

const Circles = () => {
  return (
    <div
      className="flex justify-center items-center 
    max-w-full min-h-screen"
    >
      <div
        className="flex items-center  justify-center relative  bg-[#9BB21B] rounded-full 
      h-[300px] w-[300px] border-2 border-[#FABA00]"
      >
        <div
          className="absolute inset-0    rounded-full 
      h-[400px] w-[400px] border-2 border-[#FABA00]"
        ></div>
      </div>
    </div>
  );
};

export default Circles;
