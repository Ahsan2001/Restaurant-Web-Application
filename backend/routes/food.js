// Import required modules
const express = require('express');
const router = express.Router();

// Import controllers

const { getAllFoodItems, getOneFoodItem }  = require('../controllers/food/getItem');
const {createFoods, upload} = require('../controllers/food/create');
const {editFoodItem, uploadUpdated} = require('../controllers/food/update');
const deleteFoodItem = require('../controllers/food/remove');

// User routes
router.route("/api/foods").get(getAllFoodItems);
router.route("/api/foods/:id").get(getOneFoodItem);


// Admin Routes 

router.route("/api/admin/food/add").post(upload.single('image'), createFoods);
router.route("/api/admin/food/edit/:id").put(uploadUpdated.single('image'), editFoodItem);
router.route("/api/admin/food/delete/:id").delete(deleteFoodItem);



// Export router
module.exports = router;