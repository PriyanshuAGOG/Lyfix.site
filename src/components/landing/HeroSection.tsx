import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { InlineWidget } from "react-calendly";

const HeroSection = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <section className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Real Estate Business with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Leverage cutting-edge artificial intelligence to streamline
              property matching, automate tasks, and boost your sales
              performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"
                onClick={() => setShowCalendly(true)}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showCalendly} onOpenChange={setShowCalendly}>
        <DialogContent className="max-w-[480px] p-0">
          <InlineWidget
            url="https://calendly.com/lyfix-tech/30min"
            styles={{ height: "550px" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeroSection;
