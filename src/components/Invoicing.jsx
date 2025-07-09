import { DollarSign } from "lucide-react";

const Invoicing = () => {
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

  return (
    <div className=" rounded-xl p-6 shadow-sm">
      <div className="grid grid-cols-2 gap-4">
        {paymentCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className={`text-lg font-medium ${card.color}`}>
                {card.icon}
              </span>
              <span className="text-lg font-bold text-gray-800">
                {card.amount}
              </span>
            </div>
            <div className="text-xs text-gray-600">{card.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invoicing;
