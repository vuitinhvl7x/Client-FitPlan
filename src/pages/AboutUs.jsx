import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="container mx-auto py-16 min-h-screen flex items-center"
    >
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-accent-500 text-white text-sm px-4 py-2 rounded-full mb-4">
            About FitPlan
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Personalized Fitness. Simplified.
          </h2>
          <p className="text-neutral-400 text-lg">
            FitPlan empowers you to achieve your fitness goals with
            personalized workout plans and expert guidance, all within a simple
            and intuitive app.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              We're Changing the Way People Approach Fitness.
            </h3>
          </div>
          <div>
            <p className="text-neutral-400 mb-4">
              Everything used to be complicated. Finding the right workout felt
              like a chore, and staying motivated was a constant struggle. But
              somewhere along the way, we realized that fitness shouldn't be a
              burden. It should be accessible, enjoyable, and tailored to you.
            </p>
            <p className="text-neutral-400 mb-4">
              What started as a simple idea has grown into an intelligent
              platform that connects you with personalized workout plans
              designed by certified trainers. By combining cutting-edge
              technology with a deep understanding of human movement, we built
              FitPlan to make your fitness journey seamless and effective.
            </p>
            <p className="text-neutral-400">
              Today, thousands of individuals around the globe rely on
              FitPlan—from beginners taking their first steps to experienced
              athletes pushing their limits. We're helping people rediscover
              what it feels like to move freely, confidently, and joyfully.
              We're helping you achieve your best self, one workout at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
