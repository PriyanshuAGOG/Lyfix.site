import React from "react";
import { Button } from "@/components/ui/button";

const CustomSolution = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Need a Custom Solution?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can tailor our AI platform to meet your specific
          business needs.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-blue-600 hover:bg-white/90"
        >
          Schedule a Call
        </Button>
      </div>
    </section>
  );
};

export default CustomSolution;
