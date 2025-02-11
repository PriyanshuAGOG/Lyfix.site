import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Check } from "lucide-react";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText?: string;
  onSelectPlan?: () => void;
}

const PricingCard = ({
  title = "Basic Plan",
  price = "$99/mo",
  description = "Perfect for getting started with AI-powered real estate",
  features = [
    { name: "Basic AI Agent Access", included: true },
    { name: "Property Listings", included: true },
    { name: "Email Support", included: true },
    { name: "Advanced Analytics", included: false },
    { name: "Custom Branding", included: false },
  ],
  isPopular = false,
  ctaText = "Get Started",
  onSelectPlan = () => console.log("Plan selected"),
}: PricingCardProps) => {
  return (
    <Card
      className={`w-[360px] h-[600px] flex flex-col bg-white ${isPopular ? "border-2 border-primary shadow-lg" : ""}`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <CardDescription className="mt-4">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check
                className={`w-5 h-5 ${feature.included ? "text-primary" : "text-muted-foreground"}`}
                style={{ opacity: feature.included ? 1 : 0.5 }}
              />
              <span
                className={`${feature.included ? "text-foreground" : "text-muted-foreground line-through"}`}
              >
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className={`w-full ${isPopular ? "bg-primary hover:bg-primary/90" : ""}`}
          variant={isPopular ? "default" : "outline"}
          onClick={onSelectPlan}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
