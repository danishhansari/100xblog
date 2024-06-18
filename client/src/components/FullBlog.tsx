import Avatar from "./Avatar";

const FullBlog = ({ blog }) => {
  return (
    <div className="mt-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <div className="w-full flex-1">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="my-2 text-slate-600">Post on 2nd December 2023</p>

        <p className="mt-4 text-md">{blog.content}</p>
      </div>

      <div className="max-w-md py-2">
        <p className="text-slate-700 font-medium my-4">Author</p>

        <div className="flex items-center gap-3">
          <div>
            <Avatar name={blog.author.name || "Anonymous"} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">
              {blog.author.name || "Anonymous"}
            </h1>
            <p className="text-slate-600">
              Author is work tremendously to make his career great. Lets see how
              far he goes... Best wishes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
