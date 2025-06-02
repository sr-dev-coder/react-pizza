import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // cart: []
    cart: [
        {
            id: 12,
            name: 'Pizza',
            quantity: 2,
            unitPrice: 16,
            totalPrice: 32
        }
    ]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem(state, action){
            state.cart.push(action.payload);
        },
        deleteItem(state, action){
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        increaseItemQuantity(state, action){
            const item = state.cart.find(item => item.id === action.payload);
            item.quantity++;
            item.totalPrice =item.quantity * item.unitPrice
        },
        decreaseItemQuantity(state, action){
            const item = state.cart.find(item => item.id === action.payload);
            item.quantity--;
            item.totalPrice =item.quantity * item.unitPrice
        },
        clearItem(state){
            state.cart = []
        }
    }
});

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearItem } = cartSlice.actions;
export default cartSlice.reducer;