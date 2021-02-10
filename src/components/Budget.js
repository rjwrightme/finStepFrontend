import React from "react";
import { useFinStepContext } from "../utils/FinStepContext";
import { useUserContext } from "../utils/UserContext";
import { postNewBudget } from "../utils/api";
import { SHOW_MODAL, UPDATE_BUDGET_ID } from "../utils/actions";

const Budget = () => {
  const [userState] = useUserContext();
  const [state, dispatch] = useFinStepContext();

  const addBudget = (e) => {
    e.preventDefault();
    const newBudget = {
      userId: userState.id,
    };
    // POST the data to the server
    postNewBudget(newBudget).then((response) => {
      console.log(response);
      dispatch({ type: SHOW_MODAL, modal: "budgetItem" });
      dispatch({ type: UPDATE_BUDGET_ID, id: response.data.id });
    });
  };

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
            {state.budgetId > 0 ? (
              <p className="text-2xl text-gray-500 font-bold">
                ${state.budgetCurrent} of ${state.budgetMax}
              </p>
            ) : (
              <button
                onClick={addBudget}
                className="border-solid border-2 border-gray-500 bg-silver box-border px-4 py-2 mx-auto block rounded-md text-gray-500 hover:bg-green-light hover:border-green hover:text-white cursor-pointer"
              >
                Create a Budget
              </button>
            )}
          </div>
          <button
            onClick={() => dispatch({ type: SHOW_MODAL, modal: "budgetItem" })}
            className="fixed right-4 bottom-4 w-10 h-10 rounded-full border-solid border-2 border-ocean bg-aqua text-white text-3xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budget;
