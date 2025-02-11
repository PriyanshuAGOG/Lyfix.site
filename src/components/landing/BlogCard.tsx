import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

interface BlogCardProps {
  title?: string;
  excerpt?: string;
  imageUrl?: string;
  date?: string;
  readTime?: string;
}

const BlogCard = ({
  title = "Understanding AI in Real Estate",
  excerpt = "Discover how artificial intelligence is transforming the real estate industry with innovative solutions and smart automation.",
  imageUrl = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  date = "March 15, 2024",
  readTime = "5 min read",
}: BlogCardProps) => {
  return (
    <Card className="w-full max-w-[360px] overflow-hidden bg-white">
      <div className="relative h-[200px] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{excerpt}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays className="h-4 w-4" />
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full" asChild>
          <Link to={`/blog/future-of-ai-in-real-estate`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
