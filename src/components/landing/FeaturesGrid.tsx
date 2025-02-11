import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import FormDialog from "./FormDialog";
import { Bot, Brain, Sparkles, MessageSquare } from "lucide-react";

const features = [
  {
    title: "AI Lead Generation Agent",
    description: [
      "90% accuracy in lead qualification",
      "Real-time market data analysis",
      "Automated lead scoring and ranking",
      "Intelligent property matching",
      "24/7 lead capture and processing",
    ],
    icon: Bot,
  },
  {
    title: "Cold Call AI Agent",
    description: [
      "Natural language conversations",
      "Automated appointment scheduling",
      "Smart follow-up management",
      "Real-time call analytics",
      "Multi-language support",
    ],
    icon: MessageSquare,
  },
  {
    title: "AI Manager",
    description: [
      "60% reduction in management overhead",
      "Automated task delegation",
      "Performance tracking & analytics",
      "Smart resource allocation",
      "Predictive workflow optimization",
    ],
    icon: Brain,
  },
  {
    title: "Customer Support AI Agent",
    description: [
      "24/7 instant response system",
      "Smart query resolution",
      "Automated ticket management",
      "Personalized client interactions",
      "Multi-channel support",
    ],
    icon: Sparkles,
  },
];

const FeaturesGrid = () => {
  const [selectedAgent, setSelectedAgent] = React.useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our AI-Powered Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how BrandLyft can revolutionize your real estate business
            with our cutting-edge AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 animate-float">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"
                  onClick={() => setSelectedAgent(feature.title)}
                >
                  Book Now
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <FormDialog
        isOpen={!!selectedAgent}
        onClose={() => setSelectedAgent(null)}
        title={`Book ${selectedAgent || ""}`}
        selectedAgent={selectedAgent || ""}
      />
    </section>
  );
};

export default FeaturesGrid;
