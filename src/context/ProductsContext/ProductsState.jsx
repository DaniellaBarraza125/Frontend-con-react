import React, { createContext, useReducer } from "react"
import axios from "axios"
import ProducstReducer from "./ProductsReducer"

const API_URL = "http://localhost:3002/products"

const cart = JSON.parse(localStorage.getItem("cart")) || [] ;

const initialState = {
    products: [],
    cart: cart
};

export const ProductsContext = createContext(initialState)

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProducstReducer, initialState)

    const getProducts = async () => {
        const res = await axios.get(API_URL)
        dispatch({
            type: "GET_PRODUCTS",
            payload:res.data
        })
    }
    const addCart = (product) => {
        dispatch({
            type: "ADD_CART",
            payload: product,
        });
    }
    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
        });
    };
    
    return (
        <ProductsContext.Provider value={{products: state.products,cart: state.cart,
            getProducts,addCart,clearCart
            
        }}>
            {children}
        </ProductsContext.Provider>
    )
}