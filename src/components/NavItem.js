import React from "react";

const NavItem = (props) => {
  return (
    <li
      className={`${
        props.window === props.appState.currentWindow ? `active-item` : `item`
      } flex items-center p-4 cursor-pointer box-border`}
      onClick={() => props.setAppState({ currentWindow: props.window })}
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
