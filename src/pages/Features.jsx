import React from "react";
import {
  CheckCircleIcon,
  FireIcon,
  HeartIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const Features = () => {
  return (
    <section
      id="features"
      className="container mx-auto py-16 min-h-screen flex items-center"
    >
      <div className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why <span className="text-accent-500">FitPlan</span>?
          </h2>
          <p className="text-neutral-400">
            Explore the solutions that can elevate your fitness journey to new
            heights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-neutral-800 rounded-2xl">
                <CheckCircleIcon className="h-8 w-8 text-accent-500" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">
              Personalized Plans
            </h3>
            <p className="text-neutral-400">
              Workout plans tailored to your unique fitness profile and goals.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-neutral-800 rounded-2xl">
                <FireIcon className="h-8 w-8 text-accent-500" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">
              Motivation Boost
            </h3>
            <p className="text-neutral-400">
              Stay motivated with progress tracking and achieve your fitness
              milestones.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-neutral-800 rounded-2xl">
                <UserGroupIcon className="h-8 w-8 text-accent-500" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">
              Expert Trainers
            </h3>
            <p className="text-neutral-400">
              Guidance from certified trainers to ensure effective and safe
              workouts.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-neutral-800 rounded-2xl">
                <HeartIcon className="h-8 w-8 text-accent-500" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">
              Dedicated Support
            </h3>
            <p className="text-neutral-400">
              We are committed to supporting you on your path to a healthier
              lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
