import React from "react";
import PricingCard from "./PricingCard";

interface PricingSectionProps {
  title?: string;
  description?: string;
  plans?: Array<{
    title: string;
    price: string;
    description: string;
    features: Array<{ name: string; included: boolean }>;
    isPopular?: boolean;
    ctaText?: string;
  }>;
}

const PricingSection = ({
  title = "Simple, Transparent Pricing",
  description = "Choose the perfect plan for your real estate needs",
  plans = [
    {
      title: "Starter",
      price: "$99",
      description: "Perfect for getting started with AI-powered real estate",
      features: [
        { name: "Basic AI Agent Access", included: true },
        { name: "Up to 50 Property Listings", included: true },
        { name: "Email Support", included: true },
        { name: "Basic Analytics", included: true },
        { name: "Custom Branding", included: false },
      ],
      isPopular: false,
      ctaText: "Get Started",
    },
    {
      title: "Professional",
      price: "$199",
      description: "Ideal for growing real estate businesses",
      features: [
        { name: "Advanced AI Agent Access", included: true },
        { name: "Unlimited Property Listings", included: true },
        { name: "Priority Support", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Custom Branding", included: true },
      ],
      isPopular: true,
      ctaText: "Start Pro Plan",
    },
    {
      title: "Enterprise",
      price: "$399",
      description: "For large-scale real estate operations",
      features: [
        { name: "Custom AI Solutions", included: true },
        { name: "Unlimited Everything", included: true },
        { name: "24/7 Premium Support", included: true },
        { name: "Custom Analytics", included: true },
        { name: "White Labeling", included: true },
      ],
      isPopular: false,
      ctaText: "Contact Sales",
    },
  ],
}: PricingSectionProps) => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              ctaText={plan.ctaText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
