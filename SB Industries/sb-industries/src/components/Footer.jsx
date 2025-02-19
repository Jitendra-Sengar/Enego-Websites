import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white py-10"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <motion.div whileHover={{ scale: 1.05 }}>
          <h3 className="text-2xl font-bold mb-3">S B Industries</h3>
          <p className="text-xl font-bold mb-3">Shanti Bhagwaan Industries</p>
          <p className="text-gray-400">Innovative cleaning solutions for a cleaner, greener world.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-blue-500">About Us</a></li>
            <li><a href="#products" className="text-gray-400 hover:text-blue-500">Products</a></li>
            <li><a href="#sustainability" className="text-gray-400 hover:text-blue-500">Sustainability</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500">Contact</a></li>
          </ul>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
          
          <p className="text-gray-400">Phone: 9322960986, 7020732377</p>
          <p className="text-gray-400">Email: sbindjalna30@gmail.com</p>
          <p className="text-gray-400">Address: Balaji nagar Ram nagar Jalna Maharashtra</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-blue-500"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="text-center mt-6 text-gray-500 text-sm">&copy; 2024 S B Industries. All rights reserved.</div>
    </motion.footer>
  );
}

export default Footer;
