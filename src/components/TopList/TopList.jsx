import React from "react";
import Image1 from "../../assets/Cake-1.png";
import Image2 from "../../assets/Cake-2.png";
import Image3 from "../../assets/Cake-3.png";

/* simple inline SVG placeholder used when an image fails to load */
const PLACEHOLDER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
       <rect width="100%" height="100%" fill="#f3f4f6"/>
       <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-size="18">Image not available</text>
     </svg>`
  );

/* static data kept local for stability */
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
  // ensure we always have an array to render
  const items = Array.isArray(FoodData) ? FoodData : [];

  return (
    <section className="container py-14" aria-labelledby="toplist-heading">
      <header className="text-center mb-12">
        <h2 id="toplist-heading" className="text-4xl font-semibold">
          Top List
        </h2>
        <p className="text-gray-600 mt-2">Our top picks — freshly baked and loved by customers.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item) => {
          // use name as key when available; fallback to safe random key
          const key = item && item.name ? item.name : Math.random().toString(36).slice(2, 9);

          return (
            <article
              key={key}
              className="bg-white/60 p-5 rounded-2xl transform hover:scale-105 transition duration-300 shadow-sm"
              aria-label={item?.name ?? "menu item"}
            >
              <div className="flex justify-center">
                <img
                  src={item?.image ?? PLACEHOLDER}
                  alt={item?.name ?? "Cake image"}
                  onError={(e) => {
                    const imgEl = e.currentTarget;
                    if (imgEl && imgEl.src !== PLACEHOLDER) imgEl.src = PLACEHOLDER;
                  }}
                  className="w-36 h-36 object-cover rounded-full"
                  loading="lazy"
                  width={144}
                  height={144}
                />
              </div>

              <div className="mt-4 text-center space-y-1">
                <div className="text-sm text-red-500" aria-hidden>
                  {item?.rating ?? "⭐⭐⭐⭐⭐"}
                </div>

                <h3 className="text-lg font-semibold">{item?.name ?? "Delicious Cake"}</h3>
                <p className="text-sm text-gray-600">{item?.desc ?? "Tasty and fresh."}</p>
                <div className="text-lg font-semibold mt-1">{item?.price ?? "-"}</div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <button
          type="button"
          className="inline-block px-6 py-3 rounded-full font-semibold bg-orange-500 text-white hover:bg-pink-600 transition"
          // onClick={() => {
          //   // temporary demo action — replace with navigation or load-more logic
          //   // eslint-disable-next-line no-alert
          //   alert("View more clicked — implement navigation or load logic here.");
          // }}
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default TopList;
