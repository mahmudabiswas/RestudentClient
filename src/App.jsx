import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Home/Navbar/Navbar";
import BannerSlider from "./Components/Home/home/BannerSlider";
import ScroolTop from "./Components/Hooks/ScroolTop";

function App() {
  return (
    <>
      <ScroolTop />
      <Navbar />
      {/* <ScroolTop /> */}

      <Outlet />
    </>
  );
}

export default App;
