import "./Headers.scss"
import React from 'react'
import { Link } from "react-router-dom"

const Headers = () => {
  return (
    <nav>
      <div className="logo">
        <img src="" alt="Logo" />
      </div>
      <div>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/products">Products</Link></span>
        <span><Link to="/cart">Cart</Link></span>
        <span><Link to="/register">Sign in</Link></span>
        <span><Link to="/profile">Profile</Link></span>
      </div>
    </nav>
    
  )
}

export default Headers