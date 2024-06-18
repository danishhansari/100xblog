import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const publishBlog = () => {
    axios
      .post(
        `${BACKEND_URL}/api/v1/blog`,
        { title, content },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response.data.id);
        navigate(`/blog/${response.data.id}`);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-4xl mx-auto px-4 mt-8">
      <div className="flex flex-col gap-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="w-full border border-slate-400 focus:outline-none pl-4 py-1 rounded-md"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={12}
          className="w-full border border-slate-400 resize-none focus:outline-none pl-4 py-1"
          placeholder="Enter you thoughts"
        ></textarea>
        <button
          onClick={publishBlog}
          type="button"
          className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default Publish;
