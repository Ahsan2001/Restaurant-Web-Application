const Foods = require('../../models/foods');

const getAllFoodItems = async (req, res, next) => {
  try {
    const items = await Foods.find();

    res.status(200).json({
      success: true,
      count: items.length,
      items
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch food items',
      error: err.message
    });
  }
};

const getOneFoodItem = async (req, res, next) => {
  try {
    const item = await Foods.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Food item not found'
      });
    }

    res.status(200).json({
      success: true,
      item
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch food item',
      error: err.message
    });
  }
};

module.exports = {
  getAllFoodItems,
  getOneFoodItem
};
