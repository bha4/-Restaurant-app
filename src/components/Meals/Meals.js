import React from "react";
import RestaurantSummary from "./RestaurantSummary";
import "./Meals.css";

function Meals() {
  const List = [
    {
      Name: "Fish Fry",
      Desc: "Finest FISH",
      Price: "150",
    },
    {
      Name: "Chappathi",
      Desc: "Wheat Flour",
      Price: "20",
    },
    {
      Name: "Parotta",
      Desc: "Maida / Wheat Flour",
      Price: "25",
    },
    {
      Name: "Egg Curry",
      Desc: "Finest Egg and Veggies",
      Price: "55",
    },
    {
      Name: "Dosa",
      Desc: "Rice Flour",
      Price: "20",
    },
  ];

  const Meals = List.map((meal) => (
    <li key={meal.Name} className="meal-card">
      <h2>{meal.Name}</h2>
      <p className="meal-description">{meal.Desc}</p>
      <p className="meal-price">₹{meal.Price}</p>
    </li>
  ));

  return (
    <>
      <RestaurantSummary />
      <ul className="meal-list">{Meals}</ul>
    </>
  );
}

export default Meals;
