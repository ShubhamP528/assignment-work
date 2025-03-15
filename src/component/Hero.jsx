import React from "react";
import mainImg from "../assets/main.png";
import logoImg from "../assets/logo.png";
import fbImg from "../assets/facebook.png";
import xImg from "../assets/twitter.png";
import pinterestImg from "../assets/pinterest.png";
import youtubeImg from "../assets/youtube.png";
import linkedinImg from "../assets/linkedin.png";
import instagramImg from "../assets/instagram.png";
import commentsImg from "../assets/comments.png";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${mainImg})` }}
    >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} // Adjust the opacity value (0.3 = 30%)
      ></div>
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0  bg-opacity-70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-white text-sm">
          {/* Social Media Icons */}
          <div className="flex">
            {/* Facebook */}
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 border-l border-white/50 hover:bg-white/10"
            >
              <img src={fbImg} alt="" width={16} height={15} />
            </a>
            {/* Twitter */}
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 border-l border-white/50 hover:bg-white/10"
            >
              <img src={xImg} alt="" width={16} height={15} />
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 border-l border-white/50 hover:bg-white/10"
            >
              <img src={linkedinImg} alt="" width={16} height={15} />
            </a>
            {/* Pinterest */}
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 border-l border-white/50 hover:bg-white/10"
            >
              <img src={pinterestImg} alt="" width={16} height={15} />
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 border-l border-white/50 hover:bg-white/10"
            >
              <img src={instagramImg} alt="" width={16} height={15} />
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 border-l border-r border-white/50 hover:bg-white/10"
            >
              <img src={youtubeImg} alt="" width={16} height={15} />
            </a>
          </div>

          {/* Contact Email */}
          <div className="hidden md:flex items-center space-x-2 border-x border-white/50">
            <span className="flex items-center justify-center w-8 h-8 hover:bg-white/10">
              <img src={commentsImg} alt="" width={16} height={15} />
            </span>
            <span className="mr-1">contact@krystelleromy.com</span>
          </div>
        </div>
      </div>

      <div className="absolute top-8 left-0 right-0 w-[100%] h-[1px] bg-gray-400"></div>

      {/* Navbar */}
      <nav className="absolute top-10 left-0 right-0 flex justify-between items-center px-36 py-4 text-white">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logoImg} alt="Logo" width={41} height={44} />
          <span className="text-lg font-bold">
            KRYSTELLE ROMY
            <br /> <span>RESIDENCE</span>{" "}
          </span>
        </div>

        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-6 text-md font-semibold">
          <li>
            <a href="#" className="hover:text-gray-300">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              SELL
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              BUY
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              ACTIVE LISTINGS
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              CONTACT
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              BLOGS
            </a>
          </li>
        </ul>
      </nav>
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-screen text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          FIND YOUR DREAM HOUSE
        </h1>
        <p className="text-lg md:text-base mb-6 max-w-2xl">
          We are recognized for exceeding client expectations and delivering
          great results through dedication, ease of process, and extraordinary
          services to our worldwide clients.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black">
            WHAT'S MY HOME WORTH
          </button>
          <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black">
            WORK WITH KRYSTELLE
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex w-full max-w-lg bg-gray-300 gap-2 p-2 rounded-lg overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="Enter an address, city or neighborhood"
            className="w-full p-3 text-gray-700 bg-white focus:outline-none rounded-lg"
          />
          <button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 text-nowrap rounded-lg">
            SEARCH LISTINGS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
