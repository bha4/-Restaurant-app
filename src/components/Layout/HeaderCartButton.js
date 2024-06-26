import React from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
function HeaderCartButton() {
  return (
    <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
}

export default HeaderCartButton;
