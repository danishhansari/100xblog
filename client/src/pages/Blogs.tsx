import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks/useBlogs";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  console.log(blogs);
  return (
    <div className="flex justify-center max-w-3xl mx-auto p-4 flex-col gap-4">
      {loading && <div>loading...</div>}
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
