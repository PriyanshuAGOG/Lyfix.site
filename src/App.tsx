import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Features from "./components/pages/Features";
import About from "./components/pages/About";
import Blogs from "./components/pages/Blogs";
import BlogPost from "./components/blog/BlogPost";
import { getBlogBySlug } from "./lib/blog";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/blog/:slug"
            element={
              <BlogPost
                post={getBlogBySlug(
                  window.location.pathname.split("/").pop() || "",
                )}
              />
            }
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
