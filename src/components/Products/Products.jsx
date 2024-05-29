
import React, { useContext, useEffect } from 'react'
import { ProductsContext } from "../../context/ProductsContext/ProductsState"
import PrintedProducts from './PrintedProducts'

const Products = () => {
  const { getProducts, products, addCart, cart} =useContext(ProductsContext)

  


  useEffect(()=>{
    getProducts();
  },[])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <PrintedProducts/>
  )
}

export default Products