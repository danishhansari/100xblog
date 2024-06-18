import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlog";
import FullBlog from "../components/FullBlog";

const Blog = () => {
  const id = useParams();
  console.log(id);
  const { blog, loading } = useBlog(id);
  console.log(blog);

  if (loading) {
    return <div className="max-w-3xl mx-auto px-4">Loading...</div>;
  }

  return <FullBlog blog={blog} />;
};

export default Blog;
