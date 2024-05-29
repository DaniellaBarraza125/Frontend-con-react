import '../Register/Register.scss';
import { UserContext } from '../../context/UserContext/UserState';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate()
  const {login} =useContext(UserContext)

  const initialValue = {
    email: "",
    password: " ",
  }
  const [data, setData] = useState(initialValue);


const handleInputChange = (e) => {
  setData({
    ...data, 
    [e.target.name]: e.target.value,
  });
};
//preguntar cosas 
const handleOnSubmit = (e)=>{
  e.preventDefault();
  const ddata= data
  login(ddata)
  setData(initialValue);
  navigate("/profile")


}

  return (

    <div className="flip-card__front">
    <div className="title">Log in</div>
    <form onSubmit={handleOnSubmit} className="flip-card__form">
      <input type="email" placeholder="Email" name="email" className="flip-card__input" onChange={handleInputChange} />
      <input type="password" placeholder="Password" name="password" className="flip-card__input" onChange={handleInputChange}/>
      <button className="flip-card__btn">Let's go!</button>
    </form>
  </div>

  )
}

export default Login