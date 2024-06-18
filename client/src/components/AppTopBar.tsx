import Avatar from "./Avatar";

const AppTopBar = () => {
  return (
    <div
      className="w-full flex items-center border-b justify-between
     md:justify-evenly px-4`"
    >
      <p className="text-3xl py-2 font-serif">Medium</p>
      <Avatar name="Danish" />
    </div>
  );
};

export default AppTopBar;
