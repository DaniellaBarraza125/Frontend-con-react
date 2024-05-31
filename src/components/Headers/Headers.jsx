import "./Headers.scss"
import  { useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext/UserState"
import { ProductsContext } from "../../context/ProductsContext/ProductsState"
import logo from "../../assets/logo/logo.png";
import { Badge } from 'antd';


const Headers = () => {



  const {token, logout } = useContext(UserContext)
  const {cart} = useContext(ProductsContext)
  const navigate = useNavigate();


 useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])


  return (
    <nav className="navDiv">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <button className="btn"><Link to="/">Home</Link></button>
        <button className="btn" ><Link to="/products">Products</Link></button>
        
        
        {token ? (<> 
          <div className="containerBtn">
          <button className="btn"><Link to="/profile">Profile</Link></button>
          </div>
            
          
          <button className="btn"><Link to="/orders">Orders</Link></button>
          <button className="btn"><Link to="/cart"><Badge count={cart.length} size="large">Cart</Badge></Link></button>
          <button className="btn"
            onClick={() => {
              logout();
              navigate("/register");
            }}
          >
            Logout
          </button>
        </>):(
          <button className="btn"><Link to="/register">Log in</Link></button>
        )}
      
      </div>
    </nav>
    
  )
}

export default Headers