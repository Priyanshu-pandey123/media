import { FaSearch } from "react-icons/fa";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="mt-4 relative">
      <input
        type="text"
        placeholder="Search news..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
}
