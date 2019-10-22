import React from 'react';
import './checkout-item.styles.scss'
import {clearItemFromCart,removeItem,addItems} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';



const CheckoutItem = ({item,clearItem,addItems,removeItem}) => (
    <div className='checkout-item'>
        <div className='image-container'>
        <img src={item.imageUrl} alt='item' />
        </div>
        <span className='name'>{item.name}</span>
        <span className='quantity'>
           <div className='arrow' onClick= {()=>removeItem(item)}>&#10094;</div>
          <span> {item.quantity} </span>
           <div className='arrow' onClick= {()=>addItems(item)}>&#10095;</div>
        </span>
        <span className='price'>{item.price}</span>
        <div className='remove-button' onClick ={() => clearItem(item)}>&#10005;</div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    clearItem:item => dispatch(clearItemFromCart(item)),
    addItems: item => dispatch(addItems(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);