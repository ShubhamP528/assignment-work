import React from "react";

import girl from "../assets/girl.png";

const AgentProfile = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto p-4 sm:p-6">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-2 sm:p-4">
        <img
          src={girl} // Replace with actual image path
          alt="Krystelle Romy"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 p-2 sm:p-4 my-auto text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
          MEET KRYSTELLE ROMY
        </h2>
        <p className="text-gray-700 mb-2 sm:mb-4 text-sm sm:text-base">
          Helping you achieve your real estate goals is my top priority. When we
          work together, it is about YOU. I listen to your needs, work
          diligently to achieve your objectives, and strive to always exceed
          your expectations.
        </p>
        <p className="text-gray-700 text-sm sm:text-base">
          Krystelle’s outcome-driven approach, uprightness, and genuineness have
          procured her top-maker status and 5-star reviews from her clients. She
          uses the most important innovation, custom advertising methodologies,
          and top-to-bottom market information to gain an edge over different
          specialists. Krystelle pays attention to her clients’ objectives, lays
          out a customized plan, and ensures an outstanding experience from
          start to finish.
        </p>
      </div>
    </div>
  );
};

export default AgentProfile;
