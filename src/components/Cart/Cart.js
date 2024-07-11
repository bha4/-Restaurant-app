import React, { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import Context from "../../store/context";

const Cart = (props) => {
    const cartCont =useContext(Context);
  const cartItems = (
    <ul className="cart-items">
      {cartCont.items.map((meal) => (
        <li>
          {meal.name}  {meal.price}  {meal.quantity}
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>80</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>Close</button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
