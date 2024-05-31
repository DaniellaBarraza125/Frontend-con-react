import "./Login.scss";
import { UserContext } from '../../context/UserContext/UserState';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, notification } from 'antd';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleOnSubmit = async (values) => {
    const res = await login(values);
    console.log(res);
    if (res) {
      notification.success({
        message: 'Welcome'
      });
      navigate("/profile");
    } else {
      console.log(res);
      notification.error({
        message: 'Error',
        description: 'Invalid email or password'
      });
    }
  };

  return (
    <div className="flip-card__front">
      <div className="title">Log in</div>
      <Form
        onFinish={handleOnSubmit}
        initialValues={{ email: "", password: "" }}
        className="flip-card__form"
      >
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
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" className="flip-card__input" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="flip-card__btn">
            Let's go!
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
