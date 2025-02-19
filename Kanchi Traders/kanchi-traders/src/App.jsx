import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaStar, FaCheckCircle, FaFacebook, FaTwitter, FaInstagram, FaEnvelope,FaBars, FaTimes, FaLeaf, FaBox, FaMagic, FaFlask, FaShieldAlt, FaRecycle, FaPhone, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav initial="hidden" animate="visible" variants={fadeInUp} className="fixed top-0 w-full bg-white shadow-md z-50 py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">Kanchi Traders</div>
        <div className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#products" className="hover:text-blue-600">Products</a>
          <a href="#sustainability" className="hover:text-blue-600">Sustainability</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full p-6 space-y-4">
          <a href="#home" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#features" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#products" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#sustainability" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Sustainability</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </motion.nav>
  );
};




const HeroSection = () => (
  <motion.section 
  
    id="home"
    className="pt-32 pb-16 bg-gradient-to-r from-blue-50 to-blue-100 text-center md:text-left"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Leading the Detergent Industry
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-600 mb-8"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Advanced formulations delivering unmatched cleaning, stain removal, and fabric care.
        </motion.p>
        <motion.button 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center md:inline-flex"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#contact" className='flex'>Contact Us <FaArrowRight className="ml-2" size={20} /></a>
          
        </motion.button>
      </div>
      <motion.div 
        className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <img src="/images/detergent.jpeg" alt="Detergent Product" className="rounded-lg shadow-xl w-full max-w-md" />
      </motion.div>
    </div>
  </motion.section>
);


