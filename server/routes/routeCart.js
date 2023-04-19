const express = require("express");
const router = express.Router();
const {
  getCart,
  getCartItems,
  addItem,
  deleteItem,
  updateItem
} = require("../controllers/controllerCart");

// GET /cart/:cart_id/items
router.get("/items", getCartItems);

// POST /cart/:cart_id/items
router.post("/items/add", addItem);

// // PUT /cart/:cart_id/items/increase
// router.put("/increase/:product_id", increaseItemQuantity);

// // PUT /cart/:cart_id/items/decrease
// router.put("/decrease/:product_id", decreaseItemQuantity);

router.put('/update/:product_id', updateItem)

// DELETE /cart/:cart_id/items
router.delete("/:product_id/delete", deleteItem);


module.exports = router;
