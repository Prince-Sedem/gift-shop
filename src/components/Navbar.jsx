import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext"; // Import Cart Context

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart(); // Get cart state

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div>
            <Link to="/" className="text-xl font-bold text-gray-800">
            Sem’s Gifts & More
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-blue-500">
              Shop
            </Link>

            {/* Cart Button */}
            <Link to="/cart" className="relative text-gray-700 hover:text-blue-500 flex items-center">
              🛒 Cart
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="px-4 py-2 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/shop" className="block text-gray-700 hover:text-blue-500">
              Shop
            </Link>

            {/* Mobile Cart Button with Count */}
            <Link to="/cart" className="relative block text-gray-700 hover:text-blue-500">
              🛒 Cart
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
