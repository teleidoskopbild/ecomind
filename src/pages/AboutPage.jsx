import { useEffect, useRef } from "react";
import "../styles/aboutpage.css";

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
            <h1 className="text-6xl font-bold mb-2">ECOMIND</h1>
            <p className="text-xl mb-4 w-[90%] md:w-[40%]">
              Welcome to EcoMind Agency – your creative partner for sustainable
              branding, eco-friendly marketing, and green corporate
              communication. Let’s shape a better future together!
            </p>
          </div>
        </div>
      </section>

      <div className="sticky_parent">
        <div
          className="sticky"
          ref={(el) => (stickySectionsRef.current[0] = el)}
        >
          <div className="scroll_section bg-green-400 flex gap-4">
            <div className="flex-1 p-10">
              <h2 className="text-6xl mb-4 text-white">OUR VISION</h2>
              <p className="text-xl mb-4 text-white">
                To inspire businesses to embrace sustainability and create
                meaningful change through innovative, eco-conscious strategies.
              </p>
            </div>

            <div className="flex-1 p-10">
              <h2 className="text-6xl mb-4 text-white">OUR MISSION</h2>
              <p className="text-xl mb-4 text-white">
                We focus on eco-friendly marketing and green corporate
                communication.
              </p>
            </div>

            <div className="flex-1 p-10">
              <h2 className="text-6xl mb-4 text-white">OUR IMPACT</h2>
              <p className="text-xl mb-4 text-white">
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
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
