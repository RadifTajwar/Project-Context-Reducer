import { useContext, useEffect, useState } from "react";
import { cartContext } from "../Context/CardContext";
import "./ProductCard.css";
export const ProductCard = ({product}) => {
  const {name, price, image} = product;
  const {AddToCart,RemoveFromCart,cartList}=useContext(cartContext);
  const [AddOn, setAddOn] = useState(false)
  
  const Add =()=>{
      console.log("clicked");
      AddToCart(product);
      setAddOn(true);
  }
  const Del= ()=>{
      RemoveFromCart(product);
      setAddOn(false);
  }
  useEffect(() => {
    const IsInCart = cartList.find(Element=> Element.id === product.id);
    if(IsInCart){
      setAddOn(true);
    }
    else{
      setAddOn(false);
    }

  }, [])
  
  

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>

        {
          AddOn ? <button onClick={Del}>remove</button> : <button onClick={Add}>Add To Cart</button>
        }
      </div>
    </div>
  )
}
