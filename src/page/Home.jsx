import React from "react";
import baseImage from "../assets/new.jpeg";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <img
          className="flex justify-center align-middle w-40 h-40 "
          src={baseImage}
          alt="home image not found"
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
