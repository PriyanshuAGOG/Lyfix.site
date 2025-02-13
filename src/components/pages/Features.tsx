import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";
import { Button } from "@/components/ui/button";
import FormDialog from "../landing/FormDialog";

const Features = () => {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          AI Real Estate Solutions - Lead Generation, Cold Calling & Support |
          Lyfix
        </title>
        <meta
          name="description"
          content="Transform your real estate business with Lyfix's AI solutions. Our features include lead generation, cold calling automation, 24/7 customer support, and custom AI agents."
        />
        <meta
          name="keywords"
          content="AI real estate, lead generation, cold calling automation, customer support AI, real estate technology, AI agents"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AI Real Estate Solutions - Features | Lyfix"
        />
        <meta
          property="og:description"
          content="Discover our AI-powered solutions for real estate: lead generation, cold calling, customer support, and custom AI agents."
        />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="AI Real Estate Solutions - Features | Lyfix"
        />
        <meta
          name="twitter:description"
          content="Discover our AI-powered solutions for real estate: lead generation, cold calling, customer support, and custom AI agents."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Lyfix AI Real Estate Solutions",
            description:
              "AI-powered solutions for real estate professionals including lead generation, cold calling, and customer support.",
            brand: {
              "@type": "Brand",
              name: "Lyfix",
            },
            offers: {
              "@type": "AggregateOffer",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>
      <Navbar />
      <div className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionize Your Real Estate Business with AI-Powered Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            At Lyfix, our suite of AI agents is designed to simplify your
            workflow, maximize productivity, and ensure your business runs
            smoothly. Explore the cutting-edge features that make our solutions
            stand out:
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {/* Advanced Lead Generation */}
          <section>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold">
                  1. Advanced Lead Generation
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    <span className="text-gray-600">
                      AI-Powered Precision: Our agents identify high-quality
                      leads based on targeted data analysis, ensuring you
                      connect with clients most likely to convert.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    <span className="text-gray-600">
                      Real-Time Updates: Get instant notifications when new
                      leads are generated, so you can act fast.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    <span className="text-gray-600">
                      CRM Integration: Seamlessly sync leads into your existing
                      CRM for easy management and follow-up.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    <span className="text-gray-600">
                      Automated Lead Scoring: Prioritize leads based on
                      engagement, behavior, and potential value.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-gray-100">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/your-lead-gen-video-id"
                    title="Lead Generation AI Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-6 text-center">
                  <Button
                    size="lg"
                    className="w-64 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"
                    onClick={() => setSelectedAgent("AI Lead Generation Agent")}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Smart Cold Calling */}
          <section>
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold">2. Smart Cold Calling</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    <span className="text-gray-600">
                      Automated Calling: Save time with AI-driven cold calls
                      that sound natural and professional.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    <span className="text-gray-600">
                      Personalized Scripts: Customizable dialogue tailored to
                      client preferences and responses.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    <span className="text-gray-600">
                      Call Insights: Receive detailed analytics on call
                      outcomes, helping you refine your strategy.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    <span className="text-gray-600">
                      Lead Follow-Up: Automatically schedule follow-ups for
                      unanswered or promising calls.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-gray-100">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/your-cold-calling-video-id"
                    title="Cold Calling AI Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-6 text-center">
                  <Button
                    size="lg"
                    className="w-64 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"
                    onClick={() => setSelectedAgent("Cold Call AI Agent")}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* AI-Powered Customer Support */}
          <section>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold">
                  3. AI-Powered Customer Support
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    <span className="text-gray-600">
                      24/7 Availability: Ensure your clients get timely
                      assistance, even outside business hours.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    <span className="text-gray-600">
                      Multi-Channel Support: Handle inquiries via phone, email,
                      and chat seamlessly.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    <span className="text-gray-600">
                      Dynamic Responses: AI agents respond to common questions
                      with accurate and personalized information.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    <span className="text-gray-600">
                      Escalation Management: Direct complex issues to human
                      agents with all relevant details for faster resolution.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-gray-100">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/your-support-video-id"
                    title="Customer Support AI Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-6 text-center">
                  <Button
                    size="lg"
                    className="w-64 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"
                    onClick={() =>
                      setSelectedAgent("Customer Support AI Agent")
                    }
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Customizable AI Agents */}
          <section>
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold">
                  4. Customizable AI Agents
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    <span className="text-gray-600">
                      Tailored to Your Needs: Customize workflows, features, and
                      communication styles based on your business requirements.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    <span className="text-gray-600">
                      Adaptable Integrations: Our agents can integrate with your
                      existing tools and systems, including CRMs, email
                      platforms, and analytics software.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                    <span className="text-gray-600">
                      Industry-Specific Solutions: Specialized features designed
                      exclusively for real estate, ensuring relevance and
                      effectiveness.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-gray-100">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/your-custom-ai-video-id"
                    title="Custom AI Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-6 text-center">
                  <Button
                    size="lg"
                    className="w-64 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"
                    onClick={() => setSelectedAgent("Custom AI Agent")}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center space-y-8">
            <h2 className="text-3xl font-bold">
              Transform Your Business Today!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the power of AI to elevate your real estate business to
              new heights. Whether you're looking to generate more leads,
              automate client interactions, or optimize your operations, Lyfix
              has the solution for you.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"
              onClick={() => setSelectedAgent("Custom AI Agent")}
            >
              Get Started Now
            </Button>
          </section>
        </div>
      </div>

      <FormDialog
        isOpen={!!selectedAgent}
        onClose={() => setSelectedAgent(null)}
        title={`Book ${selectedAgent || ""}`}
        selectedAgent={selectedAgent || ""}
      />

      <Footer />
    </div>
  );
};

export default Features;
