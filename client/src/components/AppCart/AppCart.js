import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import { Badge, Button, Drawer, InputNumber, Table } from "antd";
import "./AppCart.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../services/config.json";

function AppCart() {

  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  

  
  useEffect(() => {
    const fetchCartItems = async (items) => {
      try {
        const response = await axios.get(`${config.api_base_url}/cart/items`);
        setCartItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItems();
  }, []);


  const updateItem = async (product_id, action, newQuantity) => {
    try {
      const response = await axios.put(`${config.api_base_url}/cart/update/${product_id}`, {
        action,
        newQuantity,
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  


  const deleteItem = async (product_id) => {
    try {
      await axios.delete(`${config.api_base_url}/cart/${product_id}/delete`);
      setCartItems(
        cartItems.filter((item) => {
          return item.product_id !== product_id;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Badge
        onClick={() => {
          setCartDrawerOpen(true);
        }}
        count={cartItems.length}
        className="shoppingCartIcon"
      >
        <ShoppingCartOutlined />
      </Badge>
      <Drawer
        open={cartDrawerOpen}
        onClose={() => {
          setCartDrawerOpen(false);
        }}
        title="Your Cart"
        contentWrapperStyle={{ width: 400 }}
      >
        <Table
          pagination={false}
          columns={[
            {
              title: "Name",
              dataIndex: "name",
              render: (value) => {
                return <span>{value}</span>;
              },
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => {
                return <span>₹{value}</span>;
              },
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
              render: (value, record) => {
                return (
                  <InputNumber
                    min={1}
                    defaultValue={value}
                    onChange={(newQuantity) => {
                      const itemIndex = cartItems.findIndex((item) => item.product_id === record.product_id);
                      const updatedCartItems = [...cartItems];
                      updatedCartItems[itemIndex].quantity = newQuantity;
                      // updatedCartItems[itemIndex].total = updatedCartItems[itemIndex].price * newQuantity;
            
                      updateItem(record.product_id, "update", newQuantity);
                      setCartItems(updatedCartItems);
                    }} 
                  ></InputNumber>
                );
              },
            },
            {
              title: "",
              key: "action",
              render: (value) => (
                <DeleteOutlined
                onClick={() => deleteItem(value.product_id)}
                />
              ),
            },
          ]}
          dataSource={cartItems}
          
        />
        <br/>
        <div className="card-container"></div>
        <Button type="primary">Checkout Your Cart</Button>
      </Drawer>
    </div>
  );
}

export default AppCart;
