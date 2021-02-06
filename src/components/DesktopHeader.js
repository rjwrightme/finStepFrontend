import React from "react";

const DesktopHeader = () => {
  return (
    <header className="bg-blue p-4 flex justify-between items-center shadow relative z-10">
      <div>
        <img
          className="w-32"
          src="/images/finstep-logo.svg"
          alt="finstep logo"
        />
      </div>
      <div className="border-solid border-2 border-white box-border border-opacity-50 px-2 py-1 rounded-md text-white text-opacity-90">
        Log Out
      </div>
    </header>
  );
};

export default DesktopHeader;
