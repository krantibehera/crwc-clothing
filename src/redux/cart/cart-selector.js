import { createSelector } from 'reselect';

const selectCart = state => {
    return state.cart;
}

export const selectCartItem = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemCount = createSelector(
    [selectCartItem],
    cartItems =>
       cartItems.reduce(
           (accumulator,cartItems) => 
           accumulator + cartItems.quantity,
          0
        )
    );

    export const selectCartTotal = createSelector(
        [selectCartItem],
    cartItems =>
       cartItems.reduce(
           (accumulator,cartItems) => 
           accumulator + cartItems.quantity * cartItems.price,
          0
        )
    )