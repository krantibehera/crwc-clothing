import CartActionTypes from './cart.types';

  export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItems = (items) => ({
    type: CartActionTypes.ADD_ITEM,
    payload:items

});

export const removeItem = (items) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload:items

});


export const clearItemFromCart = (items) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:items

});
