import React from "react";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";

const newsArticles = [
  {
    id: 1,
    title: "Top 10 best appreciating condos in Las Vegas",
    image: banner1,
    link: "#",
  },
  {
    id: 2,
    title: "The top 5 most livable Las Vegas neighborhood",
    image: banner2,
    link: "#",
  },
  {
    id: 3,
    title: "In Las Vegas home prices have doubled in the...",
    image: banner3,
    link: "#",
  },
  {
    id: 4,
    title: "Las Vegas neighborhood where it's better....",
    image: banner4,
    link: "#",
  },
];

const RealEstateNews = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 mt-20">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-black mb-8">
        THE MOST RECENT <br /> LOCAL REAL ESTATE NEWS
      </h2>

      {/* News Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newsArticles.map((article) => (
          <div key={article.id} className="relative group">
            {/* News Image with hover brightness filter */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-80 object-cover rounded-lg shadow-lg transition-all duration-300 filter group-hover:brightness-75"
            />

            {/* Overlay with Text */}
            <div className="absolute inset-0 rounded-lg flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <a href={article.link} className="text-sm underline mt-2">
                Continue reading &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RealEstateNews;
