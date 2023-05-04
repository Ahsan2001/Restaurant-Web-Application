const Foods = require("../../models/foods")


const createFoods = async (req, res) => {
    try {
      const item = await Foods.create(req.body);
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
  
module.exports =  createFoods;
  

