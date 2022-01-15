import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEMS") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    //cart에 아이템 추가하기

    let updatedItems;

   //이미 아이템이 추가되어있는경우
    if (existingCartItem) {
    const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }//아이템이 처음 추가되는경우
    else {
      updatedItems = state.items.concat(action.item);
    }
    
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type ==='REMOVE_ITEMS') {
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      //수량이 1개만 남은경우 - 시킬때
      //filter : function receives the item which if it return true , we keep the item in the newly returned array (if false get rid of it)
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter(item => action.id !== item.id)
      }
      ////수량이 2개이상남은경우 - 시킬때
      else {
        const updatedItem = {...existingItem, amount: existingItem.amount -1 };
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return {
        items:updatedItems,
        totalAmount : updatedTotalAmount,
      }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  //useReducer(function, initialstate)
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEMS", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEMS", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
