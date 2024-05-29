import React, { useContext, useState } from 'react';
import Login from "../Login/Login";
import "./Register.scss";
import { UserContext } from '../../context/UserContext/UserState';
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const { signup, res } = useContext(UserContext)
  const navigate = useNavigate()
  const initialValue = {
    name:"",
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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      const response = await signup(data); 
        setData(initialValue);
        navigate("/register");
 
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <div className="wrapper">
        <div className="card-switch">
          <label className="switch">
            <input className="toggle" type="checkbox" />
            <span className="slider"></span>
            <span className="card-side"></span>
            <div className="flip-card__inner">
                <Login/>
              <div className="flip-card__back">
                <div className="title">Sign up</div>
                <form onSubmit={handleOnSubmit} className="flip-card__form">
                  <input onChange={handleInputChange}  type="text" placeholder="Name" name="name" className="flip-card__input" />
                  <input onChange={handleInputChange}  type="email" placeholder="Email" name="email" className="flip-card__input" />
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
