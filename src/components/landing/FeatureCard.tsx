import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Brain, Sparkles, MessageSquare } from "lucide-react";

interface FeatureCardProps {
  title?: string;
  description?: string;
  icon?: typeof Bot;
}

const iconMap = {
  bot: Bot,
  brain: Brain,
  sparkles: Sparkles,
  messageSquare: MessageSquare,
};

const FeatureCard = ({
  title = "AI Property Matching",
  description = "Advanced algorithms match properties to your specific requirements and preferences.",
  icon: Icon = Bot,
}: FeatureCardProps) => {
  return (
    <Card className="w-[280px] h-[240px] bg-white hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-primary/10">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
