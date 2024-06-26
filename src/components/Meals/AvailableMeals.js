import React from 'react';
import Card from "../UI/Card"
import "./AvailableMeals.css"
import MealItem from './MealItem/MealItem';
function AvailableMeals() {

  const List = [
    {
      ID:"1",
      Name: "Fish Fry",
      Desc: "Finest FISH",
      Price: "150",
    },
    {
      ID:"2",
      Name: "Chappathi",
      Desc: "Wheat Flour",
      Price: "20",
    },
    {
      ID:"3",
      Name: "Parotta",
      Desc: "Maida / Wheat Flour",
      Price: "25",
    },
    {
      ID:"4",
      Name: "Egg Curry",
      Desc: "Finest Egg and Veggies",
      Price: "55",
    },
    {
      ID:"5",
      Name: "Dosa",
      Desc: "Rice Flour",
      Price: "20",
    },
  ];
  const MealsList = List.map((meal) => (<MealItem key={meal.ID} name={meal.Name} desc={meal.Desc} price={meal.Price}/>))
  


  return (
    <section className="meals">
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals