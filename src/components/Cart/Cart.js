import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";

const Cart = () => {
  const cartItems = (
    <ul className="cart-items">
      {[
        {
          ID: "5",
          Name: "Dosa",
          Desc: "Rice Flour",
          Price: "20",
        },
      ].map((meal) => (
        <li key={meal.ID}> {meal.Name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>80</span>
      </div>
      <div className="actions">
        <button className="button--alt">Close</button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;