import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'

const PrintedProducts = () => {

    const { products, getProducts} = useContext(ProductsContext)
    useEffect(()=>{
        getProducts();
    },[])
return (
    <div>PrintedProducts
        {products.map((product=>{
            return(
                <div>{product.name}</div>
            )
        }))}
    </div>
)
}

export default PrintedProducts