import { useContext, useEffect } from "react";
import { cartContext } from "../Context/CardContext";
import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";
export const Cart = () => {
  useTitle("Cart");
  
 
  const {cartList }= useContext(cartContext);
  useEffect(() => {
    console.log(cartList);
  }, [cartList.length])
  
  const {total} = useContext(cartContext);
  console.log(total)
  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length} / <span>{total}  </span></h1>
        { cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
