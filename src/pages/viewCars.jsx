import React, { useState } from "react";

export default function ViewCars() {
  const carsData = [
    {
      id: 1,
      name: "BMW X5",
      type: "Luxury",
      price: 120,
      fuel: "Petrol",
      seats: 5,
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/09/32/auto-1868726_1280.jpg",
    },
    {
      id: 2,
      name: "Audi A6",
      type: "Electric",
      price: 100,
      fuel: "Electric",
      seats: 5,
      image:
        "https://cdn.pixabay.com/photo/2017/01/06/19/15/audi-1957037_1280.jpg",
    },
    {
      id: 3,
      name: "Toyota Prius",
      type: "Economy",
      price: 70,
      fuel: "Hybrid",
      seats: 5,
      image:
        "https://cdn.pixabay.com/photo/2019/07/07/14/03/toyota-4321138_1280.jpg",
    },
  ];

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");

  const filteredCars = carsData.filter((car) => {
    const matchesSearch = car.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesType =
      filterType === "All" || car.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 w-screen">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Available Cars</h1>
          <p className="text-gray-500 mt-2">
            Choose the best car that fits your journey
          </p>
        </div>

        {/* ===== FILTER BAR ===== */}
        <div className="bg-white p-6 rounded-xl shadow mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search car..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Types</option>
            <option value="Economy">Economy</option>
            <option value="Luxury">Luxury</option>
            <option value="Electric">Electric</option>
          </select>

          <button className="bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Apply Filters
          </button>
        </div>

        {/* ===== CAR LIST ===== */}
        {filteredCars.length === 0 ? (
          <p className="text-center text-gray-500">
            No cars found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 transition transform overflow-hidden"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{car.name}</h3>
                    <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      {car.type}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm">
                    {car.fuel} • {car.seats} Seats
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-600 font-bold text-lg">
                      ${car.price}/day
                    </span>

                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-blue-600 transition">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
