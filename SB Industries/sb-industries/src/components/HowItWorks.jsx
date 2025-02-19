import { motion } from "framer-motion";

function HowItWorks() {
    const steps = [
        { title: "Breaks Down Dirt & Oils", description: "Detergents contain surfactants that reduce surface tension and loosen dirt and grease." },
        { title: "Lifts Stains & Impurities", description: "Micelles trap and lift away stains, preventing them from resettling on fabrics or surfaces." },
        { title: "Rinses Away Easily", description: "Water binds to detergent molecules, washing away dirt and leaving no residue behind." },
        { title: "Leaves a Fresh Scent", description: "Special additives ensure your clothes or surfaces stay fresh and clean for longer." },
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto text-center px-6">
                <motion.h2
                    className="text-3xl font-bold text-blue-500 mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    How Detergent Works
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="bg-teal-100 p-6 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center text-xl font-bold rounded-full mx-auto mb-4">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
