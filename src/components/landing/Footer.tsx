import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Footer = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    review: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    // For now, we'll just store it in localStorage
    const reviews = JSON.parse(localStorage.getItem("testimonials") || "[]");
    const newReview = {
      ...formData,
      avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`,
      date: new Date().toISOString(),
    };
    reviews.push(newReview);
    localStorage.setItem("testimonials", JSON.stringify(reviews));

    setShowReviewForm(false);
    setFormData({ name: "", role: "", company: "", review: "" });
    alert("Thank you for your review!");
    window.location.reload(); // Refresh to show new review
  };

  return (
    <footer className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="space-y-4">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          >
            Lyfix
          </Link>
          <p className="text-gray-600 text-sm">
            Transforming real estate with intelligent AI solutions.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Product</h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="/features"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/integrations"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Integrations
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Company</h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowReviewForm(true)}
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Write a Review
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Resources</h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="/blog"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/documentation"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200">
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Lyfix. All rights reserved.
        </p>
      </div>

      <Dialog open={showReviewForm} onOpenChange={setShowReviewForm}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Write a Review</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="review">Review</Label>
              <Textarea
                id="review"
                value={formData.review}
                onChange={(e) =>
                  setFormData({ ...formData, review: e.target.value })
                }
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Submit Review
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
