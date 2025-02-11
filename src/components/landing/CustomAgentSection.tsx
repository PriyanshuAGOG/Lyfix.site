import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import FormDialog from "./FormDialog";
import { Bot } from "lucide-react";

const CustomAgentSection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 animate-float mb-6">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need a Custom AI Agent?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Get a personalized AI solution tailored to your specific business
            needs. Our team will work with you to create a custom AI agent that
            perfectly matches your requirements.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"
            onClick={() => setShowForm(true)}
          >
            Book Custom AI Agent
          </Button>
        </div>
      </div>

      <FormDialog
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        title="Book Custom AI Agent"
        selectedAgent="Custom AI Agent"
      />
    </section>
  );
};

export default CustomAgentSection;
