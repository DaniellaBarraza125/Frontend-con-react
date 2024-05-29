import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from "../../context/UserContext/UserState";
import "./Orders.scss";
import "../Spinner/HamsterSpiner/Hamster.scss";
import HamsterSpiner from '../Spinner/HamsterSpiner/HamsterSpiner';

const Orders = () => {
    const { token, user, getUserInfo } = useContext(UserContext);
    const [productQuantities, setProductQuantities] = useState({});

    useEffect(() => {
        getUserInfo();
    }, [token]);

    useEffect(() => {
        if (user && user.Orders) {
            setProductQuantities({});
        }
    }, [user]);

    if (!user) {
        return (
          <HamsterSpiner/>
        );
    }

    
    const orders = user.Orders;
    const orderedProducts = orders[0].Products;
    
    const handleInputChange = (event, index) => {
        const value = parseInt(event.target.value, 10);
            setProductQuantities(prevQuantities => ({
                ...prevQuantities,
                [index]: value
              }
          )
        )
        
    };
  return (
    <div className="container">
    <div className="content">
        <div>
            <div className="panel panel-info panel-shadow">
                <div className="panel-heading">
                    <h3>
                        <img className="img-circle img-thumbnail" src="https://bootdey.com/img/Content/user_3.jpg" alt="User" />
                        Matew darfkmoun
                    </h3>
                </div>
                <div className="panel-body">
                    {orderedProducts.map((product, i) => {
                      const API_URL = "http://localhost:3002/";
                      const img = product.filePath;
                      return (

                        <div className="product" key={i}>
                            <div className="product-image">
                                <img src={API_URL+img} className="img-cart" alt="Product 1" />
                            </div>
                            <div className="product-info">
                                <strong>{product.name}</strong>
                            </div>
                            <div className="product-qty">
                                <form className="form-inline">
                                    <input
                                        className="form-control"
                                        type="number"
                                        value={productQuantities[i] || 1}
                                        min="0"
                                        max="10"
                                        onChange={(event) => handleInputChange(event, i)}
                                    />
                                </form>
                            </div>
                            <div className="product-price">
                                {product.price}
                            </div>
                            <div className="product-total">
                                ${product.price * (productQuantities[i] || 1)}
                            </div>
                        </div>)
                    
})}
                    <div className="summary">
                        <div className="summary-row">
                            <div className="summary-label">Total Product</div>
                            <div className="summary-value">
                            </div>
                        </div>
                        <div className="summary-row">
                            <div className="summary-label">Total Shipping</div>
                            <div className="summary-value">$2.00</div>
                        </div>
                        <div className="summary-row">
                            <div className="summary-label"><strong>Total</strong></div>
                            <div className="summary-value">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-success"><span className="glyphicon glyphicon-arrow-left"></span>&nbsp;Continue Shopping</a>
            <a href="#" className="btn btn-primary pull-right">Next<span className="glyphicon glyphicon-chevron-right"></span></a>
        </div>
    </div>
</div>
  )
}

export default Orders