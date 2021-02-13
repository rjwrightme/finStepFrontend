import React from "react";
import NavItem from "./NavItem";

const SideNav = (props) => {
  return (
    <nav className="sideNav bg-white w-1/4 border border-gray-200 h-screen h-screen-offset">
      <ul className="mt-4">
        <NavItem
          appState={props.appState}
          setAppState={props.setAppState}
          window="wallet"
        />
        <NavItem
          appState={props.appState}
          setAppState={props.setAppState}
          window="budget"
        />
        <NavItem
          appState={props.appState}
          setAppState={props.setAppState}
          window="transactions"
        />
        <NavItem
          appState={props.appState}
          setAppState={props.setAppState}
          window="reports"
        />
        <NavItem
          appState={props.appState}
          setAppState={props.setAppState}
          window="settings"
        />
      </ul>
    </nav>
  );
};

export default SideNav;
