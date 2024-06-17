import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signup = () => {
  return (
    <>
      <div className="flex w-full">
        <Auth type="signup" />
        <Quote />
      </div>
    </>
  );
};

export default Signup;
