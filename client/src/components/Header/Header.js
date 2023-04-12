import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Header.css";
import config from "../../services/config.json";
import AppCart from "../AppCart/AppCart";
import { HomeFilled } from "@ant-design/icons";
import { Menu } from "antd";

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
          {/* <Link to="/home"><div className="menuitems">HOME</div></Link>
          <div className="menuitems">REGISTER</div>
          <div className="menuitems">SIGN IN</div> */}
          <Menu
            className="appMenu"
            mode="horizontal"
            items={[
              {
                label: <HomeFilled />,
                key: "",
              },
              {
                label: "Sign In",
                key: "signin",
              },
              {
                label: "Sign Up",
                key: "signup",
              },
            ]}
          />
          <div className="menuitems">
            {/* <Link to="/cart">
          <StyledBadge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
            </Link> */}
            <AppCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
