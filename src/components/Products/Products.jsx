import "./Products.scss"
import React, { useContext, useEffect } from 'react'
import { ProductsContext } from "../../context/ProductsContext/ProductsState"

const Products = () => {
  const { products, getProducts} =useContext(ProductsContext)

  useEffect(()=>{
    getProducts();
  },[])
  console.log(products);

  return (
    <div>Products</div>
  )
}

export default Products