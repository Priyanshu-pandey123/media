import { Menu, Bell } from "lucide-react";
import LocationSelector from "../component/LocationSelector";
import SearchBar from "../component/SearchBar";
import TabBar from "../component/TabBar";
import MenuDrawer from "../component/MenuDrawer";

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
}) {
  return (
    <>
      <header className="bg-white shadow-md">
        <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        <div className="container mx-auto px-4 py-3">
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
            </div>
          </div>

          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </header>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}
