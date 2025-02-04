import { useDispatch } from "react-redux";
import { currentTab } from "../store/gallerySlice";

const tabs = [
  "Popular",
  "All",
  "Videos",
  "Politics",
  "Tech",
  "Healthy",
  "Science",
];

export default function TabBar({
  activeTab,
  setActiveTab,
  isVideo,
  setIsVideo,
}) {
  const dispatch = useDispatch();
  const handleCLick = (tab) => {
    dispatch(currentTab(tab));
    if (tab == "Videos") {
      setIsVideo(false);
    } else {
      setIsVideo(true);
    }
  };

  return (
    <div className="container mt-5 my-auto px-4 overflow-x-auto hide-scrollbar">
      <div className="flex space-x-6 py-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-2 py-1 font-medium ${
              activeTab === tab
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <span className="text-xl" onClick={() => handleCLick(tab)}>
              {tab}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
