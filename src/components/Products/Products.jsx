
import React, { useContext, useEffect } from 'react'
import { ProductsContext } from "../../context/ProductsContext/ProductsState"
import PrintedProducts from './PrintedProducts'

const Products = () => {
  const { getProducts, cart, likes} =useContext(ProductsContext)

  


  useEffect(()=>{
    getProducts();
  },[])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  
useEffect(() => {
  localStorage.setItem("likes", JSON.stringify(likes));
}, [likes]);

  return (
    <PrintedProducts/>
  )
}

export default Products