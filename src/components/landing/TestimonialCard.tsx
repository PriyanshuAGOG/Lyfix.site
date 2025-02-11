import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

const TestimonialCard = ({
  quote = "The AI-powered features have completely transformed how we handle property listings. It's been a game-changer for our business.",
  author = "Sarah Johnson",
  role = "Real Estate Agent",
  company = "Premier Properties",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
}: TestimonialCardProps) => {
  return (
    <Card className="w-[360px] h-[240px] p-6 bg-white flex flex-col justify-between hover:shadow-lg transition-shadow duration-200">
      <div className="space-y-4">
        <p className="text-gray-600 text-sm italic leading-relaxed">
          "{quote}"
        </p>
      </div>

      <div className="flex items-center space-x-4 mt-4">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={author} />
          <AvatarFallback>
            {author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-sm">{author}</h4>
          <p className="text-gray-500 text-xs">
            {role} at {company}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
