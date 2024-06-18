import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () => {
  return (
    <>
      <div className="flex w-full h-[90vh]">
        <Auth type="signin" />
        <Quote />
      </div>
    </>
  );
};

export default Signin;
