import "./Headers.scss"
import  { useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext/UserState"
import { ProductsContext } from "../../context/ProductsContext/ProductsState"
import logo from "../../assets/logo/logo.png";

const Headers = () => {



  const {token, logout } = useContext(UserContext)
  const {cart} = useContext(ProductsContext)
  const navigate = useNavigate();


 useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])


  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
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