import { UserContext } from "../../context/UserContext/UserState";
import Cart from "../Cart/Cart";
import Orders from "../Orders/Orders";
import HamsterSpiner from "../Spinner/HamsterSpiner/HamsterSpiner";
import WishList from "../WishList/WishList";
import "./Profile.scss"
import React, { useContext, useEffect } from 'react'

const Profile = () => {
  const { getUserInfo, user, token } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, [token]);
  
  if (!user) {
    return (
    <>
    <HamsterSpiner/>
    <div>Esperanos un poco</div>;
    </>)
  }
  return (
<div className="containerProfile">
  <div className="profile">
    <div className="sections">
      <div className="profileSection">
        <Orders/>
      </div>
      <div className="profileSection">
          <Cart/>
        </div>
      <div className="profileSection"><WishList/></div>
    </div>
  </div>
</div>

  )
}

export default Profile