import Navigation from "./components/Navigation";
import Header from "./components/Header";
import UpcomingJobs from "./components/UpcomingJobs";
import TodaysStats from "./components/TodaysStats";
import IncomingJobs from "./components/IncomingJobs";
import JobsAssigned from "./components/JobsAssigned";
import Invoicing from "./components/Invoicing";

const App = () => {
  return (
    <div className="min-h-screen bg-[#E8E4FF]">
      <Navigation />
      <Header />

      <div className="px-8 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-3">
            <UpcomingJobs />
          </div>

          {/* Middle Column */}
          <div className="col-span-3 space-y-6">
            <TodaysStats />
            <JobsAssigned />
          </div>

          {/* Right Column */}
          <div className="col-span-6 space-y-6">
            <IncomingJobs />
            <Invoicing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
