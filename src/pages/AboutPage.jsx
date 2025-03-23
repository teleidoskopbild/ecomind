import { useEffect, useRef } from "react";
import "../styles/aboutpage.css";
import "../styles/animations.css";
import { Link } from "react-router-dom";

function AboutPage() {
  const stickySectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      stickySectionsRef.current.forEach((section) => {
        if (section) transform(section);
      });
    };

    const transform = (section) => {
      const offsetTop = section.parentElement.offsetTop;
      let percentage =
        ((window.scrollY - offsetTop) / window.innerHeight) * 100;
      percentage = Math.max(0, Math.min(400, percentage));
      section.querySelector(
        ".scroll_section"
      ).style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="main bg-green-400">
      <section className="relative h-screen">
        <div className="bg-green-500 relative z-5 flex items-center justify-center h-full">
          <div className="flex flex-col items-center text-center text-white">
            <img className="w-25 mb-4" src="leaf.svg"></img>
            <h1 className="text-6xl font-bold mb-2">ECOMIND</h1>
            <p className="text-xl mb-4 w-[90%] md:w-[40%]">
              Welcome to EcoMind Agency – your creative partner for sustainable
              branding, eco-friendly marketing, and green corporate
              communication. Let’s shape a better future together!
            </p>
            <img
              className="w-12 md:w-24 self-center float-animation"
              src="/scroll.svg"
              alt="scroll-symbol"
            ></img>
          </div>
        </div>
      </section>

      <div className="sticky_parent">
        <div
          className="sticky"
          ref={(el) => (stickySectionsRef.current[0] = el)}
        >
          <div className="scroll_section bg-green-400 flex gap-4">
            <div className="flex flex-col flex-1 p-10">
              <div className="flex justify-center gap-6">
                <h2 className="text-6xl mb-4 text-white self-center">
                  OUR VISION
                </h2>
                <img className="w-25" src="vision.svg" />
              </div>

              <p className="text-xl mt-6 text-white self-center">
                To inspire businesses to embrace sustainability and create
                meaningful change through innovative, eco-conscious strategies.
              </p>
            </div>

            <div className="flex flex-col flex-1 p-10">
              <div className="flex justify-center gap-6">
                <h2 className="text-6xl mb-4 text-white self-center">
                  OUR MISSION
                </h2>
                <img className="w-25" src="mission.svg" />
              </div>
              <p className="text-xl mt-6 text-white self-center">
                We focus on eco-friendly marketing and green corporate
                communication.
              </p>
            </div>

            <div className="flex flex-col flex-1 p-10">
              <div className="flex justify-center gap-6">
                <h2 className="text-6xl mb-4 text-white self-center">
                  OUR IMPACT
                </h2>
                <img className="w-25" src="mission.svg" />
              </div>
              <p className="text-xl mt-6 text-white self-center">
                Together, we can shape a better future through innovative,
                sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="relative h-screen">
        <div className="bg-green-500 relative z-5 flex items-center justify-center h-full">
          <div className="flex flex-col items-center text-center text-white">
            <h2 className="text-5xl font-bold mb-2">
              JOIN US IN MAKING A DIFFERENCE
            </h2>
            <p className="text-xl mb-4 w-[90%] md:w-[70%]">
              Together, we can create a sustainable future. Let’s work towards
              positive change!
            </p>
            <button className="bg-green-700 text-white py-3 px-8 rounded-full border-4 border-transparent hover:bg-green-800 hover:border-green-400 hover:text-green-100 transform hover:scale-110 transition-all duration-300 ease-in-out shadow-2xl">
              <Link to="/contact" className="text-white">
                Contact Us!
              </Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
