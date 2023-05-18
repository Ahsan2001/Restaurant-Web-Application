// Import required modules
const express = require('express');
const router = express.Router();

// Import controllers
const { getAllFoodItems, getOneFoodItem }  = require('../controllers/food/getItem');
const createFoods = require('../controllers/food/create');
const editFoodItem = require('../controllers/food/update');
const deleteItem = require('../controllers/food/remove');

// Define routes
router.route("/foods").get(getAllFoodItems)
router.route("/foods/:id").get(getOneFoodItem)


// Admin Routes 
router.route("/admin/item/add").post(createFoods)
router.route("/admin/item/:id").put(editFoodItem)
router.route("/admin/item/:id").delete(deleteItem)

// Export router
module.exports = router;