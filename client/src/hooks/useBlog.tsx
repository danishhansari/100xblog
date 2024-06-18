import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blog {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { readonly id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/get/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setLoading(false);
        setBlog(response.data);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, [id]);
  return { blog, loading };
};
