import React from "react";
import { Link } from "react-router-dom";
import { postLogin } from "../utils/api";

const Login = () => {
  const loginUser = (e) => {
    e.preventDefault();

    const userCredentials = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    postLogin(userCredentials).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="bg-gradient-to-b from-aqua to-ocean h-screen flex flex-col items-center justify-center">
      <div className="container max-w-sm p-4 bg-white rounded-md">
        <h1 className="text-3xl text-center pb-4 text-ocean">Welcome Back!</h1>
        <form method="post" onSubmit={loginUser} className="flex flex-col">
          <input
            className="px-4 py-2 border-solid border border-gray-200 rounded-sm my-1"
            type="email"
            name="email"
            placeholder="example@mail.com"
          />
          <input
            className="px-4 py-2 border-solid border border-gray-200 rounded-sm my-1"
            type="password"
            placeholder="password"
            name="password"
          />
          <button
            type="submit"
            className="bg-green h-10 w-44 my-2 mx-auto rounded-md text-white"
          >
            Log In
          </button>
        </form>
      </div>
      <p className="opacity-75 pt-4">Don't have an account?</p>
      <Link to="/signup">
        <button className="border-solid border-2 border-white box-border h-10 w-44 m-2 rounded-md text-white">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default Login;
