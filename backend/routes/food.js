// Import required modules
const express = require('express');
const router = express.Router();

// Import controllers
const { getAllFoodItems, getOneFoodItem }  = require('../controllers/food/getItem');
const createFoods = require('../controllers/food/create');
const deleteItem = require('../controllers/food/remove');
const editFoodItem = require('../controllers/food/update');


// Define routes
router.get('/api/create', createFoods);
router.get('/api/getFoods', getAllFoodItems);
router.get('/api/getItem', getOneFoodItem);
router.put('/api/update', editFoodItem);
router.delete('/api/delete', deleteItem);



router.route("/foods").get(getProduct)
router.route("/foods/:id").get(getSingleProduct)


// Admin Routes 
router.route("/admin/product/new").post(createProduct)
router.route("/admin/product/:id").put(editProduct)
router.route("/admin/product/:id").delete(deleteProduct)







// Export router
module.exports = router;