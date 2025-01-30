import React from "react";
import { posts } from "../utils/post";
import { Gallery } from "../component/Gallery";
import Footer from "./Footer";

const GalleryContainer = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {posts.map((post) => (
            <Gallery key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryContainer;
