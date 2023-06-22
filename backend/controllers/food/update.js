const Foods = require("../../models/foods");
const multer = require('multer');
const express = require('express');
const router = express.Router();
const path = require('path');

// Set up the storage configuration for multer
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    // Generate a unique name for the uploaded file
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  }
});

// Create a multer instance with the storage configuration
const uploadUpdated = multer({ storage });

const editFoodItem = async (req, res ) => {
  try {
    const item = await Foods.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    const newData = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.file.filename
    } 

    const updatedItem = await Foods.findByIdAndUpdate(req.params.id, newData, {
      new: true, runValidators: true
    });

    res.status(200).json({
      success: true, message: 'Food item updated successfully',
      item: updatedItem
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false, message: 'Failed to update food item',
      error: err.message
    });
  }
};

module.exports = { editFoodItem, uploadUpdated };

