import { useContext } from "react";
import { cartContext } from "../Context/CardContext";
import "./CartCard.css";

export const CartCard = ({product}) => {
  const {RemoveFromCart,cartList} = useContext(cartContext);
  const {name, price, image} = product;
  const Remove =()=>{
      
      RemoveFromCart(product);
      
    
  }
  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={Remove}>Remove</button>
      </div>
  )
}
