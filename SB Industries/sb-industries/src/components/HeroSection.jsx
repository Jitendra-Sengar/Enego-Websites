import { motion } from "framer-motion";
function HeroSection() {
    return (
      <motion.section 
        className="bg-teal-100 py-16" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl font-bold text-blue-500 leading-tight">
              High-Quality, Affordable, Eco-Friendly Cleaning Solutions
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              Discover S B Industries' range of innovative and sustainable detergents and soaps.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
                <a href="#products">
              Explore Products
              </a>
            </button>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <motion.img 
              src="/images/soap.jpeg" 
              alt="Eco-Friendly Cleaning Solutions" 
              className="w-full h-64 object-cover rounded-lg shadow-md" 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.section>
    );
  }
  
  export default HeroSection;
  