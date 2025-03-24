import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // React Icons

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 mt-24 container mx-auto px-4 border-t border-neutral-700 pt-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* FitPlan Info */}
        <div>
          <h4 className="font-semibold text-white mb-4">FitPlan</h4>
          <p className="text-sm text-neutral-400">
            Your personal fitness companion, designed to help you reach your
            health and wellness goals.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com"
              className="hover:text-neutral-200 transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-neutral-200 transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-neutral-200 transition-colors"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold text-white mb-4">Product</h4>
          <ul className="space-y-2">
            <li>
              <a href="#features" className="hover:text-neutral-200">
                Features
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-neutral-200">
                Home
              </a>
            </li>
            <li>
              <a href="#integration" className="hover:text-neutral-200">
                Integration
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="#contact" className="hover:text-neutral-200">
                Contact
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-neutral-200">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-neutral-200">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-neutral-200">
                About
              </a>
            </li>
            <li>
              <a href="#blogs" className="hover:text-neutral-200">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Other */}
        <div>
          <h4 className="font-semibold text-white mb-4">Other</h4>
          <ul className="space-y-2">
            <li>
              <a href="#404" className="hover:text-neutral-200">
                404
              </a>
            </li>
            <li>
              <a href="#license" className="hover:text-neutral-200">
                License
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 mt-12 flex flex-col md:flex-row justify-between items-center pt-8">
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold text-white">FitPlan</h4>
        </div>
        <div>
          <p>&copy; Copyright FitPlan 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
