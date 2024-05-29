import "./Headers.scss"
import  { useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext/UserState"
import { ProductsContext } from "../../context/ProductsContext/ProductsState"

const Headers = () => {

  const {token, logout } = useContext(UserContext)
  const {cart} = useContext(ProductsContext)
  const navigate = useNavigate();





  return (
    <nav>
      <div className="logo">
        <img src="" alt="Logo" />
      </div>
      <div>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/products">Products</Link></span>
        
        
        {token ? (<> 
          <span><Link to="/profile">Profile</Link></span>
          <button
            onClick={() => {
              console.log("holi tuu")
              logout();
              navigate("/register");
            }}
          >
            Logout
          </button>
          <span><Link to="/orders">Orders</Link></span>
          <span><Link to="/cart">Cart</Link></span>
        </>):(
          <span><Link to="/register">Log in</Link></span>
        )}
      
      </div>
    </nav>
    
  )
}

export default Headers