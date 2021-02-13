import React, { useState } from "react";
import { useFinStepContext } from "../utils/FinStepContext";
import { deleteBudgetItem } from "../utils/api";
import { titleCase } from "../utils/functions";
import {
  HIDE_MODAL,
  UPDATE_BUDGET_MAX,
  UPDATE_BUDGET_CURRENT,
} from "../utils/actions";

const ModalEditBudgetItem = () => {
  const [appState, dispatch] = useFinStepContext();
  const [state, setState] = useState({
    id: appState.selectedItem.id,
    itemName: appState.selectedItem.itemName,
    type: appState.selectedItem.type,
    amount: appState.selectedItem.amount,
    frequency: appState.selectedItem.frequency,
  });

  const handleEdit = (e) => {
    e.preventDefault();
    const updatedBudgetItem = {
      itemName: e.target.name.value,
      type: e.target.type.value,
      amount: parseInt(e.target.amount.value * 100), // convert value to number in cents
      frequency: e.target.frequency.value,
      budgetId: appState.budgetId,
    };

    switch (updatedBudgetItem.frequency) {
      case "weekly":
        updatedBudgetItem.daily = updatedBudgetItem.amount / 7;
        break;
      case "fortnightly":
        updatedBudgetItem.daily = updatedBudgetItem.amount / 14;
        break;
      case "monthly":
        updatedBudgetItem.daily = (updatedBudgetItem.amount * 12) / 365;
        break;
      case "yearly":
        updatedBudgetItem.daily = updatedBudgetItem.amount / 365;
        break;
      default:
        updatedBudgetItem.daily = 0;
    }

    if (updatedBudgetItem.type === "income") {
      dispatch({
        type: UPDATE_BUDGET_MAX,
        payload: updatedBudgetItem.daily * 30,
      });
    } else {
      dispatch({
        type: UPDATE_BUDGET_CURRENT,
        payload: updatedBudgetItem.daily * 30,
      });
    }

    // POST the data to the server
    //   postNewBudgetItem(updatedBudgetItem).then(dispatch({ type: HIDE_MODAL }));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteBudgetItem(state.id).then(dispatch({ type: HIDE_MODAL }));
  };

  const onRadioChange = (e) => {
    setState({
      type: e.target.value,
    });
  };

  const switchFrequency = (type) => {
    switch (type) {
      case "income":
        return "How often do you get paid?";
      case "savings":
        return "How often do you want to save this amount?";
      case "expense":
        return "How often do you pay this expense?";
      case "debt":
        return "How often do you make this payment?";
      default:
        return "How often?";
    }
  };

  return (
    <form method="post" className="flex flex-col">
      <h2 className="text-xl text-ocean-dark font-semibold">
        Edit Budget Item
      </h2>
      <div className="flex justify-around my-4">
        <label className="text-center text-gray-500 cursor-pointer">
          <input
            type="radio"
            name="type"
            value="income"
            checked={state.type === "income"}
            onChange={onRadioChange}
          />
          <img
            className={
              state.type === "income" ? "opacity-100 w-16" : "opacity-50 w-16"
            }
            src="/images/income.svg"
            alt="Income button"
          />
          Income
        </label>
        <label className="text-center text-gray-500 cursor-pointer">
          <input
            type="radio"
            name="type"
            value="savings"
            checked={state.type === "savings"}
            onChange={onRadioChange}
          />
          <img
            className={
              state.type === "savings" ? "opacity-100 w-16" : "opacity-50 w-16"
            }
            src="/images/savings.svg"
            alt="Savings button"
          />
          Savings
        </label>
        <label className="text-center text-gray-500 cursor-pointer">
          <input
            type="radio"
            name="type"
            value="expense"
            checked={state.type === "expense"}
            onChange={onRadioChange}
          />
          <img
            className={
              state.type === "expense" ? "opacity-100 w-16" : "opacity-50 w-16"
            }
            src="/images/expenses.svg"
            alt="Expense button"
          />
          Expense
        </label>
        <label className="text-center text-gray-500 cursor-pointer">
          <input
            type="radio"
            name="type"
            value="debt"
            checked={state.type === "debt"}
            onChange={onRadioChange}
          />
          <img
            className={
              state.type === "debt" ? "opacity-100 w-16" : "opacity-50 w-16"
            }
            src="/images/debt.svg"
            alt="Debt button"
          />
          Debt
        </label>
      </div>
      <input
        className="px-4 py-2 border-solid border border-gray-200 rounded-sm my-1"
        type="text"
        name="name"
        defaultValue={state.itemName}
        placeholder={`${titleCase(state.type)} Name`}
      />
      <input
        className="px-4 py-2 border-solid border border-gray-200 rounded-sm my-1"
        type="input"
        name="amount"
        defaultValue={state.amount}
        placeholder="2,000"
      />
      <label className="text-ocean-dark mt-4" htmlFor="frequency">
        {switchFrequency(state.type)}
      </label>
      <select
        id="frequency"
        className="px-4 py-2 border-solid border border-gray-200 rounded-sm my-1 text-gray-500"
        name="frequency"
        defaultValue={state.frequency}
      >
        <option value="weekly">Weekly</option>
        <option value="fortnightly">Fortnightly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <div className="flex justify-around">
        <button
          onClick={handleEdit}
          type="submit"
          className="bg-green h-10 w-5/12 my-2 mt-5 mb-1 rounded-md text-white"
        >
          Edit {titleCase(state.type)}
        </button>
        <button
          onClick={handleDelete}
          type="submit"
          className="bg-red-400 h-10 w-5/12 my-2 mt-5 mb-1 rounded-md text-white"
        >
          Delete {titleCase(state.type)}
        </button>
      </div>
    </form>
  );
};

export default ModalEditBudgetItem;
