import React from "react";
import Image1 from "../../assets/Cake-1.png";
import Image2 from "../../assets/Cake-2.png";
import Image3 from "../../assets/Cake-3.png";

/**
 * Fallback SVG data URL used when an image fails to load.
 * You can replace this with a local placeholder image if you prefer.
 */
const PLACEHOLDER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
       <rect width="100%" height="100%" fill="#f3f4f6"/>
       <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-size="20">Image not available</text>
     </svg>`
  );

const FoodData = [
  {
    image: Image1,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Classic Chocolate Cake",
    desc: "Rich chocolate cake with velvety ganache.",
  },
  {
    image: Image2,
    rating: "⭐⭐⭐⭐⭐",
    price: "$12.50",
    name: "Strawberry Delight",
    desc: "Light sponge with fresh cream and strawberries.",
  },
  {
    image: Image3,
    rating: "⭐⭐⭐⭐⭐",
    price: "$9.99",
    name: "Vanilla Cloud",
    desc: "Soft vanilla cake topped with buttercream.",
  },
];

const TopList = () => {
  // Defensive: ensure FoodData is an array
  const list = Array.isArray(FoodData) ? FoodData : [];

  return (
    <section className="container py-14">
      {/* header section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p className="text-gray-600 mt-2">Our top picks — freshly baked and loved by customers.</p>
      </header>

      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {list.map((item) => {
          // stable key fallback if name absent
          const key = item?.name ?? Math.random().toString(36).slice(2, 9);

          return (
            <article
              key={key}
              className="bg-white/50 p-5 lg:p-6 rounded-3xl transform hover:scale-105 transition duration-300 shadow"
              aria-label={item?.name ?? "food item"}
            >
              <img
                src={item?.image ?? PLACEHOLDER}
                alt={item?.name ?? "Food image"}
                onError={(e) => {
                  // set fallback placeholder if image fails to load
                  if (e.currentTarget.src !== PLACEHOLDER) {
                    e.currentTarget.src = PLACEHOLDER;
                  }
                }}
                className="w-40 h-40 mx-auto object-cover rounded-full img-shadow"
                loading="lazy"
                width={240}
                height={240}
              />

              <div className="space-y-2 mt-4 text-center">
                <p className="text-red-500" aria-hidden>
                  {item?.rating ?? "⭐⭐⭐⭐⭐"}
                </p>
                <p className="text-lg font-semibold">{item?.name ?? "Unknown Cake"}</p>
                <p className="text-sm text-gray-600">{item?.desc ?? "Delicious cake."}</p>
                <p className="text-lg font-semibold">{item?.price ?? "-"}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="text-center mt-12">
        <button className="bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary/80 transition duration-300">
          View More
        </button>
      </div>
    </section>
  );
};

export default TopList;
