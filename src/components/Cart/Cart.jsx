import { useContext, } from 'react';
import HamsterSpiner from '../Spinner/HamsterSpiner/HamsterSpiner';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import "./Cart.scss";
import OrderService from '../../OrderService/OrderService';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const navigate = useNavigate()
    const { cart, clearCart } = useContext(ProductsContext);

    if (cart.length <= 0) {
      return (
        <div className="spinerContainer">
        
        <HamsterSpiner/>
        <div className="messageContainer">
          <p>Aun no tienes productos en el carrito</p>
          <p>corre a agregar!</p>
        </div>
        </div>
      )

    }

    const cartItem = cart.map((cartItem, i) => {
      const API_URL = "http://localhost:3002/"
      const img = cartItem.filePath;
      return (

              <div  key={i} className="panel-body">
                
                      <div className="cartProduct" key="">
                          <div className="cartProduct-image">
                              <img src={API_URL+img} className="img-cart" alt="Product 1" />
                          </div>
                          <div className="product-info">
                              <p>{cartItem.name}</p>
                          </div>
                          <div className="product-price">
                          {cartItem.price.toFixed(2)} €
                          </div>
                          <div className="product-qty">
                              <form className="form-inline">
                                  <input id="input"
                                      className="form-control"
                                      type="number"
                                      min="0"
                                      max="10"
                                  />
                              </form>
                          </div>
                        
                          <div className="product-total">
                              .00 €
                          </div>
                      </div>
                  
          
              </div>

      );
    });
    return (
    <div>
      <div className="cartContainer">
          <div className="content">
            <div>
              <div className="cart" >
                <div className="panel">
                  {cartItem}
                </div>
              </div>
            <div className="btns">
                    <button  className="btn" onClick={()=>{navigate("/products")}}>Products</button>
                    <button  onClick={() => clearCart()}  className="btn">Clear cart</button>
                    <button onClick={()=> {
                      OrderService.createOrder(cart)
                      clearCart()
                    }}  className="btn">Buy</button>
            </div>
              </div>
          </div>
      </div>
    </div>
    );
  
};

export default Cart;
