import React,{useEffect} from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        once: false,
      });
    }, []);


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
            data-aos="fade-up"

          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div data-aos="fade-up">  
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                <span className="font-semibold text-blue-600">Sem’s Gifts & More</span> is a gift and event company that specializes in creating hampers, 
                customized gift items, occasional cakes, catering services, and breakfast/brunch for every occasion. We provide the perfect gifts and services for both corporate clients and individuals.
                Our gift baskets and boxes are well designed and beautifully packaged to suit every class in society.
              </p>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              We provide customized and personalized gift boxes featuring your company logo, adding a touch of class when your clients receive them.
              We design with perfection, pay close attention to detail, and specialize in customized business gifts and services.
              Our collection includes a fantastic range of high-quality gifts at excellent prices.
              </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
