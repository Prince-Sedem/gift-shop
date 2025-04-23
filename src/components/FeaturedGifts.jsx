import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


// Sample featured gifts
const featuredGifts = [
  { id: 1, name: "Luxury Gift Box", price: "₵150", image: "/images/giftbox1.png" },
  { id: 2, name: "Red Roses", price: "₵200", image: "/images/flower1.png" },
  { id: 3, name: "Elegant Watch", price: "₵750", image: "/images/accessory1.png" },
  { id: 4, name: "Chocolate Basket", price: "₵180", image: "/images/food1.png" },
];

// Fade Up Motion
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function FeaturedGifts() {
      useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration in ms
          once: false,
        });
      }, []);


  return (
    <div className="py-10 px-6">
      <h2 data-aos="zoom-in"
      className="text-3xl font-bold text-gray-800 text-center mb-6">Featured Gifts</h2>
      
      <div 
      data-aos="fade-up"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredGifts.map((gift) => (
          <motion.div
            key={gift.id}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded-lg shadow-2xl hover:shadow-xl transition"
          >
            <img src={gift.image} alt={gift.name} className="rounded-md mb-3" />
            <h3 className="text-lg font-bold text-gray-800">{gift.name}</h3>
            <p className="text-gray-600">{gift.price}</p>
            <Link to={`/product/${gift.id}`}>
              <button className="mt-2 px-4 py-2 w-full bg-gradient-to-r from-black to-blue-600 text-white rounded-bl-xl rounded-tr-xl shadow-md hover:bg-blue-700">
                View Details
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedGifts;
