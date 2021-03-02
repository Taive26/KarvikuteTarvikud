const express = require('express');
const router = express.Router();

const {
  loginUser,
  getUserDetails,
  getAllUsers,
  addUser,
  updateUser,
  getAllOrders,
  addOrder,
  updateOrder,
  getAllProducts,
  addProduct,
  updateProduct, 
  getOneProductByID,
  deleteOneProductByID,
  deleteOneUserByID
} = require('./controllers');

const auth = require(`./auth`);

router.post(`/login`, loginUser);
router.get(`/me`, auth, getUserDetails);

router.get('/users', getAllUsers);
router.post('/user', addUser);
router.patch('/user/:id', updateUser);

router.get('/orders', getAllOrders);
router.post('/order', addOrder);
router.patch('/order/:id', updateOrder);

router.get('/products', getAllProducts);
router.post('/product', addProduct);
router.patch('/product/:id', updateProduct);


router.get('/product/:id', getOneProductByID);
router.delete('/product/:id', deleteOneProductByID);
router.delete('/user/:id', deleteOneUserByID);

module.exports = router;
