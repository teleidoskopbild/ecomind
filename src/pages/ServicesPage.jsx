import { useState, useEffect } from "react";
import "../styles/services.css";

export default function Services() {
  const [counter, setCounter] = useState(0);
  let scrollCount = 0;

  const handleScroll = (event) => {
    scrollCount++;
    if (scrollCount >= 4) {
      if (event.deltaY > 0) {
        setCounter((prev) => Math.min(prev + 1, 9));
      } else {
        setCounter((prev) => Math.max(prev - 1, 0));
      }
      scrollCount = 0;
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  });

  return (
    <div className="mt-0 pt-12 grid grid-cols-3 grid-rows-3 gap-0 sm:gap-0 h-screen bg-green-500 ">
      <div className="flex flex-col font-bold text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out">
        <h1 className="text-white text-center mt-12  text-sm md:text-4xl">
          OUR SERVICES
        </h1>
        <img
          className="w-12 md:w-24 self-center float-animation"
          src="/scroll.svg"
          alt="scroll-symbol"
        ></img>
      </div>
      <div
        className={`flex flex-col justify-center  row-span-1 col-span-1 transition-all duration-1500 ease-out  ${
          counter >= 1
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        <img
          className="w-12 md:w-18 self-center  mb-3"
          src="/branding.svg"
          alt="branding design"
        ></img>
        <h2 className="text-white text-center  text-sm md:text-2xl">
          BRANDING
        </h2>
        <h2 className="text-white text-center  text-sm md:text-2xl">DESIGN</h2>
      </div>
      <div
        className={`flex flex-col justify-center  row-span-1 col-span-1 transition-all duration-1500 ease-out ${
          counter >= 2
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        <img
          className="w-12 md:w-18 self-center mb-3"
          src="/socialmedia.svg"
          alt="social-media-campaigns"
        ></img>
        <h2 className="text-white text-center text-sm md:text-2xl">
          SOCIAL MEDIA
        </h2>
        <h2 className="text-white text-center   text-sm md:text-2xl">
          CAMPAINS
        </h2>
      </div>
      <div
        className={`flex flex-col justify-center  row-span-1 col-span-1 transition-all duration-1500 ease-out  ${
          counter >= 3
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        <img
          className="w-12 md:w-18 self-center  mb-3"
          src="/contentmarketing.svg"
          alt="content marketing"
        ></img>
        <h2 className="text-white text-center  text-sm md:text-2xl">CONTENT</h2>
        <h2 className="text-white text-center text-sm md:text-2xl">
          MARKETING
        </h2>
      </div>
      <div
        className={`flex flex-col justify-center  row-span-1 col-span-1 transition-all duration-1500 ease-out  ${
          counter >= 4
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        <img
          className="w-12 md:w-18 self-center ml-8 mb-3"
          src="/email.svg"
          alt="email-marketing"
        ></img>
        <h2 className="text-white text-center   text-md md:text-2xl">EMAIL</h2>
        <h2 className="text-white text-center   text-md md:text-2xl">
          MARKETING
        </h2>
      </div>
      <div
        className={`flex flex-col justify-center bg-green-500 row-span-1 col-span-1 transition-all duration-1500 ease-out  ${
          counter >= 5
            ? "opacity-0 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        <h2 className="text-white text-center mt-10  text-sm md:text-2xl"></h2>
      </div>
      <div
        className={`flex flex-col justify-center row-span-1 col-span-1 transition-all duration-1500 ease-in-out   ${
          counter >= 5
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        <img
          className="w-12 md:w-18 self-center mb-3"
          src="/environment.svg"
          alt="environmental consulting"
        ></img>
        <h2 className="text-white text-center text-sm md:text-2xl">
          ENVIRONMENTAL
        </h2>
        <h2 className="text-white text-center text-sm md:text-2xl">
          CONSULTING
        </h2>
      </div>
      <div
        className={`flex flex-col justify-center  col-span-1 row-span-1 transition-all duration-1500 ease-out r ${
          counter >= 6
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        <img
          className="w-12 md:w-18 self-center ml-2 mb-4"
          src="/webdesign.svg"
          alt="web development"
        ></img>
        <h2 className="text-white text-center  text-sm md:text-2xl">WEB</h2>
        <h2 className="text-white text-center  text-sm md:text-2xl">
          DEVELOPMENT
        </h2>
      </div>
      <div
        className={`flex flex-col justify-center row-span-1 col-span-1 transition-all duration-1500 ease-out  ${
          counter >= 7
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        <img
          className="w-12 md:w-18 self-center mb-3"
          src="/publicrelations.svg"
          alt="public relations"
        ></img>
        <h2 className="text-white text-center   text-sm md:text-2xl">PUBLIC</h2>
        <h2 className="text-white text-center  text-sm md:text-2xl">
          RELATIONS
        </h2>
      </div>
      <div
        className={`flex flex-col justify-center  row-span-1 col-span-1 transition-all duration-1500 ease-out  ${
          counter >= 8
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        <img
          className="w-12 md:w-18 self-center mb-3"
          src="/eventmanagment.svg"
          alt="event managment"
        ></img>
        <h2 className="text-white text-center  text-sm md:text-2xl">EVENT</h2>
        <h2 className="text-white text-center  text-sm md:text-2xl">
          MANAGMENT
        </h2>
      </div>
    </div>
  );
}
