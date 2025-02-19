import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header 
      className="bg-blue-500 shadow-md" 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-wide">S B Industries
            <p className="text-white text-xl font-bold tracking-wide">Shanti Bhagwaan Industries</p>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:relative bg-blue-500 md:bg-transparent w-full md:w-auto left-0 p-4 md:p-0 ${menuOpen ? 'block' : 'hidden'}`}>
          <li><a href="#features" className="text-white text-lg font-medium hover:text-teal-300 transition duration-300">About</a></li>
          <li><a href="#products" className="text-white text-lg font-medium hover:text-teal-300 transition duration-300">Products</a></li>
          <li><a href="#testimonials" className="text-white text-lg font-medium hover:text-teal-300 transition duration-300">Testimonials</a></li>
          <li><a href="#sustainability" className="text-white text-lg font-medium hover:text-teal-300 transition duration-300">Sustainability</a></li>
        </ul>
      </nav>
    </motion.header>
  );
}
export default Header;
