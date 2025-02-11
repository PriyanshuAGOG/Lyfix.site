import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { InlineWidget } from "react-calendly";

const WantAiSection = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <section className="w-full py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want AI Automation?
          </h2>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-white/90"
            onClick={() => setShowCalendly(true)}
          >
            Schedule a Call
          </Button>
        </div>
      </section>

      <Dialog open={showCalendly} onOpenChange={setShowCalendly}>
        <DialogContent className="sm:max-w-[600px] p-0 rounded-xl overflow-hidden">
          <InlineWidget
            url="https://calendly.com/lyfix-tech/30min"
            styles={{
              height: "600px",
              margin: "0 auto",
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WantAiSection;
