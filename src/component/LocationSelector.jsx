import { FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

const locations = [
  "G.T Road, Kolkata",
  "Park Street, Kolkata",
  "Salt Lake, Kolkata",
  "Howrah, West Bengal",
  "New Town, Kolkata",
];

export default function LocationSelector({
  selectedLocation,
  setSelectedLocation,
  isLocationOpen,
  setIsLocationOpen,
}) {
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsLocationOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsLocationOpen(!isLocationOpen)}
        className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg px-2 py-1"
      >
        <FaMapMarkerAlt className="text-gray-600" />
        <span className="text-gray-800 font-medium">{selectedLocation}</span>
        <FaChevronDown className="text-gray-600 text-sm" />
      </button>

      {isLocationOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => handleLocationSelect(location)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
            >
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span className="text-gray-700">{location}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
