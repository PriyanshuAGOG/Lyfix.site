import React from "react";
import CommentSection from "./CommentSection";
import { BlogPost as BlogPostType } from "@/types/blog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, Clock } from "lucide-react";
import { Helmet } from "react-helmet";

type BlogPostProps = {
  post?: BlogPostType;
};

const BlogPost = ({ post }: BlogPostProps) => {
  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <Helmet>
        <title>{post.seo.title}</title>
        <meta name="description" content={post.seo.description} />
        <meta name="keywords" content={post.seo.keywords.join(", ")} />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content={post.seo.title} />
        <meta property="og:description" content={post.seo.description} />
        <meta property="og:image" content={post.seo.ogImage} />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seo.title} />
        <meta name="twitter:description" content={post.seo.description} />
        <meta name="twitter:image" content={post.seo.ogImage} />
      </Helmet>

      <header className="mb-8 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <time>{new Date(post.date).toLocaleDateString()}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      <div className="aspect-video mb-8 rounded-lg overflow-hidden animate-scaleIn">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover hover-scale"
        />
      </div>

      <div className="prose prose-lg max-w-none animate-slideIn">
        {post.content.split("\n").map((paragraph, index) => {
          if (paragraph.startsWith("#")) {
            const level = paragraph.match(/^#+/)[0].length;
            const text = paragraph.replace(/^#+\s*/, "");
            const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
            return (
              <HeadingTag key={index} className="font-bold">
                {text}
              </HeadingTag>
            );
          }
          return <p key={index}>{paragraph}</p>;
        })}
      </div>

      <footer className="mt-8 pt-8 border-t animate-fadeIn">
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover-lift"
            >
              {tag}
            </span>
          ))}
        </div>
      </footer>

      <CommentSection />
    </article>
  );
};

export default BlogPost;
