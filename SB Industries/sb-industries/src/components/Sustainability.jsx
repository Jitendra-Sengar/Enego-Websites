import { motion } from "framer-motion";

function Sustainability() {
    return (
        <section id="sustainability" className="bg-teal-50 py-16">
            <div className="container mx-auto px-6 text-center md:text-left">
                {/* Section Heading */}
                <motion.h2
                    className="text-3xl font-bold text-blue-500 mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Our Commitment to Sustainability
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center md:space-x-10">
                    {/* Image Section */}
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="/images/sustainability.jpg"
                            alt="Eco-Friendly Cleaning Solutions"
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        className="md:w-1/2 mt-8 md:mt-0"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Eco-Friendly Cleaning Solutions
                        </h3>
                        <p className="text-gray-600 mb-4">
                            At S B Industries, we're committed to providing high-quality cleaning products that are both
                            effective and environmentally responsible. Our eco-friendly formulations use biodegradable
                            ingredients and avoid harsh chemicals, ensuring a minimal environmental impact.
                        </p>
                        <ul className="text-gray-700 list-disc list-inside space-y-2 mb-6">
                            <li>Biodegradable ingredients</li>
                            <li>Reduced plastic packaging</li>
                            <li>Energy-efficient manufacturing processes</li>
                            <li>Commitment to water conservation</li>
                        </ul>
                        
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Sustainability;
