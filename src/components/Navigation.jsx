const Navigation = () => {
  const menuItems = [
    { name: "Dashboard", icon: "🏠", active: true },
    { name: "Jobs", icon: "📄", active: false },
    { name: "Technicians", icon: "👨‍🔧", active: false },
    { name: "Calendar", icon: "📅", active: false },
    { name: "Customers", icon: "👥", active: false },
    { name: "Invoices & Payments", icon: "💳", active: false },
  ];

  return (
    <nav className="bg-white shadow-sm px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                item.active
                  ? "text-primary-600 bg-primary-50 font-medium"
                  : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
              {item.active && (
                <div className="w-1 h-1 bg-primary-600 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">JD</span>
          </div>
          <span className="text-gray-700 text-sm">John Doe</span>
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
