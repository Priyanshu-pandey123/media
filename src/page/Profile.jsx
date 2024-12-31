import React, { useState } from "react";
import { Camera, User, Lock, Phone } from "lucide-react";

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    role: "",
    name: "",
    username: "",
    password: "",
    phone: "",
    imageUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=80",
  });

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, imageUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profile);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 pb-[8rem]">
      <div className="max-w-md mx-auto  rounded-xl  overflow-hidden">
        <div className="p-6 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Profile Settings
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Update your personal information
            </p>
          </div>

          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={profile.imageUrl}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white"
              />
              <label
                htmlFor="profile-image"
                className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors"
              >
                <Camera className="w-5 h-5 text-white" />
                <input
                  type="file"
                  id="profile-image"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <User className="w-4 h-4 mr-2" />
                Full Name
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Username Input */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <User className="w-4 h-4 mr-2" />
                Username
              </label>
              <input
                type="text"
                value={profile.username}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, username: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Choose a username"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Lock className="w-4 h-4 mr-2" />
                Password
              </label>
              <input
                type="password"
                value={profile.password}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, password: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter new password"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Phone className="w-4 h-4 mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone number"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mt-[40px]">
                I am a
              </label>
              <div className="flex items-center justify-center space-x-4">
                <label className="flex items-center space-x-2 mt-5">
                  <input
                    type="radio"
                    name="role"
                    value="Media Reporter"
                    checked={profile.role === "Media Reporter"}
                    className="w-[30px] h-[30px]"
                    onChange={(e) =>
                      setProfile((prev) => ({ ...prev, role: e.target.value }))
                    }
                  />
                  <span className="text-base">Media Reporter</span>
                </label>
                <label className="flex items-center space-x-2 mt-5">
                  <input
                    type="radio"
                    name="role"
                    value="Visitor"
                    checked={profile.role === "Visitor"}
                    className="w-[30px] h-[30px]"
                    onChange={(e) =>
                      setProfile((prev) => ({ ...prev, role: e.target.value }))
                    }
                  />
                  <span className="text-base">Visitor</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
