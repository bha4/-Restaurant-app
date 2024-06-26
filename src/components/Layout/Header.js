import React from "react";
import "./Header.css";
import mealsImg from "../../assets/table-full-food-including-plate-food-bottle-ketchup_917576-515.avif";
import HeaderCartButton from "./HeaderCartButton";
function Header() {
  return (
    <>
      <header className="header">
        <h2>ReactMeals</h2>
        <button>
          <HeaderCartButton />
        </button>
      </header>
      <div className="image">
        <img src={mealsImg} alt="A table full of food" />
      </div>
    </>
  );
}

export default Header;
