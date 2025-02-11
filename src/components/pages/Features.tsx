import React from "react";
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";
import FeaturesGrid from "../landing/FeaturesGrid";
import CustomSolution from "../landing/CustomSolution";

const Features = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Features</h1>
          <p className="text-xl text-gray-600">
            Discover how our AI-powered features can transform your real estate
            business
          </p>
        </div>
      </div>
      <FeaturesGrid />
      <CustomSolution />
      <Footer />
    </div>
  );
};

export default Features;
