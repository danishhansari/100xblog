import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Blog {
  "content": string;
  "title": string;
  "id": number;
  "author": {
    "name": string;
  };
}

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/blogs`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setLoading(false);
        setBlogs(response.data);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);
  return { loading, blogs };
};
