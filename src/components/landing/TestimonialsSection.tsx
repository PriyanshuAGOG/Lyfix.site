import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "The AI-powered features have completely transformed how we handle property listings. It's been a game-changer for our business.",
    author: "Sarah Johnson",
    role: "Real Estate Agent",
    company: "Premier Properties",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    quote:
      "Using this platform has helped us close deals 50% faster than before. The AI insights are incredibly valuable.",
    author: "Michael Chen",
    role: "Property Developer",
    company: "Urban Developments",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    quote:
      "The automated property matching has saved us countless hours. Our clients love how quickly we can find their perfect match.",
    author: "Emma Rodriguez",
    role: "Broker",
    company: "Elite Realty",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our AI-powered platform is helping real estate
            professionals transform their business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <p className="text-gray-600 mb-6 text-lg">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatarUrl}
                    alt={testimonial.author}
                  />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
