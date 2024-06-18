import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const AppTopBar = () => {
  return (
    <div className="w-full flex items-center border-b justify-between px-4 md:px-16">
      <Link to={"/"} className="text-2xl py-4 font-semibold">
        Medium
      </Link>
      <div className="flex gap-4 items-center">
        <Link
          to={"/publish"}
          className="bg-green-700 text-white py-2 px-4 rounded-full hover:bg-green-600"
        >
          New Blog
        </Link>
        <Avatar name="Danish" />
      </div>
    </div>
  );
};

export default AppTopBar;
