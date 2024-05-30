import { useContext } from 'react';
import HamsterSpiner from '../Spinner/HamsterSpiner/HamsterSpiner';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import "./Cart.scss";
import OrderService from '../../OrderService/OrderService';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, setCart } = useContext(ProductsContext);
  const navigate = useNavigate();

  const click = (input, cartItem) => {
    console.log(input.target.value);
    cartItem.units = input.target.value;
    setCart(cartItem);
  };

  if (cart.length <= 0) {
    return (
      <div className="spinerContainer">
        <HamsterSpiner/>
        <div className="messageContainer">
          <p>Aun no tienes productos en el carrito</p>
          <p>corre a agregar!</p>
        </div>
      </div>
    );
  }

  const cartItem = cart.map((cartItem, i) => {
    const API_URL = "http://localhost:3002/";
    const img = cartItem?.filePath;
    const totalItem = cartItem.price * cartItem.units;

    return (
      <div  key={i} className="panel-body">
        <div className="cartProduct" key="">
          <div className="checkbox productDiv">
            <input type="checkbox" id='checked' defaultChecked/>
          </div>
          <div className="productDiv">
            <img src={API_URL + img} className="img-cart" alt="Product 1" />
          </div>
       
            <div className="productDiv">
              <p>{cartItem.name}</p>
            </div>
            <div className="productDiv"> 
              {cartItem.price.toFixed(2)} €
            </div>
            <div className="productDiv">
              <form className="form-inline">
                <input
                  id="input"
                  className="quantityInput"
                  type="number"
                  defaultValue={cartItem.units}
                  min="1"
                  max="10"
                  onChange={(e) => click(e, cartItem)}
                />
              </form>
            </div>
            <div className="productDiv"> 
              {totalItem.toFixed(2)} €
            </div>
          </div>
        </div>

    );
  });


  const totalAmount = cart.reduce((acc, cartItem) => {
    return acc + (cartItem.price * cartItem.units);
  }, 0);

  return (
    <div>
      <div className="cartContainer">
        <div className="content">
          <h2 className='cartText'>Cart</h2>
          <div className="cart">
            <div className="panel">
              {cartItem}
            </div>
          </div>
          <div className="secondPanel">
            <div className="totals">
                <div>
                Total: 
                </div>
                <div>
                {totalAmount.toFixed(2)} €
                </div> 
            </div>
            <div className="btns">
              <button className="btn" onClick={() => { navigate("/products") }}>Products</button>
              <button onClick={() => clearCart()} className="btn">Clear cart</button>
              <button onClick={() => {
                OrderService.createOrder(cart)
                clearCart()
                navigate("/orders")
              }} className="btn">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
