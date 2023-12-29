export const cartReducer =(state,action)=>{
        const {type,payload}= action;
        switch(type){
            case "ADD_TO_CART":
                return {...state, cartList :payload.product}
            case "DELETE_FROM_CART":
                return {...state, cartList :payload.product}
            case "UPDATE_TOTAL":
                return {...state, total: payload.total}

        }
       
}