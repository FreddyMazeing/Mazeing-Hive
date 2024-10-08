import React from "react";
import childofthesun from "../assets/childofthesun.jpg";
import FashionStyles from "../assets/FashionStyles.jpg";
import Headphones2 from "../assets/Headphones2.jpg";
import normadicchic from "../assets/normadicchic.jpg";

const Graphics = () => {
  return (
    <div className="max-w-full min-h-screen container flex flex-col items-center justify-center md:mt-20 bg-white ">
      {/* Graphics Design */}
      <div className="flex flex-col my-20 items-center justify-center">
        <h1 className="text-2xl font-semibold  text-[#003b95]">
          Graphics Design
        </h1>
        <p className="text-center px-4 md:max-w-xl mt-4 text-gray-500 ">
          Explore my latest digital graphics designs. From sleek interfaces to
          dynamic functionalities, discover how I bring ideas to life.
        </p>
      </div>
      {/* First grid  */}
      <div className="grid border border-[#003b95]/20 p-6 md:grid-cols-4 gap-6 mx-2 ">
        {/* First-Image */}
        <div className="relative shadow-black shadow-xl">
          <div
            className="absolute inset-0 flex items-center hover:opacity-60 opacity-0 duration-200 ease-in-out 
             rounded-sm bg-gradient-to-t  from-[#DB420D]  justify-center"
          >
            {/* <h1 className="text-white hover:text-[#3787ff]  duration-200 ease-in-out hover:bg-[#02265b]/50 px-16 rounded-lg py-2">
              Visit
            </h1> */}
          </div>
          <img
            src={childofthesun}
            alt="childofthesun"
            className="rounded-sm w-72 duration-200 ease-in-out hover:scale-110"
          />
        </div>
        {/* Second-Image */}
        <div className="relative shadow-black shadow-xl">
          <div
            className="absolute inset-0 flex items-center hover:opacity-70 opacity-0 duration-200 ease-in-out 
             rounded-sm bg-gradient-to-t  from-[#FEB902]  justify-center"
          >
            {/* <h1 className="text-white hover:text-[#3787ff]  duration-200 ease-in-out hover:bg-[#02265b]/50 px-16 rounded-lg py-2">
              Visit
            </h1> */}
          </div>
          <img
            src={FashionStyles}
            alt="FashionStyles"
            className="rounded-sm w-72 duration-200 ease-in-out hover:scale-110"
          />
        </div>
        {/* Third-Image */}
        <div className="relative shadow-black shadow-xl">
          <div
            className="absolute inset-0 flex items-center hover:opacity-70 opacity-0 duration-200 ease-in-out 
             rounded-sm bg-gradient-to-t  from-[#FC1624]  justify-center"
          >
            {/* <h1 className="text-white hover:text-[#3787ff]  duration-200 ease-in-out hover:bg-[#02265b]/50 px-16 rounded-lg py-2">
              Visit
            </h1> */}
          </div>
          <img
            src={Headphones2}
            alt="Headphones2"
            className="rounded-sm w-72 duration-200 ease-in-out hover:scale-110"
          />
        </div>
        {/* Fourth-Image */}
        <div className=" relative group shadow-black shadow-xl">
          <div
            className="absolute inset-0 flex items-center hover:opacity-80 opacity-0 duration-200 ease-in-out 
             rounded-sm bg-gradient-to-t  from-[#fea342]  justify-center"
          >
            {/* <h1 className="text-white hover:text-[#3787ff]  duration-200 ease-in-out hover:bg-[#02265b]/50 px-16 rounded-lg py-2">
              Visit
            </h1> */}
          </div>
          <img
            src={normadicchic}
            alt="normadicchic"
            className="rounded-sm w-72"
          />
        </div>
      </div>
    </div>
  );
};

export default Graphics;
