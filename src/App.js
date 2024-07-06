import React,{useState} from "react";
import Cart from "./components/Cart/Cart.js";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals.js";

function App() {
  const [cartShown,setCartShown]=useState(false)

  const shownCartHandler =()=>{
    setCartShown(true);
  }
  
  const hideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <>
      {cartShown && <Cart onClose={hideCartHandler}/>}
      <Header onShow={shownCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
