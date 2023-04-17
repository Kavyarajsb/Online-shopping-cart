import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../services/config.json";
import { Button, message, Modal } from "antd";
import "./Product.css";

function Products() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `/${config.api_base_url}/api/products`
        );
        const data = response.data;
        setCartItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItems();
  }, []);

  const addToCart = async (item) => {
    try {
      const response = await axios.post(
        `${config.api_base_url}/cart/items/add`,
        item
      );
      console.log(response.data);
      Modal.success({
        content: `${item.name} has been added to cart!`,
        onOk: () => window.location.reload(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card-container">
      {cartItems.map((item) => (
        <div className="card" key={item.id}>
          <img
            style={{ marginLeft: "20%", marginTop: "10%", marginRight: "20%" }}
            src="https://img101.urbanic.com/v1/goods-pic/bfda5444407546d9b1a9ff68a3622041UR_w1000_q90.webp"
            alt="product"
          />
          <div className="card-content" style={{ alignContent: "center" }}>
            <h3>{item.name}</h3>
            <p>₹{item.price}/-</p>
            <p>{item.description}</p>
            <br />
            <button className="bttn" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
