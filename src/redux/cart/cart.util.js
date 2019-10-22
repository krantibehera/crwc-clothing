export const addItemToCart = (cartItems, addCartItemsToCart) => {
    const existingCartItem = cartItems.find(cartItem=>{
        if(cartItem.id===addCartItemsToCart.id){
            return true;
        }
    })

    if(existingCartItem){
      return cartItems.map(cartItem =>
        cartItem.id===addCartItemsToCart.id
        ? {...cartItem, quantity: cartItem.quantity+1}
        : cartItem
       )
    }

    return [...cartItems,{...addCartItemsToCart, quantity:1 }];
};

export const removeItem = (cartItem,cartItemToRemove) => {
    const exixtingItem = cartItem.find((cartItem)=>cartItem.id===cartItemToRemove.id)

    if(exixtingItem.quantity===1) {
        return cartItem.filter(cartItem => cartItem.id!==cartItemToRemove.id);
    }

    return cartItem.map(cartItem => {
        return cartItem.id===cartItemToRemove.id ? {...cartItem, quantity:cartItem.quantity-1} : cartItem
    })
}

