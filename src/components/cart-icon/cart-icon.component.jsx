 import React from 'react';
 import   { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
 import './cart-icon.styles.scss';
 import { connect } from 'react-redux';
 import {toggleCartHidden} from '../../redux/cart/cart.actions';
 import {selectCartItemCount} from '../../redux/cart/cart-selector';
 import { createStructuredSelector } from 'reselect';


const CartIcon = ({toggle, itemCount}) => (
     <div className='cart-icon' onClick={toggle}>
         <ShoppingIcon className= 'shopping-icon' />
         <span className='item-count'>{itemCount}</span>
     </div>
 );

 const mapStateToProps = createStructuredSelector ({
         itemCount: selectCartItemCount
 });

 const mapDispatchToProps = (dispatch) => {
     return {
    toggle: () => dispatch(toggleCartHidden())
     }
 }

 export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);