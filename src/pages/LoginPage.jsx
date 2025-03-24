import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../assets/hamstergym2.jpeg";

const LoginPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${loginImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="max-w-md w-full mx-4 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1 className="text-3xl font-bold text-center text-accent-400 mb-8">
          Welcome Back
        </h1>

        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              className="block text-sm font-medium text-gray-300 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 
                        focus:outline-none focus:ring-2 focus:ring-accent-500 
                        placeholder-gray-500 text-gray-100 transition-all"
              placeholder="Enter your email"
              id="email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              className="block text-sm font-medium text-gray-300 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 
                        focus:outline-none focus:ring-2 focus:ring-accent-500 
                        placeholder-gray-500 text-gray-100 transition-all"
              placeholder="Enter password"
              id="password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-accent-600 hover:bg-accent-700 text-white font-semibold 
                      rounded-lg transition-all duration-300 transform hover:scale-[1.02] 
                      active:scale-95 shadow-md"
          >
            Login Now
          </button>
        </form>

        {/* Signup Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-accent-400 hover:text-accent-300 underline 
                        transition-colors duration-200"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
