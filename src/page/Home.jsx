import React from "react";
import baseImage from "../assets/new.jpeg";
import logo from "../assets/logo.png";

import { Link } from "react-router-dom";
import GalleryNav from "../component/GalleryNAv";

const Home = () => {
  return (
    <>
      <div className="max-w-screen h-screen flex justify-center items-cente flex-col">
        <img className="w-auto h-60" src={logo} alt="home image not found" />
        <Link
          to="/auth"
          className=" font-sans text-center text-lg px-7 py-5 bg-blue-500 w-fit mx-auto  
          homeButton"
        >
          Welcome To News With Evidence{" "}
        </Link>
      </div>
    </>
  );
};

export default Home;
