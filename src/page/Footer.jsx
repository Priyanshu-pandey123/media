import React from "react";
import { Home, Image, PlusCircle, User } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navItems = [
    { name: "Home", icon: Home, link: "/" },
    { name: "Gallery", icon: Image },
    { name: "Add Post", icon: PlusCircle, link: "/post" },
    { name: "Profile", icon: User, link: "/profile" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <nav className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const link = item.link;
            return (
              <Link
                key={item.name}
                to={link}
                className="flex flex-col items-center justify-between flex-1 py-2"
              >
                <Icon
                  className={`w-6 h-6 ${
                    item.name === "Add Post" ? "text-blue-500" : "text-gray-500"
                  }`}
                />
                <span className="text-xs mt-1 text-gray-500">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
