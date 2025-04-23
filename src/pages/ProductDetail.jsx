import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const products = [
    { id: 1, name: "Luxury Gift Box", price: 30, image: "/images/giftbox1.png", description: "A beautifully crafted luxury gift box." },
    { id: 2, name: "Surprise Box", price: 25, image: "/images/giftbox2.png", description: "A surprise box filled with exciting goodies!" },
    { id: 3, name: "Personalized Box", price: 35, image: "/images/giftbox3.png", description: "A customized gift box with a personal touch." },
    { id: 4, name: "Elegant Box", price: 35, image: "/images/giftbox4.png", description: "A sleek and stylish gift box." },
    { id: 5, name: "Red Roses", price: 40, image: "/images/flower1.png", description: "A bouquet of fresh red roses." },
    { id: 6, name: "Tulip Bouquet", price: 38, image: "/images/flower2.png", description: "A lovely arrangement of colorful tulips." },
    { id: 7, name: "Mixed Flowers", price: 45, image: "/images/flower3.png", description: "A vibrant mix of fresh flowers." },
    { id: 8, name: "Mixed Flowers", price: 45, image: "/images/flower3.png", description: "A vibrant mix of fresh flowers." },
    { id: 9, name: "Elegant Watch", price: 120, image: "/images/accessory1.png", description: "A stylish watch perfect for gifting." },
    { id: 10, name: "Gold Bracelet", price: 75, image: "/images/accessory2.png", description: "A premium gold bracelet." },
    { id: 11, name: "Leather Wallet", price: 50, image: "/images/accessory3.png", description: "A classy leather wallet." },
    { id: 12, name: "iPhone 16 Pro Max", price: 50, image: "/images/accessory4.png", description: "A brand new Iphone." },
    { id: 13, name: "Chocolate Basket", price: 50, image: "/images/food1.png", description: "A bucket full of chocolates." },
    { id: 14, name: "Fruit Hamper", price: 50, image: "/images/food4.png", description: "A bucket full of fruit." },
    { id: 15, name: "Sweet Treats", price: 50, image: "/images/food2.png", description: "A sweet treat." },
    { id: 16, name: "Cake", price: 50, image: "/images/food3.png", description: "A sumptuous cake." },
  ];

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center">Product Not Found</p>;

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <motion.img
        src={product.image}
        alt={product.name}
        className="w-64 h-64 object-cover rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600">₵{product.price}</p>
      <p className="text-gray-600">{product.description}</p>
      <div className="mt-4 flex gap-3">
          <button
            onClick={() => addToCart(product)}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-black to-blue-600 text-white rounded-bl-xl rounded-tr-xl shadow-md hover:bg-blue-700"
          >
            Add to Cart
          </button>
          <Link to="/shop" className="mt-4 px-6 py-3 bg-gray-300 text-gray-800 rounded-bl-xl rounded-tr-xl hover:bg-gray-400">
                Back to Shop
          </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
