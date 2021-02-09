import React from "react";
import { useFinStepContext } from "../utils/FinStepContext";
import { UPDATE_WINDOW } from "../utils/actions";

const NavItem = (props) => {
  const [state, dispatch] = useFinStepContext();

  return (
    <li
      className={`${
        props.window === state.currentWindow ? `active-item` : `item`
      } flex items-center p-4 cursor-pointer box-border`}
      onClick={() => dispatch({ type: UPDATE_WINDOW, window: props.window })}
    >
      <img
        className="mr-4"
        src={`/images/${props.window}.svg`}
        alt={`${props.window} icon`}
      />
      <span className="text-gray-500">
        {props.window.charAt(0).toUpperCase() + props.window.slice(1)}
      </span>
    </li>
  );
};

export default NavItem;
