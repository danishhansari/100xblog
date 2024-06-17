import { Link } from "react-router-dom";
import LabeledInput from "./LabeledInput";
import { SignupInput } from "@danishhansari/blog-common";
import { useState } from "react";

const Auth = ({ type }: { type: "signin" | "signup" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });
  return (
    <>
      <div className="h-screen flex justify-center w-full items-center">
        <div className="rounded-sm p-8">
          <h1 className="text-3xl font-bold text-center">
            {type === "signin" ? "Login to Account" : "Create an Account"}
          </h1>
          <p className="text-gray-600 my-2">
            {type === "signup"
              ? "Alread have and Account"
              : "Create an Account"}
            <Link
              to={type === "signin" ? "/signup" : "/signin"}
              className="underline ml-1"
            >
              {type === "signup" ? "Sign in" : "Sign up"}
            </Link>
          </p>
          {type === "signup" && (
            <LabeledInput
              label="Name"
              placeholder="Enter your Name"
              onChange={(e) => {
                setPostInputs((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          )}
          <LabeledInput
            label="Username"
            type="email"
            placeholder="Enter your username"
            onChange={(e) => {
              setPostInputs((prev) => ({
                ...prev,
                username: e.target.value,
              }));
            }}
          />
          <LabeledInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPostInputs((prev) => ({
                ...prev,
                password: e.target.value,
              }));
            }}
          />
          <button
            type="button"
            className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {type === "signup" ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Auth;
