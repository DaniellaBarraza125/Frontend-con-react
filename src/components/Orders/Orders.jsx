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
    const orderedProducts = orders[0].Products;
    
    
    return (
    <div className="container">
            {console.log(user)}
    </div>
    )
}

export default Orders