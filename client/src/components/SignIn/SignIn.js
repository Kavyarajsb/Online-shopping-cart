import React, { useEffect, useState } from "react";
import "./SignIn.css";
import * as antd from "antd";
import axios from "axios";
import config from "../../services/config.json";
import { Modal } from "antd";
import { Outlet, useNavigate} from "react-router-dom";




const SignIn = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  axios.defaults.withCredentials = true;

  const login = async () => {
    try {
      const response = await axios.post(`${config.api_base_url}/main/login`, {
        username: username,
        password: password,
      });
      console.log(response.data);
      if (response.data.success) {
        Modal.success({
          content: `User has been successfully logged in!`,
          onOk: () => {
            navigate("/home") 
          },
        });
      } else {
        Modal.error({
          content: `Something went wrong. Please try again.`,
        });
      }
    } catch (error) {
      Modal.error({
        content: `Invalid username or password. Please try again later.`,
      });
      console.error(error);
    }
  };

  // useEffect(()=>{
  //   axios.get(`${config.api_base_url}/main/login`)
  //   .then((response) =>{
  //     setLoginStatus(response.data.user[0].username);
  //   })
  // }, [])

  useEffect(() => {
    axios.get(`${config.api_base_url}/main/login`).then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);


  return (
    // <div className="login-page">
    //   <div className="login-box">
    //     <antd.Form
    //       name="login-form"
    //       initialValues={{ remember: true }}
          
    //     >
    //       <p className="form-title">Welcome back !</p>
    //       <p>Login Here</p>
    //       <antd.Form.Item
    //         name="username"
    //         rules={[{ required: true, message: "Please input your username!" }]}
    //       >
    //         <antd.Input
    //           placeholder="Username"
    //           onChange={(e) => {
    //             setUsername(e.target.value);
    //           }}
    //         />
    //       </antd.Form.Item>

    //       <antd.Form.Item
    //         name="text"
    //         rules={[{ required: true, message: "Please input your password!" }]}
    //       >
    //         <antd.Input.Password
    //           placeholder="Password"
    //           onChange={(e) => {
    //             setPassword(e.target.value);
    //           }}
    //         />
    //       </antd.Form.Item>

    //       <antd.Form.Item name="remember" valuePropName="checked">
    //         <antd.Checkbox>Remember me</antd.Checkbox>
    //         <a className="login-form-forgot" href="">
    //           Forgot password
    //         </a>
    //       </antd.Form.Item>

    //       <antd.Form.Item>
    //         <antd.Button
    //           type="primary"
    //           htmlType="submit"
    //           className="login-form-button"
    //           onClick={login}
    //         >
    //           LOGIN
    //         </antd.Button>
    //       </antd.Form.Item>
    //     </antd.Form>
    //   </div>
    // </div>
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
        <div>
          <antd.Input
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
      </antd.Form.Item>

      <antd.Form.Item
        name="text"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <div>
          <antd.Input.Password
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </antd.Form.Item>

      <antd.Form.Item name="remember" valuePropName="checked">
        <antd.Checkbox>Remember me</antd.Checkbox>
        <div>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </div>
      </antd.Form.Item>

      <antd.Form.Item>
        <div>
          <antd.Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={login}
          >
            LOGIN
          </antd.Button>
        </div>
      </antd.Form.Item>
    </antd.Form>
  </div>
</div>

  );
};

export default SignIn;
