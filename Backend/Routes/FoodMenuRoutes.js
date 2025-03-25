const express = require('express');
const router = express.Router();
const { createProduct, displayProduct, deleteProduct, productCategory, updateProduct } = require("../Controllers/FoodMenuController")
// const { isAuthenticated, isAdmin } = require("../middleware/auth");


router.post('/product/create', createProduct);
router.get('/products/all', displayProduct);
router.delete('/product/delete/:id', deleteProduct);
router.put('/product/update/:id',updateProduct);
router.get('/product/categories', productCategory);





module.exports = router;