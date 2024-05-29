import { useContext, useEffect, useState } from 'react';
import "./Cart.scss";
import HamsterSpiner from '../Spinner/HamsterSpiner/HamsterSpiner';
import "../Spinner/HamsterSpiner/Hamster.scss";
import { ProductsContext } from '../../context/ProductsContext/ProductsState';

const Cart = () => {
    const { cart, clearCart } = useContext(ProductsContext);

    if (cart.length <= 0) {
      return <HamsterSpiner/>
    }
  
    const cartItem = cart.map((cartItem, i) => {
      return (
        <div className="cart" key={i}>
          <span>{cartItem.name}</span>
          <span>{cartItem.price.toFixed(2)} €</span>
        </div>
      );
    });
    return (
        <div>
        {cartItem}
        <button onClick={() => clearCart()}>Clear cart</button>
      </div>
    );
  
};

export default Cart;
