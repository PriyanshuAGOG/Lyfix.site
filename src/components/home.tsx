import React from "react";
import Navbar from "./landing/Navbar";
import HeroSection from "./landing/HeroSection";
import FeaturesGrid from "./landing/FeaturesGrid";
import TestimonialsSection from "./landing/TestimonialsSection";
import BlogSection from "./landing/BlogSection";
import WantAiSection from "./landing/WantAiSection";
import DemoSection from "./landing/DemoSection";
import CustomAgentSection from "./landing/CustomAgentSection";
import Footer from "./landing/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <CustomAgentSection />
      <DemoSection />
      <TestimonialsSection />
      <BlogSection />
      <WantAiSection />
      <Footer />
    </div>
  );
};

export default Home;
