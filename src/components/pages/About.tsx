import React from "react";
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";
import TestimonialsSection from "../landing/TestimonialsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Lyfix</h1>
          <p className="text-xl text-gray-600">
            Transforming real estate with intelligent AI solutions
          </p>
        </div>
      </div>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-6">
              At Lyfix, we're passionate about revolutionizing the real estate
              industry through innovative AI solutions. Our platform combines
              cutting-edge technology with deep industry expertise to deliver
              exceptional results for our clients.
            </p>
            <p className="text-lg text-gray-600">
              Founded by industry veterans, we understand the challenges real
              estate professionals face and are committed to providing solutions
              that drive success.
            </p>
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default About;
