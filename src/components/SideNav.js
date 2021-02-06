import React from "react";

const SideNav = (props) => {
  return (
    <nav className="sideNav w-1/4 p-4 border border-gray-200 h-screen sidebar">
      <ul>
        <li onClick={() => props.setAppState({ currentWindow: "wallet" })}>
          <img src="/images/wallet.svg" alt="wallet icon" />
          <span>Wallet</span>
        </li>
        <li onClick={() => props.setAppState({ currentWindow: "budget" })}>
          <img src="/images/piggy-bank.svg" alt="piggy bank icon" />
          <span>Budget</span>
        </li>
        <li
          onClick={() => props.setAppState({ currentWindow: "transactions" })}
        >
          <img src="/images/receipt.svg" alt="receipt icon" />
          <span>Transactions</span>
        </li>
        <li onClick={() => props.setAppState({ currentWindow: "reports" })}>
          <img src="/images/bar-graph.svg" alt="bar graph icon" />
          <span>Reports</span>
        </li>
        <li onClick={() => props.setAppState({ currentWindow: "settings" })}>
          <img src="/images/settings-cog.svg" alt="settings cog icon" />
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
