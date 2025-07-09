import { Filter } from "lucide-react";

const UpcomingJobs = () => {
  const jobs = [
    {
      id: "STC AAA A407",
      time: "2:00 PM - 3:00 PM",
      location: "Viewing Home Tour",
      color: "from-orange-400 to-orange-600",
      textColor: "text-white",
      customer: "John Smith",
    },
    {
      id: "STC AAA A407",
      time: "4:00 PM - 5:00 PM",
      location: "Viewing Home Tour",
      color: "from-purple-400 to-purple-600",
      textColor: "text-white",
      customer: "Mark Tech",
    },
    {
      id: "STC AAA A407",
      time: "6:00 PM - 7:00 PM",
      location: "Viewing Home Tour",
      color: "from-teal-400 to-teal-600",
      textColor: "text-white",
      customer: "Wilson Smith",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Upcoming Jobs</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <Filter size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${job.color} rounded-lg p-4 ${job.textColor} relative overflow-hidden`}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{job.id}</span>
                <div className="w-6 h-6 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">
                    {job.customer.split(" ")[0][0]}
                  </span>
                </div>
              </div>
              <div className="text-xs opacity-90 mb-1">{job.time}</div>
              <div className="text-xs opacity-80">{job.location}</div>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-6 -mt-6"></div>
          </div>
        ))}
      </div>

      <button className="text-primary-600 text-sm font-medium mt-4 hover:text-primary-700">
        View All
      </button>
    </div>
  );
};

export default UpcomingJobs;