const FeaturesSection = () => (
  <section id="features" className="py-16 bg-white text-center">
    <div className="container mx-auto px-6">
      <motion.h2 
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Why Choose Us
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[ { icon: <FaMagic size={24} />, title: "Superior Cleaning", desc: "Our advanced cleaning formulas remove even the toughest stains effortlessly." },
           { icon: <FaBox size={24} />, title: "Affordable Excellence", desc: "We provide premium quality detergents at the most competitive prices." },
           { icon: <FaLeaf size={24} />, title: "Eco-Friendly Solutions", desc: "Sustainable and biodegradable ingredients for an eco-conscious clean." },
           { icon: <FaRecycle size={24} />, title: "Recyclable Packaging", desc: "We use environmentally friendly packaging to reduce waste and pollution." },
           { icon: <FaFlask size={24} />, title: "Innovative Formulas", desc: "Constantly innovating with the latest research for effective cleaning." },
           { icon: <FaShieldAlt size={24} />, title: "Gentle on Fabrics", desc: "Our detergents clean powerfully while keeping your fabrics safe and soft." }
        ].map((feature, index) => (
          <motion.div 
            key={index}
            className="p-6 bg-blue-50 rounded-xl shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="text-blue-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);




const ProductDisplay = () => (
  <section id="products" className="py-16 bg-gray-50 text-center">
    <div className="container mx-auto px-6">
      <motion.h2 
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Products
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "Regular Detergent Soap",  desc: "Perfect for everyday use, ensuring fresh and clean clothes.", img:"/images/soap.jpeg" },
          { name: "Detergent",  desc: "Enhanced stain removal with long-lasting fragrance.", img:"/images/detergent.jpeg" },
          { name: "Eco-Friendly",  desc: "Made with biodegradable ingredients for a sustainable clean.", img:"/images/ecofriendly.jpg" },
          { name: "Ultra White",  desc: "Specially designed for whitening and brightening fabrics.", img:"/images/extrawhite.jpeg" },
          { name: "Sensitive Skin",  desc: "Gentle on skin, free from harsh chemicals and allergens." , img:"/images/reachwash.jpeg"},
          { name: "Liquid Detergent",  desc: "Concentrated formula for deep cleaning with minimal residue." , img:"/images/liquid.avif"}
        ].map((product, index) => (
          <motion.div 
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center w-full max-w-sm mx-auto sm:max-w-xs md:max-w-sm lg:max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <img 
              src={product.img} 
              alt={product.name} 
              className="rounded-lg mb-4 w-full h-48 object-cover sm:h-40 md:h-48 lg:h-56"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">{product.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SustainabilitySection = () => (
  <section id="sustainability" className="py-16 bg-green-50 text-center">
    <div className="container mx-auto px-6">
      <motion.h2 
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Commitment to Sustainability
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-md flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img 
            src="/images/sustainability.avif" 
            alt="Sustainability" 
            className="rounded-lg w-full max-w-md lg:max-w-lg xl:max-w-xl h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
          />
        </motion.div>
        <motion.div 
          className="flex flex-col justify-center text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            {[ 
              "🌱 Eco-friendly formulations using biodegradable ingredients.",
              "♻️ Biodegradable packaging to minimize environmental impact.",
              "🌎 Reduced carbon footprint with energy-efficient production.",
              "💧 Water conservation initiatives for responsible resource management.",
              "🌿 Sustainable sourcing of raw materials to support green practices.",
              "🔄 Commitment to recycling and waste reduction in manufacturing."
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <FaCheckCircle className="text-green-600 mt-1 mr-2" size={20} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);


const CommitmentSection = () => (
  <section className="py-16 bg-blue-50 text-center">
    <div className="container mx-auto px-6">
      <motion.h2 
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Commitment to Excellence
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { 
            title: "Premium Quality", 
            text: "We ensure the highest quality detergents for an exceptional cleaning experience.", 
            icon: <FaStar size={40} className="text-yellow-500" />
          },
          { 
            title: "Eco-Friendly", 
            text: "Sustainable ingredients and packaging for a greener planet.", 
            icon: <FaLeaf size={40} className="text-green-500" />
          },
          { 
            title: "Affordable", 
            text: "High performance at unbeatable prices—because quality shouldn't be expensive.", 
            icon: <FaDollarSign size={40} className="text-blue-600" />
          },
          { 
            title: "Innovative", 
            text: "Constantly improving with new technology for better, safer cleaning.", 
            icon: <FaFlask size={40} className="text-purple-600" />
          }
        ].map((item, index) => (
          <motion.div 
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);


const ContactSection = () => (
  <section id="contact" className="py-16 bg-white text-center">
    <div className="container mx-auto px-6">
      <motion.h2 
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Have any questions or inquiries? Our team is here to assist you. Feel free to reach out via phone, email, or visit our office.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-lg">
          <FaPhone className="text-blue-600 mb-4" size={30} />
          <h3 className="text-lg font-semibold mb-2">Call Us</h3>
          <a href="tel:+917020732377" className="text-blue-600 font-medium">+91 7020732377, +91 9823847674</a>
        </div>
        <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-lg">
          <FaEnvelope className="text-blue-600 mb-4" size={30} />
          <h3 className="text-lg font-semibold mb-2">Email Us</h3>
          <a href="mailto:kanchitraders11@gmail.com" className="text-blue-600 font-medium">kanchitraders11@gmail.com</a>
        </div>
        <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-lg">
          <FaMapMarkerAlt className="text-blue-600 mb-4" size={30} />
          <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600">Balaji nagar Ram nagar Jalna Maharashtra</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <motion.footer initial="hidden" animate="visible" variants={fadeInUp} className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-4">Kanchi Traders</h3>
          <p className="text-gray-400">Leading the detergent industry with advanced formulations and sustainable solutions.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
            <li><a href="#sustainability" className="text-gray-400 hover:text-white">Sustainability</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>+91 7020732377</li>
            <li>+91 9823847674</li>
            <li>kanchitraders11@gmail.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <FaFacebook className="hover:text-blue-400 cursor-pointer" size={24} />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" size={24} />
            <FaInstagram className="hover:text-blue-400 cursor-pointer" size={24} />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Kanchi Traders. All rights reserved.</p>
      </div>
    </div>
  </motion.footer>
);

const App = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <ProductDisplay />
      <SustainabilitySection />
      <CommitmentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;