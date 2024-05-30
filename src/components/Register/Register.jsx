import "./Register.scss";
import React, { useContext, useState, useEffect } from 'react';
import Login from "../Login/Login";
import { UserContext } from '../../context/UserContext/UserState';
import { notification } from 'antd';







const Register = () => {

  const { signup } = useContext(UserContext);

  const initialValue = {
    name: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialValue);




  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const flip = document.getElementById("flip");
  // const showSignUp = () => {
  //   flip.checked = true; 

  // }
  const showLogin = () => {
    flip.checked = false; 
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const res = await signup(data);
    if (res){
      setData(initialValue);
      notification.success({
        message: 'User created'
      });
      showLogin()
      }
      else{
        console.log(res);
      notification.error({
        message: 'error'
      })
      }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="card-switch">
          <label className="switch">
            <input id="flip" className="toggle" type="checkbox" />
            <span className="slider"></span>
            <span className="card-side"></span>
            <div className="flip-card__inner">
              <Login />
              <div className="flip-card__back">
                <div className="title">Sign up</div>
                <form onSubmit={handleOnSubmit} className="flip-card__form">
                  <input onChange={handleInputChange} type="text" placeholder="Name" name="name" className="flip-card__input" />
                  <input onChange={handleInputChange} type="email" placeholder="Email" name="email" className="flip-card__input" />
                  <input onChange={handleInputChange} type="password" placeholder="Password" name="password" className="flip-card__input" />
                  <button className="flip-card__btn">Confirm!</button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
