import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 justify-center bg-cyan-50 mt-5 rounded-lg h-auto md:h-[550px]">
      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/3 overflow-y-visible h-fit">
        <h3 className="text-lg font-semibold mb-4">Send a message today</h3>
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="+1 (234) 567-890"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="johndoe@placeholder.com"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Message in 100-150 words"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            SEND EMAIL
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="p-10 rounded-lg w-full md:w-1/2 my-auto">
        <p className="text-blue-600 font-semibold uppercase">
          Let’s Grab Coffee
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Get in touch with me to plan your next real estate
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Our experts and developers would love to contribute their expertise
          and insights to help you today. Contact us to help you plan your next
          transaction, either buying or selling a home.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
