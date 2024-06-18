const Skelleton = () => {
  return (
    <>
      <div className="border-b p-4 animate-pulse">
        <div className="flex flex-row items-center gap-2">
          <div className="h-8 bg-gray-200 w-8 rounded-full"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[200px] w-full"></div>
        </div>
        <div className="font-semibold text-xl mt-2">
          <div className="h-4 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
        </div>

        <div className="text-md font-normal">
          <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-slate-400 mt-4">
          <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
        </div>
      </div>
    </>
  );
};

export default Skelleton;
