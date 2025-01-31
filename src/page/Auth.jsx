import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.png";
import { use } from "react";
import Head from "../component/Head";
import { Eye, EyeOff } from "lucide-react";
import { auth, db } from "../utils/firebaseApp";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { useNavigate } from "react-router-dom";
const database = getDatabase();

const Auth = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [isSignIn, setIsSingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setError(""); // Reset errors before submitting
    setSuccess("");

    if (!isSignIn) {
      try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        const user = userCredential.user;

        // console.log("User signed up: ", user);

        if (!user?.uid) {
          throw new Error("User ID is undefined");
        }

        // Store user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
          username: data.username,
          email: data.email,
          phone: data.number,
          role: data.role,
          createdAt: new Date(),
        });

        // console.log("User data stored in Firestore");

        // Success message and UI updates
        setSuccess("Successfully registered! ");
        setTimeout(() => {
          // console.log("In time interval");
          setIsSingIn(true);
          setSuccess("");
          reset();
        }, 1000);
      } catch (error) {
        // console.error("Error creating user:", error);
        setError(error.message || "Failed to create account. Try again.");
      }
    } else {
      try {
        // Sign in user
        const userCredential = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        const user = userCredential.user;

        console.log("User signed in: ", user);
        setSuccess("Successfully logged in! Redirecting...");

        setTimeout(() => {
          navigate("/gallery");
          setSuccess("");
        }, 1000);
      } catch (error) {
        // console.error("Error signing in:", error);
        setError("Invalid email or password. Please try again.");
      }
    }
  };

  return (
    <div>
      <div className="container  lg:w-[500px] mx-auto p-6 bg-white rounded overflow-y-auto pb-[8rem]">
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

          {!isSignIn && (
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full p-2 border-b border-black pr-10"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
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

          <div className="flex justify-center flex-col mt-5">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 w-fit m-auto rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              {!isSignIn ? "Sign Up" : "Sign In"}
            </button>
            <p
              className="text-center mt-4 cursor-pointer font-medium"
              onClick={() => setIsSingIn(!isSignIn)}
            >
              {!isSignIn ? "Already Have a Account ? " : "Create a new account"}
            </p>
          </div>
        </form>
        {error && (
          <p className="text-center text-red-500 mt-2 text-lg">{error}</p>
        )}
        {success && (
          <p className="text-center text-green-600 mt-2 text-lg">{success}</p>
        )}
      </div>
    </div>
  );
};

export default Auth;
