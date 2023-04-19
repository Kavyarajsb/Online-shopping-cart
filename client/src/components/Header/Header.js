import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Header.css";
import config from "../../services/config.json";
import AppCart from "../AppCart/AppCart";
import { HomeFilled } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function AppHeader() {
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`${config.api_base_url}/cart/items`);
        setCartItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItems();
  }, []);
  return (
    <div className="container1">
      <div className="Wrapper">
        <div className="left">
          <div className="logo">
            <h1>Clothing Store</h1>
          </div>
        </div>
        <div className="right">
          <Menu className="appMenu" mode="horizontal">
            <Menu.Item key="home" icon={<HomeFilled />}>
              <Link to="/home"></Link>
            </Menu.Item>
          </Menu>
          <div className="menuitems">
            <AppCart/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
