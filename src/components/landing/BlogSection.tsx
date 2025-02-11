import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getMediumPosts } from "@/lib/medium";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const mediumPosts = await getMediumPosts("lyfix.tech");
        setPosts(mediumPosts.slice(0, 3));
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Loading latest articles...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in AI-powered real
            estate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <div className="aspect-w-16 aspect-h-9 mb-4 rounded-xl overflow-hidden">
                  <img
                    src={
                      post.thumbnail ||
                      "https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                    }
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.pubDate).toLocaleDateString()}
                </p>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <div className="flex gap-2 mb-4">
                  {post.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <Button
                  variant="link"
                  className="p-0 text-blue-600 hover:text-blue-700"
                >
                  Read on Medium →
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
