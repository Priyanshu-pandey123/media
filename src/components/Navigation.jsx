import {
  Home,
  FileText,
  Wrench,
  Calendar,
  Users,
  CreditCard,
  ChevronDown,
} from "lucide-react";

const Navigation = () => {
  const menuItems = [
    { name: "Dashboard", icon: <Home size={18} />, active: true },
    { name: "Jobs", icon: <FileText size={18} />, active: false },
    { name: "Technicians", icon: <Wrench size={18} />, active: false },
    { name: "Calendar", icon: <Calendar size={18} />, active: false },
    { name: "Customers", icon: <Users size={18} />, active: false },
    {
      name: "Invoices & Payments",
      icon: <CreditCard size={18} />,
      active: false,
    },
  ];

  return (
    <nav className="bg-white px-0 py-0 rounded-t-2xl ">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-16 gap-20">
        <div className="flex-1 flex">
          <div className="flex flex-1 items-center justify-between">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col cursor-pointer relative group `}
              >
                <div
                  className={`flex items-center gap-1 transition-colors duration-150 ${
                    item.active
                      ? "text-blue-800 font-semibold"
                      : "text-gray-400 font-medium group-hover:text-primary-600"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 pr-6">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User Avatar"
            className="w-9 h-9 rounded-full object-cover"
          />
          <ChevronDown size={18} className="text-gray-400" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
