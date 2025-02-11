import React, { useState } from "react";
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";
import { Button } from "@/components/ui/button";
import { Bot, Brain, Sparkles, MessageSquare } from "lucide-react";
import FormDialog from "../landing/FormDialog";

const products = [
  {
    title: "AI Lead Generation Agent",
    description:
      "Our advanced AI lead generation system revolutionizes how you find and qualify potential clients. Experience a transformative approach to lead generation with our cutting-edge AI technology.",
    details: [
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
    description:
      "Transform your outreach with our intelligent conversation AI that engages leads naturally and effectively. Let our AI handle the initial contact while you focus on closing deals.",
    details: [
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
    description:
      "Streamline your operations with our AI manager that handles task delegation and performance tracking. Reduce management overhead and optimize your team's productivity.",
    details: [
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
    description:
      "Provide 24/7 intelligent support to your clients with our AI-powered customer service solution. Ensure instant responses and consistent service quality.",
    details: [
      "24/7 instant response system",
      "Smart query resolution",
      "Automated ticket management",
      "Personalized client interactions",
      "Multi-channel support",
    ],
    icon: Sparkles,
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our AI Products
          </h1>
          <p className="text-xl text-gray-600">
            Discover our range of specialized AI agents designed to transform
            your business
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row gap-16 items-center animate-on-scroll ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-1 space-y-6">
                    <div className="inline-block p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 animate-float">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {product.title}
                    </h2>
                    <p className="text-xl text-gray-600">
                      {product.description}
                    </p>
                    <ul className="space-y-4">
                      {product.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="lg"
                      className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"
                      onClick={() => setSelectedProduct(product.title)}
                    >
                      Book Now
                    </Button>
                  </div>
                  <div className="flex-1 w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden">
                    <img
                      src={
                        [
                          "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
                          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
                          "https://images.unsplash.com/photo-1460472178825-e5240623afd5",
                          "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
                        ][index]
                      }
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FormDialog
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title={`Book ${selectedProduct || ""}`}
        selectedAgent={selectedProduct || ""}
      />
      <Footer />
    </div>
  );
};

export default Products;
