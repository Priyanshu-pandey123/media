import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.png";
import { use } from "react";
import Head from "../component/Head";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [isSignIn, setIsSingIn] = useState(false);

  return (
    <div>
      <Head />
      <div className="container mx-auto p-6 bg-white rounded overflow-y-auto pb-[8rem]">
        <img src={logo} alt="not found" className="h-24 w-auto mx-auto mb-4" />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="w-full  p-2  border-b border-black"
              placeholder="username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full  p-2  border-b border-black"
              placeholder="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {isSignIn && (
            <div>
              <label className="block text-gray-700 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                {...register("number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit number",
                  },
                })}
                className="w-full  p-2  border-b border-black"
                placeholder="number"
              />
              {errors.number && (
                <p className="text-red-500 text-sm">{errors.number.message}</p>
              )}
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full  p-2  border-b border-black"
              placeholder=" password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mt-[40px]">
              I am a
            </label>
            <div className="flex items-center justify-center space-x-4">
              <label className="flex items-center space-x-2 mt-5">
                <input
                  type="radio"
                  value="Visitor"
                  {...register("role", { required: "Role is required" })}
                  className="w-[30px] h-[30px]"
                />
                <span className="text-base">Medai Reporter</span>
              </label>
              <label className="flex items-center space-x-2 mt-5">
                <input
                  type="radio"
                  value="Visitor"
                  {...register("role", { required: "Role is required" })}
                  className="w-[30px] h-[30px]"
                />
                <span className="text-base">Visitor</span>
              </label>
            </div>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}
          </div>

          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => setIsSingIn(!isSignIn)}
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
