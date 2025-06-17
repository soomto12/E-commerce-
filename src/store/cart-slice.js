import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : { items:[], totalQuantity:0, Qunatity:0 },
    reducers:{
addItemToCart(state,actions){
const NewItem = actions.payload;
const existingItem = state.items.find(items=>items===NewItem.id);

state.Qunatity++

if(!existingItem){
    state.items.push({
        Id:NewItem.id,
        price:NewItem.price,
        quantity:1,
        totalPrice:NewItem.price,
     name:NewItem.title
    });

}else{
    existingItem.quantity++;
    existingItem.totalPrice=existingItem.totalPrice + NewItem.price;
}

},
removeItemFromCart(state, actions){
const id = actions.payload;
const existingItem = state.items.find(item =>item.id ===id);
state.totalQuantity--;
if (existingItem.quantity === 1) {
    state.items=state.items.filter(item=> item.id !==id)
}else{
    existingItem.quantity--;
}

}

    }
});
 export const cartAction = cartSlice.actions;
export default cartSlice;