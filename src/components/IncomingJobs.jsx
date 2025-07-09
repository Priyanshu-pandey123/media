const IncomingJobs = () => {
  const tabs = ["Today", "This Week", "This Month"];
  const activeTab = "Today";

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Incoming Jobs</h2>
        <div className="flex bg-gray-100 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                tab === activeTab
                  ? "bg-primary-600 text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-64 mb-4">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          {/* Grid lines */}
          <defs>
            <pattern
              id="grid"
              width="40"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 20"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Y-axis labels */}
          <text x="10" y="20" className="text-xs fill-gray-400">
            60+
          </text>
          <text x="10" y="50" className="text-xs fill-gray-400">
            50
          </text>
          <text x="10" y="80" className="text-xs fill-gray-400">
            40
          </text>
          <text x="10" y="110" className="text-xs fill-gray-400">
            30
          </text>
          <text x="10" y="140" className="text-xs fill-gray-400">
            20
          </text>
          <text x="10" y="170" className="text-xs fill-gray-400">
            10
          </text>
          <text x="10" y="195" className="text-xs fill-gray-400">
            0
          </text>

          {/* Chart line */}
          <path
            d="M 40 120 Q 80 110 120 140 T 200 100 T 280 80 T 360 60"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            className="drop-shadow-sm"
          />

          {/* Data points */}
          <circle
            cx="280"
            cy="80"
            r="4"
            fill="#3b82f6"
            className="drop-shadow-sm"
          />

          {/* Highlighted point */}
          <rect x="265" y="40" width="30" height="20" rx="4" fill="#3b82f6" />
          <text
            x="280"
            y="53"
            className="text-xs fill-white font-medium text-anchor-middle"
          >
            27
          </text>
        </svg>

        {/* X-axis labels */}
        <div className="flex justify-between text-xs text-gray-400 mt-2 px-8">
          <span>
            MON
            <br />
            10 May
          </span>
          <span>
            TUE
            <br />
            11 May
          </span>
          <span>
            WED
            <br />
            11 May
          </span>
          <span className="text-primary-600 font-medium">
            THU
            <br />
            12 May
          </span>
          <span>
            FRI
            <br />
            13 May
          </span>
          <span>
            SAT
            <br />
            14 May
          </span>
          <span>
            SUN
            <br />
            15 May
          </span>
        </div>
      </div>
    </div>
  );
};

export default IncomingJobs;
