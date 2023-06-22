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
const upload = multer({ storage });

const createFoods = async (req, res) => {
  try {
    const item = await Foods.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.file.filename
    });

    res.status(201).json({
      success: true,
      message: "Food item created successfully",
      item
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to create food item",
      error: err.message
    });
  }
};

module.exports = { createFoods, upload };
