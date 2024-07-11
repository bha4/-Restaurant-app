import React, { useContext } from "react";
import "./MealItemForm.css"
import Input from "../../UI/Input";
import Context from "../../../store/context";

function MealItemForm(props) {
  const cart = useContext(Context);
  const addItemsToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("amount" + props.id).value;
    cart.addItem({ ...props.item, quantity: quantity });
  };
  return (
    <form className="form">
      <Input
        label="Amount"
        input={{
          id: "amount" +props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemsToCart}>+ ADD</button>
    </form>
  );
}

export default MealItemForm;
