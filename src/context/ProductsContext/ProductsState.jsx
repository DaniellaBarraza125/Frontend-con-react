import React, { createContext, useReducer } from "react"
import axios from "axios"
import ProducstReducer from "./ProductsReducer"

const API_URL = "http://localhost:3002/products"

const cart = JSON.parse(localStorage.getItem("cart")) || [] ;
const likes = JSON.parse(localStorage.getItem("likes")) || [] ;


const initialState = {
    products: [],
    cart: cart,
    likes
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
    const setCart = (cartItem) =>{
        dispatch({
            type: "SET_CART",
            payload: cartItem

        })
    }
    const addLike = (product) => {
        dispatch({
            type: "ADD_LIKE",
            payload: product,
        });
    };
    const removeLike = (product) => {
        const newLikes = state.likes.filter(item => item.name !== product.name);

        localStorage.setItem("likes", JSON.stringify(newLikes))
            
        
        dispatch({
            type: "REMOVE_LIKE",
            payload:newLikes
            });
        };
    const getProductByName = async (data)=>{
        try {
            const res = await axios.get(API_URL + "/"+ data );
        
            dispatch({
                type: "PRODUCT_BY_NAME",
                payload:res.data
                })
                return res
            } catch (error) {
                console.error(error)
            }
        }
        const getProductByPrice = async (data)=>{
            try {
                const res = await axios.get(API_URL + "/price/"+ data );
            
                dispatch({
                    type: "GET_BY_PRICE",
                    payload:res.data
                    })
                    return res
                } catch (error) {
                    console.error(error)
                }
            }
        const orderAsce = async ()=>{
            try {
                const res = await axios.get(API_URL + "/orderAsc" );
            
                dispatch({
                    type: "ORDER_ASCEN",
                    payload:res.data
                    })
                    return res               
                } catch (error) {
                    console.error(error)
                }
            }
            const orderDesc = async ()=>{
                try {
                    const res = await axios.get(API_URL + "/orderDesc" );
                
                    dispatch({
                        type: "ORDER_DESC",
                        payload:res.data
                        })
                        return res
                    } catch (error) {
                        console.error(error)
                    }
                }
                
                
    return (
        <ProductsContext.Provider value={{products: state.products,cart: state.cart,likes: state.likes,
            getProducts,addCart,clearCart,setCart,getProductByName,addLike,removeLike,orderAsce,orderDesc,getProductByPrice           
        }}>
            {children}
        </ProductsContext.Provider>
    )
}