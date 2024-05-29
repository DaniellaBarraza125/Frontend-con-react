import { UserContext } from "../../context/UserContext/UserState";
import Cart from "../Cart/Cart";
import Orders from "../Orders/Orders";
import "./Profile.scss"
import React, { useContext, useEffect } from 'react'

const Profile = () => {
  const { getUserInfo, user, token } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, [token]);
  
console.log(user);
  if (!user) {
    return <div>Esperanos un poco</div>;
  }
  return (
<div className="containerProfile">
  <div className="profile">
    <div className="userInfo">
      <div className="profileImgContainer">
        <img className="img" src="https://bootdey.com/img/Content/user_3.jpg" alt="User" />
      </div>
      <div className="info">
        <h3>Nombre: {user.name}</h3>
        <p>Correo electronico:</p>
        <p>{user.email}</p>
      </div>
    </div>
    <div className="sections">
      <div className="profileSection">
        <div>Tus pedidos</div>
        <Orders/>
      </div>
      <div className="profileSection">
        <div>Tu carrito</div>
        <Cart/>
        </div>
      <div className="profileSection">soy likes</div>
    </div>
  </div>
</div>

  )
}

export default Profile