import React from "react";
import { FaDollarSign, FaCarSide, FaHeadset, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-screen font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white min-h-screen flex items-center relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-white/10 rounded-full animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10 relative z-10">

          {/* Text */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Rent Your Perfect Car <br /> Anytime, Anywhere
            </h1>

            <p className="text-blue-100 text-lg">
              Choose from economy, luxury, and electric cars.
              Easy booking, transparent pricing, 24/7 support.
            </p>

            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition transform">
                Book Now
              </button>

              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 hover:scale-105 transition transform">
                View Cars
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 relative">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/29/09/32/auto-1868726_1280.jpg"
              alt="Car"
              className="rounded-xl shadow-2xl w-full hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* ================= SEARCH BOX ================= */}
      <section className="max-w-6xl mx-auto px-6 relative -mt-16 z-20">
        <div className="bg-white shadow-xl rounded-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4 hover:scale-105 transition transform">
          <input
            type="text"
            placeholder="Pickup Location"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-600 transition">
            Search
          </button>
        </div>
      </section>

      {/* ================= FEATURED CARS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex-1">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Cars
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "BMW X5", price: "$120/day", type: "Luxury" },
            { name: "Audi A6", price: "$100/day", type: "Electric" },
            { name: "Toyota Prius", price: "$70/day", type: "Economy" },
          ].map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform overflow-hidden relative"
            >
              {/* Badge */}
              <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {car.type}
              </div>

              <img
                src="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg"
                alt={car.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Automatic • Petrol • 5 Seats
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-blue-600 font-bold text-lg">{car.price}</span>
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-blue-600 transition">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaDollarSign className="text-blue-600 text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">
                No hidden fees. Pay exactly what you see.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaCarSide className="text-blue-600 text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">
                Economy, luxury & electric vehicles available.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FaHeadset className="text-blue-600 text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                We are always here to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Car Rental Management System</p>

          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-white transition"><FaFacebook /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
