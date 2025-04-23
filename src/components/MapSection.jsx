import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function MapSection() {
            useEffect(() => {
              AOS.init({
                duration: 1000, // animation duration in ms
                once: false,
              });
            }, []);


  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          const destination = "Sem’s+Gifts+&+More";
          const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destination}&travelmode=driving`;

          window.open(googleMapsUrl, "_blank");
        },
        () => {
          alert("Error getting location. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="bg-gray-100 py-10 px-6 mt-16">
      <h2 
      data-aos="zoom-in"
      className="text-3xl font-bold text-center text-black mb-6">
        Find Us
        </h2>
      <div 
      data-aos="fade-up"
      className="max-w-3xl mx-auto">
        <iframe
          className="w-full h-80 rounded-lg shadow-md"
          src="https://maps.google.com/maps?q=Sem’s%20Gifts%20&%20More&output=embed"
          title="Sem’s Gifts & More Location"
          allowFullScreen
          loading="lazy"
        ></iframe>

        <p className="text-center  font-semibold mt-4">
          <button
            data-aos="fade-up"
            onClick={getUserLocation}
            className="hover:underline bg-gradient-to-r from-black to-blue-600 text-white py-2 px-4 rounded-bl-xl rounded-tr-xl mt-2 inline-block"
          >
            Get Directions
          </button>
        </p>
      </div>
    </div>
  );
}

export default MapSection;
