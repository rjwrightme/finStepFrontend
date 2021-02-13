import React, { useEffect } from "react";
import { useFinStepContext } from "../utils/FinStepContext";
import { useUserContext } from "../utils/UserContext";
import { getBudget, getBudgetItems } from "../utils/api";
import { UPDATE_BUDGET_ID, SYNC_BUDGET_ITEMS } from "../utils/actions";
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
  const [userState] = useUserContext();
  const [state, dispatch] = useFinStepContext();

  useEffect(() => {
    getBudget(userState.id).then(({ data }) => {
      if (data == null) {
        return;
      }
      dispatch({ type: UPDATE_BUDGET_ID, id: data.id });
      getBudgetItems(userState.id).then(({ data }) => {
        dispatch({ type: SYNC_BUDGET_ITEMS, payload: data });
      });
    });
  }, [dispatch, state.budgetId, userState.id]);

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
