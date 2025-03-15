import React from "react";
import room from "../assets/room.png";

const properties = [
  {
    id: 1,
    image: room, // Replace with actual image URL
    title: "Villa with Amazing View",
    price: "$600,000",
    description:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay...",
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 2,
    image: room,
    title: "Villa with Amazing View",
    price: "$600,000",
    description:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay...",
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 3,
    image: room,
    title: "Villa with Amazing View",
    price: "$600,000",
    description:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay...",
    bedrooms: 4,
    bathrooms: 3,
  },
];

const RealEstateListings = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 flex ">
      {/* Section Title */}
      <div className="flex items-center flex-col gap-12 mt-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 -rotate-90">
          Properties
        </p>
        <div className="w-1 h-16 bg-purple-500"></div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mt-2 mb-6">
          Explore the Latest Properties <br /> and Select Your Home
        </h2>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <p className="text-blue-600 font-bold">{property.price}</p>
                <p className="text-gray-500 text-sm mt-2">
                  {property.description}
                </p>
                <div className="flex justify-between text-gray-700 text-sm mt-4">
                  <span>
                    <img
                      className="inline-block"
                      alt=""
                      src="https://s3-alpha-sig.figma.com/img/4f7a/3ead/84abff7bd037a7fafa7465df4adefee2?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mqpeVO79DzUzOYz5ehb~95oJlBQlTksZrA20XPdz1dBaDNfTVa1ULIA2LPT5C3AOxWe435vrPxR6QWdRAOuTAvIITAb1LaALM2j8ETDY79DDbygqyIiTQ8HRf50ExMx0o6ftyuiTcAZn-o7mf3dfAzoQdLgGCs5DNuMw8UP7oI1FRX4hge2oyn2pyOm4hBPe0t5i8c3mAuNxOwQ1pgvUp0hPETPorxNI6xAr7eP78LMIdKOa~V1pEHaPmDc7WQNKFHHlqprNSHELpW-1KgsMB8UNEuiGud5oVOwRgJvCS6BDMFfAot3F7E4udz62kLCC7F1buXAd7A958CYdNU3ZeQ__"
                      height={16}
                      width={16}
                    />{" "}
                    <span>{property.bedrooms} Bedroom</span>
                  </span>
                  <span>
                    <img
                      className="inline-block"
                      height={16}
                      width={16}
                      alt=""
                      src="https://s3-alpha-sig.figma.com/img/8723/9179/f080d066c5d9d73ae0fc26bcd5d2ccf0?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cUZZaj1BjzyPBmUaqcxZQQ1IQWy9DpbvAhZzaNFv469TGkg8TBzUyVbz-yQ-5eIjj7Wspe7hQgavuYqsg5m2ARtHTYD19HHt8Ae3tm8cQpdl7TKePWNd8P8hl5fZfDR46RhCnU6TnVikm5ZU3~UHDIFE4Z3Qzmuook2nXx~SAbEq4XHCBHe4m7LMsHizmIBPHSO174KAij2DtQV8fyIxX5jciuTgIcYGbJ6DLM7LNu3U7AYWHRvS89T8cqZCweV2CyhODG8ik2M15iYhD71Wcu46I8gfQy0yW3tRURcFkeSnbgbhUNaG6KYDfeFdQYSBV6s317S5Qe8bwUPApa1qbg__"
                    />{" "}
                    {property.bathrooms} Bathroom
                  </span>
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
