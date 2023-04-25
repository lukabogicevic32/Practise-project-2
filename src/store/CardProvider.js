import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD' ) {
      const updatedItems = state.items.concat(action.item); //doda novi item u novi niz
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
    }
  return  defaultCartState;
};

const CardProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandle = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandle
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CardProvider;