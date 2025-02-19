import { motion } from "framer-motion";

function FeaturesSection() {
    const features = [
        { title: "Superior Cleaning", description: "Advanced technology for unmatched performance" },
        { title: "Eco-Friendly", description: "Biodegradable ingredients, gentle on the environment" },
        { title: "Affordable", description: "High-quality products at competitive prices" },
        { title: "Skin-Safe", description: "Gentle formulations suitable for all skin types" },
    ];

    return (
        <section id="features" className="bg-gray-100 py-16">
            <motion.div
                className="container mx-auto text-center px-6"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-blue-500 mb-10">Our Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full mx-auto mb-4">
                                <span className="text-lg font-bold">✔</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default FeaturesSection;
