module.exports = {
  loginUser: require("./loginUser.controller"),
  getUserDetails: require("./getUserDetails.controller"),
  
  addUser: require('./addUser.controller'),
  addOrder: require('./addOrder.controller'),
  addProduct: require('./addProduct.controller'),

  getAllUsers: require('./getAllUsers.controller'),
  getAllOrders: require('./getAllOrders.controller'),
  getAllProducts: require('./getAllProducts.controller'),

  updateUser: require('./updateUser.controller'),
  updateOrder: require('./updateOrder.controller'),
  updateProduct: require('./updateProduct.controller'),

  getOneProductByID: require('./getOneProductByID.controller'),
  deleteOneProductByID: require('./deleteOneProductByID.controller'),
  deleteOneUserByID: require(`./deleteOneUserByID.controller`)
}
