import React from "react";
import Home from "../Home/home";
import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error";
import App from "../../App";
import FoodSection from "../Pages/FoodSecton/FoodSection";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import Footer from "../Pages/Footer/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/foodSection",
        element: <FoodSection />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
]);

export default router;
