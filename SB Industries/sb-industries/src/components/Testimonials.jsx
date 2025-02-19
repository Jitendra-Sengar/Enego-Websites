import { motion } from "framer-motion";

function Testimonials() {
    const testimonials = [
        {
            name: "Rakesh Kumar",
            role: "Household Consumer",
            text: "S B Industries products are effective and affordable. I love how they're eco-friendly too!",
        },
        {
            name: "Abhishek Pundhir",
            role: "Hotel Manager",
            text: "We've switched all our cleaning products to S B Industries. The results are fantastic, and our guests appreciate the eco-friendly approach.",
        },
    ];

    return (
        <section id="testimonials" className="bg-white py-16">
            <div className="container mx-auto text-center px-6">
                <motion.h2
                    className="text-3xl font-bold text-blue-500 mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    What Our Customers Say
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-teal-100 p-6 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-lg font-medium">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
