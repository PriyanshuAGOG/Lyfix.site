import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { InlineWidget } from "react-calendly";

const Navbar = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              Lyfix
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/features"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Features
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/blogs"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Blog
              </Link>
              <Button
                variant="default"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"
                onClick={() => setShowCalendly(true)}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </nav>

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

export default Navbar;
