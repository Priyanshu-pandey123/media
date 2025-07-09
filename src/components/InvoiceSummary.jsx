const InvoiceSummary = ({ invoiceData, invoiceStats }) => (
  <div className=" rounded-xl p-6 shadow-sm">
    <h2 className="text-lg font-semibold text-gray-800">Invoicing</h2>
    <div className="flex justify-between m-2">
      {invoiceData.map((item, index) => (
        <div key={index} className="flex-1 text-center bg-white m-1 p-4">
          <div className={`text-2xl font-bold ${item.color}`}>
            {item.amount}
          </div>
          <div className="text-sm text-gray-600">{item.label}</div>
        </div>
      ))}
    </div>
    <div className="flex justify-between">
      {invoiceStats.map((stat, index) => (
        <div key={index} className="flex-1 text-center bg-white m-1 p-4">
          <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
          <div className="text-xs text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default InvoiceSummary;
