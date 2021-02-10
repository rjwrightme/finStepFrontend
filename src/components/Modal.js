import React from "react";
import { useFinStepContext } from "../utils/FinStepContext";
import { HIDE_MODAL } from "../utils/actions";
import ModalBudget from "./ModalBudget";

const Modal = () => {
  const [state, dispatch] = useFinStepContext();

  const renderModalContent = (component) => {
    switch (component) {
      case "budget":
        return <ModalBudget />;
      default:
        return;
    }
  };

  return (
    <div
      onClick={(e) => {
        if (e.target.id === "modalBG") {
          dispatch({ type: HIDE_MODAL });
        }
      }}
      id="modalBG"
      className="fixed min-h-screen bg-ocean-dark bg-opacity-80 flex justify-center items-center z-20 inset-0"
    >
      <div className="fixed bg-white rounded-lg w-96">
        <div className="border-t-8 border-green rounded-lg p-6">
          {renderModalContent(state.modalType)}
        </div>
      </div>
    </div>
  );
};

export default Modal;
