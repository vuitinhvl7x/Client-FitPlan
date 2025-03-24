import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Survey from "./pages/Survey";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Features from "./pages/Features";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useStore } from "./store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const hasCompletedSurvey = useStore((state) => state.hasCompletedSurvey);

  return (
    <div className="min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/survey"
          element={
            hasCompletedSurvey ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Survey />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            !hasCompletedSurvey ? (
              <Navigate to="/survey" replace />
            ) : (
              <Dashboard />
            )
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
