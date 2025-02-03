import React from "react";
import { X, LogOut, User, Settings, HelpCircle } from "lucide-react";
import { auth } from "../utils/firebaseApp";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MenuDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      onClose();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          <div className="absolute left-0 top-0 h-fit p-6 w-80 bg-white shadow-lg">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Menu</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="py-4">
              <button className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-100">
                <User size={20} className="text-gray-600" />
                <span>Profile</span>
              </button>

              <button className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-100">
                <Settings size={20} className="text-gray-600" />
                <span>Settings</span>
              </button>

              <button className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-100">
                <HelpCircle size={20} className="text-gray-600" />
                <span>Help & Support</span>
              </button>

              <div className="border-t mt-2">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-100 text-red-600"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuDrawer;
