import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-0 z-10 bg-green-700 p-3 w-full text-white text-lg transition-all duration-300 ease-in-out">
      <div className="flex items-center cursor-pointer">
        <button
          onClick={toggleMenu}
          className={`cursor-pointer text-white ${isOpen ? "hidden" : ""}`}
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
        </button>
        <ul
          className={`flex flex-col gap-8 items-center w-full justify-center text-xl sm:text-3xl text-bold transition-transform duration-300 ease-in-out ${
            !isOpen ? "h-5 -translate-y-100" : "h-screen translate-y-0"
          }`}
        >
          <li className="hover:scale-110 transition-transform duration-300">
            <Link onClick={toggleMenu} to="/">
              About Us
            </Link>
          </li>
          <li className="hover:scale-110 transition-transform duration-300">
            <Link onClick={toggleMenu} to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="hover:scale-110 transition-transform duration-300">
            <Link onClick={toggleMenu} to="/services">
              Services
            </Link>
          </li>
          <li className="hover:scale-110 transition-transform duration-300">
            <Link onClick={toggleMenu} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
