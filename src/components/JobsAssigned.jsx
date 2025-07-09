const JobsAssigned = () => {
  const percentage = 58;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const tabs = ["Daily", "Weekly", "This Month"];
  const activeTab = "Daily";

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Jobs Assigned</h2>
        <div className="flex bg-gray-100 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-2 py-1 rounded-md text-xs font-medium transition-colors ${
                tab === activeTab
                  ? "bg-violet-600 text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <svg className="w-44 h-44 transform -rotate-90" viewBox="0 0 176 176">
            {/* Background circle */}
            <circle
              cx="88"
              cy="88"
              r="70"
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="88"
              cy="88"
              r="70"
              stroke="#7c3aed"
              strokeWidth="12"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-300 ease-in-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">
                {percentage}%
              </div>
              <div className="text-xs text-gray-500">This month</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-center">
        <div>
          <div className="flex items-center justify-center mb-2">
            <div className="w-4 h-4 bg-violet-600 rounded-full mr-2"></div>
            <span className="text-xs font-medium text-gray-600">
              Total Assigned
            </span>
          </div>
          <div className="text-sm font-semibold text-gray-800">584</div>
        </div>
        <div>
          <div className="flex items-center justify-center mb-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
            <span className="text-xs font-medium text-gray-600">
              Total Incoming
            </span>
          </div>
          <div className="text-sm font-semibold text-gray-800">1026</div>
        </div>
      </div>
    </div>
  );
};

export default JobsAssigned;
