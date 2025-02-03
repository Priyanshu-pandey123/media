import React, { useState } from "react";
import { posts } from "../utils/post";
import { Gallery } from "../component/Gallery";
import Footer from "./Footer";
import GalleryNav from "../component/GalleryNav";

const GalleryContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("G.T Road, Kolkata");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Popular");
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === "All" || activeTab === "Popular";
    return matchesSearch && matchesCategory;
  });
  return (
    <div className="min-h-screen bg-gray-100">
      <GalleryNav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        isLocationOpen={isLocationOpen}
        setIsLocationOpen={setIsLocationOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className=" max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
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
