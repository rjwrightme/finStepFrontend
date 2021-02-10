import React from "react";
import { Link } from "react-router-dom";
import { postNewUser } from "../utils/api";
import { postLogin } from "../utils/api";

const Signup = () => {
  const signupNewUser = (e) => {
    e.preventDefault();

    const newUser = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    // Add new user to database then log them in
    postNewUser(newUser).then(() => {
      const userCredentials = {
        email: newUser.email,
        password: newUser.password,
      };

      postLogin(userCredentials).then(() => {
        window.location.reload();
      });
    });
  };

  return (
    <div className="bg-gradient-to-b from-aqua to-ocean h-screen flex flex-col items-center justify-center">
      <div className="container max-w-sm p-4 bg-white rounded-md">
        <h1 className="text-3xl text-center pb-4 text-ocean">Sign Up</h1>
        <form method="post" onSubmit={signupNewUser} className="flex flex-col">
          <input
            className="px-4 py-2 border-solid border border-gray-200 rounded-sm my-1"
            type="text"
            name="firstName"
            placeholder="John"
          />
          <input
            className="px-4 py-2 border-solid border border-gray-200 rounded-sm my-1"
            type="text"
            name="lastName"
            placeholder="Smith"
          />
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
          <input
            className="px-4 py-2 border-solid border border-gray-200 rounded-sm my-1"
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
          />
          <button
            type="submit"
            className="bg-green h-10 w-44 my-2 mx-auto rounded-md text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
      <p className="opacity-75 pt-4">Already a member?</p>
      <Link to="/login">
        <button className="border-solid border-2 border-white box-border h-10 w-44 m-2 rounded-md text-white">
          Log In
        </button>
      </Link>
    </div>
  );
};

export default Signup;
