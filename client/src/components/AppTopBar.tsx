import Avatar from "./Avatar";

const AppTopBar = () => {
  return (
    <div className="w-full flex items-center border-b justify-between px-8 py-4">
      <p className="text-3xl font-serif">Medium</p>
      <Avatar name="Danish" />
    </div>
  );
};

export default AppTopBar;
