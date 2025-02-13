import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { InlineWidget } from "react-calendly";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "";
  };

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              Lyfix
            </Link>

            {/* Desktop Menu */}
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
              <Link
                to="/affiliate"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Affiliate
              </Link>
              <Button
                variant="default"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"
                onClick={() => setShowCalendly(true)}
              >
                Contact Sales
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-x-0 top-[73px] bottom-0 bg-white/90 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-6 space-y-6 bg-white shadow-lg rounded-t-3xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            </div>
            <Link
              to="/features"
              className="text-gray-900 hover:text-purple-600 text-lg font-semibold transition-colors"
              onClick={handleMobileNavClick}
            >
              Features
            </Link>
            <Link
              to="/about"
              className="text-gray-900 hover:text-purple-600 text-lg font-semibold transition-colors"
              onClick={handleMobileNavClick}
            >
              About
            </Link>
            <Link
              to="/blogs"
              className="text-gray-900 hover:text-purple-600 text-lg font-semibold transition-colors"
              onClick={handleMobileNavClick}
            >
              Blog
            </Link>
            <Link
              to="/affiliate"
              className="text-gray-900 hover:text-purple-600 text-lg font-semibold transition-colors"
              onClick={handleMobileNavClick}
            >
              Affiliate
            </Link>
            <Button
              variant="default"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 text-lg py-6 rounded-xl shadow-md"
              onClick={() => {
                setShowCalendly(true);
                handleMobileNavClick();
              }}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </nav>

      {/* Calendly Dialog */}
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
