import React from "react";

import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import home4 from "../assets/home4.png";
import home5 from "../assets/home5.png";
import home6 from "../assets/home6.png";

const services = [
  {
    id: 1,
    icon: home1, // Replace with actual icon path
    title: "SELL YOUR HOME",
    description:
      "We do a free evaluation to be sure you want to start selling.",
  },
  {
    id: 2,
    icon: home2,
    title: "BUY A HOME",
    description:
      "We do a free evaluation to be sure you want to start selling.",
  },
  {
    id: 3,
    icon: home3,
    title: "HOME INSPECTION",
    description:
      "We do a free evaluation to be sure you want to start selling.",
  },
  {
    id: 4,
    icon: home4,
    title: "LEGAL SERVICES",
    description:
      "We do a free evaluation to be sure you want to start selling.",
  },
  {
    id: 5,
    icon: home5,
    title: "FREE EVALUATION",
    description:
      "We do a free evaluation to be sure you want to start selling.",
  },
  {
    id: 6,
    icon: home6,
    title: "HOME INSPECTION",
    description:
      "We do a free evaluation to be sure you want to start selling.",
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-linear-to-b from-cyan-50 to-white">
      <div className="max-w-6xl mx-auto p-6 flex ">
        {/* Section Title */}
        <div className="flex items-center flex-col gap-12 mt-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 -rotate-90">
            Services
          </p>
          <div className="w-1 h-16 bg-purple-500"></div>
        </div>

        <div>
          {/* Section Title */}
          <h2 className="text-3xl font-bold mt-2 mb-8">
            EXCLUSIVE. COMMITTED. PROFESSIONAL <br />
            SERVICES WE CAN OFFER YOU
          </h2>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-500 text-sm mt-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
