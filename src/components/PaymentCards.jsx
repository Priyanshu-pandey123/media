const PaymentCards = ({ paymentCards }) => (
  <div className="grid grid-cols-3 gap-4">
    {paymentCards.map((card, index) => (
      <div
        key={index}
        className={`bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center ${
          index > 2
            ? "col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1"
            : ""
        }`}
      >
        <div className="flex flex-row items-center justify-between w-full mb-2">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full  bg-white ${card.color} border-current`}
          >
            <span className={`text-xl bg-${card.color}`}>{card.icon}</span>
          </div>
          <span className="text-lg font-bold text-gray-800 ml-3">
            {card.amount}
          </span>
        </div>
        <div className="text-xs text-gray-600 text-center w-full">
          {card.label}
        </div>
      </div>
    ))}
  </div>
);

export default PaymentCards;
