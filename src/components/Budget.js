import React from "react";
import { useFinStepContext } from "../utils/FinStepContext";

const Budget = () => {
  const [state, dispatch] = useFinStepContext();

  return (
    <div className="bg-silver h-screen h-screen-offset w-3/4">
      <div className="bg-gradient-to-r from-aqua-light to-aqua w-100 h-44 p-4">
        <div className="max-w-lg mx-auto">
          <div className="flex w-11/12 mx-auto justify-between">
            <h1 className="text-white text-5xl mt-4">Budget</h1>
            <img
              className="background-icon mr-12"
              src="/images/budget.svg"
              alt="budget icon"
            />
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-md relative z-10 -mt-8">
            {state.budgetMax ? (
              <p className="text-4xl text-gray-500 text-center font-bold">
                {state.budgetCurrent} of {state.budgetMax}
              </p>
            ) : (
              <button className="border-solid border-2 border-gray-500 bg-silver box-border px-4 py-2 mx-auto block rounded-md text-gray-500 hover:bg-green-light hover:border-green hover:text-white cursor-pointer">
                Create a Budget
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
