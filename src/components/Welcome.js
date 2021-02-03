import React from "react";

const Welcome = () => {
  return (
    <div className="bg-gradient-to-b from-aqua to-ocean h-screen flex flex-col justify-center">
      <h1 className="text-white text-4xl text-center">FinStep</h1>
      <div className="mt-20 mx-auto">
        <button className="border-solid border-2 border-white box-border h-10 px-10 m-2 rounded-md text-white">
          Log In
        </button>
        <button className="bg-white h-10 px-10 m-2 rounded-md text-ocean">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Welcome;
