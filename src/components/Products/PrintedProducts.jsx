import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import "./PrintedProducts.scss";
import HamsterSpiner from '../Spinner/HamsterSpiner/HamsterSpiner';
import { notification } from 'antd';


const PrintedProducts = () => {

const [data, setData] = useState("")

const API_URL = "http://localhost:3002/";
const { products, addCart, cart, addLike, getProductByName, orderAsce,orderDesc, getProductByPrice,likes } = useContext(ProductsContext);
const [productInCart, setProductInCart] = useState({});
const [productInLikes, setProductInLikes] = useState({});


if (products.length <= 0) {
    return <HamsterSpiner />;
    }


    const handleAddToCart = (product) => {
        const index = cart.findIndex(item => item.name === product.name);
        const isInArray = index !== -1;
    
        if (!isInArray) {
            addCart({ ...product, units: 1 });
        }else{
            notification.success({
                message: 'Product already in shopping cart'
    });
        }
    
            setProductInCart(prevState => ({
            ...prevState,
            [product.name]: isInArray
        }));
    };

    const handleAddToLikes = (product) => {
        const index = likes.findIndex(item => item.name === product.name);
        const isInArray = index !== -1;
    
        if (!isInArray) {
            addLike({ ...product, units: 1 });
        }else{
            notification.success({
                message: 'Product already liked'
    });
        }
    
            setProductInLikes(prevState => ({
            ...prevState,
            [product.name]: isInArray
        }));
    };


    return (
        <>
        <div className="filtersDivPrintedProducts">
            <div className="inputSearchDiv">
                <div className='searchBarDiv'>

                <div className="input-container">
                    
                    <div>
                        <input onChange={(e)=>setData(e.target.value)} className="inputSearch" type="text" name="text" placeholder="search..."/>
                    </div>
                    <div className="icon"> 
                        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </div>
                </div>
                <div>
                    <button className="filterButtonsBtn" onClick={()=>getProductByName(data)}> Find </button>
                    <button className="filterButtonsBtn" onClick={()=>getProductByPrice(data)}> Num </button>
                </div>
                </div>

                <div className="filterButtonsContainer">
                    <button className="filterButtonsBtn" onClick={()=>orderDesc()}>Desc</button>
                    <button className="filterButtonsBtn" onClick={()=>orderAsce()}>Asc</button>
                    <button className="filterButtonsBtn">All </button>
                </div>
            </div>
        </div>
        <div className='printedProductContainer'>
            {products.map((product, i) => {
                const img = product.filePath;
                const isInCart = productInCart[product.name];
                const isInLikes = productInLikes[product.name];

                return (
                    <div className="printedProductCard" key={i}>
                        <div className="printedProductImg">
                            <img className="imgPrintedProduct" src={API_URL + img} alt={product.name} />
                        </div>
                        <div className="printedProductInfo">
                            <p className="printedProductTitle">{product.name}</p>
                        </div>
                        <div className="printedProductFfooter">
                            <span className="printedProductTitle">{product.price}.00€</span>
                            <button  className={`cartBtn ${isInLikes ? "hidden" : ""}`}
                                onClick={() => handleAddToLikes(product)}
                                disabled={isInLikes}>
                                <svg height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H24V24H0z" fill="none"></path>
                                    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
                                </svg>
                            </button>
                            
                            <button
                                className={`cartBtn ${isInCart ? "hidden" : ""}`}
                                onClick={() => handleAddToCart(product)}
                                disabled={isInCart}
                            >
                                <svg className="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
                                    <title>icon-cart</title>
                                    <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
        </>
    );
}

export default PrintedProducts;
