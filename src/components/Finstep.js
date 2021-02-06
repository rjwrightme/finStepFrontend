import React, { useState } from "react";
import Responsive from "./Responsive";
import SideNav from "./SideNav";
import Wallet from "./Wallet";
import Budget from "./Budget";
import Transactions from "./Transactions";
import Reports from "./Reports";
import Settings from "./Settings";
import DesktopHeader from "./DesktopHeader";

const Finstep = () => {
  const [appState, setAppState] = useState({
    currentWindow: "wallet",
  });

  const renderWindow = (window) => {
    switch (window) {
      case "wallet":
        return <Wallet />;
      case "budget":
        return <Budget />;
      case "transactions":
        return <Transactions />;
      case "reports":
        return <Reports />;
      case "settings":
        return <Settings />;
      default:
        return <Wallet />;
    }
  };

  return (
    <div>
      <Responsive displayIn={["Laptop", "Tablet"]}>
        <DesktopHeader />
        <div className="flex">
          <SideNav appState={appState} setAppState={setAppState} />
          {renderWindow(appState.currentWindow)}
        </div>
      </Responsive>
      {/* <h1>It works!</h1>
      <p>First: {profile.firstName}</p>
      <p>Last: {profile.lastName}</p>
      <p>Email: {profile.email}</p> */}
    </div>
  );
};

export default Finstep;
