import React from 'react';
import "./MealItem.css"
import MealItemForm from "./MealItemForm.js"
function MealItem(props) {
  return (
    <li>
      <div className="meal">
        <h3>{props.name}</h3>
        <div className="description">{props.desc}</div>
        <div className="price">{props.price}</div>
        <div>
          <MealItemForm id={props.id} item={props} />
        </div>
      </div>
    </li>
  );
}

export default MealItem