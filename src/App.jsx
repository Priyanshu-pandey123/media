import Navigation from "./components/Navigation";
import Header from "./components/Header";
import UpcomingJobs from "./components/UpcomingJobs";
import TodaysStats from "./components/TodaysStats";
import IncomingJobs from "./components/IncomingJobs";
import JobsAssigned from "./components/JobsAssigned";
import Invoicing from "./components/Invoicing";

const App = () => {
  return (
    <div className="min-h-screen bg-[#E8E4FF] flex flex-col">
      <Navigation />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-4 bg-[#F6F7FB] rounded-b-2xl">
        <Header />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="lg:col-span-2 md:col-span-1 col-span-1">
            <div className="flex flex-col gap-3">
              <UpcomingJobs />
              <JobsAssigned />
            </div>
          </div>
          {/* Today's Stats */}
          <div className="lg:col-span-2 md:col-span-1 col-span-1 flex flex-col gap-6">
            <TodaysStats />
          </div>
          {/* Incoming Jobs & Invoicing */}
          <div className="lg:col-span-2 md:col-span-1 col-span-1 flex flex-col gap-6">
            <IncomingJobs />
            <Invoicing />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
