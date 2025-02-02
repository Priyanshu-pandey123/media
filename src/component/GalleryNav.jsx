import React from "react";
import { auth } from "../utils/firebaseApp";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const GalleryNav = () => {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to the login page
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo or Brand Name */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-800">
              News With Evidence
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Profile and Sign Out */}
          <div className="flex items-center space-x-4">
            {/* Profile Picture */}
            <div className="relative">
              <img
                src="https://i.pravatar.cc/150?img=1"
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </div>

            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GalleryNav;
