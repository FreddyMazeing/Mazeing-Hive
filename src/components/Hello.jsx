import React from "react";
import mazeingshoreel from "../assets/mazeingshoreel.webm";

const Hello = () => {
  return (
    <div className="max-w-full min-h-screen flex items-center justify-center md:mb-40 mb-10 mt-10">
      <div
        className="relative text-[#120c35] text-start  min-h-screen flex
       flex-col container items-center max-w-4xl mx-4 md:mx-20 justify-center"
      >
        <div className="relative w-full    flex flex-col items-center justify-center text-center">
          <div className="absolute rounded-xl inset-0 w-full h-[150px]">
            <video
              src={mazeingshoreel}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-xl"
            ></video>
          </div>

          <div className="z-20 rounded-b-xl  bg-gradient-to-b from-white/100 to-white/10 p-4 backdrop-blur-sm  flex flex-col items-center justify-center text-center">
            <h1 className="text-sm text-center text-[#003b95] font-semibold ">
              Hello there, I'm
            </h1>
            <h1 className="text-4xl text-center font-bold text-[#003b95] ">
              Freddy{" "}
            </h1>
            <h1 className="text-xl  text-center font-light text-[#003b95] ">
              Ready to be inspired? You're right on time!😎
            </h1>
          </div>
        </div>
        <h2 className="mt-40 mb-10 text-2xl font-semibold  text-[#003b95] ">
          Skills
        </h2>

        <div className="flex flex-col space-y-10 z-20">
          {/* Skill1 */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 justify-start">
              <div
                className="px-4 py-1 text-xs tracking-widest text-white
                bg-[#003b95] rounded-lg"
              >
                <h3>online</h3>
              </div>
              <h3 className="font-semibold">Web Developer</h3>
              <h4 className="text-sm  text-gray-400">3 Years</h4>
            </div>
            <p className="max-w-4xl line-clamp-2 hover:line-clamp-none duration-200 ease-in-out text-gray-500">
              As a skilled web developer, I specialize in crafting visually
              appealing and user-friendly websites that effectively communicate
              your brand's message. I am proficient in HTML, CSS, JavaScript,
              and popular frameworks like React , Framer Motion and Tailwind. My
              expertise extends to responsive design, ensuring seamless
              experiences across various devices.
            </p>
          </div>
          {/* Skill1 */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 justify-start">
              <div
                className="px-4 py-1 text-xs tracking-widest text-white
                bg-[#003b95] rounded-lg"
              >
                <h3>brands</h3>
              </div>
              <h3 className="font-semibold">Graphics Designer</h3>
              <h4 className="text-sm  text-gray-400">4 Years</h4>
            </div>
            <p className="max-w-4xl line-clamp-2 hover:line-clamp-none duration-200 ease-in-out text-gray-500">
              With a keen eye for detail and a passion for visual storytelling,
              I excel in creating compelling graphic designs. My skills
              encompass a wide range of techniques, including logo design,
              branding, illustration, and typography. I utilize
              industry-standard software like Adobe Photoshop, Illustrator, and
              InDesign to bring my creative visions to life.
            </p>
          </div>
          {/* Skill1 */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 justify-start">
              <div
                className="px-4 py-1 text-xs tracking-widest text-white
                bg-[#003b95] rounded-lg"
              >
                <h3>adverts</h3>
              </div>
              <h3 className="font-semibold">Motion Graphics Artist</h3>
              <h4 className="text-sm  text-gray-400">4 Years</h4>
            </div>
            <p className="max-w-4xl line-clamp-2 hover:line-clamp-none duration-200 ease-in-out text-gray-500">
              I am a skilled motion graphics artist capable of transforming
              static visuals into dynamic and engaging animations. Using tools
              like Adobe After Effects and Premiere Pro, I create captivating
              animations for videos, presentations, and online content. My
              expertise in storytelling and visual effects allows me to enhance
              brand messaging and leave a lasting impression.
            </p>
          </div>
          {/* Skill1 */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 justify-start">
              <div
                className="px-4 py-1 text-xs tracking-widest text-white
                bg-[#003b95] rounded-lg"
              >
                <h3>markets</h3>
              </div>
              <h3 className="font-semibold">Social Media Marketing</h3>
              <h4 className="text-sm  text-gray-400">3 Years</h4>
            </div>
            <p className="max-w-4xl line-clamp-2 hover:line-clamp-none duration-200 ease-in-out  text-gray-500">
              As a social media marketing agent, I am dedicated to helping
              businesses reach their target audience and achieve their online
              goals. I specialize in developing and implementing effective
              social media strategies, including content creation, community
              management, and paid advertising. My skills in platform
              optimization and analytics enable me to drive engagement, increase
              brand awareness, and generate leads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
