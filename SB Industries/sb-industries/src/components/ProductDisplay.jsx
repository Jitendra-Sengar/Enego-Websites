import { motion } from "framer-motion";

function ProductDisplay() {
    const products = [
      { name: "Household Detergent Soap", category: "Household", image: "/images/soap.jpeg" },
      { name: "Liquid Soap", category: "Personal Care", image: "/images/liquidsoap.avif" },
      { name: "Dishwashing Solution", category: "Kitchen", image: "/images/dishwash.avif" },
      { name: "Industrial Cleaner", category: "Industrial", image: "/images/industrialcleaner.avif" },
    ];

    return (
      <section id="products" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-6">
          <motion.h2 
            className="text-3xl font-bold text-blue-500 mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Products
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-40 object-cover rounded-md mb-4" 
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default ProductDisplay;
