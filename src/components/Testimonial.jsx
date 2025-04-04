import { motion } from "framer-motion";

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Ama Serwaa",
    title: "Accra, Ghana",
    quote: "Absolutely loved the gift box I ordered. It arrived beautifully packaged and right on time!",
    image: "/images/pf2.png",
  },
  {
    id: 2,
    name: "Kwame Asante",
    title: "Kumasi, Ghana",
    quote: "The delivery was super fast and the support team was really helpful. Highly recommend!",
    image: "/images/pf1.png",
  },
  {
    id: 3,
    name: "Akua Boateng",
    title: "Takoradi, Ghana",
    quote: "Such thoughtful gift selections! My friend was thrilled. Will definitely order again.",
    image: "/images/pf3.png",
  },
];

function Testimonial() {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What Our Customers Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-600 italic">“{testimonial.quote}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
