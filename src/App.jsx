import Navigation from "./components/Navigation";
import Header from "./components/Header";
import UpcomingJobs from "./components/UpcomingJobs";
import TodaysStats from "./components/TodaysStats";
import IncomingJobs from "./components/IncomingJobs";
import JobsAssigned from "./components/JobsAssigned";
import InvoiceSummary from "./components/InvoiceSummary";
import PaymentCards from "./components/PaymentCards";
import { DollarSign } from "lucide-react";

const invoiceData = [
  { amount: "$176,772", label: "Due", color: "text-red-500" },
  { amount: "$122,644", label: "Paid", color: "text-green-500" },
];

const invoiceStats = [
  { number: "49", label: "Currently invoices due" },
  { number: "543", label: "All time paid invoices" },
];

const paymentCards = [
  {
    amount: "$400.00",
    label: "In Transit",
    color: "text-orange-500",
    icon: <DollarSign size={20} />,
  },
  {
    amount: "$125.77",
    label: "Overdue",
    color: "text-primary-500",
    icon: <DollarSign size={20} />,
  },
  {
    amount: "$443.74",
    label: "Due",
    color: "text-red-500",
    icon: <DollarSign size={20} />,
  },
  {
    amount: "$1,342.00",
    label: "Successful",
    color: "text-green-500",
    icon: <DollarSign size={20} />,
  },
  {
    amount: "$125.77",
    label: "Failed",
    color: "text-red-500",
    icon: <DollarSign size={20} />,
  },
];

const App = () => {
  return (
    <div className="min-h-screen w-screen bg-[#E8E4FF] flex flex-col">
      <Navigation />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-4 bg-[#F6F7FB] rounded-b-2xl flex flex-col">
        <Header />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-10 gap-6 items-stretch flex-1">
          {/* Upcoming Jobs & Jobs Assigned */}
          <div className="md:col-span-3 col-span-1 flex flex-col gap-3 h-full">
            <UpcomingJobs />
            <JobsAssigned />
          </div>
          {/* Today's Stats & Invoice Summary */}
          <div className="md:col-span-3 col-span-1 flex flex-col gap-6 h-full">
            <TodaysStats />
            <InvoiceSummary
              invoiceData={invoiceData}
              invoiceStats={invoiceStats}
            />
          </div>
          {/* Incoming Jobs & Payment Cards */}
          <div className="md:col-span-4 col-span-1 flex flex-col gap-6 h-full">
            <IncomingJobs />
            <PaymentCards paymentCards={paymentCards} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
