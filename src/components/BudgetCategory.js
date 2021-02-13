import React from "react";
import { useFinStepContext } from "../utils/FinStepContext";
import { titleCase, formatMoney } from "../utils/functions";
import { SHOW_MODAL } from "../utils/actions";

const BudgetCategory = (props) => {
  const [state, dispatch] = useFinStepContext();

  const handleClick = (e) => {
    if (e.target.getAttribute("data-id") != null) {
      const category = e.target.getAttribute("data-category");
      const id = e.target.getAttribute("data-id");
      const selectedItem = state[category].filter(
        (item) => parseInt(item.id) === parseInt(id)
      )[0];
      dispatch({
        type: SHOW_MODAL,
        modal: "editBudgetItem",
        selectedItem: selectedItem,
      });
    }
  };

  return (
    <div
      className={`${props.category} border-solid border-2 rounded-lg my-4 p-4`}
    >
      <h2 className="text-lg font-bold">{titleCase(props.category)}</h2>

      {state[props.category].map((lineItem) => {
        return (
          <div
            key={`budgetItem-${lineItem.id}`}
            data-id={lineItem.id}
            data-category={props.category}
            onClick={handleClick}
            className="flex justify-between border-b border-gray-300 py-4 bg-darken cursor-pointer"
          >
            <span
              data-id={lineItem.id}
              data-category={props.category}
              className="text-gray-500"
            >
              {lineItem.itemName}
            </span>
            <span
              data-id={lineItem.id}
              data-category={props.category}
              className="text-gray-500"
            >
              {formatMoney(lineItem.amount)}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default BudgetCategory;
