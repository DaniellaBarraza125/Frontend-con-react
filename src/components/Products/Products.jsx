
import React, { useContext, useEffect } from 'react'
import { ProductsContext } from "../../context/ProductsContext/ProductsState"
import PrintedProducts from './PrintedProducts'

const Products = () => {
  const { getProducts} =useContext(ProductsContext)

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <PrintedProducts/>
  )
}

export default Products