import { useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Skelleton from "../components/Skelleton";
import { useBlogs } from "../hooks/useBlogs";
import { useEffect } from "react";

const Blogs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/signup");
    }
  }, []);
  const { loading, blogs } = useBlogs();
  console.log(blogs);
  return (
    <div className="flex justify-center max-w-3xl mx-auto p-2 flex-col gap-4">
      {loading && (
        <>
          <Skelleton />
          <Skelleton />
          <Skelleton />
          <Skelleton />
          <Skelleton />
        </>
      )}
      {blogs.map((blog) => (
        <BlogCard
          id={blog.id}
          authorName={blog.author.name || "Anonymous"}
          title={blog.title}
          content={blog.content}
          publishedDate="2 Oct 2024"
        />
      ))}

      {/* // publishedDate={" "} */}
    </div>
  );
};

export default Blogs;
