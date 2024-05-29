import React from 'react';
import Login from "../Login/Login";
import "./Register.scss";

const Register = () => {
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
                <form action="" className="flip-card__form">
                  <input type="text" placeholder="Name" name="name" className="flip-card__input" />
                  <input type="email" placeholder="Email" name="email" className="flip-card__input" />
                  <input type="password" placeholder="Password" name="password" className="flip-card__input" />
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
