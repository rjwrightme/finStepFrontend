import React, { useState } from "react";

const ModalBudget = () => {
  const [state, setState] = useState({
    type: "",
  });

  const addBudgetItem = (e) => {
    e.preventDefault();
    console.log(e.target);
    // const newBudgetItem = {
    //   firstName: e.target.firstName.value,
    //   lastName: e.target.lastName.value,
    //   email: e.target.email.value,
    //   password: e.target.password.value,
    // };

    // postNewUser(newUser);
  };

  const onRadioChange = (e) => {
    setState({
      type: e.target.value,
    });
  };

  return (
    <form method="post" onSubmit={addBudgetItem} className="flex flex-col">
      <h2>What do you wish to add to your budget?</h2>
      <div>
        <input
          type="radio"
          name="type"
          value="income"
          checked={state.type === "income"}
          onChange={onRadioChange}
        />
        <label htmlFor="income">Income</label>
        <input
          type="radio"
          name="type"
          value="savings"
          checked={state.type === "savings"}
          onChange={onRadioChange}
        />
        <label htmlFor="savings">Savings</label>
        <input
          type="radio"
          name="type"
          value="expenses"
          checked={state.type === "expenses"}
          onChange={onRadioChange}
        />
        <label htmlFor="expenses">Expense</label>
        <input
          type="radio"
          name="type"
          value="debt"
          checked={state.type === "debt"}
          onChange={onRadioChange}
        />
        <label htmlFor="debt">Debt</label>
      </div>
      <input
        className="px-4 py-2 border-solid border border-gray-200 rounded-sm my-1"
        type="text"
        name="name"
        placeholder="Name your Income"
      />
      <input
        className="px-4 py-2 border-solid border border-gray-200 rounded-sm my-1"
        type="text"
        name="amount"
        placeholder="$2,000"
      />
      <label htmlFor="frequency">How often?</label>
      <select id="frequency" name="frequency">
        <option value="weekly">Weekly</option>
        <option value="fortnightly">Fortnightly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <button
        type="submit"
        className="bg-green h-10 w-44 my-2 mx-auto rounded-md text-white"
      >
        Add
      </button>
    </form>
  );
};

export default ModalBudget;
