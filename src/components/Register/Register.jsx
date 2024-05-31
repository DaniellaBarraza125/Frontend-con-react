import "../Login/Login.scss";
import React, { useContext, useState } from 'react';
import Login from "../Login/Login";
import { UserContext } from '../../context/UserContext/UserState';
import { Form, Input, Button, notification } from 'antd';

const Register = () => {
  const { signup } = useContext(UserContext);

  const [form] = Form.useForm();

  const initialValue = {
    name: "",
    email: "",
    password: "",
  };

  const handleOnSubmit = async (values) => {
    const res = await signup(values);
    if (res) {
      form.resetFields();
      notification.success({
        message: 'User created'
      });
      showLogin();
    } else {
      console.log(res);
      notification.error({
        message: 'Error',
        description: 'There was an error creating the user.'
      });
    }
  };

  const flip = document.getElementById("flip");

  const showLogin = () => {
    flip.checked = false;
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
                <Form
                  form={form}
                  onFinish={handleOnSubmit}
                  initialValues={initialValue}
                  className="flip-card__form"
                >
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                  >
                    <Input placeholder="Name" className="flip-card__input" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: 'Please input your email!' },
                      { type: 'email', message: 'The input is not a valid email!' }
                    ]}
                  >
                    <Input placeholder="Email" className="flip-card__input" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      { required: true, message: 'Please input your password!' },
                      { min: 6, message: 'Password must be at least 6 characters!' }
                    ]}
                  >
                    <Input.Password placeholder="Password" className="flip-card__input" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="flip-card__btn">
                      Confirm!
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
