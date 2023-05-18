// Import required modules
const express = require('express');
const router = express.Router();

// Import controllers
const { getAllOrderItems, getOneOrderItem }  = require('../controllers/order/getAll');
const createOrders = require('../controllers/order/create');
const editorderItem = require('../controllers/order/update');
const deleteItem = require('../controllers/order/remove');

// Define routes
router.route("/orders").get(getAllOrderItems)
router.route("/order/:id").get(getOneOrderItem)
router.route("/order/add").post(createOrders)
router.route("/order/:id").put(editorderItem)
router.route("/order/:id").delete(deleteItem)

// Export router
module.exports = router;