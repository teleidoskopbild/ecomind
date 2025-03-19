import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-500 p-4 w-full text-white text-lg">
      <ul className="flex gap-8">
        <li className="hover:scale-110 transition-transform duration-300">
          <Link to="/">About Us</Link>
        </li>
        <li className="hover:scale-110 transition-transform duration-300">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="hover:scale-110 transition-transform duration-300">
          <Link to="/services">Services</Link>
        </li>
        <li className="hover:scale-110 transition-transform duration-300">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
