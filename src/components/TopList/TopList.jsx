import React from "react";
import Image1 from "../../assets/1.png";
import Image2 from "../../assets/2.png";
import Image3 from "../../assets/3.png";

const TopList = () => {
  return (
    <section className="container py-14">
      {/* header section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p className="text-gray-600 mt-2">
          Our top picks freshly baked and loved by customers.
        </p>
      </header>

      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <article className="bg-white/50 p-5 lg:p-6 rounded-3xl transform hover:scale-105 transition duration-300 shadow text-center">
          <img
            src={Image1}
            alt="Classic Chocolate Cake"
            className="w-40 h-40 mx-auto object-cover rounded-full img-shadow"
            // loading="lazy"
          />
          <div className="space-y-2 mt-4">
            <p className="text-red-500">⭐⭐⭐⭐⭐</p>
            <p className="text-lg font-semibold">Classic Chocolate Cake</p>
            <p className="text-sm text-gray-600">
              Rich chocolate cake with velvety ganache.
            </p>
            <p className="text-lg font-semibold">$10.99</p>
          </div>
        </article>

        {/* Card 2 */}
        <article className="bg-white/50 p-5 lg:p-6 rounded-3xl transform hover:scale-105 transition duration-300 shadow text-center">
          <img
            src={Image2}
            alt="Strawberry Delight"
            className="w-40 h-40 mx-auto object-cover rounded-full img-shadow"
            // loading="lazy"
          />
          <div className="space-y-2 mt-4">
            <p className="text-red-500">⭐⭐⭐⭐⭐</p>
            <p className="text-lg font-semibold">Strawberry Delight</p>
            <p className="text-sm text-gray-600">
              Light sponge with fresh cream and strawberries.
            </p>
            <p className="text-lg font-semibold">$12.50</p>
          </div>
        </article>

        {/* Card 3 */}
        <article className="bg-white/50 p-5 lg:p-6 rounded-3xl transform hover:scale-105 transition duration-300 shadow text-center">
          <img
            src={Image3}
            alt="Vanilla Cloud"
            className="w-40 h-40 mx-auto object-cover rounded-full img-shadow"
            // loading="lazy"
          />
          <div className="space-y-2 mt-4">
            <p className="text-red-500">⭐⭐⭐⭐⭐</p>
            <p className="text-lg font-semibold">Vanilla Cloud</p>
            <p className="text-sm text-gray-600">
              Soft vanilla cake topped with buttercream.
            </p>
            <p className="text-lg font-semibold">$9.99</p>
          </div>
        </article>
      </div>

      {/* View More button */}
      <div className="text-center mt-12">
        <button className="bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary/80 transition duration-300">
          View More
        </button>
      </div>
    </section>
  );
};

export default TopList;
