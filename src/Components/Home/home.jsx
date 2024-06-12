import React from "react";

import "./Navbar/Navbar.css";
import BannerSlider from "./home/BannerSlider";
import FoodSection from "../Pages/FoodSecton/FoodSection";
import Footer from "../Pages/Footer/footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <BannerSlider />
      <FoodSection />

      <Footer />
    </div>
  );
};

export default Home;
