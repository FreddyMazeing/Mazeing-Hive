import React from "react";
import call from "../assets/call.png";
import Instagram from "../assets/Instagram.png";
import linkedin from "../assets/linkedin.png";
import whatsup from "../assets/whatsup.png";
import mazeingshoreel from "../assets/mazeingshoreel.mp4";

const Footet = () => {
  return (
    <div className="max-w-full  flex items-center justify-center mx-4 my-20">
      <div className="max-w-full  space-y-4 flex flex-col items-center justify-start md:justify-center ">
        <div className="md:max-w-[800px]  rounded-xl ">
          <video
            src={mazeingshoreel}
            autoPlay
            loop
            muted
            controls
            className="  rounded-xl "
          ></video>
        </div>
        <h1 className="text-2xl font-semibold  text-[#003b95]">Contacts</h1>
        <h2>Where You Can Find Out More Of My Work</h2>
        <div className="grid grid-cols-4 gap-6">
          <a
            href="whatsapp://send?phone=+27663832381"
            className="  shadow-lg shadow-black/50 rounded-full p-3 duration-200 ease-in-out hover:scale-105"
          >
            <img src={whatsup} alt="" className="w-6" />
          </a>
          <a
            href="tel:+27663832381"
            className="  shadow-lg shadow-black/50 rounded-full p-3 duration-200 ease-in-out hover:scale-105"
          >
            <img src={call} alt="" className="w-6" />
          </a>
          <a
            href="https://www.instagram.com/mazeing.z/"
            target="_blank"
            className="  shadow-lg shadow-black/50 rounded-full p-3 duration-200 ease-in-out hover:scale-105"
          >
            <img src={Instagram} alt="" className="w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/freddy-mazenge-32ab1b2a2/"
            target="_blank"
            className="  shadow-lg shadow-black/50 rounded-full p-3 duration-200 ease-in-out hover:scale-105"
          >
            <img src={linkedin} alt="" className="w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footet;
