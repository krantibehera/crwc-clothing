import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItem} from '../../redux/cart/cart-selector'
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions';




const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        { cartItems.length ?
            (cartItems.map(cartItem =>(
        <CartItem key={cartItem.id} item={cartItem} />   
            ))) : (<span className='empty-message'>Your Cart is Empty</span>) 
        }  
        </div>
        <CustomButton 
            onClick={()=> {
                history.push('/checkout');
                dispatch(toggleCartHidden());
                }}
                > Go to Checkout </CustomButton>
    </div>
)
 const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItem
   }
)
export default withRouter(connect(mapStateToProps)(CartDropdown));