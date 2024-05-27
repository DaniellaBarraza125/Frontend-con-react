import React, { createContext, useReducer } from "react"
import axios from "axios"
import ProducstReducer from "./ProductsReducer"

const API_URL = "http://localhost:3002/products"

const initialState = {
    products:[]
}

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
    return (
        <ProductsContext.Provider value={{products: state.products,
            getProducts,
            
        }}>
            {children}
        </ProductsContext.Provider>
    )
}