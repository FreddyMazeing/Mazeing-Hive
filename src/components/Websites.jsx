import React from "react";
import Z1 from "../assets/Z1.jpg";
import Z2 from "../assets/Z2.jpg";
import Z3 from "../assets/Z3.jpg";
import Z4 from "../assets/Z4.jpg";

const Websites = () => {
  return (
    <div>
      <div className="max-w-full min-h-screen flex items-center justify-center">
        <div
          className="max-w-7xl text-[#120c35] text-start  min-h-screen flex
       flex-col container items-center mx-4 md:mx-20 justify-center"
        >
          <h1 className="text-2xl font-semibold  text-[#003b95] ">
            Web Development
          </h1>
          <p className="text-center max-w-xl text-gray-500 mt-4">
            Explore my latest web design and development creations. From sleek
            interfaces to dynamic functionalities, discover how I bring ideas to
            life.
          </p>
          <div className="grid md:grid-cols-2  items-center gap-10 mb-10 md:mb-0   md:gap-20 my-20">
            {/* First */}
            <a
              href="https://frezo.vercel.app/"
              target="_blank"
              className="relative flex items-center justify-center"
            >
              <div
                className="absolute inset-0 flex items-center hover:opacity-100 opacity-0 duration-200 ease-in-out 
              rounded-2xl bg-gradient-to-r backdrop-blur-sm from-[#3787ff]/10 to-[#02265b]/70 justify-center"
              >
                <h1 className="text-white hover:text-[#3787ff]  duration-200 ease-in-out hover:bg-[#02265b]/50 px-16 rounded-lg py-2">
                  Visit
                </h1>
              </div>

              <img
                href=""
                src={Z1}
                alt="Website Project_1"
                className="w-[400px] cursor-pointer h-72 object-cover rounded-2xl shadow-xl shadow-black/50 duration-200 ease-in-out hover:scale-105"
              />
            </a>
            {/* Second */}
            <a
              href="https://www.tendernet.co.za/"
              target="_blank"
              className="relative flex items-center justify-center"
            >
              <div
                className="absolute inset-0 flex items-center hover:opacity-100 opacity-0 duration-200 ease-in-out 
              rounded-2xl bg-gradient-to-r backdrop-blur-sm from-[#3787ff]/10 to-[#02265b]/70 justify-center"
              >
                <h1 className="text-white hover:text-[#3787ff]  duration-200 ease-in-out hover:bg-[#02265b]/50 px-16 rounded-lg py-2">
                  Visit
                </h1>
              </div>
              <img
                src={Z2}
                alt="Website Project_1"
                className="w-[400px] h-72 cursor-pointer object-cover rounded-2xl shadow-xl shadow-black/50 duration-200 ease-in-out hover:scale-105"
              />
            </a>
            {/* Third */}
            <a
              href="https://shoe-haven-nine.vercel.app/"
              target="_blank"
              className="relative flex items-center justify-center"
            >
              <div
                className="absolute inset-0 flex items-center hover:opacity-100 opacity-0 duration-200 ease-in-out 
              rounded-2xl bg-gradient-to-r backdrop-blur-sm from-[#3787ff]/10 to-[#02265b]/70 justify-center"
              >
                <h1 className="text-white hover:text-[#3787ff]  duration-200 ease-in-out hover:bg-[#02265b]/50 px-16 rounded-lg py-2">
                  Visit
                </h1>
              </div>
              <img
                src={Z3}
                alt="Website Project_1"
                className="w-[400px] h-72 cursor-pointer object-cover rounded-2xl shadow-xl shadow-black/50 duration-200 ease-in-out hover:scale-105"
              />
            </a>
            {/* Fourth */}
            <a
              href="https://freddymazenge.vercel.app/#"
              target="_blank"
              className="relative flex items-center cursor-pointer justify-center"
            >
              <div
                className="absolute inset-0 flex items-center hover:opacity-100 opacity-0 duration-200 ease-in-out 
              rounded-2xl bg-gradient-to-r backdrop-blur-sm from-[#3787ff]/10 to-[#02265b]/70 justify-center"
              >
                <h1 className="text-white hover:text-[#3787ff]  duration-200 ease-in-out hover:bg-[#02265b]/50 px-16 rounded-lg py-2">
                  Visit
                </h1>
              </div>
              <img
                src={Z4}
                alt="Website Project_1"
                className="w-[400px] h-72 object-cover cursor-pointer rounded-2xl shadow-xl shadow-black/50 duration-200 ease-in-out hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Websites;
