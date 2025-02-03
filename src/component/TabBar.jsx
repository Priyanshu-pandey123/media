const tabs = ["Popular", "All", "Politics", "Tech", "Healthy", "Science"];

export default function TabBar({ activeTab, setActiveTab }) {
  return (
    <div className="container mx-auto px-4 overflow-x-auto hide-scrollbar">
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
            <span className="text-xl">{tab}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
