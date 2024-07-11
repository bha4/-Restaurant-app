import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import context from "../../store/context";


function HeaderCartButton(props) {
  const cartCont = useContext(context);
  let quantity = 0;
  cartCont.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  })
  return (
    <button className="button" onClick={props.onCartClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{quantity}</span>
    </button>
  );
}

export default HeaderCartButton;
