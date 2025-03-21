import { useState, useEffect } from "react";

export default function MotionProject() {
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
      <div className="font-bold text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out">
        <h1 className="text-white text-center mt-12  text-md md:text-4xl">
          OUR SERVICES
        </h1>
      </div>
      <div
        className={`flex flex-col justify-center bg-green-800 row-span-1 col-span-1 transition-all duration-1500 ease-out  ${
          counter >= 1
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        <h2 className="text-white text-center mt-10  text-md md:text-3xl">
          OUR SERVICES
        </h2>
      </div>
      <div
        className={`flex flex-col justify-center bg-green-800 row-span-1 col-span-1 transition-all duration-1500 ease-out ${
          counter >= 2
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        {" "}
        <h2 className="text-white text-center mt-10  text-md md:text-3xl">
          OUR SERVICES
        </h2>
      </div>
      <div
        className={`flex flex-col justify-center bg-green-800 row-span-1 col-span-1 transition-all duration-1500 ease-out  ${
          counter >= 3
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        {" "}
        <h2 className="text-white text-center mt-10  text-md md:text-3xl">
          OUR SERVICES
        </h2>
      </div>
      <div
        className={`flex flex-col justify-center bg-green-600 row-span-1 col-span-1 transition-all duration-1500 ease-out  ${
          counter >= 4
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        <h2 className="text-white text-center   text-md md:text-3xl">
          OUR SERVICES
        </h2>
      </div>
      <div
        className={`flex flex-col justify-center bg-green-500 row-span-1 col-span-1 transition-all duration-1500 ease-out  ${
          counter >= 5
            ? "opacity-0 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        {" "}
        <h2 className="text-white text-center mt-10  text-md md:text-3xl">
          OUR SERVICES
        </h2>
      </div>
      <div
        className={`flex flex-col justify-center bg-green-600 row-span-1 col-span-1 transition-all duration-1500 ease-in-out   ${
          counter >= 6
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        {" "}
        <h2 className="text-white text-center text-md md:text-3xl">
          OUR SERVICES
        </h2>
      </div>
      <div
        className={`flex flex-col justify-center bg-green-800 col-span-1 row-span-1 transition-all duration-1500 ease-out r ${
          counter >= 7
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        {" "}
        <h2 className="text-white text-center mt-10  text-md md:text-3xl">
          OUR SERVICES
        </h2>
      </div>
      <div
        className={`flex flex-col justify-center bg-green-800 row-span-1 col-span-1 transition-all duration-1500 ease-out  ${
          counter >= 8
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        {" "}
        <h2 className="text-white text-center mt-10  text-md md:text-3xl">
          OUR SERVICES
        </h2>
      </div>
      <div
        className={`flex flex-col justify-center bg-green-800 row-span-1 col-span-1 transition-all duration-1500 ease-out  ${
          counter >= 9
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-200"
        }`}
      >
        {" "}
        <h2 className="text-white text-center mt-10  text-md md:text-3xl">
          OUR SERVICES
        </h2>
      </div>
    </div>
  );
}
