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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Who We Are</h1>
          <div className="text-xl text-gray-600 max-w-3xl space-y-6">
            <p>
              At Lyfix, we are revolutionizing the way real estate businesses
              operate by providing cutting-edge AI-driven solutions. Our mission
              is to empower real estate agents with innovative tools that
              streamline lead generation, automate cold calling, and handle
              client interactions efficiently, allowing them to focus on closing
              deals and building relationships.
            </p>
            <p>
              We believe in harnessing the power of artificial intelligence to
              simplify complex workflows, improve productivity, and drive
              exceptional results for our clients. From solo agents to large
              firms, we cater to businesses of all sizes and ensure they stay
              ahead in this fast-paced, competitive industry.
            </p>
          </div>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To become the leading AI solutions provider for the real estate
                sector by delivering innovative, reliable, and customized AI
                agents that transform how businesses operate. We aim to bridge
                the gap between technology and real-world real estate needs,
                making automation accessible and practical for all.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to help real estate agents achieve:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                  <span className="text-gray-600">
                    Increased Efficiency: By automating repetitive tasks like
                    lead management, cold calls, and customer support.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                  <span className="text-gray-600">
                    Enhanced Client Relationships: With personalized AI-driven
                    interactions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                  <span className="text-gray-600">
                    Scalable Solutions: Offering both upfront and SaaS-based
                    models to adapt to client requirements.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Industry Focus</h3>
              <p className="text-gray-600">
                We specialize in AI tools tailored specifically for real estate
                professionals.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Customizable AI Agents</h3>
              <p className="text-gray-600">
                Our solutions adapt to your business's unique needs, ensuring
                optimal performance.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Hybrid Business Model</h3>
              <p className="text-gray-600">
                Whether you're a solo agent or a large firm, we offer flexible
                pricing models—upfront access or monthly SaaS plans—to suit your
                goals.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Comprehensive Support</h3>
              <p className="text-gray-600">
                From setup to ongoing maintenance, our team ensures seamless
                operations, delivering AI agents within 7–10 working days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <div className="text-lg text-gray-600 space-y-6">
                <p>
                  Founded in 2025, Lyfix started with a bold idea: to merge the
                  power of artificial intelligence with the dynamic needs of the
                  real estate industry. What began as a passion project has
                  quickly evolved into a thriving business, thanks to our
                  dedicated team, forward-thinking investors, and supportive
                  clients.
                </p>
                <p>
                  From our first AI lead-generation agent to a suite of
                  sophisticated automation tools, we've stayed committed to
                  innovation, growth, and client success.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                  <span className="text-gray-600">
                    Lead Generation Agents: Generate and nurture high-quality
                    leads effortlessly.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                  <span className="text-gray-600">
                    Cold Calling Agents: Automate outbound calls with
                    personalized scripts and responses.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                  <span className="text-gray-600">
                    Customer Support Agents: Handle client inquiries with
                    precision and care.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                  <span className="text-gray-600">
                    Custom AI Solutions: Tailored AI tools to meet your specific
                    business needs.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Proven expertise</h3>
              <p className="text-gray-600">in AI and automation</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Flexible pricing</h3>
              <p className="text-gray-600">tailored to your budget</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Fast delivery</h3>
              <p className="text-gray-600">and seamless integration</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Commitment</h3>
              <p className="text-gray-600">to your success and growth</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default About;
