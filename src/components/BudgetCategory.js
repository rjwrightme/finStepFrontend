import React from "react";
import { useFinStepContext } from "../utils/FinStepContext";
import { titleCase, formatMoney } from "../utils/functions";

const BudgetCategory = (props) => {
  const [state] = useFinStepContext();

  return (
    <div
      className={`${props.category} border-solid border-2 rounded-lg my-4 p-4`}
    >
      <h2 className="text-lg font-bold">{titleCase(props.category)}</h2>

      {state[props.category].map((lineItem) => {
        return (
          <div className="flex justify-between border-b border-gray-300 py-4">
            <span className="text-gray-500">{lineItem.itemName}</span>
            <span className="text-gray-500">
              {formatMoney(lineItem.amount)}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default BudgetCategory;
