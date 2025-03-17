import React from "react";
import room from "../assets/room.png";

const properties = [
  {
    id: 1,
    image: room,
    title: "Villa with Amazing View",
    price: "$600,000",
    description: "Beautiful, updated, ground-level Co-op apartment...",
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 2,
    image: room,
    title: "Modern Luxury House",
    price: "$850,000",
    description: "Experience a contemporary lifestyle in this stylish home...",
    bedrooms: 5,
    bathrooms: 4,
  },
  {
    id: 3,
    image: room,
    title: "Cozy Family Apartment",
    price: "$450,000",
    description: "A perfect home for families looking for comfort...",
    bedrooms: 3,
    bathrooms: 2,
  },
];

const RealEstateListings = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 flex flex-col md:flex-row">
      {/* Section Title - Now horizontal on mobile */}

      <div className="flex flex-row md:flex-col items-center gap-2 md:gap-12 mt-13 ">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 rotate-0 md:-rotate-90">
          Properties
        </p>
        <div className="h-[2px] w-12 md:w-1 md:h-16 bg-purple-500"></div>
      </div>

      <div className="w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6 text-center md:text-left">
          Explore the Latest Properties <br className="hidden sm:block" /> and
          Select Your Home
        </h2>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <p className="text-blue-600 font-bold">{property.price}</p>
                <p className="text-gray-500 text-sm mt-2">
                  {property.description}
                </p>
                <div className="flex justify-between text-gray-700 text-xs sm:text-sm mt-4">
                  <span>🛏 {property.bedrooms} Bedroom</span>
                  <span>🛁 {property.bathrooms} Bathroom</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Load More Listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealEstateListings;
