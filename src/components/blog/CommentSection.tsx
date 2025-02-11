import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  date: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "Alice Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      content:
        "Great article! The insights about AI in real estate are spot-on.",
      date: "2024-03-20",
    },
    {
      id: "2",
      author: "Bob Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
      content: "I particularly enjoyed the section about automated valuations.",
      date: "2024-03-19",
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const [authorName, setAuthorName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: authorName,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${authorName}`,
      content: newComment,
      date: new Date().toISOString().split("T")[0],
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <div className="mt-16 pt-8 border-t">
      <h3 className="text-2xl font-bold mb-8">Comments</h3>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your name"
          className="w-full p-2 border rounded-md"
          required
        />
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts..."
          className="mb-4"
          required
        />
        <Button type="submit">Post Comment</Button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar>
              <AvatarImage src={comment.avatar} />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold">{comment.author}</span>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
