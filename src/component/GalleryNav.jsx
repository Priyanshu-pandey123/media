import { Menu, Bell, User, LogOut } from "lucide-react";
import LocationSelector from "../component/LocationSelector";
import SearchBar from "../component/SearchBar";
import TabBar from "../component/TabBar";
import MenuDrawer from "../component/MenuDrawer";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebaseApp";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function GalleryNav({
  isMenuOpen,
  setIsMenuOpen,
  selectedLocation,
  setSelectedLocation,
  isLocationOpen,
  setIsLocationOpen,
  searchQuery,
  setSearchQuery,
  activeTab,
  setActiveTab,
  isVideo,
  setIsVideo,
}) {
  const [user, setUser] = useState(null);
  const [showMobileWarning, setShowMobileWarning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Check if device is mobile
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 768;
      setShowMobileWarning(!isMobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      {showMobileWarning && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                This website is optimized for mobile devices. For the best experience, please view on a mobile device.
              </p>
            </div>
          </div>
        </div>
      )}

      <header className="bg-white shadow-md">
        <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-600 hover:text-gray-800"
              >
                <Menu size={24} />
              </button>
              <LocationSelector
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                isLocationOpen={isLocationOpen}
                setIsLocationOpen={setIsLocationOpen}
              />
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                <span className="text-yellow-600 font-medium">599</span>
              </div>
              <Bell size={24} className="text-gray-600" />

              {user ? (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => navigate("/profile")}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <User size={24} className="text-gray-600" />
                  </button>
                  <button
                    onClick={handleLogout}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <LogOut size={24} className="text-gray-600" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => navigate("/auth")}
                  className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                >
                  <User size={20} className="sm:mr-1" />
                  <span className="hidden sm:inline">Login</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
      <TabBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isVideo={isVideo}
        setIsVideo={setIsVideo}
      />
    </>
  );
}
