import "./Home.scss"

import React from 'react'

const Home = () => {
  return (
    <div>
      <marquee behavior="scroll" direction="left">¡Bienvenidos a nuestra tienda online! ¡Ofertas exclusivas por tiempo limitado!</marquee>

<div className="container">
    <div className="promotions">
        <h2>Promociones</h2>
        <p>¡Aprovecha nuestras increíbles promociones de verano!</p>
        <p>Descuentos de hasta el 50% en productos seleccionados.</p>
    </div>

    <div className="products">
        <h2>Productos Destacados</h2>
        <div className="product">
            <img src="https://via.placeholder.com/150" alt="Producto 1"/>
            <div className="product-details">
                <h3>Producto 1</h3>
                <p>Descripción del producto 1. Excelente calidad y precio.</p>
            </div>
        </div>
        <div className="product">
            <img src="https://via.placeholder.com/150" alt="Producto 2"/>
            <div className="product-details">
                <h3>Producto 2</h3>
                <p>Descripción del producto 2. No te lo pierdas.</p>
            </div>
        </div>
    </div>

    <div className="reviews">
        <h2>Reseñas de Clientes</h2>
        <div className="review">
            <img src="https://via.placeholder.com/150" alt="Cliente 1"/>
            <div className="review-details">
                <h3>Cliente 1</h3>
                <p>Reseña del cliente 1. ¡Excelente servicio y producto!</p>
            </div>
        </div>
        <div className="review">
            <img src="https://via.placeholder.com/150" alt="Cliente 2"/>
            <div className="review-details">
                <h3>Cliente 2</h3>
                <p>Reseña del cliente 2. Muy satisfecho con la compra.</p>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Home