import React from "react";
import { Link } from "react-router-dom";
import FitnessTipCard from "../components/FitnessTipCard";

const fitnessTips = [
  "Stay hydrated by drinking water throughout the day.",
  "Incorporate both cardio and strength training into your routine.",
  "Get enough sleep to allow your body to recover and rebuild.",
  "Eat a balanced diet with plenty of fruits and vegetables.",
  "Set realistic fitness goals and track your progress.",
];

const LandingPage = () => {
  return (
    <section className="container mx-auto py-16 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-800">
            Achieve Your Fitness Goals with{" "}
            <span className="text-accent-500">FitPlan</span>
          </h1>
          <p className="text-lg mb-8 text-neutral-600">
            FitPlan is your personal fitness companion, designed to help you
            reach your health and wellness goals. Get personalized workout plans
            tailored to your needs.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="bg-primary-500 hover:bg-primary-700 text-white py-2 px-4 rounded-full transition-colors"
            >
              Start Workout
            </Link>
            <a
              href="/demo"
              className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 py-2 px-4 rounded-full transition-colors"
            >
              Explore a Demo
            </a>
          </div>
        </div>
        <div className="relative">
          <FitnessTipCard tips={fitnessTips} />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
