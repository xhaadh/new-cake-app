import React from "react";

const Navbar = () => {
  return (
    <div className=" py-4 lg:py-6">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <p className="text-3xl lg:text-4xl font-semibold">
            CAKE<span className="text-primary">SHOP</span>
          </p>
        </div>
        {/* Menu section */}
        <div className="flex justify-center items-center gap-10">
          <ul className="gap-8 hidden sm:flex">
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer">Home</li>
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer">Menu</li>
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer">About</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
