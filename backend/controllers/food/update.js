const Foods = require("../../models/foods")


const editFoodItem = async (req, res ) => {
  try {
    const item = await Foods.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    const updatedItem = await Foods.findByIdAndUpdate(req.params.id, req.body, {
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

module.exports = editFoodItem;

