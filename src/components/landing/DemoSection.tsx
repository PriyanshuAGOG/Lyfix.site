import React from "react";
import { Button } from "@/components/ui/button";
import { Bot, Brain, Sparkles, MessageSquare } from "lucide-react";

const demos = [
  {
    title: "AI Lead Generation Agent",
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    icon: Bot,
  },
  {
    title: "Cold Call AI Agent",
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    icon: MessageSquare,
  },
  {
    title: "AI Manager",
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    icon: Brain,
  },
  {
    title: "Customer Support AI Agent",
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    icon: Sparkles,
  },
];

const DemoSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Our AI Agents in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how our AI agents can transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {demos.map((demo, index) => {
            const Icon = demo.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {demo.title}
                  </h3>
                </div>
                <div className="aspect-video bg-gray-100 rounded-lg mb-4">
                  {/* Replace with actual video embed */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-500">Demo Video Coming Soon</p>
                  </div>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"
                  onClick={() => window.open(demo.videoUrl, "_blank")}
                >
                  View Demo
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
