import React from "react";
import {
  CheckCircleIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto py-16">
      <div className="text-center mb-8">
        <span className="inline-block bg-accent-500 text-white text-sm px-4 py-2 rounded-full mb-4">
          Contact
        </span>
        <h2 className="text-3xl font-bold text-white">Reach Out To Us</h2>
        <p className="text-neutral-400">
          Got questions or need some help? Our team is ready to assist you.
          Reach out to us for any questions you might have.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <div className="bg-neutral-800 rounded-2xl p-6 mb-6">
            <h4 className="text-xl font-medium text-white flex items-center mb-3">
              <EnvelopeIcon className="h-6 w-6 mr-2 text-accent-500" />
              Contact Sales
            </h4>
            <p className="text-neutral-400 mb-4">
              Connect with us for custom solutions or product insights.
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2 text-accent-500" />
                Schedule A Demonstration
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2 text-accent-500" />
                Find The Right Product For Your Business
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2 text-accent-500" />
                Guidance For Onboarding
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800 rounded-2xl p-6">
            <h4 className="text-xl font-medium text-white flex items-center mb-3">
              <QuestionMarkCircleIcon className="h-6 w-6 mr-2 text-accent-500" />
              Support
            </h4>
            <p className="text-neutral-400 mb-4">
              Looking for assistance with technical problems or products?
            </p>
            <a
              href="mailto:support@fitplan.com"
              className="inline-block bg-neutral-700 text-neutral-400 rounded-full px-4 py-2 hover:text-white transition-colors"
            >
              support@fitplan.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-neutral-800 rounded-2xl p-6">
          <h3 className="text-xl font-medium text-white mb-4">
            Tell Us How We Can Help
          </h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-400"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="input bg-neutral-700 text-white border-neutral-600"
                placeholder="Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-400"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="input bg-neutral-700 text-white border-neutral-600"
                placeholder="Email"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-neutral-400"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="input bg-neutral-700 text-white border-neutral-600"
                placeholder="Company"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-400"
              >
                How Can We Help?
              </label>
              <textarea
                id="message"
                rows="3"
                className="input bg-neutral-700 text-white border-neutral-600"
                placeholder="Tell us more about your needs..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
