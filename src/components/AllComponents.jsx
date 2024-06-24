import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
]);

const AllComponents = () => {
  return (
    <div>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
};

export default AllComponents;
