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
      onClick={() => dispatch({ type: HIDE_MODAL })}
      className="fixed min-h-screen bg-gray-900 opacity-75 flex justify-center items-center z-20 inset-0"
    >
      <div className="fixed bg-white rounded-lg">
        {renderModalContent(state.modalType)}
      </div>
    </div>
  );
};

export default Modal;
