import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from "../../context/UserContext/UserState";
import "./Orders.scss";
import "../Spinner/HamsterSpiner/Hamster.scss";
import HamsterSpiner from '../Spinner/HamsterSpiner/HamsterSpiner';

const Orders = () => {
    const { token, user, getUserInfo } = useContext(UserContext);

    useEffect(() => {
        getUserInfo();
    }, [token]);

    if (!user) {
        return (   
            <>
                <HamsterSpiner/>  
                <p>Estamos buscando tus pedidos</p>
            </>
        );  
    }

    const orders = user.Orders;
    const API_URL = "http://localhost:3002/";

    return (
        <div className="ordersContainer">
            {orders.map((order, i) => (
                <div key={i} className="orderCard">
                    <div className='orderInfo'>
                        <div>Order {order.id}</div>
                        <div>Status: {order.status}</div>
                    {/* <div>Delivery: {order.delivery}</div> */}
                    </div>
                    <div className="productContainer">
                        {order.Products.map((product, j) => {
                            const img = product.filePath;
                            return (
                                <div className="product" key={j}>
                                    <img src={API_URL + img} alt={product.name} />
                                    <p>{product.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Orders;
