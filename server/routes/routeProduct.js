const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  addProduct,
} = require('../controllers/controllerProduct');

router.get('/products', getAllProducts);
router.post('/products', addProduct);


module.exports = router;
