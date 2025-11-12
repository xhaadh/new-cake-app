import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopList from "./components/TopList/TopList";
import Banner from "./components/Banner/Banner";
import OurServices from "./components/OurServices/OurServices";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div className="overflow-x-hidden bg-gray-200">
      <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
        <Navbar />
        <Hero />
        <TopList />
        <Banner />
        <Testimonial/>
        <OurServices />
        <Footer/>
      </div>
    </div>
  );
};

export default App;
