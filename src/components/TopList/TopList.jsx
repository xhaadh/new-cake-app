import React from "react";
import Image1 from "../../assets/Cake-1.png";
import Image2 from "../../assets/Cake-2.png";
import Image3 from "../../assets/Cake-3.png";

const FoodData = [
  {
    id: 1,
    image: Image1,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Classic Chocolate Cake",
    desc: "Rich chocolate cake with velvety ganache.",
  },
  {
    id: 2,
    image: Image2,
    rating: "⭐⭐⭐⭐⭐",
    price: "$12.50",
    name: "Strawberry Delight",
    desc: "Light sponge with fresh cream and strawberries.",
  },
  {
    id: 3,
    image: Image3,
    rating: "⭐⭐⭐⭐⭐",
    price: "$9.99",
    name: "Vanilla Cloud",
    desc: "Soft vanilla cake topped with buttercream.",
  },
];

export default function TopList() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p>Freshly Baked For You</p>
      </div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Top Selling</h2>
        </div>
        <button
          className="hidden sm:inline-block text-sm font-medium px-3 py-2 rounded-md border hover:bg-gray-50"
          aria-label="View all"
        >
          View all
        </button>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FoodData.map((item) => (
          <li
            key={item.id}
            className="bg-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-48 object-contain"
              />

              {/* small badge for #1 */}
              {item.id === 1 && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full">Top</span>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <span className="text-sm font-semibold">{item.price}</span>
              </div>

              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm" aria-label={`Rating: ${item.rating}`}>
                  {item.rating}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="px-3 py-1 rounded-md border text-sm hover:bg-gray-50"
                    aria-label={`Add ${item.name} to cart`}
                  >
                    Add
                  </button>

                  <button
                    className="px-3 py-1 rounded-md bg-gradient-to-r from-orange-500 to-orange-400 text-white text-sm shadow-md"
                    aria-label={`Buy ${item.name} now`}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
