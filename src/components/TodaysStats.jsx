const TodaysStats = () => {
  const stats = [
    { label: 'Money Earned', value: '$130.00', color: 'text-gray-800' },
    { label: 'Money Collected', value: '$61.00', color: 'text-gray-800' },
    { label: 'Money Refunded', value: '$24.00', color: 'text-gray-800' },
  ];

  const jobStats = [
    { label: 'Jobs Completed', value: '14', color: 'text-gray-800' },
    { label: 'Jobs Assigned', value: '19', color: 'text-gray-800' },
    { label: 'Jobs Cancelled', value: '03', color: 'text-gray-800' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Today's Stats</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-4">Money</h3>
          <div className="space-y-3">
            {stats.map((stat, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{stat.label}</span>
                <span className={`text-sm font-medium ${stat.color}`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-4">Jobs</h3>
          <div className="space-y-3">
            {jobStats.map((stat, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{stat.label}</span>
                <span className={`text-sm font-medium ${stat.color}`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysStats;