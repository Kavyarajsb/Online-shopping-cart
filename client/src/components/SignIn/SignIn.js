import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../Redux/signinAction";
import { Modal } from "antd";
import * as antd from "antd";
import { Outlet, useNavigate} from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async () => {
  //   const result = await dispatch(loginRequest({ username, password }));
  //   if (result.success) {
  //     Modal.success({
  //       content: `User has been successfully logged in!`,
  //       onOk: () => {
  //         navigate("/home");
  //       },
  //     });
  //   } else {
  //     Modal.error({
  //       content: `Something went wrong. Please try again.`,
  //     });
  //   }
  // };

  const login = () => {
    dispatch(loginRequest(username, password , navigate));
  };


  return (
    <div className="login-page">
      <div className="login-box">
        <antd.Form
          name="login-form"
          initialValues={{ remember: true }}
        >
          <p className="form-title">Welcome back !</p>
          <p>Login Here</p>
          <antd.Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <antd.Input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </antd.Form.Item>

          <antd.Form.Item
            name="text"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <antd.Input.Password
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </antd.Form.Item>

          <antd.Form.Item name="remember" valuePropName="checked">
            <antd.Checkbox>Remember me</antd.Checkbox>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </antd.Form.Item>

          <antd.Form.Item>
            <antd.Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={login}
            >
              LOGIN
            </antd.Button>
          </antd.Form.Item>
        </antd.Form>
      </div>
    </div>
  );
};

export default SignIn;
