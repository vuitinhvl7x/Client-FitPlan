import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-neutral-900 bg-opacity-30 rounded-full px-8 py-3 backdrop-blur-md">
      <nav className="hidden md:flex justify-center space-x-8 items-center">
        <a href="/" className="text-2xl font-bold text-white mr-12">
          FitPlan
        </a>
        <Link
          to="/features"
          className="text-white hover:text-gray-200 transition-colors duration-200"
        >
          Features
        </Link>
        <Link
          to="/about-us"
          className="text-white hover:text-gray-200 transition-colors duration-200"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="text-white hover:text-gray-200 transition-colors duration-200"
        >
          Contact Us
        </Link>
        <Link
          to="/dashboard"
          className="ml-12 btn btn-primary rounded-full hover:scale-105 font-normal"
        >
          Start Workout
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
