import { createContext, useReducer } from "react";
import { cartReducer } from "../Reducer/cartReducer";
const initialState ={
    cartList : [],
    total :0
};
export const cartContext = createContext(initialState);

export const CartProvider = (props )=>{
    const [state, dispatch] = useReducer(cartReducer, initialState)


    const UpdateTotal = (product)=>{
        let total=0;
        product.forEach(element => {
            total=total+ element.price;
        });
        console.log("total is "+ total);

        dispatch({
            type : "UPDATE_TOTAL",
            payload:{
                total
            }
        })
        
    }
    const AddToCart =(product)=>{
        
        const updatedCart = state.cartList.concat(product);
        UpdateTotal(updatedCart);
        dispatch({
            type : "ADD_TO_CART",
            payload:{
                product : updatedCart
            }
        })
        
    }

    const RemoveFromCart = (product)=>{
        const updatedCart = state.cartList.filter(current => current.id !==product.id);
        UpdateTotal(updatedCart);
        dispatch({
            type : "DELETE_FROM_CART",
            payload:{
                product : updatedCart
            }
        })
        
    }
   
    
    const value ={
        total:   state.total,
        cartList : state.cartList,
        AddToCart,
        RemoveFromCart
    };
    return (
        <cartContext.Provider  value={value}>
            {props.children}
        </cartContext.Provider>
    )
    
}

