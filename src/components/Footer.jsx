import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">Sem’s Gifts & More</h2>
          <p className="text-gray-400 mt-2">Your one-stop destination for the perfect gifts.</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
            <li><Link to="/cart" className="text-gray-400 hover:text-white">Cart</Link></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-400 mt-2">Phone: +233 24 755 2111</p>
          <p className="text-gray-400">Email: support@semsgiftsandmore.com</p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6 mt-2">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Sem’s Gifts & More. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
