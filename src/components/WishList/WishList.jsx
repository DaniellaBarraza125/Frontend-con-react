import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import HamsterSpiner from '../Spinner/HamsterSpiner/HamsterSpiner';
import './WhisList.scss';

const API_URL = "http://localhost:3002/";
const WishList = () => {

    const { likes, removeLike } = useContext(ProductsContext);
    



    if (likes.length <= 0) {
        return (
            <div className="spinerContainer">
                <HamsterSpiner/>
                <div className="messageContainer">
                <p>Aun no tienes likes</p>
                <p>corre a agregar!</p>
                </div>
            </div>
            );
        }

        return (
            <div className='printedProductContainer'>
                {likes.map((product, i) => {
                    const img = product.filePath;

                    return (
                        <div className="printedProductCard" key={i}>
                            <div className="printedProductImg">
                                <img className="imgPrintedProduct" src={API_URL + img} alt={product.name} />
                            </div>
                            <div className="likedProductInfo">
                                <p className="likedProductTitle">{product.name}</p>
                                <button className="button" onClick={()=>removeLike(product)}>
                                    <span className="X"></span>
                                    <span className="Y"></span>
                                    <div className="close">Close</div>
                                </button>
                                
                            </div>
                        </div>
                    );
                })}
            </div>
        );
}

export default WishList