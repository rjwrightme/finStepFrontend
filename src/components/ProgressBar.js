import React from "react";

const ProgressBar = (props) => {
  const spentPercent = (props.spent / props.budget) * 100;

  return (
    <div>
      <div
        className={`balanceBar w-100 ${
          props.height === "large" ? "h-24px" : "h-12px"
        } border-solid border rounded-xl border-gray-300 bg-gray-100`}
      >
        <div
          className={`${
            spentPercent > 100 ? "bg-red-400" : "progress-bar"
          } rounded-xl ${
            props.height === "large" ? "h-22px" : "h-10px"
          } inline-block align-top text-center transition-all ease-in-out duration-1000`}
          style={{ width: spentPercent > 100 ? 100 + "%" : spentPercent + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
