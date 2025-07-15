import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "cartslice",
    initialState: {
        cart: []
    },
    reducers: {
        Additem: (state, action) => {
            state.cart.push({ ...action.payload, quantity: 1 });
        },
        DeleteItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id != action.payload.id);
        }
        ,
        IncreaseQuantity: (state, action) => {
            const item = state.cart.find((x) => x.id == action.payload.id);
            item.quantity += 1;
        },
        DecreaseQuantity: (state, action) => {
             const item = state.cart.find((x) => x.id == action.payload.id);

            if(item.quantity==1)
            {
            state.cart = state.cart.filter((item) => item.id != action.payload.id);

            }

            else{
                 
                item.quantity -= 1;
            }
            
        }

    }
})


export default CartSlice.reducer;  // to map slice name and reducers in store 
export const { Additem, DeleteItem, DecreaseQuantity, IncreaseQuantity } = CartSlice.actions; //to actually use reducers in cart system and because of actions it can find the name of that slice 


