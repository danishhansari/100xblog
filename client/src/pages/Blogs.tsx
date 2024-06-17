import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <div className="flex justify-center max-w-3xl mx-auto p-4 flex-col gap-4">
      <BlogCard
        authorName="Danish"
        title="Hello world dummy text need to make thigs work it is a new way to make tokfksjf fjkjfkjkdsfkjksklf sfkjkdflsfj"
        content="Will going to buy car"
        publishedDate="2nd October 2023"
      />
      <BlogCard
        authorName="Danish"
        title="Hello world dummy text need to make thigs work it is a new way to make tokfksjf fjkjfkjkdsfkjksklf sfkjkdflsfj"
        content="Will going to buy car"
        publishedDate="2nd October 2023"
      />
      <BlogCard
        authorName="Danish"
        title="Hello world dummy text need to make thigs work it is a new way to make tokfksjf fjkjfkjkdsfkjksklf sfkjkdflsfj"
        content="Will going to buy car"
        publishedDate="2nd October 2023"
      />
    </div>
  );
};

export default Blogs;
