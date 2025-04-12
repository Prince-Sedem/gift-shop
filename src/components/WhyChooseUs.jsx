const whyChooseUs = [
    {
      title: "Top Quality Products",
      description:
        "We handpick every item to ensure only the finest gifts reach your loved ones.",
      icon: "/icons/order.png",
      alt: "Quality",
      bgColor: "bg-red-50",
    },
    {
      title: "Fast & Reliable Delivery",
      description:
        "Timely delivery across the country so your gifts arrive just in time.",
      icon: "/icons/fast-delivery.png",
      alt: "Fast Delivery",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Excellent Customer Support",
      description:
        "Our team is here to help with any questions or concerns, anytime.",
      icon: "/icons/support.png",
      alt: "Support",
      bgColor: "bg-green-50",
    },
  ];
  
  function WhyChooseUs() {
    return (
      <div>
        {/* Why Choose Us Section */}
        <section className="bg-white py-12 px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Why Choose Us
          </h2>
  
          <div className="grid gap-8 md:grid-cols-3 text-center">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`p-6 ${item.bgColor} bg-gray-50 rounded-lg shadow hover:shadow-md transition`}
              >
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  
  export default WhyChooseUs;
  