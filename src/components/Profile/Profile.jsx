import { UserContext } from "../../context/UserContext/UserState";
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
    <div>{user.name}</div>
  )
}

export default Profile