import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/app/wallet">
        <img src="%PUBLIC_URL%/images/wallet.svg" alt="Wallet" />
      </Link>
    </nav>
  );
};

export default Nav;
