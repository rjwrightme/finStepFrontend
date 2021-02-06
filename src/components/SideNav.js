import React from "react";

const SideNav = () => {
  return (
    <nav className="sideNav">
      <ul>
        <li>
          <img src="/images/wallet.svg" alt="wallet icon" />
          <span>Wallet</span>
        </li>
        <li>
          <img src="/images/piggy-bank.svg" alt="piggy bank icon" />
          <span>Budget</span>
        </li>
        <li>
          <img src="/images/receipt.svg" alt="receipt icon" />
          <span>Transactions</span>
        </li>
        <li>
          <img src="/images/bar-graph.svg" alt="bar graph icon" />
          <span>Reports</span>
        </li>
        <li>
          <img src="/images/settings-cog.svg" alt="settings cog icon" />
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
