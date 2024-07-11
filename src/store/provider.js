import { useState } from "react";
import context from "./context";

const Provider = (props) => {
   const [items, setItems] = useState([]);
     const addItemToCart = (item) => {
       setItems([...items, item]);
     };
;
   const removeItemFromCart =(id)=>{
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
   }
   
    const cartContext = {
      items: items,
      addItem: addItemToCart,
      removeItem: removeItemFromCart,
    };
  return (
    <context.Provider value={cartContext}>{props.children}</context.Provider>
  );
};
export default Provider;



