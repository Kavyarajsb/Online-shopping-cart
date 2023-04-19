import React from 'react'
import "../components/Header/Header";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import AppFooter from '../components/Footer/Footer';
import image from '../Images/Main.png'




 function Main() {
  return (
    <div className="container1">
      <div className="Wrapper">
        <div className="left">
          <div className="logo">
            <h1>Clothing Store</h1>
          </div>
        </div>
        <div className="right">
          <Menu className="appMenu1" mode="horizontal">
            <Menu.Item key="signin">
              <Link to="/signin">Sign In</Link>
            </Menu.Item>
            <Menu.Item key="signup">
              <Link to="">Sign Up</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
      <div className='mainbg'>
        <img src={image} alt="" />
    </div>
    <AppFooter/>
    </div>
  )
}

export default Main;