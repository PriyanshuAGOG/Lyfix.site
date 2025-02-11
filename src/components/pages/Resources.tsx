import React from "react";
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";
import BlogSection from "../landing/BlogSection";

const Resources = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Resources</h1>
          <p className="text-xl text-gray-600">
            Helpful resources and insights for your real estate journey
          </p>
        </div>
      </div>
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Resources;
