import { motion } from "framer-motion";

function About() {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/pexels-pavel-danilyuk-6764321.jpg" // Replace with your image path
            alt="About Us"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At <span className="font-semibold text-blue-600">Sem’s Gifts & More</span>, we believe that every gift tells a story.
                Our passion is curating thoughtful gift collections that bring joy, celebrate love, and create lasting memories.
                Whether you're celebrating a birthday, anniversary, or just want to show appreciation — we’re here to help you do it beautifully.
              </p>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                With a variety of premium boxes, fresh flowers, trendy accessories, and delightful treats — our mission is to make gift-giving easier, more meaningful, and a whole lot more fun.
              </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
