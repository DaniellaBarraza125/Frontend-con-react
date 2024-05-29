import { UserContext } from "../../context/UserContext/UserState";
import Cart from "../Cart/Cart";
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
    <div className="panel">
                        <h3>
                            <img className="img" src="https://bootdey.com/img/Content/user_3.jpg" alt="User" />
                            {user.name}
                        </h3>
         
                    </div>

    </div>
  )
}

export default Profile