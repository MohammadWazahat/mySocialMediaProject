import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import MyProfile from "./myProfile/MyProfile";
import MySavedPosts from "./savedPosts/MySavedPosts";
import OtherUsersProfile from "./otherUsersProfiles/OtherUsersProfile";
import Following from "./following/Following";

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
  {
    path: "/myProfile",
    element: (
      <>
        <Navbar />
        <MyProfile />
        <Footer />
      </>
    ),
  },
  {
    path: "/mySavedPosts",
    element: (
      <>
        <Navbar />
        <MySavedPosts />
        <Footer />
      </>
    ),
  },
  {
    path: "/searchUsers",
    element: (
      <>
        <Navbar />
        <OtherUsersProfile />
        <Footer />
      </>
    ),
  },
  {
    path: "/followings",
    element: (
      <>
        <Navbar />
        <Following/>
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
