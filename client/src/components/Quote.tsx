const Quote = () => {
  return (
    <>
      <div className="h-screen bg-slate-200 items-center justify-center w-full hidden lg:flex">
        <div className="px-8 max-w-3xl">
          <h1 className="text-4xl font-bold text-balance">
            "The customer support I received was exceptional. The support team
            went above and beyond to address my conserns"
          </h1>
          <p className="text-xl font-semibold mt-4">Julies Winfield</p>
          <p className="text-sm font-normal text-slate-600">CEO | Acme corp</p>
        </div>
      </div>
    </>
  );
};

export default Quote;
