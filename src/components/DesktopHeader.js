import React from "react";
import { useUserContext } from "../utils/UserContext";
import { logout } from "../utils/api";

const DesktopHeader = () => {
  const [, dispatch] = useUserContext();

  return (
    <header className="bg-blue p-4 flex justify-between items-center shadow relative z-10">
      <div>
        <img
          className="w-32"
          src="/images/finstep-logo.svg"
          alt="finstep logo"
        />
      </div>
      <div
        onClick={() => logout(dispatch)}
        className="border-solid border-2 border-white box-border border-opacity-50 px-2 py-1 rounded-md text-white text-opacity-90 hover:bg-white hover:text-ocean cursor-pointer"
      >
        Log Out
      </div>
    </header>
  );
};

export default DesktopHeader;
