import React from "react";
import { useFinStepContext } from "../utils/FinStepContext";
import Responsive from "./Responsive";
import SideNav from "./SideNav";
import DesktopHeader from "./DesktopHeader";
import Wallet from "./Wallet";
import Budget from "./Budget";
import Transactions from "./Transactions";
import Reports from "./Reports";
import Settings from "./Settings";
import Modal from "./Modal";

const Finstep = () => {
  const [state] = useFinStepContext();

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
      {state.modal && <Modal />}
      <Responsive displayIn={["Laptop", "Tablet"]}>
        <DesktopHeader />
        <div className="flex">
          <SideNav />
          {renderWindow(state.currentWindow)}
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
