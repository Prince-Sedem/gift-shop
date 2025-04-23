import React,{useEffect} from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Sample product data
const products = [
    // Boxes
    { id: 1, name: "Luxury Gift Box", price: 30, image: "/images/giftbox1.png", category: "Boxes" },
    { id: 2, name: "Surprise Box", price: 25, image: "/images/giftbox2.png", category: "Boxes" },
    { id: 3, name: "Personalized Box", price: 35, image: "/images/giftbox3.png", category: "Boxes" },
    { id: 4, name: "Elegant Box", price: 35, image: "/images/giftbox4.png", category: "Boxes" },
  
    // Flowers
    { id: 5, name: "Red Roses", price: 40, image: "/images/flower1.png", category: "Flowers" },
    { id: 6, name: "Tulip Bouquet", price: 38, image: "/images/flower2.png", category: "Flowers" },
    { id: 7, name: "Mixed Flowers", price: 45, image: "/images/flower3.png", category: "Flowers" },
    { id: 8, name: "lovers Flowers", price: 45, image: "/images/flower4.png", category: "Flowers" },
  
    // Accessories
    { id: 9, name: "Elegant Watch", price: 120, image: "/images/accessory1.png", category: "Accessories" },
    { id: 10, name: "Gold Bracelet", price: 75, image: "/images/accessory4.png", category: "Accessories" },
    { id: 11, name: "Leather Wallet", price: 50, image: "/images/accessory2.png", category: "Accessories" },
    { id: 12, name: "iPhone 16 Pro Max", price: 50, image: "/images/accessory3.png", category: "Accessories" },
  
    // Food
    { id: 13, name: "Chocolate Basket", price: 35, image: "/images/food1.png", category: "Food" },
    { id: 14, name: "Fruit Hamper", price: 50, image: "/images/food4.png", category: "Food" },
    { id: 15, name: "Sweet Treats", price: 28, image: "/images/food2.png", category: "Food" },
    { id: 16, name: "Cake", price: 28, image: "/images/food3.png", category: "Food" },
  ];
  

function Shop() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,
    });
  }, []);


  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtered products based on category
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div 
    className="min-h-screen bg-gray-100 p-6">
      {/* Page Title */}
      <motion.h1
        className="text-3xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Shop Our Collection
      </motion.h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 px-2">
        {["All", "Boxes", "Flowers", "Accessories", "Food"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg  shadow-md text-sm sm:text-base text-gray-700 ${
              selectedCategory === category ? "bg-blue-600 text-white" : "bg-white"
            } transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {filteredProducts.map((product, index) => (
          <Link to={`/product/${product.id}`} className="block h-full">
            <motion.div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={product.id}
              className="flex flex-col h-full bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-48 w-full mb-3 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                <p className="text-gray-600">₵{product.price}</p>
              </div>
              <button className="mt-4 px-4 py-2 bg-gradient-to-r from-black to-blue-600 text-white rounded-bl-xl rounded-tr-xl shadow-md hover:bg-blue-700">
                View Details
              </button>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

export default Shop;
